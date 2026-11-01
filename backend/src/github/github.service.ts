import {
  Injectable,
  NotFoundException,
  BadGatewayException,
  ServiceUnavailableException,
  BadRequestException,
} from '@nestjs/common';

interface GithubRepository {
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  default_branch: string;
}

interface GithubTreeItem {
  path: string;
  type: 'blob' | 'tree' | 'commit';
  sha: string;
  size?: number;
}

interface GithubTreeResponse {
  sha: string;
  tree: GithubTreeItem[];
  truncated: boolean;
}

interface GithubBlobResponse {
  sha: string;
  size: number;
  encoding: string;
  content: string;
}

@Injectable()
export class GithubService {
  async getRepository(owner: string, repo: string) {
    const url = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`;

    let response: Response;

    try {
      response = await fetch(url, {
        headers: {
          Accept: 'application/vnd.github+json',
          'User-Agent': 'RepoLens-AI',
        },
        signal: AbortSignal.timeout(10000),
      });
    } catch {
      throw new BadGatewayException('Could not reach GitHub');
    }

    if (response.status === 404) {
      throw new NotFoundException('Repository not found');
    }

    if (response.status === 403 || response.status === 429) {
      throw new ServiceUnavailableException('GitHub request limit reached');
    }

    if (!response.ok) {
      throw new BadGatewayException('GitHub API request failed');
    }

    const data = (await response.json()) as GithubRepository;

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

  async getRepositoryTree(owner: string, repo: string) {
    const repository = await this.getRepository(owner, repo);

    const url =
      `https://api.github.com/repos/${encodeURIComponent(owner)}` +
      `/${encodeURIComponent(repo)}/git/trees/HEAD?recursive=1`;

    let response: Response;

    try {
      response = await fetch(url, {
        headers: {
          Accept: 'application/vnd.github+json',
          'User-Agent': 'RepoLens-AI',
        },
        signal: AbortSignal.timeout(10000),
      });
    } catch {
      throw new BadGatewayException('Could not reach GitHub');
    }

    if (response.status === 404) {
      throw new NotFoundException('Repository tree not found');
    }

    if (response.status === 403 || response.status === 429) {
      throw new ServiceUnavailableException('GitHub request limit reached');
    }

    if (!response.ok) {
      throw new BadGatewayException('GitHub tree request failed');
    }

    const data = (await response.json()) as GithubTreeResponse;

    if (data.truncated) {
      throw new BadGatewayException('Repository tree is too large');
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

  async getFileContent(owner: string, repo: string, sha: string) {
    const url =
      `https://api.github.com/repos/${encodeURIComponent(owner)}` +
      `/${encodeURIComponent(repo)}/git/blobs/${sha}`;

    let response: Response;

    try {
      response = await fetch(url, {
        headers: {
          Accept: 'application/vnd.github+json',
          'User-Agent': 'RepoLens-AI',
        },
        signal: AbortSignal.timeout(10000),
      });
    } catch {
      throw new BadGatewayException('Could not reach GitHub');
    }

    if (response.status === 404) {
      throw new NotFoundException('File not found');
    }

    if (response.status === 403 || response.status === 429) {
      throw new ServiceUnavailableException('GitHub request limit reached');
    }

    if (!response.ok) {
      throw new BadGatewayException('GitHub file request failed');
    }

    const data = (await response.json()) as GithubBlobResponse;

    if (data.encoding !== 'base64') {
      throw new BadGatewayException('Unsupported file encoding');
    }

    const maxFileSize = 100_000;

    if (data.size > maxFileSize) {
      throw new BadRequestException('File is too large');
    }

    const content = Buffer.from(
      data.content.replace(/\s/g, ''),
      'base64',
    ).toString('utf-8');

    return {
      sha: data.sha,
      size: data.size,
      content,
    };
  }
}