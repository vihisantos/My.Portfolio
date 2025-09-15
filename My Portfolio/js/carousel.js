export function initCarousel(trackSel, prevSel, nextSel) {
// Defaults (evita depender de parâmetros com valor padrão)
trackSel = trackSel || '#carousel-track';
prevSel = prevSel || '.carousel-btn.prev';
nextSel = nextSel || '.carousel-btn.next';

const track = document.querySelector(trackSel);
const prev = document.querySelector(prevSel);
const next = document.querySelector(nextSel);

let idx = 0;
let slides = [];

const update = () => {
if (track) {
// Sem template literal: concatenação para máxima compatibilidade
track.style.transform = 'translateX(' + (idx * -100) + '%)';}};

if (prev) {
prev.addEventListener('click', function () {
if (!slides.length) return;
idx = (idx - 1 + slides.length) % slides.length;
update();});}

if (next) {
next.addEventListener('click', function () {
if (!slides.length) return;
idx = (idx + 1) % slides.length;
update();});}

const setSlides = (nodes) => {
slides = Array.from(nodes || []);
idx = 0;
update();};

return { setSlides: setSlides };}
