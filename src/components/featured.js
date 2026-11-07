import { FEATURED_ID, getWatch } from '../data/watches.js';
import { watchSvg } from '../utils/watchSvg.js';
import { price } from '../utils/format.js';
import { $ } from '../utils/dom.js';

export function renderFeatured() {
  const w = getWatch(FEATURED_ID);
  const { movement, caseSize, waterResistance, powerReserve } = w.specs;
  return `<section class="section featured" id="featured" aria-labelledby="featured-title">
    <div class="container featured__grid">
      <div class="featured__stage" data-reveal>
        <div class="featured__disc"></div>
        ${watchSvg(w, { uid: 'featured' })}
      </div>
      <div class="featured__body">
        <p class="kicker" data-reveal>Featured watch</p>
        <h2 class="h2" id="featured-title" data-reveal style="--d:80ms">${w.name}</h2>
        <p class="lead" data-reveal style="--d:140ms">${w.description}</p>
        <dl class="spec-grid" data-reveal style="--d:200ms">
          <div><dt>Movement</dt><dd>${movement}</dd></div>
          <div><dt>Case</dt><dd>${caseSize}</dd></div>
          <div><dt>Water resistance</dt><dd>${waterResistance}</dd></div>
          <div><dt>Power reserve</dt><dd>${powerReserve}</dd></div>
        </dl>
        <div class="featured__foot" data-reveal style="--d:260ms">
          <p class="price">${price(w.price)}</p>
          <button class="btn" type="button" data-open="${w.id}">View details</button>
        </div>
      </div>
    </div>
  </section>`;
}

export const initFeatured = (open) =>
  $('#featured [data-open]').addEventListener('click', (e) => open(e.currentTarget.dataset.open));
