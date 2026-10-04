/* =====================================================================
   SHARED LANGUAGE-APP ENGINE (v2) — used by the Italian app.

   Ported from the reworked Arabic Academy app (design tokens, hash routing,
   collapsible units, accessibility, optional accounts) and extended with:
     • a one-screen-at-a-time lesson flow (instead of tabs),
     • True/False statements, picture figures (road signs) and a timed mock
       exam (for tracks that declare `exam: {...}`),
     • several courses ("tracks") per app, each with its own heading.

   A language app supplies, BEFORE this file loads (content.js):
     window.APP_ID, APP_NAME, APP_LANGUAGE_NAME, APP_VOICE_LANG, APP_MARK_HTML,
     APP_TEST_WORD, APP_WRITE_PLACEHOLDER, APP_CONTACT_EMAIL, APP_BANNER,
     APP_STRINGS (optional wording overrides), window.firebaseConfig (optional),
     and the `units`, `tracks`, `chapters` arrays.
   This engine is left-to-right only (the Arabic app is a separate file).
===================================================================== */
const APP_NAME = window.APP_NAME || 'Language Academy';
const LANG_NAME = window.APP_LANGUAGE_NAME || 'this language';
const LANG_CODE = (window.APP_VOICE_LANG || 'en').split('-')[0].toLowerCase();
const CONTACT_EMAIL = window.APP_CONTACT_EMAIL || 'ahsanpsr@gmail.com';

/* UI STRING DICTIONARY — English fallbacks; an app may override any subset
   with window.APP_STRINGS. {placeholders} are substituted by t(). */
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
  continueStep: "Continue →",
  chapterCompleteHeading: "Chapter Complete! 🎉",
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
  voiceSetupHeading: "🔊 Test Your Setup",
  voiceSetupIntro: "The app reads {lang} words and phrases aloud using your phone's own built-in voice. Most phones already have one, but a one-time setting makes it noticeably clearer. Takes about a minute, and only needs doing once per device — this doesn't block anything, so feel free to skip it and come back later.",
  voiceSetupAndroidStep1: "Settings → Language &amp; input → Text-to-speech output",
  voiceSetupAndroidStep2: "Set preferred engine to <strong>Google Text-to-speech Engine</strong>",
  voiceSetupAndroidStep3: "Tap its settings gear → Install voice data → {lang} → download the highest-quality option",
  voiceSetupIosStep1: "Settings → Accessibility → Spoken Content → Voices",
  voiceSetupIosStep2: "Find {lang} and download it",
  voiceSetupIosStep3: "If offered, choose the <strong>Enhanced</strong> or <strong>Premium</strong> quality",
  voiceSetupDone: "Done — Continue to the App →",
  voiceSetupSkip: "Skip for now — remind me next time",
  trackMeta: "{n} lessons · {pct}% complete",
  // True/False questions and the timed mock exam (tracks with an `exam` config)
  tfTrue: "True",
  tfFalse: "False",
  tfTrueSub: "",
  tfFalseSub: "",
  tfWhy: "Why:",
  showTranslation: "Show translation",
  hideTranslation: "Hide translation",
  signsLegend: "Simplified illustrations — real signs may differ slightly in proportions and detail.",
  examNodeTitle: "Mock Exam",
  examNodeSub: "{q} statements · {m} minutes · max {e} errors",
  examNodeBest: "Best: {e} errors · {n} attempts",
  examHeading: "Mock Exam",
  examIntro: "{q} True/False statements drawn from every topic, {m} minutes on the clock. You pass with {e} or fewer wrong answers — unanswered questions count as wrong. Answers are revealed only at the end.",
  examShowTranslations: "Show translations while I answer",
  examStart: "Start the Exam →",
  examQuestionOf: "Question {n} of {total}",
  examPrev: "← Back",
  examNext: "Next →",
  examFinish: "Finish Exam",
  examLeaveConfirm: "Leave the exam? This attempt will be lost.",
  examFinishConfirm: "{n} questions are still unanswered and will count as wrong. Finish anyway?",
  examPassed: "Exam passed! 🎉",
  examFailed: "Not passed this time",
  examTimeUp: "Time is up.",
  examResultLine: "{e} wrong out of {total} (maximum allowed: {max}) · time used {time}",
  examReviewHeading: "Review your mistakes",
  examNoMistakes: "No mistakes — perfect run! 🌟",
  examCorrectAnswer: "Correct answer:",
  examYourAnswer: "Your answer:",
  examNoAnswer: "No answer",
  examTryAgain: "Try Another Exam",
  examNotEnough: "Not enough questions yet for a full exam.",
  currentCourse: "Current",
  stepLesson: "Lesson",
  stepLessons: "lessons",
  stepWords: "Words",
  stepMatch: "Match",
  stepPractice: "Practice",
  stepPracticeCount: "practice",
  stepSpeaking: "Speaking",
  trackStarted: "{started} of {n} lessons started",
  examHistory: "Your recent attempts",
  examPassedShort: "Passed",
  examFailedShort: "Not passed",
  examErrorsShort: "{e} wrong of {total}",
};

function t(key, vars) {
  let s = (window.APP_STRINGS && window.APP_STRINGS[key]) || DEFAULT_STRINGS[key] || key;
  if (vars) for (const k in vars) s = s.split('{' + k + '}').join(vars[k]);
  return s;
}
// Text that ends up inside an HTML attribute (e.g. the phrase a 🔊 button
// reads aloud) must never be spliced into an inline onclick="..." string —
// an apostrophe ("l'amico") would break the script. Put it in a data attribute.
function escAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
const ICON_SPEAKER = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5L6 9H3v6h3l5 4V5z"/><path d="M15.5 8.5a5 5 0 010 7"/><path d="M18.5 5.5a9 9 0 010 13"/></svg>`;
const ICON_CHEVRON = `<svg class="u-chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>`;
const ICON_SEARCH = `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>`;
function listenBtn(text, cls) {
  return `<button type="button" class="listen-icon-btn${cls ? ' ' + cls : ''}" data-say="${escAttr(text)}" onclick="speakWord(this.dataset.say, event)" aria-label="Listen">${ICON_SPEAKER}</button>`;
}
// Optional picture for a question or content block (road signs etc.) — apps
// that have figures define window.renderSign(key); everyone else gets nothing.
function figureHtml(key) {
  return key && typeof window.renderSign === 'function' ? window.renderSign(key) : '';
}

/* =====================================================================
   FIREBASE — optional cross-device progress sync. An app that doesn't set
   window.firebaseConfig runs local-only: no account UI, nothing breaks.
   (The config is NOT a secret — real security is the Firestore rules:
   `match /users/{userId} { allow read, write: if request.auth != null
   && request.auth.uid == userId; }`.)
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
      // Merge rather than replace, so anything done as a guest on this
      // device before signing in is kept alongside the saved account data.
      progress = mergeProgress(progress, doc.data());
    }
    // Either way, push the result up so the account and this device agree.
    saveProgress(progress);
  } catch (e) {
    console.error('Failed to load cloud progress, using local copy instead:', e);
  }
}

/* Combine two progress records without losing either: best score per
   exercise, most XP, union of speaking attempts, and the more recent
   visit's streak / last chapter. */
function mergeProgress(localP, cloudP) {
  const a = normalizeProgress(localP), b = normalizeProgress(cloudP);
  const out = normalizeProgress(null);
  out.xp = Math.max(a.xp, b.xp);
  const aNewer = !!a.lastVisitDate && (!b.lastVisitDate || daysBetween(b.lastVisitDate, a.lastVisitDate) >= 0);
  const recent = aNewer ? a : b, other = aNewer ? b : a;
  out.lastVisitDate = recent.lastVisitDate;
  out.streak = (a.lastVisitDate === b.lastVisitDate) ? Math.max(a.streak, b.streak) : recent.streak;
  out.lastChapterId = recent.lastChapterId != null ? recent.lastChapterId : other.lastChapterId;
  out.selectedTrack = a.selectedTrack || b.selectedTrack;
  out.gatingEnabled = a.gatingEnabled || b.gatingEnabled;
  out.exams = [...a.exams, ...b.exams].filter((e, i, arr) => arr.findIndex(x => x.date === e.date && x.errors === e.errors && x.secs === e.secs && x.track === e.track) === i).slice(-30);
  new Set([...Object.keys(a.chapters), ...Object.keys(b.chapters)]).forEach(id => {
    const ca = a.chapters[id] || {}, cb = b.chapters[id] || {};
    const exercises = {};
    [ca.exercises || {}, cb.exercises || {}].forEach(src =>
      Object.keys(src).forEach(k => { exercises[k] = Math.max(exercises[k] || 0, src[k] || 0); }));
    const speakAttemptedIdx = [...new Set([...(ca.speakAttemptedIdx || []), ...(cb.speakAttemptedIdx || [])])];
    out.chapters[id] = { exercises, speakAttemptedIdx, speakingAttempts: speakAttemptedIdx.length };
  });
  return out;
}

/* =====================================================================
   APP SHELL — small helpers shared by every view.
===================================================================== */
const root = document.getElementById('pageRoot');
let currentChapter = null;
let currentView = 'dashboard'; // 'dashboard' | 'index' | 'trackSelect' | 'chapter' | 'test' | 'voiceSetup' | 'login' | 'exam-intro' | 'exam' | 'exam-result'



function setTitle(t) {
  document.title = t ? `${t} — ${APP_NAME}` : `${APP_NAME} — ${LANG_NAME}`;
}
function markNav(view) {
  document.body.classList.toggle('is-login', currentView === 'login');
  document.querySelectorAll('[data-nav]').forEach(b => {
    if (b.dataset.nav === view) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
  });
}
// Tag every run of the language being taught with its lang code so screen
// readers pick the right voice and the browser the right hyphenation/shaping.
function markNative() {
  root.querySelectorAll('.native-text:not([lang])').forEach(el => el.setAttribute('lang', LANG_CODE));
}
new MutationObserver(markNative).observe(root, { childList: true, subtree: true });

// "Report a mistake" in the footer pre-fills the chapter the learner is on.
function updateReportLink() {
  const a = document.getElementById('reportLink');
  if (!a) return;
  const where = currentChapter ? `${currentChapter.label}: ${currentChapter.title}` : 'General';
  const body = `Where: ${where}\nTrack: ${progress.selectedTrack}\n\nWhat looks wrong:\n`;
  a.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(APP_NAME + ' — mistake report')}&body=${encodeURIComponent(body)}`;
}

/* =====================================================================
   ROUTING — every screen has a URL hash, so the browser Back button
   works, reloading keeps your place, and a chapter can be linked to:
     #/                      dashboard        #/index     course outline
     #/tracks                course chooser   #/test      random knowledge test
     #/voice                 voice tips       #/exam      mock exam (tracks with an `exam` config)
     #/chapter/ID[/STEP]     a lesson, at step number STEP (1-based)
   navigate() renders synchronously (so callers can rely on state right
   after calling it); the hashchange listener handles Back/Forward.
===================================================================== */
let appReady = false;
let lastRoutedHash = null;
let firstRoute = true;

function navigate(hash, replace) {
  if (location.hash !== hash) {
    if (replace) history.replaceState(null, '', hash); else location.hash = hash;
  }
  lastRoutedHash = location.hash;
  route();
}
window.addEventListener('hashchange', () => {
  if (!appReady || location.hash === lastRoutedHash) return;
  lastRoutedHash = location.hash;
  route();
});

function route() {
  const [seg, arg, tab] = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  window.scrollTo(0, 0);
  switch (seg) {
    case 'index': viewIndex(); break;
    case 'tracks': viewTrackSelector(); break;
    case 'voice': viewVoiceSetup(); break;
    case 'exam': viewExamIntro(); break;
    case 'signin': renderLoginScreen('signin'); break;
    case 'signup': renderLoginScreen('signup'); break;
    case 'test': viewKnowledgeTest(); break;
    case 'chapter': {
      const ch = chapters.find(c => String(c.id) === arg);
      if (ch && isChapterAccessible(ch)) viewChapter(ch, tab);
      else { history.replaceState(null, '', '#/'); lastRoutedHash = location.hash; viewDashboard(); }
      break;
    }
    default: viewDashboard();
  }
  updateReportLink();
  if (!firstRoute) root.focus({ preventScroll: true });
  firstRoute = false;
}

// Public entry points (used by inline onclick handlers throughout).
function showDashboard() { navigate('#/'); }
function showIndex() { navigate('#/index'); }
function showTrackSelector() { navigate('#/tracks'); }
function renderVoiceSetupScreen() { navigate('#/voice'); }
function startKnowledgeTest() { navigate('#/test'); }
function openChapter(id) {
  const ch = chapters.find(c => c.id === id);
  if (!ch || !isChapterAccessible(ch)) return;
  navigate(`#/chapter/${id}`);
}
function selectTrack(trackId) {
  progress.selectedTrack = trackId;
  saveProgress(progress);
  showDashboard();
}

/* =====================================================================
   SIGN-IN / SIGN-UP
===================================================================== */
function friendlyAuthError(e) {
  console.error('Auth error:', e);
  const map = {
    'auth/invalid-email': "That email address doesn't look right.",
    'auth/missing-password': 'Please enter your password.',
    'auth/invalid-credential': 'Email or password is incorrect.',
    'auth/wrong-password': 'Email or password is incorrect.',
    'auth/user-not-found': 'No account found with that email.',
    'auth/email-already-in-use': 'An account with that email already exists — try signing in instead.',
    'auth/weak-password': 'Password needs at least 6 characters.',
    'auth/too-many-requests': 'Too many attempts. Wait a minute and try again.',
    'auth/network-request-failed': "Can't reach the server. Check your connection and try again."
  };
  return map[e && e.code] || 'Something went wrong. Please try again.';
}

function renderLoginScreen(mode) {
  currentView = 'login';
  currentChapter = null;
  setTitle(mode === 'signup' ? 'Create account' : 'Sign in');
  markNav(null);
  const signup = mode === 'signup';
  root.innerHTML = `
    <div class="login-wrap">
      <form class="login-card" onsubmit="event.preventDefault(); submitAuth('${mode}')" novalidate>
        <div class="login-mark" aria-hidden="true">${window.APP_MARK_HTML || ''}</div>
        <h1>${signup ? 'Create your account' : 'Welcome back'}</h1>
        <p>An account is optional — it just lets your progress follow you to another phone or computer. Anything you've already done on this device is kept.</p>
        <label for="loginEmail">Email</label>
        <input type="email" id="loginEmail" autocomplete="email" inputmode="email" autocapitalize="off">
        <label for="loginPassword">Password</label>
        <input type="password" id="loginPassword" autocomplete="${signup ? 'new-password' : 'current-password'}" placeholder="6+ characters">
        <div class="login-error" id="loginError" role="alert"></div>
        <div class="login-info" id="loginInfo" role="status" style="display:none;"></div>
        <button class="action-btn" id="loginSubmit" type="submit">${signup ? 'Create account' : 'Sign in'}</button>
        <p class="login-switch">
          ${signup
            ? `Already have an account? <button class="link-btn" type="button" onclick="renderLoginScreen('signin')">Sign in</button>`
            : `New here? <button class="link-btn" type="button" onclick="renderLoginScreen('signup')">Create an account</button>`}
        </p>
        ${signup ? '' : `<p class="login-switch" style="margin-top:0 !important;"><button class="link-btn" type="button" onclick="submitForgotPassword()">Forgot password?</button></p>`}
        <button class="action-btn secondary" type="button" onclick="skipLogin()">← Not now, back to the course</button>
      </form>
    </div>
  `;
}
function submitAuth(mode) {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const errEl = document.getElementById('loginError');
  const btn = document.getElementById('loginSubmit');
  errEl.textContent = '';
  if (!email || !password) { errEl.textContent = 'Please enter both email and password.'; return; }
  btn.disabled = true;
  const action = mode === 'signup'
    ? fbAuth.createUserWithEmailAndPassword(email, password)
    : fbAuth.signInWithEmailAndPassword(email, password);
  action.catch(e => { errEl.textContent = friendlyAuthError(e); btn.disabled = false; });
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
  }).catch(e => { errEl.textContent = friendlyAuthError(e); });
}
function skipLogin() {
  navigate('#/');
}
function doSignOut() {
  if (fbAuth) fbAuth.signOut();
}

/* ---- Optional account. The app opens straight to the dashboard as a
   guest; signing in is offered (never required) so progress can follow the
   person to another device. ---- */
const SYNC_NUDGE_KEY = (window.APP_ID || 'app') + "SyncNudgeDismissedAt";
function accountClick() {
  if (currentUser) doSignOut(); else navigate('#/signin');
}
function updateAccountUI() {
  const btn = document.getElementById('accountBtn');
  if (!btn) return;
  btn.style.display = fbAuth ? 'inline-flex' : 'none';
  btn.textContent = currentUser ? 'Sign out' : 'Sign in';
}
function syncNudgeDismissed() {
  try {
    const t = parseInt(localStorage.getItem(SYNC_NUDGE_KEY), 10);
    return !!t && (Date.now() - t) < 14 * 86400000; // ask again after two weeks
  } catch(e) { return false; }
}
function dismissSyncNudge() {
  try { localStorage.setItem(SYNC_NUDGE_KEY, String(Date.now())); } catch(e) {}
  viewDashboard();
}
// Shown only once there is progress worth protecting — never to a first-time visitor.
function renderSyncNudge() {
  if (!fbAuth || currentUser || syncNudgeDismissed()) return '';
  if (!(progress.xp > 0)) return '';
  return `
    <div class="nudge-card">
      <div class="nudge-text"><strong>☁️ Keep your ${progress.xp} XP safe</strong><span>Create a free account to continue on another phone or computer. It takes about 20 seconds.</span></div>
      <div class="nudge-actions">
        <button class="action-btn" onclick="navigate('#/signup')">Save my progress</button>
        <button class="action-btn secondary" onclick="dismissSyncNudge()">Not now</button>
      </div>
    </div>`;
}

/* ---- Optional "improve your voice quality" tips. Never a gate: a small
   dismissible card on the dashboard, shown only once the person has tried a
   lesson (so they have actually heard the audio). Tracked per device, since
   it is a device setting and not account data. Always reachable from the
   "Voice setup tips" row at the bottom of the dashboard. ---- */
const VOICE_SETUP_KEY = (window.APP_ID || 'app') + "VoiceSetupSeen";
function hasSeenVoiceSetup() {
  try { return localStorage.getItem(VOICE_SETUP_KEY) === '1'; } catch(e) { return false; }
}
function markVoiceSetupSeen() {
  try { localStorage.setItem(VOICE_SETUP_KEY, '1'); } catch(e) {}
}
function finishVoiceSetup(remember) {
  if (remember) markVoiceSetupSeen();
  navigate('#/', true);
}
function dismissVoiceNudge() {
  markVoiceSetupSeen();
  viewDashboard();
}
function renderVoiceNudge() {
  if (hasSeenVoiceSetup() || progress.lastChapterId == null) return '';
  return `
    <div class="nudge-card">
      <div class="nudge-text"><strong>🔊 Does the audio sound a bit robotic?</strong><span>A one-minute phone setting makes the ${LANG_NAME} voice much clearer.</span></div>
      <div class="nudge-actions">
        <button class="action-btn" onclick="renderVoiceSetupScreen()">Show me how</button>
        <button class="action-btn secondary" onclick="dismissVoiceNudge()">Not now</button>
      </div>
    </div>`;
}
function enterApp() {
  appReady = true;
  route();
}
function viewVoiceSetup() {
  currentView = 'voiceSetup';
  currentChapter = null;
  setTitle('Voice setup');
  markNav(null);
  root.innerHTML = `
    <div class="view-head">
      <h1 class="view-title">${t('voiceSetupHeading')}</h1>
      <p class="view-sub">${t('voiceSetupIntro', {lang: LANG_NAME})}</p>
    </div>
    <div class="callout">
      <strong>📱 Android</strong>
      <ol>
        <li>${t('voiceSetupAndroidStep1')}</li>
        <li>${t('voiceSetupAndroidStep2')}</li>
        <li>${t('voiceSetupAndroidStep3', {lang: LANG_NAME})}</li>
      </ol>
    </div>
    <div class="callout">
      <strong>🍏 iPhone</strong>
      <ol>
        <li>${t('voiceSetupIosStep1')}</li>
        <li>${t('voiceSetupIosStep2', {lang: LANG_NAME})}</li>
        <li>${t('voiceSetupIosStep3')}</li>
      </ol>
    </div>
    ${window.APP_VOICE_NOTE ? `<p class="view-sub">${window.APP_VOICE_NOTE}</p>` : ''}
    <div class="btn-row">
      <button class="action-btn secondary" onclick="speakArabicText(window.APP_TEST_WORD || 'Hello', 'voiceStatus')">🔊 Play a test word</button>
    </div>
    <div id="voiceStatus" role="status" aria-live="polite" style="text-align:start;margin-top:8px;"></div>
    <div class="btn-row">
      <button class="action-btn" onclick="finishVoiceSetup(true)">${t('voiceSetupDone')}</button>
      <button class="action-btn secondary" onclick="finishVoiceSetup(false)">← Back</button>
    </div>
  `;
}

function initApp() {
  touchVisit();
  // Open straight to the course — the account system, if configured, only
  // ever works in the background or on request.
  enterApp();
  updateAccountUI();
  if (fbAuth) {
    fbAuth.onAuthStateChanged(async (user) => {
      currentUser = user || null;
      updateAccountUI();
      if (user) {
        await loadCloudProgress();
        // Signing in from the login screen returns to the course; a session
        // restored in the background just refreshes whatever is on screen.
        if (currentView === 'login') navigate('#/', true); else route();
      } else if (currentView === 'dashboard') {
        viewDashboard();
      }
    });
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
    return { xp:0, streak:0, lastVisitDate:null, lastChapterId:null, chapters:{}, gatingEnabled:false, selectedTrack:tracks[0].id, exams:[] };
  }
  p.xp = p.xp || 0;
  p.streak = p.streak || 0;
  p.lastVisitDate = p.lastVisitDate || null;
  p.lastChapterId = p.lastChapterId != null ? p.lastChapterId : null;
  p.chapters = p.chapters || {};
  p.gatingEnabled = p.gatingEnabled || false;
  p.selectedTrack = tracks.some(tr => tr.id === p.selectedTrack) ? p.selectedTrack : tracks[0].id;
  p.exams = Array.isArray(p.exams) ? p.exams : [];
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
  if (xp < 40) return "Beginner";
  if (xp < 100) return "Elementary";
  if (xp < 200) return "Intermediate";
  return "Advanced";
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
  const barEl = document.getElementById('overallBar');
  if (fillEl) fillEl.style.width = pct + '%';
  if (barEl) barEl.setAttribute('aria-valuenow', pct);
}
function refreshCurrentView() {
  updateOverallBar();
  if (currentView === 'dashboard') viewDashboard();
  else if (currentView === 'index') viewIndex();
}

/* ===================== NORMALIZATION / SCORING HELPERS ===================== */
function normalizeText(str) {
  return String(str).normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
}
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
  const bank = { mcq: [], translate: [], matching: [], sentence: [], mcqByChapter: {} };
  chaptersInTrack().filter(c => !c.locked).forEach(ch => {
    (ch.exercises || []).forEach(ex => {
      if (ex.type === 'mcq' && !ex.items.some(it => it.sign)) {
        ex.items.forEach(it => {
          const tagged = { ...it, sourceChapterId: ch.id, sourceLabel: ch.label };
          bank.mcq.push(tagged);
          (bank.mcqByChapter[ch.id] = bank.mcqByChapter[ch.id] || []).push(tagged);
        });
      } else if (ex.type === 'translate') {
        ex.items.forEach(it => bank.translate.push({ ...it, sourceChapterId: ch.id, sourceLabel: ch.label }));
      } else if (ex.type === 'matching') {
        ex.pairs.forEach(p => bank.matching.push({ ...p, sourceChapterId: ch.id, sourceLabel: ch.label }));
      } else if (ex.type === 'sentence') {
        ex.items.forEach(it => bank.sentence.push({ ...it, sourceChapterId: ch.id, sourceLabel: ch.label }));
      }
      // 'creative' items are excluded — they're not auto-gradable.
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

// Picks exactly one MCQ question from each unlocked chapter that has any, so
// a knowledge check touches every topic learned so far (capped, randomised).
function sampleOnePerChapter(mcqByChapter, cap) {
  const chapterIds = sampleArray(Object.keys(mcqByChapter), cap);
  return chapterIds.map(id => sampleArray(mcqByChapter[id], 1)[0]);
}

let testSession = null;

function viewKnowledgeTest() {
  const bank = buildQuestionBank();
  const mcqSample = sampleOnePerChapter(bank.mcqByChapter, 16);
  const translateSample = sampleArray(bank.translate, 3);
  const matchingSample = sampleArray(bank.matching, 4);
  const sentenceSample = sampleArray(bank.sentence, 3);

  const blocks = [];
  if (mcqSample.length) blocks.push({ id: 'test-mcq', type: 'mcq', title: '🧠 Mixed Multiple Choice', instructions: 'Questions randomly pulled from multiple chapters.', items: mcqSample });
  if (translateSample.length) blocks.push({ id: 'test-translate', type: 'translate', title: '🧠 Mixed Translation', instructions: 'Type the English meaning of each sentence.', items: translateSample });
  if (matchingSample.length) blocks.push({ id: 'test-matching', type: 'matching', title: '🧠 Mixed Matching', instructions: 'Tap a question, then tap its matching meaning.', pairs: matchingSample.map(p => ({ left: p.left, right: p.right })) });
  if (sentenceSample.length) blocks.push({ id: 'test-sentence', type: 'sentence', title: '🧠 Mixed Sentence Building', instructions: 'Tap the word chips in the correct order.', items: sentenceSample.map(it => ({ words: it.words, answer: it.answer })) });

  const totalQuestions = mcqSample.length + translateSample.length + matchingSample.length + sentenceSample.length;
  testSession = { blockIds: blocks.map(b => b.id), results: {}, totalQuestions };

  currentView = 'test';
  currentChapter = null;
  setTitle('Test your knowledge');
  markNav(null);
  root.innerHTML = `
    <nav class="crumbs" aria-label="Breadcrumb"><button onclick="showDashboard()">← Home</button></nav>
    <header class="chapter-hero">
      <div class="ch-icon-big" aria-hidden="true">🧠</div>
      <div class="ch-main">
        <div class="ch-eyebrow">Mixed review</div>
        <h1>Test your knowledge</h1>
        <p class="ch-desc">${totalQuestions} questions randomly pulled from every chapter you've unlocked so far. Answer each section, then check it — your combined score appears below once everything's checked.</p>
      </div>
    </header>
    <div class="test-summary" id="testSummary" role="status" aria-live="polite"></div>
    <div id="testBlocks">
      ${blocks.map(ex => renderExerciseBlock(ex)).join('')}
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
      <h2>Test complete! 🎉</h2>
      <p>You scored ${totals.score} / ${totals.total} (${pct}%) — earned +${xpGain} XP.</p>
      <button class="action-btn" onclick="showDashboard()">Back to home</button>
    `;
    summary.scrollIntoView({ behavior: 'smooth', block: 'center' });
    updateOverallBar();
  }
}

/* ===================== TRACKS ===================== */
function viewTrackSelector() {
  currentView = 'trackSelect';
  currentChapter = null;
  setTitle(t('chooseTrack'));
  markNav('trackSelect');
  root.innerHTML = `
    <div class="view-head">
      <h1 class="view-title">${t('chooseTrack')}</h1>
      <p class="view-sub">${t('chooseTrackDesc')}</p>
    </div>
    <div class="track-grid">
      ${tracks.map(tr => {
        const list = chapters.filter(c => (c.track || tracks[0].id) === tr.id && !c.locked);
        const started = list.filter(c => chapterProgressPct(c) > 0).length;
        const current = tr.id === progress.selectedTrack;
        return `
        <button class="track-card" onclick="selectTrack('${tr.id}')" ${current ? 'aria-current="true"' : ''}>
          <span class="tc-icon" aria-hidden="true">${tr.icon}</span>
          <span class="tc-title">${tr.title}</span>
          <span class="tc-desc">${tr.desc}</span>
          <span class="tc-current">${current ? '✓ ' + t('currentCourse') + ' · ' : ''}${t('trackStarted', {started, n: list.length})}</span>
        </button>`;
      }).join('')}
    </div>
  `;
  updateOverallBar();
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
  if (next && isChapterAccessible(next)) openChapter(next.id); else showDashboard();
}

/* ===================== DASHBOARD ===================== */
function ringHtml(pct) {
  const label = pct >= 100 ? 'Completed' : pct > 0 ? `${pct}% complete` : 'Not started';
  return `<span class="ring ${pct >= 100 ? 'done' : ''}" style="--p:${pct}" role="img" aria-label="${label}"><span>${pct >= 100 ? '✓' : (pct > 0 ? pct + '%' : '')}</span></span>`;
}

function renderChapterCard(ch) {
  const pct = chapterProgressPct(ch);
  const cls = 'ch-card' + (ch.type === 'checkpoint' ? ' checkpoint' : '');
  const inner = (note, trailing) => `
      <span class="cc-icon" aria-hidden="true">${ch.icon}</span>
      <span class="cc-body">
        <span class="cc-label">${ch.label}</span>
        <span class="cc-title">${ch.title}</span>
        <span class="cc-ar native-text">${ch.arabicTitle}</span>
        ${note ? `<span class="cc-note">${note}</span>` : ''}
      </span>
      ${trailing}`;

  if (ch.locked) {
    return `<div class="${cls} locked" aria-disabled="true">${inner('Coming soon', '<span class="ring"><span class="lock" aria-hidden="true">🔒</span></span>')}</div>`;
  }
  if (!isChapterAccessible(ch)) {
    const req = chapters.find(c => c.id === ch.requires);
    const reqPct = req ? chapterProgressPct(req) : 0;
    return `<div class="${cls} locked" aria-disabled="true">${inner(`Finish "${req ? req.label : 'the previous chapter'}" (${reqPct}% / ${COMPLETION_THRESHOLD}% needed) to unlock.`, '<span class="ring"><span class="lock" aria-hidden="true">🔒</span></span>')}</div>`;
  }
  return `<button class="${cls}" onclick="openChapter(${ch.id})">${inner('', ringHtml(pct))}</button>`;
}

function renderStatsBar() {
  const xp = progress.xp || 0;
  return `
    <div class="stats-bar">
      <div class="stat-card"><div class="stat-value">🔥 ${progress.streak || 0}</div><div class="stat-label">Day streak</div></div>
      <div class="stat-card"><div class="stat-value">${xp} XP</div><div class="stat-label">${levelLabel(xp)}</div></div>
      <div class="stat-card"><div class="stat-value">${overallPct()}%</div><div class="stat-label">Track progress</div></div>
    </div>`;
}

// What should the learner do next? Resume the chapter they were on; once that
// one is past the completion threshold, suggest the following chapter instead.
function suggestedChapter() {
  const list = chaptersInTrack();
  const last = progress.lastChapterId != null
    ? list.find(c => c.id === progress.lastChapterId && isChapterAccessible(c))
    : null;
  if (last) {
    if (chapterProgressPct(last) >= COMPLETION_THRESHOLD) {
      const idx = list.indexOf(last);
      const next = list.slice(idx + 1).find(c => !c.locked && isChapterAccessible(c));
      if (next) return { ch: next, mode: 'next' };
    }
    return { ch: last, mode: 'resume' };
  }
  const first = list.find(c => !c.locked);
  return first ? { ch: first, mode: 'start' } : null;
}

function renderContinueCard() {
  const s = suggestedChapter();
  if (!s) return '';
  const { ch, mode } = s;
  const pct = chapterProgressPct(ch);
  const eyebrow = mode === 'resume' ? 'Continue where you left off' : mode === 'next' ? 'Up next' : 'Ready to begin?';
  const cta = mode === 'resume' ? 'Resume' : 'Start';
  return `
    <div class="hero-cta">
      <div class="hc-icon" aria-hidden="true">${ch.icon}</div>
      <div class="hc-body">
        <div class="hc-eyebrow">${eyebrow}</div>
        <div class="hc-title">${ch.label}: ${ch.title}</div>
        <div class="hc-ar native-text">${ch.arabicTitle}</div>
        ${pct > 0 ? `<div class="hc-bar" role="progressbar" aria-label="Chapter progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"><div style="width:${pct}%"></div></div>` : ''}
      </div>
      <button class="btn" onclick="openChapter(${ch.id})">${cta} →</button>
    </div>`;
}

function renderTestCta() {
  const bank = buildQuestionBank();
  const totalAvailable = bank.mcq.length + bank.translate.length + bank.matching.length + bank.sentence.length;
  if (totalAvailable < 4) return ''; // not enough content yet to make a meaningful test
  return `
    <div class="test-card">
      <div class="tk-icon" aria-hidden="true">🧠</div>
      <div class="tk-body">
        <div class="tk-title">Test your knowledge</div>
        <div class="tk-sub">Mixed questions from every chapter you've unlocked.</div>
      </div>
      <button class="action-btn secondary" onclick="startKnowledgeTest()">Start random test →</button>
    </div>`;
}

// Which unit accordions are open, remembered per track for this session.
const openUnitsByTrack = {};
function unitOpenSet() {
  const t = progress.selectedTrack;
  if (!openUnitsByTrack[t]) {
    const s = suggestedChapter();
    openUnitsByTrack[t] = new Set(s ? [s.ch.unit] : []);
  }
  return openUnitsByTrack[t];
}
function unitToggled(unitId, open) {
  const set = unitOpenSet();
  if (open) set.add(unitId); else set.delete(unitId);
}
function setAllUnits(open) {
  const set = unitOpenSet();
  set.clear();
  if (open) unitsInTrack().forEach(u => set.add(u.id));
  viewDashboard();
}

function renderUnit(u) {
  const list = chaptersInTrack().filter(c => c.unit === u.id);
  if (!list.length) return '';
  const built = list.filter(c => !c.locked);
  if (!built.length) {
    return `
      <div class="unit u-soon">
        <div class="u-row">
          <span class="u-lock" aria-hidden="true">🔒</span>
          <div class="u-text"><div class="u-title">${u.title}</div><div class="u-desc">${u.desc}</div></div>
          <div class="u-meta">Coming soon</div>
        </div>
      </div>`;
  }
  const avg = Math.round(built.reduce((a, c) => a + chapterProgressPct(c), 0) / built.length);
  const isOpen = unitOpenSet().has(u.id);
  return `
    <details class="unit" ${isOpen ? 'open' : ''} ontoggle="unitToggled('${u.id}', this.open)">
      <summary>
        ${ICON_CHEVRON}
        <div class="u-text"><div class="u-title">${u.title}</div><div class="u-desc">${u.desc}</div></div>
        <div class="u-meta">${built.length} ${built.length === 1 ? 'chapter' : 'chapters'} · ${avg}%
          <div class="u-bar" role="progressbar" aria-label="${u.title} progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${avg}"><div style="width:${avg}%"></div></div>
        </div>
      </summary>
      <div class="unit-body">${list.map(renderChapterCard).join('')}</div>
    </details>`;
}

function viewDashboard() {
  currentView = 'dashboard';
  currentChapter = null;
  setTitle('');
  markNav('dashboard');
  const currentTrackDef = tracks.find(tr => tr.id === progress.selectedTrack) || tracks[0];
  const tracksSwitch = tracks.length > 1 ? `
    <div class="segmented" role="group" aria-label="${t('trackLabel')}">
      ${tracks.map(tr => `<button onclick="selectTrack('${tr.id}')" aria-pressed="${tr.id === progress.selectedTrack}">${tr.icon} ${tr.short || tr.title}</button>`).join('')}
    </div>` : '';
  const banner = window.APP_BANNER;
  root.innerHTML = `
    <div class="dash-top">
      <div>
        <h1 class="view-title">${currentTrackDef.journeyTitle || t('yourJourney', {lang: LANG_NAME})}</h1>
        <p class="view-sub">${currentTrackDef.tapToStart || currentTrackDef.title}</p>
      </div>
      ${tracksSwitch}
    </div>
    ${renderContinueCard()}
    ${renderSyncNudge() || renderVoiceNudge()}
    ${renderStatsBar()}
    ${currentTrackDef.exam ? renderExamCard(currentTrackDef.exam) : renderTestCta()}
    <div class="units-head">
      <h2>Course</h2>
      <span>
        <button class="link-btn" onclick="setAllUnits(true)">Expand all</button>
        <button class="link-btn" onclick="setAllUnits(false)">Collapse all</button>
      </span>
    </div>
    ${unitsInTrack().map(renderUnit).join('')}
    <section class="about-card" aria-labelledby="aboutH">
      <h2 id="aboutH">${banner && banner.line1 ? banner.line1 : 'About this app'}</h2>
      ${banner && banner.line2 ? `<p>${banner.line2}</p>` : ''}
      <div class="setting-row">
        <div class="sr-text">
          <div class="sr-title" id="gateLabel">Lock chapters in order</div>
          <div class="sr-sub">Require finishing each chapter (${COMPLETION_THRESHOLD}%+) before the next one unlocks.</div>
        </div>
        <label class="switch">
          <input type="checkbox" role="switch" aria-labelledby="gateLabel" ${progress.gatingEnabled ? 'checked' : ''} onchange="toggleGating(this.checked)">
          <span class="switch-slider"></span>
        </label>
      </div>
      <div class="setting-row">
        <div class="sr-text">
          <div class="sr-title">Voice setup tips</div>
          <div class="sr-sub">Improve the pronunciation audio on your phone.</div>
        </div>
        <button class="action-btn secondary" onclick="renderVoiceSetupScreen()">Open</button>
      </div>
    </section>
  `;
  updateOverallBar();
}

function toggleGating(checked) {
  progress.gatingEnabled = checked;
  saveProgress(progress);
  viewDashboard();
}

/* ===================== COURSE INDEX (flat outline + search) ===================== */
function renderIndexList(query) {
  const q = normalizeText((query || '').toLowerCase());
  const matches = ch => !q || normalizeText(`${ch.label} ${ch.title} ${ch.arabicTitle} ${ch.desc}`.replace(/<[^>]*>/g, '').toLowerCase()).includes(q);
  const blocks = unitsInTrack().map(u => {
    const list = chaptersInTrack().filter(c => c.unit === u.id && matches(c));
    if (!list.length) return '';
    return `<section class="index-unit"><h2>${u.title}</h2><div class="unit-body">${list.map(renderChapterCard).join('')}</div></section>`;
  }).join('');
  document.getElementById('indexList').innerHTML = blocks || `<div class="empty-state">No chapters match “${query.replace(/</g, '&lt;')}”.</div>`;
}
function viewIndex() {
  currentView = 'index';
  currentChapter = null;
  setTitle('Course');
  markNav('index');
  const t = tracks.find(x => x.id === progress.selectedTrack);
  root.innerHTML = `
    <div class="view-head">
      <h1 class="view-title">Course index</h1>
      <p class="view-sub">Every unit and chapter in <strong>${t.title}</strong>. Tap any unlocked chapter to jump straight there.</p>
    </div>
    <div class="find-box">
      ${ICON_SEARCH}
      <input type="search" id="indexFind" placeholder="Find a chapter…" aria-label="Find a chapter" oninput="renderIndexList(this.value)" autocomplete="off">
    </div>
    <div id="indexList"></div>
  `;
  renderIndexList('');
  updateOverallBar();
}

/* ===================== CHAPTER VIEW ===================== */

/* ---- Lesson tab: generic block renderer ---- */
/* ---- Vocabulary tab: flip cards (real buttons, so keyboard + screen-reader friendly) ---- */
/* ---- Exercises tab: dispatch by exercise type ---- */
function renderExerciseBlock(ex) {
  let inner = '';
  switch (ex.type) {
    case 'mcq': inner = renderMCQItems(ex); break;
    case 'truefalse': inner = renderTFItems(ex); break;
    case 'matching': inner = renderMatchingItems(ex); break;
    case 'translate': inner = renderTranslateItems(ex); break;
    case 'sentence': inner = renderSentenceItems(ex); break;
    case 'creative': inner = renderCreativeItems(ex); break;
  }
  return `
    <section class="exercise-block" aria-labelledby="${ex.id}-h">
      <h3 class="ex-title" id="${ex.id}-h">${ex.title}</h3>
      <p class="ex-instr">${ex.instructions}</p>
      ${inner}
    </section>`;
}
// Options and match chips that are purely Arabic (no Latin letters, not already wrapped)
// get the Arabic class so they're drawn at reading size in the Naskh face.
function arText(str) { return str; }
const scoreChipHtml = exId => `<div class="score-chip" id="${exId}-score" role="status" aria-live="polite" style="display:none;"></div>`;

function renderMCQItems(ex) {
  const rows = ex.items.map((it, i) => {
    const opts = it.options.map((opt,oi) =>
      `<button type="button" class="click-opt" onclick="mcqPick('${ex.id}',${i},${oi})" data-oi="${oi}" aria-pressed="false">${arText(opt)}</button>`
    ).join('');
    const promptHtml = it.promptAr
      ? `${it.icon?`<div class="q-icon-top">${it.icon}</div>`:''}<p class="q-text"><span class="native-text">${it.promptAr}</span></p>`
      : `<p class="q-text">${it.promptText}</p>`;
    return `<div class="q-item" id="${ex.id}-q${i}" data-correct="${it.correct}">${it.sign ? `<div class="q-figure">${figureHtml(it.sign)}</div>` : ''}${promptHtml}<div class="click-options">${opts}</div></div>`;
  }).join('');
  return rows + `<button class="action-btn" onclick="scoreMCQ('${ex.id}',${ex.items.length})" style="margin-top:14px;">Check my answers</button>
    ${scoreChipHtml(ex.id)}`;
}
function mcqPick(exId, qIndex, optIndex) {
  const qEl = document.getElementById(`${exId}-q${qIndex}`);
  qEl.dataset.picked = optIndex;
  qEl.querySelectorAll('.click-opt').forEach(o => { o.classList.remove('picked'); o.setAttribute('aria-pressed', 'false'); });
  const chosen = qEl.querySelector(`.click-opt[data-oi="${optIndex}"]`);
  chosen.classList.add('picked');
  chosen.setAttribute('aria-pressed', 'true');
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
  const leftItems = ex.pairs.map((p,i) => `<button type="button" class="match-chip" data-side="left" data-idx="${i}" onclick="matchClick('${ex.id}','left',${i})">${arText(p.left)}</button>`).join('');
  const shuffledRight = ex.pairs.map((p,i) => ({text:p.right, idx:i})).sort(() => Math.random()-0.5);
  const rightItems = shuffledRight.map(r => `<button type="button" class="match-chip" data-side="right" data-idx="${r.idx}" onclick="matchClick('${ex.id}','right',${r.idx})">${arText(r.text)}</button>`).join('');
  return `
    <div class="match-columns" id="${ex.id}-board" data-matched="0" data-total="${ex.pairs.length}">
      <div class="match-col">${leftItems}</div>
      <div class="match-col">${rightItems}</div>
    </div>
    ${scoreChipHtml(ex.id)}`;
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
      <p class="q-text">Translate: <span class="native-text">${it.ar}</span></p>
      <input type="text" id="${ex.id}-in${i}" placeholder="Type your answer in English" aria-label="Your English translation" autocomplete="off" autocapitalize="off" spellcheck="false">
      <div id="${ex.id}-rv${i}" aria-live="polite"></div>
    </div>`).join('');
  return rows + `<button class="action-btn" onclick="scoreTranslate('${ex.id}', ${JSON.stringify(ex.items.map(i=>i.keywords)).replace(/"/g,'&quot;')})" style="margin-top:14px;">Check my answers</button>
    ${scoreChipHtml(ex.id)}`;
}
function scoreTranslate(exId, keywordSets) {
  let score = 0;
  keywordSets.forEach((keywords, i) => {
    const input = document.getElementById(`${exId}-in${i}`);
    const qEl = document.getElementById(`${exId}-q${i}`);
    const reveal = document.getElementById(`${exId}-rv${i}`);
    const val = input.value.trim().toLowerCase();
    const ok = keywords.some(k => val.includes(k));
    if (qEl) { qEl.classList.remove('q-item-right','q-item-wrong'); qEl.classList.add(ok ? 'q-item-right' : 'q-item-wrong'); }
    // Say what a correct answer looks like instead of just turning red.
    if (reveal) reveal.innerHTML = ok ? '' : `<div class="answer-reveal">✗ A correct answer includes: <strong>${keywords.slice(0, 3).join(' / ')}</strong></div>`;
    if (ok) score++;
  });
  showScoreChip(exId, score, keywordSets.length);
}

const SLOT_PLACEHOLDER = `<span class="placeholder">tap words below →</span>`;
function renderSentenceItems(ex) {
  const rows = ex.items.map((it,i) => {
    const shuffled = [...it.words].sort(() => Math.random()-0.5);
    const chips = shuffled.map(w => `<button type="button" class="word-chip" onclick="sentenceAdd('${ex.id}',${i},this,'${w.replace(/'/g,"\\'")}')">${w}</button>`).join('');
    return `
      <div class="q-item" id="${ex.id}-q${i}">
        <div class="sentence-slot" id="${ex.id}-slot${i}" data-answer="${escAttr(JSON.stringify(it.answer))}" aria-label="Your sentence, built so far" aria-live="polite">${SLOT_PLACEHOLDER}</div>
        <div class="word-chips">${chips}</div>
        <button class="action-btn secondary" onclick="sentenceClear('${ex.id}',${i})">Clear</button>
        <div id="${ex.id}-rv${i}" aria-live="polite"></div>
      </div>`;
  }).join('');
  return rows + `<button class="action-btn" onclick="scoreSentences('${ex.id}', ${ex.items.length})" style="margin-top:14px;">Check my answers</button>
    ${scoreChipHtml(ex.id)}`;
}
function sentenceAdd(exId, i, chipEl, word) {
  const slot = document.getElementById(`${exId}-slot${i}`);
  const ph = slot.querySelector('.placeholder');
  if (ph) ph.remove();
  const placed = document.createElement('button');
  placed.type = 'button';
  placed.className = 'placed';
  placed.textContent = word;
  placed.dataset.word = word;
  placed.title = 'Tap to remove';
  placed.onclick = () => sentenceRemove(slot, placed);
  placed._chip = chipEl;
  slot.appendChild(placed);
  chipEl.classList.add('used');
  chipEl.disabled = true;
}
// Tapping a placed word takes it back out (no need to Clear the whole sentence).
function sentenceRemove(slot, placed) {
  if (placed._chip) { placed._chip.classList.remove('used'); placed._chip.disabled = false; }
  placed.remove();
  if (!slot.querySelector('.placed')) slot.innerHTML = SLOT_PLACEHOLDER;
}
function sentenceClear(exId, i) {
  const slot = document.getElementById(`${exId}-slot${i}`);
  slot.innerHTML = SLOT_PLACEHOLDER;
  slot.parentElement.querySelectorAll('.word-chip').forEach(c => { c.classList.remove('used'); c.disabled = false; });
}
function scoreSentences(exId, total) {
  let score = 0;
  for (let i=0;i<total;i++) {
    const slot = document.getElementById(`${exId}-slot${i}`);
    const built = [...slot.querySelectorAll('[data-word]')].map(s => s.dataset.word);
    const answer = JSON.parse(slot.dataset.answer);
    const ok = JSON.stringify(built) === JSON.stringify(answer);
    slot.style.borderColor = ok ? 'var(--success)' : 'var(--danger)';
    slot.style.borderStyle = 'solid';
    const qEl = document.getElementById(`${exId}-q${i}`);
    if (qEl) { qEl.classList.remove('q-item-right','q-item-wrong'); qEl.classList.add(ok ? 'q-item-right' : 'q-item-wrong'); }
    const reveal = document.getElementById(`${exId}-rv${i}`);
    if (reveal) reveal.innerHTML = ok ? '' : `<div class="answer-reveal">✗ Correct order: <span class="native-text">${answer.join(' ')}</span></div>`;
    if (ok) score++;
  }
  showScoreChip(exId, score, total);
}

function renderCreativeItems(ex) {
  return ex.items.map((it,i) => `
    <div class="q-item">
      <p class="q-text">${it.prompt}</p>
      <textarea id="${ex.id}-ta${i}" placeholder="${window.APP_WRITE_PLACEHOLDER || 'Write here…'}" aria-label="Your answer"></textarea>
      <button class="action-btn" onclick="submitCreative('${ex.id}',${i})" style="margin-top:10px;">Submit</button>
      <div class="feedback-msg good" id="${ex.id}-fb${i}" role="status" aria-live="polite"></div>
    </div>`).join('') + scoreChipHtml(ex.id);
}
function submitCreative(exId, i) {
  const val = document.getElementById(`${exId}-ta${i}`).value.trim();
  const fb = document.getElementById(`${exId}-fb${i}`);
  fb.classList.add('show');
  fb.textContent = val.length ? t('creativeGoodFeedback') : t('creativeEmptyFeedback');
  markExerciseAttempted(exId, 100);
}

function showScoreChip(exId, score, total) {
  const chip = document.getElementById(`${exId}-score`);
  chip.style.display = 'inline-block';
  chip.textContent = `Score: ${score} / ${total}`;
  chip.classList.toggle('perfect', score === total);
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


/* ===================== CHAPTER VIEW (one screen at a time) =====================
   A chapter's data is split into a linear run of steps — content grouped by
   heading, one vocabulary step, one step per exercise, one speaking step —
   with a single "Continue" button, like a phone lesson rather than a long page.
   The step number lives in the URL (#/chapter/ID/N) so a reload resumes. */
let chapterSteps = [];
let stepIndex = 0;

function buildChapterSteps(ch) {
  const steps = [];
  let group = null;
  let seenHeading = false;
  (ch.content || []).forEach(b => {
    // Only split into a new step on a heading AFTER the first one — a lone
    // intro paragraph merges into the first heading's step instead of
    // becoming its own near-empty "welcome" screen.
    if (!group || (b.type === 'h' && seenHeading)) { group = { type: 'content', blocks: [] }; steps.push(group); }
    if (b.type === 'h') seenHeading = true;
    group.blocks.push(b);
  });
  if ((ch.vocabCategories || []).length) steps.push({ type: 'vocab' });
  (ch.exercises || []).forEach(ex => steps.push({ type: 'exercise', ex }));
  if ((ch.speakingPhrases || []).length) steps.push({ type: 'speaking' });
  return steps;
}

function viewChapter(ch, stepArg) {
  currentView = 'chapter';
  currentChapter = ch;
  chapterSteps = buildChapterSteps(ch);
  const n = parseInt(stepArg, 10);
  stepIndex = (n >= 1 && n <= chapterSteps.length) ? n - 1 : 0;
  progress.lastChapterId = ch.id;
  saveProgress(progress);
  setTitle(`${ch.label}: ${String(ch.title).replace(/<[^>]*>/g, '')}`);
  markNav(null);
  renderChapterStep(false);
}
function syncStepHash() {
  if (!currentChapter) return;
  history.replaceState(null, '', `#/chapter/${currentChapter.id}/${stepIndex + 1}`);
  lastRoutedHash = location.hash;
}
function goToNextStep() {
  stepIndex++;
  if (stepIndex >= chapterSteps.length) renderChapterComplete();
  else renderChapterStep(true);
}
function goToPrevStep() {
  if (stepIndex > 0) { stepIndex--; renderChapterStep(true); }
  else showDashboard();
}

// What kind of screen is this? Shown next to the step counter so a learner
// always knows whether they are reading, learning words or practising.
function stepKindLabel(step) {
  if (step.type === 'content') return t('stepLesson');
  if (step.type === 'vocab') return t('stepWords');
  if (step.type === 'speaking') return t('stepSpeaking');
  if (step.type === 'exercise') return step.ex.type === 'matching' ? t('stepMatch') : t('stepPractice');
  return '';
}
// A one-line map of the chapter, shown on its first screen.
function chapterRoadmap(steps) {
  const n = type => steps.filter(s => s.type === type).length;
  const practice = steps.filter(s => s.type === 'exercise').length;
  const pills = [];
  if (n('content')) pills.push(`📖 ${n('content')} ${n('content') === 1 ? t('stepLesson').toLowerCase() : t('stepLessons')}`);
  if (n('vocab')) pills.push(`🔤 ${t('stepWords')}`);
  if (practice) pills.push(`✏️ ${practice} ${t('stepPracticeCount')}`);
  if (n('speaking')) pills.push(`🎤 ${t('stepSpeaking')}`);
  return pills.map(p => `<span class="pill">${p}</span>`).join('');
}

function renderChapterStep(scroll) {
  const ch = currentChapter;
  const step = chapterSteps[stepIndex];
  const total = chapterSteps.length;
  const pct = Math.round((stepIndex / total) * 100);
  const isFirst = stepIndex === 0;
  const unit = units.find(u => u.id === ch.unit);
  const nextLabel = isFirst ? 'Start' : 'Continue';
  root.innerHTML = `
    <div class="step-bar">
      <button class="step-back" onclick="goToPrevStep()" aria-label="${isFirst ? 'Close lesson' : 'Previous step'}">${isFirst ? '✕' : '←'}</button>
      <div class="step-track" role="progressbar" aria-label="Lesson progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"><div style="width:${pct}%"></div></div>
      <span class="step-count"><b>${stepKindLabel(step)}</b> · ${stepIndex + 1} / ${total}</span>
    </div>
    ${isFirst ? `
    <header class="chapter-hero ${ch.type === 'checkpoint' ? 'checkpoint' : ''}" id="chapterHero">
      <div class="ch-icon-big" aria-hidden="true">${ch.icon}</div>
      <div class="ch-main">
        <div class="ch-eyebrow">${ch.label}${unit ? ' · ' + unit.title : ''}</div>
        <h1>${ch.title}</h1>
        <div class="ch-arabic-big native-text">${ch.arabicTitle}</div>
        <p class="ch-desc">${ch.desc}</p>
        <div class="ch-stats" aria-label="What is in this chapter">${chapterRoadmap(chapterSteps)}</div>
      </div>
    </header>` : ''}
    <div class="tab-panel active" id="stepContent"></div>`;
  const contentEl = document.getElementById('stepContent');
  if (step.type === 'content') {
    contentEl.id = 'panel-content';
    contentEl.innerHTML = renderContentBlocks(step.blocks);
  } else if (step.type === 'vocab') {
    contentEl.id = 'panel-vocab';
    renderVocabTab();
  } else if (step.type === 'exercise') {
    contentEl.id = 'panel-exercises';
    contentEl.innerHTML = renderExerciseBlock(step.ex);
  } else if (step.type === 'speaking') {
    contentEl.id = 'panel-speaking';
    renderSpeakingTab();
  }
  contentEl.insertAdjacentHTML('beforeend', `<div class="section-nav-footer"><button class="action-btn" onclick="goToNextStep()">${nextLabel} →</button></div>`);
  syncStepHash();
  updateOverallBar();
  if (scroll) window.scrollTo({ top: 0 });
}

function renderChapterComplete() {
  const ch = currentChapter;
  const next = nextChapterInTrack();
  const nextOk = next && isChapterAccessible(next);
  root.innerHTML = `
    <div class="step-bar">
      <button class="step-back" onclick="showDashboard()" aria-label="Close lesson">✕</button>
      <div class="step-track" role="progressbar" aria-label="Lesson progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100"><div style="width:100%"></div></div>
    </div>
    <div class="complete-card">
      <div class="cc-big" aria-hidden="true">🎉</div>
      <h1>${t('chapterCompleteHeading')}</h1>
      <p>${ch.label}: ${ch.title}</p>
      <div class="btn-row" style="justify-content:center;">
        <button class="action-btn" onclick="goToNextChapter()">${chapterNavLabel()}</button>
        <button class="action-btn secondary" onclick="showDashboard()">${t('backToDashboardPlain')}</button>
      </div>
    </div>`;
  history.replaceState(null, '', `#/chapter/${ch.id}/done`);
  lastRoutedHash = location.hash;
  updateOverallBar();
  window.scrollTo({ top: 0 });
}

/* ---- Content blocks: generic renderer, reused by each 'content' step ---- */
function renderContentBlocks(blocks) {
  let html = '';
  blocks.forEach(b => {
    switch (b.type) {
      case 'p': html += `<p>${b.text}</p>`; break;
      case 'h': html += `<h3 class="block-h">${b.text}</h3>`; break;
      case 'wordcard':
        html += `<div class="word-card">
          ${listenBtn(b.ar)}
          <div class="wc-icon">${b.icon || ''}</div>
          <div class="wc-ar native-text">${b.ar}</div>
          <div class="wc-translit">${b.translit}</div>
          <div class="wc-meaning">${b.meaning}</div>
        </div>`; break;
      case 'charlist':
        html += `<ol class="char-list">${b.items.map(i => `<li>${i}</li>`).join('')}</ol>`; break;
      case 'pattern':
        html += `<div class="pattern-box">
          <div class="pb-ar native-text">${b.ar}</div>
          <div class="pb-translit">${b.translit}</div>
          <div>${b.desc}</div>
        </div>`; break;
      case 'examples':
        html += b.items.map(ex => `
          <div class="example-row">
            <span class="ex-icon">${ex.icon || ''}</span>
            <span class="ex-ar native-text">${ex.ar}</span>
            ${listenBtn(ex.ar)}
            <span class="ex-translit">${ex.translit}</span>
            <span class="ex-meaning">${ex.meaning}</span>
          </div>`).join(''); break;
      case 'signs':
        html += `<div class="sign-grid">${b.items.map(it => `
          <div class="sign-card">
            <div class="sign-card-fig">${figureHtml(it.sign)}</div>
            <div class="sign-card-name native-text">${it.ar}</div>
            <div class="sign-card-translit">${it.translit || ''}</div>
            <div class="sign-card-meaning">${it.meaning}</div>
            ${listenBtn(it.ar, 'sign-listen')}
          </div>`).join('')}</div>
          <div class="sign-legend">${t('signsLegend')}</div>`; break;
      case 'note':
        html += `<div class="note-box">${b.html}</div>`; break;
    }
  });
  return html;
}

/* ---- Vocabulary step: flip cards (real buttons, so keyboard + screen-reader friendly) ---- */
function flipCard(btn) {
  const card = btn.closest('.flip-card');
  const on = card.classList.toggle('flipped');
  btn.setAttribute('aria-pressed', on);
  card.querySelector('.flip-front').setAttribute('aria-hidden', on);
  card.querySelector('.flip-back').setAttribute('aria-hidden', !on);
}
function flipAll(show) {
  document.querySelectorAll('#panel-vocab .flip-card').forEach(card => {
    if (card.classList.contains('flipped') !== show) flipCard(card.querySelector('.flip-toggle'));
  });
}
function renderVocabTab() {
  const cats = currentChapter.vocabCategories || [];
  let html = `<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:4px 12px;">
      <div class="vocab-hint">Tap a card to flip it and reveal the meaning.</div>
      <span><button class="link-btn" onclick="flipAll(true)">Reveal all</button><button class="link-btn" onclick="flipAll(false)">Hide all</button></span>
    </div>`;
  cats.forEach(cat => {
    html += `<h4 class="vocab-category-h">${cat.name}</h4><div class="vocab-grid">`;
    cat.words.forEach(w => {
      html += `
        <div class="flip-card">
          ${listenBtn(w.ar)}
          <button type="button" class="flip-toggle" onclick="flipCard(this)" aria-pressed="false">
            <span class="flip-card-inner">
              <span class="flip-face flip-front">
                <span class="fc-icon">${w.icon}</span>
                <span class="fc-ar native-text">${w.ar}</span>
              </span>
              <span class="flip-face flip-back" aria-hidden="true">
                <span class="fc-translit">${w.translit}</span>
                <span class="fc-meaning">${w.en}</span>
              </span>
            </span>
          </button>
        </div>`;
    });
    html += `</div>`;
  });
  document.getElementById('panel-vocab').innerHTML = html;
}
function chapterNavLabel() {
  const next = nextChapterInTrack();
  return next && isChapterAccessible(next) ? `Next chapter: ${next.icon} ${next.label} →` : 'Back to home →';
}

/* ---- Speaking step ---- */
let speakIndex = 0;
function renderSpeakingTab() {
  speakIndex = 0;
  const phrases = currentChapter.speakingPhrases || [];
  const panel = document.getElementById('panel-speaking');
  if (!phrases.length) {
    panel.innerHTML = `<p style="color:var(--text-muted);">${t('noSpeakingPhrases')}</p>`;
    return;
  }
  panel.innerHTML = `
    <p style="text-align:center;color:var(--text-muted);">${t('speakingInstructions')}</p>
    <div class="speak-tracker" id="speakTracker" role="group" aria-label="Phrases in this chapter"></div>
    <div class="speak-card">
      <div class="sp-icon" id="spIcon"></div>
      <div class="sp-ar native-text" id="spAr"></div>
      <div class="sp-translit" id="spTranslit"></div>
      <div class="sp-meaning" id="spMeaning"></div>
    </div>
    <div class="speak-controls">
      <button class="action-btn listen-btn" onclick="listenToTarget()">${t('listenBtn')}</button>
      <button class="action-btn mic-btn" id="micBtn" onclick="startRecording()">${t('recordBtn')}</button>
    </div>
    <div class="speak-nav">
      <button class="action-btn secondary" onclick="prevPhrase()" aria-label="Previous phrase">${t('prevBtn')}</button>
      <span class="count" id="spCount" aria-live="polite"></span>
      <button class="action-btn secondary" onclick="nextPhrase()" aria-label="Next phrase">${t('nextBtn')}</button>
    </div>
    <div id="voiceStatus" role="status" aria-live="polite"></div>
    <div class="speak-result" id="speakResult" aria-live="polite">
      <div>${t('youSaid')}</div>
      <div class="heard" id="heardText">—</div>
      <div class="similarity-bar"><div class="similarity-fill" id="similarityFill" style="width:0%;background:var(--border-strong);"></div></div>
      <div class="speak-verdict" id="speakVerdict"></div>
    </div>`;
  renderSpeakPhrase();
}
function renderSpeakTracker() {
  const phrases = currentChapter.speakingPhrases;
  const cid = currentChapter.id;
  const cp = progress.chapters[cid] || {};
  const tracker = document.getElementById('speakTracker');
  tracker.innerHTML = phrases.map((p, i) => {
    const done = cp.speakAttemptedIdx && cp.speakAttemptedIdx.includes(i);
    return `<button class="speak-dot ${i === speakIndex ? 'current' : ''} ${done ? 'done' : ''}" onclick="jumpToPhrase(${i})" aria-label="Phrase ${i + 1} of ${phrases.length}${done ? ' (practised)' : ''}" ${i === speakIndex ? 'aria-current="true"' : ''}></button>`;
  }).join('');
}
function jumpToPhrase(i) { speakIndex = i; renderSpeakPhrase(); }
function renderSpeakPhrase() {
  const p = currentChapter.speakingPhrases[speakIndex];
  document.getElementById('spIcon').textContent = p.icon;
  document.getElementById('spAr').textContent = p.ar;
  document.getElementById('spTranslit').textContent = p.translit;
  document.getElementById('spMeaning').textContent = p.meaning;
  document.getElementById('spCount').textContent = `${speakIndex + 1} / ${currentChapter.speakingPhrases.length}`;
  document.getElementById('speakResult').classList.remove('show');
  document.getElementById('voiceStatus').textContent = '';
  renderSpeakTracker();
}
function nextPhrase() { speakIndex = (speakIndex + 1) % currentChapter.speakingPhrases.length; renderSpeakPhrase(); }
function prevPhrase() { speakIndex = (speakIndex - 1 + currentChapter.speakingPhrases.length) % currentChapter.speakingPhrases.length; renderSpeakPhrase(); }


/* ---- True / False statements (the format of the Italian driving-theory
   exam). Each item: { statement, en, answer:true|false, why, sign? }.
   The statement is in the language being taught; `en` is its translation,
   which can be hidden for exam-style practice. ---- */
function tfStatementHtml(it, showEn) {
  return `
    ${it.sign ? `<div class="q-figure">${figureHtml(it.sign)}</div>` : ''}
    <p class="q-text tf-statement"><span class="native-text">${it.statement}</span>${listenBtn(it.statement, 'inline')}</p>
    ${it.en ? `<p class="tf-translation"${showEn === false ? ' style="display:none;"' : ''}>${it.en}</p>` : ''}`;
}
function tfButtonsHtml(onclickFn) {
  const btn = (v, label, sub, cls) => `<button type="button" class="tf-btn ${cls}" data-v="${v}" aria-pressed="false" onclick="${onclickFn(v)}"><span class="tf-main">${label}</span>${sub ? `<span class="tf-sub">${sub}</span>` : ''}</button>`;
  return `<div class="tf-buttons" role="group">${btn(1, t('tfTrue'), t('tfTrueSub'), 'tf-true')}${btn(0, t('tfFalse'), t('tfFalseSub'), 'tf-false')}</div>`;
}
function renderTFItems(ex) {
  const rows = ex.items.map((it, i) => `
    <div class="q-item tf-item" id="${ex.id}-q${i}" data-correct="${it.answer ? 1 : 0}">
      ${tfStatementHtml(it)}
      ${tfButtonsHtml(v => `tfPick('${ex.id}',${i},${v})`)}
      <div class="tf-why" style="display:none;"><strong>${t('tfWhy')}</strong> ${it.why || ''}</div>
    </div>`).join('');
  return rows + `<button class="action-btn" onclick="scoreTF('${ex.id}',${ex.items.length})" style="margin-top:14px;">${t('checkAnswers')}</button>
    ${scoreChipHtml(ex.id)}`;
}
function tfPick(exId, qIndex, val) {
  const qEl = document.getElementById(`${exId}-q${qIndex}`);
  qEl.dataset.picked = val;
  qEl.querySelectorAll('.tf-btn').forEach(b => {
    const on = b.dataset.v === String(val);
    b.classList.toggle('picked', on);
    b.setAttribute('aria-pressed', on);
  });
}
function scoreTF(exId, total) {
  let score = 0;
  for (let i = 0; i < total; i++) {
    const qEl = document.getElementById(`${exId}-q${i}`);
    const correct = parseInt(qEl.dataset.correct);
    const picked = qEl.dataset.picked !== undefined ? parseInt(qEl.dataset.picked) : -1;
    qEl.querySelectorAll('.tf-btn').forEach(b => {
      const v = parseInt(b.dataset.v);
      b.classList.remove('correct', 'incorrect');
      if (v === correct) b.classList.add('correct');
      else if (v === picked) b.classList.add('incorrect');
    });
    qEl.classList.remove('q-item-right', 'q-item-wrong');
    qEl.classList.add(picked === correct ? 'q-item-right' : 'q-item-wrong');
    qEl.querySelector('.tf-why').style.display = 'block';
    const tr = qEl.querySelector('.tf-translation'); if (tr) tr.style.display = '';
    if (picked === correct) score++;
  }
  showScoreChip(exId, score, total);
}

/* =====================================================================
   MOCK EXAM — for tracks that declare  exam: { questions, minutes, maxErrors }
   Mirrors a real computer-based theory test: one True/False statement at a
   time, a countdown clock, answers hidden until the end, a pass mark based
   on how many errors are allowed (unanswered questions count as errors).
   Questions come from every topic chapter's `truefalse` exercises, drawn
   round-robin so each topic is represented evenly.
===================================================================== */
let examSession = null;
let examTimer = null;

function currentExamCfg() {
  const trackDef = tracks.find(tr => tr.id === progress.selectedTrack) || tracks[0];
  return trackDef.exam || null;
}
function buildExamQuestions(cfg) {
  const pools = chaptersInTrack().filter(c => !c.locked && c.type !== 'checkpoint' && !c.noExam).map(ch => {
    const items = [];
    (ch.exercises || []).forEach(ex => {
      if (ex.type === 'truefalse') ex.items.forEach(it => items.push({ ...it, sourceId: ch.id, sourceLabel: ch.label, sourceTitle: ch.title }));
    });
    return sampleArray(items, items.length);
  }).filter(p => p.length);
  const picked = [];
  for (let round = 0; picked.length < cfg.questions && pools.some(p => p.length > round); round++) {
    pools.forEach(p => { if (picked.length < cfg.questions && p[round]) picked.push(p[round]); });
  }
  return sampleArray(picked, picked.length);
}
function examHistory() {
  return (progress.exams || []).filter(e => e.track === progress.selectedTrack);
}
function renderExamCard(cfg) {
  const hist = examHistory();
  const sub = hist.length
    ? t('examNodeBest', { e: Math.min(...hist.map(e => e.errors)), n: hist.length })
    : t('examNodeSub', { q: cfg.questions, m: cfg.minutes, e: cfg.maxErrors });
  return `
    <div class="test-card exam-card-cta">
      <div class="tk-icon" aria-hidden="true">🎓</div>
      <div class="tk-body">
        <div class="tk-title">${t('examNodeTitle')}</div>
        <div class="tk-sub">${sub}</div>
      </div>
      <button class="action-btn" onclick="showExamIntro()">${t('examStart')}</button>
    </div>`;
}
function showExamIntro() { navigate('#/exam'); }

function viewExamIntro() {
  const cfg = currentExamCfg();
  if (!cfg) { navigate('#/', true); return; }
  currentView = 'exam-intro';
  currentChapter = null;
  setTitle(t('examHeading'));
  markNav(null);
  clearInterval(examTimer);
  const available = buildExamQuestions(cfg).length;
  const hist = examHistory().slice(-5).reverse();
  root.innerHTML = `
    <nav class="crumbs" aria-label="Breadcrumb"><button onclick="showDashboard()">← Home</button></nav>
    <header class="chapter-hero">
      <div class="ch-icon-big" aria-hidden="true">🎓</div>
      <div class="ch-main">
        <div class="ch-eyebrow">${t('examNodeTitle')}</div>
        <h1>${t('examHeading')}</h1>
        <p class="ch-desc">${t('examIntro', { q: cfg.questions, m: cfg.minutes, e: cfg.maxErrors })}</p>
      </div>
    </header>
    ${available < cfg.questions ? `<p class="exam-warn">${t('examNotEnough')}</p>` : `
    <label class="exam-opt"><input type="checkbox" id="examShowEn" checked> ${t('examShowTranslations')}</label>
    <div class="btn-row"><button class="action-btn" onclick="startMockExam()">${t('examStart')}</button></div>`}
    ${hist.length ? `
    <section class="callout" style="margin-top:22px;">
      <strong>${t('examHistory')}</strong>
      <ul class="exam-history">${hist.map(h => `<li><span>${h.date}</span><span class="${h.passed ? 'ok' : 'bad'}">${h.passed ? '✓ ' + t('examPassedShort') : '✗ ' + t('examFailedShort')}</span><span>${t('examErrorsShort', { e: h.errors, total: h.total })}</span></li>`).join('')}</ul>
    </section>` : ''}`;
  updateOverallBar();
}

function startMockExam() {
  const cfg = currentExamCfg();
  if (!cfg) return;
  const showEn = document.getElementById('examShowEn') ? document.getElementById('examShowEn').checked : true;
  const questions = buildExamQuestions(cfg);
  if (!questions.length) return;
  const now = Date.now();
  examSession = { cfg, questions, answers: questions.map(() => null), index: 0, startedAt: now, endsAt: now + cfg.minutes * 60000, showEn, finished: false };
  currentView = 'exam';
  markNav(null);
  window.scrollTo(0, 0);
  renderExamQuestion();
  clearInterval(examTimer);
  examTimer = setInterval(examTick, 1000);
}
function examRemainingSecs() {
  return Math.max(0, Math.round((examSession.endsAt - Date.now()) / 1000));
}
function fmtClock(secs) {
  return String(Math.floor(secs / 60)).padStart(2, '0') + ':' + String(secs % 60).padStart(2, '0');
}
function examTick() {
  if (!examSession || examSession.finished || currentView !== 'exam') { clearInterval(examTimer); return; }
  const left = examRemainingSecs();
  const el = document.getElementById('examTimer');
  if (el) { el.textContent = fmtClock(left); el.classList.toggle('low', left <= 60); }
  if (left <= 0) finishExam(true);
}
function renderExamQuestion() {
  const s = examSession, i = s.index, total = s.questions.length, q = s.questions[i];
  const last = i === total - 1;
  const dots = s.answers.map((a, k) =>
    `<button class="exam-dot${k === i ? ' current' : ''}${a !== null ? ' answered' : ''}" onclick="examGo(${k})" aria-label="Question ${k + 1}${a !== null ? ' (answered)' : ''}" ${k === i ? 'aria-current="true"' : ''}>${k + 1}</button>`).join('');
  root.innerHTML = `
    <div class="exam-topbar">
      <button class="step-back" onclick="leaveExam()" aria-label="Leave the exam">✕</button>
      <div class="exam-count">${t('examQuestionOf', { n: i + 1, total })}</div>
      <div class="exam-timer${examRemainingSecs() <= 60 ? ' low' : ''}" id="examTimer" role="timer" aria-label="Time left">${fmtClock(examRemainingSecs())}</div>
    </div>
    <div class="exam-card">
      ${tfStatementHtml(q, s.showEn)}
      ${!s.showEn && q.en ? `<button class="link-btn" onclick="toggleExamTranslation(this)">${t('showTranslation')}</button>` : ''}
      ${tfButtonsHtml(v => `examAnswer(${v})`)}
    </div>
    <div class="exam-nav">
      <button class="action-btn secondary" onclick="examGo(${i - 1})" ${i === 0 ? 'disabled' : ''}>${t('examPrev')}</button>
      ${last
        ? `<button class="action-btn" onclick="finishExam(false)">${t('examFinish')}</button>`
        : `<button class="action-btn" onclick="examGo(${i + 1})">${t('examNext')}</button>`}
    </div>
    <div class="exam-dots" role="group" aria-label="Jump to a question">${dots}</div>`;
  markExamPicked();
}
function markExamPicked() {
  const a = examSession.answers[examSession.index];
  document.querySelectorAll('.exam-card .tf-btn').forEach(b => {
    const on = a !== null && b.dataset.v === String(a);
    b.classList.toggle('picked', on);
    b.setAttribute('aria-pressed', on);
  });
}
function toggleExamTranslation(btn) {
  const tr = btn.parentElement.querySelector('.tf-translation');
  if (!tr) return;
  const show = tr.style.display === 'none';
  tr.style.display = show ? '' : 'none';
  btn.textContent = show ? t('hideTranslation') : t('showTranslation');
}
function examAnswer(v) {
  if (!examSession || examSession.finished) return;
  examSession.answers[examSession.index] = v;
  markExamPicked();
  const dot = document.querySelectorAll('.exam-dot')[examSession.index];
  if (dot) dot.classList.add('answered');
}
function examGo(k) {
  if (!examSession || examSession.finished) return;
  if (k < 0 || k >= examSession.questions.length) return;
  examSession.index = k;
  renderExamQuestion();
}
function leaveExam() {
  if (examSession && !examSession.finished && !confirm(t('examLeaveConfirm'))) return;
  clearInterval(examTimer);
  examSession = null;
  showDashboard();
}
function finishExam(timeUp) {
  const s = examSession;
  if (!s || s.finished) return;
  if (!timeUp) {
    const unanswered = s.answers.filter(a => a === null).length;
    if (unanswered && !confirm(t('examFinishConfirm', { n: unanswered }))) return;
  }
  s.finished = true;
  clearInterval(examTimer);
  const mistakes = [];
  s.questions.forEach((q, k) => {
    const a = s.answers[k];
    if (a === null || (a === 1) !== !!q.answer) mistakes.push({ q, a });
  });
  const errors = mistakes.length;
  const total = s.questions.length;
  const secs = Math.min(s.cfg.minutes * 60, Math.round((Date.now() - s.startedAt) / 1000));
  const passed = errors <= s.cfg.maxErrors;
  progress.exams = (progress.exams || []).concat([{ track: progress.selectedTrack, date: todayStr(), errors, total, passed, secs }]).slice(-30);
  progress.xp = (progress.xp || 0) + (passed ? 40 : Math.max(0, total - errors));
  saveProgress(progress);
  renderExamResult(s, mistakes, errors, secs, passed, timeUp);
}
function renderExamResult(s, mistakes, errors, secs, passed, timeUp) {
  currentView = 'exam-result';
  markNav(null);
  const total = s.questions.length;
  const answerLabel = v => v === null ? t('examNoAnswer') : (v === 1 ? t('tfTrue') : t('tfFalse'));
  const review = mistakes.map(({ q, a }) => `
    <div class="q-item q-item-wrong exam-review-item">
      ${tfStatementHtml(q)}
      <div class="exam-review-line">${t('examYourAnswer')} <strong>${answerLabel(a)}</strong> · ${t('examCorrectAnswer')} <strong>${q.answer ? t('tfTrue') : t('tfFalse')}</strong></div>
      <div class="tf-why" style="display:block;"><strong>${t('tfWhy')}</strong> ${q.why || ''}</div>
      <div class="exam-review-topic">${q.sourceLabel}: ${q.sourceTitle}</div>
    </div>`).join('');
  root.innerHTML = `
    <div class="exam-result ${passed ? 'pass' : 'fail'}" role="status">
      <div class="er-icon" aria-hidden="true">${passed ? '🎉' : '📚'}</div>
      <h1>${passed ? t('examPassed') : t('examFailed')}</h1>
      ${timeUp ? `<p class="exam-timeup">${t('examTimeUp')}</p>` : ''}
      <p>${t('examResultLine', { e: errors, total, max: s.cfg.maxErrors, time: fmtClock(secs) })}</p>
    </div>
    <div class="btn-row" style="justify-content:center;margin-bottom:22px;">
      <button class="action-btn" onclick="showExamIntro()">${t('examTryAgain')}</button>
      <button class="action-btn secondary" onclick="showDashboard()">${t('backToDashboardPlain')}</button>
    </div>
    <h2 class="exam-review-h">${mistakes.length ? t('examReviewHeading') : t('examNoMistakes')}</h2>
    ${review}`;
  updateOverallBar();
  window.scrollTo(0, 0);
}


/* ===================== INIT ===================== */
initApp();
