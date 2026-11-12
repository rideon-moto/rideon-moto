(() => {
  const languageButtons = [...document.querySelectorAll('[data-language]')];
  const textNodes = [...document.querySelectorAll('[data-fr][data-en]')];
  const languageSections = [...document.querySelectorAll('[data-language-content]')];
  const menuButton = document.querySelector('.menu');
  const nav = document.querySelector('#navigation');
  let current = 'fr';

  function closeMenu() {
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', current === 'en' ? 'Open menu' : 'Ouvrir le menu');
    nav?.classList.remove('open');
  }

  function setLanguage(value, persist = true) {
    current = value === 'en' ? 'en' : 'fr';
    document.documentElement.lang = current === 'en' ? 'en-CA' : 'fr-CA';
    document.title = document.body.dataset[current === 'en' ? 'titleEn' : 'titleFr'] || document.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = document.body.dataset[current === 'en' ? 'descriptionEn' : 'descriptionFr'] || '';
    textNodes.forEach(node => { node.textContent = node.dataset[current]; });
    document.querySelectorAll('[data-aria-fr][data-aria-en]').forEach(node => node.setAttribute('aria-label', node.dataset[current === 'en' ? 'ariaEn' : 'ariaFr']));
    languageSections.forEach(section => { section.hidden = section.dataset.languageContent !== current; });
    languageButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === current)));
    document.querySelector('.language-switch')?.setAttribute('aria-label', current === 'en' ? 'Site language' : 'Langue du site');
    menuButton?.setAttribute('aria-label', menuButton.getAttribute('aria-expanded') === 'true' ? (current === 'en' ? 'Close menu' : 'Fermer le menu') : (current === 'en' ? 'Open menu' : 'Ouvrir le menu'));
    if (persist) { try { localStorage.setItem('rideon-language', current); } catch {} }
  }

  languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? (current === 'en' ? 'Close menu' : 'Fermer le menu') : (current === 'en' ? 'Open menu' : 'Ouvrir le menu'));
    nav?.classList.toggle('open', open);
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') { closeMenu(); menuButton.focus(); }
  });
  let saved = 'fr';
  try { saved = localStorage.getItem('rideon-language') || 'fr'; } catch {}
  setLanguage(saved, false);
})();