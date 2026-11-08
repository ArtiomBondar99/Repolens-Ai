import { useEffect, useState } from 'react';
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
  const [highlightedLines, setHighlightedLines] = useState<number[]>([]);

  useEffect(() => {
    if (!selectedFile || highlightedLines.length === 0) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      document
        .querySelector('.editor-panel .highlighted-line')
        ?.scrollIntoView({ block: 'center' });
    });

    return () => cancelAnimationFrame(frame);
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
    setSelectedRepo(repo);
    setFiles([]);
    setFilesLoading(true);
    setFilesError('');
    setSelectedFile(null);
    setFileError('');
    setSearchQuery('');
    setSearchResults([]);
    setSearchError('');
    setHasSearched(false);
    setSearchedQuery('');
    setHighlightedLines([]);

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
    linesToHighlight: number[] = []
  ) {
    if (!selectedRepo) {
      return;
    }

    setSelectedFile(null);
    setFileLoading(true);
    setFileError('');
    setHighlightedLines(linesToHighlight);

    try {
      const response = await fetch(
        `http://localhost:3000/repositories/${selectedRepo.id}/files/${fileId}/content`
      );

      if (!response.ok) {
        throw new Error('Failed to load file content');
      }

      const data: FileContent = await response.json();

      setSelectedFile(data);
    } catch {
      setFileError('Could not load file content');
    } finally {
      setFileLoading(false);
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

  function openSearchResult(result: SearchResult) {
    const matches = findMatchLines(result, searchedQuery);

    const lines =
      matches.length > 0
        ? matches.map((match) => match.lineNumber)
        : rangeOf(result.startLine, result.endLine);

    void loadFileContent(result.fileId, lines);
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
                  onClick={() => openSearchResult(result)}
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
            <div className="editor-content">
              <div className="editor-tab">
                {selectedFile.path}
              </div>

              <SyntaxHighlighter
                language={detectLanguage(selectedFile.path)}
                style={oneDark}
                showLineNumbers
                wrapLines
                lineProps={(lineNumber) =>
                  highlightedLines.includes(lineNumber)
                    ? {
                      className: 'highlighted-line',
                      style: { display: 'block' },
                    }
                    : { style: { display: 'block' } }
                }
                wrapLongLines={false}
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

function rangeOf(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
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