(() => {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if(saved) root.setAttribute('data-theme', saved);
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-theme-toggle]');
    if(!btn) return;
    const current = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', current);
    localStorage.setItem('theme', current);
  });
})();

