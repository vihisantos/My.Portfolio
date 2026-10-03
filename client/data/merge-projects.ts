import type { SyncedProject } from './synced-projects';

export interface HardcodedProject {
  id: number;
  demoUrl?: string;
}

export interface MergeResult<T> {
  entries: Array<T | SyncedProject>;
  duplicates: SyncedProject[];
}

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
 * Junta o dataset hardcoded (fonte atual, tem precedencia) com o dataset
 * sincronizado do GitHub.
 *
 * O projeto sincronizado e descartado quando:
 * - a `homepage` ou `htmlUrl` bate com o `demoUrl` de um projeto hardcoded; ou
 * - o `slug` ja apareceu no dataset sincronizado.
 *
 * Assim o Vitrine360 hardcoded (id 5) permanece sendo o exibido e o
 * sincronizado nao vira uma segunda Vitrine360 na interface.
 */
export function mergeProjects<T extends HardcodedProject>(
  hardcoded: T[],
  synced: SyncedProject[],
): MergeResult<T> {
  const hardcodedUrls = new Set<string>();
  for (const project of hardcoded) {
    const url = normalizeUrl(project.demoUrl);
    if (url) {
      hardcodedUrls.add(url);
    }
  }

  const seenSlugs = new Set<string>();
  const seenUrls = new Set<string>();
  const accepted: SyncedProject[] = [];
  const duplicates: SyncedProject[] = [];

  for (const project of synced) {
    const homepage = normalizeUrl(project.homepage);
    const htmlUrl = normalizeUrl(project.htmlUrl);

    const collidesHardcoded = [homepage, htmlUrl].some((url) => url !== null && hardcodedUrls.has(url));
    const collidesSynced =
      seenSlugs.has(project.slug) ||
      [homepage, htmlUrl].some((url) => url !== null && seenUrls.has(url));

    if (collidesHardcoded || collidesSynced) {
      duplicates.push(project);
      continue;
    }

    seenSlugs.add(project.slug);
    if (homepage) {
      seenUrls.add(homepage);
    }
    if (htmlUrl) {
      seenUrls.add(htmlUrl);
    }
    accepted.push(project);
  }

  return { entries: [...hardcoded, ...accepted], duplicates };
}