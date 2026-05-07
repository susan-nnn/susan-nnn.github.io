(() => {
  // Scroll reveal
  const revealEls = () => document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in'); });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
  window.addEventListener('DOMContentLoaded', () => {
    revealEls().forEach(el => io.observe(el));
    const topBtn = document.getElementById('backToTop');
    if(topBtn){
      window.addEventListener('scroll', () => {
        const show = window.scrollY > 300; topBtn.classList.toggle('show', show);
      });
      topBtn.addEventListener('click', (e) => { e.preventDefault(); window.scrollTo({ top:0, behavior:'smooth' }); });
    }
    const last = document.getElementById('lastUpdated');
    if(last){ last.textContent = new Date().toLocaleDateString(); }
  });
})();

