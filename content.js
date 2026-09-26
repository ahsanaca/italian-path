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
  { id:"u13", track:"standard", title:"Unit 13 — Coming Soon", desc:"More chapters are on the way." }
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
      { type:"p", text:"Let's start with the most useful verb in the language: essere (\"to be\"). You'll use it constantly, starting with introductions." },
      { type:"h", text:"Essere — Present Tense" },
      { type:"pattern", ar:"io sono · tu sei · lui/lei è", translit:"EE-oh SO-no · too SEH-ee · loo-EE / LEH-ee EH", desc:"I am · you are (informal) · he/she is — the three forms you'll use most when meeting someone." },
      { type:"p", text:"Notice Italian often drops the subject pronoun (io, tu, lui/lei) once the verb ending makes it clear who's being talked about — \"Sono Marco\" (I'm Marco) is completely natural on its own." },
      { type:"h", text:"Basic Greetings" },
      { type:"examples", items:[
        { icon:"👋", ar:"Ciao!", translit:"chow", meaning:"Hi! / Bye! (informal, any time)" },
        { icon:"☀️", ar:"Buongiorno", translit:"bwohn-JOR-no", meaning:"Good morning / Good day (formal)" },
        { icon:"🌆", ar:"Buonasera", translit:"bwoh-na-SEH-ra", meaning:"Good evening" },
        { icon:"🌙", ar:"Buonanotte", translit:"bwoh-na-NOHT-teh", meaning:"Good night" }
      ]},
      { type:"note", html:"<strong>Formal vs. informal:</strong> Ciao is only for friends, family, and people your own age. With someone you don't know well — especially older people or in business — use Buongiorno/Buonasera instead." }
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
      { type:"note", html:"<strong>Notice</strong> c'è from Chapter 8 makes a reappearance — \"c'è il sole\" uses the exact same \"there is\" pattern as \"c'è pizza.\"" }
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
      { type:"pattern", ar:"Quanto costa? · Costa venti euro", translit:"KWAHN-to KOH-sta · KOH-sta VEHN-tee EH-oo-ro", desc:"How much does it cost? · It costs twenty euros." },
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
    icon: "🚧",
    title: "More Chapters — Coming Soon",
    arabicTitle: "Presto...",
    desc: "The next chapter is being written — the essere-group in full, comparisons, and more everyday Italian are on the way.",
    locked: true
  }
];
