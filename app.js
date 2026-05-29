import { CARTAS, filtrarCartas } from './cards-data.js';
import { CARDS_EN } from './cards-en.js';
import { t, getLang, setLang } from './i18n.js';

// ═══════════════════════════════════════
// STATE
// ═══════════════════════════════════════
const state = {
  filtroActivo: 'all',
  busqueda: '',
  imagenBase64: null,
  imagenTipo: null,
  interpretando: false,
};

// ─── Follow-up conversation state ───
let chatHistory   = []; // [{role, content}] — full turn history for the API
let chatSysPrompt = ''; // system prompt saved from the active reading
let siguiendo     = false; // true while a follow-up request is in flight

// ═══════════════════════════════════════
// STORAGE KEYS
// ═══════════════════════════════════════
const LS_API_KEY    = 'tarotme_api_key';      // legacy single key (kept for migration)
const LS_API_KEYS   = 'tarotme_api_keys';     // JSON: [{id, alias, key}]
const LS_API_ACTIVE = 'tarotme_api_active';   // id of active key
const LS_DISCLAIMER = 'tarotme_disclaimer_shown';
const LS_LANG       = 'tarotme_lang';

// ═══════════════════════════════════════
// INDEXED DB — persistent backup
// Survives localStorage clears; only truly deleted when user clicks "Eliminar clave"
// ═══════════════════════════════════════
const DB_NAME    = 'tarotme-db';
const DB_STORE   = 'kv';
const DB_VERSION = 1;

function idbOpen() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = e => e.target.result.createObjectStore(DB_STORE);
    req.onsuccess = e => resolve(e.target.result);
    req.onerror   = e => reject(e.target.error);
  });
}

async function idbGet(key) {
  try {
    const db = await idbOpen();
    return new Promise((resolve, reject) => {
      const tx  = db.transaction(DB_STORE, 'readonly');
      const req = tx.objectStore(DB_STORE).get(key);
      req.onsuccess = () => resolve(req.result ?? null);
      req.onerror   = () => reject(req.error);
    });
  } catch { return null; }
}

async function idbSave(key, value) {
  try {
    const db = await idbOpen();
    return new Promise((resolve, reject) => {
      const tx  = db.transaction(DB_STORE, 'readwrite');
      const req = tx.objectStore(DB_STORE).put(value, key);
      req.onsuccess = () => resolve();
      req.onerror   = () => reject(req.error);
    });
  } catch { /* non-fatal */ }
}

async function idbDel(key) {
  try {
    const db = await idbOpen();
    return new Promise((resolve, reject) => {
      const tx  = db.transaction(DB_STORE, 'readwrite');
      const req = tx.objectStore(DB_STORE).delete(key);
      req.onsuccess = () => resolve();
      req.onerror   = () => reject(req.error);
    });
  } catch { /* non-fatal */ }
}

/** Write to localStorage AND IndexedDB simultaneously. */
async function storeSave(key, value) {
  localStorage.setItem(key, value);
  await idbSave(key, value);
}

/** Remove from localStorage AND IndexedDB simultaneously. */
async function storeDel(key) {
  localStorage.removeItem(key);
  await idbDel(key);
}

/**
 * On startup: if any critical key is missing from localStorage
 * (e.g. browser cleared it), restore it from IndexedDB.
 */
async function restoreStorage() {
  const keys = [LS_API_KEY, LS_DISCLAIMER, LS_LANG, LS_API_KEYS, LS_API_ACTIVE];
  for (const key of keys) {
    if (!localStorage.getItem(key)) {
      const val = await idbGet(key);
      if (val) localStorage.setItem(key, val);
    }
  }
}

// ── Multi-key helpers ──────────────────────────────────────────────────────

function getApiKeys() {
  try { return JSON.parse(localStorage.getItem(LS_API_KEYS) || '[]'); }
  catch { return []; }
}

function getActiveKeyId() {
  return localStorage.getItem(LS_API_ACTIVE) || null;
}

/** Returns the actual key string for the active entry, or null. */
function getActiveKey() {
  const keys = getApiKeys();
  if (!keys.length) return null;
  const id    = getActiveKeyId();
  const found = id ? keys.find(k => k.id === id) : null;
  return (found || keys[0]).key || null;
}

function _saveApiKeys(keys) {
  const json = JSON.stringify(keys);
  localStorage.setItem(LS_API_KEYS, json);
  idbSave(LS_API_KEYS, json); // fire-and-forget
}

function setActiveKeyId(id) {
  if (id) {
    localStorage.setItem(LS_API_ACTIVE, id);
    idbSave(LS_API_ACTIVE, id);
  } else {
    localStorage.removeItem(LS_API_ACTIVE);
    idbDel(LS_API_ACTIVE);
  }
}

function addApiKey(alias, key) {
  const keys = getApiKeys();
  const id   = 'k' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  keys.push({ id, alias: alias.trim() || `Clave ${keys.length + 1}`, key });
  _saveApiKeys(keys);
  setActiveKeyId(id);
  return id;
}

function deleteApiKey(id) {
  const wasActive = getActiveKeyId() === id;
  const keys      = getApiKeys().filter(k => k.id !== id);
  _saveApiKeys(keys);
  if (wasActive) setActiveKeyId(keys[0]?.id || null);
}

function maskKey(key) {
  if (!key || key.length < 8) return '••••••••';
  return '•••••••••' + key.slice(-4);
}

/** Migrate a legacy single key to the new multi-key system (runs once). */
function migrateOldApiKey() {
  const oldKey = localStorage.getItem(LS_API_KEY);
  if (oldKey && !getApiKeys().length) {
    const alias = getLang() === 'es' ? 'Mi clave' : 'My key';
    addApiKey(alias, oldKey);
  }
}

// ═══════════════════════════════════════
// DOM REFERENCES
// ═══════════════════════════════════════
const $ = id => document.getElementById(id);

const disclaimerModal  = $('disclaimer-modal');
const disclaimerAccept = $('disclaimer-accept');
const settingsModal    = $('settings-modal');
const settingsBtn      = $('settings-btn');
const settingsClose    = $('settings-close');
const apiKeyInput      = $('api-key-input');
const apiKeyAlias      = $('api-key-alias');
const apiKeySave       = $('api-key-save');
const settingsStatus   = $('settings-status');
const apiDot           = $('api-dot');
const apiNotice        = $('api-notice');
const langBtn          = $('lang-btn');
const langLabel        = $('lang-label');

const cardModal        = $('card-modal');
const cardModalClose   = $('card-modal-close');
const cardsGrid        = $('cards-grid');
const cardSearch       = $('card-search');
const noResults        = $('no-results');

const uploadZone       = $('upload-zone');
const imageInput       = $('image-input');
const cameraInput      = $('camera-input');
const uploadPlaceholder= $('upload-placeholder');
const uploadPreview    = $('upload-preview');
const previewImg       = $('preview-img');
const clearImageBtn    = $('clear-image-btn');
const questionInput    = $('question-input');
const charCount        = $('char-count');
const readBtn          = $('read-btn');
const readBtnText      = $('read-btn-text');
const readingResult    = $('reading-result');
const resultContent    = $('result-content');
const newReadingBtn    = $('new-reading-btn');

const navTabs     = document.querySelectorAll('.nav-tab');
const sections    = document.querySelectorAll('.section');
const filterPills = document.querySelectorAll('.pill');

// ═══════════════════════════════════════
// STARFIELD CANVAS
// ═══════════════════════════════════════
function initStarfield() {
  const canvas = $('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const stars = [];
  const COUNTS = { tiny: 180, small: 80, medium: 35, large: 10 };
  const COLORS = [
    [255, 255, 255],   // white
    [255, 240, 200],   // warm white
    [200, 220, 255],   // blue-white
    [201, 168,  76],   // golden (theme)
    [167, 139, 250],   // purple (theme)
  ];

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    initStars();
  }

  function initStars() {
    stars.length = 0;
    const addStars = (count, minR, maxR, minAlpha, maxAlpha) => {
      for (let i = 0; i < count; i++) {
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        stars.push({
          x:      Math.random() * canvas.width,
          y:      Math.random() * canvas.height,
          r:      minR + Math.random() * (maxR - minR),
          alpha:  minAlpha + Math.random() * (maxAlpha - minAlpha),
          speed:  0.003 + Math.random() * 0.012,
          phase:  Math.random() * Math.PI * 2,
          color,
        });
      }
    };
    addStars(COUNTS.tiny,   0.3, 0.8,  0.2, 0.6);
    addStars(COUNTS.small,  0.7, 1.2,  0.4, 0.85);
    addStars(COUNTS.medium, 1.2, 1.8,  0.5, 0.95);
    addStars(COUNTS.large,  1.8, 2.8,  0.6, 1.0);
  }

  let lastTime = 0;
  function draw(time) {
    const dt = (time - lastTime) / 1000;
    lastTime = time;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of stars) {
      s.phase += s.speed * (dt || 0.016);
      const twinkle = 0.55 + 0.45 * Math.sin(s.phase);
      const a = s.alpha * twinkle;
      const [r, g, b] = s.color;
      // Glow for larger stars
      if (s.r > 1.5) {
        const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 3.5);
        grd.addColorStop(0,   `rgba(${r},${g},${b},${a * 0.4})`);
        grd.addColorStop(1,   `rgba(${r},${g},${b},0)`);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  requestAnimationFrame(draw);
}

// ═══════════════════════════════════════
// i18n — apply translations to DOM
// ═══════════════════════════════════════
function applyTranslations() {
  const lang = getLang();
  document.documentElement.lang = lang;
  langLabel.textContent = lang.toUpperCase();

  // data-i18n (textContent)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (val && val !== key) el.textContent = val;
  });

  // data-i18n-html (innerHTML)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    const val = t(key);
    if (val && val !== key) el.innerHTML = val;
  });

  // Special: search placeholder
  cardSearch.placeholder   = t('search_ph');
  questionInput.placeholder = t('question_ph');
  const followupInput = $('followup-input');
  if (followupInput) followupInput.placeholder = t('followup_ph');
  apiDot.title = localStorage.getItem(LS_API_KEY)
    ? t('api_dot_on') : t('api_dot_off');

  // Upload title (has a <strong> tag)
  const uploadTitleEl = $('upload-title-text');
  if (uploadTitleEl) {
    uploadTitleEl.innerHTML = t('upload_title') + '<br>' + t('upload_or');
  }

  // Card tab buttons (may have been re-rendered)
  document.querySelectorAll('.card-tab').forEach(btn => {
    const key = btn.dataset.i18n;
    if (key) btn.textContent = t(key);
  });

  // Filter pill for "all" (has count inside)
  const allPill = document.querySelector('.pill[data-filter="all"] [data-i18n]');
  if (allPill) allPill.textContent = t('filter_all');

  // Banner text
  const bannerText = $('banner-text');
  if (bannerText) bannerText.textContent = t('banner_text');

  // Re-render FAQ
  renderFAQ();

  // Re-render cards grid (card names change language)
  renderizarCartas();
}

// ═══════════════════════════════════════
// FAQ — dynamic render
// ═══════════════════════════════════════
function renderFAQ() {
  const container = $('faq-container');
  if (!container) return;
  const groups = t('faq_groups');
  if (!Array.isArray(groups)) return;

  container.innerHTML = groups.map(group => `
    <div class="faq-group">
      <h2 class="faq-group-title">${group.title}</h2>
      ${group.items.map(item => `
        <details class="faq-item"${item.open ? ' open' : ''}>
          <summary class="faq-q">${item.q}</summary>
          <div class="faq-a">${item.a}</div>
        </details>
      `).join('')}
    </div>
  `).join('');
}

// ═══════════════════════════════════════
// INIT
// ═══════════════════════════════════════
async function init() {
  await restoreStorage();
  migrateOldApiKey(); // one-time migration from legacy single key
  initStarfield();

  if (!localStorage.getItem(LS_DISCLAIMER)) {
    disclaimerModal.classList.remove('hidden');
  }

  actualizarEstadoApiKey();
  applyTranslations();
  $('count-all').textContent = `(${CARTAS.length})`;
  bindEventos();
}

// ═══════════════════════════════════════
// LANGUAGE TOGGLE
// ═══════════════════════════════════════
langBtn.addEventListener('click', () => {
  const next = getLang() === 'es' ? 'en' : 'es';
  setLang(next);
  idbSave(LS_LANG, next); // keep IDB in sync (fire-and-forget)
  applyTranslations();
});

// ═══════════════════════════════════════
// DISCLAIMER
// ═══════════════════════════════════════
disclaimerAccept.addEventListener('click', () => {
  storeSave(LS_DISCLAIMER, '1'); // fire-and-forget async
  disclaimerModal.classList.add('hidden');
});

// ═══════════════════════════════════════
// SETTINGS / API KEYS
// ═══════════════════════════════════════
function showSettingsStatus(text, type = 'info') {
  settingsStatus.textContent = text;
  settingsStatus.style.color = type === 'success' ? 'var(--success)'
    : type === 'warn'    ? 'var(--warn)'
    : 'var(--text3)';
}

function renderKeysList() {
  const container = $('keys-list');
  if (!container) return;
  const keys     = getApiKeys();
  const activeId = getActiveKeyId() || keys[0]?.id;

  if (!keys.length) {
    container.innerHTML = '';
    container.classList.add('hidden');
    return;
  }

  container.classList.remove('hidden');
  container.innerHTML = `
    <div class="keys-list-title">${t('settings_keys_title')}</div>
    ${keys.map(k => `
      <div class="key-item${k.id === activeId ? ' active' : ''}" data-id="${k.id}">
        <button class="key-radio" data-id="${k.id}" title="${k.id === activeId ? t('settings_active_label') : ''}">
          ${k.id === activeId ? '◉' : '○'}
        </button>
        <div class="key-info">
          <span class="key-alias">${k.alias}</span>
          <span class="key-masked">${maskKey(k.key)}</span>
        </div>
        ${k.id === activeId ? `<span class="key-active-badge">${t('settings_active_label')}</span>` : ''}
        <button class="key-delete" data-id="${k.id}" aria-label="Eliminar ${k.alias}">✕</button>
      </div>
    `).join('')}
  `;

  container.querySelectorAll('.key-radio').forEach(btn => {
    btn.addEventListener('click', () => {
      setActiveKeyId(btn.dataset.id);
      actualizarEstadoApiKey();
      renderKeysList();
      showSettingsStatus(t('settings_switched'), 'success');
    });
  });

  container.querySelectorAll('.key-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      deleteApiKey(btn.dataset.id);
      actualizarEstadoApiKey();
      renderKeysList();
      showSettingsStatus(t('settings_deleted'), 'info');
    });
  });
}

function openSettings() {
  if (apiKeyAlias) apiKeyAlias.value = '';
  apiKeyInput.value = '';
  settingsStatus.textContent = '';
  renderKeysList();
  settingsModal.classList.remove('hidden');
  setTimeout(() => (apiKeyAlias || apiKeyInput)?.focus(), 50);
}
window.openSettings = openSettings;

settingsBtn.addEventListener('click', openSettings);
settingsClose.addEventListener('click', () => settingsModal.classList.add('hidden'));
settingsModal.addEventListener('click', e => {
  if (e.target === settingsModal) settingsModal.classList.add('hidden');
});

apiKeySave.addEventListener('click', () => {
  const aliasVal = apiKeyAlias?.value.trim() || '';
  const keyVal   = apiKeyInput.value.trim();

  if (!keyVal) {
    showSettingsStatus(t('settings_invalid'), 'warn');
    return;
  }
  if (!keyVal.startsWith('sk-or-v1-')) {
    showSettingsStatus(t('settings_prefix'), 'warn');
    return;
  }

  const defaultAlias = getLang() === 'es'
    ? `Clave ${getApiKeys().length + 1}`
    : `Key ${getApiKeys().length + 1}`;
  addApiKey(aliasVal || defaultAlias, keyVal);
  actualizarEstadoApiKey();
  renderKeysList();

  if (apiKeyAlias) apiKeyAlias.value = '';
  apiKeyInput.value = '';
  showSettingsStatus(t('settings_saved'), 'success');
  setTimeout(() => settingsModal.classList.add('hidden'), 1500);
});

function actualizarEstadoApiKey() {
  const tieneKey = !!getActiveKey();
  apiDot.classList.toggle('active', tieneKey);
  apiDot.title = tieneKey ? t('api_dot_on') : t('api_dot_off');
  apiNotice.classList.toggle('hidden', tieneKey);
}

// ═══════════════════════════════════════
// NAVIGATION TABS
// ═══════════════════════════════════════
function bindEventos() {
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const seccion = tab.dataset.section;
      navTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      sections.forEach(s => {
        s.classList.toggle('active', s.id === seccion);
        s.classList.toggle('hidden', s.id !== seccion);
      });
    });
  });

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.filtroActivo = pill.dataset.filter;
      renderizarCartas();
    });
  });

  cardSearch.addEventListener('input', e => {
    state.busqueda = e.target.value;
    renderizarCartas();
  });

  cardModalClose.addEventListener('click', () => cardModal.classList.add('hidden'));
  cardModal.addEventListener('click', e => {
    if (e.target === cardModal) cardModal.classList.add('hidden');
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      cardModal.classList.add('hidden');
      settingsModal.classList.add('hidden');
    }
  });

  setupUpload();
  setupLectura();
  setupFollowup();
}

// ═══════════════════════════════════════
// CARDS GRID
// ═══════════════════════════════════════
function cardDisplayName(carta) {
  return getLang() === 'en' ? carta.ingles : carta.nombre;
}

function renderizarCartas() {
  const cartas = filtrarCartas(state.filtroActivo, state.busqueda);
  noResults.classList.toggle('hidden', cartas.length > 0);

  cardsGrid.innerHTML = cartas.map(c => `
    <div class="card-item"
         role="listitem button"
         tabindex="0"
         data-id="${c.id}"
         aria-label="${cardDisplayName(c)}"
         title="${cardDisplayName(c)}">
      <div class="card-img-wrap">
        <img src="${c.imagen}"
             alt="${cardDisplayName(c)}"
             loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="card-img-placeholder" style="display:none">🃏</div>
      </div>
      <div class="card-footer">
        <span class="card-nombre">${cardDisplayName(c)}</span>
        <span class="card-palo-badge">${etiquetaPalo(c)}</span>
      </div>
    </div>
  `).join('');

  cardsGrid.querySelectorAll('.card-item').forEach(el => {
    el.addEventListener('click', () => abrirCartaDetalle(el.dataset.id));
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        abrirCartaDetalle(el.dataset.id);
      }
    });
  });
}

function etiquetaPalo(carta) {
  if (carta.arcana === 'mayor') return t('badge_mayor');
  const map = {
    bastos:   t('badge_bastos'),
    copas:    t('badge_copas'),
    espadas:  t('badge_espadas'),
    oros:     t('badge_oros'),
  };
  return map[carta.palo] || carta.palo;
}

// ═══════════════════════════════════════
// CARD DETAIL MODAL
// ═══════════════════════════════════════
function abrirCartaDetalle(id) {
  const carta = CARTAS.find(c => c.id === id);
  if (!carta) return;

  const lang  = getLang();
  const enData = CARDS_EN[id] || {};

  $('card-detail-img').src = carta.imagen;
  $('card-detail-img').alt = lang === 'en' ? carta.ingles : carta.nombre;
  $('card-detail-img').onerror = function() { this.src = ''; };

  $('card-detail-numero').textContent =
    `${carta.arcana === 'mayor' ? (lang === 'en' ? 'Major Arcana · ' : 'Arcano Mayor · ') : ''}${carta.numero !== carta.nombre ? carta.numero : ''}`;

  $('card-modal-title').textContent  = lang === 'en' ? carta.ingles : carta.nombre;
  $('card-detail-ingles').textContent = lang === 'en' ? carta.nombre : carta.ingles;

  const badge = $('card-detail-badge');
  badge.textContent = etiquetaPalo(carta);
  badge.className = `arcana-badge badge-${carta.arcana === 'mayor' ? 'mayor' : carta.palo}`;

  // Keywords
  const keywords = lang === 'en'
    ? (enData.keywords || carta.palabrasClave)
    : carta.palabrasClave;
  $('card-detail-keywords').innerHTML = keywords
    .map(k => `<span class="keyword-tag">${k}</span>`).join('');

  // Tab content (get both language sources)
  const content = {
    upright:   lang === 'en' ? (enData.upright   || carta.derecho)     : carta.derecho,
    reversed:  lang === 'en' ? (enData.reversed  || carta.invertido)   : carta.invertido,
    symbolism: lang === 'en' ? (enData.symbolism || carta.simbolismo)  : carta.simbolismo,
  };

  const tabs = document.querySelectorAll('.card-tab');
  tabs.forEach(tab => {
    tab.textContent = t(tab.dataset.i18n || tab.dataset.tab);
    tab.classList.remove('active');
  });
  tabs[0].classList.add('active');
  $('card-tab-content').textContent = content.upright;

  tabs.forEach(tab => {
    tab.onclick = () => {
      tabs.forEach(tt => tt.classList.remove('active'));
      tab.classList.add('active');
      $('card-tab-content').textContent = content[tab.dataset.tab];
    };
  });

  cardModal.classList.remove('hidden');
  cardModal.querySelector('.card-detail-box').scrollTop = 0;
}

// ═══════════════════════════════════════
// Saves a camera-captured photo to the device gallery / Downloads folder.
// Only runs on mobile — desktop has no need for this.
function guardarFotoEnGaleria(file) {
  if (!file || !/android|iphone|ipad|ipod/i.test(navigator.userAgent)) return;
  try {
    const ext = (file.type.split('/')[1] || file.name?.split('.').pop() || 'jpg')
                  .replace('jpeg', 'jpg');
    const url  = URL.createObjectURL(file);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = `tirada-tarot-${Date.now()}.${ext}`;
    a.style.cssText = 'position:fixed;opacity:0;pointer-events:none;';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 3000);
  } catch { /* graceful — some browsers may block programmatic downloads */ }
}

// UPLOAD ZONE
// ═══════════════════════════════════════
function setupUpload() {
  // Clicking the zone opens gallery (unless clicking a button inside it)
  uploadZone.addEventListener('click', e => {
    if (e.target.closest('.upload-action-btn') || e.target.closest('.clear-img-btn')) return;
    imageInput.click();
  });

  // Explicit gallery / camera buttons
  $('gallery-btn')?.addEventListener('click', e => { e.stopPropagation(); imageInput.click(); });
  $('camera-btn')?.addEventListener('click',  e => { e.stopPropagation(); cameraInput.click(); });
  cameraInput?.addEventListener('change', e => {
    const file = e.target.files[0];
    if (file) {
      procesarImagen(file);
      guardarFotoEnGaleria(file); // save to gallery so the photo is accessible later
    }
    cameraInput.value = '';
  });
  uploadZone.addEventListener('dragover', e => {
    e.preventDefault();
    uploadZone.classList.add('drag-over');
  });
  uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('drag-over'));
  uploadZone.addEventListener('drop', e => {
    e.preventDefault();
    uploadZone.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) procesarImagen(file);
  });
  imageInput.addEventListener('change', e => {
    const file = e.target.files[0];
    if (file) procesarImagen(file);
    imageInput.value = '';
  });
  clearImageBtn.addEventListener('click', e => {
    e.stopPropagation();
    limpiarImagen();
  });
}

function procesarImagen(file) {
  const reader = new FileReader();
  reader.onload = ev => {
    const dataUrl = ev.target.result;
    previewImg.src = dataUrl;
    uploadPlaceholder.classList.add('hidden');
    uploadPreview.classList.remove('hidden');
    state.imagenBase64 = dataUrl.split(',')[1];
    state.imagenTipo   = file.type;
    actualizarBotonLeer();
  };
  reader.readAsDataURL(file);
}

function limpiarImagen() {
  state.imagenBase64 = null;
  state.imagenTipo   = null;
  previewImg.src = '';
  uploadPreview.classList.add('hidden');
  uploadPlaceholder.classList.remove('hidden');
  actualizarBotonLeer();
}

// ═══════════════════════════════════════
// READING — MAIN LOGIC
// ═══════════════════════════════════════
function setupLectura() {
  questionInput.addEventListener('input', () => {
    charCount.textContent = questionInput.value.length;
    actualizarBotonLeer();
  });
  readBtn.addEventListener('click', realizarLectura);
  newReadingBtn.addEventListener('click', () => {
    readingResult.classList.add('hidden');
    // Reset follow-up chat
    chatHistory   = [];
    chatSysPrompt = '';
    const followupSec  = $('followup-section');
    const chatHistoryEl = $('chat-history');
    if (followupSec)   followupSec.classList.add('hidden');
    if (chatHistoryEl) chatHistoryEl.innerHTML = '';
    limpiarImagen();
    questionInput.value = '';
    charCount.textContent = '0';
    actualizarBotonLeer();
    readingResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function actualizarBotonLeer() {
  const listo = !!state.imagenBase64 && !state.interpretando;
  readBtn.disabled = !listo;
  readBtnText.textContent = t(state.interpretando ? 'reading_btn_wait' : 'read_btn');
}

async function realizarLectura() {
  const apiKey = getActiveKey();
  if (!apiKey) { openSettings(); return; }
  if (!state.imagenBase64) return;

  const pregunta = questionInput.value.trim();
  state.interpretando = true;
  actualizarBotonLeer();
  readBtn.classList.add('loading');

  readingResult.classList.remove('hidden');
  resultContent.innerHTML = `
    <div class="loading-placeholder">
      <div class="loading-dots"><span></span><span></span><span></span></div>
      <p>${t('reading_thinking')}</p>
    </div>`;
  readingResult.scrollIntoView({ behavior: 'smooth', block: 'start' });

  try {
    const promptTemplate = pregunta ? t('prompt_with_q') : t('prompt_general');
    const textoUsuario = promptTemplate.replace('{q}', pregunta);

    // Explicit language instruction so the AI always replies in the app's active language
    const langCode        = getLang();
    const langInstruction = langCode === 'es'
      ? 'IMPORTANTE: Responde siempre en español, independientemente del idioma de la pregunta.'
      : 'IMPORTANT: Always respond in English, regardless of the language of the question.';
    const systemPrompt    = t('system_prompt') + '\n\n' + langInstruction;

    const resp = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://jfsaints.github.io/tarotme/',
        'X-Title': 'TarotMe',
      },
      body: JSON.stringify({
        model: 'qwen/qwen2.5-vl-72b-instruct',
        max_tokens: 1200,
        messages: [
          { role: 'system', content: systemPrompt },
          {
            role: 'user',
            content: [
              { type: 'image_url', image_url: { url: `data:${state.imagenTipo};base64,${state.imagenBase64}` } },
              { type: 'text', text: textoUsuario }
            ]
          }
        ]
      })
    });

    if (!resp.ok) {
      const err = await resp.json().catch(() => ({}));
      throw new Error(err.error?.message || `Error ${resp.status}: ${resp.statusText}`);
    }

    const data  = await resp.json();
    const texto = data.choices?.[0]?.message?.content || t('err_no_resp');

    // Save conversation for follow-ups
    chatSysPrompt = systemPrompt;
    chatHistory   = [
      {
        role: 'user',
        content: [
          { type: 'image_url', image_url: { url: `data:${state.imagenTipo};base64,${state.imagenBase64}` } },
          { type: 'text', text: textoUsuario }
        ]
      },
      { role: 'assistant', content: texto }
    ];

    mostrarResultado(texto);
    iniciarFollowup();

  } catch (err) {
    resultContent.innerHTML = `
      <p style="color:var(--danger)">
        ${t('err_title')}<br>
        <span style="font-size:0.85rem;color:var(--text2)">${err.message}</span>
      </p>
      <p style="font-size:0.82rem;color:var(--text3);margin-top:8px">
        ${t('err_check')} <a href="https://openrouter.ai/keys" target="_blank">openrouter.ai/keys</a>.
      </p>`;
  } finally {
    state.interpretando = false;
    readBtn.classList.remove('loading');
    actualizarBotonLeer();
  }
}

function mostrarResultado(texto) {
  resultContent.innerHTML = texto
    .split(/\n{2,}/)
    .filter(p => p.trim())
    .map(p => `<p>${p.trim().replace(/\n/g, '<br>')}</p>`)
    .join('');
}

// ═══════════════════════════════════════
// FOLLOW-UP CHAT
// ═══════════════════════════════════════

/** Show/reset the follow-up section after a successful reading. */
function iniciarFollowup() {
  const followupSec   = $('followup-section');
  const chatHistoryEl = $('chat-history');
  const followupInput = $('followup-input');
  if (!followupSec) return;

  if (chatHistoryEl) chatHistoryEl.innerHTML = '';
  if (followupInput) {
    followupInput.value = '';
    followupInput.placeholder = t('followup_ph');
  }
  actualizarBtnFollowup();
  followupSec.classList.remove('hidden');
  // Scroll so the input row is visible
  setTimeout(() => followupSec.scrollIntoView({ behavior: 'smooth', block: 'end' }), 150);
}

/** Wire up events for the follow-up input (called once on init). */
function setupFollowup() {
  const followupInput   = $('followup-input');
  const followupBtn     = $('followup-btn');
  if (!followupInput || !followupBtn) return;

  followupInput.addEventListener('input', actualizarBtnFollowup);

  followupBtn.addEventListener('click', realizarSeguimiento);

  // Enter submits, Shift+Enter inserts newline
  followupInput.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!followupBtn.disabled) realizarSeguimiento();
    }
  });
}

function actualizarBtnFollowup() {
  const followupInput = $('followup-input');
  const followupBtn   = $('followup-btn');
  if (!followupBtn) return;
  followupBtn.disabled = !followupInput?.value.trim() || siguiendo;
}

/** Send a follow-up question and stream the answer into the chat. */
async function realizarSeguimiento() {
  const apiKey = localStorage.getItem(LS_API_KEY);
  if (!apiKey || siguiendo || !chatHistory.length) return;

  const followupInput   = $('followup-input');
  const followupBtnText = $('followup-btn-text');
  const pregunta = followupInput?.value.trim();
  if (!pregunta) return;

  // Show user bubble
  agregarMensajeChat('user', pregunta);
  followupInput.value = '';
  siguiendo = true;
  actualizarBtnFollowup();
  if (followupBtnText) followupBtnText.textContent = t('followup_btn_wait');

  // Loading bubble (will be replaced by AI response)
  const loadingId = `fl-${Date.now()}`;
  agregarMensajeChat('loading', '', loadingId);

  // Add user turn to history
  chatHistory.push({ role: 'user', content: pregunta });

  // Build a slightly shorter system prompt for follow-ups
  const lang = getLang();
  const followupSys = chatSysPrompt + (lang === 'es'
    ? '\n\nEn las preguntas de seguimiento, responde de forma concisa (80–200 palabras) sin repetir la identificación inicial de las cartas.'
    : '\n\nFor follow-up questions, respond concisely (80–200 words) without repeating the initial card identification.');

  try {
    const resp = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://jfsaints.github.io/tarotme/',
        'X-Title': 'TarotMe',
      },
      body: JSON.stringify({
        model: 'qwen/qwen2.5-vl-72b-instruct',
        max_tokens: 600,
        messages: [
          { role: 'system', content: followupSys },
          ...chatHistory
        ]
      })
    });

    if (!resp.ok) {
      const err = await resp.json().catch(() => ({}));
      throw new Error(err.error?.message || `Error ${resp.status}: ${resp.statusText}`);
    }

    const data  = await resp.json();
    const texto = data.choices?.[0]?.message?.content || t('err_no_resp');

    document.getElementById(loadingId)?.remove();
    agregarMensajeChat('ai', texto);

    // Save AI turn
    chatHistory.push({ role: 'assistant', content: texto });

  } catch (err) {
    document.getElementById(loadingId)?.remove();
    agregarMensajeChat('error', err.message);
    // Remove the unanswered user turn from history
    chatHistory.pop();
  } finally {
    siguiendo = false;
    actualizarBtnFollowup();
    if (followupBtnText) followupBtnText.textContent = t('followup_btn');
  }
}

/**
 * Append a message bubble to the chat history.
 * @param {'user'|'ai'|'loading'|'error'} type
 * @param {string} text
 * @param {string} [id]  optional DOM id (used for the loading bubble)
 */
function agregarMensajeChat(type, text, id) {
  const chatHistoryEl = $('chat-history');
  if (!chatHistoryEl) return;

  const div = document.createElement('div');
  if (id) div.id = id;

  switch (type) {
    case 'user':
      div.className   = 'chat-message chat-msg-user';
      div.textContent = text;
      break;
    case 'ai':
      div.className = 'chat-message chat-msg-ai';
      div.innerHTML = text
        .split(/\n{2,}/)
        .filter(p => p.trim())
        .map(p => `<p>${p.trim().replace(/\n/g, '<br>')}</p>`)
        .join('');
      break;
    case 'loading':
      div.className = 'chat-message chat-msg-ai chat-msg-loading';
      div.innerHTML = '<div class="loading-dots"><span></span><span></span><span></span></div>';
      break;
    case 'error':
      div.className   = 'chat-message chat-msg-error';
      div.textContent = `⚠️ ${text}`;
      break;
  }

  chatHistoryEl.appendChild(div);
  // Scroll chat area to bottom
  chatHistoryEl.scrollTop = chatHistoryEl.scrollHeight;
}

// ═══════════════════════════════════════
// PWA — Service Worker + Install Button
// ═══════════════════════════════════════
(function initPWA() {
  // Register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }

  const installBtn = $('install-btn');
  const iosTip     = $('ios-install-tip');
  const iosTipText = $('ios-tip-text');

  if (!installBtn) return;

  const isIOS       = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isStandalone = () =>
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;

  let deferredPrompt = null;

  // Show button on iOS (native install via Safari share sheet)
  if (isIOS && !isStandalone()) {
    installBtn.classList.remove('hidden');
  }

  // Show button on Chrome/Android when prompt is available
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    if (!isStandalone()) installBtn.classList.remove('hidden');
  });

  // Hide button once app is installed
  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    installBtn.classList.add('hidden');
    if (iosTip) iosTip.classList.add('hidden');
  });

  // Button click handler
  installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
      // Chrome / Android: native install prompt
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        deferredPrompt = null;
        installBtn.classList.add('hidden');
      }
    } else if (isIOS) {
      // iOS: toggle instructions tooltip
      if (iosTip && iosTipText) {
        iosTipText.textContent = t('ios_install_tip');
        iosTip.classList.toggle('hidden');
      }
    }
  });

  // Hide if already running as standalone (already installed)
  if (isStandalone()) {
    installBtn.classList.add('hidden');
  }
})();

// ═══════════════════════════════════════
// START
// ═══════════════════════════════════════
init();
