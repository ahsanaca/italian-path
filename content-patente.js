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
      desc: "How the theory exam works, which side you drive on, and the words for the parts of a road.",
      content: [
        { type: "p", text: "The Italian theory exam (<em>esame di teoria</em>) is taken in Italian: you read a short statement and answer <strong>Vero</strong> (true) or <strong>Falso</strong> (false). This track teaches each rule in English, introduces the Italian words you will meet in the questions, then drills you with statements worded the way the real test words them." },
        { type: "h", text: "How the Real Exam Works" },
        { type: "examples", items: [
          ex("📝", "30 affermazioni", "tren-ta af-fer-ma-TSYO-nee", "30 statements"),
          ex("⏱️", "20 minuti", "VEN-tee mee-NOO-tee", "20 minutes"),
          ex("❌", "massimo 3 errori", "MAS-see-mo tray er-ROH-ree", "at most 3 errors")
        ]},
        { type: "note", html: "<strong>Check the latest rules.</strong> These figures are the Patente B format at the time this course was written. Exam details and traffic law change from time to time — always confirm with the Motorizzazione or a driving school. This app is an independent study aid, not an official product." },
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
})();
