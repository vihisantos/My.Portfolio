export function initCarousel(trackSel = '#carousel-track', prevSel = '.carousel-btn.prev', nextSel = '.carousel-btn.next') {
const track = document.querySelector(trackSel);
const prev = document.querySelector(prevSel);
const next = document.querySelector(nextSel);
let idx = 0; let slides = [];
const update = () => { track.style.transform = translateX(${idx * -100}%); };
prev?.addEventListener('click', () => { idx = (idx - 1 + slides.length) % slides.length; update(); });
next?.addEventListener('click', () => { idx = (idx + 1) % slides.length; update(); });
const setSlides = (nodes) => { slides = nodes; idx = 0; update(); };
return { setSlides };
}