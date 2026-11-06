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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbeddingService = exports.EMBEDDING_DIMENSIONS = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const openai_1 = __importDefault(require("openai"));
exports.EMBEDDING_DIMENSIONS = 1536;
const EMBEDDING_MODEL = 'text-embedding-3-small';
const MAX_BATCH_SIZE = 100;
let EmbeddingService = class EmbeddingService {
    configService;
    client;
    constructor(configService) {
        this.configService = configService;
    }
    async embedTexts(texts) {
        const embeddings = [];
        for (let start = 0; start < texts.length; start += MAX_BATCH_SIZE) {
            const batch = texts.slice(start, start + MAX_BATCH_SIZE);
            embeddings.push(...await this.embedBatch(batch));
        }
        return embeddings;
    }
    async embedBatch(batch) {
        const client = this.getClient();
        try {
            const response = await client.embeddings.create({
                model: EMBEDDING_MODEL,
                dimensions: exports.EMBEDDING_DIMENSIONS,
                input: batch,
            });
            return [...response.data]
                .sort((a, b) => a.index - b.index)
                .map((item) => item.embedding);
        }
        catch (error) {
            if (error instanceof openai_1.default.RateLimitError) {
                throw new common_1.ServiceUnavailableException('Embedding request limit reached');
            }
            throw new common_1.BadGatewayException('Embedding request failed');
        }
    }
    getClient() {
        if (this.client) {
            return this.client;
        }
        const apiKey = this.configService.get('OPENAI_API_KEY');
        if (!apiKey) {
            throw new common_1.ServiceUnavailableException('Embeddings are not configured');
        }
        this.client = new openai_1.default({ apiKey, timeout: 30000 });
        return this.client;
    }
};
exports.EmbeddingService = EmbeddingService;
exports.EmbeddingService = EmbeddingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], EmbeddingService);
//# sourceMappingURL=embedding.service.js.map