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
exports.RepositoriesController = void 0;
const common_1 = require("@nestjs/common");
const repositories_service_1 = require("./repositories.service");
const create_repository_dto_1 = require("./dto/create-repository.dto");
let RepositoriesController = class RepositoriesController {
    repositoriesService;
    constructor(repositoriesService) {
        this.repositoriesService = repositoriesService;
    }
    findAll() {
        return this.repositoriesService.findAll();
    }
    saveRepository(body) {
        return this.repositoriesService.saveRepository(body.owner, body.repo);
    }
    syncRepositoryFiles(repositoryId) {
        return this.repositoriesService.syncRepositoryFiles(repositoryId);
    }
    getFileContent(repositoryId, fileId) {
        return this.repositoriesService.getFileContent(repositoryId, fileId);
    }
    getRepositoryFiles(id) {
        return this.repositoriesService.getRepositoryFiles(id);
    }
    searchCode(repositoryId, query) {
        return this.repositoriesService.searchCode(repositoryId, query);
    }
};
exports.RepositoriesController = RepositoriesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RepositoriesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_repository_dto_1.CreateRepositoryDto]),
    __metadata("design:returntype", void 0)
], RepositoriesController.prototype, "saveRepository", null);
__decorate([
    (0, common_1.Post)(':id/sync'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RepositoriesController.prototype, "syncRepositoryFiles", null);
__decorate([
    (0, common_1.Get)(':id/files/:fileId/content'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('fileId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], RepositoriesController.prototype, "getFileContent", null);
__decorate([
    (0, common_1.Get)(':id/files'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RepositoriesController.prototype, "getRepositoryFiles", null);
__decorate([
    (0, common_1.Get)(':id/search'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('q')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], RepositoriesController.prototype, "searchCode", null);
exports.RepositoriesController = RepositoriesController = __decorate([
    (0, common_1.Controller)('repositories'),
    __metadata("design:paramtypes", [repositories_service_1.RepositoriesService])
], RepositoriesController);
//# sourceMappingURL=repositories.controller.js.map