import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const BASE = 'https://vihisantos.github.io/My.Portfolio';

const today = new Date().toISOString().split('T')[0];

// Static routes
const staticRoutes = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'projects', priority: '0.9', changefreq: 'weekly' },
  { path: 'capybara-holding', priority: '0.8', changefreq: 'monthly' },
  { path: 'ui-library', priority: '0.6', changefreq: 'monthly' },
  { path: 'sponsorship', priority: '0.8', changefreq: 'monthly' },
  { path: 'docs', priority: '0.2', changefreq: 'monthly' },
];

// Extract project IDs from projects.ts
const projectsContent = readFileSync(join(root, 'client', 'data', 'projects.ts'), 'utf-8');
const idMatches = [...projectsContent.matchAll(/id:\s*(\d+)/g)];
const projectIds = [...new Set(idMatches.map(m => m[1]))].sort((a, b) => Number(a) - Number(b));

const projectRoutes = projectIds.map(id => ({
  path: `project/${id}`,
  priority: '0.7',
  changefreq: 'weekly',
}));

const allRoutes = [...staticRoutes, ...projectRoutes];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;
for (const { path, priority, changefreq } of allRoutes) {
  const loc = path ? `${BASE}/${path}` : BASE;
  xml += `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
}
xml += `</urlset>
`;

writeFileSync(join(root, 'public', 'sitemap.xml'), xml, 'utf-8');
console.log(`✅ Sitemap gerado com ${allRoutes.length} URLs`);
