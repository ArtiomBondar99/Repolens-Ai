"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.10.1",
    "engineVersion": "d1b3f377ca835d73fd50954a5e22128b9ebdd6b8",
    "activeProvider": "postgresql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider     = \"prisma-client\"\n  output       = \"../src/generated/prisma\"\n  moduleFormat = \"cjs\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel Repository {\n  id            String   @id @default(uuid())\n  owner         String\n  name          String\n  fullName      String   @unique\n  url           String\n  defaultBranch String\n  createdAt     DateTime @default(now())\n  updatedAt     DateTime @updatedAt\n\n  files RepositoryFile[]\n}\n\nmodel RepositoryFile {\n  id           String     @id @default(uuid())\n  repositoryId String\n  repository   Repository @relation(fields: [repositoryId], references: [id], onDelete: Cascade)\n  path         String\n  sha          String\n  size         Int?\n  createdAt    DateTime   @default(now())\n\n  @@unique([repositoryId, path])\n  @@index([repositoryId])\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"Repository\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"owner\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"fullName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"url\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"defaultBranch\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"files\",\"kind\":\"object\",\"type\":\"RepositoryFile\",\"relationName\":\"RepositoryToRepositoryFile\"}],\"dbName\":null,\"schema\":null},\"RepositoryFile\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"repositoryId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"repository\",\"kind\":\"object\",\"type\":\"Repository\",\"relationName\":\"RepositoryToRepositoryFile\"},{\"name\":\"path\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"sha\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"size\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null,\"schema\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"orderBy\",\"cursor\",\"repository\",\"files\",\"_count\",\"Repository.findUnique\",\"Repository.findUniqueOrThrow\",\"Repository.findFirst\",\"Repository.findFirstOrThrow\",\"Repository.findMany\",\"data\",\"Repository.createOne\",\"Repository.createMany\",\"Repository.createManyAndReturn\",\"Repository.updateOne\",\"Repository.updateMany\",\"Repository.updateManyAndReturn\",\"create\",\"update\",\"Repository.upsertOne\",\"Repository.deleteOne\",\"Repository.deleteMany\",\"having\",\"_min\",\"_max\",\"Repository.groupBy\",\"Repository.aggregate\",\"RepositoryFile.findUnique\",\"RepositoryFile.findUniqueOrThrow\",\"RepositoryFile.findFirst\",\"RepositoryFile.findFirstOrThrow\",\"RepositoryFile.findMany\",\"RepositoryFile.createOne\",\"RepositoryFile.createMany\",\"RepositoryFile.createManyAndReturn\",\"RepositoryFile.updateOne\",\"RepositoryFile.updateMany\",\"RepositoryFile.updateManyAndReturn\",\"RepositoryFile.upsertOne\",\"RepositoryFile.deleteOne\",\"RepositoryFile.deleteMany\",\"_avg\",\"_sum\",\"RepositoryFile.groupBy\",\"RepositoryFile.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"repositoryId\",\"path\",\"sha\",\"size\",\"createdAt\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"owner\",\"name\",\"fullName\",\"url\",\"defaultBranch\",\"updatedAt\",\"every\",\"some\",\"none\",\"repositoryId_path\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"createMany\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "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-CAA-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"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.js"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map