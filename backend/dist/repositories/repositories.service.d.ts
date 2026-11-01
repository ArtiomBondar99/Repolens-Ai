import { GithubService } from '../github/github.service';
import { PrismaService } from '../prisma/prisma.service';
export declare class RepositoriesService {
    private readonly githubService;
    private readonly prisma;
    constructor(githubService: GithubService, prisma: PrismaService);
    saveRepository(owner: string, repo: string): Promise<{
        owner: string;
        id: string;
        fullName: string;
        name: string;
        url: string;
        defaultBranch: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
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
}
