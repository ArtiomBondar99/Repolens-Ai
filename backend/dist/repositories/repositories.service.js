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
};
exports.RepositoriesService = RepositoriesService;
exports.RepositoriesService = RepositoriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [github_service_1.GithubService,
        prisma_service_1.PrismaService])
], RepositoriesService);
//# sourceMappingURL=repositories.service.js.map