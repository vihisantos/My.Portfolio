import { qs, qsa, escapeHTML } from './utils.js';
import { openModal } from './modals.js';
import { initCarousel } from './carousel.js';

const PAGE_SIZE = 6;
let allProjects = [];
let filtered = [];
let page = 1;
let carousel;

export async function initProjects() {
carousel = initCarousel();
const res = await fetch('/api/projects.json');
allProjects = await res.json();
filtered = allProjects;
bindControls();
render();
}
function bindControls() {
qs('#project-search').addEventListener('input', onFilter);
qs('#project-filter').addEventListener('change', onFilter);
qs('#load-more').addEventListener('click', () => { page++; render(); });
}
function onFilter() {
const term = qs('#project-search').value.toLowerCase().trim();
const tag = qs('#project-filter').value;
filtered = allProjects.filter(p => {
const matchTerm = p.title.toLowerCase().includes(term) || p.description.toLowerCase().includes(term);
const matchTag = tag === 'all' ? true : p.tags.includes(tag);
return matchTerm && matchTag;
});
page = 1; render(true);
}
function render(reset = false) {
const grid = qs('#projects-grid');
if (reset) grid.innerHTML = '';
const slice = filtered.slice(0, PAGE_SIZE * page);
grid.innerHTML = slice.map(projectCard).join('') || '<p>Nenhum projeto encontrado.</p>';
qsa('.project-card').forEach(card => card.addEventListener('click', () => openProject(card.dataset.id)));
}
function projectCard(p) {
const tags = p.tags.map(t => <li class="tag">${escapeHTML(t)}</li>).join('');
return <article class="project-card card" data-id="${escapeHTML(p.id)}" role="listitem" tabindex="0"> <div class="project-media"> <img src="${escapeHTML(p.cover)}" alt="Preview do projeto ${escapeHTML(p.title)}" loading="lazy" /> </div> <div class="project-body"> <h3>${escapeHTML(p.title)}</h3> <ul class="project-tags">${tags}</ul> <button class="btn btn-outline">Ver detalhes</button> </div> </article>;
}
function openProject(id) {
const proj = allProjects.find(p => p.id === id);
if (!proj) return;
const modal = document.getElementById('project-modal');
modal.querySelector('#project-modal-title').textContent = proj.title;
modal.querySelector('.project-description').textContent = proj.description;
modal.querySelector('.project-tags').innerHTML = proj.tags.map(t => <li class="tag">${t}</li>).join('');
modal.querySelector('#project-live').href = proj.live;
modal.querySelector('#project-github').href = proj.github;
const track = modal.querySelector('#carousel-track');
track.innerHTML = proj.media.map(src => <div class="carousel-slide"><img src="${src}" alt="Imagem do projeto ${proj.title}" loading="lazy"/></div>).join('');
const slides = [...track.children];
carousel.setSlides(slides);
openModal('project-modal');
}