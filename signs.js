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
    'linea-mista': { html: road(`<rect x="43" y="0" width="5" height="100" fill="#fff"/>${dashes(52)}`), alt: 'Continuous + broken line: cross only from the broken-line side' },
    'strisce-pedonali': { html: road(zebra), alt: 'Pedestrian crossing (zebra)' },
    'linea-arresto': { html: road(`<rect x="54" y="42" width="38" height="10" fill="#fff"/><rect x="47.5" y="0" width="5" height="38" fill="#fff"/><rect x="47.5" y="56" width="5" height="44" fill="#fff"/>`), alt: 'Stop line' }
  };

  /* ---------------- second batch of figures ---------------- */
  const person = (cx, top, sw) =>
    `<circle cx="${cx}" cy="${top}" r="4.6" stroke="none"/>` +
    `<path d="M${cx},${top + 7} V${top + 20} M${cx},${top + 10} L${cx - 7},${top + 16} M${cx},${top + 10} L${cx + 7},${top + 15} M${cx},${top + 20} L${cx - 6},${top + 31} M${cx},${top + 20} L${cx + 6},${top + 31}" fill="none" stroke-width="${sw}"/>`;
  function roundaboutArrowsAt(cx, cy, r, span, sw, head) {
    const out = [];
    for (let k = 0; k < 3; k++) {
      const a0 = (-90 + k * 120) * Math.PI / 180, a1 = a0 - span * Math.PI / 180;
      const sx = cx + r * Math.cos(a0), sy = cy + r * Math.sin(a0), ex = cx + r * Math.cos(a1), ey = cy + r * Math.sin(a1);
      out.push(`<path d="M${sx.toFixed(1)},${sy.toFixed(1)} A${r},${r} 0 0 0 ${ex.toFixed(1)},${ey.toFixed(1)}" fill="none" stroke-width="${sw}"/>`);
      const dx = Math.sin(a1), dy = -Math.cos(a1), rx = Math.cos(a1), ry = Math.sin(a1);
      const tip = [ex + dx * head * 1.3, ey + dy * head * 1.3], b1 = [ex + rx * head, ey + ry * head], b2 = [ex - rx * head, ey - ry * head];
      out.push(`<polygon points="${tip.map(v => v.toFixed(1)).join(',')} ${b1.map(v => v.toFixed(1)).join(',')} ${b2.map(v => v.toFixed(1)).join(',')}" stroke="none"/>`);
    }
    return out.join('');
  }
  const slash = `<path d="M24,24 L76,76" stroke="${RED}" stroke-width="7" stroke-linecap="butt"/>`;
  const square = (fill, inner) => svg(`<rect x="5" y="5" width="90" height="90" rx="9" fill="${fill}" stroke="#fff" stroke-width="3"/><rect x="5" y="5" width="90" height="90" rx="9" fill="none" stroke="#c9d3dc" stroke-width="1"/>${inner}`);
  const roadStripe = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#fff"/>`;
  const dashIcon = inner => svg(`<rect x="4" y="4" width="92" height="92" rx="14" fill="#23272b"/>${inner}`);
  const bayLines = [0, 1, 2].map(k => `<rect x="${12 + k * 25}" y="22" width="25" height="56" fill="none" stroke="#2f80ed" stroke-width="4"/>`).join('');
  const bikeSquares = [38, 62].map(y => Array.from({ length: 6 }, (_, k) => `<rect x="${12 + k * 14}" y="${y - 5}" width="9" height="9" fill="#fff"/>`).join('')).join('');

  Object.assign(FIGURES, {
    // warning
    'passaggio-livello': { html: triangle(`<rect x="31" y="45" width="4" height="30" stroke="none"/><rect x="65" y="45" width="4" height="30" stroke="none"/><rect x="31" y="49" width="38" height="4" stroke="none"/><rect x="31" y="59" width="38" height="4" stroke="none"/>`), alt: 'Warning sign: level crossing with barriers' },
    'croce-st-andrea': { html: svg(`<path d="M14,14 L86,86 M86,14 L14,86" stroke="${RED}" stroke-width="22"/><path d="M14,14 L86,86 M86,14 L14,86" stroke="#fff" stroke-width="12"/>`), alt: "St Andrew's cross at a level crossing" },
    'rotatoria-avviso': { html: triangle(roundaboutArrowsAt(50, 60, 13, 70, 5, 6)), alt: 'Warning sign: roundabout ahead' },
    'doppio-senso': { html: triangle(`<path d="M41,74 V52 M59,40 V62" fill="none" stroke-width="5"/><polygon points="34,52 41,40 48,52" stroke="none"/><polygon points="52,62 59,74 66,62" stroke="none"/>`), alt: 'Warning sign: two-way traffic' },
    'salita': { html: triangle(`<polygon points="30,74 70,74 70,52" stroke="none"/>${label('10%', 13, 48, BLACK)}`), alt: 'Warning sign: steep ascent' },
    'discesa': { html: triangle(`<polygon points="30,52 30,74 70,74" stroke="none"/>${label('10%', 13, 48, BLACK)}`), alt: 'Warning sign: steep descent' },
    // prohibition
    'limite-30': { html: prohibition(label('30', 38, 64, BLACK)), alt: 'Maximum speed 30 km/h' },
    'divieto-inversione': { html: prohibition(`<g fill="${BLACK}" stroke="${BLACK}" stroke-linecap="round" stroke-linejoin="round"><path d="M37,72 V46 Q37,32 50,32 Q63,32 63,46 V58" fill="none" stroke-width="7"/><polygon points="54,56 63,70 72,56" stroke="none"/></g>${slash}`), alt: 'No U-turn' },
    'divieto-svolta-sx': { html: prohibition(`<g fill="${BLACK}" stroke="${BLACK}" stroke-linecap="round" stroke-linejoin="round"><path d="M62,74 V52 Q62,42 52,42 H38" fill="none" stroke-width="7"/><polygon points="40,32 24,42 40,52" stroke="none"/></g>${slash}`), alt: 'No left turn' },
    'divieto-pedoni': { html: prohibition(`<g fill="${BLACK}" stroke="${BLACK}" stroke-linecap="round">${person(50, 28, 4.2)}</g>`), alt: 'No pedestrians' },
    'divieto-bici': { html: prohibition(`<g transform="translate(15 14) scale(.7)" fill="none" stroke="${BLACK}" stroke-linecap="round" stroke-linejoin="round"><circle cx="34" cy="64" r="11" stroke-width="5"/><circle cx="66" cy="64" r="11" stroke-width="5"/><path d="M34,64 L44,43 H59 L50,64 Z M59,43 L66,64 M44,43 L42,37 H48 M59,43 L57,37 H63" stroke-width="4.5"/></g>`), alt: 'No bicycles' },
    'fine-divieti': { html: svg(`<circle cx="50" cy="50" r="44" fill="#fff" stroke="#7a7f85" stroke-width="6"/><path d="M26,72 L72,26 M36,80 L80,36 M20,60 L60,20" stroke="#40454a" stroke-width="5" stroke-linecap="round"/>`), alt: 'End of all prohibitions' },
    // mandatory
    'obbligo-sinistra': { html: mandatory(mirror(arrowRight)), alt: 'Mandatory direction: turn left' },
    'percorso-pedonale': { html: mandatory(`<g fill="#fff" stroke="#fff" stroke-linecap="round">${person(50, 26, 4.4)}</g>`), alt: 'Pedestrian path' },
    // information
    'parcheggio': { html: square(BLUE, label('P', 64, 74, '#fff')), alt: 'Parking area' },
    'senso-unico': { html: square(BLUE, `<g fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"><path d="M50,80 V38" fill="none" stroke-width="10"/><polygon points="32,42 50,16 68,42" stroke="none"/></g>`), alt: 'One-way street' },
    'ospedale': { html: square(BLUE, label('H', 62, 72, '#fff')), alt: 'Hospital' },
    'pedonale-info': { html: square(BLUE, `<polygon points="50,16 82,76 18,76" fill="#fff"/><g fill="${BLACK}" stroke="${BLACK}" stroke-linecap="round">${person(50, 38, 3.2)}</g>`), alt: 'Pedestrian crossing (information sign)' },
    'galleria': { html: square(BLUE, `<path d="M24,80 V54 Q24,26 50,26 Q76,26 76,54 V80" fill="none" stroke="#fff" stroke-width="9"/><path d="M50,80 V66 M50,58 V50" stroke="#fff" stroke-width="5"/>`), alt: 'Tunnel' },
    'distributore': { html: square(BLUE, `<g fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"><rect x="30" y="24" width="26" height="52" rx="3" stroke="none"/><rect x="35" y="30" width="16" height="12" fill="${BLUE}" stroke="none"/><path d="M56,40 H66 V62 Q66,70 73,68" fill="none" stroke-width="5"/></g>`), alt: 'Fuel station' },
    'autostrada': { html: svg(`<rect x="5" y="5" width="90" height="90" rx="9" fill="#0a7d3b" stroke="#fff" stroke-width="3"/><polygon points="30,82 70,82 56,26 44,26" fill="#fff"/><path d="M50,80 V70 M50,62 V52 M50,44 V34" stroke="#0a7d3b" stroke-width="3"/>`), alt: 'Motorway' },
    // complementary / temporary
    'pannello-distanza': { html: svg(`<rect x="6" y="28" width="88" height="44" rx="4" fill="#fff" stroke="${BLACK}" stroke-width="4"/>${label('200 m', 25, 59, BLACK)}`), alt: 'Supplementary panel: 200 metres' },
    'barriera': { html: svg(`<rect x="8" y="36" width="84" height="28" fill="#fff" stroke="${BLACK}" stroke-width="3"/><polygon points="12,64 28,36 42,36 26,64" fill="${RED}"/><polygon points="40,64 56,36 70,36 54,64" fill="${RED}"/><polygon points="68,64 84,36 92,36 92,50 80,64" fill="${RED}"/><rect x="14" y="64" width="6" height="26" fill="${BLACK}"/><rect x="80" y="64" width="6" height="26" fill="${BLACK}"/>`), alt: 'Red and white barrier' },
    'cono': { html: svg(`<polygon points="50,10 72,84 28,84" fill="${RED}"/><polygon points="41.1,40 58.9,40 63.7,56 36.3,56" fill="#fff"/><rect x="20" y="84" width="60" height="9" rx="2" fill="${BLACK}"/>`), alt: 'Traffic cone' },
    // markings and lights
    'freccia-strada': { html: road(`<polygon points="50,16 68,44 57,44 57,82 43,82 43,44 32,44" fill="#fff"/>`), alt: 'Direction arrow on the road' },
    'strisce-blu': { html: svg(`<rect width="100" height="100" fill="#4d5258"/>${bayLines}`), alt: 'Blue parking bays' },
    'attraversamento-ciclabile': { html: road(bikeSquares), alt: 'Cycle crossing' },
    'semaforo-freccia-verde': { html: svg(`<rect x="31" y="5" width="38" height="90" rx="10" fill="#1f1f1f"/><circle cx="50" cy="26" r="11" fill="#4a1f1f"/><circle cx="50" cy="50" r="11" fill="#4d4415"/><circle cx="50" cy="74" r="11" fill="#0f2a16"/><polygon points="41,72 53,72 53,66 62,74 53,82 53,76 41,76" fill="#2fb34a"/>`), alt: 'Traffic light: green arrow' },
    // dashboard warning lights
    'spia-olio': { html: dashIcon(`<path d="M24,50 H58 L70,40 H82 L70,56 V66 H32 Q24,66 24,58 Z" fill="#e53935"/><circle cx="48" cy="74" r="0" fill="#e53935"/><path d="M82,60 Q86,68 82,72 Q78,68 82,60 Z" fill="#e53935"/><rect x="34" y="40" width="14" height="6" rx="2" fill="#e53935"/>`), alt: 'Oil pressure warning light' },
    'spia-batteria': { html: dashIcon(`<rect x="20" y="36" width="60" height="38" rx="4" fill="none" stroke="#e53935" stroke-width="6"/><rect x="28" y="28" width="12" height="8" fill="#e53935"/><rect x="60" y="28" width="12" height="8" fill="#e53935"/><path d="M32,56 H44 M38,50 V62 M58,56 H70" stroke="#e53935" stroke-width="5" stroke-linecap="round"/>`), alt: 'Battery warning light' },
    'spia-freni': { html: dashIcon(`<circle cx="50" cy="50" r="22" fill="none" stroke="#e53935" stroke-width="6"/>${label('!', 34, 62, '#e53935')}<path d="M20,34 Q8,50 20,66 M80,34 Q92,50 80,66" fill="none" stroke="#e53935" stroke-width="5" stroke-linecap="round"/>`), alt: 'Brake system warning light' },
    'spia-abs': { html: dashIcon(`<circle cx="50" cy="50" r="30" fill="none" stroke="#f5a300" stroke-width="6"/>${label('ABS', 22, 59, '#f5a300')}`), alt: 'ABS warning light' }
  });

  /* ---------------- road SCENES ----------------
     Simple top-down diagrams (a junction, an overtaking, a crossing…) for
     "which vehicle must give way?" questions. Cars are drawn pointing in
     their direction of travel, with a letter on the roof; drawn from
     scratch, schematic, not to scale. Italy drives on the right. */
  const SC_ROAD = '#575d63';
  const CAR_BLUE = '#1f6fd0', CAR_RED = '#d6342c';
  const scene = body => `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><rect width="200" height="140" fill="#cfe3bf"/>${body}</svg>`;
  const scRect = (x, y, w, h, fill) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}"/>`;
  const scLine = (x1, y1, x2, y2, o) => {
    o = o || {};
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${o.c || '#fff'}" stroke-width="${o.w || 1.8}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
  };
  const scBuilding = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="#b9b2a6" stroke="#9a9388" stroke-width="1"/>`;
  const scCar = (x, y, rot, fill, letter) =>
    `<g transform="translate(${x} ${y}) rotate(${rot})">` +
    `<rect x="-8" y="-15" width="16" height="30" rx="5" fill="${fill}" stroke="#111" stroke-width="1.3"/>` +
    `<rect x="-6" y="-11" width="12" height="7" rx="2" fill="#cfe9ff" stroke="#111" stroke-width=".7"/>` +
    `<rect x="-6" y="8.5" width="12" height="3.5" rx="1.2" fill="#000" opacity=".28"/>` +
    (letter ? `<g transform="rotate(${-rot})"><circle cx="0" cy="2" r="6.2" fill="#fff" stroke="#111" stroke-width=".8"/><text x="0" y="5.4" text-anchor="middle" font-size="9" font-weight="800" font-family="Arial,Helvetica,sans-serif" fill="#111">${letter}</text></g>` : '') +
    `</g>`;
  // dashed path with an arrowhead: where a vehicle is going
  const scArrow = (d, tipX, tipY, ang, color) => {
    const c = color || '#f5a300';
    return `<path d="${d}" fill="none" stroke="${c}" stroke-width="2.6" stroke-dasharray="5 3.5" stroke-linecap="round"/>` +
      `<polygon points="-5,3 0,-6 5,3" fill="${c}" transform="translate(${tipX} ${tipY}) rotate(${ang})"/>`;
  };
  const scSign = (inner, x, y, size) => `<g transform="translate(${x - size / 2} ${y - size / 2}) scale(${size / 100})">${inner}</g>`;
  const octPts = (() => {
    const p = [];
    for (let k = 0; k < 8; k++) { const a = (22.5 + k * 45) * Math.PI / 180; p.push((50 + 47 * Math.cos(a)).toFixed(1) + ',' + (50 + 47 * Math.sin(a)).toFixed(1)); }
    return p.join(' ');
  })();
  const stopInner = `<polygon points="${octPts}" fill="${RED}" stroke="#fff" stroke-width="3.5"/>` + label('STOP', 25, 59, '#fff');
  const giveWayInner = `<polygon points="5,13 95,13 50,91" fill="#fff" stroke="${RED}" stroke-width="9" stroke-linejoin="round"/>`;
  const priorityInner = `<polygon points="50,3 97,50 50,97 3,50" fill="#fff" stroke="${BLACK}" stroke-width="2.5" stroke-linejoin="round"/>` +
    `<polygon points="50,13 87,50 50,87 13,50" fill="${YELLOW}" stroke="${BLACK}" stroke-width="2.4" stroke-linejoin="round"/>`;
  // a pedestrian seen from above (head + shoulders)
  const scPerson = (x, y) =>
    `<g transform="translate(${x} ${y}) scale(1.55)"><ellipse cx="0" cy="1.5" rx="6.2" ry="3.2" fill="#2b6cb0" stroke="#111" stroke-width=".6"/><circle cx="0" cy="0" r="3.6" fill="#f2a04a" stroke="#111" stroke-width=".6"/></g>`;
  // a crossroads, 60-wide roads, with a building in each corner
  const scCross = () =>
    scBuilding(8, 6, 52, 28) + scBuilding(140, 6, 52, 28) + scBuilding(8, 106, 52, 28) + scBuilding(140, 106, 52, 28) +
    scRect(70, 0, 60, 140, SC_ROAD) + scRect(0, 40, 200, 60, SC_ROAD) +
    scLine(100, 0, 100, 40, { dash: '7 6' }) + scLine(100, 100, 100, 140, { dash: '7 6' }) +
    scLine(0, 70, 70, 70, { dash: '7 6' }) + scLine(130, 70, 200, 70, { dash: '7 6' });
  // a straight two-lane road, 76 wide (right lane centre x=119, left lane centre x=81)
  const scStraight = centre =>
    scBuilding(6, 8, 44, 38) + scBuilding(150, 92, 44, 38) +
    scRect(62, 0, 76, 140, SC_ROAD) + scLine(65, 0, 65, 140, { w: 1.3 }) + scLine(135, 0, 135, 140, { w: 1.3 }) + centre;
  const dashedCentre = scLine(100, 0, 100, 140, { dash: '8 6' });
  const zebraV = (y0) => Array.from({ length: 8 }, (_, k) => scRect(66 + k * 9.2, y0, 5.2, 24, '#fff')).join('');
  const barrierArm = (x, y, w) => scRect(x, y, w, 4.6, '#fff') +
    Array.from({ length: Math.floor(w / 9) }, (_, k) => scRect(x + k * 9 + 4.5, y, 4.5, 4.6, RED)).join('');
  const zigzag = (() => {
    const pts = [];
    for (let k = 0, y = 28; y <= 104; k++, y += 6) pts.push(`${k % 2 ? 130 : 138},${y}`);
    return `<polyline points="${pts.join(' ')}" fill="none" stroke="${YELLOW}" stroke-width="2.4" stroke-linejoin="round"/>`;
  })();

  Object.assign(FIGURES, {
    'scena-incrocio-destra': { scene: true, html: scene(scCross() + scCar(160, 55, 270, CAR_RED, 'B') + scCar(115, 120, 0, CAR_BLUE, 'A')),
      alt: 'Junction with no signs. Blue car A arrives from the south; red car B arrives from the east, on A\'s right.' },
    'scena-incrocio-sinistra': { scene: true, html: scene(scCross() + scCar(40, 85, 90, CAR_RED, 'B') + scCar(115, 120, 0, CAR_BLUE, 'A')),
      alt: 'Junction with no signs. Blue car A arrives from the south; red car B arrives from the west, on A\'s left.' },
    'scena-incrocio-stop': { scene: true, html: scene(scCross() + scRect(100, 102, 30, 3, '#fff') + scSign(stopInner, 140, 113, 18) + scCar(40, 85, 90, CAR_RED, 'B') + scCar(115, 124, 0, CAR_BLUE, 'A')),
      alt: 'Junction. Blue car A, arriving from the south, has a STOP sign and a stop line. Red car B arrives from the west.' },
    'scena-incrocio-dare-precedenza': { scene: true, html: scene(scCross() + scSign(giveWayInner, 140, 113, 18) + scCar(160, 55, 270, CAR_RED, 'B') + scCar(115, 124, 0, CAR_BLUE, 'A')),
      alt: 'Junction. Blue car A, arriving from the south, has a give-way sign. Red car B arrives from the east.' },
    'scena-incrocio-diritto': { scene: true, html: scene(scCross() + scSign(priorityInner, 140, 113, 18) + scCar(160, 55, 270, CAR_RED, 'B') + scCar(115, 124, 0, CAR_BLUE, 'A')),
      alt: 'Junction. Blue car A, arriving from the south, is on a road with a priority-road sign. Red car B arrives from the east, on A\'s right.' },
    'scena-sorpasso-linea': { scene: true, html: scene(scStraight(scLine(100, 0, 100, 140, { w: 2.8 })) + scCar(119, 84, 0, CAR_RED, 'B') + scCar(81, 70, 0, CAR_BLUE, 'A')),
      alt: 'Two-lane road with a continuous centre line. Blue car A is overtaking red car B by crossing the continuous line.' },
    'scena-sorpasso-curva': { scene: true, html: scene(
        `<rect x="124" y="62" width="72" height="70" rx="4" fill="#b9b2a6" stroke="#9a9388" stroke-width="1"/>` +
        `<path d="M85,150 V74 Q85,28 130,28 H210" fill="none" stroke="${SC_ROAD}" stroke-width="56"/>` +
        `<path d="M85,150 V74 Q85,28 130,28 H210" fill="none" stroke="#fff" stroke-width="1.8" stroke-dasharray="8 6"/>` +
        scCar(99, 112, 0, CAR_RED, 'B') + scCar(71, 100, 0, CAR_BLUE, 'A')),
      alt: 'Road bending to the right, with a building on the inside of the bend blocking the view. Blue car A is overtaking red car B just before the bend.' },
    'scena-rotatoria': { scene: true, html: scene(
        scRect(78, 0, 44, 140, SC_ROAD) + scRect(0, 48, 200, 44, SC_ROAD) +
        `<circle cx="100" cy="70" r="40" fill="none" stroke="${SC_ROAD}" stroke-width="36"/>` +
        `<circle cx="100" cy="70" r="21" fill="#9bcf8a" stroke="#fff" stroke-width="1.5"/><circle cx="100" cy="70" r="11" fill="#7fbf6e"/>` +
        scSign(giveWayInner, 132, 113, 16) + scCar(65.4, 90, 150, CAR_BLUE, 'A') + scCar(111, 121, 0, CAR_RED, 'B')),
      alt: 'Roundabout. Blue car A is already circulating, counter-clockwise, about to pass the south entry. Red car B is waiting to enter from the south, at a give-way sign.' },
    'scena-pedoni': { scene: true, html: scene(scStraight(dashedCentre) + zebraV(50) + scPerson(112, 62) + scCar(119, 94, 0, CAR_RED, 'B') + scCar(119, 127, 0, CAR_BLUE, 'A')),
      alt: 'Road with a pedestrian crossing. A pedestrian is crossing. Red car B has stopped before the crossing; blue car A is behind it in the same lane.' },
    'scena-sosta-incrocio': { scene: true, html: scene(scCross() + scCar(122, 119, 0, CAR_BLUE, 'A') +
        scLine(136, 100, 136, 134, { c: '#222', w: 1.2 }) + scLine(132, 100, 140, 100, { c: '#222', w: 1.2 }) + scLine(132, 134, 140, 134, { c: '#222', w: 1.2 }) +
        `<text x="157" y="121" text-anchor="middle" font-size="11" font-weight="800" font-family="Arial,Helvetica,sans-serif" fill="#222">5 m</text>`),
      alt: 'Blue car A is parked at the right-hand edge of the road, less than 5 metres from the junction.' },
    'scena-distanza': { scene: true, html: scene(scStraight(dashedCentre) +
        scCar(119, 44, 0, CAR_RED, 'B') + scRect(112, 57, 5, 2.6, '#ff3b30') + scRect(122, 57, 5, 2.6, '#ff3b30') +
        scCar(119, 80, 0, CAR_BLUE, 'A') + scLine(112, 104, 112, 118, { c: '#fff', w: 1.4 }) + scLine(119, 106, 119, 124, { c: '#fff', w: 1.4 }) + scLine(126, 104, 126, 118, { c: '#fff', w: 1.4 })),
      alt: 'Road with two cars in the same lane, travelling in the same direction. Blue car A follows red car B very closely; B\'s brake lights are on.' },
    'scena-passaggio-livello': { scene: true, html: scene(scStraight(dashedCentre) +
        scRect(0, 62, 200, 16, '#a39d94') + Array.from({ length: 25 }, (_, k) => scRect(k * 8 + 1, 63, 3.5, 14, '#6b4f33')).join('') +
        scLine(0, 66, 200, 66, { c: '#3c3f44', w: 1.8 }) + scLine(0, 74, 200, 74, { c: '#3c3f44', w: 1.8 }) +
        barrierArm(100, 99, 38) + barrierArm(62, 37, 38) +
        `<circle cx="146" cy="96" r="3.2" fill="#ff3b30"/><circle cx="54" cy="44" r="3.2" fill="#ff3b30"/>` +
        scCar(119, 126, 0, CAR_BLUE, 'A')),
      alt: 'Level crossing with the barriers down and red lights flashing. Blue car A is waiting before the barrier.' },
    'scena-svolta-sinistra': { scene: true, html: scene(scCross() +
        scArrow('M115,98 V82 Q115,55 88,55 H66', 62, 55, 270) + scArrow('M85,40 V90', 85, 94, 180, '#ffb4ab') +
        scCar(85, 20, 180, CAR_RED, 'B') + scCar(115, 114, 0, CAR_BLUE, 'A')),
      alt: 'Junction with no signs. Blue car A, coming from the south, is turning left. Red car B comes from the north, in the opposite direction, and is going straight on.' },
    'scena-fermata-bus': { scene: true, html: scene(scStraight(dashedCentre) + zigzag +
        `<rect x="152" y="31" width="18" height="12" rx="2" fill="${BLUE}"/><text x="161" y="40" text-anchor="middle" font-size="8" font-weight="800" font-family="Arial,Helvetica,sans-serif" fill="#fff">BUS</text>` +
        scRect(160.2, 43, 1.8, 16, '#555') + scRect(150, 62, 14, 26, '#cbd3da') + scCar(130, 66, 0, CAR_BLUE, 'A')),
      alt: 'Roadside bus stop marked by a bus sign and a yellow zig-zag line. Blue car A is parked at the kerb inside the bus-stop area.' },
    'scena-svolta-destra': { scene: true, html: scene(scCross() +
        Array.from({ length: 6 }, (_, k) => scRect(140, 42 + k * 9.6, 16, 5, '#fff')).join('') + scPerson(148, 78) +
        scArrow('M115,98 V92 Q115,85 128,85 H166', 170, 85, 90) + scCar(115, 114, 0, CAR_BLUE, 'A')),
      alt: 'Junction with no signs. Blue car A, coming from the south, is turning right into the east road, where a pedestrian is already crossing on a pedestrian crossing.' }
  });
  window.SCENE_KEYS = Object.keys(FIGURES).filter(k => FIGURES[k].scene);

  /* ---------------- names and meanings (for the Sign Trainer) ----------------
     [Italian name, English meaning, category] — scenes are not listed here. */
  window.SIGN_CATS = [
    ['warning', 'Warning'], ['prohibition', 'Prohibition'], ['mandatory', 'Mandatory'], ['priority', 'Priority'],
    ['info', 'Information'], ['panel', 'Panels & works'], ['marking', 'Road markings'], ['light', 'Traffic lights'], ['dash', 'Dashboard']
  ];
  window.SIGN_INFO = {
    'curva-dx': ['Curva pericolosa a destra', 'Dangerous bend to the right', 'warning'],
    'curva-sx': ['Curva pericolosa a sinistra', 'Dangerous bend to the left', 'warning'],
    'doppia-curva': ['Doppia curva, la prima a sinistra', 'Double bend, the first to the left', 'warning'],
    'pedoni': ['Attraversamento pedonale', 'Pedestrian crossing ahead', 'warning'],
    'bambini': ['Bambini', 'Children (school or play area)', 'warning'],
    'lavori': ['Lavori', 'Road works', 'warning'],
    'semaforo-avviso': ['Semaforo', 'Traffic lights ahead', 'warning'],
    'sdrucciolevole': ['Strada sdrucciolevole', 'Slippery road', 'warning'],
    'strettoia': ['Strettoia', 'Road narrows', 'warning'],
    'dosso': ['Dosso', 'Hump in the road', 'warning'],
    'passaggio-livello': ['Passaggio a livello con barriere', 'Level crossing with barriers', 'warning'],
    'croce-st-andrea': ['Croce di Sant\'Andrea', 'St Andrew\'s cross, at a level crossing', 'warning'],
    'rotatoria-avviso': ['Rotatoria', 'Roundabout ahead', 'warning'],
    'doppio-senso': ['Doppio senso di circolazione', 'Two-way traffic ahead', 'warning'],
    'salita': ['Salita ripida', 'Steep ascent', 'warning'],
    'discesa': ['Discesa pericolosa', 'Steep descent', 'warning'],
    'divieto-accesso': ['Divieto di accesso', 'No entry', 'prohibition'],
    'divieto-transito': ['Divieto di transito', 'No vehicles in either direction', 'prohibition'],
    'limite-50': ['Limite massimo di velocità 50', 'Maximum speed 50 km/h', 'prohibition'],
    'limite-30': ['Limite massimo di velocità 30', 'Maximum speed 30 km/h', 'prohibition'],
    'divieto-sorpasso': ['Divieto di sorpasso', 'No overtaking', 'prohibition'],
    'divieto-sosta': ['Divieto di sosta', 'No parking (a quick stop is allowed)', 'prohibition'],
    'divieto-fermata': ['Divieto di fermata', 'No stopping (and so no parking)', 'prohibition'],
    'divieto-inversione': ['Divieto di inversione', 'No U-turn', 'prohibition'],
    'divieto-svolta-sx': ['Divieto di svolta a sinistra', 'No left turn', 'prohibition'],
    'divieto-pedoni': ['Transito vietato ai pedoni', 'No pedestrians', 'prohibition'],
    'divieto-bici': ['Transito vietato alle biciclette', 'No bicycles', 'prohibition'],
    'fine-divieti': ['Fine di tutti i divieti', 'End of all prohibitions', 'prohibition'],
    'obbligo-dritto': ['Direzione obbligatoria dritto', 'Straight ahead only', 'mandatory'],
    'obbligo-destra': ['Direzione obbligatoria a destra', 'Turn right only', 'mandatory'],
    'obbligo-sinistra': ['Direzione obbligatoria a sinistra', 'Turn left only', 'mandatory'],
    'rotatoria': ['Rotatoria', 'Roundabout: circulate counter-clockwise', 'mandatory'],
    'pista-ciclabile': ['Pista ciclabile', 'Cycle path', 'mandatory'],
    'velocita-minima-30': ['Velocità minima 30', 'Minimum speed 30 km/h', 'mandatory'],
    'percorso-pedonale': ['Percorso pedonale', 'Pedestrian path', 'mandatory'],
    'stop': ['Stop', 'Stop: come to a full stop and give way', 'priority'],
    'dare-precedenza': ['Dare precedenza', 'Give way', 'priority'],
    'diritto-precedenza': ['Diritto di precedenza', 'Priority road', 'priority'],
    'fine-diritto-precedenza': ['Fine del diritto di precedenza', 'End of priority road', 'priority'],
    'parcheggio': ['Parcheggio', 'Parking area', 'info'],
    'senso-unico': ['Senso unico', 'One-way street', 'info'],
    'ospedale': ['Ospedale', 'Hospital', 'info'],
    'pedonale-info': ['Attraversamento pedonale', 'Pedestrian crossing (information sign)', 'info'],
    'galleria': ['Galleria', 'Tunnel', 'info'],
    'distributore': ['Distributore di carburante', 'Fuel station', 'info'],
    'autostrada': ['Autostrada', 'Motorway', 'info'],
    'pannello-distanza': ['Pannello integrativo di distanza', 'Supplementary panel: distance to the hazard', 'panel'],
    'barriera': ['Barriera', 'Red and white barrier', 'panel'],
    'cono': ['Cono', 'Traffic cone', 'panel'],
    'linea-continua': ['Linea continua', 'Continuous line: do not cross or overtake', 'marking'],
    'linea-tratteggiata': ['Linea discontinua', 'Broken line: may be crossed when it is safe', 'marking'],
    'linea-doppia': ['Doppia linea continua', 'Double continuous line', 'marking'],
    'linea-mista': ['Linea mista', 'Continuous line next to a broken line', 'marking'],
    'strisce-pedonali': ['Strisce pedonali', 'Pedestrian (zebra) crossing', 'marking'],
    'linea-arresto': ['Linea di arresto', 'Stop line', 'marking'],
    'freccia-strada': ['Freccia di direzione', 'Direction arrow on the road', 'marking'],
    'strisce-blu': ['Strisce blu', 'Paid parking bays', 'marking'],
    'attraversamento-ciclabile': ['Attraversamento ciclabile', 'Cycle crossing', 'marking'],
    'semaforo-rosso': ['Semaforo rosso', 'Red light: stop', 'light'],
    'semaforo-giallo': ['Semaforo giallo', 'Amber light: stop, unless you are too close to stop safely', 'light'],
    'semaforo-verde': ['Semaforo verde', 'Green light: go on', 'light'],
    'semaforo-freccia-verde': ['Freccia verde', 'Green arrow: go the way it points', 'light'],
    'spia-olio': ['Spia della pressione dell\'olio', 'Low oil pressure warning light', 'dash'],
    'spia-batteria': ['Spia della batteria', 'Battery charging warning light', 'dash'],
    'spia-freni': ['Spia dei freni', 'Brake fault or handbrake on', 'dash'],
    'spia-abs': ['Spia ABS', 'ABS fault warning light', 'dash']
  };

  window.SIGN_KEYS = Object.keys(FIGURES);
  window.renderSign = function (key) {
    const f = FIGURES[key];
    return f ? `<span class="sign-fig${f.scene ? ' scene-fig' : ''}" role="img" aria-label="${f.alt}">${f.html}</span>` : '';
  };
})();
