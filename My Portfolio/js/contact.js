import { showToast } from './toast.js';

export function initContact() {
const form = document.getElementById('contact-form');
const status = form.querySelector('.form-status');
const fileInput = form.querySelector('#file');
const allowed = ['application/pdf','image/png','image/jpeg','image/webp'];

const validateFile = () => {
const f = fileInput.files[0]; if (!f) return true;
if (f.size > 5 * 1024 * 1024) { status.textContent = 'Arquivo excede 5MB.'; return false; }
if (!allowed.includes(f.type)) { status.textContent = 'Tipo de arquivo não suportado.'; return false; }
status.textContent = ''; return true;
};
fileInput.addEventListener('change', validateFile);

form.addEventListener('submit', async (e) => {
e.preventDefault();
status.textContent = '';

if (!validateFile()) return;

if (!form.reportValidity()) return;
try {
const formData = new FormData(form);
const res = await fetch(form.action, { method: 'POST', body: formData, headers: { 'Accept': 'application/json' } });
if (res.ok) {
showToast('Mensagem enviada com sucesso!', 'success');
form.reset();
} else {
throw new Error('Falha no envio');
}
} catch (err) {
// Fallback local
console.warn('Falha no provider, usando fallback local:', err);
showToast('Falha no envio. Mensagem salva localmente.', 'error');
const msgs = JSON.parse(localStorage.getItem('contact-fallback') || '[]');
const payload = Object.fromEntries(new FormData(form).entries());
msgs.push({ ...payload, date: new Date().toISOString() });
localStorage.setItem('contact-fallback', JSON.stringify(msgs));
}
});
}