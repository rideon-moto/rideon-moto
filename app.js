const menuButton = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
const languageButtons = [...document.querySelectorAll('[data-language]')];
let currentLanguage = 'fr';

const englishCopy = [
  ['.skip', 'Skip to content'],
  ['#navigation a[href="#meet"]', 'Meet'],
  ['#navigation a[href="#fonctionnalites"]', 'The app'],
  ['.availability', 'Coming soon'],
  ['.hero-content .eyebrow', '<span class="short-line"></span> THE ROAD IS CALLING'],
  ['.hero-content h1', 'Less routine.<br>More <em>riding.</em>'],
  ['.hero-content > p', 'The road. The world around you. The people to ride with.<br class="desktop"> Your motorcycle passion, all in one app.'],
  ['.hero-content .button', 'Discover RIDEON'],
  ['#piliers > .eyebrow', 'THREE WAYS TO LIVE THE RIDE'],
  ['#piliers .intro-heading h2', 'One passion.<br>A whole world to explore.'],
  ['#piliers .intro-heading p', 'From the first route to the last coffee stop,<br>RIDEON brings it all together.'],
  ['.pillar-links a:nth-child(1) p', 'Your road. Your pace.'],
  ['.pillar-links a:nth-child(2) p', 'Find a new way.'],
  ['.pillar-links a:nth-child(3) p', 'Your crew. The same passion.'],
  ['#ride .feature-copy > h2', 'Every turn<br>deserves a place.'],
  ['#ride .feature-copy > p', 'A quick ride on a whim or a weekend adventure. Plan your route, follow your ride and keep track of every kilometre.'],
  ['#ride .feature-list li:nth-child(1) h3', 'Plan your way'],
  ['#ride .feature-list li:nth-child(1) p', 'A starting point, destination and every stop worth making.'],
  ['#ride .feature-list li:nth-child(2) h3', 'Ride live'],
  ['#ride .feature-list li:nth-child(2) p', 'GPS tracking, distance and duration—right where you need them.'],
  ['#ride .feature-list li:nth-child(3) h3', 'Keep your best moments'],
  ['#ride .feature-list li:nth-child(3) p', 'Find your routes and past rides in your activity journal.'],
  ['#explore .feature-copy > h2', 'The best route<br>isn’t always<br>the shortest.'],
  ['#explore .feature-copy > p', 'One map. A thousand reasons to get out. Discover rides, groups and riders nearby. Find the stops that turn a ride into a memory.'],
  ['#explore .detail-row h3', 'Something new around every turn'],
  ['#explore .detail-row p', 'Inspiring routes, points of interest and local discoveries, all on one map.'],
  ['#explore .feature-copy > .text-link', 'Want to go together?'],
  ['#connect .feature-copy > h2', 'Your kind of ride.<br>Your kind of people.'],
  ['#connect .feature-copy > p', 'Riding together starts with a connection. Find riders who share your interests, style and pace with RIDEON Connect.'],
  ['#connect .feature-list li:nth-child(1) h3', 'Connections that go places'],
  ['#connect .feature-list li:nth-child(1) p', 'Match with riders who could become your next road partners.'],
  ['#connect .feature-list li:nth-child(2) h3', 'Room for your crew'],
  ['#connect .feature-list li:nth-child(2) p', 'Join groups, chat and plan the next ride.'],
  ['#meet-title', 'PASSION BRINGS US TOGETHER.'],
  ['#meet-description', 'Discover motorcycle meet-ups near you, organize your own events and find riders who share your passion for the road.'],
  ['#meet-cta', 'Discover Rideon Meet'],
  ['#meet-feature-title-1', 'Discover events'],
  ['#meet-feature-copy-1', 'Explore motorcycle gatherings, meet-ups and activities near you.'],
  ['#meet-feature-title-2', 'Organize your Meet'],
  ['#meet-feature-copy-2', 'Create an event, choose a place and date, and bring riders together.'],
  ['#meet-feature-title-3', 'Join the community'],
  ['#meet-feature-copy-3', 'Check event details and join the meet-ups that interest you.'],
  ['#meet-feature-title-4', 'Connect your adventures'],
  ['#meet-feature-copy-4', 'Bring meet-ups together with RIDEON rides and groups to keep the experience going.'],
  ['#fonctionnalites > .eyebrow', 'MORE THAN A ROUTE'],
  ['#fonctionnalites .intro-heading h2', 'Everything that makes<br>you a rider.'],
  ['#fonctionnalites .intro-heading p', 'The right details, right where you need them.<br>So you can focus on the ride.'],
  ['#fonctionnalites .feature-grid article:nth-child(1) h3', 'Your ride journal'],
  ['#fonctionnalites .feature-grid article:nth-child(1) p', 'Recent activity and past rides. Memories worth keeping.'],
  ['#fonctionnalites .feature-grid article:nth-child(2) h3', 'Badges to earn'],
  ['#fonctionnalites .feature-grid article:nth-child(2) p', 'Your rides tell a story. So do your achievements.'],
  ['#fonctionnalites .feature-grid article:nth-child(3) h3', 'A profile that feels like you'],
  ['#fonctionnalites .feature-grid article:nth-child(3) p', 'Your avatar, your passion and your motorcycle world, all in one place.'],
  ['#fonctionnalites .feature-grid article:nth-child(4) h3', 'Keep the conversation going'],
  ['#fonctionnalites .feature-grid article:nth-child(4) p', 'Stay in touch with your groups and chat along the way.'],
  ['#fonctionnalites .feature-grid article:nth-child(5) h3', 'The updates that matter'],
  ['#fonctionnalites .feature-grid article:nth-child(5) p', 'Keep up with what’s happening through your notifications.'],
  ['#fonctionnalites .feature-grid article:nth-child(6) h3', 'Even when the signal drops'],
  ['#fonctionnalites .feature-grid article:nth-child(6) p', 'Ride offline and sync your activity when you reconnect.'],
  ['.experience-inner > .eyebrow', 'MADE FOR THE ROAD. AND FOR YOU.'],
  ['.experience-inner > h2', 'Ride with a clear head.<br>Keep your eyes <em>on the horizon.</em>'],
  ['.advantages > div:nth-child(1) h3', 'Before you go'],
  ['.advantages > div:nth-child(1) p', 'Fewer apps to switch between. Your route and your crew, together.'],
  ['.advantages > div:nth-child(2) h3', 'Between stops'],
  ['.advantages > div:nth-child(2) p', 'The details you need, easy to find when you pull over.'],
  ['.advantages > div:nth-child(3) h3', 'After the ride'],
  ['.advantages > div:nth-child(3) p', 'Relive it. Stay connected. Start planning the next one.'],
  ['#avenir > .eyebrow', 'THE ADVENTURE IS JUST BEGINNING'],
  ['#avenir > h2', 'Your next ride<br>starts <em>here.</em>'],
  ['#avenir > p', 'Ride. Explore. Connect.<br>A new way to live your motorcycle passion.'],
  ['#avenir > .text-link', 'Explore the app again'],
  ['.contact-copy > .eyebrow', 'LET’S TALK'],
  ['.contact-copy > h2', 'Have a question?<br><em>Get in touch.</em>'],
  ['.contact-copy > p', 'An idea, feedback or a crew to ride with? The RIDEON team is listening.'],
  ['.contact-form label[for="contact-name"]', 'Your name'],
  ['.contact-form label[for="contact-email"]', 'Your email'],
  ['.contact-form label[for="contact-message"]', 'Your message'],
  ['.contact-submit', 'Send message'],  ['footer > div > p', 'The road brings us together.'],
  ['.footer-legal-links a:nth-child(1)', 'Privacy'],
  ['.footer-legal-links a:nth-child(2)', 'Terms'],
  ['.footer-legal-links a:nth-child(3)', 'Support'],
  ['.footer-legal-links a:nth-child(4)', 'Account deletion'],
];

const originalMarkup = englishCopy.map(([selector]) => [document.querySelector(selector), document.querySelector(selector)?.innerHTML]);
const englishAttributes = [
  ['.skip', 'aria-label', 'Skip to content'],
  ['.logo', 'aria-label', 'RIDEON, home'],
  ['#navigation', 'aria-label', 'Main navigation'],
  ['.menu', 'aria-label', 'Open menu'],
  ['.hero-photo', 'aria-label', 'Motorcyclists riding a winding forest road'],
  ['#ride .product-art img', 'alt', 'A helmeted rider following a winding road through the forest'],
  ['#explore .product-art img', 'alt', 'A motorcycle overlooking a lake and mountain road'],
  ['#connect .product-art img', 'alt', 'Three riders meeting at a scenic lookout after a ride'],
  ['#avenir .store-links', 'aria-label', 'Get RIDEON'],
  ['#avenir .store-badge:nth-child(1)', 'aria-label', 'Open the App Store'],
  ['#avenir .store-badge:nth-child(2)', 'aria-label', 'Open Google Play'],
  ['#avenir .store-badge:nth-child(1) img', 'alt', 'Download on the App Store'],
  ['#avenir .store-badge:nth-child(2) img', 'alt', 'Get it on Google Play'],
  ['.language-switch', 'aria-label', 'Site language'],
  ['#meet-photo', 'aria-label', 'Motorcycle meet-up near a cafe in Quebec'],
  ['#meet-picture', 'alt', 'Motorcyclists gathered near a cafe in Quebec'],
  ['#meet-features', 'aria-label', 'Rideon Meet features'],
  ['footer nav:not(.footer-legal-links)', 'aria-label', 'Footer navigation'],
  ['.footer-legal-links', 'aria-label', 'Legal and support links']
];
const originalAttributes = englishAttributes.flatMap(([selector, name]) => [...document.querySelectorAll(selector)].map(element => [element, name, element.getAttribute(name)]));
const originalPlaceholders = [
  [document.querySelector('#contact-name'), 'placeholder', 'How should we address you?'],
  [document.querySelector('#contact-email'), 'placeholder', 'name@example.com'],
  [document.querySelector('#contact-message'), 'placeholder', 'Tell us about it…']
].map(([element, name, english]) => [element, name, element?.getAttribute(name), english]);
const metaDescription = document.querySelector('meta[name="description"]');
const frenchDescription = metaDescription?.content ?? '';
const englishDescription = 'Your next ride starts here. Ride, explore and connect with motorcyclists who share your passion.';
const appleBadge = document.querySelector('#avenir .store-badge:nth-child(1) img');
const playBadge = document.querySelector('#avenir .store-badge:nth-child(2) img');
const frenchAppleBadge = 'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/fr-ca?size=250x83';
const englishAppleBadge = 'https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg';
const frenchPlayBadge = 'https://play.google.com/intl/fr_ca/badges/static/images/badges/fr_badge_web_generic.png';
const englishPlayBadge = 'https://play.google.com/intl/en_ca/badges/static/images/badges/en_badge_web_generic.png';

const meetRevealElements = [...document.querySelectorAll('.meet-reveal')];
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('meet-reveal-ready');
  const meetRevealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        meetRevealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -28px 0px' });
  meetRevealElements.forEach(element => meetRevealObserver.observe(element));
} else {
  meetRevealElements.forEach(element => element.classList.add('is-visible'));
}

function setLanguage(language, persist = true) {
  currentLanguage = language === 'en' ? 'en' : 'fr';
  document.documentElement.lang = currentLanguage === 'en' ? 'en-CA' : 'fr-CA';
  for (let i = 0; i < englishCopy.length; i++) {
    const [element, frenchMarkup] = originalMarkup[i];
    if (element) element.innerHTML = currentLanguage === 'en' ? englishCopy[i][1] : frenchMarkup;
  }
  for (const [element, name, frenchValue] of originalAttributes) {
    const translation = englishAttributes.find(([selector, attr]) => attr === name && [...document.querySelectorAll(selector)].includes(element))?.[2];
    if (element) element.setAttribute(name, currentLanguage === 'en' ? translation : frenchValue);
  }
  for (const [element, name, frenchValue, englishValue] of originalPlaceholders) {
    if (element) element.setAttribute(name, currentLanguage === 'en' ? englishValue : frenchValue);
  }
  if (metaDescription) metaDescription.content = currentLanguage === 'en' ? englishDescription : frenchDescription;
  if (appleBadge) appleBadge.src = currentLanguage === 'en' ? englishAppleBadge : frenchAppleBadge;
  if (playBadge) playBadge.src = currentLanguage === 'en' ? englishPlayBadge : frenchPlayBadge;
  for (const button of languageButtons) {
    const active = button.dataset.language === currentLanguage;
    button.setAttribute('aria-pressed', String(active));
  }
  document.querySelector('.language-switch')?.setAttribute('aria-label', currentLanguage === 'en' ? 'Site language' : 'Langue du site');
  if (menuButton) menuButton.setAttribute('aria-label', menuButton.getAttribute('aria-expanded') === 'true' ? (currentLanguage === 'en' ? 'Close menu' : 'Fermer le menu') : (currentLanguage === 'en' ? 'Open menu' : 'Ouvrir le menu'));
  if (persist) { try { localStorage.setItem('rideon-language', currentLanguage); } catch {} }
}

function closeMenu() {
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', currentLanguage === 'en' ? 'Open menu' : 'Ouvrir le menu');
  nav?.classList.remove('open');
}

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? (currentLanguage === 'en' ? 'Close menu' : 'Fermer le menu') : (currentLanguage === 'en' ? 'Open menu' : 'Ouvrir le menu'));
  nav?.classList.toggle('open', open);
});
function setActiveNavigation(hash = location.hash) {
  nav?.querySelectorAll('a').forEach(link => {
    if (link.getAttribute('href') === hash) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  setActiveNavigation(link.getAttribute('href'));
  closeMenu();
}));
window.addEventListener('hashchange', () => setActiveNavigation());
setActiveNavigation();
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') { closeMenu(); menuButton.focus(); }
});
languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
let savedLanguage = 'fr';
try { savedLanguage = localStorage.getItem('rideon-language') || 'fr'; } catch {}
setLanguage(savedLanguage, false);

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async event => {
    event.preventDefault();
    const status = document.querySelector('#form-status');
    const submit = contactForm.querySelector('[type="submit"]');
    if (contactForm.querySelector('[name="_honey"]').value) return;
    submit.disabled = true;
    status.dataset.state = '';
    status.textContent = currentLanguage === 'en' ? 'Sending…' : 'Envoi en cours…';
    try {
      const values = Object.fromEntries(new FormData(contactForm).entries());
      const response = await fetch('https://formsubmit.co/ajax/hello@rideon-moto.com', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(values) });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error('submit');
      status.dataset.state = 'success';
      status.textContent = currentLanguage === 'en' ? 'Thanks! Your message has been sent to the RIDEON team.' : 'Merci! Votre message a été envoyé à l’équipe RIDEON.';
      contactForm.reset();
    } catch {
      status.dataset.state = 'error';
      status.textContent = currentLanguage === 'en' ? 'Your message could not be sent. Please try again or email hello@rideon-moto.com.' : 'Le message n’a pas pu être envoyé. Réessayez ou écrivez-nous à hello@rideon-moto.com.';
    } finally { submit.disabled = false; }
  });
}
