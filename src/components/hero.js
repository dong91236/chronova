import { watches } from '../data/watches.js';
import { watchSvg, startLiveClock } from '../utils/watchSvg.js';
import { $ } from '../utils/dom.js';

// The hero watch is a live clock: its hands follow the visitor's local time.
const heroWatch = watches.find((w) => w.id === 'halden-automatic');

export function renderHero() {
  return `<section class="hero" id="home">
    <div class="container hero__grid">
      <div class="hero__copy">
        <h1 class="hero__title"><span class="line"><span>Time,</span></span> <span class="line"><span>made with</span></span> <span class="line"><span>restraint.</span></span></h1>
        <p class="hero__text">CHRONOVA designs watches that say less and last longer. Eight references in steel, gold and titanium, each finished by hand.</p>
        <a class="btn" href="#collection">Explore Collection</a>
      </div>
      <div class="hero__visual" aria-hidden="false">
        <div class="hero__ring"></div>
        <div class="hero__watch" id="hero-watch">${watchSvg({ ...heroWatch, look: { ...heroWatch.look, dial: { bg: '#15161a', bg2: '#2d3036', ink: '#ecebe8', hand: '#ecebe8', accent: '#c9b88f' } } }, { live: true, uid: 'hero' })}</div>
        <p class="hero__caption">Shown in your local time</p>
      </div>
    </div>
  </section>`;
}

export const initHero = () => startLiveClock($('#hero-watch'));
