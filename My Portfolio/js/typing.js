export function initTyping(elId, skipBtnId, speed) {
var el = document.getElementById(elId);
var btn = document.getElementById(skipBtnId);
if (!el) return;
// Texto alvo: data-text > conteúdo atual > fallback
var text = (el.getAttribute('data-text') || el.textContent || '').trim();
if (!text) {
text = 'Seja bem vindo ao meu portfolio'; // fallback
}

// Se já foi executado nesta sessão, apenas exibe o texto direto (evita re-tipos em trocas de rota/refreshs)
try {
if (sessionStorage.getItem('typed-' + elId) === '1') {
el.textContent = text;
if (btn) btn.classList.add('sr-only');
return;
}
} catch {}

// Respeitar reduz-movimento? Se quiser que SEMPRE digite, deixe reduce = false
var reduce = false; // altere para: matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduce) {
el.textContent = text;
if (btn) btn.classList.add('sr-only');
return;
}

el.textContent = '';
var i = 0;
var typingSpeed = typeof speed === 'number' ? speed : 45;
var done = false;
var timer = null;

function write() {
if (done) return;
if (i < text.length) {
el.textContent += text.charAt(i++);
timer = setTimeout(write, typingSpeed);
} else {
finish();
}
}

function finish() {
done = true;
try { sessionStorage.setItem('typed-' + elId, '1'); } catch {}
if (btn) btn.classList.add('sr-only');
}

function skip() {
done = true;
clearTimeout(timer);
el.textContent = text;
finish();
}

if (btn) btn.addEventListener('click', skip);
// Clique no próprio texto também pula
el.addEventListener('click', skip);

// Pequeno delay para a entrada ficar suave
setTimeout(write, 350);
}