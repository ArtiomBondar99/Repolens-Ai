import { RepositoriesService } from './repositories.service';
import { CreateRepositoryDto } from './dto/create-repository.dto';
export declare class RepositoriesController {
    private readonly repositoriesService;
    constructor(repositoriesService: RepositoriesService);
    findAll(): Promise<{
        owner: string;
        id: string;
        fullName: string;
        name: string;
        url: string;
        defaultBranch: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    saveRepository(body: CreateRepositoryDto): Promise<{
        owner: string;
        id: string;
        fullName: string;
        name: string;
        url: string;
        defaultBranch: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
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
    getRepositoryFiles(id: string): Promise<{
        sha: string;
        id: string;
        path: string;
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
