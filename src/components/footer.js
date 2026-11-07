import { icons } from './icons.js';
import { logo } from './header.js';

export const renderFooter = () => `<footer class="footer">
  <div class="container footer__grid">
    <div class="footer__brand">
      ${logo('logo--lg')}
      <p>Considered watches, made with restraint.</p>
    </div>
    <nav class="footer__nav" aria-label="Footer">
      <a href="#home">Home</a><a href="#collection">Collection</a><a href="#about">About</a><a href="#contact">Contact</a>
    </nav>
    <div class="footer__social">
      <a href="#" aria-label="Instagram">${icons.instagram}</a>
      <a href="#" aria-label="YouTube">${icons.youtube}</a>
      <a href="#" aria-label="X">${icons.x}</a>
    </div>
  </div>
  <div class="container footer__legal"><p>© ${new Date().getFullYear()} CHRONOVA. A fictional brand for demonstration.</p></div>
</footer>`;
