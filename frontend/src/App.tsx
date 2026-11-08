import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Repository {
  id: string;
  owner: string;
  name: string;
  fullName: string;
  url: string;
  defaultBranch: string;
}

interface RepositoryFile {
  id: string;
  path: string;
  sha: string;
  size: number | null;
}

interface FileContent {
  id: string;
  path: string;
  sha: string;
  size: number;
  content: string;
}

interface SearchResult {
  chunkId: string;
  fileId: string;
  path: string;
  startLine: number;
  endLine: number;
  content: string;
}

interface SearchResponse {
  query: string;
  totalReturned: number;
  results: SearchResult[];
}

interface MatchLine {
  lineNumber: number;
  text: string;
}

function App() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedRepo, setSelectedRepo] =
    useState<Repository | null>(null);
  const [files, setFiles] = useState<RepositoryFile[]>([]);
  const [filesLoading, setFilesLoading] = useState(false);
  const [filesError, setFilesError] = useState('');
  const fileRequestRef = useRef<AbortController | null>(null);

  const [selectedFile, setSelectedFile] =
    useState<FileContent | null>(null);

  const [fileLoading, setFileLoading] = useState(false);

  const [fileError, setFileError] = useState('');

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const [searchedQuery, setSearchedQuery] = useState('');
  const [highlightedLines, setHighlightedLines] = useState<{
    start: number;
    end: number;
  } | null>(null);

  const codeViewerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    return () => fileRequestRef.current?.abort();
  }, []);

  useEffect(() => {
    if (!selectedFile || !highlightedLines) {
      return;
    }

    const targetLine = codeViewerRef.current?.querySelector(
      `[data-search-line="${highlightedLines.start}"]`
    );

    targetLine?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }, [selectedFile, highlightedLines]);

  useEffect(() => {
    async function loadRepositories() {
      try {
        const response = await fetch('http://localhost:3000/repositories');

        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const data: Repository[] = await response.json();
        setRepositories(data);
      } catch {
        setError('Could not load repositories');
      } finally {
        setLoading(false);
      }
    }

    void loadRepositories();
  }, []);

  async function loadFiles(repo: Repository) {
    fileRequestRef.current?.abort();

    setSelectedFile(null);
    setHighlightedLines(null);
    setFileLoading(false);
    setFileError('');

    setSelectedRepo(repo);
    setFiles([]);
    setFilesLoading(true);
    setFilesError('');
    setSearchQuery('');
    setSearchResults([]);
    setSearchError('');
    setHasSearched(false);
    setSearchedQuery('');

    try {
      const response = await fetch(
        `http://localhost:3000/repositories/${repo.id}/files`
      );

      if (!response.ok) {
        throw new Error('Failed to load files');
      }

      const data: RepositoryFile[] = await response.json();

      setFiles(data);
    } catch {
      setFilesError('Could not load repository files');
    } finally {
      setFilesLoading(false);
    }
  }

  async function loadFileContent(
    fileId: string,
    lines: { start: number; end: number } | null = null,
  ) {
    if (!selectedRepo) {
      return;
    }

    fileRequestRef.current?.abort();

    const controller = new AbortController();
    fileRequestRef.current = controller;

    setSelectedFile(null);
    setHighlightedLines(lines);
    setFileLoading(true);
    setFileError('');

    try {
      const response = await fetch(
        `http://localhost:3000/repositories/${selectedRepo.id}/files/${fileId}/content`,
        { signal: controller.signal },
      );

      if (!response.ok) {
        throw new Error('Failed to load file content');
      }

      const data: FileContent = await response.json();

      if (controller.signal.aborted) {
        return;
      }

      setSelectedFile(data);
    } catch {
      if (!controller.signal.aborted) {
        setFileError('Could not load file content');
      }
    } finally {
      if (!controller.signal.aborted) {
        setFileLoading(false);
      }

      if (fileRequestRef.current === controller) {
        fileRequestRef.current = null;
      }
    }
  }
  async function searchCode() {
    if (!selectedRepo) {
      return;
    }

    const query = searchQuery.trim();

    if (!query || query.length > 100) {
      setSearchError('Enter 1 to 100 characters');
      return;
    }

    setSearchLoading(true);
    setSearchError('');
    setSearchResults([]);
    setHasSearched(false);

    try {
      const url =
        `http://localhost:3000/repositories/${selectedRepo.id}/search` +
        `?q=${encodeURIComponent(query)}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Search request failed');
      }

      const data: SearchResponse = await response.json();

      setSearchResults(data.results);
      setSearchedQuery(data.query);
      setHasSearched(true);
    } catch {
      setSearchError('Could not search repository code');
    } finally {
      setSearchLoading(false);
    }
  }

  return (
    <div className="app-layout">
      <header className="app-header">
        <h1>RepoLens AI</h1>
        <span>Code Explorer</span>
      </header>

      <div className="workspace">
        <aside className="sidebar">
          <h3>Repositories</h3>

          {loading && <p>Loading repositories...</p>}
          {error && <p>{error}</p>}

          {repositories.map((repo) => (
            <button
              key={repo.id}
              className={
                selectedRepo?.id === repo.id
                  ? 'sidebar-item active'
                  : 'sidebar-item'
              }
              onClick={() => loadFiles(repo)}
            >
              {repo.name}
            </button>
          ))}

          {selectedRepo && (
            <section className="search-section">
              <h3>Search Code</h3>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  void searchCode();
                }}
              >
                <input
                  type="text"
                  placeholder="Search code..."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                />

                <button type="submit" disabled={searchLoading}>
                  {searchLoading ? 'Searching...' : 'Search'}
                </button>
              </form>

              {searchError && <p>{searchError}</p>}

              {hasSearched && searchResults.length === 0 && (
                <p>No matches found.</p>
              )}

              {searchResults.map((result) => (
                <button
                  key={result.chunkId}
                  type="button"
                  className="search-result"
                  onClick={() =>
                    void loadFileContent(result.fileId, {
                      start: result.startLine,
                      end: result.endLine,
                    })
                  }
                >
                  <strong>{result.path}</strong>

                  <span>
                    Lines {result.startLine}–{result.endLine}
                  </span>

                  <code>
                    {findMatchLines(result, searchedQuery)
                      .slice(0, 3)
                      .map((match) => `${match.lineNumber}: ${match.text.trim()}`)
                      .join('\n') || result.content.slice(0, 180)}
                  </code>
                </button>
              ))}
            </section>
          )}

          {selectedRepo && (
            <>
              <h3>Files</h3>

              {filesLoading && <p>Loading files...</p>}
              {filesError && <p>{filesError}</p>}

              {!filesLoading &&
                files.map((file) => (
                  <button
                    key={file.id}
                    className="sidebar-item file-item"
                    onClick={() => loadFileContent(file.id)}
                  >
                    {file.path}
                  </button>
                ))}
            </>
          )}
        </aside>

        <main className="editor-panel">
          {!selectedFile && !fileLoading && !fileError && (
            <div className="empty-state">
              <h2>Welcome to RepoLens AI</h2>
              <p>Select a file to explore its source code.</p>
            </div>
          )}

          {fileLoading && <p>Loading source code...</p>}
          {fileError && <p>{fileError}</p>}

          {selectedFile && !fileLoading && (
            <div className="editor-content" ref={codeViewerRef}>
              <div className="editor-tab">
                {selectedFile.path}
              </div>

              <SyntaxHighlighter
                language={detectLanguage(selectedFile.path)}
                style={oneDark}
                showLineNumbers
                wrapLines
                wrapLongLines={false}
                lineProps={(lineNumber) => {
                  const isHighlighted =
                    highlightedLines !== null &&
                    lineNumber >= highlightedLines.start &&
                    lineNumber <= highlightedLines.end;

                  return {
                    'data-search-line': String(lineNumber),
                    style: {
                      display: 'block',
                      backgroundColor: isHighlighted
                        ? 'rgba(234, 179, 8, 0.20)'
                        : 'transparent',
                    },
                  };
                }}
                customStyle={{
                  margin: 0,
                  borderRadius: 0,
                  minHeight: '100%',
                }}
              >
                {selectedFile.content}
              </SyntaxHighlighter>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function findMatchLines(result: SearchResult, query: string): MatchLine[] {
  const needle = query.trim().toLowerCase();

  if (!needle) {
    return [];
  }

  return result.content
    .split('\n')
    .map((text, index) => ({ lineNumber: result.startLine + index, text }))
    .filter((line) => line.text.toLowerCase().includes(needle));
}

function detectLanguage(path: string): string {
  const extension = path.split('.').pop()?.toLowerCase();

  switch (extension) {
    case 'ts':
      return 'typescript';
    case 'tsx':
      return 'tsx';
    case 'js':
      return 'javascript';
    case 'jsx':
      return 'jsx';
    case 'json':
      return 'json';
    case 'py':
      return 'python';
    case 'css':
      return 'css';
    case 'html':
      return 'markup';
    default:
      return 'text';
  }
}

export default App;