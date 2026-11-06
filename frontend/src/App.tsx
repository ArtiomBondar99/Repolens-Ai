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

  async function loadFileContent(file: RepositoryFile) {
    if (!selectedRepo) {
      return;
    }

    setSelectedFile(null);
    setFileLoading(true);
    setFileError('');

    try {
      const response = await fetch(
        `http://localhost:3000/repositories/${selectedRepo.id}/files/${file.id}/content`
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

  if (loading) {
    return <p>Loading repositories...</p>;
  }

  if (error) {
    return <p>{error}</p>;
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
            <>
              <h3>Files</h3>

              {filesLoading && <p>Loading files...</p>}
              {filesError && <p>{filesError}</p>}

              {!filesLoading &&
                files.map((file) => (
                  <button
                    key={file.id}
                    className="sidebar-item file-item"
                    onClick={() => loadFileContent(file)}
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