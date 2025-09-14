const CACHE_NAME = 'portfolio-cache-v2';
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

// Fonts
'assets/fonts/GASDRIFO.woff2',
'assets/fonts/Inter-Variable.woff2',

// API mocks
'api/projects.json',
'api/skills.json',
'api/admin-updates.json',

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
Promise.all(keys.map((k) => (k !== CACHE_NAME ? caches.delete(k) : undefined)))
)
);
self.clients.claim();
});

self.addEventListener('fetch', (event) => {
const { request } = event;

// Apenas GET e mesma origem
if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

event.respondWith(
caches.match(request).then((cached) => {
if (cached) return cached;

return fetch(request)
.then((response) => {
// Clona e armazena no cache apenas respostas válidas
if (response && response.status === 200 && response.type === 'basic') {
const copy = response.clone();
caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
}
return response;
})
.catch(() => {
// Fallback para navegação offline
if (request.headers.get('accept')?.includes('text/html')) {
// escolha 1 (SPA): voltar pro index
return caches.match('index.html');
// escolha 2 (404 offline): volte a usar '404.html'
// return caches.match('404.html');
}
return new Response('', { status: 504, statusText: 'Offline' });
});
})
);
});