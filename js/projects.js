import { qs, qsa, escapeHTML } from './utils.js';
import { openModal } from './modals.js';
import { initCarousel } from './carousel.js';
import { storage } from './storage.js';

const PAGE_SIZE = 6;
let allProjects = [];
let filtered = [];
let page = 1;
let carousel;

export async function initProjects() {
carousel = initCarousel();
const res = await fetch('api/projects.json');
allProjects = await res.json();
filtered = allProjects;
bindControls();
render();
}

function bindControls() {
qs('#project-search').addEventListener('input', onFilter);
qs('#project-filter').addEventListener('change', onFilter);
qs('#load-more').addEventListener('click', function () { page++; render(); });
}

function onFilter() {
const term = (qs('#project-search').value || '').toLowerCase().trim();
const tag = qs('#project-filter').value;
filtered = allProjects.filter(function (p) {
const matchTerm = p.title.toLowerCase().includes(term) || p.description.toLowerCase().includes(term);
const matchTag = tag === 'all' ? true : p.tags.includes(tag);
return matchTerm && matchTag;
});
page = 1; render(true);
}

function render(reset) {
if (reset === void 0) reset = false;
const grid = qs('#projects-grid');
if (!grid) return;
if (reset) grid.innerHTML = '';
const slice = filtered.slice(0, PAGE_SIZE * page);
grid.innerHTML = slice.map(projectCard).join('') || '<p>Nenhum projeto encontrado.</p>';

// Abrir com clique e com teclado (Enter/Espaço)
qsa('.project-card').forEach(function (card) {
const id = card.getAttribute('data-id');
card.addEventListener('click', function () { openProjectById(id); });
card.addEventListener('keydown', function (e) {
if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProjectById(id); }
});
});
}

function projectCard(p) {
const tags = (p.tags || []).map(function (t) {
return '<li class="tag">' + escapeHTML(t) + '</li>';
}).join('');

// até 3 tecnologias da stack como badges
const stackBadges = (p.stack || []).slice(0, 3).map(function (s) {
const safe = escapeHTML(String(s));
return '<span class="badge badge-stack" title="' + safe + '">' + safe + '</span>';
}).join('');

return ''
+ '<article class="project-card card" data-id="' + escapeHTML(p.id) + '" role="listitem" tabindex="0">'
+ '<div class="project-media">'
+ '<img src="' + escapeHTML(p.cover) + '" alt="Preview do projeto ' + escapeHTML(p.title) + '" loading="lazy" />'
+ '</div>'
+ '<div class="project-body">'
+ '<h3>' + escapeHTML(p.title) + '</h3>'
+ '<ul class="project-tags">' + tags + '</ul>'
+ (stackBadges ? '<div class="project-stack" aria-label="Tecnologias">' + stackBadges + '</div>' : '')
+ '<button class="btn btn-outline" type="button">Ver detalhes</button>'
+ '</div>'
+ '</article>';
}

// Export para reuso (Command Palette etc.)
export function openProjectById(id) {
const proj = allProjects.find(function (p) { return p.id === id; });
if (!proj) return;

const modal = document.getElementById('project-modal');
modal.querySelector('#project-modal-title').textContent = proj.title;
modal.querySelector('.project-description').textContent = proj.description;

modal.querySelector('.project-tags').innerHTML = (proj.tags || []).map(function (t) {
return '<li class="tag">' + escapeHTML(t) + '</li>';
}).join('');

// Injeta/atualiza a stack completa no modal antes dos links
const info = modal.querySelector('.project-info');
if (info) {
let stackBox = info.querySelector('.project-stack');
if (!stackBox) {
stackBox = document.createElement('div');
stackBox.className = 'project-stack';
info.insertBefore(stackBox, info.querySelector('.project-links'));
}
stackBox.innerHTML = (proj.stack || []).map(function (s) {
const safe = escapeHTML(String(s));
return '<span class="badge badge-stack" title="' + safe + '">' + safe + '</span>';
}).join('');
}

modal.querySelector('#project-live').href = proj.live;
modal.querySelector('#project-github').href = proj.github;

const track = modal.querySelector('#carousel-track');
track.innerHTML = (proj.media || []).map(function (src) {
return '<div class="carousel-slide"><img src="' + src + '" alt="Imagem do projeto ' + escapeHTML(proj.title) + '" loading="lazy"/></div>';
}).join('');
const slides = Array.from(track.children);
carousel.setSlides(slides);

// Opcional: timeline se você já integrou
renderTimeline(proj.id, modal);

openModal('project-modal');
}

// Timeline (mantém se você já tinha; pode remover se não usa)
async function getUpdates() {
const local = storage.listUpdates();
try {
const seed = await fetch('api/admin-updates.json').then(function (r) { return r.json(); });
const byId = new Map(seed.map(function (u) { return [u.id, u]; }));
local.forEach(function (u) { byId.set(u.id, u); });
return Array.from(byId.values()).sort(function (a, b) { return new Date(b.date) - new Date(a.date); });
} catch (e) { return local; }
}
async function renderTimeline(projectId, modal) {
const list = modal.querySelector('.timeline-list');
if (!list) return;
const all = await getUpdates();
const rows = all.filter(function (u) { return u.projectId === projectId; });
if (!rows.length) {
list.innerHTML = '<li class="timeline-item"><span class="timeline-date">—</span><div><p class="timeline-desc">Sem updates registrados.</p></div></li>';
return;
}
list.innerHTML = rows.map(function (u) {
return ''
+ '<li class="timeline-item">'
+ '<span class="timeline-date">' + new Date(u.date).toLocaleDateString() + '</span>'
+ '<div>'
+ '<p class="timeline-desc">' + String(u.desc).replace(/</g, '&lt;') + '</p>'
+ '<small><strong>Tempo:</strong> ' + u.time + ' • <span class="timeline-stars">' + '★'.repeat(Number(u.satisfaction) || 0) + '</span></small>'
+ '</div>'
+ '</li>';
}).join('');
}