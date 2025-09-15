export function showToast(msg, type = 'success', timeout = 3000) {
var region = document.getElementById('toast-region');
if (!region) {
region = document.createElement('div');
region.id = 'toast-region';
region.className = 'toast-region';
region.setAttribute('role', 'region');
region.setAttribute('aria-live', 'polite');
region.setAttribute('aria-atomic', 'true');
document.body.appendChild(region);
}

var el = document.createElement('div');
el.className = 'toast ' + (type || 'success');
el.setAttribute('role', 'status');
el.setAttribute('aria-live', 'polite');
el.textContent = String(msg || '');

region.appendChild(el);

window.setTimeout(function () {
if (el && el.parentNode) el.parentNode.removeChild(el);
}, Number(timeout) || 3000);
}