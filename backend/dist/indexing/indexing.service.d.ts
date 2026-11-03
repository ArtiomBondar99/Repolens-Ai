import { PrismaService } from '../prisma/prisma.service';
import { RepositoriesService } from '../repositories/repositories.service';
import { CodeChunkerService } from './code-chunker/code-chunker.service';
export declare class IndexingService {
    private readonly repositoriesService;
    private readonly codeChunker;
    private readonly prisma;
    constructor(repositoriesService: RepositoriesService, codeChunker: CodeChunkerService, prisma: PrismaService);
    indexFile(repositoryId: string, fileId: string): Promise<{
        fileId: string;
        path: string;
        savedChunks: number;
    }>;
    getFileChunks(fileId: string): Promise<{
        id: string;
        createdAt: Date;
        repositoryFileId: string;
        chunkIndex: number;
        content: string;
        startLine: number;
        endLine: number;
    }[]>;
}
