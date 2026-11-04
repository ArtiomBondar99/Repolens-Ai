import {
  BadGatewayException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { EMBEDDING_DIMENSIONS, EmbeddingService } from './embedding.service';

describe('EmbeddingService', () => {
  let service: EmbeddingService;
  let create: jest.SpyInstance;

  const createService = (apiKey?: string) =>
    new EmbeddingService({
      get: () => apiKey,
    } as unknown as ConfigService);

  beforeEach(() => {
    service = createService('test-key');

    create = jest
      .spyOn(OpenAI.Embeddings.prototype, 'create')
      .mockImplementation(((params: { input: string[] }) =>
        Promise.resolve({
          data: params.input
            .map((text, index) => ({
              index,
              embedding: [Number(text)],
            }))
            .reverse(),
        })) as never);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return embeddings in the same order as the input', async () => {
    const embeddings = await service.embedTexts(['1', '2', '3']);

    expect(embeddings).toEqual([[1], [2], [3]]);
    expect(create).toHaveBeenCalledWith({
      model: 'text-embedding-3-small',
      dimensions: EMBEDDING_DIMENSIONS,
      input: ['1', '2', '3'],
    });
  });

  it('should split large inputs into batches', async () => {
    const texts = Array.from({ length: 250 }, (_, index) => String(index));

    const embeddings = await service.embedTexts(texts);

    expect(create).toHaveBeenCalledTimes(3);
    expect(embeddings).toEqual(texts.map((text) => [Number(text)]));
  });

  it('should not call OpenAI when there is nothing to embed', async () => {
    await expect(service.embedTexts([])).resolves.toEqual([]);

    expect(create).not.toHaveBeenCalled();
  });

  it('should report a missing API key', async () => {
    await expect(createService().embedTexts(['1'])).rejects.toThrow(
      ServiceUnavailableException,
    );

    expect(create).not.toHaveBeenCalled();
  });

  it('should report rate limits as service unavailable', async () => {
    create.mockRejectedValue(
      new OpenAI.RateLimitError(429, {}, 'Too many requests', new Headers()),
    );

    await expect(service.embedTexts(['1'])).rejects.toThrow(
      ServiceUnavailableException,
    );
  });

  it('should report other OpenAI failures as bad gateway', async () => {
    create.mockRejectedValue(new Error('Connection failed'));

    await expect(service.embedTexts(['1'])).rejects.toThrow(
      BadGatewayException,
    );
  });
});
