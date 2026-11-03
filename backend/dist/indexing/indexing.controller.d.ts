import { IndexingService } from './indexing.service';
export declare class IndexingController {
    private readonly indexingService;
    constructor(indexingService: IndexingService);
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
