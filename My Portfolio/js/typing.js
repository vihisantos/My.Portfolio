export function initTyping(elId, skipBtnId) {
const el = document.getElementById(elId);
const btn = document.getElementById(skipBtnId);
if (!el) return;
const text = el.dataset.text || el.textContent || "";
el.textContent = "";
let i = 0; let done = false;
const write = () => {
if (i < text.length && !done) {
el.textContent += text.charAt(i++);
setTimeout(write, 45);
} else {
done = true; btn?.classList.add('sr-only');
}
};
const skip = () => { done = true; el.textContent = text; btn?.classList.add('sr-only'); };
btn?.addEventListener('click', skip);
setTimeout(write, 450); // delay breve para efeito
}