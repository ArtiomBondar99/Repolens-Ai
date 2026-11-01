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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubController = void 0;
const common_1 = require("@nestjs/common");
const github_service_1 = require("./github.service");
let GithubController = class GithubController {
    githubService;
    constructor(githubService) {
        this.githubService = githubService;
    }
    getRepository(owner, repo) {
        const validName = /^[a-zA-Z0-9_.-]+$/;
        if (!validName.test(owner) ||
            !validName.test(repo)) {
            throw new common_1.BadRequestException('Invalid repository path');
        }
        return this.githubService.getRepository(owner, repo);
    }
    getRepositoryTree(owner, repo) {
        const validName = /^[a-zA-Z0-9_.-]+$/;
        if (!validName.test(owner) || !validName.test(repo)) {
            throw new common_1.BadRequestException('Invalid repository path');
        }
        return this.githubService.getRepositoryTree(owner, repo);
    }
    getFileContent(owner, repo, sha) {
        const validName = /^[a-zA-Z0-9_.-]+$/;
        const validSha = /^[a-fA-F0-9]{40,64}$/;
        if (!validName.test(owner) || !validName.test(repo)) {
            throw new common_1.BadRequestException('Invalid repository path');
        }
        if (!validSha.test(sha)) {
            throw new common_1.BadRequestException('Invalid file SHA');
        }
        return this.githubService.getFileContent(owner, repo, sha);
    }
};
exports.GithubController = GithubController;
__decorate([
    (0, common_1.Get)('repositories/:owner/:repo'),
    __param(0, (0, common_1.Param)('owner')),
    __param(1, (0, common_1.Param)('repo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], GithubController.prototype, "getRepository", null);
__decorate([
    (0, common_1.Get)('repositories/:owner/:repo/tree'),
    __param(0, (0, common_1.Param)('owner')),
    __param(1, (0, common_1.Param)('repo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], GithubController.prototype, "getRepositoryTree", null);
__decorate([
    (0, common_1.Get)('repositories/:owner/:repo/files/:sha'),
    __param(0, (0, common_1.Param)('owner')),
    __param(1, (0, common_1.Param)('repo')),
    __param(2, (0, common_1.Param)('sha')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], GithubController.prototype, "getFileContent", null);
exports.GithubController = GithubController = __decorate([
    (0, common_1.Controller)('github'),
    __metadata("design:paramtypes", [github_service_1.GithubService])
], GithubController);
//# sourceMappingURL=github.controller.js.map