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
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider     = \"prisma-client\"\n  output       = \"../src/generated/prisma\"\n  moduleFormat = \"cjs\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel Repository {\n  id            String   @id @default(uuid())\n  owner         String\n  name          String\n  fullName      String   @unique\n  url           String\n  defaultBranch String\n  createdAt     DateTime @default(now())\n  updatedAt     DateTime @updatedAt\n}\n",
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
config.runtimeDataModel = JSON.parse("{\"models\":{\"Repository\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"owner\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"fullName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"url\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"defaultBranch\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null,\"schema\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"Repository.findUnique\",\"Repository.findUniqueOrThrow\",\"orderBy\",\"cursor\",\"Repository.findFirst\",\"Repository.findFirstOrThrow\",\"Repository.findMany\",\"data\",\"Repository.createOne\",\"Repository.createMany\",\"Repository.createManyAndReturn\",\"Repository.updateOne\",\"Repository.updateMany\",\"Repository.updateManyAndReturn\",\"create\",\"update\",\"Repository.upsertOne\",\"Repository.deleteOne\",\"Repository.deleteMany\",\"having\",\"_count\",\"_min\",\"_max\",\"Repository.groupBy\",\"Repository.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"owner\",\"name\",\"fullName\",\"url\",\"defaultBranch\",\"createdAt\",\"updatedAt\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"set\"]"),
    graph: "KQkQCxoAACIAMBsAAAQAEBwAACIAMB0BAAAAAR4BACMAIR8BACMAISABAAAAASEBACMAISIBACMAISNAACQAISRAACQAIQEAAAABACABAAAAAQAgCxoAACIAMBsAAAQAEBwAACIAMB0BACMAIR4BACMAIR8BACMAISABACMAISEBACMAISIBACMAISNAACQAISRAACQAIQADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIAMAAAAEACADAAAFADAEAAABACAIHQEAAAABHgEAAAABHwEAAAABIAEAAAABIQEAAAABIgEAAAABI0AAAAABJEAAAAABAQgAAAkAIAgdAQAAAAEeAQAAAAEfAQAAAAEgAQAAAAEhAQAAAAEiAQAAAAEjQAAAAAEkQAAAAAEBCAAACwAwAQgAAAsAMAgdAQAoACEeAQAoACEfAQAoACEgAQAoACEhAQAoACEiAQAoACEjQAApACEkQAApACECAAAAAQAgCAAADgAgCB0BACgAIR4BACgAIR8BACgAISABACgAISEBACgAISIBACgAISNAACkAISRAACkAIQIAAAAEACAIAAAQACACAAAABAAgCAAAEAAgAwAAAAEAIA8AAAkAIBAAAA4AIAEAAAABACABAAAABAAgAxUAACUAIBYAACcAIBcAACYAIAsaAAAaADAbAAAXABAcAAAaADAdAQAbACEeAQAbACEfAQAbACEgAQAbACEhAQAbACEiAQAbACEjQAAcACEkQAAcACEDAAAABAAgAwAAFgAwFAAAFwAgAwAAAAQAIAMAAAUAMAQAAAEAIAsaAAAaADAbAAAXABAcAAAaADAdAQAbACEeAQAbACEfAQAbACEgAQAbACEhAQAbACEiAQAbACEjQAAcACEkQAAcACEOFQAAHgAgFgAAIQAgFwAAIQAgJQEAAAABJgEAAAAEJwEAAAAEKAEAAAABKQEAAAABKgEAAAABKwEAAAABLAEAIAAhLQEAAAABLgEAAAABLwEAAAABCxUAAB4AIBYAAB8AIBcAAB8AICVAAAAAASZAAAAABCdAAAAABChAAAAAASlAAAAAASpAAAAAAStAAAAAASxAAB0AIQsVAAAeACAWAAAfACAXAAAfACAlQAAAAAEmQAAAAAQnQAAAAAQoQAAAAAEpQAAAAAEqQAAAAAErQAAAAAEsQAAdACEIJQIAAAABJgIAAAAEJwIAAAAEKAIAAAABKQIAAAABKgIAAAABKwIAAAABLAIAHgAhCCVAAAAAASZAAAAABCdAAAAABChAAAAAASlAAAAAASpAAAAAAStAAAAAASxAAB8AIQ4VAAAeACAWAAAhACAXAAAhACAlAQAAAAEmAQAAAAQnAQAAAAQoAQAAAAEpAQAAAAEqAQAAAAErAQAAAAEsAQAgACEtAQAAAAEuAQAAAAEvAQAAAAELJQEAAAABJgEAAAAEJwEAAAAEKAEAAAABKQEAAAABKgEAAAABKwEAAAABLAEAIQAhLQEAAAABLgEAAAABLwEAAAABCxoAACIAMBsAAAQAEBwAACIAMB0BACMAIR4BACMAIR8BACMAISABACMAISEBACMAISIBACMAISNAACQAISRAACQAIQslAQAAAAEmAQAAAAQnAQAAAAQoAQAAAAEpAQAAAAEqAQAAAAErAQAAAAEsAQAhACEtAQAAAAEuAQAAAAEvAQAAAAEIJUAAAAABJkAAAAAEJ0AAAAAEKEAAAAABKUAAAAABKkAAAAABK0AAAAABLEAAHwAhAAAAATABAAAAAQEwQAAAAAEAAAAAAxUABhYABxcACAAAAAMVAAYWAAcXAAgBAgECAwEFBgEGBwEHCAEJCgEKDAILDQMMDwENEQIOEgQREwESFAETFQIYGAUZGQk"
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