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
exports.IndexingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const repositories_service_1 = require("../repositories/repositories.service");
const code_chunker_service_1 = require("./code-chunker/code-chunker.service");
let IndexingService = class IndexingService {
    repositoriesService;
    codeChunker;
    prisma;
    constructor(repositoriesService, codeChunker, prisma) {
        this.repositoriesService = repositoriesService;
        this.codeChunker = codeChunker;
        this.prisma = prisma;
    }
    async indexFile(repositoryId, fileId) {
        const file = await this.repositoriesService.getFileContent(repositoryId, fileId);
        const chunks = this.codeChunker.chunk(file.content);
        const savedCount = await this.prisma.$transaction(async (tx) => {
            await tx.codeChunk.deleteMany({
                where: {
                    repositoryFileId: fileId,
                },
            });
            if (chunks.length > 0) {
                await tx.codeChunk.createMany({
                    data: chunks.map((chunk, index) => ({
                        repositoryFileId: fileId,
                        chunkIndex: index,
                        content: chunk.content,
                        startLine: chunk.startLine,
                        endLine: chunk.endLine,
                    })),
                });
            }
            return tx.codeChunk.count({
                where: {
                    repositoryFileId: fileId,
                },
            });
        });
        return {
            fileId,
            path: file.path,
            savedChunks: savedCount,
        };
    }
    async getFileChunks(fileId) {
        return this.prisma.codeChunk.findMany({
            where: {
                repositoryFileId: fileId,
            },
            orderBy: {
                chunkIndex: 'asc',
            },
        });
    }
};
exports.IndexingService = IndexingService;
exports.IndexingService = IndexingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_service_1.RepositoriesService,
        code_chunker_service_1.CodeChunkerService,
        prisma_service_1.PrismaService])
], IndexingService);
//# sourceMappingURL=indexing.service.js.map