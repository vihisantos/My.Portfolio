export function showToast(msg, type='success', timeout=3000) {
const region = document.getElementById('toast-region');
const el = document.createElement('div');
el.className = toast ${type};
el.role = 'status'; el.ariaLive = 'polite';
el.textContent = msg;
region.appendChild(el);
setTimeout(() => el.remove(), timeout);
}