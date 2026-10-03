/**
 * Sincroniza projetos do GitHub para um arquivo local consumível pelo frontend.
 *
 * Fluxo: owners configurados -> repositórios -> `portfolio.json` na raiz ->
 * modelo normalizado -> `client/data/generated/github-projects.json`.
 *
 * Autenticação (opcional):
 * - Sem `GITHUB_TOKEN`: apenas repositórios públicos (60 req/h por IP).
 * - Com `GITHUB_TOKEN`: também repositórios privados visíveis ao token (5000 req/h).
 *
 * Permissões mínimas do token: GitHub Fine-grained Personal Access Token,
 * apenas leitura, com acesso limitado aos repositórios que devem aparecer.
 * Nenhuma permissão de escrita é necessária ou usada.
 *
 * Garantias:
 * - Roda apenas no build. O browser nunca fala com o GitHub.
 * - O token vive só no ambiente: nunca é gravado em arquivo, log ou bundle.
 * - Nunca quebra o build: falha de rede, token inválido, rate limit ou API
 *   fora do ar preservam o último dataset válido.
 * - Não inventa dado: campo ausente no GitHub vira `null`.
 *
 * Uso:
 *   node scripts/fetch-github-projects.mjs           # nunca falha o build
 *   node scripts/fetch-github-projects.mjs --strict  # sai != 0 se houve erro
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { SOURCES } from './portfolio-sources.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const OUTPUT_PATH = join(root, 'client', 'data', 'generated', 'github-projects.json');

const MANIFEST_FILE = 'portfolio.json';
const API_BASE = process.env.GITHUB_API_BASE || 'https://api.github.com';
const RAW_BASE = process.env.GITHUB_RAW_BASE || 'https://raw.githubusercontent.com';
const TOKEN = (process.env.GITHUB_TOKEN || '').trim();
const REQUEST_TIMEOUT_MS = 15000;
const PER_PAGE = 100;
const MAX_PAGES = 5;
const STRICT = process.argv.includes('--strict');

let rateLimitRemaining = null;
let authRejected = false;

function redact(message) {
  if (!TOKEN) {
    return message;
  }
  return message.split(TOKEN).join('[redacted]');
}

function warn(message) {
  console.warn(redact(`[github-sync] ${message}`));
}

function buildHeaders() {
  const base = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'my-portfolio-sync',
  };
  if (TOKEN) {
    base.Authorization = `Bearer ${TOKEN}`;
  }
  return base;
}

/**
 * `not-found` e outcome benigno; `unauthorized`/`forbidden` são problema de token;
 * `rate-limited` é cota; `server`/`network` é indisponibilidade.
 */
function classify(response) {
  if (response.status === 401) {
    return 'unauthorized';
  }
  if (response.status === 429) {
    return 'rate-limited';
  }
  if (response.status === 403) {
    return rateLimitRemaining === 0 ? 'rate-limited' : 'forbidden';
  }
  if (response.status >= 500) {
    return 'server';
  }
  if (response.status === 0) {
    return 'network';
  }
  return 'request';
}

function describeFailure(response) {
  const kind = classify(response);
  if (kind === 'unauthorized') {
    return 'token invalido, expirado ou sem permissao (401)';
  }
  if (kind === 'forbidden') {
    return 'token sem acesso a este recurso (403)';
  }
  if (kind === 'rate-limited') {
    return 'rate limit do GitHub atingido';
  }
  if (kind === 'network') {
    return response.error || 'rede indisponivel';
  }
  return `erro do GitHub (${response.error || `HTTP ${response.status}`})`;
}

async function fetchJson(url) {
  try {
    const response = await fetch(url, {
      headers: buildHeaders(),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });

    const remaining = response.headers.get('x-ratelimit-remaining');
    if (remaining !== null) {
      rateLimitRemaining = Number(remaining);
    }

    if (response.status === 404) {
      return { ok: false, status: 404, error: 'nao encontrado' };
    }
    if (!response.ok) {
      if (response.status === 401) {
        authRejected = true;
      }
      return { ok: false, status: response.status, error: `HTTP ${response.status}` };
    }
    return { ok: true, status: response.status, data: await response.json() };
  } catch (error) {
    const timedOut = error && error.name === 'TimeoutError';
    return { ok: false, status: 0, error: timedOut ? 'timeout' : 'rede indisponivel' };
  }
}

async function collectPages(buildUrl, keep) {
  const collected = [];

  for (let page = 1; page <= MAX_PAGES; page += 1) {
    if (rateLimitRemaining === 0) {
      break;
    }

    const response = await fetchJson(buildUrl(page));
    if (!response.ok) {
      return { ok: false, response, repos: collected };
    }

    const batch = Array.isArray(response.data) ? response.data : [];
    collected.push(...batch.filter(keep));

    if (batch.length < PER_PAGE) {
      break;
    }
  }

  return { ok: true, repos: collected };
}

const isOwnedBy = (owner) => (repository) =>
  Boolean(
    repository &&
      typeof repository.name === 'string' &&
      repository.owner &&
      String(repository.owner.login).toLowerCase() === owner.toLowerCase(),
  );

/** Sem token: só repositórios públicos do owner. */
function listPublicRepos(owner) {
  return collectPages(
    (page) => `${API_BASE}/users/${encodeURIComponent(owner)}/repos?per_page=${PER_PAGE}&page=${page}&sort=full_name`,
    () => true,
  );
}

/**
 * Com token: `GET /users/{owner}/repos` nunca devolve repos privados, mesmo
 * autenticado. `GET /user/repos` lista tudo que o token enxerga, em qualquer
 * afiliação, e filtramos pelo owner configurado.
 */
function listAccessibleRepos(owner) {
  return collectPages(
    (page) =>
      `${API_BASE}/user/repos?per_page=${PER_PAGE}&page=${page}` +
      `&affiliation=owner,collaborator,organization_member&sort=full_name`,
    isOwnedBy(owner),
  );
}

async function readManifest(owner, repository, ref) {
  const url = `${API_BASE}/repos/${owner}/${repository}/contents/${MANIFEST_FILE}?ref=${encodeURIComponent(ref)}`;
  const response = await fetchJson(url);

  if (response.status === 404) {
    return { found: false };
  }
  if (!response.ok) {
    return { found: false, error: describeFailure(response) };
  }

  const file = response.data;
  if (!file || file.type !== 'file' || typeof file.content !== 'string') {
    return { found: false, error: 'conteudo inesperado' };
  }

  try {
    const manifest = JSON.parse(Buffer.from(file.content, 'base64').toString('utf-8'));
    return { found: true, manifest };
  } catch {
    return { found: true, error: 'JSON invalido' };
  }
}

function parseManifest(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    return { ok: false, reason: 'manifest invalido' };
  }
  if (raw.portfolio !== true) {
    return { ok: false, reason: 'portfolio nao é true' };
  }
  if (typeof raw.slug !== 'string' || raw.slug.trim() === '') {
    return { ok: false, reason: 'slug ausente' };
  }

  const clean = (value) => (typeof value === 'string' && value.trim() !== '' ? value.trim() : null);

  return {
    ok: true,
    manifest: {
      slug: raw.slug.trim(),
      featured: typeof raw.featured === 'boolean' ? raw.featured : false,
      category: clean(raw.category),
      cover: clean(raw.cover),
      screenshots: Array.isArray(raw.screenshots)
        ? raw.screenshots.map(clean).filter((value) => value !== null)
        : [],
    },
  };
}

function normalizeProject(owner, repository, parsed) {
  const name = repository.name;
  const ref = repository.default_branch;
  const rawUrl = (path) => `${RAW_BASE}/${owner}/${name}/${ref}/${path}`;

  return {
    owner,
    repository: name,
    slug: parsed.slug,
    portfolio: true,
    featured: parsed.featured,
    category: parsed.category,
    name,
    description: typeof repository.description === 'string' ? repository.description : null,
    htmlUrl: repository.html_url,
    homepage: typeof repository.homepage === 'string' && repository.homepage !== '' ? repository.homepage : null,
    language: typeof repository.language === 'string' ? repository.language : null,
    topics: Array.isArray(repository.topics) ? repository.topics.filter((t) => typeof t === 'string') : [],
    updatedAt: typeof repository.updated_at === 'string' ? repository.updated_at : null,
    cover: parsed.cover ? rawUrl(parsed.cover) : null,
    screenshots: parsed.screenshots.map(rawUrl),
  };
}

function readPreviousPayload() {
  if (!existsSync(OUTPUT_PATH)) {
    return null;
  }
  try {
    return JSON.parse(readFileSync(OUTPUT_PATH, 'utf-8'));
  } catch {
    return null;
  }
}

function writePayload(payload) {
  const serialized = `${JSON.stringify(payload, null, 2)}\n`;

  if (TOKEN && serialized.includes(TOKEN)) {
    throw new Error('token detectado no payload gerado; nada foi escrito');
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, serialized, 'utf-8');
}

async function sync() {
  const sources = SOURCES.filter((source) => source.enabled !== false && typeof source.owner === 'string');
  const errors = [];
  const owners = [];
  const projects = [];
  const seenSlugs = new Set();

  let ownersResponded = 0;
  let repositoriesScanned = 0;
  let manifestsFound = 0;
  let optedOut = 0;

  for (const source of sources) {
    const owner = source.owner.trim();
    if (owner === '') {
      continue;
    }

    const listing = TOKEN ? await listAccessibleRepos(owner) : await listPublicRepos(owner);

    if (!listing.ok) {
      errors.push(`${owner}: listagem falhou (${describeFailure(listing.response)})`);
      continue;
    }

    ownersResponded += 1;
    owners.push(owner);

    const candidates = source.includeForks
      ? listing.repos
      : listing.repos.filter((repository) => !repository.fork);

    for (const repository of candidates) {
      if (rateLimitRemaining === 0) {
        errors.push(`${owner}: rate limit do GitHub atingido, varredura parcial`);
        break;
      }

      repositoriesScanned += 1;
      const manifest = await readManifest(owner, repository.name, repository.default_branch);

      if (manifest.error) {
        errors.push(`${owner}/${repository.name}: ${manifest.error}`);
      }
      if (!manifest.found) {
        continue;
      }

      manifestsFound += 1;
      const parsed = parseManifest(manifest.manifest);
      if (!parsed.ok) {
        optedOut += 1;
        warn(`${owner}/${repository.name} ignorado: ${parsed.reason}`);
        continue;
      }
      if (seenSlugs.has(parsed.manifest.slug)) {
        errors.push(`${owner}/${repository.name}: slug duplicado "${parsed.manifest.slug}"`);
        continue;
      }

      seenSlugs.add(parsed.manifest.slug);
      projects.push(normalizeProject(owner, repository, parsed.manifest));
    }

    if (rateLimitRemaining === 0) {
      break;
    }
  }

  projects.sort((a, b) => a.slug.localeCompare(b.slug));

  const stats = {
    owners: owners.length,
    repositoriesScanned,
    manifestsFound,
    optedOut,
    projects: projects.length,
  };

  const previous = readPreviousPayload();
  const previousCount = previous && Array.isArray(previous.projects) ? previous.projects.length : 0;
  const totalFailure = ownersResponded === 0 && sources.length > 0;
  const suspiciousEmpty = projects.length === 0 && previousCount > 0 && errors.length > 0;

  if (TOKEN && authRejected) {
    warn('GITHUB_TOKEN foi rejeitado pelo GitHub (401). Verifique o valor e as permissões.');
  }

  if (previous && (totalFailure || suspiciousEmpty)) {
    warn(
      `mantendo resultado anterior (${previousCount} projeto(s)): ` +
        (totalFailure ? 'nenhum owner respondeu' : 'resultado vazio com erros'),
    );
    if (STRICT) {
      process.exitCode = 1;
    }
    return;
  }

  writePayload({
    generatedAt: new Date().toISOString(),
    source: 'github',
    degraded: errors.length > 0,
    owners,
    errors,
    stats,
    projects,
  });

  warn(
    `${stats.projects} projeto(s) de ${stats.owners} owner(s), ` +
      `${stats.repositoriesScanned} repositorio(s) verificado(s) [${TOKEN ? 'autenticado' : 'sem token'}]`,
  );
  if (errors.length > 0) {
    warn(`${errors.length} aviso(s): ${errors.join('; ')}`);
  }
  if (STRICT && errors.length > 0) {
    process.exitCode = 1;
  }
}

sync().catch((error) => {
  console.error(redact(`[github-sync] falhou: ${error.message}`));
  process.exitCode = STRICT ? 1 : 0;
});