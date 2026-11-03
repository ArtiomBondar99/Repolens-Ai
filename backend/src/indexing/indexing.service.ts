import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RepositoriesService } from '../repositories/repositories.service';
import { CodeChunkerService } from './code-chunker/code-chunker.service';

@Injectable()
export class IndexingService {
  constructor(
    private readonly repositoriesService: RepositoriesService,
    private readonly codeChunker: CodeChunkerService,
    private readonly prisma: PrismaService,
  ) { }

  async indexFile(repositoryId: string, fileId: string) {
    const file = await this.repositoriesService.getFileContent(
      repositoryId,
      fileId,
    );

    const chunks = this.codeChunker.chunk(file.content);

    const savedCount = await this.prisma.$transaction(async (tx) => {
      await tx.codeChunk.deleteMany({
        where: {
          repositoryFileId: fileId,
        },
      });

      if (chunks.length > 0) {
        await tx.codeChunk.createMany({
          data: chunks.map((chunk, index) => ({
            repositoryFileId: fileId,
            chunkIndex: index,
            content: chunk.content,
            startLine: chunk.startLine,
            endLine: chunk.endLine,
          })),
        });
      }

      return tx.codeChunk.count({
        where: {
          repositoryFileId: fileId,
        },
      });
    });

    return {
      fileId,
      path: file.path,
      savedChunks: savedCount,
    };
  }

  async getFileChunks(fileId: string) {
    return this.prisma.codeChunk.findMany({
      where: {
        repositoryFileId: fileId,
      },
      orderBy: {
        chunkIndex: 'asc',
      },
    });
  }
}
