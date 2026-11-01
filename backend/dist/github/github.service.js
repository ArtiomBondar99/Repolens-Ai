"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubService = void 0;
const common_1 = require("@nestjs/common");
let GithubService = class GithubService {
    async getRepository(owner, repo) {
        const url = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`;
        let response;
        try {
            response = await fetch(url, {
                headers: {
                    Accept: 'application/vnd.github+json',
                    'User-Agent': 'RepoLens-AI',
                },
                signal: AbortSignal.timeout(10000),
            });
        }
        catch {
            throw new common_1.BadGatewayException('Could not reach GitHub');
        }
        if (response.status === 404) {
            throw new common_1.NotFoundException('Repository not found');
        }
        if (response.status === 403 || response.status === 429) {
            throw new common_1.ServiceUnavailableException('GitHub request limit reached');
        }
        if (!response.ok) {
            throw new common_1.BadGatewayException('GitHub API request failed');
        }
        const data = (await response.json());
        return {
            name: data.name,
            fullName: data.full_name,
            description: data.description,
            url: data.html_url,
            language: data.language,
            stars: data.stargazers_count,
            defaultBranch: data.default_branch,
        };
    }
    async getRepositoryTree(owner, repo) {
        const repository = await this.getRepository(owner, repo);
        const url = `https://api.github.com/repos/${encodeURIComponent(owner)}` +
            `/${encodeURIComponent(repo)}/git/trees/HEAD?recursive=1`;
        let response;
        try {
            response = await fetch(url, {
                headers: {
                    Accept: 'application/vnd.github+json',
                    'User-Agent': 'RepoLens-AI',
                },
                signal: AbortSignal.timeout(10000),
            });
        }
        catch {
            throw new common_1.BadGatewayException('Could not reach GitHub');
        }
        if (response.status === 404) {
            throw new common_1.NotFoundException('Repository tree not found');
        }
        if (response.status === 403 || response.status === 429) {
            throw new common_1.ServiceUnavailableException('GitHub request limit reached');
        }
        if (!response.ok) {
            throw new common_1.BadGatewayException('GitHub tree request failed');
        }
        const data = (await response.json());
        if (data.truncated) {
            throw new common_1.BadGatewayException('Repository tree is too large');
        }
        return {
            repository: repository.fullName,
            treeSha: data.sha,
            totalItems: data.tree.length,
            files: data.tree
                .filter((item) => item.type === 'blob')
                .map((item) => ({
                path: item.path,
                sha: item.sha,
                size: item.size ?? null,
            })),
        };
    }
    async getFileContent(owner, repo, sha) {
        const url = `https://api.github.com/repos/${encodeURIComponent(owner)}` +
            `/${encodeURIComponent(repo)}/git/blobs/${sha}`;
        let response;
        try {
            response = await fetch(url, {
                headers: {
                    Accept: 'application/vnd.github+json',
                    'User-Agent': 'RepoLens-AI',
                },
                signal: AbortSignal.timeout(10000),
            });
        }
        catch {
            throw new common_1.BadGatewayException('Could not reach GitHub');
        }
        if (response.status === 404) {
            throw new common_1.NotFoundException('File not found');
        }
        if (response.status === 403 || response.status === 429) {
            throw new common_1.ServiceUnavailableException('GitHub request limit reached');
        }
        if (!response.ok) {
            throw new common_1.BadGatewayException('GitHub file request failed');
        }
        const data = (await response.json());
        if (data.encoding !== 'base64') {
            throw new common_1.BadGatewayException('Unsupported file encoding');
        }
        const maxFileSize = 100_000;
        if (data.size > maxFileSize) {
            throw new common_1.BadRequestException('File is too large');
        }
        const content = Buffer.from(data.content.replace(/\s/g, ''), 'base64').toString('utf-8');
        return {
            sha: data.sha,
            size: data.size,
            content,
        };
    }
};
exports.GithubService = GithubService;
exports.GithubService = GithubService = __decorate([
    (0, common_1.Injectable)()
], GithubService);
//# sourceMappingURL=github.service.js.map