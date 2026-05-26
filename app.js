import { CARTAS, filtrarCartas } from './cards-data.js';

// ═══════════════════════════════════════
// ESTADO DE LA APP
// ═══════════════════════════════════════
const state = {
  filtroActivo: 'all',
  busqueda: '',
  imagenBase64: null,
  imagenTipo: null,
  interpretando: false,
};

// ═══════════════════════════════════════
// REFERENCIAS DOM
// ═══════════════════════════════════════
const $ = id => document.getElementById(id);

const disclaimerModal = $('disclaimer-modal');
const disclaimerAccept = $('disclaimer-accept');
const settingsModal = $('settings-modal');
const settingsBtn = $('settings-btn');
const settingsClose = $('settings-close');
const apiKeyInput = $('api-key-input');
const apiKeySave = $('api-key-save');
const apiKeyClear = $('api-key-clear');
const settingsStatus = $('settings-status');
const apiDot = $('api-dot');
const apiNotice = $('api-notice');

const cardModal = $('card-modal');
const cardModalClose = $('card-modal-close');

const cardsGrid = $('cards-grid');
const cardSearch = $('card-search');
const noResults = $('no-results');

const uploadZone = $('upload-zone');
const imageInput = $('image-input');
const uploadPlaceholder = $('upload-placeholder');
const uploadPreview = $('upload-preview');
const previewImg = $('preview-img');
const clearImageBtn = $('clear-image-btn');
const questionInput = $('question-input');
const charCount = $('char-count');
const readBtn = $('read-btn');
const readBtnText = $('read-btn-text');
const readingResult = $('reading-result');
const resultContent = $('result-content');
const newReadingBtn = $('new-reading-btn');

const navTabs = document.querySelectorAll('.nav-tab');
const sections = document.querySelectorAll('.section');
const filterPills = document.querySelectorAll('.pill');

// ═══════════════════════════════════════
// ARRANQUE
// ═══════════════════════════════════════
function init() {
  if (!localStorage.getItem('tarotme_disclaimer_shown')) {
    disclaimerModal.classList.remove('hidden');
  }
  actualizarEstadoApiKey();
  renderizarCartas();
  bindEventos();
  $('count-all').textContent = `(${CARTAS.length})`;
}

// ═══════════════════════════════════════
// DISCLAIMER
// ═══════════════════════════════════════
disclaimerAccept.addEventListener('click', () => {
  localStorage.setItem('tarotme_disclaimer_shown', '1');
  disclaimerModal.classList.add('hidden');
});

// ═══════════════════════════════════════
// SETTINGS / API KEY
// ═══════════════════════════════════════
function openSettings() {
  const key = localStorage.getItem('tarotme_api_key') || '';
  apiKeyInput.value = key ? '••••••••••••••••••••' : '';
  settingsStatus.textContent = '';
  settingsModal.classList.remove('hidden');
  setTimeout(() => apiKeyInput.focus(), 50);
}
window.openSettings = openSettings;

settingsBtn.addEventListener('click', openSettings);
settingsClose.addEventListener('click', () => settingsModal.classList.add('hidden'));
settingsModal.addEventListener('click', e => {
  if (e.target === settingsModal) settingsModal.classList.add('hidden');
});

apiKeyInput.addEventListener('focus', () => {
  if (apiKeyInput.value.startsWith('•')) apiKeyInput.value = '';
});

apiKeySave.addEventListener('click', () => {
  const key = apiKeyInput.value.trim();
  if (!key || key.startsWith('•')) {
    settingsStatus.style.color = 'var(--warn)';
    settingsStatus.textContent = key.startsWith('•') ? 'La clave no cambió.' : 'Introduce una clave válida.';
    return;
  }
  if (!key.startsWith('sk-ant-')) {
    settingsStatus.style.color = 'var(--warn)';
    settingsStatus.textContent = 'La clave debe empezar por sk-ant-...';
    return;
  }
  localStorage.setItem('tarotme_api_key', key);
  actualizarEstadoApiKey();
  settingsStatus.style.color = 'var(--success)';
  settingsStatus.textContent = '✓ Clave guardada correctamente.';
  setTimeout(() => settingsModal.classList.add('hidden'), 1400);
});

apiKeyClear.addEventListener('click', () => {
  localStorage.removeItem('tarotme_api_key');
  apiKeyInput.value = '';
  actualizarEstadoApiKey();
  settingsStatus.style.color = 'var(--text3)';
  settingsStatus.textContent = 'Clave eliminada.';
});

function actualizarEstadoApiKey() {
  const tieneKey = !!localStorage.getItem('tarotme_api_key');
  apiDot.classList.toggle('active', tieneKey);
  apiDot.title = tieneKey ? 'Clave de API configurada' : 'Sin clave de API';
  apiNotice.classList.toggle('hidden', tieneKey);
}

// ═══════════════════════════════════════
// NAVEGACIÓN TABS
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
}

// ═══════════════════════════════════════
// CUADRÍCULA DE CARTAS
// ═══════════════════════════════════════
function renderizarCartas() {
  const cartas = filtrarCartas(state.filtroActivo, state.busqueda);
  noResults.classList.toggle('hidden', cartas.length > 0);

  cardsGrid.innerHTML = cartas.map(c => `
    <div class="card-item"
         role="listitem button"
         tabindex="0"
         data-id="${c.id}"
         aria-label="${c.nombre}"
         title="${c.nombre}">
      <div class="card-img-wrap">
        <img src="${c.imagen}"
             alt="${c.nombre}"
             loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="card-img-placeholder" style="display:none">🃏</div>
      </div>
      <div class="card-footer">
        <span class="card-nombre">${c.nombre}</span>
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
  if (carta.arcana === 'mayor') return 'Arcano Mayor';
  const palos = { bastos: '🔥 Bastos', copas: '💧 Copas', espadas: '💨 Espadas', oros: '🌿 Oros' };
  return palos[carta.palo] || carta.palo;
}

// ═══════════════════════════════════════
// MODAL DETALLE DE CARTA
// ═══════════════════════════════════════
function abrirCartaDetalle(id) {
  const carta = CARTAS.find(c => c.id === id);
  if (!carta) return;

  $('card-detail-img').src = carta.imagen;
  $('card-detail-img').alt = carta.nombre;
  $('card-detail-img').onerror = function() { this.src = ''; this.alt = ''; };
  $('card-detail-numero').textContent = `${carta.arcana === 'mayor' ? 'Arcano Mayor · ' : ''}${carta.numero !== carta.nombre ? carta.numero : ''}`;
  $('card-modal-title').textContent = carta.nombre;
  $('card-detail-ingles').textContent = carta.ingles;

  const badge = $('card-detail-badge');
  badge.textContent = etiquetaPalo(carta);
  badge.className = `arcana-badge badge-${carta.arcana === 'mayor' ? 'mayor' : carta.palo}`;

  const keywords = $('card-detail-keywords');
  keywords.innerHTML = carta.palabrasClave.map(k => `<span class="keyword-tag">${k}</span>`).join('');

  const tabs = document.querySelectorAll('.card-tab');
  tabs.forEach(t => t.classList.remove('active'));
  tabs[0].classList.add('active');
  $('card-tab-content').textContent = carta.derecho;

  tabs.forEach(tab => {
    tab.onclick = () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const tipo = tab.dataset.tab;
      $('card-tab-content').textContent =
        tipo === 'derecho' ? carta.derecho :
        tipo === 'invertido' ? carta.invertido :
        carta.simbolismo;
    };
  });

  cardModal.classList.remove('hidden');
  cardModal.querySelector('.card-detail-box').scrollTop = 0;
}

// ═══════════════════════════════════════
// ZONA DE UPLOAD (SECCIÓN LECTURA)
// ═══════════════════════════════════════
function setupUpload() {
  uploadZone.addEventListener('click', e => {
    if (!e.target.closest('.clear-img-btn')) imageInput.click();
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

    const base64 = dataUrl.split(',')[1];
    state.imagenBase64 = base64;
    state.imagenTipo = file.type;
    actualizarBotonLeer();
  };
  reader.readAsDataURL(file);
}

function limpiarImagen() {
  state.imagenBase64 = null;
  state.imagenTipo = null;
  previewImg.src = '';
  uploadPreview.classList.add('hidden');
  uploadPlaceholder.classList.remove('hidden');
  actualizarBotonLeer();
}

// ═══════════════════════════════════════
// SECCIÓN LECTURA — LÓGICA PRINCIPAL
// ═══════════════════════════════════════
function setupLectura() {
  questionInput.addEventListener('input', () => {
    charCount.textContent = questionInput.value.length;
    actualizarBotonLeer();
  });

  readBtn.addEventListener('click', realizarLectura);

  newReadingBtn.addEventListener('click', () => {
    readingResult.classList.add('hidden');
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
}

async function realizarLectura() {
  const apiKey = localStorage.getItem('tarotme_api_key');
  if (!apiKey) {
    openSettings();
    return;
  }
  if (!state.imagenBase64) return;

  const pregunta = questionInput.value.trim();
  state.interpretando = true;
  actualizarBotonLeer();
  readBtn.classList.add('loading');
  readBtnText.textContent = 'Interpretando…';

  readingResult.classList.remove('hidden');
  resultContent.innerHTML = `
    <div class="loading-placeholder">
      <div class="loading-dots">
        <span></span><span></span><span></span>
      </div>
      <p>La tarotista está leyendo las cartas…</p>
    </div>`;

  readingResult.scrollIntoView({ behavior: 'smooth', block: 'start' });

  try {
    const textoUsuario = pregunta
      ? `Mi pregunta o tema es: "${pregunta}"\n\nPor favor interpreta las cartas que ves en la imagen en relación con este tema.`
      : 'Por favor interpreta las cartas que ves en la imagen de forma general.';

    const body = {
      model: 'claude-opus-4-7',
      max_tokens: 1200,
      system: SYSTEM_PROMPT_TAROTISTA,
      messages: [{
        role: 'user',
        content: [
          {
            type: 'image',
            source: {
              type: 'base64',
              media_type: state.imagenTipo,
              data: state.imagenBase64
            }
          },
          {
            type: 'text',
            text: textoUsuario
          }
        ]
      }]
    };

    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify(body)
    });

    if (!resp.ok) {
      const err = await resp.json().catch(() => ({}));
      throw new Error(err.error?.message || `Error ${resp.status}: ${resp.statusText}`);
    }

    const data = await resp.json();
    const texto = data.content?.[0]?.text || 'No se pudo obtener una respuesta.';
    mostrarResultado(texto);

  } catch (err) {
    resultContent.innerHTML = `
      <p style="color:var(--danger)">
        ⚠️ <strong>No se pudo completar la lectura.</strong><br>
        <span style="font-size:0.85rem;color:var(--text2)">${err.message}</span>
      </p>
      <p style="font-size:0.82rem;color:var(--text3);margin-top:8px">
        Comprueba que tu clave de API es válida y que tienes créditos disponibles en <a href="https://console.anthropic.com" target="_blank">console.anthropic.com</a>.
      </p>`;
  } finally {
    state.interpretando = false;
    readBtn.classList.remove('loading');
    readBtnText.textContent = 'Interpretar tirada';
    actualizarBotonLeer();
  }
}

function mostrarResultado(texto) {
  const parrafos = texto
    .split(/\n{2,}/)
    .filter(p => p.trim())
    .map(p => `<p>${p.trim().replace(/\n/g, '<br>')}</p>`)
    .join('');

  resultContent.innerHTML = parrafos;
}

// ═══════════════════════════════════════
// PROMPT DEL SISTEMA PARA LA IA
// ═══════════════════════════════════════
const SYSTEM_PROMPT_TAROTISTA = `Eres una tarotista experimentada con décadas de práctica en la lectura del Tarot Rider-Waite. Tu estilo es cálido, cercano, empático y directo. Hablas en castellano con un lenguaje sencillo y accesible, sin tecnicismos esotéricos innecesarios.

Cuando el usuario te comparte una imagen de su tirada y una pregunta o tema, haz lo siguiente:

1. Identifica las cartas visibles en la imagen y menciona sus nombres en español.
2. Interpreta el significado de cada carta visible en el contexto de la pregunta o tema planteado.
3. Ofrece una lectura integrada y coherente que conecte todas las cartas entre sí y con la situación del consultante.
4. Termina con un mensaje de síntesis: qué te dicen las cartas en general y qué puede ser útil tener en cuenta.

Pautas importantes:
- Habla en primera persona y de forma cercana: "veo que...", "las cartas me muestran...", "esta carta me dice que...".
- Sé concreto y relevante para la pregunta planteada. No des respuestas vagas o genéricas.
- Si no puedes identificar claramente una carta, dilo con naturalidad y trabaja con lo que sí ves.
- Si la imagen no muestra cartas de tarot o no es legible, indícalo con amabilidad y pide una imagen más clara.
- No prometas ni predices el futuro con certeza. Usa siempre lenguaje orientativo: "puede que...", "esto sugiere...", "las cartas apuntan a...".
- Longitud: entre 250 y 450 palabras, bien organizado en párrafos. Ni demasiado corto ni excesivamente largo.`;

// ═══════════════════════════════════════
// ARRANCAR
// ═══════════════════════════════════════
init();
