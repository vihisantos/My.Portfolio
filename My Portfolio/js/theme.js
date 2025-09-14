const STORAGE_KEY = 'theme';
export function initThemeToggle(btnIds = ['theme-toggle','theme-toggle-footer']) {
const root = document.documentElement;
const saved = localStorage.getItem(STORAGE_KEY);
if (saved) root.setAttribute('data-theme', saved);
const setTheme = (mode) => { root.setAttribute('data-theme', mode); localStorage.setItem(STORAGE_KEY, mode); };
const toggle = () => { const current = root.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); setTheme(current === 'dark' ? 'light' : 'dark'); };
btnIds.forEach(id => document.getElementById(id)?.addEventListener('click', toggle));
}