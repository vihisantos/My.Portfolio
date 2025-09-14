import { trapFocus } from './a11y.js';
let releaseFocus = null;

export function initModals() {
document.querySelectorAll('.skill-card').forEach(btn => {
btn.addEventListener('click', () => openModal(btn.dataset.modal));
});
document.querySelectorAll('.modal [data-close]').forEach(btn => {
btn.addEventListener('click', (e) => {
const modal = e.currentTarget.closest('.modal');
closeModal(modal.id);
});
});
}
export function openModal(id) {
const modal = document.getElementById(id);
if (!modal) return;
modal.hidden = false; modal.scrollTop = 0;
document.body.style.overflow = 'hidden';
releaseFocus = trapFocus(modal);
modal.querySelector('.modal-content').focus?.();
}
export function closeModal(id) {
const modal = document.getElementById(id);
if (!modal) return;
modal.hidden = true;
document.body.style.overflow = '';
releaseFocus?.(); releaseFocus = null;
}