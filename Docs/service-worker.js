const CACHE_NAME = 'portfolio-cache-v12';

const ASSETS = [
// Shell
'index.html',
'404.html',
'manifest.webmanifest',

// CSS
'css/base.css',
'css/theme.css',
'css/layout.css',
'css/components.css',
'css/utilities.css',

// JS
'js/main.js',
'js/theme.js',
'js/typing.js',
'js/liquid.js',
'js/nav.js',
'js/modals.js',
'js/projects.js',
'js/carousel.js',
'js/contact.js',
'js/admin.js',
'js/storage.js',
'js/toast.js',
'js/a11y.js',
'js/utils.js',
'js/pwa.js',
'js/social.js',
'js/palette.js',

// API mocks (ficam em cache para offline)
'api/projects.json',
'api/skills.json',
'api/admin-updates.json',
'api/social.json',

// Fonts
'assets/fonts/GASDRIFO.woff2',
'assets/fonts/Inter-Variable.woff2',

// Images
'assets/images/avatar.webp',
'assets/images/avatar-placeholder.svg',
'assets/images/project-placeholder.webp',

// Icons
'assets/icons/github.svg',
'assets/icons/linkedin.svg',
'assets/icons/twitter.svg',
'assets/icons/external.svg',
'assets/icons/close.svg'
];

self.addEventListener('install', (event) => {
event.waitUntil(
caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
);
self.skipWaiting();
});

self.addEventListener('activate', (event) => {
event.waitUntil(
caches.keys().then((keys) =>
Promise.all(
keys.map((k) => (k !== CACHE_NAME ? caches.delete(k) : undefined))
)
)
);
self.clients.claim();
});

self.addEventListener('fetch', (event) => {
const { request } = event;
const url = new URL(request.url);

// Só intercepta GET da mesma origem
if (request.method !== 'GET' || url.origin !== self.location.origin) return;

// Estratégia: network-first para /api/*
if (url.pathname.startsWith('/api/') || url.pathname.includes('api/')) {
event.respondWith(networkFirst(request));
return;
}

// Navegações: tenta cache (SPA) e, offline, cai no index.html
if (request.mode === 'navigate') {
event.respondWith(
caches.match('index.html').then((resp) => resp || fetch(request))
);
return;
}

// Demais estáticos: cache-first com atualização em background
event.respondWith(cacheFirst(request));
});

async function networkFirst(request) {
try {
const response = await fetch(request);
const cache = await caches.open(CACHE_NAME);
cache.put(request, response.clone());
return response;
} catch (err) {
const cached = await caches.match(request);
if (cached) return cached;
// Fallback de navegação
if (request.headers.get('accept')?.includes('text/html')) {
return caches.match('index.html');
}
return new Response('', { status: 504, statusText: 'Offline' });
}
}

async function cacheFirst(request) {
const cached = await caches.match(request);
if (cached) return cached;
try {
const response = await fetch(request);
const cache = await caches.open(CACHE_NAME);
cache.put(request, response.clone());
return response;
} catch {
if (request.headers.get('accept')?.includes('text/html')) {
return caches.match('index.html');
}
return new Response('', { status: 504, statusText: 'Offline' });
}
}