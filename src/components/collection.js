import { watches, CATEGORIES } from '../data/watches.js';
import { watchSvg } from '../utils/watchSvg.js';
import { price } from '../utils/format.js';
import { $, $$ } from '../utils/dom.js';

const card = (w, i) => `<li class="card" data-reveal style="--d:${(i % 4) * 70}ms">
  <button class="card__btn" type="button" data-open="${w.id}" aria-label="${w.name}, ${price(w.price)}. View details">
    <span class="card__media">${watchSvg(w, { uid: 'c-' + w.id })}<span class="card__cta">View details</span></span>
    <span class="card__body">
      <span class="card__cat">${w.category}</span>
      <span class="card__name">${w.name}</span>
      <span class="card__short">${w.short}</span>
      <span class="card__specs"><span><span>${w.specs.movement}</span><span>${w.specs.caseMaterial}</span><span>${w.specs.waterResistance} · ${w.specs.powerReserve}</span></span></span>
      <span class="card__price">${price(w.price)}</span>
    </span>
  </button>
</li>`;

export function renderCollection() {
  return `<section class="section" id="collection" aria-labelledby="collection-title">
    <div class="container">
      <div class="section__head">
        <h2 class="h2" id="collection-title" data-reveal>The collection</h2>
        <p class="lead" data-reveal style="--d:80ms">Classic dress watches, sport references and a few pieces made in very small numbers.</p>
      </div>
      <div class="filters" role="group" aria-label="Filter by category" data-reveal style="--d:120ms">
        ${CATEGORIES.map((c, i) => `<button class="chip" type="button" data-filter="${c}" aria-pressed="${i === 0}">${c}</button>`).join('')}
        <span class="filters__count" id="filter-count" aria-live="polite"></span>
      </div>
      <ul class="grid" id="grid">${watches.map(card).join('')}</ul>
    </div>
  </section>`;
}

export function initCollection(open) {
  const grid = $('#grid');
  const count = $('#filter-count');
  const chips = $$('.chip');
  const cards = $$('.card', grid);

  const apply = (cat) => {
    let shown = 0;
    cards.forEach((el, i) => {
      const match = cat === 'All' || watches[i].category === cat;
      el.hidden = !match;
      if (match) {
        shown++;
        el.classList.remove('is-filtering');
        void el.offsetWidth; // restart the entrance animation
        el.classList.add('is-filtering');
        el.style.setProperty('--fd', `${(shown - 1) * 50}ms`);
      }
    });
    count.textContent = `${shown} ${shown === 1 ? 'watch' : 'watches'}`;
  };

  chips.forEach((chip) =>
    chip.addEventListener('click', () => {
      chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
      apply(chip.dataset.filter);
    }),
  );
  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-open]');
    if (btn) open(btn.dataset.open);
  });
  count.textContent = `${watches.length} watches`;
}
