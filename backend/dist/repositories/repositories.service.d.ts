import { GithubService } from '../github/github.service';
import { PrismaService } from '../prisma/prisma.service';
export declare class RepositoriesService {
    private readonly githubService;
    private readonly prisma;
    constructor(githubService: GithubService, prisma: PrismaService);
    saveRepository(owner: string, repo: string): Promise<{
        id: string;
        fullName: string;
        owner: string;
        name: string;
        url: string;
        defaultBranch: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        fullName: string;
        owner: string;
        name: string;
        url: string;
        defaultBranch: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    syncRepositoryFiles(repositoryId: string): Promise<{
        repository: string;
        syncedFiles: number;
    }>;
    getFileContent(repositoryId: string, fileId: string): Promise<{
        repository: string;
        path: string;
        sha: string;
        size: number;
        content: string;
    }>;
    getRepositoryFiles(repositoryId: string): Promise<{
        id: string;
        path: string;
        sha: string;
        size: number | null;
    }[]>;
    searchCode(repositoryId: string, query: string): Promise<{
        query: string;
        totalReturned: number;
        results: {
            chunkId: string;
            path: string;
            startLine: number;
            endLine: number;
            content: string;
        }[];
    }>;
}
