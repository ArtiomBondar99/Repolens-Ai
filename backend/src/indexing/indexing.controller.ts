import { Controller, Get, Param, Post } from '@nestjs/common';
import { IndexingService } from './indexing.service';

@Controller('indexing')
export class IndexingController {
  constructor(
    private readonly indexingService: IndexingService,
  ) { }

  @Post('repositories/:repositoryId/files/:fileId')
  indexFile(
    @Param('repositoryId') repositoryId: string,
    @Param('fileId') fileId: string,
  ) {
    return this.indexingService.indexFile(
      repositoryId,
      fileId,
    );
  }

  @Get('files/:fileId/chunks')
  getFileChunks(@Param('fileId') fileId: string) {
    return this.indexingService.getFileChunks(fileId);
  }
}