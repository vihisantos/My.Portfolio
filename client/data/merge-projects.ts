import type { SyncedProject } from './synced-projects';

/**
 * Forma que a interface consome. Espelha o formato historico de
 * `client/data/projects.ts`, entao um projeto sincronizado e um legado sao
 * indistinguiveis para os componentes.
 */
export interface ProjectCard {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  badge?: string;
  badgeType?: string;
  challenge?: string;
  solution?: string;
  impact?: string;
  repoUrl?: string;
  downloadLink?: string;
  clientName?: string;
  clientPhoto?: string;
  clientTestimonial?: string;
}

/**
 * Os ids legados ocupam 1..26. Projetos sincronizados entram a partir daqui,
 * em ordem estavel (a ordem do dataset gerado), sem colidir com o legado nem
 * mudar a numeracao existente - `/project/:id` continua resolvendo igual.
 */
const SYNCED_PROJECT_ID_OFFSET = 1000;

function normalizeUrl(value: string | null | undefined): string | null {
  if (typeof value !== 'string') {
    return null;
  }
  const trimmed = value.trim().toLowerCase();
  if (trimmed === '') {
    return null;
  }
  return trimmed
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .replace(/\/+$/, '');
}

/**
 * Converte um projeto sincronizado no mesmo formato de card do legado.
 *
 * Devolve `null` quando o repositorio nao tem `cover`: os cards da interface
 * assumem imagem, e publicar um card sem imagem alteraria o layout. Um
 * repositorio so entra no portfolio com `portfolio: true` **e** `cover`.
 */
function toProjectCard(project: SyncedProject): Omit<ProjectCard, 'id'> | null {
  const cover = project.cover === null ? '' : project.cover.trim();
  if (cover === '') {
    return null;
  }

  const technologies = [project.language, ...project.topics].filter(
    (value): value is string => typeof value === 'string' && value.trim() !== '',
  );

  return {
    title: project.name,
    description: project.description === null ? '' : project.description,
    technologies: Array.from(new Set(technologies)),
    image: cover,
    demoUrl: project.homepage === null ? project.htmlUrl : project.homepage,
    repoUrl: project.htmlUrl,
  };
}

/**
 * Junta o legado com o dataset sincronizado.
 *
 * O legado sempre vem primeiro e nunca e removido: ele e o fallback quando o
 * dataset sincronizado esta vazio, ausente no build ou invalido.
 *
 * Um projeto sincronizado e descartado quando ja existe um legado com a mesma
 * URL (mesmo `demoUrl`) ou quando repete outro sincronizado. A comparacao e por
 * URL normalizada e por `slug`, entao vale para qualquer repositorio, nao
 * apenas para um caso especifico.
 */
export function mergeProjects(
  legacy: ProjectCard[],
  synced: SyncedProject[],
): ProjectCard[] {
  const legacyUrls = new Set<string>();
  for (const project of legacy) {
    const url = normalizeUrl(project.demoUrl);
    if (url !== null) {
      legacyUrls.add(url);
    }
  }

  const seenUrls = new Set<string>();
  const seenSlugs = new Set<string>();
  const cards: ProjectCard[] = [];

  for (const project of synced) {
    const card = toProjectCard(project);
    if (card === null) {
      continue;
    }

    const urls = [normalizeUrl(card.demoUrl), normalizeUrl(card.repoUrl)];
    const collidesLegacy = urls.some((url) => url !== null && legacyUrls.has(url));
    const collidesSynced =
      seenSlugs.has(project.slug) || urls.some((url) => url !== null && seenUrls.has(url));

    if (collidesLegacy || collidesSynced) {
      continue;
    }

    seenSlugs.add(project.slug);
    for (const url of urls) {
      if (url !== null) {
        seenUrls.add(url);
      }
    }

    cards.push({ id: SYNCED_PROJECT_ID_OFFSET + cards.length + 1, ...card });
  }

  return [...legacy, ...cards];
}