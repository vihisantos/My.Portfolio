(() => {
const root = document.documentElement;
const getToggle = () =>
document.querySelector('[data-theme-toggle]') ||
document.getElementById('theme-toggle') ||
document.querySelector('.theme-toggle') ||
document.querySelector('.btn-theme');

const btn = getToggle();
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

const getStored = () => {
try { return localStorage.getItem('theme'); } catch { return null; }
};
const setStored = (v) => {
try { localStorage.setItem('theme', v); } catch {}
};

function applyTheme(theme) {
// transição suave sem “flash”
root.classList.add('theme-transition');
requestAnimationFrame(() => root.classList.remove('theme-transition'));

if (theme === 'dark') {
root.setAttribute('data-theme', 'dark');
btn?.setAttribute('aria-pressed', 'true');
} else {
root.removeAttribute('data-theme');
btn?.setAttribute('aria-pressed', 'false');
}
}

const saved = getStored();
applyTheme(saved ?? (prefersDark.matches ? 'dark' : 'light'));

btn?.addEventListener('click', () => {
const isDark = root.getAttribute('data-theme') === 'dark';
const next = isDark ? 'light' : 'dark';
applyTheme(next);
setStored(next);
});

// Se usuário não fixou tema, respeita mudança do SO
prefersDark.addEventListener('change', (e) => {
if (!getStored()) applyTheme(e.matches ? 'dark' : 'light');
});
})();