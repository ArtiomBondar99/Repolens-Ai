import { Module } from '@nestjs/common';
import { RepositoriesController } from './repositories.controller';
import { RepositoriesService } from './repositories.service';
import { GithubModule } from '../github/github.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [GithubModule, PrismaModule],
  controllers: [RepositoriesController],
  providers: [RepositoriesService],
})
export class RepositoriesModule { }