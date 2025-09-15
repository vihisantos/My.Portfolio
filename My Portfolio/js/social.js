export function initSocialCounts(cfg) {
var config = cfg || {};
var ghUser = config.github || 'vihisantos';
var twUser = config.twitter || 'vihisantos';

var seed = {}; // fallbacks do social.json
var ghSet = false;
var twSet = false;

function setCount(key, val) {
if (typeof val !== 'number' || isNaN(val) || val < 0) return;
var els = document.querySelectorAll('[data-count="' + key + '"]');
for (var i = 0; i < els.length; i++) {
els[i].textContent = format(val);
}
}
function format(n) {
n = Number(n || 0);
if (n < 1000) return String(n);
if (n < 10000) return (n/1000).toFixed(1).replace('.0','') + 'k';
if (n < 1000000) return Math.round(n/1000) + 'k';
return (n/1000000).toFixed(1).replace('.0','') + 'M';
}
function trySeed(key) {
if (typeof seed[key] === 'number') setCount(key, seed[key]);
}

// Carrega fallbacks
fetch('api/social.json', { cache: 'no-store' })
.then(function(r){ return r.ok ? r.json() : {}; })
.then(function(j){ seed = j || {}; })
.catch(function(){ seed = {}; })
.finally(function(){
// GitHub públicos
fetch('https://api.github.com/users/ ' + encodeURIComponent(ghUser))
.then(function(r){ return r.json(); })
.then(function(j){
if (j && typeof j.followers === 'number') { setCount('github', j.followers); ghSet = true; }
})
.catch(function(){})
.finally(function(){ if (!ghSet) trySeed('github'); });

// Twitter (X) via widget público (pode falhar às vezes)
fetch('https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=' + encodeURIComponent(twUser))
.then(function(r){ return r.json(); })
.then(function(arr){
var n = Array.isArray(arr) && arr[0] && arr[0].followers_count;
if (typeof n === 'number') { setCount('twitter', n); twSet = true; }
})
.catch(function(){})
.finally(function(){ if (!twSet) trySeed('twitter'); });

// LinkedIn só via seed
if (typeof seed.linkedin === 'number') setCount('linkedin', seed.linkedin);
});
}