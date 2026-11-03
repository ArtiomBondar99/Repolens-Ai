export interface CodeChunk {
    content: string;
    startLine: number;
    endLine: number;
}
export declare class CodeChunkerService {
    chunk(content: string, chunkSize?: number, overlap?: number): CodeChunk[];
}
