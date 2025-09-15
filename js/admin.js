import { storage } from './storage.js';
import { formatDate, downloadFile, qs } from './utils.js';
import { showToast } from './toast.js';

let satisfaction = 0;
let projects = [];

export async function initAdmin() {
// carregar projetos para dropdown
const res = await fetch('api/projects.json');
projects = await res.json();

const select = document.getElementById('project-select');
if (select) {
select.innerHTML = projects
.map((p) => <option value="${p.id}">${p.title}</option>)
.join('');
}

await storage.importSeed();

const loginForm = document.getElementById('login-form');
const panel = document.getElementById('admin-panel');
const authArea = document.getElementById('auth-area');
const userSpan = document.getElementById('current-user');

const user = storage.getUser();
if (user && authArea && panel && userSpan) {
authArea.hidden = true;
panel.hidden = false;
userSpan.textContent = `Logado como ${user.email}`;
}



if (loginForm && authArea && panel && userSpan) {
loginForm.addEventListener('submit', (e) => {
e.preventDefault();
const emailEl = document.getElementById('login-email');
const pwdEl = document.getElementById('login-password');
const email = emailEl && 'value' in emailEl ? emailEl.value.trim() : '';
const pwd = pwdEl && 'value' in pwdEl ? pwdEl.value : '';
if (email && pwd.length >= 4) {
storage.setUser({ email });
authArea.hidden = true;
panel.hidden = false;
userSpan.textContent = `Logado como ${user.email}`;
showToast('Login realizado', 'success');
} else {
showToast('Credenciais inválidas', 'error');
}
});
}

const logoutBtn = document.getElementById('logout');
if (logoutBtn && authArea && panel) {
logoutBtn.addEventListener('click', () => {
storage.clearUser();
authArea.hidden = false;
panel.hidden = true;
showToast('Sessão encerrada', 'success');
});
}

const stars = [...document.querySelectorAll('.star')];
stars.forEach((s) =>
s.addEventListener('click', () => {
const val = Number(s.getAttribute('data-value') || '0');
satisfaction = val;
stars.forEach((st) => {
const v = Number(st.getAttribute('data-value') || '0');
st.classList.toggle('active', v <= satisfaction);
});
})
);

const updateForm = document.getElementById('update-form');
if (updateForm) {
updateForm.addEventListener('submit', (e) => {
e.preventDefault();

const projectSel = document.getElementById('project-select');
const spentTime = document.getElementById('spent-time');
const descEl = document.getElementById('change-desc');

const data = {
id: crypto.randomUUID(),
date: new Date().toISOString(),
projectId: projectSel && 'value' in projectSel ? projectSel.value : '',
time: spentTime && 'value' in spentTime ? spentTime.value : '',
satisfaction,
desc: descEl && 'value' in descEl ? descEl.value.trim() : ''
};

if (!data.desc || !data.time || !data.projectId || !satisfaction) {
showToast('Preencha todos os campos', 'error');
return;
}

storage.saveUpdate(data);
showToast('Alteração registrada', 'success');

if (e.target && 'reset' in e.target) {
e.target.reset();
}
satisfaction = 0;
stars.forEach((st) => st.classList.remove('active'));
renderTable();
});
}

const exportBtn = qs('#export-csv');
const searchEl = qs('#updates-search');
const sortEl = qs('#updates-sort');

exportBtn?.addEventListener('click', exportCSV);
searchEl?.addEventListener('input', renderTable);
sortEl?.addEventListener('change', renderTable);

renderTable();
}

function renderTable() {
const searchEl = qs('#updates-search');
const sortEl = qs('#updates-sort');
const term = (searchEl?.value || '').toLowerCase().trim();
const sort = sortEl?.value || 'date-desc';

const updates = storage
.listUpdates()
.filter((u) => {
const projectTitle = getProjectTitle(u.projectId).toLowerCase();
return (
u.desc.toLowerCase().includes(term) ||
projectTitle.includes(term)
);
})
.sort((a, b) => sortCompare(a, b, sort));

const tbody = document.getElementById('updates-tbody');
if (!tbody) return;

const rowsHTML = updates
.map(
(u) => <tr> <td>${formatDate(u.date)}</td> <td>${getProjectTitle(u.projectId)}</td> <td>${u.time}</td> <td>${'★'.repeat(u.satisfaction)}</td> <td>${u.desc.replace(/</g, '&lt;')}</td> </tr>
)
.join('');

tbody.innerHTML =
rowsHTML || '<tr><td colspan="5">Sem registros</td></tr>';
}

function getProjectTitle(id) {
const p = projects.find((x) => x.id === id);
return (p && p.title) || '—';
}

function sortCompare(a, b, key) {
switch (key) {
case 'date-desc':
return new Date(b.date) - new Date(a.date);
case 'date-asc':
return new Date(a.date) - new Date(b.date);
case 'time-desc':
return timeToMin(b.time) - timeToMin(a.time);
case 'time-asc':
return timeToMin(a.time) - timeToMin(b.time);
default:
return 0;
}
}

function timeToMin(t) {
const [h, m] = String(t).split(':').map(Number);
return h * 60 + m;
}

function exportCSV() {
const rows = [['Data', 'Projeto', 'Tempo', 'Satisfação', 'Descrição']];
storage.listUpdates().forEach((u) =>
rows.push([
formatDate(u.date),
getProjectTitle(u.projectId),
u.time,
u.satisfaction,
u.desc
])
);


const csv = rows
.map((r) => r.map((v) => "${String(v).replace(/"/g, '""'),").join(',')}")
.join('\n');

downloadFile('updates.csv', csv, 'text/csv');
}

