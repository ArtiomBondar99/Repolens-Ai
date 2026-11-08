"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoriesService = void 0;
const common_1 = require("@nestjs/common");
const github_service_1 = require("../github/github.service");
const prisma_service_1 = require("../prisma/prisma.service");
let RepositoriesService = class RepositoriesService {
    githubService;
    prisma;
    constructor(githubService, prisma) {
        this.githubService = githubService;
        this.prisma = prisma;
    }
    async saveRepository(owner, repo) {
        const githubRepo = await this.githubService.getRepository(owner, repo);
        return this.prisma.repository.upsert({
            where: {
                fullName: githubRepo.fullName,
            },
            update: {
                url: githubRepo.url,
                defaultBranch: githubRepo.defaultBranch,
            },
            create: {
                owner,
                name: githubRepo.name,
                fullName: githubRepo.fullName,
                url: githubRepo.url,
                defaultBranch: githubRepo.defaultBranch,
            },
        });
    }
    async findAll() {
        return this.prisma.repository.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async syncRepositoryFiles(repositoryId) {
        const repository = await this.prisma.repository.findUnique({
            where: {
                id: repositoryId,
            },
        });
        if (!repository) {
            throw new common_1.NotFoundException('Repository not found');
        }
        const tree = await this.githubService.getRepositoryTree(repository.owner, repository.name);
        const files = tree.files;
        const result = await this.prisma.$transaction(async (tx) => {
            await tx.repositoryFile.deleteMany({
                where: {
                    repositoryId: repository.id,
                },
            });
            await tx.repositoryFile.createMany({
                data: files.map((file) => ({
                    repositoryId: repository.id,
                    path: file.path,
                    sha: file.sha,
                    size: file.size,
                })),
            });
            return tx.repositoryFile.count({
                where: {
                    repositoryId: repository.id,
                },
            });
        });
        return {
            repository: repository.fullName,
            syncedFiles: result,
        };
    }
    async getFileContent(repositoryId, fileId) {
        const file = await this.prisma.repositoryFile.findFirst({
            where: {
                id: fileId,
                repositoryId,
            },
            include: {
                repository: true,
            },
        });
        if (!file) {
            throw new common_1.NotFoundException('File not found');
        }
        const blob = await this.githubService.getFileContent(file.repository.owner, file.repository.name, file.sha);
        return {
            repository: file.repository.fullName,
            path: file.path,
            sha: blob.sha,
            size: blob.size,
            content: blob.content,
        };
    }
    async getRepositoryFiles(repositoryId) {
        const repository = await this.prisma.repository.findUnique({
            where: {
                id: repositoryId,
            },
        });
        if (!repository) {
            throw new common_1.NotFoundException('Repository not found');
        }
        return this.prisma.repositoryFile.findMany({
            where: {
                repositoryId: repositoryId,
            },
            select: {
                id: true,
                path: true,
                sha: true,
                size: true,
            },
            orderBy: {
                path: 'asc',
            },
            take: 100,
        });
    }
    async searchCode(repositoryId, query) {
        const searchTerm = query?.trim();
        if (!searchTerm || searchTerm.length > 100) {
            throw new common_1.BadRequestException('Search query must contain 1 to 100 characters');
        }
        const repository = await this.prisma.repository.findUnique({
            where: { id: repositoryId },
            select: { id: true },
        });
        if (!repository) {
            throw new common_1.NotFoundException('Repository not found');
        }
        const chunks = await this.prisma.codeChunk.findMany({
            where: {
                repositoryFile: {
                    repositoryId,
                },
                content: {
                    contains: searchTerm,
                    mode: 'insensitive',
                },
            },
            select: {
                id: true,
                chunkIndex: true,
                content: true,
                startLine: true,
                endLine: true,
                repositoryFile: {
                    select: {
                        id: true,
                        path: true,
                    },
                },
            },
            orderBy: [
                { repositoryFile: { path: 'asc' } },
                { chunkIndex: 'asc' },
            ],
            take: 20,
        });
        return {
            query: searchTerm,
            totalReturned: chunks.length,
            results: chunks.map((chunk) => ({
                chunkId: chunk.id,
                path: chunk.repositoryFile.path,
                startLine: chunk.startLine,
                endLine: chunk.endLine,
                content: chunk.content,
            })),
        };
    }
};
exports.RepositoriesService = RepositoriesService;
exports.RepositoriesService = RepositoriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [github_service_1.GithubService,
        prisma_service_1.PrismaService])
], RepositoriesService);
//# sourceMappingURL=repositories.service.js.map