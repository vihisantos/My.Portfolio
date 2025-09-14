import { storage } from './storage.js';
import { formatDate, downloadFile, qs } from './utils.js';
import { showToast } from './toast.js';

let satisfaction = 0; let projects = [];

export async function initAdmin() {
// carregar projetos para dropdown
const res = await fetch('/api/projects.json'); projects = await res.json();
const select = document.getElementById('project-select');
select.innerHTML = projects.map(p => <option value="${p.id}">${p.title}</option>).join('');

await storage.importSeed();

const loginForm = document.getElementById('login-form');
const panel = document.getElementById('admin-panel');
const authArea = document.getElementById('auth-area');
const userSpan = document.getElementById('current-user');

const user = storage.getUser();
if (user) { authArea.hidden = true; panel.hidden = false; userSpan.textContent = Logado como ${user.email}; }

loginForm.addEventListener('submit', (e) => {
e.preventDefault();
const email = document.getElementById('login-email').value.trim();
const pwd = document.getElementById('login-password').value;
if (email && pwd.length >= 4) {
storage.setUser({ email });
authArea.hidden = true; panel.hidden = false; userSpan.textContent = Logado como ${email};
showToast('Login realizado', 'success');
} else {
showToast('Credenciais inválidas', 'error');
}
});
document.getElementById('logout').addEventListener('click', () => {
storage.clearUser(); authArea.hidden = false; panel.hidden = true; showToast('Sessão encerrada', 'success');
});

const stars = [...document.querySelectorAll('.star')];
stars.forEach(s => s.addEventListener('click', () => {
satisfaction = Number(s.dataset.value);
stars.forEach(st => st.classList.toggle('active', Number(st.dataset.value) <= satisfaction));
}));

document.getElementById('update-form').addEventListener('submit', (e) => {
e.preventDefault();
const data = {
id: crypto.randomUUID(),
date: new Date().toISOString(),
projectId: document.getElementById('project-select').value,
time: document.getElementById('spent-time').value,
satisfaction,
desc: document.getElementById('change-desc').value.trim()
};
if (!data.desc || !data.time || !satisfaction) { showToast('Preencha todos os campos', 'error'); return; }
storage.saveUpdate(data);
showToast('Alteração registrada', 'success');
e.target.reset(); satisfaction = 0; stars.forEach(st => st.classList.remove('active'));
renderTable();
});

qs('#export-csv').addEventListener('click', exportCSV);
qs('#updates-search').addEventListener('input', renderTable);
qs('#updates-sort').addEventListener('change', renderTable);

renderTable();
}

function renderTable() {
const term = qs('#updates-search').value.toLowerCase().trim();
const sort = qs('#updates-sort').value;
const updates = storage.listUpdates().filter(u =>
u.desc.toLowerCase().includes(term) ||
(getProjectTitle(u.projectId).toLowerCase().includes(term))
).sort((a,b) => sortCompare(a,b,sort));

const tbody = document.getElementById('updates-tbody');
tbody.innerHTML = updates.map(u => <tr> <td>${formatDate(u.date)}</td> <td>${getProjectTitle(u.projectId)}</td> <td>${u.time}</td> <td>${'★'.repeat(u.satisfaction)}</td> <td>${u.desc.replace(/</g,'&lt;')}</td> </tr> ).join('') || '<tr><td colspan="5">Sem registros</td></tr>';
}
function getProjectTitle(id) { return (projects.find(p => p.id === id)?.title) || '—'; }
function sortCompare(a,b,key) {
switch (key) {
case 'date-desc': return new Date(b.date) - new Date(a.date);
case 'date-asc': return new Date(a.date) - new Date(b.date);
case 'time-desc': return timeToMin(b.time) - timeToMin(a.time);
case 'time-asc': return timeToMin(a.time) - timeToMin(b.time);
default: return 0;
}
}
function timeToMin(t) { const [h,m] = t.split(':').map(Number); return h*60 + m; }
function exportCSV() {
const rows = [['Data','Projeto','Tempo','Satisfação','Descrição']];
storage.listUpdates().forEach(u => rows.push([formatDate(u.date), getProjectTitle(u.projectId), u.time, u.satisfaction, u.desc]));
const csv = rows.map(r => r.map(v => "${String(v).replace(/"/g,'""')}").join(',')).join('\n');
downloadFile('updates.csv', csv, 'text/csv');
}