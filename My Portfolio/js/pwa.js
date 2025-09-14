export function initPWA() {
if ('serviceWorker' in navigator) {
window.addEventListener('load', () => navigator.serviceWorker.register('/service-worker.js'));
}
}