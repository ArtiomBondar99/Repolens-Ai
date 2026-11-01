import {
  Body,
  Controller,
  Get,
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
}