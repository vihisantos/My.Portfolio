export const qs = (sel, ctx = document) => ctx.querySelector(sel);
export const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
export const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
export const escapeHTML = (s) => s.replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
export const formatDate = (iso) => new Date(iso).toLocaleString();
export const downloadFile = (filename, content, type="text/csv") => {
const blob = new Blob([content], { type }); const url = URL.createObjectURL(blob);
const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url);
};