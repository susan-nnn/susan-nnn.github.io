/* Utilities */
window.$ = (sel, root=document) => root.querySelector(sel);
window.$$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

export const formatDate = iso => new Date(iso).toLocaleDateString(undefined,{year:'numeric',month:'short',day:'2-digit'});

export const setTitle = (title) => { document.title = title ? `${title} · Red Team Portfolio` : 'Red Team Portfolio'; };

export const fetchJSON = async (path) => {
  const res = await fetch(path, { cache: 'no-store' });
  if(!res.ok) throw new Error(`Failed to load ${path}`);
  return res.json();
};

export const shareLinks = ({url,title}) => ({
  twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  reddit: `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
});

export const escapeHTML = (str) => str.replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','\'':'&#39;','"':'&quot;'}[c]));

export const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');

export const scrollToMain = () => { const el = document.getElementById('app'); if(el) el.focus({ preventScroll: false }); };

window.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();
  const menuBtn = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  if(menuBtn && nav){
    menuBtn.addEventListener('click', () => {
      const next = !(nav.classList.contains('open'));
      nav.classList.toggle('open', next);
      menuBtn.setAttribute('aria-expanded', String(next));
    });
  }
});

