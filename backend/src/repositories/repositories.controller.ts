import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { RepositoriesService } from './repositories.service';
import { CreateRepositoryDto } from './dto/create-repository.dto';

@Controller('repositories')
export class RepositoriesController {
  constructor(
    private readonly repositoriesService: RepositoriesService,
  ) { }

  @Get()
  findAll() {
    return this.repositoriesService.findAll();
  }

  @Post()
  saveRepository(
    @Body(new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }))
    body: CreateRepositoryDto,
  ) {
    return this.repositoriesService.saveRepository(
      body.owner,
      body.repo,
    );
  }

  @Post(':id/sync')
  syncRepositoryFiles(@Param('id') repositoryId: string) {
    return this.repositoriesService.syncRepositoryFiles(repositoryId);
  }

  @Get(':id/files/:fileId/content')
  getFileContent(
    @Param('id') repositoryId: string,
    @Param('fileId') fileId: string,
  ) {
    return this.repositoriesService.getFileContent(
      repositoryId,
      fileId,
    );
  }
}