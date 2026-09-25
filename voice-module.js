/* =====================================================================
   VOICE MODULE — native TTS + Speech Recognition via Capacitor plugins,
   with an automatic fallback to browser speech APIs.

   This one file serves two deployments from the same source:
     - Inside the Android/iOS app (Capacitor WebView): uses the native
       @capacitor-community/text-to-speech and speech-recognition plugins,
       which sound better and actually work in a WebView (unlike the
       browser APIs, which don't exist there at all).
     - On the plain web (e.g. the Firebase/GitHub Pages deployment): the
       `Capacitor` global isn't injected at all, so this falls back to
       window.speechSynthesis and webkitSpeechRecognition automatically.

   Every function name, signature, and call site is identical either way,
   so nothing else in the app needs to know which path is active.

   Loads AFTER engine.js (see each app's index.html script order), so the
   t() translation helper and DEFAULT_STRINGS it uses below are already
   defined — this file doesn't declare its own copy.
===================================================================== */

const hasNativeVoice = typeof Capacitor !== 'undefined'
  && typeof Capacitor.isNativePlatform === 'function'
  && Capacitor.isNativePlatform()
  && Capacitor.Plugins && Capacitor.Plugins.TextToSpeech && Capacitor.Plugins.SpeechRecognition;

const { SpeechRecognition, TextToSpeech } = hasNativeVoice ? Capacitor.Plugins : {};

// Each language app sets window.APP_VOICE_LANG in its content.js (e.g.
// 'ar-SA', 'it-IT') before this file loads. Falls back to English so a
// missing config never throws — it just won't sound native.
const VOICE_LANG = window.APP_VOICE_LANG || 'en-US';
const VOICE_LANG_NAME = window.APP_LANGUAGE_NAME || 'this language';

// ---------- Text-to-Speech ----------

async function speakArabicText(text, statusElId) {
  const statusEl = statusElId ? document.getElementById(statusElId) : null;
  if (hasNativeVoice) {
    if (statusEl) statusEl.textContent = t('ttsPlaying');
    try {
      await TextToSpeech.speak({
        text: text,
        lang: VOICE_LANG,
        rate: 0.85,
        pitch: 1.0,
        volume: 1.0,
        category: 'ambient', // audio ducks politely instead of interrupting other sound
      });
      if (statusEl) statusEl.textContent = '';
    } catch (err) {
      console.error('TTS failed:', err);
      if (statusEl) statusEl.textContent = t('ttsPlaybackFailedDevice', {lang: VOICE_LANG_NAME});
    }
    return;
  }

  // Browser fallback
  if (!('speechSynthesis' in window)) {
    if (statusEl) statusEl.textContent = t('ttsNotSupported');
    return;
  }
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = VOICE_LANG;
  utter.rate = 0.85;
  const langPrefix = VOICE_LANG.split('-')[0].toLowerCase();
  const matchedVoice = window.speechSynthesis.getVoices().find(v => v.lang && v.lang.toLowerCase().startsWith(langPrefix));
  if (matchedVoice) utter.voice = matchedVoice;
  if (statusEl) {
    statusEl.textContent = t('ttsPlaying');
    utter.onend = () => { statusEl.textContent = ''; };
    utter.onerror = () => { statusEl.textContent = t('ttsPlaybackFailedGeneric'); };
  }
  window.speechSynthesis.speak(utter);
}

function listenToTarget() {
  const p = currentChapter.speakingPhrases[speakIndex];
  speakArabicText(p.plain, 'voiceStatus');
}

// Stops event bubbling so a 🔊 button inside a clickable flip-card doesn't
// also trigger the card's own flip/click handler — same behavior as before.
function speakWord(text, evt) {
  if (evt) evt.stopPropagation();
  speakArabicText(text);
}

// ---------- Speech Recognition ----------

let micPermissionGranted = false;

async function ensureMicPermission() {
  if (!hasNativeVoice) return true; // browser prompts for mic access itself on start()
  if (micPermissionGranted) return true;
  try {
    const status = await SpeechRecognition.checkPermissions();
    if (status.speechRecognition === 'granted') {
      micPermissionGranted = true;
      return true;
    }
    const req = await SpeechRecognition.requestPermissions();
    micPermissionGranted = req.speechRecognition === 'granted';
    return micPermissionGranted;
  } catch (err) {
    console.error('Permission check failed:', err);
    return false;
  }
}

function scoreAndShowResult(transcript) {
  const resultBox = document.getElementById('speakResult');
  const target = normalizeAr(currentChapter.speakingPhrases[speakIndex].plain);
  const heard = normalizeAr(transcript);
  const dist = levenshtein(target, heard);
  const maxLen = Math.max(target.length, heard.length) || 1;
  const similarity = Math.max(0, 1 - dist / maxLen);
  const pct = Math.round(similarity * 100);

  resultBox.classList.add('show');
  document.getElementById('heardText').textContent = transcript || t('nothingRecognized');
  const fill = document.getElementById('similarityFill');
  fill.style.width = pct + '%';
  const verdictEl = document.getElementById('speakVerdict');
  if (similarity > 0.85) {
    fill.style.background = '#27ae60'; verdictEl.style.color = '#27ae60';
    verdictEl.textContent = t('verdictExcellent', {pct});
  } else if (similarity > 0.55) {
    fill.style.background = '#e67e22'; verdictEl.style.color = '#e67e22';
    verdictEl.textContent = t('verdictClose', {pct});
  } else {
    fill.style.background = '#e74c3c'; verdictEl.style.color = '#e74c3c';
    verdictEl.textContent = t('verdictTryAgain', {pct});
  }

  markSpeakingAttempt(speakIndex);
  renderSpeakTracker();
}

function showRecordingError(message) {
  const resultBox = document.getElementById('speakResult');
  resultBox.classList.add('show');
  document.getElementById('heardText').textContent = '—';
  const verdictEl = document.getElementById('speakVerdict');
  verdictEl.textContent = message;
  verdictEl.style.color = '#e74c3c';
}

async function startRecording() {
  const micBtn = document.getElementById('micBtn');

  const allowed = await ensureMicPermission();
  if (!allowed) {
    showRecordingError(t('micPermissionDenied'));
    return;
  }

  if (hasNativeVoice) {
    micBtn.classList.add('listening');
    micBtn.textContent = t('listeningBtn');
    try {
      const { matches } = await SpeechRecognition.start({
        language: VOICE_LANG,
        maxResults: 1,
        prompt: t('sttPrompt'),
        partialResults: false,
        popup: false,
      });
      scoreAndShowResult((matches && matches[0]) || '');
    } catch (err) {
      console.error('Speech recognition failed:', err);
      showRecordingError(t('couldntCaptureAudio', {err: err.message || err}));
    } finally {
      micBtn.classList.remove('listening');
      micBtn.textContent = t('recordBtn');
    }
    return;
  }

  // Browser fallback
  const BrowserSpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!BrowserSpeechRecognition) {
    showRecordingError(t('sttNotSupported'));
    return;
  }
  const recognizer = new BrowserSpeechRecognition();
  recognizer.lang = VOICE_LANG;
  recognizer.maxAlternatives = 1;
  recognizer.interimResults = false;

  micBtn.classList.add('listening');
  micBtn.textContent = t('listeningBtn');

  recognizer.onresult = (event) => {
    const transcript = event.results[0][0].transcript || '';
    scoreAndShowResult(transcript);
  };
  recognizer.onerror = (event) => {
    console.error('Speech recognition failed:', event.error);
    showRecordingError(t('couldntCaptureAudio', {err: event.error}));
  };
  recognizer.onend = () => {
    micBtn.classList.remove('listening');
    micBtn.textContent = t('recordBtn');
  };

  try {
    recognizer.start();
  } catch (err) {
    console.error('Speech recognition failed:', err);
    showRecordingError(t('couldntCaptureAudio', {err: err.message || err}));
    micBtn.classList.remove('listening');
    micBtn.textContent = t('recordBtn');
  }
}
