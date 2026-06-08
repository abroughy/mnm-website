(function () {
  const items = Array.from(document.querySelectorAll('.gallery__item'));
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');

  if (!items.length || !lightbox) return;

  let current = 0;

  function open(index) {
    current = index;
    const item = items[index];
    img.src = item.dataset.src;
    img.alt = item.querySelector('img').alt;
    caption.textContent = item.dataset.caption || '';
    lightbox.classList.add('open');
    document.body.classList.add('nav-open');
    document.getElementById('lightboxClose').focus();
  }

  function close() {
    lightbox.classList.remove('open');
    document.body.classList.remove('nav-open');
    img.src = '';
  }

  function prev() { open((current - 1 + items.length) % items.length); }
  function next() { open((current + 1) % items.length); }

  items.forEach((item, i) => {
    item.addEventListener('click', () => open(i));
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(i); }
    });
  });

  document.getElementById('lightboxClose').addEventListener('click', close);
  document.getElementById('lightboxPrev').addEventListener('click', prev);
  document.getElementById('lightboxNext').addEventListener('click', next);

  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });
})();
