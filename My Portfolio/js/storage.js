const KEY_UPDATES = 'admin-updates';
const KEY_USER = 'admin-user';

export const storage = {
getUser: () => JSON.parse(localStorage.getItem(KEY_USER) || 'null'),
setUser: (u) => localStorage.setItem(KEY_USER, JSON.stringify(u)),
clearUser: () => localStorage.removeItem(KEY_USER),

listUpdates: () => JSON.parse(localStorage.getItem(KEY_UPDATES) || '[]'),
saveUpdate: (u) => {
const arr = JSON.parse(localStorage.getItem(KEY_UPDATES) || '[]');
arr.unshift(u);
localStorage.setItem(KEY_UPDATES, JSON.stringify(arr));
},
importSeed: async () => {
const res = await fetch('/api/admin-updates.json'); const seed = await res.json();
const existing = JSON.parse(localStorage.getItem(KEY_UPDATES) || '[]');
if (existing.length === 0) localStorage.setItem(KEY_UPDATES, JSON.stringify(seed));
}
};