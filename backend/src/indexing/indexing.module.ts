import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { RepositoriesModule } from '../repositories/repositories.module';
import { CodeChunkerService } from './code-chunker/code-chunker.service';
import { IndexingService } from './indexing.service';
import { IndexingController } from './indexing.controller';

@Module({
  imports: [PrismaModule, RepositoriesModule],
  controllers: [IndexingController],
  providers: [CodeChunkerService, IndexingService],
})
export class IndexingModule { }