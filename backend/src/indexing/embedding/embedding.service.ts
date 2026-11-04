import {
  BadGatewayException,
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

// Must match the vector(N) size of CodeChunk.embedding in schema.prisma.
export const EMBEDDING_DIMENSIONS = 1536;

const EMBEDDING_MODEL = 'text-embedding-3-small';
const MAX_BATCH_SIZE = 100;

@Injectable()
export class EmbeddingService {
  private client?: OpenAI;

  constructor(private readonly configService: ConfigService) { }

  async embedTexts(texts: string[]): Promise<number[][]> {
    const embeddings: number[][] = [];

    for (let start = 0; start < texts.length; start += MAX_BATCH_SIZE) {
      const batch = texts.slice(start, start + MAX_BATCH_SIZE);
      embeddings.push(...await this.embedBatch(batch));
    }

    return embeddings;
  }

  private async embedBatch(batch: string[]): Promise<number[][]> {
    const client = this.getClient();

    try {
      const response = await client.embeddings.create({
        model: EMBEDDING_MODEL,
        dimensions: EMBEDDING_DIMENSIONS,
        input: batch,
      });

      return [...response.data]
        .sort((a, b) => a.index - b.index)
        .map((item) => item.embedding);
    } catch (error) {
      if (error instanceof OpenAI.RateLimitError) {
        throw new ServiceUnavailableException('Embedding request limit reached');
      }

      throw new BadGatewayException('Embedding request failed');
    }
  }

  // Created on first use so the rest of the API still starts without a key.
  private getClient(): OpenAI {
    if (this.client) {
      return this.client;
    }

    const apiKey = this.configService.get<string>('OPENAI_API_KEY');

    if (!apiKey) {
      throw new ServiceUnavailableException('Embeddings are not configured');
    }

    this.client = new OpenAI({ apiKey, timeout: 30000 });

    return this.client;
  }
}
