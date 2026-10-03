/**
 * Contrato de dados da sincronização GitHub (V1).
 *
 * O `portfolio.json` vive na raiz de cada repositório e é a única coisa que um
 * repositório publica para o portfolio. Todo o restante do modelo normalizado
 * vem da API pública do GitHub.
 *
 * Contrato espelhado em `scripts/fetch-github-projects.mjs`. Alterar um lado
 * exige alterar o outro.
 */

export interface PortfolioManifest {
  portfolio: boolean;
  slug: string;
  featured?: boolean;
  category?: string;
  cover?: string;
  screenshots?: string[];
}

export interface SyncedProject {
  owner: string;
  repository: string;
  slug: string;
  portfolio: boolean;
  featured: boolean;
  category: string | null;
  name: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  updatedAt: string | null;
  cover: string | null;
  screenshots: string[];
}

export interface SyncedProjectsStats {
  owners: number;
  repositoriesScanned: number;
  manifestsFound: number;
  optedOut: number;
  projects: number;
}

export interface SyncedProjectsPayload {
  generatedAt: string;
  source: 'github';
  degraded: boolean;
  owners: string[];
  errors: string[];
  stats: SyncedProjectsStats;
  projects: SyncedProject[];
}