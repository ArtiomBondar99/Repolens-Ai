import { Module } from '@nestjs/common';
import { CodeChunkerService } from './code-chunker/code-chunker.service';

@Module({
  providers: [CodeChunkerService]
})
export class IndexingModule {}
