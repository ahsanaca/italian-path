/* =====================================================================
   SIGN FIGURES — simplified, original SVG illustrations of Italian road
   signs, traffic lights and road markings, drawn from scratch with basic
   shapes (no images, no external files, nothing copied). They follow the
   standard shape/colour code — red-bordered triangles for warnings,
   red-bordered circles for prohibitions, blue circles for obligations —
   but they are schematic: real signs differ slightly in proportions and
   pictograms, and the app says so wherever signs are shown.

   window.renderSign(key) → HTML string (or '' for an unknown key).
===================================================================== */
(function () {
  const RED = '#d71920', BLUE = '#0b5aa8', BLACK = '#161616', YELLOW = '#f7c600';
  const svg = body => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">${body}</svg>`;

  // ---- shape frames ----
  const triangle = inner => svg(
    `<polygon points="50,7 95,88 5,88" fill="#fff" stroke="${RED}" stroke-width="9" stroke-linejoin="round"/>` +
    `<g fill="${BLACK}" stroke="${BLACK}" stroke-linecap="round" stroke-linejoin="round">${inner}</g>`);
  const prohibition = inner => svg(
    `<circle cx="50" cy="50" r="43" fill="#fff" stroke="${RED}" stroke-width="10"/>${inner}`);
  const mandatory = inner => svg(
    `<circle cx="50" cy="50" r="46" fill="${BLUE}"/>` +
    `<g fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round">${inner}</g>`);
  const mirror = inner => `<g transform="translate(100,0) scale(-1,1)">${inner}</g>`;
  const label = (txt, size, y, fill) =>
    `<text x="50" y="${y}" text-anchor="middle" font-size="${size}" font-weight="800" font-family="Arial,Helvetica,sans-serif" fill="${fill}" stroke="none">${txt}</text>`;

  // ---- warning symbols ----
  const bendRight =
    `<path d="M40,78 V62 Q40,49 54,45" fill="none" stroke-width="6.5"/><polygon points="53,35 69,45 53,55" stroke="none"/>`;
  const doubleBend =
    `<path d="M55,79 V70 C55,61 40,62 40,53 C40,45 52,46 56,41" fill="none" stroke-width="6"/><polygon points="49,40 61,32 63,47" stroke="none"/>`;
  const pedestrian =
    `<circle cx="50" cy="40" r="4.6" stroke="none"/>` +
    `<path d="M50,47 V60 M50,50 L43,56 M50,50 L57,55 M50,60 L44,71 M50,60 L56,71" fill="none" stroke-width="3.6"/>` +
    `<rect x="33" y="74" width="34" height="3" stroke="none"/>`;
  const children =
    `<circle cx="42" cy="40" r="4.2" stroke="none"/><path d="M42,46 V60 M42,50 L36,55 M42,50 L50,53 M42,60 L38,72 M42,60 L47,72" fill="none" stroke-width="3.4"/>` +
    `<circle cx="59" cy="49" r="3.4" stroke="none"/><path d="M59,54 V64 M59,57 L53,53 M59,57 L64,62 M59,64 L56,73 M59,64 L62,73" fill="none" stroke-width="3"/>`;
  const roadWorks =
    `<circle cx="42" cy="41" r="4.4" stroke="none"/><path d="M43,47 L47,60 M44,50 L53,55 M47,60 L40,72 M47,60 L53,72 M53,55 L58,70" fill="none" stroke-width="3.4"/>` +
    `<polygon points="54,77 64,65 74,77" stroke="none"/>`;
  const lightsAhead =
    `<rect x="40" y="34" width="20" height="42" rx="4" stroke="none"/>` +
    `<circle cx="50" cy="43" r="4.2" fill="#d71920" stroke="none"/><circle cx="50" cy="55" r="4.2" fill="#f7c600" stroke="none"/><circle cx="50" cy="67" r="4.2" fill="#2fb34a" stroke="none"/>`;
  const slippery =
    `<path d="M36,58 L40,49 H60 L64,58 Z" stroke="none"/><rect x="33" y="57" width="34" height="9" rx="3" stroke="none"/>` +
    `<circle cx="41" cy="67" r="3.6" fill="#fff" stroke-width="2"/><circle cx="59" cy="67" r="3.6" fill="#fff" stroke-width="2"/>` +
    `<path d="M32,75 q4,-4 8,0 t8,0 t8,0 t8,0" fill="none" stroke-width="2.6"/>`;
  const narrowing =
    `<path d="M37,37 Q47,56 37,77 M63,37 Q53,56 63,77" fill="none" stroke-width="5.5"/>`;
  const bump =
    `<path d="M29,70 Q50,38 71,70" fill="none" stroke-width="5.5"/><path d="M26,73 H74" fill="none" stroke-width="3.2"/>`;

  // ---- mandatory symbols ----
  const arrowUp = `<path d="M50,80 V42" fill="none" stroke-width="9"/><polygon points="33,45 50,19 67,45" stroke="none"/>`;
  const arrowRight = `<path d="M20,50 H58" fill="none" stroke-width="9"/><polygon points="55,33 81,50 55,67" stroke="none"/>`;
  function roundaboutArrows() {
    const r = 21, span = 68, out = [];
    for (let k = 0; k < 3; k++) {
      const a0 = (-90 + k * 120) * Math.PI / 180;          // start angle (SVG: clockwise from +x)
      const a1 = a0 - span * Math.PI / 180;                 // counter-clockwise = decreasing angle
      const sx = 50 + r * Math.cos(a0), sy = 50 + r * Math.sin(a0);
      const ex = 50 + r * Math.cos(a1), ey = 50 + r * Math.sin(a1);
      out.push(`<path d="M${sx.toFixed(1)},${sy.toFixed(1)} A${r},${r} 0 0 0 ${ex.toFixed(1)},${ey.toFixed(1)}" fill="none" stroke-width="6"/>`);
      const dx = Math.sin(a1), dy = -Math.cos(a1);          // tangent in the direction of travel
      const rx = Math.cos(a1), ry = Math.sin(a1);           // radial direction
      const tip = [ex + dx * 9, ey + dy * 9], b1 = [ex + rx * 7, ey + ry * 7], b2 = [ex - rx * 7, ey - ry * 7];
      out.push(`<polygon points="${tip.map(v => v.toFixed(1)).join(',')} ${b1.map(v => v.toFixed(1)).join(',')} ${b2.map(v => v.toFixed(1)).join(',')}" stroke="none"/>`);
    }
    return out.join('');
  }
  const bicycle =
    `<circle cx="34" cy="64" r="11" fill="none" stroke-width="4.2"/><circle cx="66" cy="64" r="11" fill="none" stroke-width="4.2"/>` +
    `<path d="M34,64 L44,43 H59 L50,64 Z M59,43 L66,64 M44,43 L42,37 H48 M59,43 L57,37 H63" fill="none" stroke-width="3.6"/>`;

  // ---- priority signs ----
  function octagon() {
    const pts = [];
    for (let k = 0; k < 8; k++) {
      const a = (22.5 + k * 45) * Math.PI / 180;
      pts.push((50 + 47 * Math.cos(a)).toFixed(1) + ',' + (50 + 47 * Math.sin(a)).toFixed(1));
    }
    return svg(`<polygon points="${pts.join(' ')}" fill="${RED}" stroke="#fff" stroke-width="3.5"/>` +
      `<polygon points="${pts.join(' ')}" fill="none" stroke="${RED}" stroke-width="1" transform="translate(50 50) scale(1.06) translate(-50 -50)"/>` +
      label('STOP', 25, 59, '#fff'));
  }
  const giveWay = svg(`<polygon points="5,13 95,13 50,91" fill="#fff" stroke="${RED}" stroke-width="9" stroke-linejoin="round"/>`);
  const diamond = extra => svg(
    `<polygon points="50,3 97,50 50,97 3,50" fill="#fff" stroke="${BLACK}" stroke-width="2.5" stroke-linejoin="round"/>` +
    `<polygon points="50,13 87,50 50,87 13,50" fill="${YELLOW}" stroke="${BLACK}" stroke-width="2.4" stroke-linejoin="round"/>${extra || ''}`);
  const endPriorityBars =
    `<g stroke="#4a4a4a" stroke-width="3.2" stroke-linecap="round"><path d="M32,66 L66,32 M26,60 L60,26 M38,72 L72,38"/></g>`;

  // ---- traffic lights ----
  const trafficLight = lit => {
    const cols = [['#e0201f', '#4a1f1f'], ['#f7c600', '#4d4415'], ['#2fb34a', '#17381f']];
    const ys = [26, 50, 74];
    return svg(`<rect x="31" y="5" width="38" height="90" rx="10" fill="#1f1f1f"/>` +
      ys.map((y, i) => `<circle cx="50" cy="${y}" r="11" fill="${i === lit ? cols[i][0] : cols[i][1]}"/>`).join(''));
  };

  // ---- road markings (seen from above) ----
  const road = inner => svg(`<rect width="100" height="100" fill="#4d5258"/><rect x="5" y="0" width="3" height="100" fill="#fff"/><rect x="92" y="0" width="3" height="100" fill="#fff"/>${inner}`);
  const dashes = x => [4, 36, 68].map(y => `<rect x="${x}" y="${y}" width="5" height="22" fill="#fff"/>`).join('');
  const zebra = [0, 1, 2, 3, 4, 5].map(k => `<rect x="${12 + k * 14}" y="36" width="9" height="28" fill="#fff"/>`).join('');

  const FIGURES = {
    // warning
    'curva-dx': { html: triangle(bendRight), alt: 'Warning sign: dangerous bend to the right' },
    'curva-sx': { html: triangle(mirror(bendRight)), alt: 'Warning sign: dangerous bend to the left' },
    'doppia-curva': { html: triangle(doubleBend), alt: 'Warning sign: double bend, first to the left' },
    'pedoni': { html: triangle(pedestrian), alt: 'Warning sign: pedestrian crossing' },
    'bambini': { html: triangle(children), alt: 'Warning sign: children' },
    'lavori': { html: triangle(roadWorks), alt: 'Warning sign: road works' },
    'semaforo-avviso': { html: triangle(lightsAhead), alt: 'Warning sign: traffic lights ahead' },
    'sdrucciolevole': { html: triangle(slippery), alt: 'Warning sign: slippery road' },
    'strettoia': { html: triangle(narrowing), alt: 'Warning sign: road narrows' },
    'dosso': { html: triangle(bump), alt: 'Warning sign: hump in the road' },
    // prohibition
    'divieto-accesso': { html: svg(`<circle cx="50" cy="50" r="46" fill="${RED}"/><rect x="19" y="42" width="62" height="16" rx="1.5" fill="#fff"/>`), alt: 'No entry' },
    'divieto-transito': { html: prohibition(''), alt: 'No vehicles in either direction' },
    'limite-50': { html: prohibition(label('50', 38, 64, BLACK)), alt: 'Maximum speed 50 km/h' },
    'divieto-sorpasso': { html: prohibition(`<rect x="28" y="28" width="17" height="44" rx="6" fill="${RED}"/><rect x="55" y="28" width="17" height="44" rx="6" fill="${BLACK}"/>`), alt: 'No overtaking' },
    'divieto-sosta': { html: svg(`<circle cx="50" cy="50" r="43" fill="${BLUE}" stroke="${RED}" stroke-width="9"/><path d="M23,23 L77,77" stroke="${RED}" stroke-width="10" stroke-linecap="butt"/>`), alt: 'No parking' },
    'divieto-fermata': { html: svg(`<circle cx="50" cy="50" r="43" fill="${BLUE}" stroke="${RED}" stroke-width="9"/><path d="M23,23 L77,77 M77,23 L23,77" stroke="${RED}" stroke-width="10" stroke-linecap="butt"/>`), alt: 'No stopping' },
    // mandatory
    'obbligo-dritto': { html: mandatory(arrowUp), alt: 'Mandatory direction: straight ahead' },
    'obbligo-destra': { html: mandatory(arrowRight), alt: 'Mandatory direction: turn right' },
    'rotatoria': { html: mandatory(roundaboutArrows()), alt: 'Roundabout: circulate counter-clockwise' },
    'pista-ciclabile': { html: mandatory(bicycle), alt: 'Cycle path' },
    'velocita-minima-30': { html: svg(`<circle cx="50" cy="50" r="46" fill="${BLUE}"/>` + label('30', 40, 65, '#fff')), alt: 'Minimum speed 30 km/h' },
    // priority
    'stop': { html: octagon(), alt: 'STOP' },
    'dare-precedenza': { html: giveWay, alt: 'Give way' },
    'diritto-precedenza': { html: diamond(''), alt: 'Priority road' },
    'fine-diritto-precedenza': { html: diamond(endPriorityBars), alt: 'End of priority road' },
    // traffic lights
    'semaforo-rosso': { html: trafficLight(0), alt: 'Traffic light: red' },
    'semaforo-giallo': { html: trafficLight(1), alt: 'Traffic light: amber' },
    'semaforo-verde': { html: trafficLight(2), alt: 'Traffic light: green' },
    // markings
    'linea-continua': { html: road(`<rect x="47.5" y="0" width="5" height="100" fill="#fff"/>`), alt: 'Continuous centre line' },
    'linea-tratteggiata': { html: road(dashes(47.5)), alt: 'Broken centre line' },
    'linea-doppia': { html: road(`<rect x="43" y="0" width="5" height="100" fill="#fff"/><rect x="52" y="0" width="5" height="100" fill="#fff"/>`), alt: 'Double continuous line' },
    'linea-mista': { html: road(`<rect x="43" y="0" width="5" height="100" fill="#fff"/>${dashes(52)}`), alt: 'Continuous line next to a broken line' },
    'strisce-pedonali': { html: road(zebra), alt: 'Pedestrian crossing (zebra)' },
    'linea-arresto': { html: road(`<rect x="54" y="42" width="38" height="10" fill="#fff"/><rect x="47.5" y="0" width="5" height="38" fill="#fff"/><rect x="47.5" y="56" width="5" height="44" fill="#fff"/>`), alt: 'Stop line' }
  };

  window.SIGN_KEYS = Object.keys(FIGURES);
  window.renderSign = function (key) {
    const f = FIGURES[key];
    return f ? `<span class="sign-fig" role="img" aria-label="${f.alt}">${f.html}</span>` : '';
  };
})();
