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
}
