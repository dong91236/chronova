import { icons } from './icons.js';
import { $, $$ } from '../utils/dom.js';
import { initTheme } from '../utils/theme.js';

const LINKS = [
  ['Home', '#home'],
  ['Collection', '#collection'],
  ['About', '#about'],
  ['Contact', '#contact'],
];

export const logo = (cls = '') => `<a class="logo ${cls}" href="#home" aria-label="CHRONOVA home">CHRONOVA</a>`;

export function renderHeader() {
  return `<header class="header" id="top">
    <div class="container header__bar">
      ${logo()}
      <nav class="nav" id="nav" aria-label="Main">
        ${LINKS.map(([t, h]) => `<a class="nav__link" href="${h}">${t}</a>`).join('')}
      </nav>
      <div class="header__actions">
        <button class="icon-btn theme-btn" id="theme-btn" type="button" aria-pressed="false">
          <span class="theme-btn__sun">${icons.sun}</span><span class="theme-btn__moon">${icons.moon}</span>
        </button>
        <button class="icon-btn burger" id="burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="nav">
          <span></span><span></span>
        </button>
      </div>
    </div>
  </header>`;
}

export function initHeader() {
  const header = $('.header');
  const burger = $('#burger');
  const nav = $('#nav');
  initTheme($('#theme-btn'));

  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const setMenu = (open) => {
    nav.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.classList.toggle('menu-open', open);
  };
  burger.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
  $$('.nav__link', nav).forEach((a) => a.addEventListener('click', () => setMenu(false)));
  window.addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false));
  window.matchMedia('(min-width: 861px)').addEventListener('change', (e) => e.matches && setMenu(false));
}
