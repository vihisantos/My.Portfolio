export function trapFocus(modal) {
const focusable = modal.querySelectorAll('a,button,input,select,textarea,[tabindex]:not([tabindex="-1"])');
const first = focusable[0]; const last = focusable[focusable.length - 1];
function handler(e) {
if (e.key === 'Tab') {
if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}
if (e.key === 'Escape') { modal.querySelector('[data-close]')?.click(); }
}
modal.addEventListener('keydown', handler);
return () => modal.removeEventListener('keydown', handler);
}