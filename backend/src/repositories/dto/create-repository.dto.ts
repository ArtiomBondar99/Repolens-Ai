import { IsString, Matches } from 'class-validator';

export class CreateRepositoryDto {
  @IsString()
  @Matches(/^[a-zA-Z0-9-]+$/)
  owner: string;

  @IsString()
  @Matches(/^[a-zA-Z0-9_.-]+$/)
  repo: string;
}