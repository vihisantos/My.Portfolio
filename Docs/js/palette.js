import { openProjectById } from './projects.js';
import { openModal } from './modals.js';

const NAV = [
{ id: 'nav-projects', label: 'Ir para Projetos', meta: 'Seção', action: () => document.getElementById('projects')?.scrollIntoView({behavior:'smooth'}) },
{ id: 'nav-about', label: 'Ir para Sobre', meta: 'Seção', action: () => document.getElementById('about')?.scrollIntoView({behavior:'smooth'}) },
{ id: 'nav-contact', label: 'Ir para Contato', meta: 'Seção', action: () => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'}) },
{ id: 'nav-admin', label: 'Ir para Admin', meta: 'Seção', action: () => document.getElementById('admin')?.scrollIntoView({behavior:'smooth'}) },
];

const ACTIONS = [
{ id: 'act-theme', label: 'Alternar tema (Light/Dark)', meta: 'Ação', action: () => {
const root = document.documentElement;
const current = root.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
root.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
try { localStorage.setItem('theme', root.getAttribute('data-theme')); } catch {}
}
},
{ id: 'act-frontend', label: 'Abrir habilidades Frontend', meta: 'Modal', action: () => openModal('modal-frontend') },
{ id: 'act-backend', label: 'Abrir habilidades Backend', meta: 'Modal', action: () => openModal('modal-backend') },
{ id: 'act-data', label: 'Abrir habilidades Dados/AI', meta: 'Modal', action: () => openModal('modal-data') },
{ id: 'ext-github', label: 'Abrir GitHub', meta: 'Externo', action: () => window.open('https://github.com/vihisantos&#39;,&#39;_blank&#39;,&#39;noopener ') },
{ id: 'ext-linkedin', label: 'Abrir LinkedIn', meta: 'Externo', action: () => window.open('https://www.linkedin.com/in/vihisantos&#39;,&#39;_blank&#39;,&#39;noopener ') },
];

function normalize(s) { return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,''); }
function matchScore(q, text) {
const i = normalize(text).indexOf(normalize(q));
if (q.length === 0) return 1;
if (i === -1) return 0;
return 1 / (i + 1) + Math.min(q.length / text.length, 1);
}

export async function initPalette() {
const modal = document.getElementById('cmdk');
const input = document.getElementById('cmdk-input');
const list = document.getElementById('cmdk-list');
if (!modal || !input || !list) return;

// Carregar projetos
let projects = [];
try {
const res = await fetch('api/projects.json'); projects = await res.json();
} catch { projects = []; }

let items = [
...NAV,
...ACTIONS,
...projects.map(p => ({ id: p.id, label: p.title, meta: 'Projeto', action: () => openProjectById(p.id) }))
];

let idx = 0; let filtered = items;

function render() {
list.innerHTML = filtered.map((it, i) =>
<li class="cmdk-item" role="option" aria-selected="${i===idx?'true':'false'}" data-id="${it.id}"> <span>${it.label}</span> <span class="cmdk-meta">${it.meta}</span> </li>).join('') || '<li class="cmdk-item">Nada encontrado…</li>';
}
function open() {
modal.hidden = false; document.body.style.overflow = 'hidden';
input.value = ''; filtered = items; idx = 0; render(); input.focus();
}
function close() {
modal.hidden = true; document.body.style.overflow = '';
}

input.addEventListener('input', () => {
const q = input.value.trim();
filtered = items
.map(it => ({ it, score: matchScore(q, it.label + ' ' + it.meta) }))
.filter(x => x.score > 0)
.sort((a,b) => b.score - a.score)
.map(x => x.it);
idx = 0; render();
});

input.addEventListener('keydown', (e) => {
const max = filtered.length;
if (e.key === 'ArrowDown') { e.preventDefault(); idx = (idx + 1) % max; render(); }
if (e.key === 'ArrowUp') { e.preventDefault(); idx = (idx - 1 + max) % max; render(); }
if (e.key === 'Enter') {
const sel = filtered[idx]; if (sel) { sel.action(); close(); }
}
if (e.key === 'Escape') { close(); }
});

list.addEventListener('click', (e) => {
const li = e.target.closest('.cmdk-item'); if (!li) return;
const id = li.getAttribute('data-id');
const sel = filtered.find(i => i.id === id);
sel?.action(); close();
});

// Abrir com Ctrl/Cmd+K
document.addEventListener('keydown', (e) => {
const isMac = navigator.platform.toUpperCase().includes('MAC');
if ((isMac ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === 'k') {
e.preventDefault(); modal.hidden ? open() : close();
}
});

// Fechar ao clicar fora
modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
}