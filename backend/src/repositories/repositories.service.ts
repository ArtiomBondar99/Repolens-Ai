import { Injectable } from '@nestjs/common';
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
}