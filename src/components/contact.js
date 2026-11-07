import { icons } from './icons.js';

const ITEMS = [
  [icons.mail, 'Email', '<a href="mailto:hello@chronova.example">hello@chronova.example</a>'],
  [icons.phone, 'Phone', '<a href="tel:+84240000000">+84 24 0000 0000</a>'],
  [icons.pin, 'Showroom', '28 Ly Thai To Street<br />Hoan Kiem, Hanoi, Vietnam'],
  [icons.clock, 'Opening hours', 'Monday to Saturday, 10:00–19:00<br />Sunday by appointment'],
];

export const renderContact = () => `<section class="section contact" id="contact" aria-labelledby="contact-title">
  <div class="container">
    <div class="section__head">
      <h2 class="h2" id="contact-title" data-reveal>Visit or get in touch</h2>
      <p class="lead" data-reveal style="--d:80ms">Book a private viewing or ask about a reference. We reply within one working day.</p>
    </div>
    <ul class="contact__grid">
      ${ITEMS.map(([ic, t, body], i) => `<li class="contact__item" data-reveal style="--d:${i * 70}ms"><span class="contact__icon">${ic}</span><h3>${t}</h3><p>${body}</p></li>`).join('')}
    </ul>
    <p class="note" data-reveal>CHRONOVA is a fictional brand created for this showcase. Contact details are placeholders.</p>
  </div>
</section>`;
