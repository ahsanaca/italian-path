/* =====================================================================
   ITALIAN ACADEMY — app config + content data.
   This file must load BEFORE voice-module.js and engine.js — it sets the
   window.APP_* globals they read, and defines units/tracks/chapters, the
   same generic shapes the shared engine already knows how to render.
===================================================================== */

window.APP_ID = "italianAcademy";
window.APP_LANGUAGE_NAME = "Italian";
window.APP_VOICE_LANG = "it-IT";
// No window.APP_TEXT_DIRECTION — Italian is LTR, which is the default.
// No window.firebaseConfig — this trial runs local-progress-only, no
// account/sync screen, nothing to configure.

window.APP_BANNER = {
  line1: "🌱 Free trial — send feedback!",
  line2: "This is an early trial version of Italian Academy, built to get feedback before a full launch. Progress is saved on this device only for now. Found a mistake, or have thoughts on what's missing? Please tell us — that's exactly what this trial is for."
};

const units = [
  { id:"u0", track:"standard", title:"Unit 0 — Foundations", desc:"Pronunciation and the alphabet, before grammar begins." },
  { id:"u1", track:"standard", title:"Unit 1 — Greetings & Introductions", desc:"Say hello, introduce yourself, and meet the verb essere." },
  { id:"u2", track:"standard", title:"Unit 2 — Articles, Gender & Number", desc:"Every noun has a gender — learn to spot it and match it." },
  { id:"u3", track:"standard", title:"Unit 3 — Avere & Possession", desc:"The verb \"to have\", and basic adjective agreement." },
  { id:"u4", track:"standard", title:"Unit 4 — Present-Tense Verbs", desc:"Regular -are/-ere/-ire verbs, and building real sentences." },
  { id:"u5", track:"standard", title:"Unit 5 — Numbers, Colors & Questions", desc:"Counting, describing, and asking who/what/where/when/why." },
  { id:"u6", track:"standard", title:"Unit 6 — Getting Around", desc:"Where you're going, and the preposition rules that get you there." },
  { id:"u7", track:"standard", title:"Unit 7 — Describing People", desc:"Possessive adjectives, and vocabulary for appearance and personality." },
  { id:"u8", track:"standard", title:"Unit 8 — Food & Ordering", desc:"Restaurant vocabulary, and the polite way to ask for what you want." },
  { id:"u9", track:"standard", title:"Unit 9 — Time & Daily Routine", desc:"Telling time, days of the week, and a first taste of reflexive verbs." },
  { id:"u10", track:"standard", title:"Unit 10 — Talking About the Past", desc:"The passato prossimo — how to say what already happened." },
  { id:"u11", track:"standard", title:"Unit 11 — Weather & Seasons", desc:"Small talk about the weather, and the four seasons." },
  { id:"u12", track:"standard", title:"Unit 12 — Shopping & Clothes", desc:"Asking prices, sizes, and talking about what you're wearing." },
  { id:"u13", track:"standard", title:"Unit 13 — Can, Must & Want", desc:"The modal verbs potere, dovere, volere — and how they pair with any infinitive." },
  { id:"u14", track:"standard", title:"Unit 14 — The Other Past Tense", desc:"L'imperfetto — for habits and background, alongside the passato prossimo." },
  { id:"u15", track:"standard", title:"Unit 15 — Reflexive Verbs", desc:"The full pattern behind mi sveglio, mi alzo, and more daily-routine verbs." },
  { id:"u16", track:"standard", title:"Unit 16 — Comparisons", desc:"Saying \"more than\", \"less than\", and \"as...as\"." },
  { id:"u17", track:"standard", title:"Unit 17 — Asking for Directions", desc:"Finding your way — left, right, straight ahead, near and far." },
  { id:"u18", track:"standard", title:"Unit 18 — Family & Hobbies", desc:"Talking about relatives and what you like to do in your free time." },
  { id:"u19", track:"standard", title:"Unit 19 — Health & Body", desc:"Body parts, saying what hurts, and basic health phrases." },
  { id:"u20", track:"standard", title:"Unit 20 — Coming Soon", desc:"More chapters are on the way." }
];

const tracks = [
  { id:"standard", icon:"🇮🇹", title:"Italian", desc:"A single track from the alphabet through everyday conversation — standard Italian, step by step." }
];

const chapters = [
  {
    id: 0,
    unit: "u0",
    label: "Foundations",
    difficulty: 1,
    requires: null,
    icon: "🔤",
    title: "Italian Pronunciation & the Alphabet",
    arabicTitle: "Pronuncia e Alfabeto",
    desc: "Learn to read Italian aloud — it's almost entirely phonetic once you know the rules.",
    locked: false,

    content: [
      { type:"p", text:"Italian spelling is remarkably consistent — once you learn a small set of rules, you can pronounce almost any word correctly just by reading it. This chapter covers those rules before any grammar starts." },
      { type:"h", text:"The Alphabet" },
      { type:"p", text:"Italian uses 21 of the 26 Latin letters natively (j, k, w, x, y appear only in foreign loanwords). Vowels are pure and consistent — a, e, i, o, u are always pronounced the same way, unlike English." },
      { type:"h", text:"The Tricky Consonants: C and G" },
      { type:"p", text:"C and G each have a hard sound and a soft sound, depending on the letter that follows. Before a, o, u → hard (like English \"k\"/\"g\"). Before e, i → soft (like English \"ch\"/\"j\"). To keep the hard sound before e or i, Italian inserts an h: che, chi, ghe, ghi." },
      { type:"note", html:"<strong>Quick reference:</strong> ca/co/cu = \"k\" sound · ce/ci = \"ch\" sound · che/chi = \"k\" sound again · ga/go/gu = hard \"g\" · ge/gi = \"j\" sound · ghe/ghi = hard \"g\" again." },
      { type:"h", text:"Special Combinations" },
      { type:"p", text:"A few letter combinations make a single sound: gli sounds like the \"lli\" in \"million\"; gn sounds like the \"ny\" in \"canyon\"; sc before e/i sounds like \"sh\", but before a, o, u sounds like \"sk\"." },
      { type:"h", text:"Stress & Accents" },
      { type:"p", text:"Most Italian words stress the second-to-last syllable. When the stress falls on the final vowel instead, it's marked with an accent: città (city), perché (why/because), caffè (coffee). Getting stress right matters — it can change a word's meaning." }
    ],

    vocabCategories: [
      { name:"Sounds to Practice", words:[
        {icon:"", ar:"casa", translit:"KAH-za", en:"house (hard c)"},
        {icon:"", ar:"cena", translit:"CHEH-na", en:"dinner (soft c)"},
        {icon:"", ar:"gatto", translit:"GAHT-toh", en:"cat (hard g)"},
        {icon:"", ar:"gelato", translit:"jeh-LAH-toh", en:"ice cream (soft g)"},
        {icon:"", ar:"gli", translit:"lyee", en:"the, masc. plural (gli sound)"},
        {icon:"", ar:"gnocchi", translit:"NYOHK-kee", en:"potato dumplings (gn sound)"},
        {icon:"", ar:"sciarpa", translit:"SHAR-pa", en:"scarf (sc+i sound)"},
        {icon:"", ar:"perché", translit:"pehr-KEH", en:"why / because (accented stress)"}
      ]}
    ],

    exercises: [
      {
        id:"it-a-ex1", type:"mcq", title:"Exercise 1 — Hard or Soft?",
        instructions:"Which sound does the underlined letter make?",
        items:[
          { promptText:"In \"cena\" (dinner), the C sounds like...", options:["k","ch","g"], correct:1 },
          { promptText:"In \"casa\" (house), the C sounds like...", options:["k","ch","sh"], correct:0 },
          { promptText:"In \"gelato\", the G sounds like...", options:["hard g","j","gh"], correct:1 },
          { promptText:"Which spelling keeps a hard \"k\" sound before i?", options:["ci","chi","ce"], correct:1 }
        ]
      },
      {
        id:"it-a-ex2", type:"matching", title:"Exercise 2 — Match the Sound",
        instructions:"Match the combination to its sound.",
        pairs:[
          { left:"gli", right:"\"lli\" as in million" },
          { left:"gn", right:"\"ny\" as in canyon" },
          { left:"sci", right:"\"sh\" sound" },
          { left:"che", right:"\"k\" sound" }
        ]
      },
      {
        id:"it-a-ex3", type:"translate", title:"Exercise 3 — What Does It Mean?",
        instructions:"Translate these words you just practiced.",
        items:[
          { icon:"🏠", ar:"casa", keywords:["house","home"] },
          { icon:"🍨", ar:"gelato", keywords:["ice cream","icecream"] },
          { icon:"🐱", ar:"gatto", keywords:["cat"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"", ar:"casa", plain:"casa", translit:"KAH-za", meaning:"house" },
      { icon:"", ar:"cena", plain:"cena", translit:"CHEH-na", meaning:"dinner" },
      { icon:"", ar:"gelato", plain:"gelato", translit:"jeh-LAH-toh", meaning:"ice cream" },
      { icon:"", ar:"perché", plain:"perché", translit:"pehr-KEH", meaning:"why / because" }
    ]
  },

  {
    id: 1,
    unit: "u1",
    label: "Chapter 1",
    difficulty: 1,
    requires: 0,
    icon: "👋",
    title: "Greetings & Introductions",
    arabicTitle: "Saluti e Presentazioni",
    desc: "Say hello, introduce yourself, and meet the verb essere (to be).",
    locked: false,

    content: [
      { type:"p", text:"Your very first Italian words — the greetings people actually use every day. Start here, then we'll learn the grammar behind them." },
      { type:"h", text:"Basic Greetings" },
      { type:"examples", items:[
        { icon:"👋", ar:"Ciao!", translit:"chow", meaning:"Hi! / Bye! (informal, any time)" },
        { icon:"☀️", ar:"Buongiorno", translit:"bwohn-JOR-no", meaning:"Good morning / Good day (formal)" },
        { icon:"🌆", ar:"Buonasera", translit:"bwoh-na-SEH-ra", meaning:"Good evening" },
        { icon:"🌙", ar:"Buonanotte", translit:"bwoh-na-NOHT-teh", meaning:"Good night" }
      ]},
      { type:"note", html:"<strong>Formal vs. informal:</strong> Ciao is only for friends, family, and people your own age. With someone you don't know well — especially older people or in business — use Buongiorno/Buonasera instead." },
      { type:"h", text:"Essere — Present Tense" },
      { type:"p", text:"Now for the grammar behind introducing yourself: essere (\"to be\") — the most useful verb in the language, and one you'll use constantly." },
      { type:"pattern", ar:"io sono · tu sei · lui/lei è", translit:"EE-oh SO-no · too SEH-ee · loo-EE / LEH-ee EH", desc:"I am · you are (informal) · he/she is — the three forms you'll use most when meeting someone." },
      { type:"p", text:"Notice Italian often drops the subject pronoun (io, tu, lui/lei) once the verb ending makes it clear who's being talked about — \"Sono Marco\" (I'm Marco) is completely natural on its own." }
    ],

    vocabCategories: [
      { name:"Meeting Someone", words:[
        {icon:"", ar:"Come ti chiami?", translit:"KOH-meh tee kee-AH-mee", en:"What's your name? (informal)"},
        {icon:"", ar:"Mi chiamo...", translit:"mee kee-AH-mo", en:"My name is..."},
        {icon:"", ar:"Piacere", translit:"pya-CHEH-reh", en:"Nice to meet you"},
        {icon:"", ar:"Come stai?", translit:"KOH-meh sty", en:"How are you? (informal)"},
        {icon:"", ar:"Sto bene, grazie", translit:"stoh BEH-neh GRAH-tsee-eh", en:"I'm well, thank you"},
        {icon:"", ar:"E tu?", translit:"eh too", en:"And you?"},
        {icon:"", ar:"Di dove sei?", translit:"dee DOH-veh sey", en:"Where are you from?"},
        {icon:"", ar:"Sono di...", translit:"SOH-no dee", en:"I'm from..."}
      ]}
    ],

    exercises: [
      {
        id:"it1-ex1", type:"mcq", title:"Exercise 1 — Essere & Greetings",
        instructions:"Choose the correct answer.",
        items:[
          { promptText:"\"I am\" in Italian is...", options:["tu sei","io sono","lui è"], correct:1 },
          { promptText:"Which greeting is only for friends/family?", options:["Buongiorno","Ciao","Buonasera"], correct:1 },
          { promptText:"\"Piacere\" means...", options:["Please","Nice to meet you","Goodbye"], correct:1 },
          { promptText:"\"Come ti chiami?\" is asking...", options:["How are you?","What's your name?","Where are you from?"], correct:1 }
        ]
      },
      {
        id:"it1-ex2", type:"matching", title:"Exercise 2 — Match the Phrase",
        instructions:"Tap a phrase, then tap its meaning.",
        pairs:[
          { left:"Ciao", right:"Hi / Bye" },
          { left:"Sto bene, grazie", right:"I'm well, thank you" },
          { left:"Di dove sei?", right:"Where are you from?" },
          { left:"Mi chiamo...", right:"My name is..." }
        ]
      },
      {
        id:"it1-ex3", type:"translate", title:"Exercise 3 — Translate",
        instructions:"Type the English meaning.",
        items:[
          { icon:"👋", ar:"Buongiorno, come stai?", keywords:["good morning","how are you"] },
          { icon:"🙂", ar:"Sono di Roma", keywords:["rome"] },
          { icon:"🤝", ar:"Piacere di conoscerti", keywords:["nice to meet you"] }
        ]
      },
      {
        id:"it1-ex4", type:"sentence", title:"Exercise 4 — Build the Sentence",
        instructions:"Tap the words in the right order.",
        items:[
          { words:["sono","Marco","Io"], answer:["Io","sono","Marco"] },
          { words:["stai?","Come"], answer:["Come","stai?"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"👋", ar:"Ciao, come stai?", plain:"Ciao, come stai?", translit:"chow KOH-meh sty", meaning:"Hi, how are you?" },
      { icon:"🙂", ar:"Mi chiamo Sara", plain:"Mi chiamo Sara", translit:"mee kee-AH-mo SAH-ra", meaning:"My name is Sara" },
      { icon:"🤝", ar:"Piacere di conoscerti", plain:"Piacere di conoscerti", translit:"pya-CHEH-reh dee ko-NO-sher-tee", meaning:"Nice to meet you" },
      { icon:"🌆", ar:"Buonasera a tutti", plain:"Buonasera a tutti", translit:"bwoh-na-SEH-ra ah TOOT-tee", meaning:"Good evening everyone" }
    ]
  },

  {
    id: 2,
    unit: "u2",
    label: "Chapter 2",
    difficulty: 2,
    requires: 1,
    icon: "📘",
    title: "Articles, Gender & Number",
    arabicTitle: "Articoli, Genere e Numero",
    desc: "Every Italian noun has a gender — learn to spot it and match the right article.",
    locked: false,

    content: [
      { type:"p", text:"Every Italian noun is either masculine or feminine — there's no neutral. Luckily, the ending usually tells you which: most words ending in -o are masculine, most ending in -a are feminine." },
      { type:"h", text:"Definite Articles (\"the\")" },
      { type:"pattern", ar:"il libro · la casa · l'amico · lo studente", translit:"eel LEE-bro · la KAH-za · la-MEE-ko · lo stoo-DEHN-teh", desc:"il (masc. before a consonant) · la (fem. before a consonant) · l' (before any vowel) · lo (masc. before s+consonant or z)." },
      { type:"h", text:"Plurals" },
      { type:"p", text:"To make a noun plural, change the final vowel: -o becomes -i, -a becomes -e. Words ending in -e (either gender) become -i in the plural." },
      { type:"examples", items:[
        { icon:"📕", ar:"il libro → i libri", translit:"eel LEE-bro → ee LEE-bree", meaning:"the book → the books" },
        { icon:"🏠", ar:"la casa → le case", translit:"la KAH-za → leh KAH-zeh", meaning:"the house → the houses" },
        { icon:"🔑", ar:"la chiave → le chiavi", translit:"la kee-AH-veh → leh kee-AH-vee", meaning:"the key → the keys" }
      ]},
      { type:"note", html:"<strong>Indefinite articles (\"a/an\")</strong> follow the same gender logic: un libro (a book), una casa (a house), un amico (a friend, before a vowel), uno studente (before s+consonant)." }
    ],

    vocabCategories: [
      { name:"Common Nouns", words:[
        {icon:"📕", ar:"il libro", translit:"eel LEE-bro", en:"the book (m.)"},
        {icon:"🏠", ar:"la casa", translit:"la KAH-za", en:"the house (f.)"},
        {icon:"🍞", ar:"il pane", translit:"eel PAH-neh", en:"the bread (m.)"},
        {icon:"🚗", ar:"la macchina", translit:"la MAHK-kee-na", en:"the car (f.)"},
        {icon:"🐕", ar:"il cane", translit:"eel KAH-neh", en:"the dog (m.)"},
        {icon:"👨", ar:"l'amico", translit:"la-MEE-ko", en:"the friend (male)"},
        {icon:"👩", ar:"l'amica", translit:"la-MEE-ka", en:"the friend (female)"},
        {icon:"🎓", ar:"lo studente", translit:"lo stoo-DEHN-teh", en:"the student (male)"}
      ]}
    ],

    exercises: [
      {
        id:"it2-ex1", type:"mcq", title:"Exercise 1 — Pick the Article",
        instructions:"Choose the correct article.",
        items:[
          { promptText:"___ libro (the book)", options:["il","la","lo"], correct:0 },
          { promptText:"___ casa (the house)", options:["il","la","l'"], correct:1 },
          { promptText:"___ amico (the friend, before a vowel)", options:["il","la","l'"], correct:2 },
          { promptText:"What's the plural of \"la casa\"?", options:["i casi","le case","le casi"], correct:1 }
        ]
      },
      {
        id:"it2-ex2", type:"matching", title:"Exercise 2 — Singular → Plural",
        instructions:"Match the singular noun to its plural.",
        pairs:[
          { left:"il libro", right:"i libri" },
          { left:"la casa", right:"le case" },
          { left:"la chiave", right:"le chiavi" },
          { left:"il cane", right:"i cani" }
        ]
      },
      {
        id:"it2-ex3", type:"translate", title:"Exercise 3 — Translate",
        instructions:"Type the English meaning.",
        items:[
          { icon:"📕", ar:"il libro", keywords:["book"] },
          { icon:"🚗", ar:"la macchina", keywords:["car"] },
          { icon:"👩", ar:"l'amica", keywords:["friend"] }
        ]
      },
      {
        id:"it2-ex4", type:"sentence", title:"Exercise 4 — Build the Phrase",
        instructions:"Tap the words in the right order.",
        items:[
          { words:["cane", "il", "mio"], answer:["il","mio","cane"] },
          { words:["libri", "i", "sono qui"], answer:["i","libri","sono qui"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"📕", ar:"il libro", plain:"il libro", translit:"eel LEE-bro", meaning:"the book" },
      { icon:"🏠", ar:"la casa", plain:"la casa", translit:"la KAH-za", meaning:"the house" },
      { icon:"👨", ar:"l'amico", plain:"l'amico", translit:"la-MEE-ko", meaning:"the friend" },
      { icon:"🐕", ar:"i cani", plain:"i cani", translit:"ee KAH-nee", meaning:"the dogs" }
    ]
  },

  {
    id: 3,
    unit: "u3",
    label: "Chapter 3",
    difficulty: 2,
    requires: 2,
    icon: "🤲",
    title: "Avere & Possession",
    arabicTitle: "Avere e il Possesso",
    desc: "The verb \"to have\", plus how adjectives agree with the noun they describe.",
    locked: false,

    content: [
      { type:"p", text:"Avere (\"to have\") is the second essential verb — used for possession, age, and a handful of expressions where English uses \"to be\" instead." },
      { type:"h", text:"Avere — Present Tense" },
      { type:"pattern", ar:"io ho · tu hai · lui/lei ha", translit:"EE-oh oh · too eye · loo-EE / LEH-ee ah", desc:"I have · you have (informal) · he/she has. The h is always silent." },
      { type:"note", html:"<strong>Age uses avere, not essere:</strong> \"Ho venticinque anni\" literally means \"I have twenty-five years\" — that's simply how Italian says \"I am 25.\"" },
      { type:"h", text:"Adjective Agreement" },
      { type:"p", text:"Italian adjectives change to match the gender and number of the noun they describe. Adjectives ending in -o have four forms (-o/-a/-i/-e); adjectives ending in -e only change for number (-e/-i), not gender." },
      { type:"examples", items:[
        { icon:"📕", ar:"un libro piccolo", translit:"oon LEE-bro PEEK-ko-lo", meaning:"a small book (masc.)" },
        { icon:"🏠", ar:"una casa piccola", translit:"OO-na KAH-za PEEK-ko-la", meaning:"a small house (fem.)" },
        { icon:"🚗", ar:"una macchina grande", translit:"OO-na MAHK-kee-na GRAHN-deh", meaning:"a big car (-e adjective, unchanged for gender)" }
      ]}
    ],

    vocabCategories: [
      { name:"Family & Possessions", words:[
        {icon:"👨‍👩‍👧", ar:"la famiglia", translit:"la fa-MEE-lya", en:"the family"},
        {icon:"👦", ar:"il fratello", translit:"eel fra-TEHL-lo", en:"the brother"},
        {icon:"👧", ar:"la sorella", translit:"la so-REHL-la", en:"the sister"},
        {icon:"👴", ar:"il nonno", translit:"eel NOHN-no", en:"the grandfather"},
        {icon:"🔑", ar:"le chiavi", translit:"leh kee-AH-vee", en:"the keys"},
        {icon:"📱", ar:"il telefono", translit:"eel teh-LEH-fo-no", en:"the phone"},
        {icon:"✨", ar:"grande", translit:"GRAHN-deh", en:"big"},
        {icon:"🤏", ar:"piccolo/a", translit:"PEEK-ko-lo/la", en:"small"}
      ]}
    ],

    exercises: [
      {
        id:"it3-ex1", type:"mcq", title:"Exercise 1 — Avere & Adjectives",
        instructions:"Choose the correct answer.",
        items:[
          { promptText:"\"I have\" in Italian is...", options:["io sono","io ho","io hai"], correct:1 },
          { promptText:"To say your age, Italian uses...", options:["essere","avere","neither"], correct:1 },
          { promptText:"\"a small house\" (casa is feminine) is...", options:["un casa piccolo","una casa piccola","una casa piccolo"], correct:1 },
          { promptText:"\"grande\" (big) changes for...", options:["gender only","number only","both gender and number"], correct:1 }
        ]
      },
      {
        id:"it3-ex2", type:"matching", title:"Exercise 2 — Match the Family Word",
        instructions:"Tap a word, then tap its meaning.",
        pairs:[
          { left:"il fratello", right:"the brother" },
          { left:"la sorella", right:"the sister" },
          { left:"il nonno", right:"the grandfather" },
          { left:"la famiglia", right:"the family" }
        ]
      },
      {
        id:"it3-ex3", type:"translate", title:"Exercise 3 — Translate",
        instructions:"Type the English meaning.",
        items:[
          { icon:"🤲", ar:"Ho un fratello", keywords:["brother"] },
          { icon:"🔑", ar:"Ho le chiavi", keywords:["keys"] },
          { icon:"🏠", ar:"una casa grande", keywords:["big house","house"] }
        ]
      },
      {
        id:"it3-ex4", type:"sentence", title:"Exercise 4 — Build the Sentence",
        instructions:"Tap the words in the right order.",
        items:[
          { words:["un","Ho","fratello"], answer:["Ho","un","fratello"] },
          { words:["piccola", "casa", "una", "Ho"], answer:["Ho","una","casa","piccola"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"🤲", ar:"Ho un fratello e una sorella", plain:"Ho un fratello e una sorella", translit:"oh oon fra-TEHL-lo eh OO-na so-REHL-la", meaning:"I have a brother and a sister" },
      { icon:"🎂", ar:"Ho venticinque anni", plain:"Ho venticinque anni", translit:"oh vehn-tee-CHEEN-kweh AHN-nee", meaning:"I am 25 years old" },
      { icon:"🏠", ar:"La mia casa è piccola", plain:"La mia casa è piccola", translit:"la MEE-ah KAH-za eh PEEK-ko-la", meaning:"My house is small" },
      { icon:"📱", ar:"Ho il telefono", plain:"Ho il telefono", translit:"oh eel teh-LEH-fo-no", meaning:"I have the phone" }
    ]
  },

  {
    id: 4,
    unit: "u4",
    label: "Chapter 4",
    difficulty: 3,
    requires: 3,
    icon: "🗣️",
    title: "Present-Tense Verbs",
    arabicTitle: "I Verbi al Presente",
    desc: "The three regular verb families — -are, -ere, -ire — and how to build real sentences with them.",
    locked: false,

    content: [
      { type:"p", text:"Nearly every Italian verb belongs to one of three families, named after their infinitive ending: -are, -ere, or -ire. Learn the pattern once, and you can conjugate hundreds of verbs." },
      { type:"h", text:"-are verbs: parlare (to speak)" },
      { type:"pattern", ar:"io parlo · tu parli · lui/lei parla", translit:"PAR-lo · PAR-lee · PAR-la", desc:"Drop -are, add -o / -i / -a for io / tu / lui-lei." },
      { type:"h", text:"-ere verbs: scrivere (to write)" },
      { type:"pattern", ar:"io scrivo · tu scrivi · lui/lei scrive", translit:"SKREE-vo · SKREE-vee · SKREE-veh", desc:"Drop -ere, add -o / -i / -e." },
      { type:"h", text:"-ire verbs: dormire (to sleep)" },
      { type:"pattern", ar:"io dormo · tu dormi · lui/lei dorme", translit:"DOR-mo · DOR-mee · DOR-meh", desc:"Drop -ire, add -o / -i / -e — same endings as -ere verbs." },
      { type:"note", html:"<strong>Pattern to notice:</strong> the \"io\" form always ends in -o, and the \"tu\" form always ends in -i, no matter which family the verb belongs to. That alone gets you a long way." }
    ],

    vocabCategories: [
      { name:"Everyday Verbs", words:[
        {icon:"🗣️", ar:"parlare", translit:"par-LAH-reh", en:"to speak"},
        {icon:"✍️", ar:"scrivere", translit:"skree-VEH-reh", en:"to write"},
        {icon:"😴", ar:"dormire", translit:"dor-MEE-reh", en:"to sleep"},
        {icon:"🍝", ar:"mangiare", translit:"man-JAH-reh", en:"to eat"},
        {icon:"📖", ar:"leggere", translit:"LEHD-jeh-reh", en:"to read"},
        {icon:"🎧", ar:"sentire", translit:"sehn-TEE-reh", en:"to hear / feel"},
        {icon:"🇮🇹", ar:"l'italiano", translit:"lee-ta-LYAH-no", en:"Italian (the language)"},
        {icon:"📧", ar:"l'email", translit:"lee-MEH-eel", en:"the email"}
      ]}
    ],

    exercises: [
      {
        id:"it4-ex1", type:"mcq", title:"Exercise 1 — Conjugate",
        instructions:"Choose the correct verb form.",
        items:[
          { promptText:"Io ___ italiano (I speak Italian).", options:["parlo","parli","parla"], correct:0 },
          { promptText:"Tu ___ un'email (you write an email).", options:["scrivo","scrivi","scrive"], correct:1 },
          { promptText:"Lei ___ molto (she sleeps a lot).", options:["dormo","dormi","dorme"], correct:2 },
          { promptText:"Which ending marks the \"io\" (I) form, across all three families?", options:["-o","-i","-e"], correct:0 }
        ]
      },
      {
        id:"it4-ex2", type:"matching", title:"Exercise 2 — Match the Verb",
        instructions:"Tap a verb, then tap its meaning.",
        pairs:[
          { left:"parlare", right:"to speak" },
          { left:"scrivere", right:"to write" },
          { left:"dormire", right:"to sleep" },
          { left:"mangiare", right:"to eat" }
        ]
      },
      {
        id:"it4-ex3", type:"translate", title:"Exercise 3 — Translate",
        instructions:"Type the English meaning.",
        items:[
          { icon:"🗣️", ar:"Io parlo italiano", keywords:["speak italian","italian"] },
          { icon:"🍝", ar:"Lui mangia la pasta", keywords:["eat","pasta"] },
          { icon:"📖", ar:"Tu leggi un libro", keywords:["read","book"] }
        ]
      },
      {
        id:"it4-ex4", type:"sentence", title:"Exercise 4 — Build the Sentence",
        instructions:"Tap the words in the right order.",
        items:[
          { words:["italiano","parlo","Io"], answer:["Io","parlo","italiano"] },
          { words:["un'email","Lei","scrive"], answer:["Lei","scrive","un'email"] }
        ]
      },
      {
        id:"it4-ex5", type:"creative", title:"Exercise 5 — Write Your Own",
        instructions:"Write one true sentence about yourself using any verb from this chapter.",
        items:[
          { prompt:"Example pattern: Io + verb + something. (\"Io parlo inglese\" — I speak English.)" }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"🗣️", ar:"Io parlo un po' di italiano", plain:"Io parlo un po' di italiano", translit:"EE-oh PAR-lo oon poh dee ee-ta-LYAH-no", meaning:"I speak a little Italian" },
      { icon:"🍝", ar:"Lui mangia la pasta", plain:"Lui mangia la pasta", translit:"LOO-ee MAN-ja la PAH-sta", meaning:"He eats pasta" },
      { icon:"📖", ar:"Tu leggi molto", plain:"Tu leggi molto", translit:"too LEHD-jee MOHL-to", meaning:"You read a lot" },
      { icon:"😴", ar:"Dormo otto ore", plain:"Dormo otto ore", translit:"DOR-mo OHT-toh OH-reh", meaning:"I sleep eight hours" }
    ]
  },

  {
    id: 5,
    unit: "u5",
    label: "Chapter 5",
    difficulty: 3,
    requires: 4,
    icon: "🔢",
    title: "Numbers, Colors & Questions",
    arabicTitle: "Numeri, Colori e Domande",
    desc: "Count to ten, describe things with colors, and ask who/what/where/when/why.",
    locked: false,

    content: [
      { type:"h", text:"Numbers 1–10" },
      { type:"pattern", ar:"uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci", translit:"OO-no, DOO-eh, treh, KWAHT-tro, CHEEN-kweh, seh-ee, SEHT-teh, OHT-toh, NOH-veh, dee-EH-chee", desc:"Worth memorizing solidly — you'll use these constantly for prices, time, and age." },
      { type:"h", text:"Colors" },
      { type:"p", text:"Colors are adjectives, so they agree with the noun just like you learned in Chapter 3: una macchina rossa (a red car), un libro rosso (a red book)." },
      { type:"h", text:"Question Words" },
      { type:"p", text:"Italian questions don't need a special word-order flip like English \"do you...\" — just put the question word at the start, or simply raise your intonation at the end of a statement for yes/no questions." },
      { type:"examples", items:[
        { icon:"❓", ar:"Chi", translit:"kee", meaning:"who" },
        { icon:"❓", ar:"Cosa", translit:"KOH-za", meaning:"what" },
        { icon:"❓", ar:"Dove", translit:"DOH-veh", meaning:"where" },
        { icon:"❓", ar:"Quando", translit:"KWAHN-do", meaning:"when" },
        { icon:"❓", ar:"Perché", translit:"pehr-KEH", meaning:"why / because" }
      ]},
      { type:"note", html:"<strong>Yes/no questions</strong> use exactly the same word order as a statement — \"Parli italiano?\" (Do you speak Italian?) is just \"Parli italiano.\" said with rising intonation, or a question mark in writing." }
    ],

    vocabCategories: [
      { name:"Colors", words:[
        {icon:"🔴", ar:"rosso/a", translit:"ROHS-so/sa", en:"red"},
        {icon:"🔵", ar:"blu", translit:"bloo", en:"blue"},
        {icon:"🟢", ar:"verde", translit:"VEHR-deh", en:"green"},
        {icon:"🟡", ar:"giallo/a", translit:"JAHL-lo/la", en:"yellow"},
        {icon:"⚫", ar:"nero/a", translit:"NEH-ro/ra", en:"black"},
        {icon:"⚪", ar:"bianco/a", translit:"BYAHN-ko/ka", en:"white"}
      ]}
    ],

    exercises: [
      {
        id:"it5-ex1", type:"mcq", title:"Exercise 1 — Numbers & Questions",
        instructions:"Choose the correct answer.",
        items:[
          { promptText:"\"Five\" in Italian is...", options:["quattro","cinque","sei"], correct:1 },
          { promptText:"\"Where\" in Italian is...", options:["Chi","Dove","Quando"], correct:1 },
          { promptText:"A red car (macchina, feminine) is...", options:["una macchina rosso","una macchina rossa","un macchina rossa"], correct:1 },
          { promptText:"To turn a statement into a yes/no question, Italian...", options:["adds \"do\" at the front","flips the verb and subject","just uses rising intonation / a question mark"], correct:2 }
        ]
      },
      {
        id:"it5-ex2", type:"matching", title:"Exercise 2 — Match the Number",
        instructions:"Tap a number word, then tap its digit.",
        pairs:[
          { left:"tre", right:"3" },
          { left:"sette", right:"7" },
          { left:"nove", right:"9" },
          { left:"dieci", right:"10" }
        ]
      },
      {
        id:"it5-ex3", type:"translate", title:"Exercise 3 — Translate",
        instructions:"Type the English meaning.",
        items:[
          { icon:"❓", ar:"Dove abiti?", keywords:["where do you live","where"] },
          { icon:"🔴", ar:"una macchina rossa", keywords:["red car","car"] },
          { icon:"❓", ar:"Perché studi l'italiano?", keywords:["why","study italian"] }
        ]
      },
      {
        id:"it5-ex4", type:"sentence", title:"Exercise 4 — Build the Question",
        instructions:"Tap the words in the right order.",
        items:[
          { words:["abiti?", "Dove"], answer:["Dove","abiti?"] },
          { words:["italiano?", "studi", "Perché", "l'"], answer:["Perché","studi","l'","italiano?"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"🔢", ar:"Uno, due, tre, quattro, cinque", plain:"Uno, due, tre, quattro, cinque", translit:"OO-no DOO-eh treh KWAHT-tro CHEEN-kweh", meaning:"One, two, three, four, five" },
      { icon:"❓", ar:"Dove abiti?", plain:"Dove abiti?", translit:"DOH-veh AH-bee-tee", meaning:"Where do you live?" },
      { icon:"🔴", ar:"Mi piace il colore rosso", plain:"Mi piace il colore rosso", translit:"mee PYA-cheh eel ko-LOH-reh ROHS-so", meaning:"I like the color red" },
      { icon:"❓", ar:"Perché studi l'italiano?", plain:"Perché studi l'italiano?", translit:"pehr-KEH STOO-dee lee-ta-LYAH-no", meaning:"Why are you studying Italian?" }
    ]
  },

  {
    id: 6,
    unit: "u6",
    label: "Chapter 6",
    difficulty: 4,
    requires: 5,
    icon: "🧭",
    title: "Prepositions & Andare (To Go)",
    arabicTitle: "Preposizioni e Andare",
    desc: "The irregular verb andare, and the prepositions that get you where you're going.",
    locked: false,

    content: [
      { type:"p", text:"Small words carry a lot of weight in Italian. This chapter covers andare (\"to go\") — an irregular verb you'll use constantly — plus the prepositions that pair with it." },
      { type:"h", text:"Andare — Present Tense" },
      { type:"pattern", ar:"io vado · tu vai · lui/lei va", translit:"VAH-do · VAH-ee · vah", desc:"I go · you go (informal) · he/she goes. Irregular — doesn't follow the -are pattern from Chapter 4, so it's worth memorizing on its own." },
      { type:"h", text:"A vs. In" },
      { type:"p", text:"Both mean roughly \"to\", but the choice depends on the destination: a before a city or a fixed idiom like \"school\"; in before a country or an enclosed space." },
      { type:"examples", items:[
        { icon:"🏫", ar:"Vado a scuola", translit:"VAH-do ah SKWOH-la", meaning:"I go to school" },
        { icon:"🏢", ar:"Vado in ufficio", translit:"VAH-do een oof-FEE-cho", meaning:"I go to the office" },
        { icon:"🇮🇹", ar:"Vado in Italia", translit:"VAH-do een ee-TAH-lya", meaning:"I go to Italy" }
      ]},
      { type:"note", html:"<strong>\"Home\" is special:</strong> like English \"I go home\" (no \"to the\"), Italian says <em>vado a casa</em> — no article needed either." }
    ],

    vocabCategories: [
      { name:"Places", words:[
        {icon:"🏫", ar:"la scuola", translit:"la SKWOH-la", en:"school"},
        {icon:"💼", ar:"il lavoro", translit:"eel la-VOH-ro", en:"work"},
        {icon:"🛒", ar:"il mercato", translit:"eel mehr-KAH-to", en:"market"},
        {icon:"🏢", ar:"l'ufficio", translit:"loof-FEE-cho", en:"office"},
        {icon:"🍽️", ar:"il ristorante", translit:"eel ree-sto-RAHN-teh", en:"restaurant"},
        {icon:"✈️", ar:"l'aeroporto", translit:"la-eh-ro-POR-to", en:"airport"},
        {icon:"🚉", ar:"la stazione", translit:"la sta-tsee-OH-neh", en:"station"},
        {icon:"🌳", ar:"il parco", translit:"eel PAR-ko", en:"park"}
      ]}
    ],

    exercises: [
      {
        id:"it6-ex1", type:"mcq", title:"Exercise 1 — Andare & Prepositions",
        instructions:"Choose the correct answer.",
        items:[
          { promptText:"Io ___ a scuola (I go to school).", options:["vado","vai","va"], correct:0 },
          { promptText:"Tu ___ in ufficio (you go to the office).", options:["vado","vai","va"], correct:1 },
          { promptText:"Which preposition goes before a country, like \"Italia\"?", options:["a","in","di"], correct:1 },
          { promptText:"Which preposition goes with the fixed phrase \"go to school\"?", options:["a","in","di"], correct:0 }
        ]
      },
      {
        id:"it6-ex2", type:"matching", title:"Exercise 2 — Match the Place",
        instructions:"Tap a place, then tap its meaning.",
        pairs:[
          { left:"la scuola", right:"school" },
          { left:"il lavoro", right:"work" },
          { left:"il ristorante", right:"restaurant" },
          { left:"l'aeroporto", right:"airport" }
        ]
      },
      {
        id:"it6-ex3", type:"translate", title:"Exercise 3 — Translate",
        instructions:"Type the English meaning.",
        items:[
          { icon:"🧭", ar:"Vado a scuola", keywords:["school"] },
          { icon:"🧭", ar:"Vado in Italia", keywords:["italy"] },
          { icon:"🛒", ar:"Il mercato è grande", keywords:["market"] }
        ]
      },
      {
        id:"it6-ex4", type:"sentence", title:"Exercise 4 — Build the Sentence",
        instructions:"Tap the words in the right order.",
        items:[
          { words:["scuola","a","Vado"], answer:["Vado","a","scuola"] },
          { words:["Italia","in","Vado"], answer:["Vado","in","Italia"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"🏫", ar:"Vado a scuola", plain:"Vado a scuola", translit:"VAH-do ah SKWOH-la", meaning:"I go to school" },
      { icon:"💼", ar:"Vado in ufficio", plain:"Vado in ufficio", translit:"VAH-do een oof-FEE-cho", meaning:"I go to the office" },
      { icon:"❓", ar:"Dove vai?", plain:"Dove vai?", translit:"DOH-veh vah-EE", meaning:"Where are you going?" },
      { icon:"🇮🇹", ar:"Vado in Italia con un amico", plain:"Vado in Italia con un amico", translit:"VAH-do een ee-TAH-lya kohn oon a-MEE-ko", meaning:"I'm going to Italy with a friend" }
    ]
  },

  {
    id: 7,
    unit: "u7",
    label: "Chapter 7",
    difficulty: 4,
    requires: 6,
    icon: "🎨",
    title: "Possessives & Describing People",
    arabicTitle: "Aggettivi Possessivi e Descrizioni",
    desc: "\"My\" and \"your\", and vocabulary for describing appearance and personality.",
    locked: false,

    content: [
      { type:"p", text:"Possessive words like \"my\" and \"your\" are adjectives in Italian — which means they agree with the thing owned, not the owner. This trips up a lot of learners, so it's worth slowing down for." },
      { type:"h", text:"Mio/Mia (My)" },
      { type:"pattern", ar:"il mio libro · la mia casa · i miei libri · le mie case", translit:"eel MEE-oh LEE-bro · la MEE-ah KAH-za · ee mee-EH-ee LEE-bree · leh MEE-eh KAH-zeh", desc:"my book · my house · my books · my houses — mio/mia/miei/mie all mean \"my\", but the ending changes to match what's owned, never who owns it." },
      { type:"h", text:"Tuo/Tua (Your)" },
      { type:"p", text:"\"Your\" (informal) follows exactly the same pattern: il tuo libro, la tua casa, i tuoi libri, le tue case." },
      { type:"h", text:"Describing People" },
      { type:"p", text:"With essere (Chapter 1) plus an adjective, you can describe anyone — just remember the adjective still has to agree, exactly like it did with objects in Chapter 3." },
      { type:"examples", items:[
        { icon:"📏", ar:"Lui è alto", translit:"loo-EE eh AHL-to", meaning:"He is tall" },
        { icon:"😊", ar:"Lei è simpatica", translit:"lehy eh seem-PAH-tee-ka", meaning:"She is nice" },
        { icon:"🧠", ar:"Sono intelligente", translit:"SOH-no een-tel-lee-JEHN-teh", meaning:"I am intelligent (same word, any gender)" }
      ]},
      { type:"note", html:"<strong>Remember Chapter 3?</strong> intelligente ends in -e, so — like grande — it doesn't change for gender at all, only for number (intelligente → intelligenti)." }
    ],

    vocabCategories: [
      { name:"Describing People", words:[
        {icon:"📏", ar:"alto/a", translit:"AHL-to/ta", en:"tall"},
        {icon:"📏", ar:"basso/a", translit:"BAHS-so/sa", en:"short"},
        {icon:"😊", ar:"simpatico/a", translit:"seem-PAH-tee-ko/ka", en:"nice, friendly"},
        {icon:"😳", ar:"timido/a", translit:"TEE-mee-do/da", en:"shy"},
        {icon:"🧠", ar:"intelligente", translit:"een-tel-lee-JEHN-teh", en:"intelligent, smart"},
        {icon:"👤", ar:"il mio / la mia", translit:"eel MEE-oh / la MEE-ah", en:"my"},
        {icon:"👤", ar:"il tuo / la tua", translit:"eel TOO-oh / la TOO-ah", en:"your"}
      ]}
    ],

    exercises: [
      {
        id:"it7-ex1", type:"mcq", title:"Exercise 1 — Possessives & Adjectives",
        instructions:"Choose the correct answer.",
        items:[
          { promptText:"\"My book\" (libro is masculine) is...", options:["il mio libro","la mia libro","il tuo libro"], correct:0 },
          { promptText:"\"My house\" (casa is feminine) is...", options:["il mio casa","la mia casa","il mio case"], correct:1 },
          { promptText:"Which adjective stays exactly the same for both genders?", options:["alto","simpatica","intelligente"], correct:2 },
          { promptText:"\"Lei è simpatica\" means...", options:["She is tall","She is nice","She is shy"], correct:1 }
        ]
      },
      {
        id:"it7-ex2", type:"matching", title:"Exercise 2 — Match the Description",
        instructions:"Tap a word, then tap its meaning.",
        pairs:[
          { left:"alto", right:"tall" },
          { left:"basso", right:"short" },
          { left:"timido", right:"shy" },
          { left:"intelligente", right:"intelligent" }
        ]
      },
      {
        id:"it7-ex3", type:"translate", title:"Exercise 3 — Translate",
        instructions:"Type the English meaning.",
        items:[
          { icon:"🤝", ar:"Il mio amico è simpatico", keywords:["friend","nice"] },
          { icon:"🏠", ar:"La tua casa è grande", keywords:["house","big"] },
          { icon:"😳", ar:"Sono timido", keywords:["shy"] }
        ]
      },
      {
        id:"it7-ex4", type:"sentence", title:"Exercise 4 — Build the Sentence",
        instructions:"Tap the words in the right order.",
        items:[
          { words:["alto","è","Lui"], answer:["Lui","è","alto"] },
          { words:["mia","È","casa","la"], answer:["È","la","mia","casa"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"📏", ar:"Il mio amico è alto", plain:"Il mio amico è alto", translit:"eel MEE-oh a-MEE-ko eh AHL-to", meaning:"My friend is tall" },
      { icon:"😊", ar:"La mia sorella è simpatica", plain:"La mia sorella è simpatica", translit:"la MEE-ah so-REHL-la eh seem-PAH-tee-ka", meaning:"My sister is nice" },
      { icon:"😳", ar:"Sono timido", plain:"Sono timido", translit:"SOH-no TEE-mee-do", meaning:"I am shy" },
      { icon:"📕", ar:"Il tuo libro è grande", plain:"Il tuo libro è grande", translit:"eel TOO-oh LEE-bro eh GRAHN-deh", meaning:"Your book is big" }
    ]
  },

  {
    id: 8,
    unit: "u8",
    label: "Chapter 8",
    difficulty: 5,
    requires: 7,
    icon: "🍕",
    title: "Food & Ordering",
    arabicTitle: "Cibo e Ordinare",
    desc: "Restaurant vocabulary, and the polite way to ask for what you want.",
    locked: false,

    content: [
      { type:"p", text:"Time to put everything to use somewhere practical: a restaurant. This chapter covers ordering politely and talking about what's available." },
      { type:"h", text:"Vorrei (I Would Like)" },
      { type:"pattern", ar:"Vorrei...", translit:"vor-RAY", desc:"I would like... — the polite way to order or request something. Much softer than voglio (I want), and what you'll actually hear in restaurants." },
      { type:"h", text:"C'è / Ci sono (There is / There are)" },
      { type:"p", text:"To ask what's available, or say something exists, Italian uses c'è (there is) or ci sono (there are) — put right at the start of the sentence, question mark optional in speech." },
      { type:"examples", items:[
        { icon:"🍕", ar:"C'è pizza?", translit:"cheh PEET-tsa", meaning:"Is there pizza?" },
        { icon:"☕", ar:"Ci sono due caffè", translit:"chee SOH-no DOO-eh kaf-FEH", meaning:"There are two coffees" }
      ]},
      { type:"note", html:"<strong>c'è</strong> is for singular things, <strong>ci sono</strong> for plural — the same singular/plural instinct you already use elsewhere in Italian." }
    ],

    vocabCategories: [
      { name:"Food & Drink", words:[
        {icon:"🍕", ar:"la pizza", translit:"la PEET-tsa", en:"pizza"},
        {icon:"🍝", ar:"la pasta", translit:"la PAH-sta", en:"pasta"},
        {icon:"☕", ar:"il caffè", translit:"eel kaf-FEH", en:"coffee"},
        {icon:"💧", ar:"l'acqua", translit:"LAHK-kwa", en:"water"},
        {icon:"🍷", ar:"il vino", translit:"eel VEE-no", en:"wine"},
        {icon:"🍨", ar:"il gelato", translit:"eel jeh-LAH-to", en:"ice cream"},
        {icon:"🧾", ar:"il conto", translit:"eel KOHN-to", en:"the bill"},
        {icon:"🙏", ar:"per favore", translit:"pehr fa-VOH-reh", en:"please"}
      ]}
    ],

    exercises: [
      {
        id:"it8-ex1", type:"mcq", title:"Exercise 1 — Ordering Politely",
        instructions:"Choose the correct answer.",
        items:[
          { promptText:"The polite way to say \"I would like\" is...", options:["voglio","vorrei","ho"], correct:1 },
          { promptText:"\"Is there pizza?\" is...", options:["C'è pizza?","Ci sono pizza?","È pizza?"], correct:0 },
          { promptText:"\"There are two coffees\" is...", options:["C'è due caffè","Ci sono due caffè","Sono due caffè"], correct:1 },
          { promptText:"\"The bill, please\" is...", options:["Il conto, per favore","Il vino, per favore","La pasta, per favore"], correct:0 }
        ]
      },
      {
        id:"it8-ex2", type:"matching", title:"Exercise 2 — Match the Food",
        instructions:"Tap a word, then tap its meaning.",
        pairs:[
          { left:"la pizza", right:"pizza" },
          { left:"il caffè", right:"coffee" },
          { left:"l'acqua", right:"water" },
          { left:"il gelato", right:"ice cream" }
        ]
      },
      {
        id:"it8-ex3", type:"translate", title:"Exercise 3 — Translate",
        instructions:"Type the English meaning.",
        items:[
          { icon:"🍕", ar:"Vorrei una pizza", keywords:["pizza"] },
          { icon:"🍷", ar:"C'è vino?", keywords:["wine"] },
          { icon:"🧾", ar:"Il conto, per favore", keywords:["bill"] }
        ]
      },
      {
        id:"it8-ex4", type:"sentence", title:"Exercise 4 — Build the Sentence",
        instructions:"Tap the words in the right order.",
        items:[
          { words:["pizza","una","Vorrei"], answer:["Vorrei","una","pizza"] },
          { words:["favore","conto","per","Il"], answer:["Il","conto","per","favore"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"🍕", ar:"Vorrei una pizza", plain:"Vorrei una pizza", translit:"vor-RAY OO-na PEET-tsa", meaning:"I would like a pizza" },
      { icon:"🍨", ar:"C'è gelato?", plain:"C'è gelato?", translit:"cheh jeh-LAH-to", meaning:"Is there ice cream?" },
      { icon:"🧾", ar:"Il conto, per favore", plain:"Il conto, per favore", translit:"eel KOHN-to pehr fa-VOH-reh", meaning:"The bill, please" },
      { icon:"☕", ar:"Vorrei un caffè e un'acqua", plain:"Vorrei un caffè e un'acqua", translit:"vor-RAY oon kaf-FEH eh oo-NAHK-kwa", meaning:"I would like a coffee and a water" }
    ]
  },

  {
    id: 9,
    unit: "u9",
    label: "Chapter 9",
    difficulty: 5,
    requires: 8,
    icon: "🕐",
    title: "Time & Daily Routine",
    arabicTitle: "L'Ora e la Routine Quotidiana",
    desc: "Telling time, days of the week, and a first taste of reflexive verbs.",
    locked: false,

    content: [
      { type:"h", text:"Telling Time" },
      { type:"p", text:"To answer \"what time is it\", most hours use sono le (\"they are the\") plus the number — but one o'clock is the odd one out, using è l'una (singular) instead, since \"one\" doesn't fit a plural verb." },
      { type:"pattern", ar:"Che ore è? · Sono le tre", translit:"keh OH-reh EH · SOH-no leh treh", desc:"What time is it? · It's three o'clock — Italian uses \"sono le\" (literally \"they are the\") for most hours." },
      { type:"h", text:"Reflexive Verbs: A First Taste" },
      { type:"p", text:"Some everyday actions use a small extra pronoun (mi) before the verb — literally \"I wake myself\", \"I get myself up\". You'll learn the full pattern in a later chapter; for now, just recognize these two common phrases." },
      { type:"examples", items:[
        { icon:"⏰", ar:"Mi sveglio presto", translit:"mee ZVEH-lyo PREHS-to", meaning:"I wake up early" },
        { icon:"🧍", ar:"Mi alzo presto", translit:"mee AHL-tso PREHS-to", meaning:"I get up early" }
      ]},
      { type:"note", html:"<strong>Days of the week</strong> aren't capitalized in Italian (unlike English) — lunedì, not Lunedì — and the week starts on Monday, not Sunday." }
    ],

    vocabCategories: [
      { name:"Time & Days", words:[
        {icon:"📅", ar:"lunedì", translit:"loo-neh-DEE", en:"Monday"},
        {icon:"📅", ar:"martedì", translit:"mar-teh-DEE", en:"Tuesday"},
        {icon:"📅", ar:"mercoledì", translit:"mehr-ko-leh-DEE", en:"Wednesday"},
        {icon:"📅", ar:"giovedì", translit:"joh-veh-DEE", en:"Thursday"},
        {icon:"📅", ar:"venerdì", translit:"veh-nehr-DEE", en:"Friday"},
        {icon:"⏰", ar:"mi sveglio", translit:"mee ZVEH-lyo", en:"I wake up"},
        {icon:"🧍", ar:"mi alzo", translit:"mee AHL-tso", en:"I get up"},
        {icon:"⏱️", ar:"presto", translit:"PREHS-to", en:"early"},
        {icon:"📆", ar:"oggi", translit:"OHD-jee", en:"today"}
      ]}
    ],

    exercises: [
      {
        id:"it9-ex1", type:"mcq", title:"Exercise 1 — Time & Routine",
        instructions:"Choose the correct answer.",
        items:[
          { promptText:"\"What time is it?\" is...", options:["Che ore è?","Che giorno è?","Dove sei?"], correct:0 },
          { promptText:"\"Monday\" is...", options:["martedì","lunedì","venerdì"], correct:1 },
          { promptText:"\"I wake up\" is...", options:["mi alzo","mi sveglio","sono sveglio"], correct:1 },
          { promptText:"For most hours, Italian says \"it's...\" using...", options:["è le","sono le","ho le"], correct:1 }
        ]
      },
      {
        id:"it9-ex2", type:"matching", title:"Exercise 2 — Match the Day",
        instructions:"Tap a day, then tap its meaning.",
        pairs:[
          { left:"lunedì", right:"Monday" },
          { left:"mercoledì", right:"Wednesday" },
          { left:"giovedì", right:"Thursday" },
          { left:"venerdì", right:"Friday" }
        ]
      },
      {
        id:"it9-ex3", type:"translate", title:"Exercise 3 — Translate",
        instructions:"Type the English meaning.",
        items:[
          { icon:"⏰", ar:"Mi sveglio presto", keywords:["wake","early"] },
          { icon:"📆", ar:"Oggi è lunedì", keywords:["monday"] },
          { icon:"🕐", ar:"Che ore è?", keywords:["what time"] }
        ]
      },
      {
        id:"it9-ex4", type:"sentence", title:"Exercise 4 — Build the Sentence",
        instructions:"Tap the words in the right order.",
        items:[
          { words:["è","lunedì","Oggi"], answer:["Oggi","è","lunedì"] },
          { words:["presto","sveglio","Mi"], answer:["Mi","sveglio","presto"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"🕐", ar:"Che ore è?", plain:"Che ore è?", translit:"keh OH-reh EH", meaning:"What time is it?" },
      { icon:"⏰", ar:"Mi sveglio presto", plain:"Mi sveglio presto", translit:"mee ZVEH-lyo PREHS-to", meaning:"I wake up early" },
      { icon:"📆", ar:"Oggi è lunedì", plain:"Oggi è lunedì", translit:"OHD-jee eh loo-neh-DEE", meaning:"Today is Monday" },
      { icon:"🧍", ar:"Mi alzo presto", plain:"Mi alzo presto", translit:"mee AHL-tso PREHS-to", meaning:"I get up early" }
    ]
  },

  {
    id: 10,
    unit: "u10",
    label: "Chapter 10",
    difficulty: 6,
    requires: 9,
    icon: "⏳",
    title: "Talking About the Past",
    arabicTitle: "Il Passato Prossimo",
    desc: "The passato prossimo — Italian's everyday past tense — and how to say what you already did.",
    locked: false,

    content: [
      { type:"p", text:"To talk about the past in everyday Italian, you'll reach for the passato prossimo constantly. It's built from two pieces: a helper verb (avere, in most cases) plus a past participle." },
      { type:"h", text:"Avere + Past Participle" },
      { type:"pattern", ar:"io ho parlato · tu hai parlato · lui/lei ha parlato", translit:"oh par-LAH-to · eye par-LAH-to · ah par-LAH-to", desc:"I spoke / have spoken · you spoke · he/she spoke — the avere forms from Chapter 3, plus a past participle that doesn't change for most verbs." },
      { type:"h", text:"Building the Past Participle" },
      { type:"p", text:"Drop the infinitive ending and add: -are → -ato, -ere → -uto, -ire → -ito." },
      { type:"examples", items:[
        { icon:"🗣️", ar:"parlare → parlato", translit:"par-LAH-to", meaning:"spoken (from parlare, Chapter 4)" },
        { icon:"😴", ar:"dormire → dormito", translit:"dor-MEE-to", meaning:"slept (from dormire, Chapter 4)" },
        { icon:"🍝", ar:"mangiare → mangiato", translit:"man-JAH-to", meaning:"eaten (from mangiare, Chapter 4)" }
      ]},
      { type:"note", html:"<strong>A common exception:</strong> andare (Chapter 6) uses essere instead of avere, and the participle agrees like an adjective: <em>sono andato</em> (a man says), <em>sono andata</em> (a woman says). You'll meet the full essere-group in a later chapter — for now, just recognize this one." }
    ],

    vocabCategories: [
      { name:"Talking About the Past", words:[
        {icon:"📅", ar:"ieri", translit:"ee-EH-ree", en:"yesterday"},
        {icon:"📅", ar:"la settimana scorsa", translit:"la seht-tee-MAH-na SKOR-sa", en:"last week"},
        {icon:"✅", ar:"già", translit:"jah", en:"already"},
        {icon:"🗣️", ar:"ho parlato", translit:"oh par-LAH-to", en:"I spoke"},
        {icon:"😴", ar:"ho dormito", translit:"oh dor-MEE-to", en:"I slept"},
        {icon:"🍝", ar:"ho mangiato", translit:"oh man-JAH-to", en:"I ate"},
        {icon:"🚶", ar:"sono andato/a", translit:"SOH-no an-DAH-to/ta", en:"I went"}
      ]}
    ],

    exercises: [
      {
        id:"it10-ex1", type:"mcq", title:"Exercise 1 — Past Tense",
        instructions:"Choose the correct answer.",
        items:[
          { promptText:"\"I spoke\" is...", options:["parlo","ho parlato","parlato"], correct:1 },
          { promptText:"Which ending does an -are verb take in the past participle?", options:["-ato","-uto","-ito"], correct:0 },
          { promptText:"\"I ate\" (mangiare) is...", options:["ho mangiato","ho mangiare","mangio"], correct:0 },
          { promptText:"Which common verb uses essere instead of avere?", options:["parlare","andare","dormire"], correct:1 }
        ]
      },
      {
        id:"it10-ex2", type:"matching", title:"Exercise 2 — Match the Participle",
        instructions:"Tap an infinitive, then tap its past participle.",
        pairs:[
          { left:"parlare", right:"parlato" },
          { left:"dormire", right:"dormito" },
          { left:"mangiare", right:"mangiato" },
          { left:"andare", right:"andato" }
        ]
      },
      {
        id:"it10-ex3", type:"translate", title:"Exercise 3 — Translate",
        instructions:"Type the English meaning.",
        items:[
          { icon:"🗣️", ar:"Ho parlato ieri", keywords:["spoke","yesterday"] },
          { icon:"🚶", ar:"Sono andato a scuola", keywords:["went","school"] },
          { icon:"🍝", ar:"Ho già mangiato", keywords:["already","ate","eaten"] }
        ]
      },
      {
        id:"it10-ex4", type:"sentence", title:"Exercise 4 — Build the Sentence",
        instructions:"Tap the words in the right order.",
        items:[
          { words:["parlato","ho","Ieri"], answer:["Ieri","ho","parlato"] },
          { words:["mangiato","ho","Già"], answer:["Già","ho","mangiato"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"📅", ar:"Ho parlato ieri", plain:"Ho parlato ieri", translit:"oh par-LAH-to ee-EH-ree", meaning:"I spoke yesterday" },
      { icon:"🚶", ar:"Sono andato a scuola", plain:"Sono andato a scuola", translit:"SOH-no an-DAH-to ah SKWOH-la", meaning:"I went to school" },
      { icon:"✅", ar:"Ho già mangiato", plain:"Ho già mangiato", translit:"oh jah man-JAH-to", meaning:"I already ate" },
      { icon:"😴", ar:"Ho dormito bene", plain:"Ho dormito bene", translit:"oh dor-MEE-to BEH-neh", meaning:"I slept well" }
    ]
  },

  {
    id: 11,
    unit: "u11",
    label: "Chapter 11",
    difficulty: 6,
    requires: 10,
    icon: "☀️",
    title: "Weather & Seasons",
    arabicTitle: "Il Tempo e le Stagioni",
    desc: "Small talk about the weather, and the four seasons.",
    locked: false,

    content: [
      { type:"p", text:"Weather talk is universal small talk — and a good excuse to practice everyday Italian sentence structure with words you already know." },
      { type:"h", text:"Che Tempo Fa? (What's the Weather Like?)" },
      { type:"pattern", ar:"Che tempo fa? · Fa caldo", translit:"keh TEHM-po fah · fah KAHL-do", desc:"What's the weather like? · It's hot — many weather expressions use fare (\"to make/do\"), literally \"it makes hot.\"" },
      { type:"examples", items:[
        { icon:"🥵", ar:"Fa caldo", translit:"fah KAHL-do", meaning:"It's hot" },
        { icon:"🥶", ar:"Fa freddo", translit:"fah FREHD-do", meaning:"It's cold" },
        { icon:"🌧️", ar:"Piove", translit:"PYO-veh", meaning:"It's raining" },
        { icon:"☀️", ar:"C'è il sole", translit:"cheh eel SOH-leh", meaning:"It's sunny (there is sun)" }
      ]},
      { type:"note", html:"<strong>Notice</strong> c'è from Chapter 8 makes a reappearance — \"c'è il sole\" uses the exact same \"there is\" pattern as \"c'è pizza.\" Not every weather expression uses fare: piove stands alone as its own verb, and \"there's sun\" borrows c'è instead — Italian just has a few different ways to describe the sky, not one single formula." },
      { type:"h", text:"Le Stagioni (The Seasons)" },
      { type:"p", text:"The four seasons are straightforward nouns, each used with the article l' or la. You'll typically hear them after in: in primavera (in spring), in estate (in summer) — a pattern worth recognizing even though we won't unpack in's other uses yet." }
    ],

    vocabCategories: [
      { name:"Weather & Seasons", words:[
        {icon:"🥵", ar:"caldo", translit:"KAHL-do", en:"hot"},
        {icon:"🥶", ar:"freddo", translit:"FREHD-do", en:"cold"},
        {icon:"🌧️", ar:"piove", translit:"PYO-veh", en:"it's raining"},
        {icon:"☀️", ar:"il sole", translit:"eel SOH-leh", en:"the sun"},
        {icon:"🌸", ar:"la primavera", translit:"la pree-ma-VEH-ra", en:"spring"},
        {icon:"☀️", ar:"l'estate", translit:"leh-STAH-teh", en:"summer"},
        {icon:"🍂", ar:"l'autunno", translit:"lah-oo-TOON-no", en:"autumn"},
        {icon:"❄️", ar:"l'inverno", translit:"leen-VEHR-no", en:"winter"}
      ]}
    ],

    exercises: [
      {
        id:"it11-ex1", type:"mcq", title:"Exercise 1 — Weather",
        instructions:"Choose the correct answer.",
        items:[
          { promptText:"\"It's hot\" is...", options:["Fa freddo","Fa caldo","Piove"], correct:1 },
          { promptText:"\"It's raining\" is...", options:["Piove","Fa caldo","C'è il sole"], correct:0 },
          { promptText:"Which season is \"l'inverno\"?", options:["summer","winter","spring"], correct:1 },
          { promptText:"\"It's sunny\" literally means...", options:["\"the sun makes\"","\"there is the sun\"","\"I see the sun\""], correct:1 }
        ]
      },
      {
        id:"it11-ex2", type:"matching", title:"Exercise 2 — Match the Season",
        instructions:"Tap a season, then tap its meaning.",
        pairs:[
          { left:"la primavera", right:"spring" },
          { left:"l'estate", right:"summer" },
          { left:"l'autunno", right:"autumn" },
          { left:"l'inverno", right:"winter" }
        ]
      },
      {
        id:"it11-ex3", type:"translate", title:"Exercise 3 — Translate",
        instructions:"Type the English meaning.",
        items:[
          { icon:"🥵", ar:"Fa caldo oggi", keywords:["hot"] },
          { icon:"🌧️", ar:"Piove molto", keywords:["raining","rain"] },
          { icon:"🌸", ar:"Mi piace la primavera", keywords:["spring"] }
        ]
      },
      {
        id:"it11-ex4", type:"sentence", title:"Exercise 4 — Build the Sentence",
        instructions:"Tap the words in the right order.",
        items:[
          { words:["caldo","Fa","oggi"], answer:["Fa","caldo","oggi"] },
          { words:["sole","C'è","il"], answer:["C'è","il","sole"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"❓", ar:"Che tempo fa?", plain:"Che tempo fa?", translit:"keh TEHM-po fah", meaning:"What's the weather like?" },
      { icon:"🥵", ar:"Fa molto caldo", plain:"Fa molto caldo", translit:"fah MOHL-to KAHL-do", meaning:"It's very hot" },
      { icon:"🌧️", ar:"Piove oggi", plain:"Piove oggi", translit:"PYO-veh OHD-jee", meaning:"It's raining today" },
      { icon:"🌸", ar:"Mi piace la primavera", plain:"Mi piace la primavera", translit:"mee PYA-cheh la pree-ma-VEH-ra", meaning:"I like spring" }
    ]
  },

  {
    id: 12,
    unit: "u12",
    label: "Chapter 12",
    difficulty: 7,
    requires: 11,
    icon: "🛍️",
    title: "Shopping & Clothes",
    arabicTitle: "Shopping e Vestiti",
    desc: "Asking prices, sizes, and talking about what you're wearing.",
    locked: false,

    content: [
      { type:"p", text:"Back to practical situations: shopping. This chapter combines vorrei (Chapter 8) and colors (Chapter 5) with new vocabulary for clothes and prices." },
      { type:"h", text:"Quanto Costa? (How Much Does It Cost?)" },
      { type:"p", text:"Quanto costa? asks the price of one item; for more than one, it becomes quanto costano? — the singular/plural instinct you already used for c'è/ci sono back in Chapter 8. The answer just states costa (or costano) followed by a number and euro." },
      { type:"pattern", ar:"Quanto costa? · Costa venti euro", translit:"KWAHN-to KOH-sta · KOH-sta VEHN-tee EH-oo-ro", desc:"How much does it cost? · It costs twenty euros — venti is one of the Chapter 5 numbers, extended here past ten the same way you'd expect (venti, trenta, quaranta...)." },
      { type:"h", text:"Asking for What You Want" },
      { type:"p", text:"Once you've found something, vorrei (Chapter 8) and taglia (size) get you the rest of the way through a purchase." },
      { type:"examples", items:[
        { icon:"👕", ar:"Vorrei una maglietta", translit:"vor-RAY OO-na ma-LYEHT-ta", meaning:"I would like a t-shirt" },
        { icon:"📏", ar:"Avete una taglia più grande?", translit:"a-VEH-teh OO-na TAH-lya pyoo GRAHN-deh", meaning:"Do you have a bigger size?" }
      ]},
      { type:"note", html:"<strong>Reusing what you know:</strong> \"una taglia più grande\" reuses grande from Chapter 3 — più grande literally means \"more big,\" Italian's way of saying \"bigger.\"" }
    ],

    vocabCategories: [
      { name:"Shopping & Clothes", words:[
        {icon:"👕", ar:"la maglietta", translit:"la ma-LYEHT-ta", en:"the t-shirt"},
        {icon:"👖", ar:"i pantaloni", translit:"ee pan-ta-LO-nee", en:"the pants"},
        {icon:"👟", ar:"le scarpe", translit:"leh SKAR-peh", en:"the shoes"},
        {icon:"🧥", ar:"la giacca", translit:"la JAHK-ka", en:"the jacket"},
        {icon:"💰", ar:"quanto costa?", translit:"KWAHN-to KOH-sta", en:"how much does it cost?"},
        {icon:"📏", ar:"la taglia", translit:"la TAH-lya", en:"the size"},
        {icon:"💶", ar:"l'euro", translit:"LEH-oo-ro", en:"the euro"}
      ]}
    ],

    exercises: [
      {
        id:"it12-ex1", type:"mcq", title:"Exercise 1 — Shopping",
        instructions:"Choose the correct answer.",
        items:[
          { promptText:"\"How much does it cost?\" is...", options:["Quanto costa?","Che ore è?","Dove sei?"], correct:0 },
          { promptText:"\"The shoes\" is...", options:["la maglietta","le scarpe","la giacca"], correct:1 },
          { promptText:"\"A bigger size\" uses which word for \"bigger\"?", options:["più piccolo","più grande","molto grande"], correct:1 },
          { promptText:"\"I would like a t-shirt\" is...", options:["Vorrei una maglietta","Ho una maglietta","Costa una maglietta"], correct:0 }
        ]
      },
      {
        id:"it12-ex2", type:"matching", title:"Exercise 2 — Match the Item",
        instructions:"Tap an item, then tap its meaning.",
        pairs:[
          { left:"la maglietta", right:"t-shirt" },
          { left:"i pantaloni", right:"pants" },
          { left:"le scarpe", right:"shoes" },
          { left:"la giacca", right:"jacket" }
        ]
      },
      {
        id:"it12-ex3", type:"translate", title:"Exercise 3 — Translate",
        instructions:"Type the English meaning.",
        items:[
          { icon:"💰", ar:"Quanto costa?", keywords:["how much","cost"] },
          { icon:"👕", ar:"Vorrei una maglietta rossa", keywords:["t-shirt","red"] },
          { icon:"📏", ar:"Avete una taglia più grande?", keywords:["size","bigger"] }
        ]
      },
      {
        id:"it12-ex4", type:"sentence", title:"Exercise 4 — Build the Sentence",
        instructions:"Tap the words in the right order.",
        items:[
          { words:["maglietta","una","Vorrei"], answer:["Vorrei","una","maglietta"] },
          { words:["costa?","Quanto"], answer:["Quanto","costa?"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"💰", ar:"Quanto costa?", plain:"Quanto costa?", translit:"KWAHN-to KOH-sta", meaning:"How much does it cost?" },
      { icon:"👕", ar:"Vorrei una maglietta blu", plain:"Vorrei una maglietta blu", translit:"vor-RAY OO-na ma-LYEHT-ta bloo", meaning:"I would like a blue t-shirt" },
      { icon:"📏", ar:"Avete una taglia più grande?", plain:"Avete una taglia più grande?", translit:"a-VEH-teh OO-na TAH-lya pyoo GRAHN-deh", meaning:"Do you have a bigger size?" },
      { icon:"👟", ar:"Mi piacciono queste scarpe", plain:"Mi piacciono queste scarpe", translit:"mee PYAH-cho-no KWEH-steh SKAR-peh", meaning:"I like these shoes" }
    ]
  },

  {
    id: 13,
    unit: "u13",
    label: "Chapter 13",
    difficulty: 8,
    requires: 12,
    icon: "💪",
    title: "Can, Must & Want",
    arabicTitle: "Potere, Dovere, Volere",
    desc: "Three verbs that unlock huge numbers of sentences — each paired with any infinitive you already know.",
    locked: false,

    content: [
      { type:"p", text:"Potere (can/to be able), dovere (must/to have to), and volere (to want) are three of the most useful verbs in Italian — each one pairs directly with an infinitive, so as soon as you know them you can build sentences with every verb from earlier chapters." },
      { type:"h", text:"Potere, Dovere, Volere — Present Tense" },
      { type:"pattern", ar:"posso · devo · voglio", translit:"POHS-so · DEH-vo · VOH-lyo", desc:"I can · I must · I want — all three are irregular in the io form, but pair with an infinitive exactly like English \"can/must/want to...\"." },
      { type:"examples", items:[
        { icon:"💪", ar:"Posso parlare italiano", translit:"POHS-so par-LAH-reh ee-ta-LYAH-no", meaning:"I can speak Italian" },
        { icon:"⏰", ar:"Devo andare a scuola", translit:"DEH-vo an-DAH-reh ah SKWOH-la", meaning:"I must go to school" },
        { icon:"🍕", ar:"Voglio mangiare la pizza", translit:"VOH-lyo man-JAH-reh la PEET-tsa", meaning:"I want to eat pizza" }
      ]},
      { type:"h", text:"Saying You Can't (or Won't)" },
      { type:"p", text:"To make any of these negative, just add non before the verb — the same simple negation you'd use with any Italian verb: non posso (I can't), non devo (I don't have to), non voglio (I don't want to)." },
      { type:"note", html:"<strong>Remember vorrei from Chapter 8?</strong> That's the polite form of volere. Voglio is direct and perfectly normal with friends/family, but vorrei is softer — the difference is exactly like English \"I want\" vs. \"I would like\"." }
    ],

    vocabCategories: [
      { name:"Potere, Dovere, Volere", words:[
        {icon:"💪", ar:"posso", translit:"POHS-so", en:"I can"},
        {icon:"💪", ar:"puoi", translit:"PWOH-ee", en:"you can (informal)"},
        {icon:"⏰", ar:"devo", translit:"DEH-vo", en:"I must"},
        {icon:"⏰", ar:"devi", translit:"DEH-vee", en:"you must (informal)"},
        {icon:"🎯", ar:"voglio", translit:"VOH-lyo", en:"I want"},
        {icon:"🎯", ar:"vuoi", translit:"VWOH-ee", en:"you want (informal)"}
      ]}
    ],

    exercises: [
      {
        id:"it13-ex1", type:"mcq", title:"Exercise 1 — Modal Verbs",
        instructions:"Choose the correct answer.",
        items:[
          { promptText:"\"I can speak Italian\" is...", options:["Voglio parlare italiano","Posso parlare italiano","Devo parlare italiano"], correct:1 },
          { promptText:"\"I must go to school\" is...", options:["Posso andare a scuola","Voglio andare a scuola","Devo andare a scuola"], correct:2 },
          { promptText:"Which verb means \"to want\"?", options:["potere","dovere","volere"], correct:2 },
          { promptText:"\"Puoi\" means...", options:["I can","you can","he can"], correct:1 }
        ]
      },
      {
        id:"it13-ex2", type:"matching", title:"Exercise 2 — Match the Verb",
        instructions:"Tap a form, then tap its meaning.",
        pairs:[
          { left:"posso", right:"I can" },
          { left:"devo", right:"I must" },
          { left:"voglio", right:"I want" },
          { left:"puoi", right:"you can" }
        ]
      },
      {
        id:"it13-ex3", type:"translate", title:"Exercise 3 — Translate",
        instructions:"Type the English meaning.",
        items:[
          { icon:"💪", ar:"Posso parlare italiano", keywords:["can speak","italian"] },
          { icon:"⏰", ar:"Devo andare a scuola", keywords:["must go","school"] },
          { icon:"🍕", ar:"Voglio mangiare la pizza", keywords:["want to eat","pizza"] }
        ]
      },
      {
        id:"it13-ex4", type:"sentence", title:"Exercise 4 — Build the Sentence",
        instructions:"Tap the words in the right order.",
        items:[
          { words:["parlare","Posso","italiano"], answer:["Posso","parlare","italiano"] },
          { words:["mangiare","Voglio","la pizza"], answer:["Voglio","mangiare","la pizza"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"💪", ar:"Posso parlare italiano", plain:"Posso parlare italiano", translit:"POHS-so par-LAH-reh ee-ta-LYAH-no", meaning:"I can speak Italian" },
      { icon:"⏰", ar:"Devo andare a lavoro", plain:"Devo andare a lavoro", translit:"DEH-vo an-DAH-reh ah la-VOH-ro", meaning:"I must go to work" },
      { icon:"🍕", ar:"Voglio mangiare la pizza", plain:"Voglio mangiare la pizza", translit:"VOH-lyo man-JAH-reh la PEET-tsa", meaning:"I want to eat pizza" },
      { icon:"❓", ar:"Puoi parlare più lentamente?", plain:"Puoi parlare più lentamente?", translit:"PWOH-ee par-LAH-reh pyoo lehn-ta-MEHN-teh", meaning:"Can you speak more slowly?" }
    ]
  },

  {
    id: 14,
    unit: "u14",
    label: "Chapter 14",
    difficulty: 8,
    requires: 13,
    icon: "🕰️",
    title: "The Other Past Tense",
    arabicTitle: "L'Imperfetto",
    desc: "L'imperfetto — for habits, background, and \"used to\" — alongside the passato prossimo from Chapter 10.",
    locked: false,

    content: [
      { type:"p", text:"Chapter 10 taught the passato prossimo, for a single completed action (\"I ate\"). Italian has a second past tense, l'imperfetto, for habits, repeated actions, and background — closer to English \"I used to eat\" or \"I was eating\"." },
      { type:"h", text:"Imperfetto — Conjugation" },
      { type:"pattern", ar:"io parlavo · io avevo · io dormivo", translit:"par-LAH-vo · a-VEH-vo · dor-MEE-vo", desc:"I used to speak · I used to have · I used to sleep — unlike the passato prossimo, this is a single word, built with its own regular endings (-avo/-evo/-ivo)." },
      { type:"h", text:"Passato Prossimo vs. Imperfetto" },
      { type:"p", text:"Both are \"past tense\", but they answer different questions. Passato prossimo answers \"what happened?\" — a single, finished event. Imperfetto answers \"what was going on?\" or \"what used to happen?\" — an ongoing state or a repeated habit, with no clear endpoint." },
      { type:"examples", items:[
        { icon:"✅", ar:"Ho mangiato la pizza (ieri)", translit:"oh man-JAH-to la PEET-tsa", meaning:"I ate pizza (one time, yesterday)" },
        { icon:"🔁", ar:"Mangiavo la pizza (da bambino)", translit:"man-JAH-vo la PEET-tsa", meaning:"I used to eat pizza (as a child, a habit)" }
      ]},
      { type:"note", html:"<strong>Essere is irregular here too:</strong> ero, eri, era (I was, you were, he/she was) — worth memorizing directly, since it's one of the most common imperfetto forms you'll use." }
    ],

    vocabCategories: [
      { name:"Talking About Habits", words:[
        {icon:"👶", ar:"da bambino/a", translit:"da bam-BEE-no/na", en:"as a child"},
        {icon:"🔁", ar:"sempre", translit:"SEHM-preh", en:"always"},
        {icon:"🔁", ar:"spesso", translit:"SPEHS-so", en:"often"},
        {icon:"🗣️", ar:"parlavo", translit:"par-LAH-vo", en:"I used to speak"},
        {icon:"🤲", ar:"avevo", translit:"a-VEH-vo", en:"I used to have"},
        {icon:"👤", ar:"ero", translit:"EH-ro", en:"I was"}
      ]}
    ],

    exercises: [
      {
        id:"it14-ex1", type:"mcq", title:"Exercise 1 — Imperfetto",
        instructions:"Choose the correct answer.",
        items:[
          { promptText:"\"I used to speak\" is...", options:["ho parlato","parlavo","parlo"], correct:1 },
          { promptText:"\"I was\" (imperfetto of essere) is...", options:["sono stato","ero","sono"], correct:1 },
          { promptText:"Which past tense fits a single completed action?", options:["passato prossimo","imperfetto","neither"], correct:0 },
          { promptText:"Which past tense fits a childhood habit?", options:["passato prossimo","imperfetto","neither"], correct:1 }
        ]
      },
      {
        id:"it14-ex2", type:"matching", title:"Exercise 2 — Match the Form",
        instructions:"Tap a form, then tap its meaning.",
        pairs:[
          { left:"parlavo", right:"I used to speak" },
          { left:"avevo", right:"I used to have" },
          { left:"ero", right:"I was" },
          { left:"dormivo", right:"I used to sleep" }
        ]
      },
      {
        id:"it14-ex3", type:"translate", title:"Exercise 3 — Translate",
        instructions:"Type the English meaning.",
        items:[
          { icon:"👶", ar:"Da bambino, ero timido", keywords:["child","shy"] },
          { icon:"🔁", ar:"Parlavo spesso con lei", keywords:["used to speak","often"] },
          { icon:"🍝", ar:"Mangiavo sempre la pasta", keywords:["used to eat","always"] }
        ]
      },
      {
        id:"it14-ex4", type:"sentence", title:"Exercise 4 — Build the Sentence",
        instructions:"Tap the words in the right order.",
        items:[
          { words:["ero","Da bambino,","timido"], answer:["Da bambino,","ero","timido"] },
          { words:["spesso","Parlavo","italiano"], answer:["Parlavo","spesso","italiano"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"👶", ar:"Da bambino, ero timido", plain:"Da bambino, ero timido", translit:"da bam-BEE-no EH-ro TEE-mee-do", meaning:"As a child, I was shy" },
      { icon:"🍝", ar:"Mangiavo sempre la pasta", plain:"Mangiavo sempre la pasta", translit:"man-JAH-vo SEHM-preh la PAH-sta", meaning:"I always used to eat pasta" },
      { icon:"🗣️", ar:"Parlavo spesso italiano", plain:"Parlavo spesso italiano", translit:"par-LAH-vo SPEHS-so ee-ta-LYAH-no", meaning:"I often used to speak Italian" },
      { icon:"🏠", ar:"Avevo una casa piccola", plain:"Avevo una casa piccola", translit:"a-VEH-vo OO-na KAH-za PEEK-ko-la", meaning:"I used to have a small house" }
    ]
  },

  {
    id: 15,
    unit: "u15",
    label: "Chapter 15",
    difficulty: 9,
    requires: 14,
    icon: "🪞",
    title: "Reflexive Verbs",
    arabicTitle: "I Verbi Riflessivi",
    desc: "The full pattern behind mi sveglio and mi alzo (Chapter 9) — and how to recognize any reflexive verb.",
    locked: false,

    content: [
      { type:"p", text:"Chapter 9 introduced mi sveglio and mi alzo without explaining the pattern. Now you have enough Italian under your belt to see the full picture." },
      { type:"h", text:"Reflexive Verbs — The Pattern" },
      { type:"pattern", ar:"mi lavo · ti lavi · si lava", translit:"mee LAH-vo · tee LAH-vee · see LAH-va", desc:"I wash myself · you wash yourself · he/she washes themself — a small pronoun (mi/ti/si) goes right before the verb, which otherwise conjugates exactly like a regular -are verb." },
      { type:"h", text:"Common Reflexive Verbs" },
      { type:"p", text:"A reflexive verb is simply one where the action happens to yourself — you'll recognize its infinitive form by the -si stuck on the end, which then drops away and turns into mi/ti/si once you conjugate it." },
      { type:"examples", items:[
        { icon:"🧼", ar:"lavarsi", translit:"la-VAR-see", meaning:"to wash oneself" },
        { icon:"👕", ar:"vestirsi", translit:"veh-STEER-see", meaning:"to get dressed" },
        { icon:"📛", ar:"chiamarsi", translit:"kya-MAR-see", meaning:"to be called (mi chiamo... from Chapter 1!)" }
      ]},
      { type:"note", html:"<strong>Mi chiamo Marco</strong> from Chapter 1 was your very first reflexive verb — chiamarsi, literally \"to call oneself.\" You were already using this pattern before you knew it had a name." }
    ],

    vocabCategories: [
      { name:"Daily Routine Verbs", words:[
        {icon:"🧼", ar:"mi lavo", translit:"mee LAH-vo", en:"I wash myself"},
        {icon:"👕", ar:"mi vesto", translit:"mee VEH-sto", en:"I get dressed"},
        {icon:"📛", ar:"mi chiamo", translit:"mee kee-AH-mo", en:"my name is (I call myself)"},
        {icon:"⏰", ar:"mi sveglio", translit:"mee ZVEH-lyo", en:"I wake up"},
        {icon:"🧍", ar:"mi alzo", translit:"mee AHL-tso", en:"I get up"},
        {icon:"😴", ar:"mi riposo", translit:"mee ree-POH-zo", en:"I rest"}
      ]}
    ],

    exercises: [
      {
        id:"it15-ex1", type:"mcq", title:"Exercise 1 — Reflexive Verbs",
        instructions:"Choose the correct answer.",
        items:[
          { promptText:"\"I wash myself\" is...", options:["lavo","mi lavo","ti lavo"], correct:1 },
          { promptText:"\"You get dressed\" (informal) is...", options:["mi vesto","si veste","ti vesti"], correct:2 },
          { promptText:"Which pronoun goes with \"lui/lei\"?", options:["mi","ti","si"], correct:2 },
          { promptText:"\"Mi chiamo Marco\" uses which verb?", options:["chiamarsi","lavarsi","vestirsi"], correct:0 }
        ]
      },
      {
        id:"it15-ex2", type:"matching", title:"Exercise 2 — Match the Verb",
        instructions:"Tap a verb, then tap its meaning.",
        pairs:[
          { left:"lavarsi", right:"to wash oneself" },
          { left:"vestirsi", right:"to get dressed" },
          { left:"chiamarsi", right:"to be called" },
          { left:"alzarsi", right:"to get up" }
        ]
      },
      {
        id:"it15-ex3", type:"translate", title:"Exercise 3 — Translate",
        instructions:"Type the English meaning.",
        items:[
          { icon:"🧼", ar:"Mi lavo la mattina", keywords:["wash","morning"] },
          { icon:"👕", ar:"Mi vesto velocemente", keywords:["get dressed","quickly"] },
          { icon:"😴", ar:"Mi riposo il weekend", keywords:["rest","weekend"] }
        ]
      },
      {
        id:"it15-ex4", type:"sentence", title:"Exercise 4 — Build the Sentence",
        instructions:"Tap the words in the right order.",
        items:[
          { words:["mattina","Mi lavo","la"], answer:["Mi lavo","la","mattina"] },
          { words:["presto","Mi sveglio"], answer:["Mi sveglio","presto"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"🧼", ar:"Mi lavo la mattina", plain:"Mi lavo la mattina", translit:"mee LAH-vo la mat-TEE-na", meaning:"I wash myself in the morning" },
      { icon:"👕", ar:"Mi vesto velocemente", plain:"Mi vesto velocemente", translit:"mee VEH-sto veh-lo-cheh-MEHN-teh", meaning:"I get dressed quickly" },
      { icon:"📛", ar:"Come ti chiami?", plain:"Come ti chiami?", translit:"KOH-meh tee kee-AH-mee", meaning:"What's your name?" },
      { icon:"😴", ar:"Mi riposo il weekend", plain:"Mi riposo il weekend", translit:"mee ree-POH-zo eel WEE-kehnd", meaning:"I rest on the weekend" }
    ]
  },

  {
    id: 16,
    unit: "u16",
    label: "Chapter 16",
    difficulty: 9,
    requires: 15,
    icon: "⚖️",
    title: "Comparisons",
    arabicTitle: "I Comparativi",
    desc: "Saying \"more than\", \"less than\", and \"as...as\" — built on adjectives you already know.",
    locked: false,

    content: [
      { type:"p", text:"You already know a set of adjectives from Chapters 3 and 7 (grande, piccolo, alto, simpatico...). This chapter shows how to compare two things using them." },
      { type:"h", text:"Più...di / Meno...di (More/Less...Than)" },
      { type:"pattern", ar:"più alto di · meno alto di", translit:"pyoo AHL-to dee · MEH-no AHL-to dee", desc:"taller than · shorter than (literally \"more tall than\" / \"less tall than\") — più/meno before the adjective, di before what you're comparing to." },
      { type:"h", text:"Così...Come (As...As)" },
      { type:"p", text:"For an equal comparison — \"as tall as\", not \"taller than\" — swap più/meno...di for come, optionally with così in front for emphasis: (così) alto come." },
      { type:"examples", items:[
        { icon:"⚖️", ar:"Marco è più alto di Luca", translit:"MAR-ko eh pyoo AHL-to dee LOO-ka", meaning:"Marco is taller than Luca" },
        { icon:"⚖️", ar:"Sono (così) alto come te", translit:"SOH-no koh-ZEE AHL-to KOH-meh teh", meaning:"I am as tall as you" }
      ]},
      { type:"note", html:"<strong>così is often dropped</strong> in casual speech — \"alto come te\" and \"così alto come te\" both mean the same thing; the così is optional." }
    ],

    vocabCategories: [
      { name:"Comparison Words", words:[
        {icon:"➕", ar:"più", translit:"pyoo", en:"more"},
        {icon:"➖", ar:"meno", translit:"MEH-no", en:"less"},
        {icon:"🔗", ar:"di", translit:"dee", en:"than (before a noun)"},
        {icon:"⚖️", ar:"come", translit:"KOH-meh", en:"as / like"},
        {icon:"🟰", ar:"così...come", translit:"koh-ZEE KOH-meh", en:"as...as"}
      ]}
    ],

    exercises: [
      {
        id:"it16-ex1", type:"mcq", title:"Exercise 1 — Comparisons",
        instructions:"Choose the correct answer.",
        items:[
          { promptText:"\"Taller than\" is...", options:["più alto di","alto come","meno alto"], correct:0 },
          { promptText:"\"As tall as\" is...", options:["più alto di","alto come","meno alto di"], correct:1 },
          { promptText:"Which word means \"less\"?", options:["più","meno","come"], correct:1 },
          { promptText:"\"Marco è più simpatico di Luca\" means...", options:["Marco is nicer than Luca","Marco is as nice as Luca","Marco is less nice than Luca"], correct:0 }
        ]
      },
      {
        id:"it16-ex2", type:"matching", title:"Exercise 2 — Match the Comparison",
        instructions:"Tap a phrase, then tap its meaning.",
        pairs:[
          { left:"più grande di", right:"bigger than" },
          { left:"meno grande di", right:"smaller than (less big)" },
          { left:"alto come", right:"as tall as" },
          { left:"più piccolo di", right:"smaller than" }
        ]
      },
      {
        id:"it16-ex3", type:"translate", title:"Exercise 3 — Translate",
        instructions:"Type the English meaning.",
        items:[
          { icon:"⚖️", ar:"Sono più alto di te", keywords:["taller"] },
          { icon:"🏠", ar:"La mia casa è più grande di un appartamento", keywords:["bigger"] },
          { icon:"⚖️", ar:"Sei simpatico come lui", keywords:["as nice"] }
        ]
      },
      {
        id:"it16-ex4", type:"sentence", title:"Exercise 4 — Build the Sentence",
        instructions:"Tap the words in the right order.",
        items:[
          { words:["di","alto","Sono","più","te"], answer:["Sono","più","alto","di","te"] },
          { words:["come","alto","Sei","me"], answer:["Sei","alto","come","me"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"⚖️", ar:"Sono più alto di te", plain:"Sono più alto di te", translit:"SOH-no pyoo AHL-to dee teh", meaning:"I am taller than you" },
      { icon:"🏠", ar:"La mia casa è più grande", plain:"La mia casa è più grande", translit:"la MEE-ah KAH-za eh pyoo GRAHN-deh", meaning:"My house is bigger" },
      { icon:"😊", ar:"Sei simpatico come lui", plain:"Sei simpatico come lui", translit:"sey seem-PAH-tee-ko KOH-meh loo-EE", meaning:"You are as nice as him" },
      { icon:"➖", ar:"Sono meno timido di lei", plain:"Sono meno timido di lei", translit:"SOH-no MEH-no TEE-mee-do dee lehy", meaning:"I am less shy than her" }
    ]
  },

  {
    id: 17,
    unit: "u17",
    label: "Chapter 17",
    difficulty: 9,
    requires: 16,
    icon: "🧭",
    title: "Asking for Directions",
    arabicTitle: "Chiedere Indicazioni",
    desc: "Finding your way — left, right, straight ahead, near and far — using the places from Chapter 6.",
    locked: false,

    content: [
      { type:"p", text:"Chapter 6 taught you the names of places. Now let's ask how to get to them." },
      { type:"h", text:"Dov'è...? (Where Is...?)" },
      { type:"pattern", ar:"Dov'è la stazione?", translit:"do-VEH la sta-tsee-OH-neh", desc:"Where is the station? — dov'è is a contraction of dove + è, used for asking the location of one specific thing." },
      { type:"h", text:"Giving Directions" },
      { type:"p", text:"Once you've asked, the answer is usually a short chain of these direction words in order — turn right, then straight, then it's near — rather than a full sentence." },
      { type:"examples", items:[
        { icon:"➡️", ar:"a destra", translit:"ah DEH-stra", meaning:"to the right" },
        { icon:"⬅️", ar:"a sinistra", translit:"ah see-NEE-stra", meaning:"to the left" },
        { icon:"⬆️", ar:"sempre dritto", translit:"SEHM-preh DREET-to", meaning:"straight ahead" },
        { icon:"📍", ar:"vicino / lontano", translit:"vee-CHEE-no / lon-TAH-no", meaning:"near / far" }
      ]},
      { type:"note", html:"<strong>sempre dritto</strong> reuses sempre from Chapter 14 (\"always\") — here it means \"keep going\" straight, a natural extension of the same word." }
    ],

    vocabCategories: [
      { name:"Directions", words:[
        {icon:"➡️", ar:"a destra", translit:"ah DEH-stra", en:"to the right"},
        {icon:"⬅️", ar:"a sinistra", translit:"ah see-NEE-stra", en:"to the left"},
        {icon:"⬆️", ar:"dritto", translit:"DREET-to", en:"straight"},
        {icon:"📍", ar:"vicino", translit:"vee-CHEE-no", en:"near"},
        {icon:"📍", ar:"lontano", translit:"lon-TAH-no", en:"far"},
        {icon:"❓", ar:"Dov'è...?", translit:"do-VEH", en:"Where is...?"}
      ]}
    ],

    exercises: [
      {
        id:"it17-ex1", type:"mcq", title:"Exercise 1 — Directions",
        instructions:"Choose the correct answer.",
        items:[
          { promptText:"\"Where is the station?\" is...", options:["Dov'è la stazione?","Che ore è la stazione?","Chi è la stazione?"], correct:0 },
          { promptText:"\"To the right\" is...", options:["a sinistra","a destra","dritto"], correct:1 },
          { promptText:"\"Straight ahead\" is...", options:["vicino","lontano","dritto"], correct:2 },
          { promptText:"\"Far\" is...", options:["vicino","lontano","destra"], correct:1 }
        ]
      },
      {
        id:"it17-ex2", type:"matching", title:"Exercise 2 — Match the Direction",
        instructions:"Tap a direction, then tap its meaning.",
        pairs:[
          { left:"a destra", right:"to the right" },
          { left:"a sinistra", right:"to the left" },
          { left:"vicino", right:"near" },
          { left:"lontano", right:"far" }
        ]
      },
      {
        id:"it17-ex3", type:"translate", title:"Exercise 3 — Translate",
        instructions:"Type the English meaning.",
        items:[
          { icon:"❓", ar:"Dov'è il ristorante?", keywords:["where","restaurant"] },
          { icon:"⬆️", ar:"Sempre dritto, poi a destra", keywords:["straight","right"] },
          { icon:"📍", ar:"La stazione è vicino", keywords:["station","near"] }
        ]
      },
      {
        id:"it17-ex4", type:"sentence", title:"Exercise 4 — Build the Sentence",
        instructions:"Tap the words in the right order.",
        items:[
          { words:["stazione?","la","Dov'è"], answer:["Dov'è","la","stazione?"] },
          { words:["destra","dritto,","a","Sempre"], answer:["Sempre","dritto,","a","destra"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"❓", ar:"Dov'è la stazione?", plain:"Dov'è la stazione?", translit:"do-VEH la sta-tsee-OH-neh", meaning:"Where is the station?" },
      { icon:"➡️", ar:"Sempre dritto, poi a destra", plain:"Sempre dritto, poi a destra", translit:"SEHM-preh DREET-to poy ah DEH-stra", meaning:"Straight ahead, then to the right" },
      { icon:"📍", ar:"È molto vicino", plain:"È molto vicino", translit:"eh MOHL-to vee-CHEE-no", meaning:"It's very near" },
      { icon:"📍", ar:"È un po' lontano", plain:"È un po' lontano", translit:"eh oon poh lon-TAH-no", meaning:"It's a bit far" }
    ]
  },

  {
    id: 18,
    unit: "u18",
    label: "Chapter 18",
    difficulty: 10,
    requires: 17,
    icon: "👨‍👩‍👧‍👦",
    title: "Family & Hobbies",
    arabicTitle: "Famiglia e Hobby",
    desc: "More family vocabulary, and talking about what you like to do in your free time.",
    locked: false,

    content: [
      { type:"p", text:"Chapter 3 introduced fratello, sorella, and nonno. This chapter rounds out the family, and adds a new pattern for talking about hobbies." },
      { type:"h", text:"More Family Words" },
      { type:"p", text:"These follow the same gender pattern you already know from Chapter 2 — most masculine words end in -o, most feminine in -a, so you can often guess the paired term once you know one half." },
      { type:"examples", items:[
        { icon:"👨", ar:"il padre / la madre", translit:"eel PAH-dreh / la MAH-dreh", meaning:"father / mother" },
        { icon:"💍", ar:"il marito / la moglie", translit:"eel ma-REE-to / la MOH-lyeh", meaning:"husband / wife" },
        { icon:"👶", ar:"i figli", translit:"ee FEE-lyee", meaning:"children (sons/kids)" }
      ]},
      { type:"h", text:"Mi Piace + Infinitive (Hobbies)" },
      { type:"pattern", ar:"Mi piace leggere", translit:"mee PYA-cheh LEHD-jeh-reh", desc:"I like to read — mi piace (Chapters 11-12) works with an infinitive verb too, not just a noun." },
      { type:"note", html:"<strong>Plural hobbies use mi piacciono:</strong> \"Mi piacciono queste scarpe\" from Chapter 12 already showed this — but with a single infinitive activity, always use mi piace, never mi piacciono." }
    ],

    vocabCategories: [
      { name:"Family & Hobbies", words:[
        {icon:"👨", ar:"il padre", translit:"eel PAH-dreh", en:"father"},
        {icon:"👩", ar:"la madre", translit:"la MAH-dreh", en:"mother"},
        {icon:"💍", ar:"il marito / la moglie", translit:"eel ma-REE-to / la MOH-lyeh", en:"husband / wife"},
        {icon:"📖", ar:"leggere", translit:"LEHD-jeh-reh", en:"to read"},
        {icon:"🏊", ar:"nuotare", translit:"nwo-TAH-reh", en:"to swim"},
        {icon:"✈️", ar:"viaggiare", translit:"vyad-JAH-reh", en:"to travel"},
        {icon:"⚽", ar:"giocare", translit:"jo-KAH-reh", en:"to play (a game/sport)"}
      ]}
    ],

    exercises: [
      {
        id:"it18-ex1", type:"mcq", title:"Exercise 1 — Family & Hobbies",
        instructions:"Choose the correct answer.",
        items:[
          { promptText:"\"Mother\" is...", options:["il padre","la madre","la moglie"], correct:1 },
          { promptText:"\"I like to read\" is...", options:["Mi piace leggere","Mi piacciono leggere","Leggo piace"], correct:0 },
          { promptText:"\"To travel\" is...", options:["nuotare","viaggiare","giocare"], correct:1 },
          { promptText:"\"Husband\" is...", options:["il marito","la moglie","il figlio"], correct:0 }
        ]
      },
      {
        id:"it18-ex2", type:"matching", title:"Exercise 2 — Match the Hobby",
        instructions:"Tap a verb, then tap its meaning.",
        pairs:[
          { left:"leggere", right:"to read" },
          { left:"nuotare", right:"to swim" },
          { left:"viaggiare", right:"to travel" },
          { left:"giocare", right:"to play" }
        ]
      },
      {
        id:"it18-ex3", type:"translate", title:"Exercise 3 — Translate",
        instructions:"Type the English meaning.",
        items:[
          { icon:"📖", ar:"Mi piace leggere", keywords:["like to read","read"] },
          { icon:"🏊", ar:"Mi piace nuotare", keywords:["swim"] },
          { icon:"👨‍👩‍👧", ar:"I miei genitori sono simpatici", keywords:["parents","nice"] }
        ]
      },
      {
        id:"it18-ex4", type:"sentence", title:"Exercise 4 — Build the Sentence",
        instructions:"Tap the words in the right order.",
        items:[
          { words:["leggere","Mi piace"], answer:["Mi piace","leggere"] },
          { words:["viaggiare","piace","Mi"], answer:["Mi","piace","viaggiare"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"📖", ar:"Mi piace leggere", plain:"Mi piace leggere", translit:"mee PYA-cheh LEHD-jeh-reh", meaning:"I like to read" },
      { icon:"🏊", ar:"Mi piace nuotare", plain:"Mi piace nuotare", translit:"mee PYA-cheh nwo-TAH-reh", meaning:"I like to swim" },
      { icon:"✈️", ar:"Mi piace viaggiare molto", plain:"Mi piace viaggiare molto", translit:"mee PYA-cheh vyad-JAH-reh MOHL-to", meaning:"I like to travel a lot" },
      { icon:"👨‍👩‍👧", ar:"I miei genitori sono simpatici", plain:"I miei genitori sono simpatici", translit:"ee mee-EH-ee jeh-nee-TOH-ree SOH-no seem-PAH-tee-chee", meaning:"My parents are nice" }
    ]
  },

  {
    id: 19,
    unit: "u19",
    label: "Chapter 19",
    difficulty: 10,
    requires: 18,
    icon: "🩺",
    title: "Health & Body",
    arabicTitle: "Salute e Corpo",
    desc: "Body parts, saying what hurts, and basic health phrases.",
    locked: false,

    content: [
      { type:"p", text:"A practical, common situation: not feeling well. This chapter covers body parts and the phrase you'll reach for most." },
      { type:"h", text:"Mi Fa Male... (My ... Hurts)" },
      { type:"pattern", ar:"Mi fa male la testa", translit:"mee fah MAH-leh la TEH-sta", desc:"My head hurts — literally \"it does bad to me, the head.\" Fa is the same fare you met in Chapter 11's weather expressions (fa caldo, fa freddo)." },
      { type:"h", text:"Feeling Sick" },
      { type:"p", text:"For general unwellness rather than a specific body part, Italian reaches for sentire (Chapter 4's \"to hear/feel\") in its reflexive form, or a simple stare (to be/stay) + adjective." },
      { type:"examples", items:[
        { icon:"🤒", ar:"Non mi sento bene", translit:"nohn mee SEHN-to BEH-neh", meaning:"I don't feel well" },
        { icon:"🤢", ar:"Sto male", translit:"stoh MAH-leh", meaning:"I'm sick / I feel bad" }
      ]},
      { type:"note", html:"<strong>Sto male vs. sto bene:</strong> from Chapter 1's \"Sto bene, grazie\" (I'm well, thank you) — swap bene for male and you get its opposite." }
    ],

    vocabCategories: [
      { name:"Body & Health", words:[
        {icon:"🤕", ar:"la testa", translit:"la TEH-sta", en:"the head"},
        {icon:"🤢", ar:"lo stomaco", translit:"lo STOH-ma-ko", en:"the stomach"},
        {icon:"✋", ar:"la mano", translit:"la MAH-no", en:"the hand"},
        {icon:"🦵", ar:"la gamba", translit:"la GAHM-ba", en:"the leg"},
        {icon:"🤒", ar:"non mi sento bene", translit:"nohn mee SEHN-to BEH-neh", en:"I don't feel well"},
        {icon:"🤢", ar:"sto male", translit:"stoh MAH-leh", en:"I'm sick"}
      ]}
    ],

    exercises: [
      {
        id:"it19-ex1", type:"mcq", title:"Exercise 1 — Health",
        instructions:"Choose the correct answer.",
        items:[
          { promptText:"\"My head hurts\" is...", options:["Mi fa male la testa","Ho la testa","Sono la testa"], correct:0 },
          { promptText:"\"I don't feel well\" is...", options:["Sto bene","Non mi sento bene","Ho fame"], correct:1 },
          { promptText:"\"The hand\" is...", options:["la gamba","la mano","lo stomaco"], correct:1 },
          { promptText:"\"Sto male\" means...", options:["I'm well","I'm sick","I'm hungry"], correct:1 }
        ]
      },
      {
        id:"it19-ex2", type:"matching", title:"Exercise 2 — Match the Body Part",
        instructions:"Tap a word, then tap its meaning.",
        pairs:[
          { left:"la testa", right:"the head" },
          { left:"lo stomaco", right:"the stomach" },
          { left:"la mano", right:"the hand" },
          { left:"la gamba", right:"the leg" }
        ]
      },
      {
        id:"it19-ex3", type:"translate", title:"Exercise 3 — Translate",
        instructions:"Type the English meaning.",
        items:[
          { icon:"🤕", ar:"Mi fa male la testa", keywords:["head hurts","head"] },
          { icon:"🤒", ar:"Non mi sento bene oggi", keywords:["don't feel well"] },
          { icon:"🦵", ar:"Mi fa male la gamba", keywords:["leg hurts","leg"] }
        ]
      },
      {
        id:"it19-ex4", type:"sentence", title:"Exercise 4 — Build the Sentence",
        instructions:"Tap the words in the right order.",
        items:[
          { words:["testa","male","Mi fa","la"], answer:["Mi fa","male","la","testa"] },
          { words:["bene","mi sento","Non"], answer:["Non","mi sento","bene"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"🤕", ar:"Mi fa male la testa", plain:"Mi fa male la testa", translit:"mee fah MAH-leh la TEH-sta", meaning:"My head hurts" },
      { icon:"🤒", ar:"Non mi sento bene", plain:"Non mi sento bene", translit:"nohn mee SEHN-to BEH-neh", meaning:"I don't feel well" },
      { icon:"🤢", ar:"Sto male oggi", plain:"Sto male oggi", translit:"stoh MAH-leh OHD-jee", meaning:"I feel sick today" },
      { icon:"🦵", ar:"Mi fa male la gamba", plain:"Mi fa male la gamba", translit:"mee fah MAH-leh la GAHM-ba", meaning:"My leg hurts" }
    ]
  },

  {
    id: 20,
    unit: "u20",
    label: "Chapter 20",
    difficulty: 11,
    requires: 19,
    icon: "🚧",
    title: "More Chapters — Coming Soon",
    arabicTitle: "Presto...",
    desc: "The next chapter is being written — more advanced grammar and everyday Italian are on the way.",
    locked: true
  }
];
