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

/**
 * Carregamento do dataset gerado.
 *
 * O arquivo é produzido no build por `scripts/fetch-github-projects.mjs` e é
 * ignorado pelo Git, então pode não existir em um clone novo ou no dev antes do
 * primeiro sync. `import.meta.glob` resolve para um objeto vazio nesse caso em
 * vez de quebrar o bundle, o que mantém o portfolio funcionando apenas com o
 * legado.
 */
interface GeneratedModule {
  default?: unknown;
}

const generatedModules = import.meta.glob('./generated/github-projects.json', {
  eager: true,
}) as Record<string, GeneratedModule>;

function asString(value: unknown): string | null {
  return typeof value === 'string' ? value : null;
}

function asStringList(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];
}

function isSyncedProject(value: unknown): value is Record<string, unknown> {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  const candidate = value as Record<string, unknown>;
  return (
    typeof candidate.owner === 'string' &&
    typeof candidate.repository === 'string' &&
    typeof candidate.slug === 'string' &&
    typeof candidate.name === 'string'
  );
}

function toSyncedProject(value: unknown): SyncedProject | null {
  if (!isSyncedProject(value)) {
    return null;
  }
  const raw = value;
  return {
    owner: asString(raw.owner) ?? '',
    repository: asString(raw.repository) ?? '',
    slug: asString(raw.slug) ?? '',
    portfolio: raw.portfolio !== false,
    featured: raw.featured === true,
    category: asString(raw.category),
    name: asString(raw.name) ?? '',
    htmlUrl: asString(raw.htmlUrl) ?? '',
    homepage: asString(raw.homepage),
    language: asString(raw.language),
    topics: asStringList(raw.topics),
    updatedAt: asString(raw.updatedAt),
    cover: asString(raw.cover),
    screenshots: asStringList(raw.screenshots),
  };
}

let cachedProjects: SyncedProject[] | null = null;

/** Dataset sincronizado do último build; lista vazia quando ainda não existe. */
export function getSyncedProjects(): SyncedProject[] {
  if (cachedProjects !== null) {
    return cachedProjects;
  }

  const projects: SyncedProject[] = [];
  for (const module of Object.values(generatedModules)) {
    const payload = module?.default;
    if (typeof payload !== 'object' || payload === null) {
      continue;
    }
    const rawProjects = (payload as Partial<SyncedProjectsPayload>).projects;
    if (Array.isArray(rawProjects)) {
      for (const item of rawProjects) {
        const project = toSyncedProject(item);
        if (project !== null) {
          projects.push(project);
        }
      }
    }
    break;
  }

  cachedProjects = projects;
  return cachedProjects;
}