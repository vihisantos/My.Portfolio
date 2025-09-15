export function initLiquidCanvas(canvasId = 'liquid-canvas') {
const canvas = document.getElementById(canvasId);
if (!canvas) return;
const ctx = canvas.getContext('2d', { alpha: true });
let w, h, raf, t = 0, mouse = {x:0,y:0};
const colors = ['#ffffff22','#00000010','#ffffff14'];

const resize = () => { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight; };
resize(); window.addEventListener('resize', resize);

const draw = () => {
ctx.clearRect(0,0,w,h);
t += 0.006;
for (let i = 0; i < 60; i++) {
const r = 60 + 40*Math.sin(t + i);
const x = (w/2) + Math.cos(t*2 + i)* (120 + 40*Math.sin(t+i*0.3)) + (mouse.x - w/2)*0.02;
const y = (h/2) + Math.sin(t*2.2 + i)* (80 + 20*Math.cos(t+i*0.2)) + (mouse.y - h/2)*0.02;
ctx.fillStyle = colors[i % colors.length];
ctx.beginPath(); ctx.arc(x, y, Math.max(8, r*0.08), 0, Math.PI*2); ctx.fill();
}
raf = requestAnimationFrame(draw);
};
const onMove = (e) => { mouse.x = e.clientX || (e.touches?.[0]?.clientX ?? w/2); mouse.y = e.clientY || (e.touches?.[0]?.clientY ?? h/2); };
canvas.addEventListener('mousemove', onMove, { passive: true });
canvas.addEventListener('touchmove', onMove, { passive: true });

if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
raf = requestAnimationFrame(draw);
return () => { cancelAnimationFrame(raf); };
}