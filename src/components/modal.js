import { getWatch } from '../data/watches.js';
import { watchSvg } from '../utils/watchSvg.js';
import { price } from '../utils/format.js';
import { icons } from './icons.js';
import { $ } from '../utils/dom.js';

const LABELS = [
  ['movement', 'Movement'],
  ['caseMaterial', 'Case material'],
  ['caseSize', 'Case size'],
  ['waterResistance', 'Water resistance'],
  ['powerReserve', 'Power reserve'],
];

export const renderModal = () => `<dialog class="modal" id="modal" aria-labelledby="modal-title">
  <div class="modal__panel">
    <button class="icon-btn modal__close" id="modal-close" type="button" aria-label="Close details">${icons.close}</button>
    <div class="modal__media" id="modal-media"></div>
    <div class="modal__body" id="modal-body"></div>
  </div>
</dialog>`;

export function initModal() {
  const dlg = $('#modal');
  let opener = null;

  const close = () => dlg.close();
  dlg.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    opener?.focus?.();
  });
  dlg.addEventListener('click', (e) => e.target === dlg && close()); // click on backdrop
  $('#modal-close').addEventListener('click', close);

  return (id) => {
    const w = getWatch(id);
    if (!w) return;
    opener = document.activeElement;
    $('#modal-media').innerHTML = watchSvg(w, { uid: 'modal' });
    $('#modal-body').innerHTML = `
      <p class="card__cat">${w.category}</p>
      <h2 class="h2" id="modal-title">${w.name}</h2>
      <p class="price">${price(w.price)}</p>
      <p class="lead">${w.description}</p>
      <dl class="spec-list">${LABELS.map(([k, l]) => `<div><dt>${l}</dt><dd>${w.specs[k]}</dd></div>`).join('')}</dl>
      <a class="btn btn--ghost" href="#contact" id="modal-contact">Enquire about this watch</a>`;
    $('#modal-contact').addEventListener('click', close);
    document.body.classList.add('modal-open');
    dlg.showModal();
    dlg.querySelector('.modal__panel').scrollTop = 0;
  };
}
