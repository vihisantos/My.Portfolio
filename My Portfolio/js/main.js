import { initThemeToggle } from './theme.js';
import { initTyping } from './typing.js';
import { initLiquidCanvas } from './liquid.js';
import { initNav } from './nav.js';
import { initModals } from './modals.js';
import { initProjects } from './projects.js';
import { initContact } from './contact.js';
import { initAdmin } from './admin.js';
import { initPWA } from './pwa.js';
import { clamp } from './utils.js';

document.documentElement.classList.remove('no-js');

initThemeToggle();
initTyping('typing', 'skip-typing');
initLiquidCanvas();
initNav();
initModals();
initProjects();
initContact();
initAdmin();
initPWA();

// Hero avatar blur + parallax
const avatar = document.getElementById('hero-avatar');
const hero = document.getElementById('hero');
const onScroll = () => {
const rect = hero.getBoundingClientRect();
const progress = clamp((window.scrollY || -rect.top) / 200, 0, 1);
const blur = Math.round(progress * 10);
avatar.style.filter = blur(${blur}px);
avatar.style.transform = translateY(${progress * 18}px) scale(${1 - progress * 0.05});
};
document.addEventListener('scroll', onScroll, { passive: true });

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Open skill modals with data
(async function initSkills() {
const res = await fetch('/api/skills.json'); const data = await res.json();
document.querySelectorAll('.skills-list').forEach(list => {
const cat = list.dataset.skillCategory;
const items = data[cat] || [];
list.innerHTML = items.map((s) => <div class="skill-item"> <img src="${s.logo}" alt="" aria-hidden="true" width="40" height="40"/> <div> <div style="display:flex;align-items:center;justify-content:space-between;"> <strong>${s.name}</strong> <small>${s.level}%</small> </div> <div class="skill-level" aria-hidden="true"><span style="width:${s.level}%"></span></div> <p>${s.desc}</p> ${s.projects?.length ?<div>Projetos: {s.projects.map(id=>`<a href="#projects" class="btn-link" data-proj="{id}">${id}</a>).join(', ')}</div> : ''}
</div>
</div>
`).join('');
list.querySelectorAll('[data-proj]').forEach(a => {
a.addEventListener('click', (e) => {
e.preventDefault();
document.getElementById('project-filter').value = 'all';
document.getElementById('project-search').value = '';
document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});
});
});
})();

// Delegate ESC close for modals (safety)
document.addEventListener('keydown', (e) => {
if (e.key === 'Escape') {
document.querySelectorAll('.modal:not([hidden]) [data-close]')?.forEach(btn => btn.click());
}
});

service-worker.js
const CACHE = 'portfolio-cache-v1';
const ASSETS = [
'/', '/index.html',
'/css/base.css','/css/theme.css','/css/layout.css','/css/components.css','/css/utilities.css',
'/js/main.js','/js/theme.js','/js/typing.js','/js/liquid.js','/js/nav.js','/js/modals.js','/js/projects.js','/js/carousel.js','/js/contact.js','/js/admin.js','/js/storage.js','/js/toast.js','/js/a11y.js','/js/utils.js','/js/pwa.js',
'/api/projects.json','/api/skills.json','/api/admin-updates.json',
'/assets/images/avatar.webp','/assets/images/avatar-placeholder.svg','/assets/images/project-placeholder.webp'
];
self.addEventListener('install', (e) => {
e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});
self.addEventListener('activate', (e) => {
e.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (e) => {
e.respondWith(
caches.match(e.request).then(res => res || fetch(e.request).then(r => {
const copy = r.clone();
caches.open(CACHE).then(c => c.put(e.request, copy));
return r;
}).catch(() => caches.match('/index.html')))
);
});

manifest.webmanifest
{
"name": "Portfolio | Seu Nome",
"short_name": "Portfolio",
"start_url": "/",
"display": "standalone",
"background_color": "#1F1F20",
"theme_color": "#5A2A27",
"icons": [
{ "src": "/assets/images/avatar-placeholder.svg", "sizes": "192x192", "type": "image/svg+xml" }
]
}