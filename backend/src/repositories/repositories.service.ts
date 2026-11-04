import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { GithubService } from '../github/github.service';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RepositoriesService {
  constructor(
    private readonly githubService: GithubService,
    private readonly prisma: PrismaService,
  ) { }

  async saveRepository(owner: string, repo: string) {
    const githubRepo = await this.githubService.getRepository(
      owner,
      repo,
    );

    return this.prisma.repository.upsert({
      where: {
        fullName: githubRepo.fullName,
      },
      update: {
        url: githubRepo.url,
        defaultBranch: githubRepo.defaultBranch,
      },
      create: {
        owner,
        name: githubRepo.name,
        fullName: githubRepo.fullName,
        url: githubRepo.url,
        defaultBranch: githubRepo.defaultBranch,
      },
    });
  }

  async findAll() {
    return this.prisma.repository.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async syncRepositoryFiles(repositoryId: string) {
    const repository = await this.prisma.repository.findUnique({
      where: {
        id: repositoryId,
      },
    });

    if (!repository) {
      throw new NotFoundException('Repository not found');
    }

    const tree = await this.githubService.getRepositoryTree(
      repository.owner,
      repository.name,
    );

    const files = tree.files;

    const result = await this.prisma.$transaction(async (tx) => {
      await tx.repositoryFile.deleteMany({
        where: {
          repositoryId: repository.id,
        },
      });

      await tx.repositoryFile.createMany({
        data: files.map((file) => ({
          repositoryId: repository.id,
          path: file.path,
          sha: file.sha,
          size: file.size,
        })),
      });

      return tx.repositoryFile.count({
        where: {
          repositoryId: repository.id,
        },
      });
    });

    return {
      repository: repository.fullName,
      syncedFiles: result,
    };
  }

  async getFileContent(repositoryId: string, fileId: string) {
    const file = await this.prisma.repositoryFile.findFirst({
      where: {
        id: fileId,
        repositoryId,
      },
      include: {
        repository: true,
      },
    });

    if (!file) {
      throw new NotFoundException('File not found');
    }

    const blob = await this.githubService.getFileContent(
      file.repository.owner,
      file.repository.name,
      file.sha,
    );

    return {
      repository: file.repository.fullName,
      path: file.path,
      sha: blob.sha,
      size: blob.size,
      content: blob.content,
    };
  }

  async getRepositoryFiles(repositoryId: string) {
    const repository = await this.prisma.repository.findUnique({
      where: {
        id: repositoryId,
      },
    });

    if (!repository) {
      throw new NotFoundException('Repository not found');
    }

    return this.prisma.repositoryFile.findMany({
      where: {
        repositoryId: repositoryId,
      },
      select: {
        id: true,
        path: true,
        sha: true,
        size: true,
      },
      orderBy: {
        path: 'asc',
      },
      take: 100,
    });
  }

  async searchCode(repositoryId: string, query: string) {
    const searchTerm = query?.trim();

    if (!searchTerm || searchTerm.length > 100) {
      throw new BadRequestException(
        'Search query must contain 1 to 100 characters',
      );
    }

    const repository = await this.prisma.repository.findUnique({
      where: { id: repositoryId },
      select: { id: true },
    });

    if (!repository) {
      throw new NotFoundException('Repository not found');
    }

    const chunks = await this.prisma.codeChunk.findMany({
      where: {
        repositoryFile: {
          repositoryId,
        },
        content: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      },
      select: {
        id: true,
        chunkIndex: true,
        content: true,
        startLine: true,
        endLine: true,
        repositoryFile: {
          select: {
            path: true,
          },
        },
      },
      orderBy: [
        { repositoryFile: { path: 'asc' } },
        { chunkIndex: 'asc' },
      ],
      take: 20,
    });

    return {
      query: searchTerm,
      totalReturned: chunks.length,
      results: chunks.map((chunk) => ({
        chunkId: chunk.id,
        path: chunk.repositoryFile.path,
        startLine: chunk.startLine,
        endLine: chunk.endLine,
        content: chunk.content,
      })),
    };
  }
}