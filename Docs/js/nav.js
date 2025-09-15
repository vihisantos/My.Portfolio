export function initNav() {
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');
if (!toggle || !menu) return;
toggle.addEventListener('click', () => {
const open = menu.classList.toggle('open');
toggle.setAttribute('aria-expanded', String(open));
});
document.addEventListener('click', (e) => {
if (!menu.contains(e.target) && e.target !== toggle && menu.classList.contains('open')) {
menu.classList.remove('open'); toggle.setAttribute('aria-expanded','false');
}
});
}