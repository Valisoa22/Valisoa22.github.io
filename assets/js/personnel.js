/* Interactions sans dépendance : amélioration progressive du site statique. */
'use strict';
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
document.body.classList.add('js-ready');
menuButton.hidden = false;
const setMenu = (open) => {
  nav.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
};
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('is-open')) {
    setMenu(false);
    menuButton.focus();
  }
});
if ('IntersectionObserver' in window) {
  const links = [...nav.querySelectorAll('a')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => {
          if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('main > section').forEach(section => observer.observe(section));
}
const dialog = document.querySelector('#photo-dialog');
if (dialog && typeof dialog.showModal === 'function') {
  let returnFocus;
  document.querySelectorAll('[data-gallery]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      returnFocus = link;
      const source = link.querySelector('img');
      const target = dialog.querySelector('img');
      target.src = link.href;
      target.alt = source.alt;
      dialog.querySelector('.photo-caption').textContent = source.alt;
      dialog.showModal();
      document.body.classList.add('modal-open');
    });
  });
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    if (returnFocus) returnFocus.focus();
  });
}
const copyButton = document.querySelector('#copy-email');
if (navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    const email = document.querySelector('.email').getAttribute('href').replace('mailto:', '');
    try {
      await navigator.clipboard.writeText(email);
      status.textContent = 'Adresse courriel copiée.';
    } catch {
      status.textContent = 'Copie indisponible. Sélectionnez l’adresse ou cliquez sur le lien de courriel.';
    }
  });
}
