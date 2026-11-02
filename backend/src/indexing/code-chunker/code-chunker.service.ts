import { BadRequestException, Injectable } from '@nestjs/common';

export interface CodeChunk {
  content: string;
  startLine: number;
  endLine: number;
}

@Injectable()
export class CodeChunkerService {
  chunk(
    content: string,
    chunkSize = 50,
    overlap = 10,
  ): CodeChunk[] {
    if (
      !Number.isInteger(chunkSize) ||
      !Number.isInteger(overlap) ||
      chunkSize <= 0 ||
      overlap < 0 ||
      overlap >= chunkSize
    ) {
      throw new BadRequestException('Invalid chunk settings');
    }

    if (content.length === 0) {
      return [];
    }

    const lines = content.split(/\r\n|\n|\r/);
    const chunks: CodeChunk[] = [];
    const step = chunkSize - overlap;

    for (let start = 0; start < lines.length; start += step) {
      const end = Math.min(start + chunkSize, lines.length);

      chunks.push({
        content: lines.slice(start, end).join('\n'),
        startLine: start + 1,
        endLine: end,
      });

      if (end === lines.length) {
        break;
      }
    }

    return chunks;
  }
}