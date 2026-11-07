import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import { renderHeader, initHeader } from './components/header.js';
import { renderHero, initHero } from './components/hero.js';
import { renderFeatured, initFeatured } from './components/featured.js';
import { renderCollection, initCollection } from './components/collection.js';
import { renderModal, initModal } from './components/modal.js';
import { renderAbout } from './components/about.js';
import { renderContact } from './components/contact.js';
import { renderFooter } from './components/footer.js';
import { initReveal } from './utils/reveal.js';

document.documentElement.classList.add('js');

document.getElementById('app').innerHTML = `
  ${renderHeader()}
  <main id="main">
    ${renderHero()}
    ${renderFeatured()}
    ${renderCollection()}
    ${renderAbout()}
    ${renderContact()}
  </main>
  ${renderFooter()}
  ${renderModal()}
`;

const openDetail = initModal();
initHeader();
initHero();
initFeatured(openDetail);
initCollection(openDetail);
initReveal();
