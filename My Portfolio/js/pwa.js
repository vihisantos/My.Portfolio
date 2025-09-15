export function initPWA() {
if ('serviceWorker' in navigator) {
window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js'));
}
}
// Atalho para abrir o site como PWA (Cmd/Ctrl + Shift + P)
window.addEventListener('keydown', (e) => {
if ((e.key === 'P' || e.key === 'p') && (e.ctrlKey || e.metaKey) && e.shiftKey) {
e.preventDefault();
if (window.matchMedia('(display-mode: standalone)').matches) {
alert('O site já está aberto como um aplicativo!');
} else if (window.deferredPrompt) {
window.deferredPrompt.prompt();
window.deferredPrompt.userChoice.then((choiceResult) => {
window.deferredPrompt = null;
});
} else {
alert('Infelizmente, este navegador não suporta a instalação do PWA. Tente usar o Chrome ou Edge.');
}
}
});