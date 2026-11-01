export declare class GithubService {
    getRepository(owner: string, repo: string): Promise<{
        name: string;
        fullName: string;
        description: string | null;
        url: string;
        language: string | null;
        stars: number;
    }>;
    getRepositoryTree(owner: string, repo: string): Promise<{
        repository: string;
        treeSha: string;
        totalItems: number;
        files: {
            path: string;
            sha: string;
            size: number | null;
        }[];
    }>;
    getFileContent(owner: string, repo: string, sha: string): Promise<{
        sha: string;
        size: number;
        content: string;
    }>;
}
