import { initThemeToggle } from './theme.js';
import { initTyping } from './typing.js';
import { initLiquidCanvas } from './liquid.js';
import { initNav } from './nav.js';
import { initModals } from './modals.js';
import { initProjects } from './projects.js';
import { initContact } from './contact.js';
import { initAdmin } from './admin.js';
import { initPWA } from './pwa.js';
import { clamp } from './utils.js';

document.documentElement.classList.remove('no-js');

initThemeToggle();
initTyping('typing', 'skip-typing');
initLiquidCanvas();
initNav();
initModals();
initProjects();
initContact();
initAdmin();
initPWA();

// Hero avatar blur + parallax
var avatar = document.getElementById('hero-avatar');
var hero = document.getElementById('hero');

function onScroll() {
if (!hero || !avatar) return;
var rect = hero.getBoundingClientRect();
var progress = clamp((window.scrollY || -rect.top) / 200, 0, 1);
var blur = Math.round(progress * 10);
avatar.style.filter = 'blur(' + blur + 'px)';
avatar.style.transform = 'translateY(' + (progress * 18) + 'px) scale(' + (1 - progress * 0.05) + ')';
}
document.addEventListener('scroll', onScroll);

// Footer year
var yearEl = document.getElementById('year');
if (yearEl) { yearEl.textContent = String(new Date().getFullYear()); }

// Open skill modals with data
(function initSkills() {
fetch('api/skills.json')
.then(function(res){ return res.json(); })
.then(function(data){
var lists = document.querySelectorAll('.skills-list');
for (var i = 0; i < lists.length; i++) {
var list = lists[i];
var cat = list.getAttribute('data-skill-category') || '';
var items = data[cat] || [];
var html = '';
for (var j = 0; j < items.length; j++) {
var s = items[j];
html += ''
+ '<div class="skill-item">'
+ '<img src="' + s.logo + '" alt="" aria-hidden="true" width="40" height="40"/>'
+ '<div>'
+ '<div style="display:flex;align-items:center;justify-content:space-between;">'
+ '<strong>' + s.name + '</strong>'
+ '<small>' + s.level + '%</small>'
+ '</div>'
+ '<div class="skill-level" aria-hidden="true"><span style="width:' + s.level + '%"></span></div>'
+ '<p>' + s.desc + '</p>'
+ (s.projects && s.projects.length
? '<div>Projetos: '
+ s.projects.map(function(id){
return '<a href="#projects" class="btn-link" data-proj="' + id + '">' + id + '</a>';
}).join(', ')
+ '</div>'
: '')
+ '</div>'
+ '</div>';
}
list.innerHTML = html;

var anchors = list.querySelectorAll('[data-proj]');
for (var k = 0; k < anchors.length; k++) {
anchors[k].addEventListener('click', function(e){
e.preventDefault();
var filter = document.getElementById('project-filter');
var search = document.getElementById('project-search');
var projSection = document.getElementById('projects');
if (filter) filter.value = 'all';
if (search) search.value = '';
if (projSection) projSection.scrollIntoView({ behavior: 'smooth' });
});
}
}
})
.catch(function(err){
console.warn('Falha ao carregar skills.json', err);
});
})();

// Delegate ESC close for modals (safety)
document.addEventListener('keydown', function(e) {
if (e.key === 'Escape') {
var openBtns = document.querySelectorAll('.modal:not([hidden]) [data-close]');
for (var i = 0; i < openBtns.length; i++) {
var btn = openBtns[i];
if (btn && typeof btn.click === 'function') btn.click();
}
}
});