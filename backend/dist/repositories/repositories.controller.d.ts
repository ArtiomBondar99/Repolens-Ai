import { RepositoriesService } from './repositories.service';
import { CreateRepositoryDto } from './dto/create-repository.dto';
export declare class RepositoriesController {
    private readonly repositoriesService;
    constructor(repositoriesService: RepositoriesService);
    findAll(): Promise<{
        id: string;
        owner: string;
        name: string;
        fullName: string;
        url: string;
        defaultBranch: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    saveRepository(body: CreateRepositoryDto): Promise<{
        id: string;
        owner: string;
        name: string;
        fullName: string;
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
}
