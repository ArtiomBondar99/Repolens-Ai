"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeChunkerService = void 0;
const common_1 = require("@nestjs/common");
let CodeChunkerService = class CodeChunkerService {
    chunk(content, chunkSize = 50, overlap = 10) {
        if (!Number.isInteger(chunkSize) ||
            !Number.isInteger(overlap) ||
            chunkSize <= 0 ||
            overlap < 0 ||
            overlap >= chunkSize) {
            throw new common_1.BadRequestException('Invalid chunk settings');
        }
        if (content.length === 0) {
            return [];
        }
        const lines = content.split(/\r\n|\n|\r/);
        const chunks = [];
        const step = chunkSize - overlap;
        for (let start = 0; start < lines.length; start += step) {
            const end = Math.min(start + chunkSize, lines.length);
            chunks.push({
                content: lines.slice(start, end).join('\n'),
                startLine: start + 1,
                endLine: end,
            });
            if (end === lines.length) {
                break;
            }
        }
        return chunks;
    }
};
exports.CodeChunkerService = CodeChunkerService;
exports.CodeChunkerService = CodeChunkerService = __decorate([
    (0, common_1.Injectable)()
], CodeChunkerService);
//# sourceMappingURL=code-chunker.service.js.map