const STORAGE_KEY = 'theme';

export function initThemeToggle(selector = '[data-theme-toggle]') {
const root = document.documentElement;
const btns = Array.from(document.querySelectorAll(selector));

function systemPrefers() {
try {
return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
} catch {
return 'light';
}
}

function get() {
return root.getAttribute('data-theme') || systemPrefers();
}

function set(mode) {
root.setAttribute('data-theme', mode);
try { localStorage.setItem(STORAGE_KEY, mode); } catch {}
btns.forEach(b => b.setAttribute('aria-pressed', mode === 'dark' ? 'true' : 'false'));
try { root.dispatchEvent(new CustomEvent('themechange', { detail: { mode } })); } catch {}
}

const saved = (() => { try { return localStorage.getItem(STORAGE_KEY); } catch { return null; } })();
set(saved || get());

btns.forEach(b => b.addEventListener('click', () => set(get() === 'dark' ? 'light' : 'dark')));
}