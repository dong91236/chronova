// Generates a watch illustration as an inline SVG string. No image files needed.
const METALS = {
  steel: ['#eceef0', '#7a7e85', '#b6b9be'],
  gold: ['#f0dca4', '#8a6c2c', '#c9a85c'],
  rose: ['#f0cbb6', '#8c5844', '#cf9c84'],
  black: ['#55575c', '#141517', '#2e3034'],
  titanium: ['#c4c7cc', '#585b61', '#8f9298'],
  platinum: ['#f2f3f5', '#8c9096', '#c5c8cd'],
};

const CX = 200;
const CY = 260;
const pt = (r, deg) => {
  const a = (deg * Math.PI) / 180;
  return [(CX + r * Math.sin(a)).toFixed(2), (CY - r * Math.cos(a)).toFixed(2)];
};

function strap(look, id, m) {
  if (look.strap === 'bracelet') {
    let links = '';
    for (let i = 0; i < 6; i++) {
      links += `<rect x="150" y="${150 - i * 26}" width="100" height="23" rx="3" fill="url(#${id}-m)"/>`;
      links += `<rect x="150" y="${352 + i * 26 - 3}" width="100" height="23" rx="3" fill="url(#${id}-m)"/>`;
    }
    return `<g opacity=".95">${links}</g>`;
  }
  const c = look.strap;
  return `<path d="M150 -4H250L246 176H154Z" fill="${c}"/><path d="M154 344H246L250 524H150Z" fill="${c}"/>
    <path d="M160 0V170M240 0V170M160 350V520M240 350V520" stroke="#fff" stroke-opacity=".18" stroke-dasharray="4 4" fill="none"/>
    <path d="M154 344H246L248 360H152Z" fill="#000" opacity=".25"/>`;
}

function markers(look, d, accent) {
  const s = look.style;
  let out = '';
  for (let i = 0; i < 60; i++) {
    if (i % 5 === 0) continue;
    const [x1, y1] = pt(80, i * 6);
    const [x2, y2] = pt(84, i * 6);
    out += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${d.ink}" stroke-opacity=".45" stroke-width=".6"/>`;
  }
  for (let i = 0; i < 12; i++) {
    const deg = i * 30;
    if (s === 'sport') {
      const [x1, y1] = pt(58, deg);
      const [x2, y2] = pt(77, deg);
      out += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${d.ink}" stroke-width="${i === 0 ? 8 : 5}" stroke-linecap="butt"/>`;
    } else if (s === 'luxury') {
      const [x, y] = pt(70, deg);
      out += `<g transform="translate(${x} ${y}) rotate(${deg})"><path d="M0 -7L3.2 0L0 7L-3.2 0Z" fill="${d.ink}"/></g>`;
    } else {
      const [x1, y1] = pt(i % 3 === 0 ? 62 : 68, deg);
      const [x2, y2] = pt(77, deg);
      out += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${d.ink}" stroke-width="${i % 3 === 0 ? 2.2 : 1.4}"/>`;
    }
  }
  return out;
}

function complication(look, id, d) {
  const c = look.complication;
  if (c === 'date') {
    return `<rect x="${CX + 50}" y="${CY - 8}" width="22" height="16" rx="2" fill="${d.bg2}" stroke="${d.ink}" stroke-opacity=".5" stroke-width=".7"/>
      <text x="${CX + 61}" y="${CY + 4}" font-size="10" text-anchor="middle" fill="${d.ink}" font-family="Manrope,sans-serif">17</text>`;
  }
  if (c === 'chrono') {
    let o = '';
    for (const dx of [-36, 36]) {
      o += `<circle cx="${CX + dx}" cy="${CY + 6}" r="22" fill="none" stroke="${d.ink}" stroke-opacity=".6" stroke-width=".8"/>`;
      for (let i = 0; i < 12; i++) {
        const a = (i * 30 * Math.PI) / 180;
        o += `<line x1="${(CX + dx + 18 * Math.sin(a)).toFixed(1)}" y1="${(CY + 6 - 18 * Math.cos(a)).toFixed(1)}" x2="${(CX + dx + 21 * Math.sin(a)).toFixed(1)}" y2="${(CY + 6 - 21 * Math.cos(a)).toFixed(1)}" stroke="${d.ink}" stroke-width=".7"/>`;
      }
      o += `<line x1="${CX + dx}" y1="${CY + 6}" x2="${CX + dx + (dx < 0 ? 10 : -6)}" y2="${CY - 10}" stroke="${d.ink}" stroke-width="1.2"/>`;
    }
    return o;
  }
  if (c === 'moon') {
    return `<circle cx="${CX}" cy="${CY + 42}" r="17" fill="#0a1020" stroke="${d.ink}" stroke-opacity=".7" stroke-width="1"/>
      <circle cx="${CX - 4}" cy="${CY + 42}" r="9" fill="${d.ink}" opacity=".92"/><circle cx="${CX + 2}" cy="${CY + 40}" r="9" fill="#0a1020"/>
      <circle cx="${CX + 8}" cy="${CY + 36}" r="1" fill="${d.ink}"/><circle cx="${CX - 9}" cy="${CY + 50}" r="0.8" fill="${d.ink}"/>`;
  }
  return '';
}

function bezel(look, id, m) {
  const sport = look.style === 'sport';
  const fill = look.bezel || `url(#${id}-m2)`;
  let o = `<circle cx="${CX}" cy="${CY}" r="100" fill="${fill}"/>`;
  if (sport) {
    for (let i = 0; i < 60; i++) {
      const [x1, y1] = pt(92, i * 6);
      const [x2, y2] = pt(i % 5 === 0 ? 100 : 97, i * 6);
      o += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#e8e8e6" stroke-opacity=".75" stroke-width="${i % 5 === 0 ? 1.6 : 0.8}"/>`;
    }
    o += `<path d="M${CX - 6} ${CY - 101}L${CX + 6} ${CY - 101}L${CX} ${CY - 90}Z" fill="#e9f0d6"/>`;
  } else {
    o += `<circle cx="${CX}" cy="${CY}" r="94" fill="none" stroke="#000" stroke-opacity=".18"/>`;
  }
  return o;
}

/**
 * @param {object} w watch data
 * @param {{time?: number[], live?: boolean, uid?: string}} opts
 */
export function watchSvg(w, { time = [10, 9, 36], live = false, uid = w.id } = {}) {
  const { look } = w;
  const d = look.dial;
  const m = METALS[look.metal];
  const id = `wv-${uid}`;
  const [h, mi, s] = time;
  const ha = ((h % 12) + mi / 60) * 30;
  const ma = (mi + s / 60) * 6;
  const sa = s * 6;
  const accent = d.accent || (look.style === 'sport' ? d.ink : '#c0392b');
  const secColor = d.accent || (look.style === 'luxury' ? d.ink : '#c8553d');
  const hand = (cls, angle, body) =>
    `<g class="${cls}" style="transform-origin:${CX}px ${CY}px;transform:rotate(${angle}deg)">${body}</g>`;

  return `<svg class="watch-svg" viewBox="0 0 400 520" role="img" aria-label="${w.name} watch" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="${id}-m" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${m[0]}"/><stop offset=".55" stop-color="${m[2]}"/><stop offset="1" stop-color="${m[1]}"/></linearGradient>
    <linearGradient id="${id}-m2" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${m[0]}"/><stop offset=".5" stop-color="${m[1]}"/><stop offset="1" stop-color="${m[2]}"/></linearGradient>
    <radialGradient id="${id}-d" cx=".4" cy=".35" r=".85"><stop offset="0" stop-color="${d.bg2}"/><stop offset="1" stop-color="${d.bg}"/></radialGradient>
    <linearGradient id="${id}-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".28"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/></linearGradient>
    <clipPath id="${id}-c"><circle cx="${CX}" cy="${CY}" r="86"/></clipPath>
  </defs>
  ${strap(look, id, m)}
  <g fill="url(#${id}-m)"><rect x="140" y="138" width="20" height="52" rx="7"/><rect x="240" y="138" width="20" height="52" rx="7"/><rect x="140" y="330" width="20" height="52" rx="7"/><rect x="240" y="330" width="20" height="52" rx="7"/></g>
  <rect x="306" y="248" width="18" height="24" rx="4" fill="url(#${id}-m)"/>
  ${look.complication === 'chrono' ? `<rect x="302" y="190" width="14" height="22" rx="4" fill="url(#${id}-m)" transform="rotate(28 309 201)"/>
  <rect x="302" y="308" width="14" height="22" rx="4" fill="url(#${id}-m)" transform="rotate(-28 309 319)"/>` : ''}
  <circle cx="${CX}" cy="${CY}" r="112" fill="url(#${id}-m)"/>
  <circle cx="${CX}" cy="${CY}" r="107" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width=".8"/>
  ${bezel(look, id, m)}
  <circle cx="${CX}" cy="${CY}" r="86" fill="url(#${id}-d)"/>
  <g clip-path="url(#${id}-c)">
    ${look.metal === 'rose' || d.bg === '#cfd1d3' ? Array.from({ length: 12 }, (_, i) => `<line x1="${CX}" y1="${CY}" x2="${pt(90, i * 30)[0]}" y2="${pt(90, i * 30)[1]}" stroke="#fff" stroke-opacity=".12" stroke-width="6"/>`).join('') : ''}
  </g>
  ${markers(look, d, accent)}
  <text x="${CX}" y="${CY - 36}" font-size="9.5" letter-spacing="3.2" text-anchor="middle" fill="${d.ink}" font-family="Cormorant Garamond,serif" font-weight="500">CHRONOVA</text>
  <text x="${CX}" y="${CY - 26}" font-size="4.8" letter-spacing="1.6" text-anchor="middle" fill="${d.ink}" fill-opacity=".7" font-family="Manrope,sans-serif">SWISS INSPIRED · AUTOMATIC</text>
  ${complication(look, id, d)}
  ${hand(live ? 'hand hand-h' : 'hand', ha, `<path d="M${CX - 4.5} ${CY + 12}L${CX} ${CY - 46}L${CX + 4.5} ${CY + 12}Z" fill="${d.hand}"/>`)}
  ${hand(live ? 'hand hand-m' : 'hand', ma, `<path d="M${CX - 3.2} ${CY + 14}L${CX} ${CY - 72}L${CX + 3.2} ${CY + 14}Z" fill="${d.hand}"/>`)}
  ${hand(live ? 'hand hand-s' : 'hand', sa, `<line x1="${CX}" y1="${CY + 22}" x2="${CX}" y2="${CY - 78}" stroke="${secColor}" stroke-width="1.3"/><circle cx="${CX}" cy="${CY + 14}" r="2.4" fill="${secColor}"/>`)}
  <circle cx="${CX}" cy="${CY}" r="4.2" fill="${secColor}"/><circle cx="${CX}" cy="${CY}" r="1.5" fill="#111"/>
  <circle cx="${CX}" cy="${CY}" r="86" fill="url(#${id}-g)" pointer-events="none"/>
  <circle cx="${CX}" cy="${CY}" r="86" fill="none" stroke="#000" stroke-opacity=".35" stroke-width="1.2"/>
</svg>`;
}

/** Moves the hands of a live watch to the current time (monotonic angles → no backward spin). */
export function startLiveClock(root) {
  const set = (sel, deg, smooth) => {
    const el = root.querySelector(sel);
    if (el) {
      el.style.transition = smooth ? 'transform 1s linear' : 'none';
      el.style.transform = `rotate(${deg}deg)`;
    }
  };
  const tick = (smooth) => {
    const n = new Date();
    const secs = n.getHours() * 3600 + n.getMinutes() * 60 + n.getSeconds();
    set('.hand-s', secs * 6, smooth);
    set('.hand-m', (secs / 60) * 6, false);
    set('.hand-h', (secs / 3600) * 30, false);
  };
  tick(false);
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const timer = setInterval(() => {
    if (!document.hidden) tick(!reduce);
  }, 1000);
  return () => clearInterval(timer);
}
