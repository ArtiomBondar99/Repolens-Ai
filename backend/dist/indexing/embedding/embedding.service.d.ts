import { ConfigService } from '@nestjs/config';
export declare const EMBEDDING_DIMENSIONS = 1536;
export declare class EmbeddingService {
    private readonly configService;
    private client?;
    constructor(configService: ConfigService);
    embedTexts(texts: string[]): Promise<number[][]>;
    private embedBatch;
    private getClient;
}
