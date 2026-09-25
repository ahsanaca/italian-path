/* =====================================================================
   APP CONFIG BOOTSTRAP — reads the window.APP_* globals a language app's
   content.js sets before this file loads.
     - window.APP_TEXT_DIRECTION = 'rtl' for RTL-script TARGET languages
       (Arabic). Controls only the elements holding the language being
       taught (vocab, examples, sentence-builder, writing textarea).
     - window.APP_EXPLANATION_DIR = 'rtl' for RTL-script EXPLANATION
       languages (Urdu). Controls the general prose/UI direction. These
       two are independent — Italian-taught-in-Urdu sets only the second.
===================================================================== */
document.documentElement.classList.toggle('rtl-lang', window.APP_TEXT_DIRECTION === 'rtl');
document.documentElement.classList.toggle('rtl-explain', window.APP_EXPLANATION_DIR === 'rtl');

/* UI STRING DICTIONARY — every English string below is a fallback default,
   used as-is by apps that don't set window.APP_STRINGS. A fully-localized
   app (e.g. explaining in Urdu) sets window.APP_STRINGS = { key: "..." }
   in its content.js to override any subset of these. {placeholders} get
   substituted by t() at call time. */
const DEFAULT_STRINGS = {
  allChapters: "← All Chapters",
  chooseTrack: "Choose Your Track",
  chooseTrackDesc: "Each track teaches this language a different way — pick the one that fits what you're working on right now. You can switch anytime; progress in each track is kept separately.",
  yourJourney: "Your {lang} Journey",
  tapToStart: "Tap a chapter to start. New chapters unlock as the course grows.",
  voiceSetupLink: "🔊 Voice Setup Tips — improve pronunciation audio quality",
  switchTrack: "🔀 Switch Track",
  trackLabel: "Track:",
  requireFinishing: "Require finishing each chapter ({pct}%+) before the next one unlocks",
  xpEarned: "XP EARNED",
  dayStreak: "DAY STREAK",
  level: "LEVEL",
  overallProgress: "OVERALL PROGRESS",
  continueWhereLeftOff: "Continue where you left off",
  resume: "Resume →",
  readyToBegin: "Ready to begin?",
  startWith: "Start with {chapter}",
  start: "Start →",
  mixQuestions: "Mix questions from every chapter you've unlocked",
  testYourKnowledge: "🧠 Test Your Knowledge",
  startRandomTest: "Start Random Test →",
  notBuiltYet: "Not built yet",
  needsChapter: "Needs {chapter}",
  priorChapter: "prior chapter",
  courseIndex: "Course Index",
  courseIndexDesc: "A quick outline of every unit and chapter — click any unlocked row to jump straight there.",
  tabContent: "📖 Course Content",
  tabVocab: "📝 Vocabulary",
  tabExercises: "✏️ Exercises",
  tabSpeaking: "🎤 Speaking",
  continueVocab: "Continue to Vocabulary →",
  continueExercises: "Continue to Exercises →",
  continueSpeaking: "Continue to Speaking →",
  nextChapter: "Next Chapter: {icon} {label} →",
  backToDashboard: "Back to Dashboard →",
  backToDashboardPlain: "Back to Dashboard",
  checkAnswers: "Check My Answers",
  tapWordsBelow: "tap words below →",
  clear: "Clear",
  submit: "Submit",
  translateLabel: "Translate:",
  typeYourAnswer: "Type your answer",
  creativeGoodFeedback: "Nice work — saved. A teacher or native speaker can review this for accuracy.",
  creativeEmptyFeedback: "Write something first — even one short sentence counts!",
  score: "Score: {score} / {total}",
  levelBeginner: "Beginner",
  levelElementary: "Elementary",
  levelIntermediate: "Intermediate",
  levelAdvanced: "Advanced",
  testMixedMcq: "🧠 Mixed Multiple Choice",
  testMixedMcqDesc: "Questions randomly pulled from multiple chapters.",
  testMixedTranslate: "🧠 Mixed Translation",
  testMixedTranslateDesc: "Type the meaning of each sentence.",
  testMixedMatching: "🧠 Mixed Matching",
  testMixedMatchingDesc: "Tap a question, then tap its matching meaning.",
  testMixedSentence: "🧠 Mixed Sentence Building",
  testMixedSentenceDesc: "Tap the word chips in the correct order.",
  testHeading: "Test Your Knowledge",
  testIntro: "{n} questions randomly pulled from every chapter you've unlocked so far. Answer each section, then check it — your combined score appears below once everything's checked.",
  testComplete: "Test Complete! 🎉",
  testScoreLine: "You scored {score} / {total} ({pct}%) — earned +{xp} XP.",
  noSpeakingPhrases: "No speaking phrases for this chapter yet.",
  speakingInstructions: "Press <strong>Listen</strong> to hear the phrase, then <strong>Record</strong> yourself saying it for an instant similarity score.",
  listenBtn: "🔊 Listen",
  recordBtn: "🎙️ Record & Check",
  listeningBtn: "🎙️ Listening...",
  ttsPlaying: "🔊 Playing...",
  ttsPlaybackFailedDevice: "⚠️ Playback failed — check that {lang} voice data is installed on this device.",
  ttsNotSupported: "⚠️ This browser doesn't support text-to-speech.",
  ttsPlaybackFailedGeneric: "⚠️ Playback failed.",
  micPermissionDenied: "Microphone/speech permission was denied — enable it in your device settings to use this feature.",
  sttPrompt: "Say the phrase now",
  sttNotSupported: "⚠️ This browser doesn't support speech recognition — try the app instead.",
  couldntCaptureAudio: "Couldn't capture audio ({err}). Try again.",
  nothingRecognized: "(nothing recognized)",
  verdictExcellent: "Excellent! 🌟 ({pct}% match)",
  verdictClose: "Close — keep practicing. ({pct}% match)",
  verdictTryAgain: "Try again. ({pct}% match)",
  prevBtn: "← Prev",
  nextBtn: "Next →",
  youSaid: "You said:",
};
function t(key, vars) {
  let s = (window.APP_STRINGS && window.APP_STRINGS[key]) || DEFAULT_STRINGS[key] || key;
  if (vars) for (const k in vars) s = s.split('{' + k + '}').join(vars[k]);
  return s;
}

/* =====================================================================
   FIREBASE — cross-device progress sync, locked down properly.

   This is the shared engine, used by every language app. Each app sets
   its own `window.firebaseConfig` in its content.js, BEFORE this file
   loads — this file never hardcodes a project. An app that doesn't set
   window.firebaseConfig at all runs local-only: no sign-in screen, no
   cloud sync, nothing breaks. That's the default for a new trial app
   until you're ready to wire up accounts for it.

   IMPORTANT: the apiKey/config is NOT a secret. Firebase web config is
   meant to be public — anyone can see it in page source regardless of
   how carefully you hide the file. That's normal and safe. Real
   security comes entirely from the Firestore Security Rules below —
   THAT is what actually stops other people from reading or editing
   anyone's data. Skipping that (or leaving Firestore in "test mode")
   is what makes a Firebase project genuinely open to anyone.

   HOW TO SET UP A NEW LANGUAGE APP'S FIREBASE PROJECT (~15 minutes):
   1. https://console.firebase.google.com → "Add project".
   2. Build → Authentication → "Get started" → enable "Email/Password".
   3. Build → Firestore Database → "Create database" → "Start in
      production mode" (NOT test mode). Then Rules tab → replace with:

        rules_version = '2';
        service cloud.firestore {
          match /databases/{database}/documents {
            match /users/{userId} {
              allow read, write: if request.auth != null
                                  && request.auth.uid == userId;
            }
          }
        }

      A signed-in user can only ever read/write their own document —
      never anyone else's, never anonymously.
   4. Project settings → General → "Your apps" → </> (web) icon →
      register an app → copy the firebaseConfig object it shows you
      into that language app's content.js as `window.firebaseConfig`.
===================================================================== */
const firebaseConfig = (typeof window !== 'undefined' && window.firebaseConfig) || {};

function isFirebaseConfigured() {
  return !!(firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_API_KEY_HERE");
}

let fbAuth = null;
let fbDb = null;
let currentUser = null;

if (isFirebaseConfigured() && typeof firebase !== 'undefined') {
  try {
    firebase.initializeApp(firebaseConfig);
    fbAuth = firebase.auth();
    fbDb = firebase.firestore();
  } catch (e) {
    console.error('Firebase init failed:', e);
  }
}

async function loadCloudProgress() {
  try {
    const doc = await fbDb.collection('users').doc(currentUser.uid).get();
    if (doc.exists) {
      progress = normalizeProgress(doc.data());
    } else {
      // First time this account has signed in — push whatever local
      // progress already exists on this browser up to the cloud.
      saveProgress(progress);
    }
  } catch (e) {
    console.error('Failed to load cloud progress, using local copy instead:', e);
  }
}

function renderLoginScreen(mode) {
  currentView = 'login';
  root.innerHTML = `
    <div class="login-wrap">
      <div class="login-card">
        <div class="login-icon">📚</div>
        <h2>${mode === 'signup' ? 'Create Your Account' : 'Sign In'}</h2>
        <p>Sign in to sync your progress across devices — or skip it and use this device only.</p>
        <input type="email" id="loginEmail" placeholder="Email">
        <input type="password" id="loginPassword" placeholder="Password (6+ characters)">
        <div class="login-error" id="loginError"></div>
        <div class="login-info" id="loginInfo" style="display:none;"></div>
        <button class="action-btn" onclick="submitAuth('${mode}')">${mode === 'signup' ? 'Create Account' : 'Sign In'}</button>
        <p class="login-switch">
          ${mode === 'signup'
            ? `Already have an account? <a onclick="renderLoginScreen('signin')">Sign in</a>`
            : `New here? <a onclick="renderLoginScreen('signup')">Create an account</a> &nbsp;·&nbsp; <a onclick="submitForgotPassword()">Forgot password?</a>`}
        </p>
        <button class="action-btn secondary" onclick="skipLogin()">Continue without an account</button>
      </div>
    </div>
  `;
}
function submitAuth(mode) {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const errEl = document.getElementById('loginError');
  errEl.textContent = '';
  if (!email || !password) { errEl.textContent = 'Please enter both email and password.'; return; }
  const action = mode === 'signup'
    ? fbAuth.createUserWithEmailAndPassword(email, password)
    : fbAuth.signInWithEmailAndPassword(email, password);
  action.catch(e => { errEl.textContent = e.message; });
  // Success is handled by the onAuthStateChanged listener in initApp().
}
function submitForgotPassword() {
  const errEl = document.getElementById('loginError');
  const infoEl = document.getElementById('loginInfo');
  errEl.textContent = ''; infoEl.style.display = 'none';
  const email = document.getElementById('loginEmail').value.trim();
  if (!email) { errEl.textContent = 'Enter your email above first, then tap "Forgot password?" again.'; return; }
  if (!fbAuth) { errEl.textContent = 'Password reset needs the account system to be configured.'; return; }
  fbAuth.sendPasswordResetEmail(email).then(() => {
    infoEl.style.display = 'block';
    infoEl.textContent = `📩 A password reset link has been sent to ${email}. Check your inbox (and spam folder).`;
  }).catch(e => { errEl.textContent = e.message; });
}
function skipLogin() {
  enterApp();
}
function doSignOut() {
  if (fbAuth) fbAuth.signOut();
}

/* ---- One-time "improve your voice quality" tip screen, shown after
   sign-in/skip, once per device (tracked separately from cloud progress
   since it's a device setting, not account data). Reachable again anytime
   via the "Voice Setup Tips" link on the dashboard. ---- */
const VOICE_SETUP_KEY = (window.APP_ID || 'app') + "VoiceSetupSeen";
function hasSeenVoiceSetup() {
  try { return localStorage.getItem(VOICE_SETUP_KEY) === '1'; } catch(e) { return false; }
}
function markVoiceSetupSeen() {
  try { localStorage.setItem(VOICE_SETUP_KEY, '1'); } catch(e) {}
}
function enterApp() {
  if (!hasSeenVoiceSetup()) renderVoiceSetupScreen();
  else showDashboard();
}
function renderVoiceSetupScreen() {
  currentView = 'voiceSetup';
  const langName = window.APP_LANGUAGE_NAME || 'this language';
  root.innerHTML = `
    <div class="dash-header">
      <h1>🔊 Test Your Setup</h1>
      <p>The app reads ${langName} words and phrases aloud using your phone's own built-in voice. Most phones already have one, but a one-time setting makes it noticeably clearer. Takes about a minute, and only needs doing once per device — this doesn't block anything, so feel free to skip it and come back later.</p>
    </div>
    <div class="free-notice" style="margin-bottom:14px;">
      <strong>📱 Android</strong>
      <ol style="margin:8px 0 0 18px; padding:0; line-height:1.8;">
        <li>Settings → Language &amp; input → Text-to-speech output</li>
        <li>Set preferred engine to <strong>Google Text-to-speech Engine</strong></li>
        <li>Tap its settings gear → Install voice data → ${langName} → download the highest-quality option</li>
      </ol>
    </div>
    <div class="free-notice" style="margin-bottom:18px;">
      <strong>🍏 iPhone</strong>
      <ol style="margin:8px 0 0 18px; padding:0; line-height:1.8;">
        <li>Settings → Accessibility → Spoken Content → Voices</li>
        <li>Find ${langName} and download it</li>
        <li>If offered, choose the <strong>Enhanced</strong> or <strong>Premium</strong> quality</li>
      </ol>
    </div>
    ${window.APP_VOICE_NOTE ? `<p style="font-size:13px;color:#7f8c8d;margin-bottom:18px;">${window.APP_VOICE_NOTE}</p>` : ''}
    <div style="display:flex; gap:12px; flex-wrap:wrap;">
      <button class="action-btn" onclick="markVoiceSetupSeen(); showDashboard();">Done — Continue to the App →</button>
      <button class="action-btn secondary" onclick="showDashboard();">Skip for now — remind me next time</button>
    </div>
  `;
}

function initApp() {
  touchVisit();
  if (fbAuth) {
    fbAuth.onAuthStateChanged(async (user) => {
      const signOutBtn = document.getElementById('signOutBtn');
      if (user) {
        currentUser = user;
        if (signOutBtn) signOutBtn.style.display = 'inline-block';
        await loadCloudProgress();
        enterApp();
      } else {
        currentUser = null;
        if (signOutBtn) signOutBtn.style.display = 'none';
        renderLoginScreen('signin');
      }
    });
  } else {
    enterApp();
  }
}


/* =====================================================================
   PROGRESS STORE — persisted in the browser via localStorage so it
   survives closing the tab.
   Structure: {
     xp: number,
     streak: number,
     lastVisitDate: "YYYY-MM-DD" | null,
     lastChapterId: number | null,
     chapters: { [chapterId]: { exercises: { [exId]: scorePct },
                                 speakingAttempts: number,
                                 speakAttemptedIdx: number[] } }
   }
===================================================================== */
const PROGRESS_KEY = (window.APP_ID || 'app') + "Progress";
function normalizeProgress(p) {
  if (!p || typeof p !== 'object') {
    return { xp:0, streak:0, lastVisitDate:null, lastChapterId:null, chapters:{}, gatingEnabled:false, selectedTrack:tracks[0].id };
  }
  p.xp = p.xp || 0;
  p.streak = p.streak || 0;
  p.lastVisitDate = p.lastVisitDate || null;
  p.lastChapterId = p.lastChapterId != null ? p.lastChapterId : null;
  p.chapters = p.chapters || {};
  p.gatingEnabled = p.gatingEnabled || false;
  p.selectedTrack = tracks.some(t => t.id === p.selectedTrack) ? p.selectedTrack : tracks[0].id;
  return p;
}
function loadProgress() {
  try {
    return normalizeProgress(JSON.parse(localStorage.getItem(PROGRESS_KEY)));
  } catch(e) {}
  return normalizeProgress(null);
}
function saveProgress(p) {
  try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); } catch(e) {}
  // Best-effort cloud sync — never blocks the UI, and silently no-ops
  // if Firebase isn't configured or nobody's signed in.
  if (fbDb && currentUser) {
    fbDb.collection('users').doc(currentUser.uid).set(p).catch(e => {
      console.error('Cloud sync failed (saved locally regardless):', e);
    });
  }
}
let progress = loadProgress();

function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
}
function daysBetween(a, b) {
  const [ay,am,ad] = a.split('-').map(Number);
  const [by,bm,bd] = b.split('-').map(Number);
  const da = new Date(ay, am-1, ad), db = new Date(by, bm-1, bd);
  return Math.round((db - da) / 86400000);
}
function touchVisit() {
  const today = todayStr();
  if (progress.lastVisitDate === today) return; // already counted today
  if (progress.lastVisitDate && daysBetween(progress.lastVisitDate, today) === 1) {
    progress.streak = (progress.streak || 0) + 1;
  } else {
    progress.streak = 1;
  }
  progress.lastVisitDate = today;
  saveProgress(progress);
}
function levelLabel(xp) {
  if (xp < 40) return t('levelBeginner');
  if (xp < 100) return t('levelElementary');
  if (xp < 200) return t('levelIntermediate');
  return t('levelAdvanced');
}

function chapterProgressPct(chapter) {
  if (chapter.locked) return 0;
  const cp = progress.chapters[chapter.id];
  if (!cp) return 0;
  const totalEx = chapter.exercises ? chapter.exercises.length : 0;
  const doneEx = cp.exercises ? Object.keys(cp.exercises).length : 0;
  const exPct = totalEx ? (doneEx / totalEx) : (totalEx === 0 ? 1 : 0);
  const totalSpeak = chapter.speakingPhrases ? chapter.speakingPhrases.length : 0;
  const speakPct = totalSpeak ? Math.min(1, (cp.speakingAttempts || 0) / totalSpeak) : (totalSpeak === 0 ? 1 : 0);
  const pct = (exPct * 0.7 + speakPct * 0.3) * 100;
  return Math.round(pct);
}
const COMPLETION_THRESHOLD = 70; // % of a chapter needed to unlock its successor when gating is on

// A chapter is accessible if: it has real content (not locked==true, which
// means "not built yet"), AND either gating is off, or it has no
// prerequisite, or the prerequisite chapter is completed past the threshold.
function isChapterAccessible(chapter) {
  if (chapter.locked) return false;
  if (!progress.gatingEnabled) return true;
  if (chapter.requires == null) return true;
  const reqChapter = chapters.find(c => c.id === chapter.requires);
  if (!reqChapter) return true;
  return chapterProgressPct(reqChapter) >= COMPLETION_THRESHOLD;
}

function chaptersInTrack() {
  return chapters.filter(c => (c.track || tracks[0].id) === progress.selectedTrack);
}
function unitsInTrack() {
  return units.filter(u => (u.track || tracks[0].id) === progress.selectedTrack);
}
function overallPct() {
  const unlocked = chaptersInTrack().filter(c => !c.locked);
  if (!unlocked.length) return 0;
  const sum = unlocked.reduce((a,c) => a + chapterProgressPct(c), 0);
  return Math.round(sum / unlocked.length);
}
function updateOverallBar() {
  const pct = overallPct();
  const fillEl = document.getElementById('overallFill');
  const pctEl = document.getElementById('overallPct');
  if (fillEl) fillEl.style.width = pct + '%';
  if (pctEl) pctEl.textContent = pct + '%';
}
function refreshCurrentView() {
  updateOverallBar();
  if (currentView === 'dashboard') renderDashboard();
  else if (currentView === 'index') renderIndex();
}

/* ===================== NORMALIZATION / SCORING HELPERS ===================== */
function normalizeAr(str) {
  return str
    .replace(/[\u064B-\u0652\u0670]/g, "")
    .replace(/[إأآا]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/[ىي]/g, "ي")
    .replace(/[؟?,،]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({length:m+1}, () => new Array(n+1).fill(0));
  for (let i=0;i<=m;i++) dp[i][0]=i;
  for (let j=0;j<=n;j++) dp[0][j]=j;
  for (let i=1;i<=m;i++) for (let j=1;j<=n;j++)
    dp[i][j] = a[i-1]===b[j-1] ? dp[i-1][j-1] : 1+Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
  return dp[m][n];
}

/* =====================================================================
   QUESTION BANK — pools questions from every unlocked chapter's own
   exercises at runtime. There's no separate database file: each
   chapter's `exercises` array (in the data layer above) IS the source
   of truth. This function just flattens and tags them so they can be
   sampled across chapters for the Test Your Knowledge feature below.
===================================================================== */
function buildQuestionBank() {
  const bank = { mcq: [], translate: [], matching: [], sentence: [] };
  chaptersInTrack().filter(c => !c.locked).forEach(ch => {
    (ch.exercises || []).forEach(ex => {
      if (ex.type === 'mcq') {
        ex.items.forEach(it => bank.mcq.push({ ...it, sourceChapterId: ch.id, sourceLabel: ch.label }));
      } else if (ex.type === 'translate') {
        ex.items.forEach(it => bank.translate.push({ ...it, sourceChapterId: ch.id, sourceLabel: ch.label }));
      } else if (ex.type === 'matching') {
        ex.pairs.forEach(p => bank.matching.push({ ...p, sourceChapterId: ch.id, sourceLabel: ch.label }));
      } else if (ex.type === 'sentence') {
        ex.items.forEach(it => bank.sentence.push({ ...it, sourceChapterId: ch.id, sourceLabel: ch.label }));
      }
      // 'creative' items are excluded — they're not auto-gradable, so they
      // don't belong in a randomized, self-scoring test pool.
    });
  });
  return bank;
}
function sampleArray(arr, n) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.min(n, copy.length));
}

let testSession = null;

function startKnowledgeTest() {
  const bank = buildQuestionBank();
  const mcqSample = sampleArray(bank.mcq, 6);
  const translateSample = sampleArray(bank.translate, 2);
  const matchingSample = sampleArray(bank.matching, 3);
  const sentenceSample = sampleArray(bank.sentence, 2);

  const blocks = [];
  if (mcqSample.length) blocks.push({ id: 'test-mcq', type: 'mcq', title: t('testMixedMcq'), instructions: t('testMixedMcqDesc'), items: mcqSample });
  if (translateSample.length) blocks.push({ id: 'test-translate', type: 'translate', title: t('testMixedTranslate'), instructions: t('testMixedTranslateDesc'), items: translateSample });
  if (matchingSample.length) blocks.push({ id: 'test-matching', type: 'matching', title: t('testMixedMatching'), instructions: t('testMixedMatchingDesc'), pairs: matchingSample.map(p => ({ left: p.left, right: p.right })) });
  if (sentenceSample.length) blocks.push({ id: 'test-sentence', type: 'sentence', title: t('testMixedSentence'), instructions: t('testMixedSentenceDesc'), items: sentenceSample.map(it => ({ words: it.words, answer: it.answer })) });

  const totalQuestions = mcqSample.length + translateSample.length + matchingSample.length + sentenceSample.length;
  testSession = { blockIds: blocks.map(b => b.id), results: {}, totalQuestions };

  currentView = 'test';
  root.innerHTML = `
    <button class="back-btn" onclick="showDashboard()">${t('allChapters')}</button>
    <div class="chapter-hero">
      <div class="ch-icon-big">🧠</div>
      <h2>${t('testHeading')}</h2>
      <p>${t('testIntro', {n: totalQuestions})}</p>
    </div>
    <div class="test-summary" id="testSummary"></div>
    <div id="testBlocks">
      ${blocks.map(ex => `<div style="margin-bottom:24px;">${renderExerciseBlock(ex)}</div>`).join('')}
    </div>
  `;
}

function recordTestBlockResult(exId, score, total) {
  if (!testSession) return;
  testSession.results[exId] = { score, total };
  const answered = Object.keys(testSession.results).length;
  if (answered === testSession.blockIds.length) {
    const totals = Object.values(testSession.results).reduce(
      (acc, r) => ({ score: acc.score + r.score, total: acc.total + r.total }), { score: 0, total: 0 }
    );
    const pct = Math.round((totals.score / totals.total) * 100);
    const xpGain = totals.score * 2;
    progress.xp = (progress.xp || 0) + xpGain;
    saveProgress(progress);
    const summary = document.getElementById('testSummary');
    summary.classList.add('show');
    summary.innerHTML = `
      <h3>${t('testComplete')}</h3>
      <p>${t('testScoreLine', {score: totals.score, total: totals.total, pct, xp: xpGain})}</p>
      <button class="action-btn" onclick="showDashboard()">${t('backToDashboardPlain')}</button>
    `;
    updateOverallBar();
  }
}

/* ===================== ROUTER ===================== */
const root = document.getElementById('pageRoot');
let currentChapter = null;
let currentTab = 'content';
let currentView = 'dashboard'; // 'dashboard' | 'index' | 'chapter'

function showDashboard() {
  currentView = 'dashboard';
  currentChapter = null;
  renderDashboard();
  updateOverallBar();
}

function showIndex() {
  currentView = 'index';
  currentChapter = null;
  renderIndex();
  updateOverallBar();
}

function showTrackSelector() {
  // Single-track apps (most languages) skip the picker entirely — nothing
  // to choose. Multi-track apps (like Arabic's Classical/Spoken split) show it.
  if (tracks.length <= 1) {
    if (tracks.length === 1) selectTrack(tracks[0].id);
    else showDashboard();
    return;
  }
  currentView = 'trackSelect';
  currentChapter = null;
  root.innerHTML = `
    <div class="dash-header">
      <h1>${t('chooseTrack')}</h1>
      <p>${t('chooseTrackDesc')}</p>
    </div>
    <div class="track-grid">
      ${tracks.map(t => `
        <div class="track-card" onclick="selectTrack('${t.id}')">
          <div class="tc-icon">${t.icon}</div>
          <h2>${t.title}</h2>
          <p>${t.desc}</p>
        </div>`).join('')}
    </div>
  `;
}
function selectTrack(trackId) {
  progress.selectedTrack = trackId;
  saveProgress(progress);
  showDashboard();
}

function nextChapterInTrack() {
  const list = chaptersInTrack();
  const idx = list.findIndex(c => c.id === currentChapter.id);
  if (idx === -1) return null;
  for (let i = idx + 1; i < list.length; i++) {
    if (!list[i].locked) return list[i];
  }
  return null;
}
function goToNextChapter() {
  const next = nextChapterInTrack();
  if (next) openChapter(next.id); else showDashboard();
}

function openChapter(id) {
  const ch = chapters.find(c => c.id === id);
  if (!ch || !isChapterAccessible(ch)) return;
  currentView = 'chapter';
  currentChapter = ch;
  currentTab = 'content';
  progress.lastChapterId = id;
  saveProgress(progress);
  renderChapter();
}

/* ===================== DASHBOARD RENDER ===================== */
function difficultyStars(n) {
  if (!n) return '';
  return `<span style="font-size:11px;color:#f39c12;">${'⭐'.repeat(n)}</span>`;
}

function renderChapterCard(ch) {
  const pct = chapterProgressPct(ch);
  const numBadgeClass = ch.type === 'checkpoint' ? 'ch-num checkpoint-badge' : 'ch-num';

  if (ch.locked) {
    return `
      <div class="chapter-card locked">
        <span class="lock-badge">🔒</span>
        <span class="${numBadgeClass}">${ch.label}</span>
        <div class="ch-icon">${ch.icon}</div>
        <h3>${ch.title}</h3>
        <div class="ch-arabic native-text">${ch.arabicTitle}</div>
        <div class="ch-desc">${ch.desc}</div>
        <div>${difficultyStars(ch.difficulty)}</div>
      </div>`;
  }

  if (!isChapterAccessible(ch)) {
    const reqChapter = chapters.find(c => c.id === ch.requires);
    const reqPct = reqChapter ? chapterProgressPct(reqChapter) : 0;
    return `
      <div class="chapter-card locked">
        <span class="lock-badge">🔒</span>
        <span class="${numBadgeClass}">${ch.label}</span>
        <div class="ch-icon">${ch.icon}</div>
        <h3>${ch.title}</h3>
        <div class="ch-arabic native-text">${ch.arabicTitle}</div>
        <div class="ch-desc">Finish "${reqChapter ? reqChapter.label : 'the previous chapter'}" (${reqPct}%/${COMPLETION_THRESHOLD}% needed) to unlock.</div>
        <div>${difficultyStars(ch.difficulty)}</div>
      </div>`;
  }

  return `
    <div class="chapter-card" onclick="openChapter(${ch.id})">
      <span class="${numBadgeClass}">${ch.label}</span>
      <div class="ch-icon">${ch.icon}</div>
      <h3>${ch.title}</h3>
      <div class="ch-arabic native-text">${ch.arabicTitle}</div>
      <div class="ch-desc">${ch.desc}</div>
      <div style="margin-bottom:6px;">${difficultyStars(ch.difficulty)}</div>
      <div class="ch-progress-bar"><div class="ch-progress-fill" style="width:${pct}%"></div></div>
      <div class="ch-progress-label">${pct}% complete</div>
    </div>`;
}

function renderStatsBar() {
  const xp = progress.xp || 0;
  return `
    <div class="stats-bar">
      <div class="stat-card"><div class="stat-value">${xp}</div><div class="stat-label">${t('xpEarned')}</div></div>
      <div class="stat-card"><div class="stat-value">🔥 ${progress.streak || 0}</div><div class="stat-label">${t('dayStreak')}</div></div>
      <div class="stat-card"><div class="stat-value">${levelLabel(xp)}</div><div class="stat-label">${t('level')}</div></div>
      <div class="stat-card"><div class="stat-value">${overallPct()}%</div><div class="stat-label">${t('overallProgress')}</div></div>
    </div>`;
}

function renderContinueCard() {
  const lastCh = progress.lastChapterId != null
    ? chaptersInTrack().find(c => c.id === progress.lastChapterId && isChapterAccessible(c))
    : null;
  if (lastCh) {
    const pct = chapterProgressPct(lastCh);
    return `
      <div class="continue-card">
        <div>
          <div class="cc-text">${t('continueWhereLeftOff')}</div>
          <div class="cc-title">${lastCh.icon} ${lastCh.label}: ${lastCh.title} (${pct}%)</div>
        </div>
        <button onclick="openChapter(${lastCh.id})">${t('resume')}</button>
      </div>`;
  }
  const first = chaptersInTrack().find(c => !c.locked);
  if (!first) return '';
  return `
    <div class="continue-card">
      <div>
        <div class="cc-text">${t('readyToBegin')}</div>
        <div class="cc-title">${first.icon} ${t('startWith', {chapter: first.label + ': ' + first.title})}</div>
      </div>
      <button onclick="openChapter(${first.id})">${t('start')}</button>
    </div>`;
}

function renderTestCta() {
  const bank = buildQuestionBank();
  const totalAvailable = bank.mcq.length + bank.translate.length + bank.matching.length + bank.sentence.length;
  if (totalAvailable < 4) return ''; // not enough content yet to make a meaningful test
  return `
    <div class="test-cta">
      <div>
        <div class="tc-text">${t('mixQuestions')}</div>
        <div class="tc-title">${t('testYourKnowledge')}</div>
      </div>
      <button onclick="startKnowledgeTest()">${t('startRandomTest')}</button>
    </div>`;
}

function renderDashboard() {
  const unitBlocks = unitsInTrack().map(u => {
    const unitChapters = chaptersInTrack().filter(c => c.unit === u.id);
    if (!unitChapters.length) return '';
    return `
      <div class="unit-heading"><h2>${u.title}</h2><p>${u.desc}</p></div>
      <div class="chapter-grid">${unitChapters.map(renderChapterCard).join('')}</div>`;
  }).join('');

  const currentTrackDef = tracks.find(t => t.id === progress.selectedTrack);
  const banner = window.APP_BANNER;
  const bannerHtml = banner ? `
    <div class="free-banner">
      ${banner.line1 ? `<div class="fb-line1">${banner.line1}</div>` : ''}
      ${banner.quoteNative ? `<div class="fb-verse native-text">${banner.quoteNative}</div>` : ''}
      ${banner.quoteTranslation ? `<div class="fb-verse-en">${banner.quoteTranslation}</div>` : ''}
      ${banner.line2 ? `<div class="fb-line2">${banner.line2}</div>` : ''}
      <div style="margin-top:8px;"><a style="color:#5b3fa6;cursor:pointer;font-size:13px;" onclick="renderVoiceSetupScreen()">${t('voiceSetupLink')}</a></div>
    </div>` : '';
  root.innerHTML = `
    <div class="dash-header">
      <h1>${t('yourJourney', {lang: window.APP_LANGUAGE_NAME || 'Language'})}</h1>
      <p>${t('tapToStart')}</p>
    </div>
    ${bannerHtml}
    ${tracks.length > 1 ? `
    <div class="track-banner">
      <span>${currentTrackDef.icon} ${t('trackLabel')} <strong>${currentTrackDef.title}</strong></span>
      <button onclick="showTrackSelector()">${t('switchTrack')}</button>
    </div>` : ''}
    <div class="gating-toggle">
      <label class="switch">
        <input type="checkbox" ${progress.gatingEnabled ? 'checked' : ''} onchange="toggleGating(this.checked)">
        <span class="switch-slider"></span>
      </label>
      <span>${t('requireFinishing', {pct: COMPLETION_THRESHOLD})}</span>
    </div>
    ${renderStatsBar()}
    ${renderContinueCard()}
    ${renderTestCta()}
    ${unitBlocks}
  `;
}

function toggleGating(checked) {
  progress.gatingEnabled = checked;
  saveProgress(progress);
  renderDashboard();
}

/* ===================== INDEX RENDER ===================== */
function renderIndex() {
  const unitBlocks = unitsInTrack().map(u => {
    const unitChapters = chaptersInTrack().filter(c => c.unit === u.id);
    if (!unitChapters.length) return '';
    const rows = unitChapters.map(ch => {
      const pct = chapterProgressPct(ch);
      if (ch.locked) {
        return `
          <div class="index-row locked">
            <span class="idx-icon">🔒</span>
            <span class="idx-title">${ch.label}: ${ch.title}</span>
            <span class="idx-ar native-text">${ch.arabicTitle}</span>
            <span class="idx-pct">${t('notBuiltYet')}</span>
          </div>`;
      }
      if (!isChapterAccessible(ch)) {
        const reqChapter = chapters.find(c => c.id === ch.requires);
        return `
          <div class="index-row locked">
            <span class="idx-icon">🔒</span>
            <span class="idx-title">${ch.label}: ${ch.title}</span>
            <span class="idx-ar native-text">${ch.arabicTitle}</span>
            <span class="idx-pct">${t('needsChapter', {chapter: reqChapter ? reqChapter.label : t('priorChapter')})}</span>
          </div>`;
      }
      return `
        <div class="index-row" onclick="openChapter(${ch.id})">
          <span class="idx-icon">${ch.icon}</span>
          <span class="idx-title">${ch.label}: ${ch.title} ${difficultyStars(ch.difficulty)}</span>
          <span class="idx-ar native-text">${ch.arabicTitle}</span>
          <span class="idx-pct">${pct}%</span>
        </div>`;
    }).join('');
    return `<div class="index-unit"><h3>${u.title}</h3>${rows}</div>`;
  }).join('');

  root.innerHTML = `
    <div class="dash-header">
      <h1>${t('courseIndex')}</h1>
      <p>${t('courseIndexDesc')}</p>
    </div>
    ${unitBlocks}
  `;
}

/* ===================== CHAPTER RENDER ===================== */
function renderChapter() {
  const ch = currentChapter;
  root.innerHTML = `
    <button class="back-btn" onclick="showDashboard()">${t('allChapters')}</button>
    <div class="chapter-hero">

      <div class="ch-icon-big">${ch.icon}</div>
      <h2>${ch.title}</h2>
      <div class="ch-arabic-big native-text">${ch.arabicTitle}</div>
      <p>${ch.desc}</p>
    </div>
    <div class="nav-tabs">
      <button data-tab="content" class="tab-btn">${t('tabContent')}</button>
      <button data-tab="vocab" class="tab-btn">${t('tabVocab')}</button>
      <button data-tab="exercises" class="tab-btn">${t('tabExercises')}</button>
      <button data-tab="speaking" class="tab-btn">${t('tabSpeaking')}</button>
    </div>
    <div class="tab-panel" id="panel-content"></div>
    <div class="tab-panel" id="panel-vocab"></div>
    <div class="tab-panel" id="panel-exercises"></div>
    <div class="tab-panel" id="panel-speaking"></div>
  `;

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  renderContentTab();
  renderVocabTab();
  renderExercisesTab();
  renderSpeakingTab();
  switchTab('content');
}

function switchTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-' + tab).classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
}

/* ---- Course Content tab: generic block renderer ---- */
function renderContentTab() {
  const blocks = currentChapter.content || [];
  let html = '';
  blocks.forEach(b => {
    switch (b.type) {
      case 'p': html += `<p>${b.text}</p>`; break;
      case 'h': html += `<h3 class="block-h">${b.text}</h3>`; break;
      case 'wordcard':
        html += `<div class="word-card" style="position:relative;">
          <button class="listen-icon-btn" onclick="speakWord('${b.ar}', event)" title="Listen">🔊</button>
          <div class="wc-icon">${b.icon||''}</div>
          <div class="wc-ar native-text">${b.ar}</div>
          <div class="wc-translit">${b.translit}</div>
          <div class="wc-meaning">${b.meaning}</div>
        </div>`; break;
      case 'charlist':
        html += `<ol class="char-list">${b.items.map(i=>`<li>${i}</li>`).join('')}</ol>`; break;
      case 'pattern':
        html += `<div class="pattern-box">
          <div class="pb-ar native-text">${b.ar}</div>
          <div class="pb-translit">${b.translit}</div>
          <div>${b.desc}</div>
        </div>`; break;
      case 'examples':
        html += b.items.map(ex => `
          <div class="example-row">
            <span class="ex-icon">${ex.icon||''}</span>
            <span class="ex-ar native-text">${ex.ar}</span>
            <button class="listen-icon-btn inline" onclick="speakWord('${ex.ar}', event)" title="Listen">🔊</button>
            <span class="ex-translit">${ex.translit}</span>
            <span class="ex-meaning">${ex.meaning}</span>
          </div>`).join(''); break;
      case 'note':
        html += `<div class="note-box">${b.html}</div>`; break;
    }
  });
  html += `<div class="section-nav-footer">
    <button class="action-btn" onclick="switchTab('vocab')">${t('continueVocab')}</button>
  </div>`;
  document.getElementById('panel-content').innerHTML = html;
}

/* ---- Vocabulary tab: flip cards ---- */
function renderVocabTab() {
  const cats = currentChapter.vocabCategories || [];
  let html = `<div class="vocab-hint">Tap a card to flip it and reveal the meaning.</div>`;
  cats.forEach(cat => {
    html += `<h4 class="vocab-category-h">${cat.name}</h4><div class="vocab-grid">`;
    cat.words.forEach((w, i) => {
      html += `
        <div class="flip-card" onclick="this.classList.toggle('flipped')">
          <button class="listen-icon-btn" onclick="speakWord('${w.ar}', event)" title="Listen">🔊</button>
          <div class="flip-card-inner">
            <div class="flip-face flip-front">
              <div class="fc-icon">${w.icon}</div>
              <div class="fc-ar native-text">${w.ar}</div>
            </div>
            <div class="flip-face flip-back">
              <div class="fc-translit">${w.translit}</div>
              <div class="fc-meaning">${w.en}</div>
            </div>
          </div>
        </div>`;
    });
    html += `</div>`;
  });
  html += `<div class="section-nav-footer">
    <button class="action-btn" onclick="switchTab('exercises')">${t('continueExercises')}</button>
  </div>`;
  document.getElementById('panel-vocab').innerHTML = html;
}
function chapterNavLabel() {
  const next = nextChapterInTrack();
  return next ? t('nextChapter', {icon: next.icon, label: next.label}) : t('backToDashboard');
}

/* ---- Exercises tab: dispatch by exercise type ---- */
function renderExercisesTab() {
  const exs = currentChapter.exercises || [];
  const container = document.getElementById('panel-exercises');
  const hasSpeaking = (currentChapter.speakingPhrases || []).length > 0;
  const footerBtn = hasSpeaking
    ? `<button class="action-btn" onclick="switchTab('speaking')">${t('continueSpeaking')}</button>`
    : `<button class="action-btn" onclick="goToNextChapter()">${chapterNavLabel()}</button>`;
  container.innerHTML = exs.map(ex => renderExerciseBlock(ex)).join('')
    + `<div class="section-nav-footer">${footerBtn}</div>`;
}

function renderExerciseBlock(ex) {
  let inner = '';
  switch (ex.type) {
    case 'mcq': inner = renderMCQItems(ex); break;
    case 'matching': inner = renderMatchingItems(ex); break;
    case 'translate': inner = renderTranslateItems(ex); break;
    case 'sentence': inner = renderSentenceItems(ex); break;
    case 'creative': inner = renderCreativeItems(ex); break;
  }
  return `
    <div class="exercise-block">
      <div class="ex-title">${ex.title}</div>
      <p style="font-size:13px;color:#7f8c8d;margin-bottom:14px;">${ex.instructions}</p>
      ${inner}
    </div>`;
}

function renderMCQItems(ex) {
  const rows = ex.items.map((it, i) => {
    const opts = it.options.map((opt,oi) =>
      `<div class="click-opt" onclick="mcqPick('${ex.id}',${i},${oi})" data-oi="${oi}">${opt}</div>`
    ).join('');
    const promptHtml = it.promptAr
      ? `${it.icon?`<div class="q-icon-top">${it.icon}</div>`:''}<p class="q-text"><span class="native-text">${it.promptAr}</span></p>`
      : `<p class="q-text">${it.promptText}</p>`;
    return `<div class="q-item" id="${ex.id}-q${i}" data-correct="${it.correct}">${promptHtml}<div class="click-options">${opts}</div></div>`;
  }).join('');
  return rows + `<button class="action-btn" onclick="scoreMCQ('${ex.id}',${ex.items.length})">${t('checkAnswers')}</button>
    <div class="score-chip" id="${ex.id}-score" style="display:none;"></div>`;
}
function mcqPick(exId, qIndex, optIndex) {
  const qEl = document.getElementById(`${exId}-q${qIndex}`);
  qEl.dataset.picked = optIndex;
  qEl.querySelectorAll('.click-opt').forEach(o => o.classList.remove('picked'));
  qEl.querySelector(`.click-opt[data-oi="${optIndex}"]`).classList.add('picked');
}
function scoreMCQ(exId, total) {
  let score = 0;
  for (let i=0;i<total;i++) {
    const qEl = document.getElementById(`${exId}-q${i}`);
    const correct = parseInt(qEl.dataset.correct);
    const picked = qEl.dataset.picked !== undefined ? parseInt(qEl.dataset.picked) : -1;
    qEl.querySelectorAll('.click-opt').forEach(o => {
      const oi = parseInt(o.dataset.oi);
      o.classList.remove('correct','incorrect');
      if (oi === correct) o.classList.add('correct');
      else if (oi === picked) o.classList.add('incorrect');
    });
    qEl.classList.remove('q-item-right','q-item-wrong');
    qEl.classList.add(picked === correct ? 'q-item-right' : 'q-item-wrong');
    if (picked === correct) score++;
  }
  showScoreChip(exId, score, total);
}

function renderMatchingItems(ex) {
  const leftItems = ex.pairs.map((p,i) => `<div class="match-chip" data-side="left" data-idx="${i}" onclick="matchClick('${ex.id}','left',${i})">${p.left}</div>`).join('');
  const shuffledRight = ex.pairs.map((p,i) => ({text:p.right, idx:i})).sort(() => Math.random()-0.5);
  const rightItems = shuffledRight.map(r => `<div class="match-chip" data-side="right" data-idx="${r.idx}" onclick="matchClick('${ex.id}','right',${r.idx})">${r.text}</div>`).join('');
  return `
    <div class="match-columns" id="${ex.id}-board" data-matched="0" data-total="${ex.pairs.length}">
      <div class="match-col">${leftItems}</div>
      <div class="match-col">${rightItems}</div>
    </div>
    <div class="score-chip" id="${ex.id}-score" style="display:none;"></div>`;
}
let matchSelection = {};
function matchClick(exId, side, idx) {
  const board = document.getElementById(`${exId}-board`);
  const chip = board.querySelector(`.match-chip[data-side="${side}"][data-idx="${idx}"]`);
  if (chip.classList.contains('matched')) return;

  matchSelection[exId] = matchSelection[exId] || {};
  matchSelection[exId][side] = idx;
  board.querySelectorAll(`.match-chip[data-side="${side}"]`).forEach(c => c.classList.remove('selected'));
  chip.classList.add('selected');

  const sel = matchSelection[exId];
  if (sel.left !== undefined && sel.right !== undefined) {
    if (sel.left === sel.right) {
      board.querySelector(`.match-chip[data-side="left"][data-idx="${sel.left}"]`).classList.add('matched');
      board.querySelector(`.match-chip[data-side="right"][data-idx="${sel.right}"]`).classList.add('matched');
      board.querySelectorAll('.match-chip.selected').forEach(c => c.classList.remove('selected'));
      board.dataset.matched = parseInt(board.dataset.matched) + 1;
      if (parseInt(board.dataset.matched) === parseInt(board.dataset.total)) {
        showScoreChip(exId, parseInt(board.dataset.total), parseInt(board.dataset.total));
      }
    } else {
      const l = board.querySelector(`.match-chip[data-side="left"][data-idx="${sel.left}"]`);
      const r = board.querySelector(`.match-chip[data-side="right"][data-idx="${sel.right}"]`);
      l.classList.add('wrong-flash'); r.classList.add('wrong-flash');
      setTimeout(() => { l.classList.remove('wrong-flash','selected'); r.classList.remove('wrong-flash','selected'); }, 500);
    }
    matchSelection[exId] = {};
  }
}

function renderTranslateItems(ex) {
  const rows = ex.items.map((it,i) => `
    <div class="q-item" id="${ex.id}-q${i}">
      <div class="q-icon-top">${it.icon||''}</div>
      <p class="q-text">${t('translateLabel')} <span class="native-text">${it.ar}</span></p>
      <input type="text" id="${ex.id}-in${i}" placeholder="${t('typeYourAnswer')}">
    </div>`).join('');
  return rows + `<button class="action-btn" onclick="scoreTranslate('${ex.id}', ${JSON.stringify(ex.items.map(i=>i.keywords)).replace(/"/g,'&quot;')})">${t('checkAnswers')}</button>
    <div class="score-chip" id="${ex.id}-score" style="display:none;"></div>`;
}
function scoreTranslate(exId, keywordSets) {
  let score = 0;
  keywordSets.forEach((keywords, i) => {
    const input = document.getElementById(`${exId}-in${i}`);
    const qEl = document.getElementById(`${exId}-q${i}`);
    const val = input.value.trim().toLowerCase();
    const ok = keywords.some(k => val.includes(k));
    input.style.borderWidth = '2px';
    input.style.borderColor = ok ? '#27ae60' : '#e74c3c';
    if (qEl) { qEl.classList.remove('q-item-right','q-item-wrong'); qEl.classList.add(ok ? 'q-item-right' : 'q-item-wrong'); }
    if (ok) score++;
  });
  showScoreChip(exId, score, keywordSets.length);
}

function renderSentenceItems(ex) {
  const rows = ex.items.map((it,i) => {
    const shuffled = [...it.words].sort(() => Math.random()-0.5);
    const chips = shuffled.map(w => `<span class="word-chip" onclick="sentenceAdd('${ex.id}',${i},this,'${w.replace(/'/g,"\\'")}')">${w}</span>`).join('');
    return `
      <div class="q-item" id="${ex.id}-q${i}">
        <div class="sentence-slot" id="${ex.id}-slot${i}" data-answer='${JSON.stringify(it.answer)}'>
          <span class="placeholder">${t('tapWordsBelow')}</span>
        </div>
        <div class="word-chips">${chips}</div>
        <button class="action-btn secondary" onclick="sentenceClear('${ex.id}',${i})">${t('clear')}</button>
      </div>`;
  }).join('');
  return rows + `<button class="action-btn" onclick="scoreSentences('${ex.id}', ${ex.items.length})">${t('checkAnswers')}</button>
    <div class="score-chip" id="${ex.id}-score" style="display:none;"></div>`;
}
function sentenceAdd(exId, i, chipEl, word) {
  const slot = document.getElementById(`${exId}-slot${i}`);
  const ph = slot.querySelector('.placeholder');
  if (ph) ph.remove();
  const span = document.createElement('span');
  span.textContent = word;
  span.dataset.word = word;
  slot.appendChild(span);
  chipEl.classList.add('used');
}
function sentenceClear(exId, i) {
  const slot = document.getElementById(`${exId}-slot${i}`);
  slot.innerHTML = `<span class="placeholder">${t('tapWordsBelow')}</span>`;
  slot.parentElement.querySelectorAll('.word-chip').forEach(c => c.classList.remove('used'));
}
function scoreSentences(exId, total) {
  let score = 0;
  for (let i=0;i<total;i++) {
    const slot = document.getElementById(`${exId}-slot${i}`);
    const built = [...slot.querySelectorAll('span[data-word]')].map(s => s.dataset.word);
    const answer = JSON.parse(slot.dataset.answer);
    const ok = JSON.stringify(built) === JSON.stringify(answer);
    slot.style.borderColor = ok ? '#27ae60' : '#e74c3c';
    slot.style.borderStyle = 'solid';
    const qEl = document.getElementById(`${exId}-q${i}`);
    if (qEl) { qEl.classList.remove('q-item-right','q-item-wrong'); qEl.classList.add(ok ? 'q-item-right' : 'q-item-wrong'); }
    if (ok) score++;
  }
  showScoreChip(exId, score, total);
}

function renderCreativeItems(ex) {
  return ex.items.map((it,i) => `
    <div class="q-item">
      <p class="q-text">${it.prompt}</p>
      <textarea id="${ex.id}-ta${i}" placeholder="هَذَا ..."></textarea>
      <button class="action-btn" onclick="submitCreative('${ex.id}',${i})">${t('submit')}</button>
      <div class="feedback-msg good" id="${ex.id}-fb${i}"></div>
    </div>`).join('') + `<div class="score-chip" id="${ex.id}-score" style="display:none;"></div>`;
}
function submitCreative(exId, i) {
  const val = document.getElementById(`${exId}-ta${i}`).value.trim();
  const fb = document.getElementById(`${exId}-fb${i}`);
  fb.classList.add('show');
  fb.textContent = val.length
    ? t('creativeGoodFeedback')
    : t('creativeEmptyFeedback');
  markExerciseAttempted(exId, 100);
}

function showScoreChip(exId, score, total) {
  const chip = document.getElementById(`${exId}-score`);
  chip.style.display = 'inline-block';
  chip.textContent = t('score', {score, total});
  const pct = Math.round((score/total)*100);
  if (exId.startsWith('test-')) {
    recordTestBlockResult(exId, score, total);
  } else {
    markExerciseAttempted(exId, pct);
  }
}
function markExerciseAttempted(exId, pct) {
  const cid = currentChapter.id;
  progress.chapters[cid] = progress.chapters[cid] || { exercises:{}, speakingAttempts:0, speakAttemptedIdx:[] };
  const prevPct = progress.chapters[cid].exercises[exId] || 0;
  if (pct > prevPct) {
    const xpGain = Math.round((pct - prevPct) / 100 * 20);
    progress.xp = (progress.xp || 0) + xpGain;
  }
  progress.chapters[cid].exercises[exId] = pct;
  saveProgress(progress);
  refreshCurrentView();
}

/* ---- Speaking tab ---- */
let speakIndex = 0;
function renderSpeakingTab() {
  speakIndex = 0;
  const phrases = currentChapter.speakingPhrases || [];
  const panel = document.getElementById('panel-speaking');
  if (!phrases.length) {
    panel.innerHTML = `<p style="color:#7f8c8d;">${t('noSpeakingPhrases')}</p>
      <div class="section-nav-footer">
        <button class="action-btn" onclick="goToNextChapter()">${chapterNavLabel()}</button>
      </div>`;
    return;
  }
  panel.innerHTML = `
    <p style="color:#555;margin-bottom:18px;">${t('speakingInstructions')}</p>
    <div class="speak-tracker" id="speakTracker"></div>
    <div class="speak-card">
      <div class="sp-icon" id="spIcon"></div>
      <div class="sp-ar native-text" id="spAr"></div>
      <div class="sp-translit" id="spTranslit"></div>
      <div class="sp-meaning" id="spMeaning"></div>
    </div>
    <div class="speak-controls">
      <button class="listen-btn" onclick="listenToTarget()">${t('listenBtn')}</button>
      <button class="mic-btn" id="micBtn" onclick="startRecording()">${t('recordBtn')}</button>
      <button class="action-btn secondary" onclick="prevPhrase()">${t('prevBtn')}</button>
      <button class="action-btn secondary" onclick="nextPhrase()">${t('nextBtn')}</button>
    </div>
    <div id="voiceStatus"></div>
    <div class="speak-result" id="speakResult">
      <div>${t('youSaid')}</div>
      <div class="heard" id="heardText">—</div>
      <div class="similarity-bar"><div class="similarity-fill" id="similarityFill" style="width:0%;background:#bdc3c7;"></div></div>
      <div class="speak-verdict" id="speakVerdict"></div>
    </div>
    <div class="section-nav-footer">
      <button class="action-btn" onclick="goToNextChapter()">${chapterNavLabel()}</button>
    </div>
  `;
  renderSpeakPhrase();
}
function renderSpeakTracker() {
  const phrases = currentChapter.speakingPhrases;
  const cid = currentChapter.id;
  const cp = progress.chapters[cid] || {};
  const tracker = document.getElementById('speakTracker');
  tracker.innerHTML = phrases.map((p,i) => {
    const done = cp.speakAttemptedIdx && cp.speakAttemptedIdx.includes(i);
    return `<div class="speak-dot ${i===speakIndex?'current':''} ${done?'done':''}" onclick="jumpToPhrase(${i})"></div>`;
  }).join('');
}
function jumpToPhrase(i) { speakIndex = i; renderSpeakPhrase(); }
function renderSpeakPhrase() {
  const p = currentChapter.speakingPhrases[speakIndex];
  document.getElementById('spIcon').textContent = p.icon;
  document.getElementById('spAr').textContent = p.ar;
  document.getElementById('spTranslit').textContent = p.translit;
  document.getElementById('spMeaning').textContent = p.meaning;
  document.getElementById('speakResult').classList.remove('show');
  document.getElementById('voiceStatus').textContent = '';
  renderSpeakTracker();
}
function nextPhrase() { speakIndex = (speakIndex+1) % currentChapter.speakingPhrases.length; renderSpeakPhrase(); }
function prevPhrase() { speakIndex = (speakIndex-1+currentChapter.speakingPhrases.length) % currentChapter.speakingPhrases.length; renderSpeakPhrase(); }


function markSpeakingAttempt(idx) {
  const cid = currentChapter.id;
  progress.chapters[cid] = progress.chapters[cid] || { exercises:{}, speakingAttempts:0, speakAttemptedIdx:[] };
  const cp = progress.chapters[cid];
  cp.speakAttemptedIdx = cp.speakAttemptedIdx || [];
  if (!cp.speakAttemptedIdx.includes(idx)) {
    cp.speakAttemptedIdx.push(idx);
    progress.xp = (progress.xp || 0) + 5;
  }
  cp.speakingAttempts = cp.speakAttemptedIdx.length;
  saveProgress(progress);
  refreshCurrentView();
}

/* ===================== INIT ===================== */
initApp();
