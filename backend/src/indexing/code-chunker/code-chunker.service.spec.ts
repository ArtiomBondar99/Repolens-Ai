import { CodeChunkerService } from './code-chunker.service';

describe('CodeChunkerService', () => {
  let service: CodeChunkerService;

  beforeEach(() => {
    service = new CodeChunkerService();
  });

  it('should split code into overlapping chunks', () => {
    const content = [
      'line 1',
      'line 2',
      'line 3',
      'line 4',
      'line 5',
      'line 6',
    ].join('\n');

    const chunks = service.chunk(content, 3, 1);

    expect(chunks).toHaveLength(3);

    expect(chunks[0].startLine).toBe(1);
    expect(chunks[0].endLine).toBe(3);

    expect(chunks[1].startLine).toBe(3);
    expect(chunks[1].endLine).toBe(5);

    expect(chunks[2].startLine).toBe(5);
    expect(chunks[2].endLine).toBe(6);
  });
});
