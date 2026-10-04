/* =====================================================================
   PATENTE B — Italian driving-licence THEORY track (English explanations).

   Loaded after content.js, so `tracks`, `units` and `chapters` already
   exist; this file only adds a second track to them. Everything here is
   original: the rules are explained in the author's own words, and the
   Vero/Falso statements are written fresh in the style of the real exam —
   they are NOT copied from the Ministry's quiz database.

   Exam format mirrored by the Mock Exam (see `exam` on the track below):
   30 statements, 20 minutes, a maximum of 3 errors. Rules and exam details
   change from time to time, so the app tells learners to confirm with the
   Motorizzazione or a driving school.
===================================================================== */
(function () {
  tracks.push({
    id: "patente",
    short: "Patente B",
    icon: "🚗",
    title: "Driving Licence — Patente B Theory",
    desc: "Prepare for the Italian driving theory exam: road signs, rules and safety explained in English, with the Italian wording used in the real Vero/Falso test — and timed mock exams to finish.",
    journeyTitle: "Your Patente B Journey",
    tapToStart: "Learn a topic, then drill it with exam-style True/False statements. Take the Mock Exam when you feel ready.",
    exam: { questions: 30, minutes: 20, maxErrors: 3 }
  });

  units.push(
    { id: "p-u1", track: "patente", title: "Unit 1 — The Road & Road Signs", desc: "Road basics, then the three families of signs: warning, prohibition and obligation." },
    { id: "p-u2", track: "patente", title: "Unit 2 — Priority, Markings & Lights", desc: "Who goes first, what the lines on the road mean, and traffic lights." },
    { id: "p-u3", track: "patente", title: "Unit 3 — Speed, Overtaking & Parking", desc: "Speed limits, safe distance, overtaking and where you may stop." },
    { id: "p-u4", track: "patente", title: "Unit 4 — Safety, Documents & Emergencies", desc: "Seat belts, alcohol, licence points, and what to do after an accident." }
  );

  // ---- tiny builders, to keep the data readable ----
  const ex = (icon, ar, translit, meaning) => ({ icon, ar, translit, meaning });
  const vw = (icon, ar, translit, en) => ({ icon, ar, translit, en });
  const sp = (icon, ar, translit, meaning) => ({ icon, ar, plain: ar, translit, meaning });
  const pair = (left, right) => ({ left, right });
  const tf = (statement, en, answer, why, sign) => (sign ? { sign, statement, en, answer, why } : { statement, en, answer, why });
  const mc = (sign, options, correct) => ({ sign, promptText: "What does this sign mean?", options, correct });
  const TF_HELP = "Read each statement, tap Vero (True) or Falso (False), then check your answers. Tap 🔊 to hear it read aloud.";
  const matching = (id, pairs) => ({ id, type: "matching", title: "Exercise 1 — Match the Words", instructions: "Tap an Italian word, then tap its English meaning.", pairs });
  const tfSet = (id, letter, items) => ({ id, type: "truefalse", title: `Exam Practice ${letter} — Vero o Falso?`, instructions: TF_HELP, items });
  const topic = (o) => Object.assign({ track: "patente", locked: false }, o);

  chapters.push(

    /* ------------------------------ UNIT 1 ------------------------------ */
    topic({
      id: 100, unit: "p-u1", label: "Topic 1", difficulty: 1, requires: null, icon: "🛣️",
      title: "The Road & Basic Definitions", arabicTitle: "La strada e le definizioni",
      desc: "Which side you drive on, the parts of a road, and the types of road.",
      content: [
        { type: "p", text: "Every road question builds on the basics: which side you drive on, the words for the parts of a road, and the types of road. Start here." },
        { type: "h", text: "Drive on the Right" },
        { type: "examples", items: [
          ex("🛣️", "In Italia si guida a destra.", "een ee-TAH-lya see GWEE-da a DEH-stra", "In Italy you drive on the right."),
          ex("🚗", "Il sorpasso si fa a sinistra.", "eel sor-PAS-so see fa a see-NEE-stra", "You overtake on the left.")
        ]},
        { type: "note", html: "Distances are in kilometres and speeds in <strong>km/h</strong> (<em>chilometri all'ora</em>)." },
        { type: "h", text: "Parts of the Road" },
        { type: "examples", items: [
          ex("🛣️", "la carreggiata", "la kar-red-JAH-ta", "the carriageway — the part of the road for moving vehicles"),
          ex("➖", "la corsia", "la kor-SEE-ah", "the lane"),
          ex("🟫", "la banchina", "la ban-KEE-na", "the verge / hard shoulder"),
          ex("🚶", "il marciapiede", "eel mar-cha-pee-EH-deh", "the pavement (sidewalk)"),
          ex("🔀", "l'incrocio", "leen-KRO-cho", "the junction (also: l'intersezione)"),
          ex("🔄", "la rotatoria", "la ro-ta-TOR-ya", "the roundabout")
        ]},
        { type: "note", html: "A carriageway can have <strong>one or more lanes</strong> — it is not always two." },
        { type: "h", text: "Types of Road" },
        { type: "examples", items: [
          ex("🛣️", "l'autostrada", "low-to-STRAH-da", "the motorway"),
          ex("🌄", "la strada extraurbana principale", "la STRAH-da ek-stra-oor-BAH-na prin-chee-PAH-leh", "main road outside towns"),
          ex("🌄", "la strada extraurbana secondaria", "la STRAH-da ek-stra-oor-BAH-na se-kon-DAH-rya", "secondary road outside towns"),
          ex("🏙️", "il centro abitato", "eel CHEN-tro a-bee-TAH-to", "the built-up area, marked by start and end signs")
        ]},
        { type: "note", html: "Each road type has its own speed limit — see Topic 7." }
      ],
      vocabCategories: [
        { name: "The Road", words: [
          vw("🛤️", "la strada", "la STRAH-da", "the road"),
          vw("🛣️", "la carreggiata", "la kar-red-JAH-ta", "the carriageway"),
          vw("➖", "la corsia", "la kor-SEE-ah", "the lane"),
          vw("🟫", "la banchina", "la ban-KEE-na", "the verge / shoulder"),
          vw("🚶", "il marciapiede", "eel mar-cha-pee-EH-deh", "the pavement")
        ]},
        { name: "Junctions & Areas", words: [
          vw("🔀", "l'incrocio", "leen-KRO-cho", "the junction"),
          vw("🔄", "la rotatoria", "la ro-ta-TOR-ya", "the roundabout"),
          vw("🛣️", "l'autostrada", "low-to-STRAH-da", "the motorway"),
          vw("🏙️", "il centro abitato", "eel CHEN-tro a-bee-TAH-to", "the built-up area")
        ]},
        { name: "People & Vehicles", words: [
          vw("🚗", "il veicolo", "eel ve-EE-ko-lo", "the vehicle"),
          vw("🧑‍✈️", "il conducente", "eel kon-doo-CHEN-teh", "the driver"),
          vw("🚶", "il pedone", "eel pe-DOH-neh", "the pedestrian"),
          vw("🚴", "il ciclista", "eel chee-KLEE-sta", "the cyclist")
        ]}
      ],
      exercises: [
        matching("pt100-ex1", [pair("la carreggiata", "the carriageway"), pair("la corsia", "the lane"), pair("il marciapiede", "the pavement"), pair("l'incrocio", "the junction"), pair("il conducente", "the driver")]),
        tfSet("pt100-ex2", "A", [
          tf("I veicoli devono circolare sulla parte destra della carreggiata.", "Vehicles must travel on the right-hand part of the carriageway.", true, "Italy drives on the right, so you keep to the right side of the carriageway."),
          tf("La carreggiata è la parte della strada destinata allo scorrimento dei veicoli.", "The carriageway is the part of the road meant for moving vehicles.", true, "That is the definition of carreggiata; it is made up of one or more lanes."),
          tf("Il marciapiede è la parte della strada destinata ai pedoni.", "The pavement is the part of the road meant for pedestrians.", true, "Marciapiede = pavement, raised or otherwise protected, for pedestrians."),
          tf("La corsia è la parte della strada destinata ai pedoni.", "The lane is the part of the road meant for pedestrians.", false, "A corsia is a lane for one line of vehicles. Pedestrians use the marciapiede."),
          tf("In autostrada è vietata la circolazione dei pedoni.", "Pedestrians are not allowed on the motorway.", true, "Motorways are for motor vehicles only — no pedestrians."),
          tf("Una carreggiata ha sempre una sola corsia.", "A carriageway always has just one lane.", false, "A carriageway has one or more lanes.")
        ]),
        tfSet("pt100-ex3", "B", [
          tf("In una rotatoria i veicoli circolano in senso antiorario.", "In a roundabout vehicles travel counter-clockwise.", true, "Because we drive on the right, roundabouts run counter-clockwise (senso antiorario)."),
          tf("Il conducente è la persona che guida un veicolo.", "The driver (conducente) is the person who drives a vehicle.", true, "Conducente = whoever is in control of the vehicle."),
          tf("Il sorpasso si effettua, di regola, a destra.", "Overtaking is normally done on the right.", false, "In Italy you overtake on the left (a sinistra)."),
          tf("Il centro abitato è delimitato dagli appositi segnali di inizio e di fine.", "A built-up area is marked by its own start and end signs.", true, "The town-entrance and town-exit signs delimit the centro abitato."),
          tf("Le strade extraurbane si trovano all'interno dei centri abitati.", "Extra-urban roads are inside built-up areas.", false, "Extraurbana means outside towns; roads inside towns are urban roads."),
          tf("Il pedone è considerato un conducente.", "A pedestrian counts as a driver.", false, "A pedestrian (pedone) is a road user on foot, not a conducente.")
        ])
      ],
      speakingPhrases: [
        sp("🛣️", "In Italia si guida a destra.", "een ee-TAH-lya see GWEE-da a DEH-stra", "In Italy you drive on the right."),
        sp("🚗", "Il sorpasso si fa a sinistra.", "eel sor-PAS-so see fa a see-NEE-stra", "You overtake on the left.")
      ]
    }),

    topic({
      id: 101, unit: "p-u1", label: "Topic 2", difficulty: 1, requires: 100, icon: "⚠️",
      title: "Warning Signs", arabicTitle: "I segnali di pericolo",
      desc: "Red-bordered triangles that warn you of a hazard ahead — and how to recognise ten common ones.",
      content: [
        { type: "p", text: "Warning signs (<em>segnali di pericolo</em>) tell you a hazard is coming. They are <strong>triangles with the point up, a thick red border and a white background</strong>. When you see one: look carefully, adapt your speed, and be ready to stop." },
        { type: "h", text: "The Ten Signs to Know" },
        { type: "signs", items: [
          { sign: "curva-dx", ar: "Curva a destra", translit: "KOOR-va a DEH-stra", meaning: "Dangerous bend to the right" },
          { sign: "curva-sx", ar: "Curva a sinistra", translit: "KOOR-va a see-NEE-stra", meaning: "Dangerous bend to the left" },
          { sign: "doppia-curva", ar: "Doppia curva", translit: "DOP-pya KOOR-va", meaning: "Double bend (first to the left)" },
          { sign: "pedoni", ar: "Attraversamento pedonale", translit: "at-tra-ver-sa-MEN-to pe-do-NAH-leh", meaning: "Pedestrian crossing ahead" },
          { sign: "bambini", ar: "Bambini", translit: "bam-BEE-nee", meaning: "Children (school or play area)" },
          { sign: "lavori", ar: "Lavori", translit: "la-VOH-ree", meaning: "Road works" },
          { sign: "semaforo-avviso", ar: "Semaforo", translit: "se-MAH-fo-ro", meaning: "Traffic lights ahead" },
          { sign: "sdrucciolevole", ar: "Strada sdrucciolevole", translit: "STRAH-da zdroo-cho-LEH-vo-leh", meaning: "Slippery road" },
          { sign: "strettoia", ar: "Strettoia", translit: "stret-TOY-a", meaning: "Road narrows" },
          { sign: "dosso", ar: "Dosso", translit: "DOS-so", meaning: "Hump in the road" }
        ]},
        { type: "h", text: "What To Do" },
        { type: "p", text: "A warning sign is placed <em>before</em> the hazard, so you have time to react. Ease off the accelerator, check your mirrors, and adapt to what the sign is telling you — a bend, children, a slippery surface or road works." },
        { type: "note", html: "Don't confuse the two similar signs: <strong>Attraversamento pedonale</strong> shows an adult on stripes (a crossing is just ahead), while <strong>Bambini</strong> shows two figures, an adult and a child (children may be about)." }
      ],
      vocabCategories: [
        { name: "Hazards", words: [
          vw("⚠️", "il pericolo", "eel pe-REE-ko-lo", "danger"),
          vw("↪️", "la curva", "la KOOR-va", "the bend"),
          vw("⛰️", "il dosso", "eel DOS-so", "the hump"),
          vw("🚧", "i lavori", "ee la-VOH-ree", "road works"),
          vw("🧒", "i bambini", "ee bam-BEE-nee", "the children")
        ]},
        { name: "Useful Words", words: [
          vw("👆", "attenzione", "at-ten-TSYO-neh", "caution"),
          vw("🐢", "rallentare", "ral-len-TAH-reh", "to slow down"),
          vw("🧈", "sdrucciolevole", "zdroo-cho-LEH-vo-leh", "slippery"),
          vw("🪧", "il segnale", "eel sen-YAH-leh", "the sign")
        ]}
      ],
      exercises: [
        matching("pt101-ex1", [pair("il pericolo", "danger"), pair("la curva", "the bend"), pair("il dosso", "the hump"), pair("i lavori", "road works"), pair("rallentare", "to slow down")]),
        tfSet("pt101-ex2", "A", [
          tf("Il segnale raffigurato preavvisa una curva pericolosa a destra.", "The sign shown warns of a dangerous bend to the right.", true, "The arrow bends to the right: dangerous bend to the right.", "curva-dx"),
          tf("Il segnale raffigurato indica una doppia curva, la prima a sinistra.", "The sign shown indicates a double bend, the first one to the left.", true, "An S-shaped arrow warns of a double bend.", "doppia-curva"),
          tf("Il segnale raffigurato indica un attraversamento pedonale.", "The sign shown indicates a pedestrian crossing.", true, "A walking figure over stripes means a pedestrian crossing ahead.", "pedoni"),
          tf("Il segnale raffigurato indica un attraversamento di animali.", "The sign shown indicates animals crossing.", false, "Two figures, an adult and a child, mean 'bambini' — children.", "bambini"),
          tf("Il segnale raffigurato indica lavori in corso.", "The sign shown indicates road works in progress.", true, "A worker with a shovel is the road-works sign.", "lavori"),
          tf("Il segnale raffigurato vieta di sostare davanti a un semaforo.", "The sign shown forbids parking in front of a traffic light.", false, "It is a warning sign: traffic lights ahead. It forbids nothing.", "semaforo-avviso")
        ]),
        tfSet("pt101-ex3", "B", [
          tf("I segnali di pericolo hanno forma triangolare, con il vertice rivolto verso l'alto.", "Warning signs are triangular with the point upwards.", true, "Warning signs are triangles pointing up, with a red border."),
          tf("I segnali di pericolo hanno sfondo blu e simbolo bianco.", "Warning signs have a blue background and a white symbol.", false, "They have a white background, a red border and a black symbol. Blue signs are for obligations."),
          tf("Il segnale raffigurato indica che la strada può essere scivolosa.", "The sign shown indicates that the road may be slippery.", true, "A car with wavy lines under it: slippery road (strada sdrucciolevole).", "sdrucciolevole"),
          tf("Il segnale raffigurato indica un allargamento della carreggiata.", "The sign shown indicates a widening of the carriageway.", false, "The two lines curve inward: the road narrows (strettoia).", "strettoia"),
          tf("Il segnale raffigurato avverte della presenza di una buca.", "The sign shown warns of a pothole.", false, "The arch shape is a hump in the road (dosso), not a pothole.", "dosso"),
          tf("Davanti a un segnale di pericolo il conducente deve adeguare la velocità alla situazione.", "In front of a warning sign the driver must adapt the speed to the situation.", true, "The point of the sign is to give you time to slow down and react.")
        ])
      ],
      speakingPhrases: [
        sp("⚠️", "Attenzione, curva pericolosa.", "at-ten-TSYO-neh, KOOR-va pe-ree-ko-LOH-za", "Careful, dangerous bend."),
        sp("🚧", "Rallentare, lavori in corso.", "ral-len-TAH-reh, la-VOH-ree een KOR-so", "Slow down, road works in progress.")
      ]
    }),

    topic({
      id: 102, unit: "p-u1", label: "Topic 3", difficulty: 2, requires: 101, icon: "🚫",
      title: "Prohibition Signs", arabicTitle: "I segnali di divieto",
      desc: "Red-bordered circles that forbid something — including the classic fermata-versus-sosta trap.",
      content: [
        { type: "p", text: "Prohibition signs (<em>segnali di divieto</em>) forbid a behaviour. Most are <strong>circles with a red border and a white background</strong>. You must obey them from the sign onward." },
        { type: "h", text: "Six Signs to Know" },
        { type: "signs", items: [
          { sign: "divieto-accesso", ar: "Divieto di accesso", translit: "dee-vee-EH-to dee ach-CHES-so", meaning: "No entry (all vehicles)" },
          { sign: "divieto-transito", ar: "Divieto di transito", translit: "dee-vee-EH-to dee TRAN-zee-to", meaning: "No vehicles in either direction" },
          { sign: "limite-50", ar: "Limite di velocità", translit: "LEE-mee-teh dee ve-lo-chee-TAH", meaning: "Maximum speed 50 km/h" },
          { sign: "divieto-sorpasso", ar: "Divieto di sorpasso", translit: "dee-vee-EH-to dee sor-PAS-so", meaning: "No overtaking" },
          { sign: "divieto-sosta", ar: "Divieto di sosta", translit: "dee-vee-EH-to dee SOS-ta", meaning: "No parking (a quick stop is allowed)" },
          { sign: "divieto-fermata", ar: "Divieto di fermata", translit: "dee-vee-EH-to dee fer-MAH-ta", meaning: "No stopping (and so no parking)" }
        ]},
        { type: "h", text: "Fermata vs. Sosta" },
        { type: "p", text: "This pair appears again and again in the exam. <strong>Fermata</strong> is a short stop — passengers getting in or out, or loading — with the driver on board and ready to move off. <strong>Sosta</strong> is leaving the vehicle stationary for longer, so the driver may walk away." },
        { type: "examples", items: [
          ex("🅿️", "Divieto di sosta", "dee-vee-EH-to dee SOS-ta", "You may still make a quick stop (fermata)."),
          ex("🛑", "Divieto di fermata", "dee-vee-EH-to dee fer-MAH-ta", "Neither stopping nor parking is allowed.")
        ]},
        { type: "note", html: "Remember the pictures: <strong>one</strong> red bar = <em>sosta</em> (no parking); <strong>two crossed</strong> bars = <em>fermata</em> (no stopping at all)." }
      ],
      vocabCategories: [
        { name: "Prohibitions", words: [
          vw("🚫", "il divieto", "eel dee-vee-EH-to", "the prohibition"),
          vw("⛔", "l'accesso", "lach-CHES-so", "entry / access"),
          vw("🚗", "il transito", "eel TRAN-zee-to", "passage / traffic"),
          vw("↔️", "il sorpasso", "eel sor-PAS-so", "overtaking"),
          vw("🅿️", "la sosta", "la SOS-ta", "parking (longer stop)"),
          vw("⏸️", "la fermata", "la fer-MAH-ta", "short stop")
        ]},
        { name: "Useful Words", words: [
          vw("❌", "vietato", "vee-eh-TAH-to", "forbidden"),
          vw("✅", "consentito", "kon-sen-TEE-to", "allowed"),
          vw("📏", "il limite", "eel LEE-mee-teh", "the limit"),
          vw("⚡", "la velocità", "la ve-lo-chee-TAH", "speed")
        ]}
      ],
      exercises: [
        matching("pt102-ex1", [pair("il divieto", "the prohibition"), pair("il sorpasso", "overtaking"), pair("la sosta", "parking (longer stop)"), pair("la fermata", "short stop"), pair("vietato", "forbidden")]),
        tfSet("pt102-ex2", "A", [
          tf("Il segnale raffigurato vieta l'accesso a tutti i veicoli.", "The sign shown forbids entry to all vehicles.", true, "A red disc with a white bar is 'no entry' (divieto di accesso).", "divieto-accesso"),
          tf("Il segnale raffigurato vieta il transito dei veicoli in entrambi i sensi.", "The sign shown forbids vehicles in both directions.", true, "An empty white disc with a red border: no vehicles either way.", "divieto-transito"),
          tf("Il segnale raffigurato indica la velocità minima di 50 km/h.", "The sign shown indicates a minimum speed of 50 km/h.", false, "A number inside a red-bordered circle is a MAXIMUM speed. Minimum speed uses a blue sign.", "limite-50"),
          tf("Il segnale raffigurato vieta il sorpasso.", "The sign shown forbids overtaking.", true, "Two cars side by side — one red, one black — is the no-overtaking sign.", "divieto-sorpasso"),
          tf("Il segnale raffigurato vieta la sosta.", "The sign shown forbids parking.", true, "A single red bar on the blue disc means no parking (sosta).", "divieto-sosta"),
          tf("Il segnale raffigurato vieta la sosta, ma consente la fermata.", "The sign shown forbids parking but allows a short stop.", false, "Two crossed bars mean no stopping (fermata), which also rules out parking.", "divieto-fermata")
        ]),
        tfSet("pt102-ex3", "B", [
          tf("I segnali di divieto hanno in generale forma circolare e bordo rosso.", "Prohibition signs are generally circular with a red border.", true, "Red-bordered circles are the usual shape for prohibitions."),
          tf("Il divieto di sosta vieta anche la fermata.", "A no-parking sign also forbids a short stop.", false, "No parking still allows a short stop; only no stopping forbids both."),
          tf("La fermata è la sospensione temporanea della marcia, con il conducente a bordo e pronto a ripartire.", "A stop is a temporary halt, with the driver on board and ready to move off.", true, "That is the definition of fermata."),
          tf("La sosta è la sospensione della marcia protratta nel tempo, con possibilità per il conducente di allontanarsi.", "Parking is a stop for longer, where the driver may walk away.", true, "That is the definition of sosta."),
          tf("Il segnale di divieto di accesso può essere ignorato se si percorre solo un breve tratto.", "A no-entry sign may be ignored if you only drive a short distance.", false, "A prohibition applies however short the distance."),
          tf("Il divieto di transito vieta il passaggio anche ai pedoni.", "A 'no vehicles' sign also forbids pedestrians.", false, "It applies to vehicles. Pedestrians have their own signs.")
        ])
      ],
      speakingPhrases: [
        sp("🅿️", "Divieto di sosta.", "dee-vee-EH-to dee SOS-ta", "No parking."),
        sp("↔️", "È vietato il sorpasso.", "eh vee-eh-TAH-to eel sor-PAS-so", "Overtaking is forbidden.")
      ]
    }),

    topic({
      id: 103, unit: "p-u1", label: "Topic 4", difficulty: 2, requires: 102, icon: "🔵",
      title: "Mandatory Signs", arabicTitle: "I segnali di obbligo",
      desc: "Blue circles that tell you what you must do: directions, roundabouts, cycle paths and minimum speed.",
      content: [
        { type: "p", text: "Mandatory signs (<em>segnali di obbligo</em>) tell you what you <strong>must</strong> do. They are <strong>blue circles with white symbols</strong>." },
        { type: "h", text: "Five Signs to Know" },
        { type: "signs", items: [
          { sign: "obbligo-dritto", ar: "Direzione obbligatoria dritto", translit: "dee-re-TSYO-neh ob-blee-ga-TOR-ya DREET-to", meaning: "Straight ahead only" },
          { sign: "obbligo-destra", ar: "Direzione obbligatoria a destra", translit: "dee-re-TSYO-neh ob-blee-ga-TOR-ya a DEH-stra", meaning: "Turn right only" },
          { sign: "rotatoria", ar: "Rotatoria", translit: "ro-ta-TOR-ya", meaning: "Roundabout — circulate counter-clockwise" },
          { sign: "pista-ciclabile", ar: "Pista ciclabile", translit: "PEE-sta chee-KLAH-bee-leh", meaning: "Cycle path" },
          { sign: "velocita-minima-30", ar: "Velocità minima", translit: "ve-lo-chee-TAH MEE-nee-ma", meaning: "Minimum speed 30 km/h" }
        ]},
        { type: "h", text: "Reading Them Correctly" },
        { type: "p", text: "A <strong>direction sign</strong> allows only the direction shown — an arrow to the right does not also let you carry straight on. The <strong>minimum speed</strong> sign forbids driving slower than the number shown, unless traffic or conditions make it necessary." },
        { type: "note", html: "Colour code so far: <strong>red border</strong> = danger or prohibition, <strong>blue circle</strong> = obligation. <strong>STOP</strong> and give-way signs belong to a different family — priority signs, next topic." }
      ],
      vocabCategories: [
        { name: "Directions", words: [
          vw("➡️", "a destra", "a DEH-stra", "to the right"),
          vw("⬅️", "a sinistra", "a see-NEE-stra", "to the left"),
          vw("⬆️", "dritto", "DREET-to", "straight on"),
          vw("🔄", "senso antiorario", "SEN-so an-tee-o-RAH-ryo", "counter-clockwise")
        ]},
        { name: "Obligation", words: [
          vw("🔵", "l'obbligo", "LOB-blee-go", "the obligation"),
          vw("🧭", "la direzione", "la dee-re-TSYO-neh", "the direction"),
          vw("🚴", "ciclabile", "chee-KLAH-bee-leh", "for bicycles"),
          vw("🐢", "minima", "MEE-nee-ma", "minimum")
        ]}
      ],
      exercises: [
        matching("pt103-ex1", [pair("a destra", "to the right"), pair("a sinistra", "to the left"), pair("dritto", "straight on"), pair("l'obbligo", "the obligation"), pair("la direzione", "the direction")]),
        tfSet("pt103-ex2", "A", [
          tf("I segnali di obbligo hanno forma circolare e sfondo blu.", "Mandatory signs are circular with a blue background.", true, "Blue circles are the obligation signs."),
          tf("Il segnale raffigurato obbliga a proseguire diritto.", "The sign shown obliges you to continue straight ahead.", true, "A white arrow pointing up on blue: straight ahead only.", "obbligo-dritto"),
          tf("Il segnale raffigurato obbliga a svoltare a destra.", "The sign shown obliges you to turn right.", true, "A right-pointing arrow on blue: turn right only.", "obbligo-destra"),
          tf("Il segnale raffigurato indica l'obbligo di percorrere la rotatoria in senso antiorario.", "The sign shown means you must go round the roundabout counter-clockwise.", true, "The arrows circle counter-clockwise, as vehicles do in Italy.", "rotatoria"),
          tf("Il segnale raffigurato indica un percorso riservato ai pedoni.", "The sign shown indicates a path reserved for pedestrians.", false, "A bicycle means a cycle path (pista ciclabile).", "pista-ciclabile"),
          tf("Un segnale di obbligo può essere ignorato se non ci sono altri veicoli.", "A mandatory sign may be ignored if there are no other vehicles.", false, "Signs must be obeyed whether or not there is traffic.")
        ]),
        tfSet("pt103-ex3", "B", [
          tf("Il segnale raffigurato indica il limite massimo di velocità di 30 km/h.", "The sign shown indicates a maximum speed of 30 km/h.", false, "A white number on a blue disc is a MINIMUM speed.", "velocita-minima-30"),
          tf("Il segnale di direzione obbligatoria a sinistra consente anche di proseguire diritto.", "A 'turn left only' sign also lets you carry straight on.", false, "Only the direction shown is allowed."),
          tf("Il segnale di STOP è un segnale di obbligo.", "The STOP sign is a mandatory sign.", false, "STOP belongs to the priority signs (segnali di precedenza)."),
          tf("I segnali di obbligo indicano un comportamento che i conducenti devono tenere.", "Mandatory signs show behaviour that drivers must follow.", true, "That is exactly what 'obbligo' means."),
          tf("In una rotatoria si circola in senso orario.", "In a roundabout you travel clockwise.", false, "Counter-clockwise (antiorario) in Italy."),
          tf("Il segnale di velocità minima vieta di andare più piano di quanto indicato, salvo che le condizioni del traffico lo impongano.", "A minimum-speed sign forbids going slower than shown, unless traffic conditions require it.", true, "You may slow down only when traffic or conditions make it necessary.")
        ])
      ],
      speakingPhrases: [
        sp("➡️", "Direzione obbligatoria a destra.", "dee-re-TSYO-neh ob-blee-ga-TOR-ya a DEH-stra", "Turn right only."),
        sp("🔄", "Nella rotatoria si gira in senso antiorario.", "NEL-la ro-ta-TOR-ya see JEE-ra een SEN-so an-tee-o-RAH-ryo", "In a roundabout you go counter-clockwise.")
      ]
    }),

    {
      track: "patente", id: 110, unit: "p-u1", label: "Review 1", type: "checkpoint", difficulty: 2, requires: 103, icon: "🔁",
      title: "Review: Road Signs", arabicTitle: "Ripasso: i segnali", locked: false,
      desc: "Name the signs from Topics 2–4 — warning, prohibition and mandatory.",
      content: [
        { type: "p", text: "This review completes Unit 1. Look at each sign, work out which family it belongs to from its shape and colour, then choose its meaning." }
      ],
      vocabCategories: [],
      exercises: [
        { id: "pt110-ex1", type: "mcq", title: "Name That Sign", instructions: "Choose the correct meaning for each sign.", items: [
          mc("curva-dx", ["Curva pericolosa a destra — dangerous bend to the right", "Obbligo di svolta a destra — turn right only", "Divieto di svolta a destra — no right turn"], 0),
          mc("divieto-sosta", ["Divieto di fermata — no stopping", "Divieto di sosta — no parking", "Parcheggio — parking area"], 1),
          mc("pedoni", ["Attraversamento pedonale — pedestrian crossing", "Bambini — children", "Lavori — road works"], 0),
          mc("rotatoria", ["Rotatoria — roundabout", "Direzione obbligatoria dritto — straight only", "Pista ciclabile — cycle path"], 0),
          mc("divieto-accesso", ["Divieto di transito — no vehicles", "Divieto di accesso — no entry", "Limite di velocità — speed limit"], 1),
          mc("limite-50", ["Velocità minima 50 — minimum speed 50", "Limite massimo di 50 km/h — maximum speed 50", "Fine limite — end of limit"], 1),
          mc("strettoia", ["Strettoia — road narrows", "Dosso — hump", "Strada sdrucciolevole — slippery road"], 0),
          mc("pista-ciclabile", ["Percorso pedonale — pedestrian path", "Pista ciclabile — cycle path", "Divieto ai ciclisti — no cyclists"], 1)
        ]}
      ],
      speakingPhrases: []
    },

    /* ------------------------------ UNIT 2 ------------------------------ */
    topic({
      id: 104, unit: "p-u2", label: "Topic 5", difficulty: 3, requires: 110, icon: "🛑",
      title: "Right of Way", arabicTitle: "La precedenza",
      desc: "STOP, give-way and priority signs, plus the order of authority and the rules for unmarked junctions.",
      content: [
        { type: "p", text: "<em>Precedenza</em> decides who goes first. Signs, traffic lights and police signals all matter — and where there are none, general rules apply." },
        { type: "h", text: "The Priority Signs" },
        { type: "signs", items: [
          { sign: "stop", ar: "Stop", translit: "STOP", meaning: "Stop completely and give way" },
          { sign: "dare-precedenza", ar: "Dare precedenza", translit: "DAH-reh pre-che-DEN-tsa", meaning: "Give way" },
          { sign: "diritto-precedenza", ar: "Diritto di precedenza", translit: "dee-REET-to dee pre-che-DEN-tsa", meaning: "Priority road" },
          { sign: "fine-diritto-precedenza", ar: "Fine del diritto di precedenza", translit: "FEE-neh del dee-REET-to dee pre-che-DEN-tsa", meaning: "End of priority road" }
        ]},
        { type: "note", html: "<strong>STOP</strong> always means a full stop — at the stop line if there is one — even if the road looks empty. <strong>Dare precedenza</strong> is an inverted triangle (point down): slow down, and stop if you must, to let traffic on the other road pass." },
        { type: "h", text: "Who Has Authority?" },
        { type: "p", text: "When instructions seem to conflict, follow the one highest in this list:" },
        { type: "charlist", items: [
          "<strong>L'agente del traffico</strong> — a police officer's signals",
          "<strong>Il semaforo</strong> — traffic lights",
          "<strong>I segnali stradali</strong> — road signs",
          "<strong>Le regole generali</strong> — general rules, such as priority to the right"
        ]},
        { type: "h", text: "General Rules" },
        { type: "examples", items: [
          ex("➡️", "Incrocio senza segnali: precedenza a destra.", "een-KRO-cho SEN-tsa sen-YAH-lee: pre-che-DEN-tsa a DEH-stra", "At an unmarked junction, give way to traffic from the right."),
          ex("🔄", "Nella rotatoria ha precedenza chi è già dentro.", "NEL-la ro-ta-TOR-ya a pre-che-DEN-tsa kee eh jah DEN-tro", "In a roundabout, traffic already inside has priority."),
          ex("🚑", "Ambulanza con sirena: fermarsi e dare la precedenza.", "am-boo-LAN-tsa kon see-REH-na: fer-MAR-see eh DAH-reh la pre-che-DEN-tsa", "Ambulance with siren: stop and let it through."),
          ex("🚶", "Pedoni sulle strisce: dare la precedenza.", "pe-DOH-nee SOOL-leh STREE-sheh: DAH-reh la pre-che-DEN-tsa", "Pedestrians on the crossing: give way.")
        ]}
      ],
      vocabCategories: [
        { name: "Priority", words: [
          vw("🔁", "la precedenza", "la pre-che-DEN-tsa", "right of way"),
          vw("🤝", "dare precedenza", "DAH-reh pre-che-DEN-tsa", "to give way"),
          vw("🛑", "fermarsi", "fer-MAR-see", "to stop"),
          vw("🧑‍✈️", "l'agente", "la-JEN-teh", "the officer")
        ]},
        { name: "Emergency Vehicles", words: [
          vw("🚑", "l'ambulanza", "lam-boo-LAN-tsa", "the ambulance"),
          vw("📢", "la sirena", "la see-REH-na", "the siren"),
          vw("🔵", "il lampeggiante", "eel lam-ped-JAN-teh", "the flashing light")
        ]}
      ],
      exercises: [
        matching("pt104-ex1", [pair("la precedenza", "right of way"), pair("dare precedenza", "to give way"), pair("fermarsi", "to stop"), pair("l'ambulanza", "the ambulance"), pair("la sirena", "the siren")]),
        tfSet("pt104-ex2", "A", [
          tf("Il segnale raffigurato obbliga a fermarsi e a dare la precedenza.", "The sign shown obliges you to stop and give way.", true, "A red octagon is the STOP sign: always a full stop, then give way.", "stop"),
          tf("Il segnale raffigurato obbliga a dare la precedenza ai veicoli che circolano sull'altra strada.", "The sign shown obliges you to give way to vehicles on the other road.", true, "The inverted triangle means give way (dare precedenza).", "dare-precedenza"),
          tf("Il segnale raffigurato indica che si ha diritto di precedenza nelle intersezioni.", "The sign shown means you have priority at the junctions ahead.", true, "A yellow diamond marks a priority road.", "diritto-precedenza"),
          tf("Il segnale raffigurato indica l'inizio del diritto di precedenza.", "The sign shown marks the start of the priority road.", false, "The diagonal bars mean the END of the priority road.", "fine-diritto-precedenza"),
          tf("In un incrocio senza segnali ha la precedenza chi proviene da sinistra.", "At an unmarked junction, the driver coming from the left has priority.", false, "Priority goes to the driver coming from the RIGHT."),
          tf("Al segnale di STOP basta rallentare se la strada è libera.", "At a STOP sign it is enough to slow down if the road is clear.", false, "STOP always requires a complete stop.")
        ]),
        tfSet("pt104-ex3", "B", [
          tf("Le indicazioni dell'agente del traffico prevalgono su quelle del semaforo e dei segnali.", "An officer's signals take priority over lights and signs.", true, "Order of authority: officer, then lights, then signs, then general rules."),
          tf("Il segnale di dare precedenza ha la forma di un triangolo con il vertice rivolto verso l'alto.", "The give-way sign is a triangle with its point upwards.", false, "It is an inverted triangle: the point is DOWN."),
          tf("In una rotatoria hanno la precedenza i veicoli che stanno per entrare.", "In a roundabout, vehicles about to enter have priority.", false, "Vehicles already circulating have priority unless signs say otherwise."),
          tf("Quando si avvicina un'ambulanza con sirena e lampeggianti blu bisogna dare la precedenza.", "When an ambulance with siren and blue lights approaches, you must give way.", true, "Emergency vehicles on call have priority: make way and stop if needed."),
          tf("Se è presente la linea di arresto, ci si ferma in corrispondenza di essa.", "If there is a stop line, you stop at it.", true, "Stop at the line, not past it."),
          tf("I conducenti non sono tenuti a dare la precedenza ai pedoni sulle strisce pedonali.", "Drivers need not give way to pedestrians on a crossing.", false, "Drivers must give way to pedestrians crossing on the stripes.")
        ])
      ],
      speakingPhrases: [
        sp("🛑", "Al segnale di stop bisogna fermarsi.", "al sen-YAH-leh dee STOP bee-ZON-ya fer-MAR-see", "At a stop sign you must stop."),
        sp("🤝", "Dare la precedenza a destra.", "DAH-reh la pre-che-DEN-tsa a DEH-stra", "Give way to the right.")
      ]
    }),

    topic({
      id: 105, unit: "p-u2", label: "Topic 6", difficulty: 3, requires: 104, icon: "🚦",
      title: "Road Markings & Traffic Lights", arabicTitle: "Segnaletica orizzontale e semafori",
      desc: "What the lines on the road mean, and how to react to red, amber and green.",
      content: [
        { type: "p", text: "The paint on the road (<em>segnaletica orizzontale</em>) is as binding as a sign. White lines are the normal marking; yellow lines mark temporary arrangements or reserved areas, and blue lines usually mark paid parking." },
        { type: "h", text: "Lines on the Road" },
        { type: "signs", items: [
          { sign: "linea-continua", ar: "Linea continua", translit: "LEE-nya kon-TEE-noo-a", meaning: "Continuous line — do not cross" },
          { sign: "linea-tratteggiata", ar: "Linea discontinua", translit: "LEE-nya dee-skon-TEE-noo-a", meaning: "Broken line — may cross if safe" },
          { sign: "linea-mista", ar: "Linea continua e discontinua", translit: "LEE-nya kon-TEE-noo-a eh dee-skon-TEE-noo-a", meaning: "Continuous + broken — cross only from the broken side" },
          { sign: "linea-doppia", ar: "Doppia linea continua", translit: "DOP-pya LEE-nya kon-TEE-noo-a", meaning: "Double continuous line — do not cross" },
          { sign: "strisce-pedonali", ar: "Strisce pedonali", translit: "STREE-sheh pe-do-NAH-lee", meaning: "Pedestrian crossing (zebra)" },
          { sign: "linea-arresto", ar: "Linea di arresto", translit: "LEE-nya dee ar-RES-to", meaning: "Stop line" }
        ]},
        { type: "note", html: "A <strong>continuous line</strong> may not be crossed, and you may not overtake across it. With a <strong>continuous + broken pair</strong>, the driver whose side has the broken line may cross it; the other may not." },
        { type: "h", text: "Traffic Lights" },
        { type: "signs", items: [
          { sign: "semaforo-rosso", ar: "Luce rossa", translit: "LOO-cheh ROS-sa", meaning: "Red — stop before the line" },
          { sign: "semaforo-giallo", ar: "Luce gialla", translit: "LOO-cheh JAL-la", meaning: "Amber — stop, unless too close to stop safely" },
          { sign: "semaforo-verde", ar: "Luce verde", translit: "LOO-cheh VER-deh", meaning: "Green — go, with care" }
        ]},
        { type: "examples", items: [
          ex("🟡", "Giallo lampeggiante: attenzione.", "JAL-lo lam-ped-JAN-teh: at-ten-TSYO-neh", "Flashing amber: proceed with caution and follow the normal priority rules."),
          ex("⚫", "Semaforo spento: valgono le regole generali.", "se-MAH-fo-ro SPEN-to: VAL-gono leh REH-go-leh jeh-neh-RAH-lee", "Light switched off: the general priority rules apply.")
        ]},
        { type: "note", html: "On <strong>green</strong>, if you are turning, you must still give way to pedestrians crossing the road you turn into." }
      ],
      vocabCategories: [
        { name: "Markings", words: [
          vw("➖", "la striscia", "la STREE-sha", "the stripe / line"),
          vw("📏", "continua", "kon-TEE-noo-a", "continuous"),
          vw("➗", "discontinua", "dee-skon-TEE-noo-a", "broken"),
          vw("🚶", "le strisce pedonali", "leh STREE-sheh pe-do-NAH-lee", "the zebra crossing"),
          vw("🛑", "la linea di arresto", "la LEE-nya dee ar-RES-to", "the stop line")
        ]},
        { name: "Traffic Lights", words: [
          vw("🚦", "il semaforo", "eel se-MAH-fo-ro", "the traffic light"),
          vw("🔴", "rosso", "ROS-so", "red"),
          vw("🟡", "giallo", "JAL-lo", "amber / yellow"),
          vw("🟢", "verde", "VER-deh", "green"),
          vw("✨", "lampeggiante", "lam-ped-JAN-teh", "flashing")
        ]}
      ],
      exercises: [
        matching("pt105-ex1", [pair("la striscia", "the stripe / line"), pair("continua", "continuous"), pair("il semaforo", "the traffic light"), pair("rosso", "red"), pair("lampeggiante", "flashing")]),
        tfSet("pt105-ex2", "A", [
          tf("La striscia continua al centro della carreggiata può essere oltrepassata per sorpassare, se la strada è libera.", "A continuous centre line may be crossed to overtake if the road is clear.", false, "A continuous line may not be crossed or straddled, even to overtake.", "linea-continua"),
          tf("La striscia discontinua consente di oltrepassarla per il sorpasso, se le condizioni lo permettono.", "A broken line may be crossed to overtake if conditions allow.", true, "Broken lines may be crossed when it is safe to do so.", "linea-tratteggiata"),
          tf("Il segnale orizzontale raffigurato indica un attraversamento pedonale.", "The marking shown indicates a pedestrian crossing.", true, "Wide parallel stripes across the road are a zebra crossing.", "strisce-pedonali"),
          tf("Con la luce rossa i veicoli devono fermarsi prima della linea di arresto.", "On a red light vehicles must stop before the stop line.", true, "Red means stop, behind the line.", "semaforo-rosso"),
          tf("Con la luce gialla i veicoli possono sempre proseguire.", "On an amber light vehicles may always carry on.", false, "Amber means stop, unless you are so close that you cannot stop safely.", "semaforo-giallo"),
          tf("La linea di arresto indica il punto in cui il veicolo deve fermarsi quando è richiesto.", "The stop line shows where a vehicle must stop when required.", true, "Stop at the line for a STOP sign or red light.", "linea-arresto")
        ]),
        tfSet("pt105-ex3", "B", [
          tf("Con la luce verde, chi svolta deve comunque dare la precedenza ai pedoni che attraversano.", "On green, a driver who turns must still give way to pedestrians crossing.", true, "Green does not remove the pedestrians' right of way when you turn.", "semaforo-verde"),
          tf("La luce gialla lampeggiante obbliga a fermarsi.", "A flashing amber light obliges you to stop.", false, "It means proceed with caution; normal priority rules apply."),
          tf("Con una linea continua e una discontinua affiancate, può oltrepassarle chi ha la linea discontinua dal proprio lato.", "With a continuous and a broken line side by side, the driver on the broken-line side may cross.", true, "Only the driver next to the broken line may cross.", "linea-mista"),
          tf("La doppia linea continua al centro consente il sorpasso quando la strada è libera.", "A double continuous line allows overtaking when the road is clear.", false, "A double continuous line may not be crossed.", "linea-doppia"),
          tf("Le strisce blu indicano parcheggi riservati ai soli disabili.", "Blue stripes mark parking reserved only for disabled drivers.", false, "Blue stripes generally mark paid parking."),
          tf("Se il semaforo è spento si applicano le norme generali sulla precedenza, salvo diversa segnalazione.", "If the traffic light is off, the general priority rules apply unless otherwise signed.", true, "A dead signal means signs or general rules take over.")
        ])
      ],
      speakingPhrases: [
        sp("🔴", "Il semaforo è rosso, bisogna fermarsi.", "eel se-MAH-fo-ro eh ROS-so, bee-ZON-ya fer-MAR-see", "The light is red, you must stop."),
        sp("🚶", "Si dà la precedenza ai pedoni sulle strisce.", "see da la pre-che-DEN-tsa ai pe-DOH-nee SOOL-leh STREE-sheh", "You give way to pedestrians on the crossing.")
      ]
    }),

    {
      track: "patente", id: 111, unit: "p-u2", label: "Review 2", type: "checkpoint", difficulty: 3, requires: 105, icon: "🔁",
      title: "Review: Priority, Markings & Lights", arabicTitle: "Ripasso: precedenza e segnaletica", locked: false,
      desc: "Recognise the priority signs, road markings and traffic lights from Unit 2.",
      content: [
        { type: "p", text: "This review completes Unit 2. Name each sign, marking or light, then choose its meaning." }
      ],
      vocabCategories: [],
      exercises: [
        { id: "pt111-ex1", type: "mcq", title: "Name That Sign", instructions: "Choose the correct meaning for each picture.", items: [
          mc("stop", ["Stop — full stop, then give way", "Dare precedenza — give way", "Divieto di accesso — no entry"], 0),
          mc("dare-precedenza", ["Dare precedenza — give way", "Stop — full stop", "Diritto di precedenza — priority road"], 0),
          mc("diritto-precedenza", ["Divieto di sosta — no parking", "Diritto di precedenza — priority road", "Dare precedenza — give way"], 1),
          mc("fine-diritto-precedenza", ["Inizio del diritto di precedenza — start of priority road", "Fine del diritto di precedenza — end of priority road", "Lavori — road works"], 1),
          mc("linea-continua", ["Linea continua — do not cross", "Linea discontinua — may cross if safe", "Strisce pedonali — pedestrian crossing"], 0),
          mc("semaforo-giallo", ["Rosso — stop", "Giallo — stop unless too close to stop safely", "Verde — go"], 1)
        ]}
      ],
      speakingPhrases: []
    },

    /* ------------------------------ UNIT 3 ------------------------------ */
    topic({
      id: 106, unit: "p-u3", label: "Topic 7", difficulty: 3, requires: 111, icon: "⏱️",
      title: "Speed & Safe Distance", arabicTitle: "Velocità e distanza di sicurezza",
      desc: "Speed limits for cars on each road type, braking distances, and how conditions change the numbers.",
      content: [
        { type: "p", text: "Speed limits depend on the type of road, the weather, and how long you have held your licence. Signs can lower the limits shown here but never raise them above the legal maximum." },
        { type: "h", text: "Speed Limits for Cars" },
        { type: "examples", items: [
          ex("🏙️", "Centro abitato — 50 km/h", "CHEN-tro a-bee-TAH-to", "Built-up area: 50 km/h"),
          ex("🌄", "Extraurbana secondaria — 90 km/h", "ek-stra-oor-BAH-na se-kon-DAH-rya", "Secondary road outside towns: 90 km/h"),
          ex("🌄", "Extraurbana principale — 110 km/h", "ek-stra-oor-BAH-na prin-chee-PAH-leh", "Main road outside towns: 110 km/h"),
          ex("🛣️", "Autostrada — 130 km/h", "ow-to-STRAH-da", "Motorway: 130 km/h")
        ]},
        { type: "note", html: "<strong>Rain or wet roads:</strong> 110 km/h on motorways and 90 km/h on main extra-urban roads. <strong>New drivers</strong> (first three years): 100 km/h on motorways and 90 km/h on main extra-urban roads." },
        { type: "h", text: "Stopping Distance" },
        { type: "examples", items: [
          ex("⏱️", "Tempo di reazione", "TEM-po dee reh-a-TSYO-neh", "Reaction time: about a second before you start to brake — the car keeps moving."),
          ex("🛑", "Spazio di frenata", "SPAH-tsyo dee fre-NAH-ta", "Braking distance: it grows with the SQUARE of the speed — double the speed, about four times the distance."),
          ex("📏", "Distanza di sicurezza", "dee-STAN-tsa dee see-koo-RET-tsa", "Safe distance: enough gap to stop without hitting the vehicle in front.")
        ]},
        { type: "p", text: "<strong>Stopping distance = reaction distance + braking distance.</strong> Wet roads, worn tyres, fog, ice, tiredness and heavy loads all make it longer." },
        { type: "h", text: "Adapt to the Conditions" },
        { type: "p", text: "You must always be able to stop within the distance you can see to be clear. In fog, rain, snow, at night, or near pedestrians, slow down and increase your following distance — even if the sign allows more." }
      ],
      vocabCategories: [
        { name: "Speed", words: [
          vw("⚡", "la velocità", "la ve-lo-chee-TAH", "speed"),
          vw("📏", "il limite", "eel LEE-mee-teh", "the limit"),
          vw("🚀", "accelerare", "ach-che-le-RAH-reh", "to accelerate"),
          vw("🐢", "rallentare", "ral-len-TAH-reh", "to slow down"),
          vw("🛑", "frenare", "fre-NAH-reh", "to brake")
        ]},
        { name: "Distance", words: [
          vw("📏", "la distanza di sicurezza", "la dee-STAN-tsa dee see-koo-RET-tsa", "safe distance"),
          vw("🛑", "lo spazio di frenata", "lo SPAH-tsyo dee fre-NAH-ta", "braking distance"),
          vw("⏱️", "il tempo di reazione", "eel TEM-po dee reh-a-TSYO-neh", "reaction time")
        ]},
        { name: "Weather", words: [
          vw("🌫️", "la nebbia", "la NEB-bya", "fog"),
          vw("🌧️", "la pioggia", "la PYOJ-ja", "rain"),
          vw("🧊", "il ghiaccio", "eel GYAT-cho", "ice")
        ]}
      ],
      exercises: [
        matching("pt106-ex1", [pair("la velocità", "speed"), pair("frenare", "to brake"), pair("la nebbia", "fog"), pair("la pioggia", "rain"), pair("il ghiaccio", "ice")]),
        tfSet("pt106-ex2", "A", [
          tf("Nei centri abitati il limite massimo di velocità è di 50 km/h, salvo diversa segnalazione.", "In built-up areas the maximum speed is 50 km/h unless signs say otherwise.", true, "50 km/h is the general limit in towns."),
          tf("Sulle strade extraurbane secondarie il limite massimo per le autovetture è di 90 km/h.", "On secondary extra-urban roads the maximum speed for cars is 90 km/h.", true, "90 km/h on secondary roads outside towns."),
          tf("Sulle strade extraurbane principali il limite massimo per le autovetture è di 130 km/h.", "On main extra-urban roads the maximum speed for cars is 130 km/h.", false, "110 km/h on main extra-urban roads. 130 km/h is the motorway limit."),
          tf("In autostrada il limite massimo per le autovetture è di 130 km/h, salvo diversa segnalazione.", "On motorways the maximum speed for cars is 130 km/h unless signs say otherwise.", true, "130 km/h on motorways in normal conditions."),
          tf("In caso di pioggia il limite massimo in autostrada resta sempre 130 km/h.", "In rain the motorway limit stays at 130 km/h.", false, "In rain the motorway limit drops to 110 km/h."),
          tf("Per i neopatentati, nei primi tre anni, il limite in autostrada è di 100 km/h.", "For new drivers, in the first three years, the motorway limit is 100 km/h.", true, "New drivers: 100 km/h on motorways, 90 km/h on main extra-urban roads.")
        ]),
        tfSet("pt106-ex3", "B", [
          tf("Se si raddoppia la velocità, lo spazio di frenata raddoppia.", "If you double your speed, the braking distance doubles.", false, "It grows with the square of the speed: about four times longer."),
          tf("La distanza di sicurezza deve permettere di fermarsi senza urtare il veicolo che precede.", "The safe distance must let you stop without hitting the vehicle in front.", true, "That is the purpose of the safe distance."),
          tf("Con la nebbia occorre ridurre la velocità e aumentare la distanza di sicurezza.", "In fog you must reduce speed and increase the safe distance.", true, "Reduced visibility means more caution, slower and with a bigger gap."),
          tf("Lo spazio di arresto è la somma dello spazio percorso nel tempo di reazione e dello spazio di frenata.", "Stopping distance is the reaction distance plus the braking distance.", true, "Stopping distance = reaction + braking."),
          tf("Su strada bagnata la distanza di sicurezza può essere ridotta.", "On a wet road the safe distance may be reduced.", false, "A wet road lengthens braking, so the gap must be larger."),
          tf("Il conducente può mantenere sempre la velocità massima consentita, qualunque sia la visibilità.", "The driver may always keep to the maximum permitted speed whatever the visibility.", false, "You must adapt speed to conditions; the limit is a ceiling, not a target.")
        ])
      ],
      speakingPhrases: [
        sp("🏙️", "In città il limite è cinquanta chilometri all'ora.", "een cheet-TAH eel LEE-mee-teh eh cheen-KWAN-ta kee-LO-me-tree al-LOH-ra", "In town the limit is fifty kilometres an hour."),
        sp("📏", "Bisogna mantenere la distanza di sicurezza.", "bee-ZON-ya man-te-NEH-reh la dee-STAN-tsa dee see-koo-RET-tsa", "You must keep a safe distance.")
      ]
    }),

    topic({
      id: 107, unit: "p-u3", label: "Topic 8", difficulty: 4, requires: 106, icon: "🅿️",
      title: "Overtaking, Stopping & Parking", arabicTitle: "Sorpasso, fermata e sosta",
      desc: "How to overtake safely, where overtaking is forbidden, and the places where you may not stop or park.",
      content: [
        { type: "p", text: "Overtaking (<em>sorpasso</em>) is one of the most dangerous manoeuvres, so the rules are strict. The exam tests both <em>how</em> to do it and <em>where you must not</em>." },
        { type: "h", text: "Overtaking Safely" },
        { type: "examples", items: [
          ex("🪞", "Guardare negli specchietti.", "gwar-DAH-reh NEL-yee spek-KYET-tee", "Check your mirrors."),
          ex("⬅️", "Segnalare con la freccia a sinistra.", "sen-ya-LAH-reh kon la FRECH-cha a see-NEE-stra", "Signal with the left indicator."),
          ex("🚗", "Sorpassare a sinistra.", "sor-pas-SAH-reh a see-NEE-stra", "Overtake on the left."),
          ex("➡️", "Rientrare a destra con la freccia.", "ree-en-TRAH-reh a DEH-stra kon la FRECH-cha", "Move back to the right, indicating.")
        ]},
        { type: "note", html: "Before you pull out, make sure the road ahead is clear for long enough and that no vehicle behind you has started to overtake. If <strong>you</strong> are being overtaken, keep to the right and <strong>do not speed up</strong>." },
        { type: "h", text: "Where Overtaking Is Forbidden" },
        { type: "charlist", items: [
          "Near <strong>junctions</strong> (as a general rule)",
          "At <strong>bends and hill crests</strong> where you can't see far enough",
          "At or near <strong>pedestrian crossings</strong>",
          "Near <strong>level crossings</strong>",
          "Where there is a <strong>continuous line</strong> or a no-overtaking sign",
          "When the vehicle in front is <strong>already overtaking</strong>, or is signalling to turn left"
        ]},
        { type: "h", text: "Where You May Not Stop or Park" },
        { type: "charlist", items: [
          "On <strong>pedestrian crossings</strong>",
          "At <strong>bends and humps</strong> with poor visibility",
          "Within <strong>5 metres of a junction</strong> (parking)",
          "In front of a <strong>driveway</strong> (<em>passo carrabile</em>)",
          "In <strong>double file</strong> (<em>in doppia fila</em>) beside a parked vehicle",
          "On <strong>bus stops</strong> and cycle lanes"
        ]},
        { type: "h", text: "Leaving the Car" },
        { type: "p", text: "When you leave a parked vehicle: <strong>engine off, handbrake on</strong>, and a gear engaged. On the motorway you may not reverse or make a U-turn." }
      ],
      vocabCategories: [
        { name: "Overtaking", words: [
          vw("↔️", "sorpassare", "sor-pas-SAH-reh", "to overtake"),
          vw("🪞", "lo specchietto", "lo spek-KYET-to", "the mirror"),
          vw("➡️", "la freccia", "la FRECH-cha", "the indicator"),
          vw("🔙", "la retromarcia", "la re-tro-MAR-cha", "reverse gear")
        ]},
        { name: "Parking", words: [
          vw("🅿️", "parcheggiare", "par-ked-JAH-reh", "to park"),
          vw("🚫", "in doppia fila", "een DOP-pya FEE-la", "in double file"),
          vw("🚪", "il passo carrabile", "eel PAS-so kar-RAH-bee-leh", "the driveway entrance"),
          vw("✋", "il freno a mano", "eel FREH-no a MAH-no", "the handbrake")
        ]}
      ],
      exercises: [
        matching("pt107-ex1", [pair("sorpassare", "to overtake"), pair("la freccia", "the indicator"), pair("parcheggiare", "to park"), pair("in doppia fila", "in double file"), pair("il freno a mano", "the handbrake")]),
        tfSet("pt107-ex2", "A", [
          tf("Il sorpasso deve essere effettuato a sinistra.", "Overtaking must be done on the left.", true, "In Italy you overtake on the left."),
          tf("Prima di sorpassare bisogna accertarsi che la strada sia libera per un tratto sufficiente.", "Before overtaking you must make sure the road is clear for enough distance.", true, "You need clear road for the whole manoeuvre."),
          tf("È consentito sorpassare in prossimità di un attraversamento pedonale.", "Overtaking near a pedestrian crossing is allowed.", false, "Overtaking near pedestrian crossings is forbidden."),
          tf("Il sorpasso è vietato in prossimità di curve e dossi con visibilità limitata.", "Overtaking is forbidden near bends and humps with limited visibility.", true, "You can't see oncoming traffic, so overtaking is forbidden."),
          tf("Durante il sorpasso si deve segnalare la manovra con l'indicatore di direzione sinistro.", "While overtaking you must signal with the left indicator.", true, "Signal to show the manoeuvre, then again when you return to the right."),
          tf("Il conducente che viene sorpassato può aumentare la velocità.", "The driver being overtaken may speed up.", false, "The overtaken driver must keep to the right and not accelerate.")
        ]),
        tfSet("pt107-ex3", "B", [
          tf("La sosta è vietata sugli attraversamenti pedonali.", "Parking is forbidden on pedestrian crossings.", true, "Never stop or park on a crossing."),
          tf("La sosta in doppia fila è consentita se è breve.", "Double-file parking is allowed if it is brief.", false, "Double-file parking is forbidden however short."),
          tf("È vietato sostare a meno di 5 metri da un'intersezione.", "Parking within 5 metres of a junction is forbidden.", true, "Keep at least 5 metres clear of junctions when parking."),
          tf("La sosta davanti a un passo carrabile è consentita.", "Parking in front of a driveway entrance is allowed.", false, "Parking in front of a driveway entrance is forbidden."),
          tf("In autostrada è consentito fare retromarcia per tornare a un'uscita che si è superata.", "On the motorway you may reverse to get back to an exit you have missed.", false, "Reversing and U-turns are forbidden on motorways."),
          tf("Scendendo dal veicolo in sosta, il conducente deve spegnere il motore e inserire il freno di stazionamento.", "Leaving a parked vehicle, the driver must switch off the engine and apply the handbrake.", true, "Engine off, handbrake on, gear engaged.")
        ])
      ],
      speakingPhrases: [
        sp("↔️", "Prima di sorpassare guardo negli specchietti.", "PREE-ma dee sor-pas-SAH-reh GWAR-do NEL-yee spek-KYET-tee", "Before overtaking I check the mirrors."),
        sp("🚫", "La sosta in doppia fila è vietata.", "la SOS-ta een DOP-pya FEE-la eh vee-eh-TAH-ta", "Double-file parking is forbidden.")
      ]
    }),

    {
      track: "patente", id: 112, unit: "p-u3", label: "Review 3", type: "checkpoint", difficulty: 4, requires: 107, icon: "🔁",
      title: "Review: Speed, Overtaking & Parking", arabicTitle: "Ripasso: velocità e sorpasso", locked: false,
      desc: "Seven mixed statements on the rules of Unit 3 — in exam style.",
      content: [
        { type: "p", text: "This review completes Unit 3. These statements mix speed, distance, overtaking and parking — just as the real exam mixes topics." }
      ],
      vocabCategories: [],
      exercises: [
        tfSet("pt112-ex1", "Mix", [
          tf("Su una strada extraurbana secondaria la velocità massima per le autovetture è di 110 km/h.", "On a secondary extra-urban road the maximum speed for cars is 110 km/h.", false, "It is 90 km/h on secondary roads; 110 km/h applies to main extra-urban roads."),
          tf("In prossimità degli incroci il sorpasso è, di regola, vietato.", "Near junctions, overtaking is as a rule forbidden.", true, "You can't be sure no vehicle is entering from the side."),
          tf("Quando la strada è bagnata la distanza di sicurezza va aumentata.", "On a wet road the safe distance should be increased.", true, "Wet roads lengthen the braking distance."),
          tf("È permesso fermarsi sulle strisce pedonali per far salire un passeggero.", "It is allowed to stop on a pedestrian crossing to let a passenger in.", false, "Stopping on a crossing is not allowed."),
          tf("Con la nebbia fitta si può mantenere la velocità normale, purché si accendano i fari.", "In thick fog you may keep normal speed as long as you switch on the lights.", false, "Lights do not cancel the need to slow down in fog."),
          tf("La fermata è una sospensione temporanea della marcia, con il conducente a bordo.", "A stop is a temporary halt, with the driver on board.", true, "That is the definition of fermata."),
          tf("Il segnale raffigurato vieta di sorpassare altri veicoli a motore.", "The sign shown forbids overtaking other motor vehicles.", true, "Two cars side by side, one red: the no-overtaking sign.", "divieto-sorpasso")
        ])
      ],
      speakingPhrases: []
    },

    /* ------------------------------ UNIT 4 ------------------------------ */
    topic({
      id: 108, unit: "p-u4", label: "Topic 9", difficulty: 4, requires: 112, icon: "🪪",
      title: "Safety, Documents & Penalties", arabicTitle: "Sicurezza, documenti e patente a punti",
      desc: "Seat belts, child seats, helmets, phones, alcohol, licence points, documents and lights.",
      content: [
        { type: "p", text: "Many exam questions test everyday safety rules. They are short to learn and easy marks to win." },
        { type: "h", text: "Belts, Child Seats & Helmets" },
        { type: "examples", items: [
          ex("🔒", "Le cinture di sicurezza vanno allacciate da tutti.", "leh cheen-TOO-reh dee see-koo-RET-tsa VAN-no al-la-CHAH-teh da TOOT-tee", "Seat belts must be worn by everyone, front and rear."),
          ex("👶", "I bambini sotto 1,50 m viaggiano con il seggiolino.", "ee bam-BEE-nee SOT-to oon MEH-tro eh chin-KWAN-ta vyad-JAH-no kon eel sed-jo-LEE-no", "Children under 1.50 m travel in a suitable child restraint."),
          ex("🏍️", "Il casco è obbligatorio per i motociclisti.", "eel KAS-ko eh ob-blee-ga-TOR-yo per ee mo-to-chee-KLEE-stee", "A helmet is compulsory for motorcyclists.")
        ]},
        { type: "h", text: "Phones, Alcohol & Drugs" },
        { type: "examples", items: [
          ex("📵", "È vietato usare il telefono in mano guidando.", "eh vee-eh-TAH-to oo-ZAH-reh eel te-LEH-fo-no een MAH-no gwee-DAN-do", "Using a hand-held phone while driving is forbidden."),
          ex("🍷", "Il tasso alcolemico massimo è 0,5 g/l.", "eel TAS-so al-ko-LEH-mee-ko MAS-see-mo eh ZEH-ro VEER-go-la chin-kweh", "The maximum blood-alcohol level is 0.5 g/l.")
        ]},
        { type: "note", html: "For <strong>new drivers</strong> (first three years), drivers <strong>under 21</strong>, and professional drivers the limit is <strong>zero</strong>. Driving after taking drugs is forbidden." },
        { type: "h", text: "Licence & Documents" },
        { type: "examples", items: [
          ex("🪪", "la patente", "la pa-TEN-teh", "the driving licence — category B from age 18"),
          ex("📄", "la carta di circolazione", "la KAR-ta dee cheer-ko-la-TSYO-neh", "the vehicle registration document"),
          ex("🛡️", "l'assicurazione", "las-see-koo-ra-TSYO-neh", "the insurance (compulsory third-party cover)")
        ]},
        { type: "p", text: "The licence has <strong>20 points</strong> to start with. Points are deducted for offences; if they reach zero the licence is revoked and the theory and practical exams must be passed again. Always carry your licence and the vehicle's registration document." },
        { type: "h", text: "Lights" },
        { type: "p", text: "Outside built-up areas, dipped headlights (<em>fari anabbaglianti</em>) must be on <strong>day and night</strong>. Switch on your lights in tunnels, and at night or in poor visibility everywhere." }
      ],
      vocabCategories: [
        { name: "Safety", words: [
          vw("🔒", "la cintura di sicurezza", "la cheen-TOO-ra dee see-koo-RET-tsa", "the seat belt"),
          vw("🪖", "il casco", "eel KAS-ko", "the helmet"),
          vw("👶", "il seggiolino", "eel sed-jo-LEE-no", "the child seat"),
          vw("📵", "il telefono cellulare", "eel te-LEH-fo-no chel-loo-LAH-reh", "the mobile phone"),
          vw("🍷", "l'alcol", "AL-kol", "alcohol")
        ]},
        { name: "Licence & Car", words: [
          vw("🪪", "la patente", "la pa-TEN-teh", "the driving licence"),
          vw("🔢", "i punti", "ee POON-tee", "the points"),
          vw("📄", "la carta di circolazione", "la KAR-ta dee cheer-ko-la-TSYO-neh", "registration document"),
          vw("🛡️", "l'assicurazione", "las-see-koo-ra-TSYO-neh", "insurance"),
          vw("💡", "i fari anabbaglianti", "ee FAH-ree an-ab-bal-YAN-tee", "dipped headlights")
        ]}
      ],
      exercises: [
        matching("pt108-ex1", [pair("la cintura di sicurezza", "the seat belt"), pair("il casco", "the helmet"), pair("la patente", "the driving licence"), pair("i punti", "the points"), pair("l'assicurazione", "insurance")]),
        tfSet("pt108-ex2", "A", [
          tf("Le cinture di sicurezza devono essere usate da tutti gli occupanti, anche sui sedili posteriori.", "Seat belts must be worn by all occupants, including in the rear seats.", true, "Belts are compulsory front and rear."),
          tf("L'uso del telefono cellulare tenuto in mano durante la guida è vietato.", "Using a hand-held mobile phone while driving is forbidden.", true, "Hand-held phone use is not allowed."),
          tf("Il tasso alcolemico massimo consentito per i conducenti è di 0,5 grammi per litro.", "The maximum blood-alcohol level for drivers is 0.5 grams per litre.", true, "0.5 g/l is the general limit."),
          tf("I neopatentati possono guidare dopo avere bevuto, purché restino sotto 0,5 g/l.", "New drivers may drive after drinking as long as they stay below 0.5 g/l.", false, "New drivers have a zero limit for the first three years."),
          tf("La patente di categoria B si può conseguire a 16 anni.", "The category B licence can be obtained at 16.", false, "Category B is from 18."),
          tf("La patente a punti ha un punteggio iniziale di 20 punti.", "The points licence starts with 20 points.", true, "You start with 20 points; offences take them away.")
        ]),
        tfSet("pt108-ex3", "B", [
          tf("Quando i punti si azzerano la patente è revocata e occorre rifare gli esami.", "When the points reach zero the licence is revoked and the exams must be retaken.", true, "A licence with no points left is revoked."),
          tf("Il conducente può guidare senza la carta di circolazione se ha con sé la patente.", "The driver may drive without the registration document if he has his licence.", false, "Carry both the licence and the vehicle's registration document."),
          tf("I bambini di statura inferiore a 1,50 m devono viaggiare con un sistema di ritenuta adeguato.", "Children shorter than 1.50 m must travel in a suitable restraint.", true, "Under 1.50 m a proper child restraint is required."),
          tf("Fuori dai centri abitati i fari anabbaglianti vanno accesi solo di notte.", "Outside built-up areas dipped headlights are needed only at night.", false, "Outside built-up areas they must be on day and night."),
          tf("Il casco protettivo è obbligatorio per i conducenti di motocicli e ciclomotori.", "A protective helmet is compulsory for motorcycle and moped riders.", true, "Helmets are compulsory for motorcycles and mopeds."),
          tf("Il conducente può guidare dopo avere assunto sostanze stupefacenti, se si sente in forma.", "A driver may drive after taking drugs if he feels fit.", false, "Driving under the influence of drugs is forbidden, however you feel.")
        ])
      ],
      speakingPhrases: [
        sp("🔒", "Allacciate le cinture di sicurezza.", "al-la-CHAH-teh leh cheen-TOO-reh dee see-koo-RET-tsa", "Fasten your seat belts."),
        sp("📵", "È vietato usare il telefono guidando.", "eh vee-eh-TAH-to oo-ZAH-reh eel te-LEH-fo-no gwee-DAN-do", "Using the phone while driving is forbidden.")
      ]
    }),

    topic({
      id: 109, unit: "p-u4", label: "Topic 10", difficulty: 5, requires: 108, icon: "🚑",
      title: "Accidents, First Aid & Environment", arabicTitle: "Incidenti, primo soccorso e ambiente",
      desc: "What to do at the scene of an accident, emergency numbers, and the car-care basics the exam tests.",
      content: [
        { type: "p", text: "The last topic covers what to do when things go wrong, and a few mechanical and environmental basics." },
        { type: "h", text: "After an Accident" },
        { type: "charlist", items: [
          "<strong>Stop</strong> — leaving the scene is an offence.",
          "Switch on the <strong>hazard lights</strong> (<em>luci di emergenza</em>).",
          "Put on a <strong>reflective vest</strong> (<em>giubbotto retroriflettente</em>) when you get out outside a built-up area, and place the <strong>warning triangle</strong> (<em>triangolo</em>) at least 50 metres behind the vehicle.",
          "<strong>Call for help</strong> if anyone is hurt.",
          "Help the injured, but <strong>do not move them</strong> unless there is immediate danger (such as fire). Do not take off a motorcyclist's helmet."
        ]},
        { type: "note", html: "<em>Omissione di soccorso</em> — failing to help an injured person — is a <strong>crime</strong>." },
        { type: "h", text: "Emergency Numbers" },
        { type: "examples", items: [
          ex("🆘", "112 — numero unico di emergenza", "CHEN-to DOH-dee-chee", "112 — the single European emergency number"),
          ex("👮", "113 — Polizia di Stato", "CHEN-to TRE-dee-chee", "113 — police"),
          ex("🚒", "115 — Vigili del Fuoco", "CHEN-to KWEEN-dee-chee", "115 — fire brigade"),
          ex("🚑", "118 — emergenza sanitaria", "CHEN-to dee-CHOT-to", "118 — medical emergency")
        ]},
        { type: "h", text: "Your Car & the Environment" },
        { type: "examples", items: [
          ex("🛞", "Il battistrada: minimo 1,6 mm", "eel bat-tee-STRAH-da", "Tyre tread: legal minimum 1.6 mm."),
          ex("💨", "La pressione degli pneumatici", "la pres-SYO-neh DEL-yee pneh-oo-MAH-tee-chee", "Under-inflated tyres raise fuel use and wear."),
          ex("🛑", "L'ABS", "lah-beh-ESS-eh", "ABS stops the wheels locking when braking, so you can still steer."),
          ex("🌱", "Guida dolce", "GWEE-da DOL-cheh", "Smooth driving, without harsh acceleration and braking, saves fuel and cuts pollution.")
        ]}
      ],
      vocabCategories: [
        { name: "Accidents", words: [
          vw("💥", "l'incidente", "leen-chee-DEN-teh", "the accident"),
          vw("🆘", "il soccorso", "eel sok-KOR-so", "help / rescue"),
          vw("🤕", "il ferito", "eel fe-REE-to", "the injured person"),
          vw("🚑", "l'ambulanza", "lam-boo-LAN-tsa", "the ambulance"),
          vw("🔺", "il triangolo", "eel tree-AN-go-lo", "the warning triangle"),
          vw("🦺", "il giubbotto retroriflettente", "eel joob-BOT-to re-tro-ri-flet-TEN-teh", "the reflective vest")
        ]},
        { name: "Car & Environment", words: [
          vw("🛞", "i pneumatici", "ee pneh-oo-MAH-tee-chee", "the tyres"),
          vw("📏", "il battistrada", "eel bat-tee-STRAH-da", "the tread"),
          vw("🌍", "l'ambiente", "lam-bee-EN-teh", "the environment"),
          vw("⛽", "il carburante", "eel kar-boo-RAN-teh", "the fuel")
        ]}
      ],
      exercises: [
        matching("pt109-ex1", [pair("l'incidente", "the accident"), pair("il soccorso", "help / rescue"), pair("il ferito", "the injured person"), pair("il triangolo", "the warning triangle"), pair("i pneumatici", "the tyres")]),
        tfSet("pt109-ex2", "A", [
          tf("In caso di incidente con feriti non è obbligatorio chiamare i soccorsi.", "After an accident with injured people it is not compulsory to call for help.", false, "You must call for help when people are injured."),
          tf("Il numero unico di emergenza europeo è il 112.", "The single European emergency number is 112.", true, "112 is the single emergency number."),
          tf("Il triangolo di emergenza va collocato a una distanza non inferiore a 50 metri dal veicolo.", "The warning triangle must be placed at least 50 metres from the vehicle.", true, "At least 50 metres behind the vehicle."),
          tf("Chi presta soccorso a un ferito non deve spostarlo, salvo pericolo immediato.", "Someone helping an injured person must not move them unless there is immediate danger.", true, "Moving an injured person can worsen their injuries."),
          tf("Dopo un incidente con soli danni ai veicoli il conducente può allontanarsi senza lasciare i dati.", "After an accident causing only vehicle damage, the driver may leave without giving details.", false, "You must stop and exchange details."),
          tf("L'omissione di soccorso è un reato.", "Failing to help the injured is a criminal offence.", true, "Omissione di soccorso is a crime.")
        ]),
        tfSet("pt109-ex3", "B", [
          tf("Il casco di un motociclista infortunato va sempre tolto subito.", "An injured motorcyclist's helmet should always be taken off immediately.", false, "Don't remove it unless absolutely necessary — you could worsen a neck injury."),
          tf("La profondità minima del battistrada degli pneumatici è di 1,6 mm.", "The minimum tyre tread depth is 1.6 mm.", true, "1.6 mm is the legal minimum."),
          tf("Una pressione troppo bassa degli pneumatici aumenta i consumi di carburante.", "Tyre pressure that is too low increases fuel consumption.", true, "Under-inflated tyres use more fuel and wear faster."),
          tf("Il sistema ABS impedisce il bloccaggio delle ruote in frenata e permette di sterzare.", "ABS prevents wheel lock when braking and lets you steer.", true, "With ABS you can brake hard and still steer."),
          tf("Frequenti accelerazioni e frenate brusche riducono i consumi.", "Frequent harsh acceleration and braking reduce fuel consumption.", false, "They increase fuel consumption. Smooth driving saves fuel."),
          tf("Il 118 è il numero di emergenza dei Vigili del Fuoco.", "118 is the emergency number of the fire brigade.", false, "The fire brigade is 115. 118 is the medical emergency number.")
        ])
      ],
      speakingPhrases: [
        sp("🚑", "Chiamate un'ambulanza, c'è un ferito.", "kya-MAH-teh oon-am-boo-LAN-tsa, cheh oon fe-REE-to", "Call an ambulance, there is an injured person."),
        sp("🆘", "Il numero di emergenza è il centododici.", "eel NOO-me-ro dee e-mer-JEN-tsa eh eel chen-to-DOH-dee-chee", "The emergency number is one-one-two.")
      ]
    })
  );

  /* =====================================================================
     BATCH 2 — more topics, more statements, more pictures.
     Adds Units 5 and 6, ten new topics, two more review sets, a third
     practice set for every earlier topic, and re-orders the track.
  ===================================================================== */
  units.push(
    { id: "p-u5", track: "patente", title: "Unit 5 — Special Roads, Lights & Road Users", desc: "Motorways, lights and visibility, level crossings, pedestrians, cyclists and special zones." },
    { id: "p-u6", track: "patente", title: "Unit 6 — Your Vehicle, Load & the Law", desc: "Dashboard lights and maintenance, loads and licence categories, fitness to drive, insurance and responsibility." }
  );

  const byId = id => chapters.find(c => c.id === id);
  const addSet = (id, letter, items) => {
    const set = tfSet(`pt${id}-ex4`, letter, items);
    set.title = "Extra Practice — Vero o Falso?";
    set.instructions = "Optional extra practice — tap Continue to skip it. " + TF_HELP;
    byId(id).exercises.push(set);
  };

  /* ---------- a third practice set for each earlier topic ---------- */
  addSet(100, "C", [
    tf("La banchina è la parte della strada compresa tra il margine della carreggiata e il marciapiede o il ciglio.", "The verge is the part of the road between the edge of the carriageway and the pavement or the roadside edge.", true, "That is the definition of banchina."),
    tf("Lo spartitraffico è la parte non carrabile della strada che separa carreggiate contigue.", "The central reservation is the non-drivable part of the road that separates adjoining carriageways.", true, "Spartitraffico = central reservation / divider."),
    tf("La carreggiata può essere composta da più corsie di marcia.", "A carriageway can be made up of several lanes.", true, "One or more lanes make up a carriageway."),
    tf("Chi conduce a mano la bicicletta è assimilato al pedone.", "Someone leading a bicycle by hand is treated as a pedestrian.", true, "Pushing a bicycle by hand, you count as a pedestrian."),
    tf("Le strade urbane sono quelle che si trovano fuori dai centri abitati.", "Urban roads are those found outside built-up areas.", false, "Urban roads are inside built-up areas; roads outside are extra-urban."),
    tf("Il conducente è sempre il proprietario del veicolo.", "The driver is always the owner of the vehicle.", false, "A conducente is whoever is driving, whether or not they own the vehicle.")
  ]);
  addSet(101, "C", [
    tf("Il segnale raffigurato indica un passaggio a livello con barriere.", "The sign shown indicates a level crossing with barriers.", true, "A gate or barrier pictogram in a triangle warns of a level crossing.", "passaggio-livello"),
    tf("Il segnale raffigurato avverte della presenza di una rotatoria.", "The sign shown warns of a roundabout ahead.", true, "Three arrows in a circle inside a warning triangle: a roundabout is coming.", "rotatoria-avviso"),
    tf("Il segnale raffigurato indica che la strada è a senso unico.", "The sign shown indicates that the road is one-way.", false, "Two opposite arrows mean two-way traffic ahead.", "doppio-senso"),
    tf("Il segnale raffigurato indica una salita ripida.", "The sign shown indicates a steep ascent.", true, "The slope rising to the right with a percentage is a steep ascent.", "salita"),
    tf("Il segnale raffigurato indica una salita ripida.", "The sign shown indicates a steep ascent.", false, "The slope falls to the right: it is a steep DESCENT.", "discesa"),
    tf("I segnali di pericolo vietano di sorpassare.", "Warning signs forbid overtaking.", false, "Warning signs only warn; prohibitions use other signs.")
  ]);
  addSet(102, "C", [
    tf("Il segnale raffigurato indica che non si deve superare la velocità di 30 km/h.", "The sign shown means you must not exceed 30 km/h.", true, "A number in a red-bordered circle is a maximum speed.", "limite-30"),
    tf("Il segnale raffigurato vieta di fare inversione di marcia.", "The sign shown forbids making a U-turn.", true, "A U-shaped arrow crossed out is the no-U-turn sign.", "divieto-inversione"),
    tf("Il segnale raffigurato vieta di svoltare a destra.", "The sign shown forbids turning right.", false, "The crossed-out arrow points left: no left turn.", "divieto-svolta-sx"),
    tf("Il segnale raffigurato vieta il transito ai pedoni.", "The sign shown forbids pedestrians.", true, "A pedestrian in a red-bordered circle: pedestrians not allowed.", "divieto-pedoni"),
    tf("Il segnale raffigurato indica la fine di tutti i divieti imposti dai segnali precedenti.", "The sign shown marks the end of all the prohibitions imposed by earlier signs.", true, "Grey diagonal bands on white: end of all prohibitions.", "fine-divieti"),
    tf("Il segnale raffigurato vieta il transito ai ciclomotori.", "The sign shown forbids mopeds.", false, "The picture is a bicycle: it forbids bicycles.", "divieto-bici")
  ]);
  addSet(103, "C", [
    tf("Il segnale raffigurato obbliga a svoltare a sinistra.", "The sign shown obliges you to turn left.", true, "A white arrow pointing left on blue: turn left only.", "obbligo-sinistra"),
    tf("Il segnale raffigurato indica un percorso riservato ai pedoni.", "The sign shown indicates a path reserved for pedestrians.", true, "A pedestrian on a blue circle marks a pedestrian path.", "percorso-pedonale"),
    tf("Il segnale raffigurato consente di svoltare a destra.", "The sign shown allows you to turn right.", false, "An upward arrow means straight ahead only.", "obbligo-dritto"),
    tf("Un segnale di obbligo di colore blu può avere un bordo rosso.", "A blue mandatory sign can have a red border.", false, "Mandatory signs are plain blue discs; a red border belongs to prohibitions and warnings."),
    tf("Il segnale di STOP ha forma ottagonale.", "The STOP sign is octagonal.", true, "STOP is the only octagonal sign.", "stop"),
    tf("Il segnale raffigurato indica che nella rotatoria si procede in senso orario.", "The sign shown means that in the roundabout you go clockwise.", false, "In Italy roundabouts go counter-clockwise.", "rotatoria")
  ]);
  addSet(104, "C", [
    tf("Gli agenti del traffico possono dare indicazioni anche con segnali manuali.", "Traffic officers may also give instructions with hand signals.", true, "Hand signals from an officer are binding."),
    tf("Con il semaforo rosso, se l'agente del traffico fa segno di passare, bisogna fermarsi.", "With a red light, if the traffic officer waves you through, you must stop.", false, "The officer's signal prevails over the light: you proceed as directed."),
    tf("Al segnale di STOP il conducente deve fermarsi anche se la strada è libera.", "At a STOP sign the driver must stop even if the road is clear.", true, "A STOP sign always requires a complete stop.", "stop"),
    tf("Chi si immette da una strada secondaria su una strada con diritto di precedenza deve dare la precedenza.", "Someone joining a priority road from a side road must give way.", true, "The side road has to give way to the priority road.", "diritto-precedenza"),
    tf("In generale i veicoli che circolano su rotaia hanno la precedenza sugli altri.", "In general, vehicles running on rails have priority over others.", true, "Trams and trains have priority."),
    tf("La precedenza a destra prevale sul segnale di diritto di precedenza.", "Priority to the right overrides a priority-road sign.", false, "Signs prevail over the general right-hand rule.")
  ]);
  addSet(105, "C", [
    tf("Le frecce disegnate sulla corsia indicano la direzione da seguire.", "Arrows painted on a lane show the direction to follow.", true, "Lane arrows tell you which way vehicles in that lane must go.", "freccia-strada"),
    tf("Le strisce blu delimitano gli stalli di sosta a pagamento.", "Blue stripes mark paid parking spaces.", true, "Blue bays are generally paid parking.", "strisce-blu"),
    tf("Il segnale orizzontale raffigurato indica un attraversamento ciclabile.", "The marking shown indicates a cycle crossing.", true, "Two rows of squares across the road: a cycle crossing.", "attraversamento-ciclabile"),
    tf("La freccia verde consente di avanzare nella direzione indicata dalla freccia.", "A green arrow allows you to proceed in the direction it shows.", true, "A green arrow lets you go the way the arrow points.", "semaforo-freccia-verde"),
    tf("La luce gialla fissa indica che sta per accendersi la luce rossa.", "A steady amber light means that red is about to come on.", true, "Amber warns that the phase is ending."),
    tf("Con il semaforo verde il veicolo deve comunque fermarsi alla linea d'arresto.", "On a green light the vehicle must still stop at the stop line.", false, "A green light lets you go on.")
  ]);
  addSet(106, "C", [
    tf("Il limite di 130 km/h in autostrada si applica anche ai neopatentati.", "The 130 km/h motorway limit also applies to new drivers.", false, "New drivers are limited to 100 km/h on motorways in their first three years."),
    tf("In caso di pioggia il limite per le autovetture sulle strade extraurbane principali è di 90 km/h.", "In rain the limit for cars on main extra-urban roads is 90 km/h.", true, "In rain: 90 km/h on main extra-urban roads, 110 km/h on motorways."),
    tf("Il limite di velocità è un valore massimo che non va superato.", "A speed limit is a maximum that must not be exceeded.", true, "It is a ceiling, never a target."),
    tf("Una velocità elevata aumenta la gravità delle conseguenze di un urto.", "High speed increases the severity of a collision.", true, "Impact force rises quickly with speed."),
    tf("La distanza di sicurezza dipende solo dalla velocità e non dalle condizioni della strada.", "The safe distance depends only on speed, not on road conditions.", false, "Weather, tyres, load and the surface all matter."),
    tf("Con pneumatici usurati lo spazio di frenata diminuisce.", "With worn tyres the braking distance gets shorter.", false, "Worn tyres grip less, so braking distance grows.")
  ]);
  addSet(107, "C", [
    tf("È vietato sorpassare in corrispondenza di un passaggio a livello.", "Overtaking at a level crossing is forbidden.", true, "Never overtake at or near a level crossing."),
    tf("Chi sorpassa deve preavvisare con l'indicatore di direzione prima di spostarsi.", "A driver overtaking must signal with the indicator before moving out.", true, "Signal first, then move."),
    tf("Si può sostare sul marciapiede se non si ostacolano i pedoni.", "You may park on the pavement if you do not obstruct pedestrians.", false, "Parking on the pavement is forbidden unless signs allow it."),
    tf("La sosta negli spazi riservati ai disabili è consentita a chiunque per brevi periodi.", "Anyone may park in disabled spaces for short periods.", false, "Those spaces are for authorised disabled drivers only."),
    tf("È vietato sostare in corrispondenza delle fermate degli autobus.", "Parking at bus stops is forbidden.", true, "Bus stops must be kept clear."),
    tf("È vietato sorpassare un veicolo fermo per dare la precedenza ai pedoni.", "Overtaking a vehicle that has stopped to give way to pedestrians is forbidden.", true, "Someone may be crossing in front of that vehicle.")
  ]);
  addSet(108, "C", [
    tf("La patente di categoria AM si può conseguire a 14 anni.", "The AM licence can be obtained at 14.", true, "AM (mopeds) is from age 14."),
    tf("La patente B consente di guidare autoveicoli con massa fino a 3.500 kg e non più di otto passeggeri.", "A B licence allows cars up to 3,500 kg with no more than eight passengers.", true, "That is the scope of category B."),
    tf("Con la patente B si può guidare un autobus.", "With a B licence you may drive a bus.", false, "Buses need category D."),
    tf("In caso di controllo il conducente deve esibire la patente di guida.", "When stopped for a check the driver must show the driving licence.", true, "Carry it and show it on request."),
    tf("L'uso della cintura non è obbligatorio per i passeggeri dei sedili posteriori nei tragitti brevi.", "Seat belts are not compulsory for rear passengers on short trips.", false, "Belts are compulsory for everyone, however short the trip."),
    tf("L'appoggiatesta riduce il rischio di lesioni al collo in caso di urto da dietro.", "The head restraint reduces the risk of neck injury in a rear-end collision.", true, "That is its purpose.")
  ]);
  addSet(109, "C", [
    tf("In caso di incendio del veicolo bisogna allontanarsi e chiamare i soccorsi.", "If the vehicle catches fire you must move away and call for help.", true, "Get everyone clear first and call emergency services."),
    tf("Il giubbotto retroriflettente va indossato prima di scendere per un'emergenza fuori dai centri abitati.", "The reflective vest must be put on before getting out for an emergency outside built-up areas.", true, "Put it on before leaving the vehicle."),
    tf("Chi presta soccorso a un ferito deve sempre dargli da bere.", "Someone helping an injured person should always give them a drink.", false, "Do not give drinks to the injured."),
    tf("Un pneumatico sgonfio può compromettere la tenuta di strada.", "An under-inflated tyre can reduce road holding.", true, "Low pressure hurts grip and stability."),
    tf("Il catalizzatore riduce le emissioni inquinanti allo scarico.", "The catalytic converter reduces polluting exhaust emissions.", true, "It cleans the exhaust gases."),
    tf("Lasciare il motore acceso a veicolo fermo per lungo tempo riduce l'inquinamento.", "Leaving the engine running while stationary for a long time reduces pollution.", false, "It wastes fuel and increases pollution.")
  ]);

  /* ---------- new topics ---------- */
  chapters.push(
    topic({
      id: 113, unit: "p-u1", label: "", difficulty: 2, requires: 103, icon: "ℹ️",
      title: "Information & Direction Signs", arabicTitle: "I segnali di indicazione",
      desc: "Blue, green, white and brown signs that tell you where things are — and what the colours mean.",
      content: [
        { type: "p", text: "Information signs (<em>segnali di indicazione</em>) tell you where things are and what kind of road you are on. They are <strong>rectangular or square</strong>, and their colour tells you a lot." },
        { type: "h", text: "The Colours Tell You the Road" },
        { type: "examples", items: [
          ex("🟩", "Sfondo verde: autostrada", "SFON-do VER-deh: ow-to-STRAH-da", "Green background: motorway"),
          ex("🟦", "Sfondo blu: strada extraurbana", "SFON-do BLOO: STRAH-da ek-stra-oor-BAH-na", "Blue background: a road outside towns"),
          ex("⬜", "Sfondo bianco: centro abitato", "SFON-do BYAN-ko: CHEN-tro a-bee-TAH-to", "White background: inside a town"),
          ex("🟫", "Sfondo marrone: turismo e cultura", "SFON-do mar-RO-neh: too-REEZ-mo eh kool-TOO-ra", "Brown background: tourist and cultural sites")
        ]},
        { type: "h", text: "Seven Signs to Know" },
        { type: "signs", items: [
          { sign: "parcheggio", ar: "Parcheggio", translit: "par-KED-jo", meaning: "Parking area" },
          { sign: "senso-unico", ar: "Senso unico", translit: "SEN-so OO-ni-ko", meaning: "One-way street" },
          { sign: "ospedale", ar: "Ospedale", translit: "os-pe-DAH-leh", meaning: "Hospital" },
          { sign: "pedonale-info", ar: "Attraversamento pedonale", translit: "at-tra-ver-sa-MEN-to pe-do-NAH-leh", meaning: "Pedestrian crossing (at this point)" },
          { sign: "galleria", ar: "Galleria", translit: "gal-le-REE-a", meaning: "Tunnel" },
          { sign: "distributore", ar: "Distributore di carburante", translit: "dee-stree-boo-TOR-eh dee kar-boo-RAN-teh", meaning: "Fuel station" },
          { sign: "autostrada", ar: "Autostrada", translit: "ow-to-STRAH-da", meaning: "Motorway" }
        ]},
        { type: "note", html: "Don't confuse the <strong>blue square</strong> crossing sign (a crossing is <em>right here</em>) with the <strong>red-bordered warning triangle</strong> (a crossing is <em>coming up</em>)." }
      ],
      vocabCategories: [
        { name: "Places & Services", words: [
          vw("🅿️", "il parcheggio", "eel par-KED-jo", "the car park"),
          vw("➡️", "il senso unico", "eel SEN-so OO-ni-ko", "the one-way street"),
          vw("🏥", "l'ospedale", "los-pe-DAH-leh", "the hospital"),
          vw("🚇", "la galleria", "la gal-le-REE-a", "the tunnel"),
          vw("⛽", "il distributore", "eel dee-stree-boo-TOR-eh", "the fuel station")
        ]},
        { name: "Colours", words: [
          vw("🟩", "verde", "VER-deh", "green"),
          vw("🟦", "blu", "BLOO", "blue"),
          vw("⬜", "bianco", "BYAN-ko", "white"),
          vw("🟫", "marrone", "mar-RO-neh", "brown")
        ]}
      ],
      exercises: [
        matching("pt113-ex1", [pair("il parcheggio", "the car park"), pair("il senso unico", "the one-way street"), pair("l'ospedale", "the hospital"), pair("la galleria", "the tunnel"), pair("il distributore", "the fuel station")]),
        tfSet("pt113-ex2", "A", [
          tf("Il segnale raffigurato indica un'area di parcheggio.", "The sign shown indicates a parking area.", true, "A white P on blue is parking.", "parcheggio"),
          tf("Il segnale raffigurato indica la presenza di un ospedale.", "The sign shown indicates a hospital.", true, "A white H on blue marks a hospital.", "ospedale"),
          tf("Il segnale raffigurato indica un passaggio a livello.", "The sign shown indicates a level crossing.", false, "A pedestrian in a white triangle on blue marks a pedestrian crossing.", "pedonale-info"),
          tf("Il segnale raffigurato indica l'inizio di una galleria.", "The sign shown indicates the start of a tunnel.", true, "The arch symbol is a tunnel.", "galleria"),
          tf("Il segnale raffigurato indica un'officina di riparazione.", "The sign shown indicates a repair garage.", false, "The fuel pump pictogram is a fuel station.", "distributore"),
          tf("Il segnale raffigurato indica una strada a senso unico.", "The sign shown indicates a one-way street.", true, "A single arrow on blue: one-way.", "senso-unico")
        ]),
        tfSet("pt113-ex3", "B", [
          tf("Il segnale raffigurato indica l'inizio di un'autostrada.", "The sign shown indicates the start of a motorway.", true, "Green with a road symbol: motorway.", "autostrada"),
          tf("I segnali di direzione sulle autostrade hanno sfondo verde.", "Direction signs on motorways have a green background.", true, "Green is the motorway colour."),
          tf("I segnali di direzione sulle strade extraurbane hanno sfondo verde.", "Direction signs on extra-urban roads have a green background.", false, "On extra-urban roads they are blue."),
          tf("Nei centri abitati i segnali di direzione hanno in genere sfondo bianco.", "In built-up areas direction signs generally have a white background.", true, "White inside towns."),
          tf("I segnali turistici e di territorio hanno sfondo marrone.", "Tourist and heritage signs have a brown background.", true, "Brown marks tourist and cultural sites."),
          tf("I segnali di indicazione hanno sempre forma triangolare.", "Information signs are always triangular.", false, "They are rectangular or square; triangles are warning signs.")
        ])
      ],
      speakingPhrases: [
        sp("🅿️", "Il parcheggio è a destra.", "eel par-KED-jo eh a DEH-stra", "The car park is on the right."),
        sp("🏥", "L'ospedale è vicino.", "los-pe-DAH-leh eh vee-CHEE-no", "The hospital is nearby.")
      ]
    }),

    topic({
      id: 114, unit: "p-u1", label: "", difficulty: 2, requires: 113, icon: "🚧",
      title: "Supplementary Panels & Road-Works Signs", arabicTitle: "Pannelli integrativi e cantieri",
      desc: "Panels that add detail to a sign, and the signs, barriers and cones used at road works.",
      content: [
        { type: "p", text: "Besides the main signs there are supporting signs: <strong>panels</strong> that add detail to another sign, and <strong>temporary signs and equipment</strong> for road works (<em>cantieri</em>)." },
        { type: "h", text: "Supplementary Panels (Pannelli Integrativi)" },
        { type: "p", text: "A rectangular panel under a sign adds detail: how far away the danger is, where a rule starts or stops, or which vehicles and times it applies to." },
        { type: "signs", items: [
          { sign: "pannello-distanza", ar: "Pannello di distanza", translit: "pan-NEL-lo dee dee-STAN-tsa", meaning: "Distance panel: how far ahead the hazard or rule is" }
        ]},
        { type: "h", text: "Road Works (Cantieri)" },
        { type: "signs", items: [
          { sign: "barriera", ar: "Barriera", translit: "bar-RYEH-ra", meaning: "Barrier with red and white stripes" },
          { sign: "cono", ar: "Cono", translit: "KO-no", meaning: "Traffic cone (red and white)" }
        ]},
        { type: "p", text: "Temporary signs for works usually have a <strong>yellow background</strong> and <strong>take priority over permanent signs</strong> that conflict with them. At night barriers carry red lights. Obey any worker who is directing traffic." },
        { type: "note", html: "A permanent sign may say one thing and a temporary yellow sign another — <strong>follow the temporary one</strong> while the works are there." }
      ],
      vocabCategories: [
        { name: "Road Works", words: [
          vw("🚧", "il cantiere", "eel kan-TYEH-reh", "the road-works site"),
          vw("🚧", "la barriera", "la bar-RYEH-ra", "the barrier"),
          vw("🔺", "il cono", "eel KO-no", "the cone"),
          vw("👷", "l'operaio", "lo-pe-RAH-yo", "the worker")
        ]},
        { name: "Panels", words: [
          vw("🔲", "il pannello", "eel pan-NEL-lo", "the panel"),
          vw("📏", "la distanza", "la dee-STAN-tsa", "the distance"),
          vw("⏳", "temporaneo", "tem-po-RAH-ne-o", "temporary"),
          vw("🟡", "giallo", "JAL-lo", "yellow")
        ]}
      ],
      exercises: [
        matching("pt114-ex1", [pair("il cantiere", "the road-works site"), pair("la barriera", "the barrier"), pair("il cono", "the cone"), pair("l'operaio", "the worker"), pair("il pannello", "the panel")]),
        tfSet("pt114-ex2", "A", [
          tf("Il pannello integrativo raffigurato indica la distanza dal pericolo o dal punto in cui vale il segnale.", "The supplementary panel shown gives the distance to the hazard or to where the sign applies.", true, "A number of metres on a panel gives a distance.", "pannello-distanza"),
          tf("La barriera a strisce rosse e bianche delimita un'area di lavori o un ostacolo.", "A barrier with red and white stripes marks an area of works or an obstacle.", true, "Red-and-white striped barriers mark works or obstructions.", "barriera"),
          tf("I coni a strisce bianche e rosse segnalano lavori o un ostacolo sulla carreggiata.", "Cones with white and red bands signal works or an obstacle on the carriageway.", true, "Cones mark the edge of a hazard.", "cono"),
          tf("Un pannello integrativo non può mai limitare il significato del segnale a cui è associato.", "A supplementary panel can never limit the meaning of the sign it goes with.", false, "Panels exist precisely to add detail or limits."),
          tf("I segnali temporanei di cantiere hanno generalmente sfondo giallo.", "Temporary road-works signs generally have a yellow background.", true, "Yellow marks temporary works signs."),
          tf("I segnali temporanei di cantiere non vanno rispettati se in contrasto con quelli permanenti.", "Temporary works signs need not be obeyed if they conflict with permanent ones.", false, "Temporary signs prevail over conflicting permanent ones.")
        ]),
        tfSet("pt114-ex3", "B", [
          tf("In presenza di lavori il conducente deve rispettare le indicazioni degli operatori che regolano il traffico.", "At road works the driver must follow the instructions of the workers controlling traffic.", true, "Their instructions are binding."),
          tf("I pannelli integrativi hanno forma rettangolare.", "Supplementary panels are rectangular.", true, "They are rectangles placed under the main sign."),
          tf("Sulle barriere di cantiere si usano luci rosse per aumentare la visibilità di notte.", "Red lights on works barriers increase visibility at night.", true, "Red lamps make barriers visible in the dark."),
          tf("Nei tratti con lavori si può superare il limite di velocità se la strada è libera.", "At road works you may exceed the speed limit if the road is clear.", false, "Limits at works must always be respected."),
          tf("Un segnale permanente prevale sempre su un segnale temporaneo in contrasto.", "A permanent sign always prevails over a conflicting temporary one.", false, "The temporary sign prevails."),
          tf("Il pannello «fine» posto sotto un segnale indica dove cessa la prescrizione.", "An 'end' panel under a sign shows where the rule stops.", true, "It marks the end of the rule.")
        ])
      ],
      speakingPhrases: [
        sp("🚧", "Attenzione, cantiere stradale.", "at-ten-TSYO-neh, kan-TYEH-reh stra-DAH-leh", "Caution, road works."),
        sp("👷", "Seguire le indicazioni degli operai.", "se-GWEE-reh leh een-dee-ka-TSYO-nee DEL-yee o-pe-RAH-ee", "Follow the workers' directions.")
      ]
    }),

    topic({
      id: 115, unit: "p-u5", label: "", difficulty: 4, requires: 109, icon: "🛣️",
      title: "Motorways", arabicTitle: "L'autostrada",
      desc: "Who may use the motorway, how to join and leave it, and what you must never do on it.",
      content: [
        { type: "p", text: "Motorways (<em>autostrade</em>) have separate carriageways and no level junctions, so the rules are specific. Expect several exam questions on them." },
        { type: "h", text: "Who May Use the Motorway?" },
        { type: "examples", items: [
          ex("🚷", "Vietato ai pedoni", "vee-eh-TAH-to ai pe-DOH-nee", "Pedestrians are forbidden."),
          ex("🚲", "Vietato alle biciclette", "vee-eh-TAH-to AL-leh bee-chee-KLET-teh", "Bicycles are forbidden."),
          ex("🛵", "Vietato ai ciclomotori", "vee-eh-TAH-to ai chee-klo-mo-TOR-ee", "Mopeds are forbidden.")
        ]},
        { type: "h", text: "Lanes & Manoeuvres" },
        { type: "examples", items: [
          ex("⬆️", "Corsia di accelerazione", "kor-SEE-a dee ach-che-le-ra-TSYO-neh", "Acceleration lane: use it to join, and give way to traffic already on the motorway."),
          ex("⬇️", "Corsia di decelerazione", "kor-SEE-a dee de-che-le-ra-TSYO-neh", "Deceleration lane: slow down here when leaving."),
          ex("🆘", "Corsia di emergenza", "kor-SEE-a dee e-mer-JEN-tsa", "Emergency lane: only for emergencies."),
          ex("↔️", "Sorpasso a sinistra", "sor-PAS-so a see-NEE-stra", "Overtake on the left, then move back to the right.")
        ]},
        { type: "note", html: "<strong>Never</strong> stop, reverse or make a U-turn on a motorway. If you miss your exit, carry on to the next one." },
        { type: "h", text: "Speed & Breakdowns" },
        { type: "p", text: "The limit for cars is 130 km/h (110 km/h when it rains, 100 km/h for new drivers). If your vehicle breaks down, pull into the <strong>emergency lane</strong>, switch on the hazard lights, put on your reflective vest, and call for help from a safe place away from the carriageway." }
      ],
      vocabCategories: [
        { name: "On the Motorway", words: [
          vw("🛣️", "l'autostrada", "low-to-STRAH-da", "the motorway"),
          vw("🎫", "il casello", "eel ka-SEL-lo", "the toll booth"),
          vw("💶", "il pedaggio", "eel pe-DAJ-jo", "the toll"),
          vw("🚪", "l'uscita", "loo-SHEE-ta", "the exit"),
          vw("⛽", "l'area di servizio", "LAH-re-a dee ser-VEE-tsyo", "the service area")
        ]},
        { name: "Lanes", words: [
          vw("⬆️", "la corsia di accelerazione", "la kor-SEE-a dee ach-che-le-ra-TSYO-neh", "acceleration lane"),
          vw("🆘", "la corsia di emergenza", "la kor-SEE-a dee e-mer-JEN-tsa", "emergency lane"),
          vw("↪️", "immettersi", "eem-MET-ter-see", "to join (a road)")
        ]}
      ],
      exercises: [
        matching("pt115-ex1", [pair("il casello", "the toll booth"), pair("il pedaggio", "the toll"), pair("l'uscita", "the exit"), pair("la corsia di emergenza", "emergency lane"), pair("l'area di servizio", "the service area")]),
        tfSet("pt115-ex2", "A", [
          tf("In autostrada è vietato il transito dei ciclomotori.", "Mopeds are not allowed on motorways.", true, "Mopeds, bicycles and pedestrians are banned."),
          tf("In autostrada è consentita la sosta sulla corsia di emergenza per riposare.", "On a motorway you may park in the emergency lane to rest.", false, "The emergency lane is for emergencies only."),
          tf("In autostrada il sorpasso va effettuato sulla corsia di sinistra.", "On a motorway overtaking is done in the left-hand lane.", true, "Overtake on the left, as everywhere."),
          tf("Chi si immette in autostrada dalla corsia di accelerazione deve dare la precedenza ai veicoli già in circolazione.", "A driver joining from the acceleration lane must give way to vehicles already on the motorway.", true, "Traffic on the motorway has priority."),
          tf("In autostrada è consentito il transito dei pedoni sulla banchina.", "Pedestrians may walk on the motorway verge.", false, "Pedestrians are never allowed."),
          tf("In autostrada, di norma, si percorre la corsia libera più a destra.", "On a motorway you normally use the free right-most lane.", true, "Keep right unless you are overtaking.")
        ]),
        tfSet("pt115-ex3", "B", [
          tf("La corsia di emergenza può essere usata solo in caso di necessità.", "The emergency lane may be used only when necessary.", true, "Use it only for a real emergency."),
          tf("In autostrada è vietato fare retromarcia.", "Reversing is forbidden on a motorway.", true, "No reversing and no U-turns."),
          tf("La corsia di decelerazione serve per rallentare prima di uscire dall'autostrada.", "The deceleration lane is used to slow down before leaving the motorway.", true, "Slow down in that lane, not on the main carriageway."),
          tf("In caso di avaria ci si ferma sulla corsia di marcia più a sinistra.", "After a breakdown you stop in the left-most traffic lane.", false, "Stop in the emergency lane on the right."),
          tf("Se si perde l'uscita si può tornare indietro in retromarcia.", "If you miss your exit you may reverse back to it.", false, "Never reverse; take the next exit."),
          tf("Con nebbia fitta si può mantenere la velocità normale se si accendono i fari.", "In thick fog you may keep normal speed if you switch your lights on.", false, "You must slow down in fog regardless of lights.")
        ])
      ],
      speakingPhrases: [
        sp("↔️", "In autostrada si sorpassa a sinistra.", "een ow-to-STRAH-da see sor-PAS-sa a see-NEE-stra", "On the motorway you overtake on the left."),
        sp("🚫", "Non si può fare retromarcia.", "non see pwoh FAH-reh re-tro-MAR-cha", "You cannot reverse.")
      ]
    }),

    topic({
      id: 116, unit: "p-u5", label: "", difficulty: 4, requires: 115, icon: "💡",
      title: "Lights & Visibility", arabicTitle: "Luci e visibilità",
      desc: "Dipped and high beams, fog lights, hazard lights, indicators and the horn: what to use, and when.",
      content: [
        { type: "p", text: "Using the right lights at the right time is a favourite exam topic. Learn the Italian names, then the rules." },
        { type: "h", text: "The Lights" },
        { type: "examples", items: [
          ex("💡", "Anabbaglianti", "an-ab-bal-YAN-tee", "Dipped headlights."),
          ex("🔆", "Abbaglianti", "ab-bal-YAN-tee", "High beams."),
          ex("🌫️", "Fendinebbia", "fen-dee-NEB-bya", "Fog lights (front and rear)."),
          ex("⚠️", "Luci di emergenza", "LOO-chee dee e-mer-JEN-tsa", "Hazard lights."),
          ex("➡️", "Indicatori di direzione", "een-dee-ka-TOR-ee dee dee-re-TSYO-neh", "Indicators."),
          ex("📯", "Clacson", "KLAK-son", "Horn.")
        ]},
        { type: "h", text: "Rules of Thumb" },
        { type: "charlist", items: [
          "<strong>Dipped lights</strong>: always on outside built-up areas, in tunnels, and at night in towns.",
          "<strong>High beams</strong>: only on unlit roads, with no one coming towards you and no one in front. Switch back to dipped when you meet or follow a vehicle.",
          "<strong>Fog lights</strong>: only in fog, snow or heavy rain; the <em>rear</em> fog light only in fog or snow, and switch it off when visibility improves.",
          "<strong>Indicators</strong>: switch on <em>before</em> you start a manoeuvre.",
          "<strong>Horn</strong>: in built-up areas only to warn of immediate danger."
        ]},
        { type: "note", html: "Outside towns you may flash your headlights to show that you are about to overtake." }
      ],
      vocabCategories: [
        { name: "Lights", words: [
          vw("💡", "gli anabbaglianti", "lyee an-ab-bal-YAN-tee", "dipped lights"),
          vw("🔆", "gli abbaglianti", "lyee ab-bal-YAN-tee", "high beams"),
          vw("🌫️", "il fendinebbia", "eel fen-dee-NEB-bya", "the fog light"),
          vw("⚠️", "le luci di emergenza", "leh LOO-chee dee e-mer-JEN-tsa", "hazard lights")
        ]},
        { name: "Signals", words: [
          vw("➡️", "l'indicatore di direzione", "leen-dee-ka-TOR-eh dee dee-re-TSYO-neh", "the indicator"),
          vw("📯", "il clacson", "eel KLAK-son", "the horn"),
          vw("👁️", "la visibilità", "la vee-zee-bee-lee-TAH", "visibility")
        ]}
      ],
      exercises: [
        matching("pt116-ex1", [pair("gli abbaglianti", "high beams"), pair("il fendinebbia", "the fog light"), pair("il clacson", "the horn"), pair("la visibilità", "visibility"), pair("le luci di emergenza", "hazard lights")]),
        tfSet("pt116-ex2", "A", [
          tf("I fari abbaglianti possono essere usati fuori dai centri abitati se non si abbagliano gli altri conducenti.", "High beams may be used outside built-up areas if you do not dazzle other drivers.", true, "Only when there is no one to dazzle."),
          tf("Incrociando un altro veicolo bisogna passare dagli abbaglianti agli anabbaglianti.", "When meeting another vehicle you must switch from high to dipped beams.", true, "Dip your lights so as not to dazzle."),
          tf("I fari retronebbia possono essere usati in qualsiasi condizione per essere più visibili.", "Rear fog lights may be used in any conditions to be more visible.", false, "Only in fog or snow."),
          tf("Nei centri abitati il clacson si usa solo per segnalare un pericolo immediato.", "In built-up areas the horn is used only to warn of immediate danger.", true, "Do not use it for anything else in towns."),
          tf("In galleria si possono tenere i fari spenti se la galleria è illuminata.", "In a tunnel you may keep your lights off if the tunnel is lit.", false, "Dipped lights are required in tunnels."),
          tf("Con nebbia fitta si possono usare i fari fendinebbia anteriori.", "In thick fog you may use the front fog lights.", true, "Fog lights are meant for fog, snow and heavy rain.")
        ]),
        tfSet("pt116-ex3", "B", [
          tf("I fari abbaglianti devono essere spenti quando si segue da vicino un altro veicolo.", "High beams must be off when closely following another vehicle.", true, "They would dazzle the driver ahead through his mirrors."),
          tf("Le luci di emergenza si usano per segnalare un pericolo o un veicolo fermo in emergenza.", "Hazard lights are used to signal a danger or a vehicle stopped in an emergency.", true, "That is their purpose."),
          tf("L'indicatore di direzione va azionato solo dopo aver iniziato la manovra.", "The indicator should be switched on only after starting the manoeuvre.", false, "Signal before you move."),
          tf("Fuori dai centri abitati il lampeggio dei fari può segnalare l'intenzione di sorpassare.", "Outside built-up areas flashing the headlights may show an intention to overtake.", true, "Flashing is allowed there to warn the driver ahead."),
          tf("I fendinebbia posteriori vanno spenti quando la visibilità migliora.", "Rear fog lights must be switched off when visibility improves.", true, "Leaving them on dazzles others."),
          tf("Con la pioggia leggera si possono tenere accesi i retronebbia.", "In light rain you may keep the rear fog lights on.", false, "Not in light rain.")
        ])
      ],
      speakingPhrases: [
        sp("💡", "Accendo gli anabbaglianti in galleria.", "ach-CHEN-do lyee an-ab-bal-YAN-tee een gal-le-REE-a", "I switch on my dipped lights in a tunnel."),
        sp("🌫️", "Con la nebbia uso i fendinebbia.", "kon la NEB-bya OO-zo ee fen-dee-NEB-bya", "In fog I use the fog lights.")
      ]
    }),

    topic({
      id: 117, unit: "p-u5", label: "", difficulty: 4, requires: 116, icon: "🚆",
      title: "Level Crossings", arabicTitle: "I passaggi a livello",
      desc: "How to read a railway crossing, what to do when the lights flash, and what to do if you stall.",
      content: [
        { type: "p", text: "A level crossing (<em>passaggio a livello</em>) is where a road crosses a railway on the same level. Trains cannot stop quickly, so the rules are strict." },
        { type: "h", text: "Signs & Signals" },
        { type: "signs", items: [
          { sign: "passaggio-livello", ar: "Passaggio a livello con barriere", translit: "pas-SAJ-jo a lee-VEL-lo kon bar-RYEH-reh", meaning: "Level crossing with barriers (warning)" },
          { sign: "croce-st-andrea", ar: "Croce di Sant'Andrea", translit: "KRO-che dee san-tan-DRE-a", meaning: "Cross placed at the crossing itself" }
        ]},
        { type: "p", text: "Red flashing lights, a ringing bell, or lowering barriers all mean the same thing: <strong>stop</strong>." },
        { type: "h", text: "What You Must Do" },
        { type: "charlist", items: [
          "Slow down as you approach, and <strong>never overtake</strong> near a crossing.",
          "Stop when the lights flash or the barriers move — never zigzag round them.",
          "Cross only if the road beyond the tracks has room for your whole vehicle.",
          "If your vehicle stalls on the tracks: <strong>everyone out</strong>, move well away from the line, then call for help."
        ]},
        { type: "note", html: "Never stop on the tracks, even in a queue — wait until you are sure you can clear the crossing." }
      ],
      vocabCategories: [
        { name: "Railway", words: [
          vw("🚆", "il treno", "eel TREH-no", "the train"),
          vw("🛤️", "il binario", "eel bee-NAH-ryo", "the track"),
          vw("🛤️", "la ferrovia", "la fer-ro-VEE-a", "the railway"),
          vw("🚧", "la barriera", "la bar-RYEH-ra", "the barrier"),
          vw("🚦", "il passaggio a livello", "eel pas-SAJ-jo a lee-VEL-lo", "the level crossing")
        ]}
      ],
      exercises: [
        matching("pt117-ex1", [pair("il treno", "the train"), pair("il binario", "the track"), pair("la ferrovia", "the railway"), pair("la barriera", "the barrier"), pair("il passaggio a livello", "the level crossing")]),
        tfSet("pt117-ex2", "A", [
          tf("Il segnale raffigurato indica un passaggio a livello con barriere.", "The sign shown indicates a level crossing with barriers.", true, "A gate in a warning triangle.", "passaggio-livello"),
          tf("La croce di Sant'Andrea è posta in corrispondenza di un passaggio a livello.", "St Andrew's cross is placed at a level crossing.", true, "It marks the crossing itself.", "croce-st-andrea"),
          tf("Con le luci rosse lampeggianti del passaggio a livello bisogna fermarsi.", "When the level-crossing red lights flash you must stop.", true, "Flashing red means stop."),
          tf("Se le barriere si stanno abbassando si può attraversare in fretta.", "If the barriers are coming down you may hurry across.", false, "Stop; never try to beat the barriers."),
          tf("È vietato il sorpasso in prossimità di un passaggio a livello.", "Overtaking near a level crossing is forbidden.", true, "No overtaking at or near crossings."),
          tf("Se il veicolo si ferma sui binari bisogna cercare di spostarlo restando a bordo.", "If the vehicle stops on the tracks try to move it while staying on board.", false, "Get everyone out and away from the tracks.")
        ]),
        tfSet("pt117-ex3", "B", [
          tf("Se il veicolo si ferma sui binari bisogna far scendere tutti e allontanarsi.", "If the vehicle stops on the tracks everyone must get out and move away.", true, "Safety first."),
          tf("Prima di attraversare bisogna accertarsi che oltre i binari ci sia spazio sufficiente.", "Before crossing you must be sure there is enough room beyond the tracks.", true, "Do not enter if you would be left on the line."),
          tf("Se si vedono le barriere abbassate si può procedere quando non si vede il treno.", "With lowered barriers you may go on if no train is visible.", false, "Lowered barriers always mean stop."),
          tf("Davanti a un passaggio a livello conviene aumentare la velocità per attraversarlo prima.", "Before a level crossing it is better to speed up to cross first.", false, "Slow down and be ready to stop."),
          tf("Il segnale acustico del passaggio a livello indica l'arrivo di un treno.", "The sound signal at a level crossing means a train is coming.", true, "Treat it as a stop signal."),
          tf("Se il traffico è fermo si può sostare con il veicolo sui binari.", "If traffic is at a standstill you may wait with the vehicle on the tracks.", false, "Never stop on the tracks.")
        ])
      ],
      speakingPhrases: [
        sp("🚧", "Alle barriere abbassate bisogna fermarsi.", "AL-leh bar-RYEH-reh ab-bas-SAH-teh bee-ZON-ya fer-MAR-see", "At lowered barriers you must stop."),
        sp("🔴", "Con le luci rosse lampeggianti non si passa.", "kon leh LOO-chee ROS-seh lam-ped-JAN-tee non see PAS-sa", "With flashing red lights you do not cross.")
      ]
    }),

    topic({
      id: 118, unit: "p-u5", label: "", difficulty: 4, requires: 117, icon: "🚶",
      title: "Pedestrians, Cyclists & Special Zones", arabicTitle: "Pedoni, ciclisti e zone speciali",
      desc: "Sharing the road with people on foot and on bikes, plus ZTLs, zone 30 and pedestrian areas.",
      content: [
        { type: "p", text: "The exam gives a lot of weight to <strong>vulnerable road users</strong> — pedestrians and cyclists — and to Italian special zones." },
        { type: "h", text: "Pedestrians" },
        { type: "examples", items: [
          ex("🚶", "Sul margine sinistro della strada", "sool MAR-jee-neh see-NEE-stro DEL-la STRAH-da", "Without a pavement, pedestrians walk on the left edge, facing traffic."),
          ex("🦯", "Pedone con il bastone bianco", "pe-DOH-neh kon eel ba-STOH-neh BYAN-ko", "A pedestrian with a white cane: slow down and give way."),
          ex("🏫", "Vicino alle scuole", "vee-CHEE-no AL-leh SKWO-leh", "Near schools, slow down and take extra care.")
        ]},
        { type: "h", text: "Cyclists" },
        { type: "examples", items: [
          ex("🚴", "Luce bianca davanti, rossa dietro", "LOO-che BYAN-ka da-VAN-tee, ROS-sa DYEH-tro", "At night: white light in front, red at the back."),
          ex("🚪", "Aprire la portiera con attenzione", "a-PREE-reh la por-TYEH-ra kon at-ten-TSYO-neh", "Check behind you before opening a car door."),
          ex("↔️", "Spazio laterale adeguato", "SPAH-tsyo la-te-RAH-leh a-de-GWAH-to", "Leave enough side space when overtaking a cyclist.")
        ]},
        { type: "h", text: "Special Zones" },
        { type: "examples", items: [
          ex("🅰️", "ZTL — zona a traffico limitato", "DZO-na a TRAF-fee-ko lee-mee-TAH-to", "Limited-traffic zone: only authorised vehicles may enter."),
          ex("3️⃣", "Zona 30", "DZO-na tren-ta", "A zone with a 30 km/h limit."),
          ex("🚷", "Area pedonale", "AH-re-a pe-do-NAH-leh", "Pedestrian area: vehicles are generally not allowed."),
          ex("🚌", "Corsia riservata", "kor-SEE-a ree-ser-VAH-ta", "Reserved lane (for buses and the like): keep out.")
        ]}
      ],
      vocabCategories: [
        { name: "People", words: [
          vw("🚶", "il pedone", "eel pe-DOH-neh", "the pedestrian"),
          vw("🚴", "la bicicletta", "la bee-chee-KLET-ta", "the bicycle"),
          vw("🦯", "il bastone bianco", "eel ba-STOH-neh BYAN-ko", "the white cane")
        ]},
        { name: "Zones", words: [
          vw("🅰️", "la zona a traffico limitato", "la DZO-na a TRAF-fee-ko lee-mee-TAH-to", "limited-traffic zone"),
          vw("🚷", "l'area pedonale", "LAH-re-a pe-do-NAH-leh", "the pedestrian area"),
          vw("🚌", "la corsia riservata", "la kor-SEE-a ree-ser-VAH-ta", "the reserved lane")
        ]}
      ],
      exercises: [
        matching("pt118-ex1", [pair("la bicicletta", "the bicycle"), pair("il bastone bianco", "the white cane"), pair("l'area pedonale", "the pedestrian area"), pair("la corsia riservata", "the reserved lane"), pair("la zona a traffico limitato", "limited-traffic zone")]),
        tfSet("pt118-ex2", "A", [
          tf("Nei tratti privi di marciapiede i pedoni devono camminare sul margine sinistro rispetto al loro senso di marcia.", "Where there is no pavement pedestrians must walk on the left edge relative to their direction.", true, "They face oncoming traffic."),
          tf("Il conducente deve rallentare e prestare attenzione quando vede un pedone con il bastone bianco.", "A driver must slow down and take care when seeing a pedestrian with a white cane.", true, "That pedestrian may be blind."),
          tf("I ciclisti di notte devono avere una luce anteriore bianca e una posteriore rossa.", "At night cyclists must have a white front light and a red rear light.", true, "White in front, red at the back."),
          tf("Prima di aprire la portiera bisogna accertarsi che non sopraggiungano ciclisti o altri veicoli.", "Before opening a door you must make sure no cyclists or vehicles are approaching.", true, "Check mirrors and behind you."),
          tf("I pedoni possono attraversare ovunque anche a pochi metri da un attraversamento pedonale.", "Pedestrians may cross anywhere, even a few metres from a pedestrian crossing.", false, "They should use a nearby crossing."),
          tf("Nelle aree pedonali il transito dei veicoli è in genere vietato.", "In pedestrian areas vehicles are generally forbidden.", true, "Pedestrian areas are for people on foot.")
        ]),
        tfSet("pt118-ex3", "B", [
          tf("La ZTL è una zona a traffico limitato in cui possono accedere solo i veicoli autorizzati.", "A ZTL is a limited-traffic zone where only authorised vehicles may enter.", true, "Entering without permission is an offence."),
          tf("In una zona 30 il limite massimo di velocità è di 30 km/h.", "In a zone 30 the maximum speed is 30 km/h.", true, "30 km/h is the limit."),
          tf("I ciclisti possono circolare in autostrada.", "Cyclists may ride on motorways.", false, "Bicycles are banned from motorways."),
          tf("Il conducente può sorpassare un ciclista senza lasciare spazio se la strada è larga.", "A driver may overtake a cyclist leaving no space if the road is wide.", false, "Always leave enough lateral space."),
          tf("Un conducente che vede bambini vicino a una scuola può non rallentare.", "A driver who sees children near a school need not slow down.", false, "Slow down and be ready to stop."),
          tf("Le corsie riservate ai mezzi pubblici possono essere usate da tutti i veicoli.", "Lanes reserved for public transport may be used by all vehicles.", false, "Only the vehicles allowed may use them.")
        ])
      ],
      speakingPhrases: [
        sp("🚪", "Prima di aprire la portiera guardo indietro.", "PREE-ma dee a-PREE-reh la por-TYEH-ra GWAR-do een-DYEH-tro", "Before opening the door I look behind."),
        sp("🚷", "Nelle aree pedonali non si passa con l'auto.", "NEL-leh AH-re-eh pe-do-NAH-lee non see PAS-sa kon LOW-to", "In pedestrian areas you do not drive through.")
      ]
    }),

    topic({
      id: 119, unit: "p-u6", label: "", difficulty: 5, requires: 123, icon: "🔧",
      title: "Vehicle Controls & Maintenance", arabicTitle: "Controlli e manutenzione",
      desc: "Dashboard warning lights and the parts that keep you safe: brakes, tyres, ABS, ESP and airbags.",
      content: [
        { type: "p", text: "You do not need to be a mechanic for the exam, but you must know what the main warning lights mean and which parts matter for safety." },
        { type: "h", text: "Warning Lights" },
        { type: "signs", items: [
          { sign: "spia-olio", ar: "Spia dell'olio", translit: "SPEE-a del-LOH-lyo", meaning: "Oil pressure too low" },
          { sign: "spia-batteria", ar: "Spia della batteria", translit: "SPEE-a DEL-la bat-te-REE-a", meaning: "Battery not charging" },
          { sign: "spia-freni", ar: "Spia dei freni", translit: "SPEE-a day FREH-nee", meaning: "Brake fault, or handbrake on" },
          { sign: "spia-abs", ar: "Spia ABS", translit: "SPEE-a ah-beh-ES-seh", meaning: "Anti-lock braking fault" }
        ]},
        { type: "h", text: "Parts That Keep You Safe" },
        { type: "examples", items: [
          ex("🛑", "I freni", "ee FREH-nee", "Brakes: weak brakes lengthen your stopping distance."),
          ex("🛞", "I pneumatici", "ee pneh-oo-MAH-tee-chee", "Tyres: right size, right pressure (checked cold), enough tread."),
          ex("🔩", "Gli ammortizzatori", "lyee am-mor-tee-dza-TOR-ee", "Shock absorbers: worn ones hurt grip and lengthen braking."),
          ex("🛡️", "ABS ed ESP", "ah-beh-ES-seh eh eh-seh-PEH", "ABS stops wheel lock; ESP helps keep the car stable in a skid."),
          ex("🎈", "L'airbag", "eh-ER-beg", "Works together with the seat belt — it does not replace it.")
        ]},
        { type: "h", text: "Fluids" },
        { type: "p", text: "<strong>Engine oil</strong> lubricates moving parts. <strong>Coolant</strong> keeps the engine at the right temperature. <strong>Brake fluid</strong> works the brakes." }
      ],
      vocabCategories: [
        { name: "Parts", words: [
          vw("🛑", "i freni", "ee FREH-nee", "the brakes"),
          vw("🎛️", "lo sterzo", "lo STER-tso", "the steering"),
          vw("🔋", "la batteria", "la bat-te-REE-a", "the battery"),
          vw("🛢️", "l'olio", "LOH-lyo", "the oil"),
          vw("🚨", "la spia", "la SPEE-a", "the warning light")
        ]},
        { name: "Safety Kit", words: [
          vw("🛞", "i pneumatici", "ee pneh-oo-MAH-tee-chee", "the tyres"),
          vw("🔩", "gli ammortizzatori", "lyee am-mor-tee-dza-TOR-ee", "the shock absorbers"),
          vw("🎈", "l'airbag", "eh-ER-beg", "the airbag"),
          vw("💺", "l'appoggiatesta", "lap-pod-ja-TEH-sta", "the head restraint")
        ]}
      ],
      exercises: [
        matching("pt119-ex1", [pair("i freni", "the brakes"), pair("lo sterzo", "the steering"), pair("la batteria", "the battery"), pair("l'olio", "the oil"), pair("la spia", "the warning light")]),
        tfSet("pt119-ex2", "A", [
          tf("La spia raffigurata, se si accende, segnala una pressione dell'olio motore insufficiente.", "The light shown, when on, warns of insufficient engine-oil pressure.", true, "The oil-can symbol means low oil pressure.", "spia-olio"),
          tf("La spia raffigurata segnala un problema al sistema di ricarica della batteria.", "The light shown warns of a problem with the battery charging system.", true, "The battery symbol points to charging.", "spia-batteria"),
          tf("La spia raffigurata può segnalare il freno a mano inserito o un problema all'impianto frenante.", "The light shown can mean the handbrake is on or there is a braking-system fault.", true, "The circled exclamation mark is the brake warning.", "spia-freni"),
          tf("La spia raffigurata indica che il livello del carburante è basso.", "The light shown means the fuel level is low.", false, "It is the oil-pressure warning, not the fuel gauge.", "spia-olio"),
          tf("Gli ammortizzatori consumati peggiorano la tenuta di strada e allungano gli spazi di frenata.", "Worn shock absorbers worsen road holding and lengthen braking distances.", true, "Worn dampers reduce tyre contact."),
          tf("Con i freni poco efficienti si può circolare riducendo di poco la velocità.", "With poor brakes you may drive on, only slightly reducing speed.", false, "Poor brakes are a serious danger; have them fixed.")
        ]),
        tfSet("pt119-ex3", "B", [
          tf("Il liquido di raffreddamento serve a mantenere il motore alla giusta temperatura.", "Coolant keeps the engine at the right temperature.", true, "It prevents overheating."),
          tf("L'olio motore ha la funzione di lubrificare le parti in movimento.", "Engine oil lubricates the moving parts.", true, "It reduces friction and wear."),
          tf("I pneumatici vanno controllati preferibilmente a caldo dopo un lungo viaggio.", "Tyres should preferably be checked hot after a long journey.", false, "Check pressure when the tyres are cold."),
          tf("Il sistema ESP aiuta a mantenere la stabilità del veicolo in curva e in caso di sbandata.", "ESP helps keep the vehicle stable in bends and in a skid.", true, "That is what electronic stability control does."),
          tf("L'airbag sostituisce le cinture di sicurezza.", "The airbag replaces the seat belts.", false, "It only works properly together with the belts."),
          tf("Si possono montare pneumatici di misura diversa da quella omologata senza problemi.", "Tyres of a different size from the approved one can be fitted without any problem.", false, "Only the approved sizes may be used.")
        ])
      ],
      speakingPhrases: [
        sp("🛢️", "La spia dell'olio è accesa.", "la SPEE-a del-LOH-lyo eh ach-CHEH-sa", "The oil light is on."),
        sp("🛞", "Controllo la pressione dei pneumatici.", "kon-TROL-lo la pres-SYO-neh day pneh-oo-MAH-tee-chee", "I check the tyre pressure.")
      ]
    }),

    topic({
      id: 120, unit: "p-u6", label: "", difficulty: 5, requires: 119, icon: "📦",
      title: "Load, Passengers & Licence Categories", arabicTitle: "Carico, passeggeri e categorie",
      desc: "Carrying a load safely, how many people you may carry, and which licence allows what.",
      content: [
        { type: "p", text: "A badly loaded vehicle is hard to steer and slow to stop. The exam also asks which licence allows which vehicle." },
        { type: "h", text: "Carrying a Load" },
        { type: "charlist", items: [
          "The load must be <strong>secured</strong> so it cannot move or fall.",
          "It must not make the vehicle <strong>unstable</strong> or affect braking and steering.",
          "It must not hide the <strong>driver's view</strong>, the <strong>lights</strong> or the <strong>number plate</strong>.",
          "A load that sticks out must be <strong>signalled</strong> properly."
        ]},
        { type: "h", text: "Passengers" },
        { type: "p", text: "You may carry only as many people as the registration document (<em>carta di circolazione</em>) allows. Children shorter than 1.50 m need an approved restraint." },
        { type: "h", text: "Licence Categories" },
        { type: "examples", items: [
          ex("🛵", "AM — dai 14 anni", "AH-EM-meh — day kwat-TOR-dee-chee AN-nee", "AM: mopeds, from age 14."),
          ex("🏍️", "A1 — dai 16 anni", "AH oo-no — day see-DEE-chee AN-nee", "A1: light motorcycles, from age 16."),
          ex("🚗", "B — dai 18 anni", "BEE — day dee-CHOT-to AN-nee", "B: cars up to 3,500 kg and eight passengers plus the driver, from age 18."),
          ex("🚌", "D — autobus", "DEE — OW-to-boos", "D: buses.")
        ]}
      ],
      vocabCategories: [
        { name: "Loads & People", words: [
          vw("📦", "il carico", "eel KAH-ree-ko", "the load"),
          vw("🧍", "il passeggero", "eel pas-sed-JEH-ro", "the passenger"),
          vw("🚌", "l'autobus", "LOW-to-boos", "the bus"),
          vw("🚛", "il rimorchio", "eel ree-MOR-kyo", "the trailer")
        ]},
        { name: "Licence", words: [
          vw("🪪", "la categoria", "la ka-te-go-REE-a", "the category"),
          vw("⚖️", "la massa", "la MAS-sa", "the weight (mass)"),
          vw("🎂", "l'età", "le-TAH", "the age")
        ]}
      ],
      exercises: [
        matching("pt120-ex1", [pair("il carico", "the load"), pair("il passeggero", "the passenger"), pair("la categoria", "the category"), pair("il rimorchio", "the trailer"), pair("l'autobus", "the bus")]),
        tfSet("pt120-ex2", "A", [
          tf("Il carico trasportato deve essere sistemato in modo da non compromettere la stabilità del veicolo.", "The load must be arranged so as not to compromise the vehicle's stability.", true, "A load must never upset stability."),
          tf("Il carico non deve impedire la visibilità al conducente.", "The load must not obstruct the driver's view.", true, "Keep your view clear."),
          tf("Il numero di persone trasportabili è indicato nella carta di circolazione.", "The number of people that may be carried is shown in the registration document.", true, "That is where the limit is written."),
          tf("Il conducente può trasportare più passeggeri di quelli indicati se il tragitto è breve.", "The driver may carry more passengers than allowed if the trip is short.", false, "The limit applies on every trip."),
          tf("La patente di categoria A1 si può conseguire a 16 anni.", "The A1 licence can be obtained at 16.", true, "A1 starts at 16."),
          tf("La patente di categoria B si può conseguire a 17 anni.", "The B licence can be obtained at 17.", false, "B starts at 18.")
        ]),
        tfSet("pt120-ex3", "B", [
          tf("Con la patente B si possono guidare autoveicoli con massa massima non superiore a 3.500 kg e non più di otto posti oltre al conducente.", "With a B licence you may drive vehicles up to 3,500 kg with no more than eight seats besides the driver's.", true, "That is the B-category limit."),
          tf("La patente di categoria D abilita alla guida di autobus.", "A category D licence allows you to drive buses.", true, "D is the bus category."),
          tf("Un carico sporgente deve essere segnalato in modo adeguato.", "A projecting load must be properly signalled.", true, "Make it visible to others."),
          tf("Il carico può nascondere le luci e la targa se è ben assicurato.", "The load may hide the lights and number plate if it is well secured.", false, "Lights and plate must stay visible."),
          tf("I bambini possono viaggiare in braccio al passeggero anteriore senza sistema di ritenuta.", "Children may travel on the front passenger's lap without a restraint.", false, "An approved restraint is required."),
          tf("Un carico distribuito male può alterare la stabilità e la frenata del veicolo.", "A badly distributed load can alter stability and braking.", true, "Weight distribution matters.")
        ])
      ],
      speakingPhrases: [
        sp("📦", "Il carico deve essere ben fissato.", "eel KAH-ree-ko DEH-veh ES-se-reh ben fees-SAH-to", "The load must be well secured."),
        sp("🪪", "La patente B si prende a diciotto anni.", "la pa-TEN-teh BEE see PREN-deh a dee-CHOT-to AN-nee", "You can get a B licence at eighteen.")
      ]
    }),

    topic({
      id: 121, unit: "p-u6", label: "", difficulty: 5, requires: 120, icon: "🧠",
      title: "Fitness to Drive & Behaviour", arabicTitle: "Condizioni psicofisiche e comportamento",
      desc: "Tiredness, alcohol, medicines, distraction and the habits of a safe, courteous driver.",
      content: [
        { type: "p", text: "The best car and the best knowledge of the rules are useless if the driver is not fit to drive. These questions are mostly common sense — but learn the Italian wording." },
        { type: "h", text: "Fit to Drive?" },
        { type: "examples", items: [
          ex("😴", "La stanchezza riduce l'attenzione.", "la stan-KET-tsa ree-DOO-che lat-ten-TSYO-neh", "Tiredness reduces attention."),
          ex("🍷", "L'alcol rallenta i riflessi.", "LAL-kol ral-LEN-ta ee ree-FLES-see", "Alcohol slows reflexes."),
          ex("💊", "Alcuni farmaci riducono la prontezza.", "al-KOO-nee FAR-ma-chee ree-DOO-ko-no la pron-TET-tsa", "Some medicines reduce alertness."),
          ex("📱", "Il telefono distrae.", "eel te-LEH-fo-no dee-STRAH-eh", "The phone distracts.")
        ]},
        { type: "note", html: "<strong>Coffee does not cure alcohol.</strong> Only time lowers the alcohol level in the blood." },
        { type: "h", text: "Good Habits" },
        { type: "charlist", items: [
          "Take a <strong>break about every two hours</strong> on a long trip; stop and rest if you feel sleepy.",
          "Plan your route before you set off, so you are not distracted on the road.",
          "Stay calm: aggressive driving makes accidents more likely.",
          "Be considerate towards other road users, especially the more vulnerable ones."
        ]}
      ],
      vocabCategories: [
        { name: "Condition", words: [
          vw("😴", "la stanchezza", "la stan-KET-tsa", "tiredness"),
          vw("👀", "l'attenzione", "lat-ten-TSYO-neh", "attention"),
          vw("⚡", "i riflessi", "ee ree-FLES-see", "reflexes"),
          vw("💊", "il farmaco", "eel FAR-ma-ko", "the medicine"),
          vw("⏸️", "la pausa", "la POW-za", "the break")
        ]},
        { name: "Behaviour", words: [
          vw("😠", "aggressivo", "ag-gres-SEE-vo", "aggressive"),
          vw("🙂", "cortese", "kor-TEH-zeh", "courteous"),
          vw("😵", "distratto", "dee-STRAT-to", "distracted")
        ]}
      ],
      exercises: [
        matching("pt121-ex1", [pair("la stanchezza", "tiredness"), pair("l'attenzione", "attention"), pair("i riflessi", "reflexes"), pair("il farmaco", "the medicine"), pair("la pausa", "the break")]),
        tfSet("pt121-ex2", "A", [
          tf("La stanchezza riduce l'attenzione e aumenta i tempi di reazione.", "Tiredness reduces attention and lengthens reaction times.", true, "A tired driver reacts more slowly."),
          tf("Il caffè elimina rapidamente gli effetti dell'alcol.", "Coffee quickly removes the effects of alcohol.", false, "Only time lowers the alcohol level."),
          tf("L'alcol può dare una falsa sensazione di sicurezza.", "Alcohol can give a false sense of security.", true, "It makes people overconfident."),
          tf("Alcuni farmaci possono ridurre la capacità di guida.", "Some medicines can reduce the ability to drive.", true, "Check the leaflet."),
          tf("In caso di sonnolenza è consigliabile fermarsi e riposare.", "If you feel sleepy it is advisable to stop and rest.", true, "Rest is the only real cure."),
          tf("Per combattere la stanchezza basta aprire il finestrino e continuare a guidare.", "To fight tiredness it is enough to open the window and keep driving.", false, "Fresh air does not replace rest.")
        ]),
        tfSet("pt121-ex3", "B", [
          tf("L'alcol restringe il campo visivo del conducente.", "Alcohol narrows the driver's field of vision.", true, "Tunnel vision is a known effect."),
          tf("Durante un lungo viaggio conviene fare pause regolari.", "On a long trip it is wise to take regular breaks.", true, "Roughly every two hours."),
          tf("In un lungo viaggio la guida è più sicura se si evitano le pause per arrivare prima.", "On a long trip driving is safer if you avoid breaks to arrive sooner.", false, "Skipping breaks increases fatigue."),
          tf("Una guida aggressiva aumenta il rischio di incidente.", "Aggressive driving increases the risk of an accident.", true, "Calm driving is safer."),
          tf("Guardare lo smartphone per pochi secondi mentre si guida non riduce l'attenzione.", "Looking at a smartphone for a few seconds while driving does not reduce attention.", false, "Even seconds of distraction are dangerous."),
          tf("Il conducente deve comportarsi con prudenza e rispetto verso gli altri utenti.", "The driver must behave with care and respect towards other road users.", true, "That is a basic duty.")
        ])
      ],
      speakingPhrases: [
        sp("😴", "Se sono stanco mi fermo a riposare.", "seh SO-no STAN-ko mee FER-mo a ree-po-ZAH-reh", "If I'm tired I stop to rest."),
        sp("📵", "Non uso il telefono mentre guido.", "non OO-zo eel te-LEH-fo-no MEN-treh GWEE-do", "I don't use the phone while I drive.")
      ]
    }),

    topic({
      id: 122, unit: "p-u6", label: "", difficulty: 5, requires: 121, icon: "⚖️",
      title: "Insurance & Responsibility", arabicTitle: "Assicurazione e responsabilità",
      desc: "Compulsory insurance, the three kinds of responsibility, and what you owe after an accident.",
      content: [
        { type: "p", text: "Driving carries legal duties. The exam checks that you know what insurance is compulsory and what kinds of responsibility a driver can face." },
        { type: "h", text: "Compulsory Insurance (RCA)" },
        { type: "p", text: "<strong>RCA</strong> (<em>responsabilità civile auto</em>) is compulsory for any vehicle on the road. It covers the damage you cause to <strong>other people</strong> — not the damage to your own vehicle or the injuries of the driver who caused the accident." },
        { type: "h", text: "Three Kinds of Responsibility" },
        { type: "examples", items: [
          ex("💶", "Responsabilità civile", "res-pon-sa-bee-lee-TAH chee-VEE-leh", "Civil: you must compensate the damage you cause."),
          ex("📝", "Responsabilità amministrativa", "res-pon-sa-bee-lee-TAH am-mee-nee-stra-TEE-va", "Administrative: fines, points lost, licence suspended or revoked."),
          ex("🔨", "Responsabilità penale", "res-pon-sa-bee-lee-TAH pe-NAH-leh", "Criminal: for offences that are crimes. It is personal.")
        ]},
        { type: "h", text: "After an Accident" },
        { type: "p", text: "Always stop. If nobody is hurt, drivers can fill in the <strong>CAI</strong> form (<em>constatazione amichevole</em>) together. Someone who lends a vehicle to a person without a licence can be held responsible too." }
      ],
      vocabCategories: [
        { name: "Law", words: [
          vw("🛡️", "l'assicurazione", "las-see-koo-ra-TSYO-neh", "insurance"),
          vw("💥", "il danno", "eel DAN-no", "the damage"),
          vw("💶", "il risarcimento", "eel ree-sar-chee-MEN-to", "the compensation"),
          vw("🧾", "la multa", "la MOOL-ta", "the fine"),
          vw("🔨", "il reato", "eel re-AH-to", "the crime"),
          vw("⏸️", "la sospensione", "la so-spen-SYO-neh", "the suspension")
        ]}
      ],
      exercises: [
        matching("pt122-ex1", [pair("il danno", "the damage"), pair("la multa", "the fine"), pair("il reato", "the crime"), pair("il risarcimento", "the compensation"), pair("la sospensione", "the suspension")]),
        tfSet("pt122-ex2", "A", [
          tf("L'assicurazione per la responsabilità civile auto (RCA) è obbligatoria per circolare.", "Third-party motor insurance (RCA) is compulsory to drive.", true, "No RCA, no road."),
          tf("L'RCA copre i danni causati a terzi dal conducente responsabile.", "RCA covers damage caused to third parties by the responsible driver.", true, "That is exactly its purpose."),
          tf("L'RCA risarcisce sempre anche i danni subiti dal veicolo del conducente responsabile.", "RCA always also pays for damage to the responsible driver's own vehicle.", false, "It covers other people, not your own vehicle."),
          tf("Un veicolo senza assicurazione può circolare solo di giorno.", "An uninsured vehicle may be driven only in daytime.", false, "It may not be driven at all."),
          tf("La responsabilità civile consiste nell'obbligo di risarcire il danno causato.", "Civil responsibility is the obligation to compensate the damage caused.", true, "Civil = compensation."),
          tf("La responsabilità penale è personale.", "Criminal responsibility is personal.", true, "Only the person who committed the offence answers for it.")
        ]),
        tfSet("pt122-ex3", "B", [
          tf("Le sanzioni amministrative comprendono le multe e la sospensione della patente.", "Administrative penalties include fines and licence suspension.", true, "Both are administrative."),
          tf("Il modulo CAI serve a descrivere un incidente senza feriti.", "The CAI form is used to describe an accident without injuries.", true, "It is the agreed accident report."),
          tf("Dopo un incidente con soli danni il conducente non ha l'obbligo di fermarsi.", "After an accident with damage only, the driver has no duty to stop.", false, "You must stop."),
          tf("La guida con patente sospesa è consentita se si è accompagnati.", "Driving with a suspended licence is allowed if accompanied.", false, "Not even if accompanied."),
          tf("Chi causa un danno guidando sotto l'effetto dell'alcol può rispondere anche penalmente.", "Someone who causes damage while drunk may also face criminal responsibility.", true, "Drink-driving can be a crime."),
          tf("Chi presta il proprio veicolo a una persona senza patente non ha alcuna responsabilità.", "Someone who lends their vehicle to an unlicensed person has no responsibility.", false, "The owner can be held responsible too.")
        ])
      ],
      speakingPhrases: [
        sp("🛡️", "L'assicurazione è obbligatoria.", "las-see-koo-ra-TSYO-neh eh ob-blee-ga-TOR-ya", "Insurance is compulsory."),
        sp("🛑", "Dopo un incidente bisogna fermarsi.", "DO-po oon een-chee-DEN-teh bee-ZON-ya fer-MAR-see", "After an accident you must stop.")
      ]
    }),

    /* ---------- two more review sets ---------- */
    {
      track: "patente", id: 123, unit: "p-u5", label: "", type: "checkpoint", difficulty: 4, requires: 118, icon: "🔁",
      title: "Review: Special Roads & Road Users", arabicTitle: "Ripasso: strade speciali e utenti", locked: false,
      desc: "Seven mixed statements on motorways, lights, level crossings, pedestrians and cyclists.",
      content: [{ type: "p", text: "This review completes Unit 5. As in the real exam, the statements mix topics." }],
      vocabCategories: [],
      exercises: [
        tfSet("pt123-ex1", "Mix", [
          tf("In autostrada il conducente non può fermarsi sulla corsia di marcia per riposare.", "On a motorway the driver may not stop in the traffic lane to rest.", true, "Stopping in a lane is forbidden."),
          tf("Davanti a un passaggio a livello con le luci rosse accese si può passare se il treno non si vede.", "At a level crossing with red lights on you may cross if no train is visible.", false, "Red lights mean stop, whether or not you see the train."),
          tf("Nei centri abitati si può suonare il clacson per salutare un amico.", "In built-up areas you may sound the horn to greet a friend.", false, "Only for immediate danger."),
          tf("Il conducente deve lasciare un adeguato spazio laterale quando sorpassa un ciclista.", "A driver must leave enough lateral space when overtaking a cyclist.", true, "Cyclists are vulnerable."),
          tf("Nelle zone a traffico limitato possono circolare tutti i veicoli senza autorizzazione.", "In limited-traffic zones all vehicles may drive without permission.", false, "Only authorised vehicles."),
          tf("I fendinebbia posteriori possono essere usati solo in caso di nebbia o neve.", "Rear fog lights may be used only in fog or snow.", true, "Not in other conditions."),
          tf("Il segnale raffigurato avverte della presenza di una rotatoria.", "The sign shown warns of a roundabout ahead.", false, "A gate-like symbol is a level crossing.", "passaggio-livello")
        ])
      ],
      speakingPhrases: []
    },
    {
      track: "patente", id: 124, unit: "p-u6", label: "", type: "checkpoint", difficulty: 5, requires: 122, icon: "🔁",
      title: "Review: Vehicle, Driver & Law", arabicTitle: "Ripasso: veicolo, conducente e legge", locked: false,
      desc: "Name the dashboard lights, then seven mixed statements on vehicle, driver and law.",
      content: [{ type: "p", text: "This review completes Unit 6. First the dashboard warning lights, then mixed True/False statements." }],
      vocabCategories: [],
      exercises: [
        { id: "pt124-ex1", type: "mcq", title: "Name That Warning Light", instructions: "Choose the correct meaning for each light.", items: [
          mc("spia-olio", ["Livello carburante basso — low fuel", "Pressione olio insufficiente — low oil pressure", "Motore troppo freddo — engine too cold"], 1),
          mc("spia-batteria", ["Problema di ricarica della batteria — battery charging problem", "Porta aperta — door open", "Cinture non allacciate — belts unfastened"], 0),
          mc("spia-freni", ["Fari accesi — lights on", "Airbag disattivato — airbag off", "Anomalia ai freni o freno a mano inserito — brake fault or handbrake on"], 2),
          mc("spia-abs", ["Pneumatici gonfi — tyres inflated", "Anomalia del sistema antibloccaggio — ABS fault", "Cruise control attivo — cruise control on"], 1)
        ]},
        tfSet("pt124-ex2", "Mix", [
          tf("Il conducente può guidare dopo avere assunto farmaci che causano sonnolenza.", "The driver may drive after taking medicines that cause drowsiness.", false, "Drowsiness makes driving dangerous."),
          tf("L'RCA obbligatoria copre i danni che il conducente responsabile causa agli altri.", "Compulsory RCA covers damage the responsible driver causes to others.", true, "That is its purpose."),
          tf("I bambini sotto 1,50 m possono viaggiare senza sistema di ritenuta se il tragitto è breve.", "Children under 1.50 m may travel without a restraint if the trip is short.", false, "A restraint is always required."),
          tf("Il carico di un veicolo deve essere assicurato in modo da non muoversi durante la marcia.", "A vehicle's load must be secured so that it does not move while driving.", true, "Secure loads stay put."),
          tf("Se la spia dei freni è accesa senza il freno a mano inserito conviene far controllare l'impianto frenante.", "If the brake light is on with the handbrake off, have the braking system checked.", true, "It may signal a real brake fault."),
          tf("La patente a punti prevede che il conducente perda punti per alcune infrazioni.", "The points licence means a driver loses points for some offences.", true, "Points are deducted for offences."),
          tf("Pneumatici sgonfi riducono i consumi di carburante.", "Under-inflated tyres reduce fuel consumption.", false, "They increase consumption and wear.")
        ])
      ],
      speakingPhrases: []
    }
  );

  /* ---------- extra sign-recognition questions in the two earlier reviews ---------- */
  byId(110).desc = "Name the signs from Topics 2–6 — warning, prohibition, mandatory and information.";
  byId(110).exercises.push({ id: "pt110-ex2", type: "mcq", title: "Name That Sign — Round 2", instructions: "Choose the correct meaning for each sign.", items: [
    mc("limite-30", ["Velocità minima 30 — minimum 30 km/h", "Limite massimo di 30 km/h — maximum 30 km/h", "Zona residenziale — residential zone"], 1),
    mc("divieto-inversione", ["Divieto di svolta a destra — no right turn", "Obbligo di svolta — turn compulsory", "Divieto di inversione di marcia — no U-turn"], 2),
    mc("obbligo-sinistra", ["Divieto di svolta a sinistra — no left turn", "Direzione obbligatoria a sinistra — turn left only", "Senso unico — one-way street"], 1),
    mc("parcheggio", ["Parcheggio — parking area", "Divieto di sosta — no parking", "Pista ciclabile — cycle path"], 0),
    mc("ospedale", ["Parcheggio — parking", "Distributore — fuel station", "Ospedale — hospital"], 2),
    mc("galleria", ["Sottopasso pedonale — pedestrian underpass", "Galleria — tunnel", "Ponte — bridge"], 1),
    mc("passaggio-livello", ["Strettoia — road narrows", "Lavori — road works", "Passaggio a livello con barriere — level crossing with barriers"], 2),
    mc("rotatoria-avviso", ["Doppia curva — double bend", "Rotatoria (avviso) — roundabout ahead (warning)", "Obbligo di rotatoria — roundabout (mandatory)"], 1)
  ]});
  byId(111).desc = "Recognise the priority signs, road markings and traffic lights from Unit 2.";
  byId(111).exercises.push({ id: "pt111-ex2", type: "mcq", title: "Name That Marking — Round 2", instructions: "Choose the correct meaning for each picture.", items: [
    mc("strisce-blu", ["Stalli di sosta a pagamento — paid parking bays", "Corsia riservata ai bus — bus lane", "Divieto di sosta — no parking"], 0),
    mc("freccia-strada", ["Freccia di direzione — direction arrow on the lane", "Divieto di sorpasso — no overtaking", "Zona pedonale — pedestrian zone"], 0),
    mc("attraversamento-ciclabile", ["Strisce pedonali — pedestrian crossing", "Attraversamento ciclabile — cycle crossing", "Linea di arresto — stop line"], 1),
    mc("semaforo-freccia-verde", ["Freccia verde — go in the direction of the arrow", "Semaforo giallo — amber", "Semaforo spento — light off"], 0)
  ]});

  /* ---------- fix the chain and the order, and number the topics ---------- */

  /* ---------- a short welcome before Topic 1 ---------- */
  units.splice(units.findIndex(u => u.id === "p-u1"), 0,
    { id: "p-u0", track: "patente", title: "Welcome", desc: "A two-minute tour: what the exam is like and how each topic works." });
  chapters.push(topic({
    id: 99, unit: "p-u0", label: "Start here", difficulty: 1, requires: null, icon: "👋", noExam: true,
    title: "How This Course Works", arabicTitle: "Benvenuto!",
    desc: "A two-minute tour: what the exam is like, how each topic works, and a first try at the real Vero/Falso format.",
    content: [
      { type: "p", text: "Welcome! This course prepares you for the <strong>Italian driving theory exam</strong> (<em>esame di teoria</em>) for a car licence, <strong>Patente B</strong>. You don't need to know any Italian to start." },
      { type: "h", text: "What the Exam Is Like" },
      { type: "charlist", items: [
        "📝 <strong>30 statements</strong> — each one is <strong>Vero</strong> (True) or <strong>Falso</strong> (False).",
        "⏱️ <strong>20 minutes</strong> on the clock.",
        "❌ You can get <strong>at most 3 wrong</strong> and still pass.",
        "🇮🇹 The statements are <strong>in Italian</strong>. That is why every rule here comes with the key Italian words — and every statement has an English translation underneath."
      ]},
      { type: "note", html: "<strong>Check the latest rules.</strong> These figures are the Patente B format at the time this course was written. Exam details and traffic law change from time to time — always confirm with the Motorizzazione or a driving school. This app is an independent study aid, not an official product." },
      { type: "h", text: "How Each Topic Works" },
      { type: "charlist", items: [
        "📖 <strong>Lesson screens</strong> — the rule in plain English, with the Italian words you will meet in the questions. Tap 🔊 to hear any word.",
        "🔤 <strong>Words</strong> — flip-cards for the vocabulary.",
        "✏️ <strong>Practice</strong> — Vero/Falso statements just like the exam, with an explanation after every answer.",
        "🎤 <strong>Speaking</strong> — say the key phrases out loud (optional)."
      ]},
      { type: "p", text: "The top of every screen tells you what kind of screen it is (<em>Lesson, Words, Practice…</em>) and how far through the topic you are." },
      { type: "p", text: "<strong>Your path:</strong> <strong>20 topics</strong> in 6 units, with a short <strong>review</strong> after each unit. When you are scoring well, take the <strong>Mock Exam</strong> from the Home screen: 30 statements, 20 minutes, just like the real thing." }
    ],
    vocabCategories: [],
    exercises: [
      tfSet("pt99-ex1", "Try It", [
        tf("In Italia si guida a sinistra.", "In Italy you drive on the left.", false, "Italy drives on the RIGHT. This is how every practice screen works: read the statement, choose Vero or Falso, then check to see why."),
        tf("Il segnale raffigurato obbliga a fermarsi.", "The sign shown obliges you to stop.", true, "A red octagon is the STOP sign — you must stop. Many exam statements come with a picture like this.", "stop"),
        tf("Con la luce rossa del semaforo si può passare.", "On a red traffic light you may go.", false, "Red means stop. Tap the speaker to hear Italian read aloud; the translation is under each statement.", "semaforo-rosso")
      ])
    ],
    speakingPhrases: []
  }));
  byId(99).exercises[0].title = "Try It — Three Practice Statements";
  byId(99).exercises[0].instructions = "This is exactly how the exam works. Tap Vero or Falso for each statement, then tap Check my answers to see the explanation. Tap the speaker to hear the Italian.";
  byId(100).requires = 99;
  byId(110).requires = 114;
  byId(113).requires = 103;
  const ORDER = [99, 100, 101, 102, 103, 113, 114, 110, 104, 105, 111, 106, 107, 112, 108, 109, 115, 116, 117, 118, 123, 119, 120, 121, 122, 124];
  const patente = ORDER.map(byId);
  const rest = chapters.filter(c => c.track !== "patente");
  chapters.length = 0;
  rest.concat(patente).forEach(c => chapters.push(c));
  let topicNo = 0, reviewNo = 0;
  patente.forEach(c => { if (c.id === 99) return; c.label = c.type === "checkpoint" ? `Review ${++reviewNo}` : `Topic ${++topicNo}`; });
  byId(100).content.forEach(b => { if (b.type === "note" && /see Topic 7/.test(b.html)) b.html = b.html.replace("see Topic 7", "see Topic 9"); });
})();
