import {
  Controller,
  Get,
  Param,
  BadRequestException,
} from '@nestjs/common';


import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(
    private readonly githubService: GithubService,
  ) { }

  @Get('repositories/:owner/:repo')
  getRepository(
    @Param('owner') owner: string,
    @Param('repo') repo: string,
  ) {
    const validName = /^[a-zA-Z0-9_.-]+$/;

    if (
      !validName.test(owner) ||
      !validName.test(repo)
    ) {
      throw new BadRequestException('Invalid repository path');
    }

    return this.githubService.getRepository(owner, repo);
  }

  @Get('repositories/:owner/:repo/tree')
  getRepositoryTree(
    @Param('owner') owner: string,
    @Param('repo') repo: string,
  ) {
    const validName = /^[a-zA-Z0-9_.-]+$/;

    if (!validName.test(owner) || !validName.test(repo)) {
      throw new BadRequestException('Invalid repository path');
    }

    return this.githubService.getRepositoryTree(owner, repo);
  }

  @Get('repositories/:owner/:repo/files/:sha')
  getFileContent(
    @Param('owner') owner: string,
    @Param('repo') repo: string,
    @Param('sha') sha: string,
  ) {
    const validName = /^[a-zA-Z0-9_.-]+$/;
    const validSha = /^[a-fA-F0-9]{40,64}$/;

    if (!validName.test(owner) || !validName.test(repo)) {
      throw new BadRequestException('Invalid repository path');
    }

    if (!validSha.test(sha)) {
      throw new BadRequestException('Invalid file SHA');
    }

    return this.githubService.getFileContent(owner, repo, sha);
  }
}