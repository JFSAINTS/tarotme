// TarotMe — i18n: UI translations in Spanish and English
// Usage: import { t, setLang, getLang } from './i18n.js'

const UI = {
  es: {
    // Navigation
    nav_cartas:  'Las Cartas',
    nav_lectura: 'Tu Lectura',
    nav_faq:     'FAQ',

    // Header / disclaimer
    disc_title:   'Antes de continuar',
    disc_body1:   'Las lecturas de tarot son una herramienta de <strong>reflexión personal</strong> y exploración simbólica. No son ciencia, no predicen el futuro con certeza y no deben reemplazar ningún tipo de asesoramiento médico, legal, financiero ni psicológico.',
    disc_body2:   'Los resultados generados por inteligencia artificial son <strong>orientativos</strong>. Solo tú puedes valorar si te son útiles o no. Úsalos con criterio propio.',
    disc_accept:  'Entendido, continuar',
    banner_text:  '⚠️ Las lecturas son orientativas y para reflexión personal. No sustituyen asesoramiento profesional. Solo tú puedes validar su utilidad.',

    // Settings
    settings_title:   '⚙️ Configuración',
    settings_body:    'Para usar la lectura personalizada con IA necesitas una clave de API de OpenRouter (da acceso a Qwen). Tu clave se guarda solo en este dispositivo.',
    settings_label:   'Clave de API de OpenRouter',
    settings_link:    'Obtener clave gratuita en openrouter.ai/keys →',
    settings_save:    'Guardar',
    settings_clear:   'Eliminar clave',
    settings_saved:   '✓ Clave guardada correctamente.',
    settings_nochange:'La clave no cambió.',
    settings_invalid: 'Introduce una clave válida.',
    settings_prefix:  'La clave debe empezar por sk-or-v1-…',
    settings_deleted: 'Clave eliminada.',

    // Cards section
    cards_title:    'Las 78 Cartas del Tarot Rider-Waite',
    cards_subtitle: 'Pulsa cualquier carta para ver su significado completo',
    filter_all:     'Todas',
    filter_mayor:   'Arcanos Mayores',
    filter_bastos:  '🔥 Bastos',
    filter_copas:   '💧 Copas',
    filter_espadas: '💨 Espadas',
    filter_oros:    '🌿 Oros',
    no_results:     'No se encontraron cartas con ese criterio.',
    search_ph:      'Buscar carta…',

    // Card detail
    badge_mayor:   'Arcano Mayor',
    badge_bastos:  '🔥 Bastos',
    badge_copas:   '💧 Copas',
    badge_espadas: '💨 Espadas',
    badge_oros:    '🌿 Oros',
    tab_upright:   'Carta derecha',
    tab_reversed:  'Carta invertida',
    tab_symbolism: 'Simbolismo',

    // Reading section
    reading_title:    'Tu Lectura Personalizada',
    reading_subtitle: 'Sube una foto de tu tirada y escribe tu pregunta. La IA interpretará las cartas como un tarotista experimentado.',
    api_notice_title: 'Clave de API necesaria',
    api_notice_body:  'Para usar la lectura con IA necesitas configurar tu clave de API de OpenRouter (gratuita). Accede a openrouter.ai/keys para obtenerla.',
    api_notice_btn:   'Configurar ahora',
    step1_label:      'Fotografía tu tirada',
    upload_title:     'Arrastra aquí la foto de tu tirada',
    upload_or:        'o <strong>haz clic para seleccionar</strong>',
    upload_hint:      'Acepta JPG, PNG, WEBP',
    step2_label:      'Tu pregunta o tema',
    question_ph:      'Escribe aquí tu pregunta o el tema sobre el que quieres reflexionar…\nEjemplo: ¿Cómo está mi situación sentimental en este momento?\nEjemplo: Quiero entender qué me dice el tarot sobre mi trabajo.',
    read_btn:         'Interpretar tirada',
    reading_btn_wait: 'Interpretando…',
    result_title:     '✦ Tu lectura',
    result_disclaimer:'⚠️ Esta interpretación es orientativa y para reflexión personal. No la tomes como verdad absoluta.',
    new_reading:      'Nueva lectura',
    api_key_title:    'Sin clave de API configurada',
    err_no_resp:      'No se pudo obtener una respuesta.',
    err_title:        '⚠️ No se pudo completar la lectura.',
    err_check:        'Comprueba que tu clave de API es válida y que tienes créditos disponibles en',
    reading_thinking: 'La tarotista está leyendo las cartas…',
    api_dot_on:       'Clave de API configurada',
    api_dot_off:      'Sin clave de API configurada',

    // Reading AI prompt pieces
    prompt_with_q:    'Mi pregunta o tema es: "{q}"\n\nPor favor interpreta las cartas que ves en la imagen en relación con este tema.',
    prompt_general:   'Por favor interpreta las cartas que ves en la imagen de forma general.',

    // PWA install
    install_btn:      'Instalar',
    ios_install_tip:  'En Safari, pulsa el botón de compartir 〔⬆〕 en la barra inferior y selecciona «Añadir a la pantalla de inicio».',

    // Footer
    footer_images: 'Imágenes:',
    footer_source: 'Wikimedia Commons',
    footer_credit: 'Tarot Rider-Waite, Pamela Colman Smith (1910) · Dominio público',
    footer_disclaimer: 'TarotMe — solo para reflexión personal. Úsalo con criterio propio.',

    // FAQ
    faq_title:    'Preguntas Frecuentes',
    faq_subtitle: 'Todo lo que necesitas saber sobre TarotMe y la clave de API',
    faq_groups: [
      {
        title: '⚙️ Uso general',
        items: [
          {
            q: '¿Necesito pagar para usar TarotMe?',
            open: true,
            a: `<p>La <strong>biblioteca de las 78 cartas</strong> es completamente gratuita y no requiere ninguna cuenta ni clave. Puedes explorar todas las cartas, sus significados y simbolismo sin límite.</p>
<p>La <strong>lectura personalizada con IA</strong> requiere tu propia clave de API de OpenRouter. Esta clave se usa directamente desde tu navegador y se guarda solo en tu dispositivo.</p>`
          },
          {
            q: '¿Qué modelo de IA usa TarotMe?',
            a: `<p>TarotMe utiliza <strong>Qwen 2.5 VL 72B</strong> a través de <a href="https://openrouter.ai" target="_blank" rel="noopener">OpenRouter</a>, un potente modelo de visión y lenguaje. Está configurado para actuar como tarotista experimentada, interpretando las cartas en el idioma seleccionado con un estilo cálido y cercano.</p>`
          },
          {
            q: '¿Es segura mi clave de API?',
            a: `<p>Tu clave de API se guarda <strong>únicamente en tu dispositivo</strong> (localStorage del navegador) y nunca se envía a ningún servidor de TarotMe. Las solicitudes van directamente desde tu navegador a la API de OpenRouter.</p>
<p>⚠️ Nunca compartas tu clave con nadie ni la introduzcas en páginas desconocidas.</p>`
          }
        ]
      },
      {
        title: '🔑 Clave de API y límites de uso',
        items: [
          {
            q: '¿Cuántas lecturas puedo hacer gratis?',
            open: true,
            a: `<p>OpenRouter ofrece <strong>crédito gratuito</strong> para cuentas nuevas y algunos modelos tienen cuota gratuita diaria. El modelo Qwen 2.5 VL es muy económico por uso.</p>
<div class="faq-table-wrap"><table class="faq-table">
<thead><tr><th>Concepto</th><th>Detalle</th></tr></thead>
<tbody>
<tr><td>Crédito inicial (cuenta nueva)</td><td>Disponible al registrarse</td></tr>
<tr><td>Coste por lectura (aprox.)</td><td>$0.01 – $0.03 USD</td></tr>
<tr><td>Lecturas estimadas con $5</td><td><strong>150 – 500 lecturas</strong></td></tr>
</tbody></table></div>
<p class="faq-note">💡 El coste es muy bajo gracias a la eficiencia del modelo Qwen.</p>`
          },
          {
            q: '¿Qué pasa cuando se acaba el crédito?',
            a: `<p>Recibirás un error de tipo <code>insufficient_credits</code>. Para seguir usando la lectura con IA añade crédito en <a href="https://openrouter.ai/credits" target="_blank" rel="noopener">openrouter.ai/credits</a>.</p>
<p>La <strong>tarifa de Qwen 2.5 VL 72B</strong> vía OpenRouter es de pago por uso:</p>
<div class="faq-table-wrap"><table class="faq-table">
<thead><tr><th>Tipo de token</th><th>Precio por millón</th><th>Por lectura típica</th></tr></thead>
<tbody>
<tr><td>Entrada</td><td>~$0.40 / M tokens</td><td>~$0.005</td></tr>
<tr><td>Salida</td><td>~$0.40 / M tokens</td><td>~$0.015</td></tr>
<tr><td><strong>Total por lectura</strong></td><td colspan="2"><strong>~$0.02 USD</strong></td></tr>
</tbody></table></div>
<p class="faq-note">Con $5 puedes hacer más de 200 lecturas.</p>`
          },
          {
            q: '¿Cómo obtengo una clave de API de OpenRouter?',
            a: `<ol class="faq-steps">
<li>Ve a <a href="https://openrouter.ai" target="_blank" rel="noopener">openrouter.ai</a> y crea una cuenta gratuita.</li>
<li>Accede a <a href="https://openrouter.ai/keys" target="_blank" rel="noopener">openrouter.ai/keys</a> y pulsa <strong>Create Key</strong>.</li>
<li>Copia la clave (empieza por <code>sk-or-v1-</code>). Solo se muestra una vez.</li>
<li>En TarotMe, pulsa el icono ⚙️ en la cabecera y pega tu clave.</li>
</ol>
<p class="faq-note">🎁 Las cuentas nuevas reciben crédito inicial gratuito sin tarjeta de crédito.</p>`
          }
        ]
      },
      {
        title: '🔧 Errores comunes',
        items: [
          {
            q: 'Error: <code>invalid_api_key</code>',
            a: '<p>La clave introducida no es válida. Comprueba que empieza por <code>sk-or-v1-</code> y que la copiaste completa sin espacios extra. Genera una nueva en <a href="https://openrouter.ai/keys" target="_blank" rel="noopener">openrouter.ai/keys</a>.</p>'
          },
          {
            q: 'Error: <code>insufficient_credits</code>',
            a: '<p>Has agotado tu crédito. Añade saldo en <a href="https://openrouter.ai/credits" target="_blank" rel="noopener">openrouter.ai/credits</a>.</p>'
          },
          {
            q: 'Error: <code>rate_limit_exceeded</code>',
            a: '<p>Has superado el límite de peticiones por minuto. Es un límite temporal del servidor. Espera unos segundos y vuelve a intentarlo.</p>'
          }
        ]
      },
      {
        title: '🃏 Las imágenes del tarot',
        items: [
          {
            q: '¿De dónde vienen las imágenes de las cartas?',
            a: `<p>Todas las ilustraciones de las 78 cartas provienen de <a href="https://en.wikipedia.org/wiki/Rider%E2%80%93Waite_Tarot" target="_blank" rel="noopener">Wikimedia Commons</a>. Son las ilustraciones originales del Tarot Rider-Waite, obra de <strong>Pamela Colman Smith</strong> (1910), de dominio público.</p>`
          }
        ]
      },
      {
        title: '🔮 Cómo hacer una tirada',
        items: [
          {
            q: '¿Cómo preparo el mazo antes de una tirada?',
            open: true,
            a: `<div class="spread-prep">
<p><strong>1. Limpia y baraja el mazo.</strong> Con las cartas boca abajo, baraja mientras respiras profundo y te concentras en tu pregunta. No hay un número fijo de veces: hazlo hasta que sientas que el mazo está listo.</p>
<p><strong>2. Formula una pregunta clara.</strong> Las mejores preguntas empiezan con "¿Qué me dice el tarot sobre…?", "¿Cómo puedo…?" o "¿Qué debo saber sobre…?". Evita preguntas de sí/no para obtener lecturas más ricas.</p>
<p><strong>3. Corta el mazo en tres montones.</strong> Con la mano no dominante, divide el mazo en tres pilas y vuelve a juntarlas en el orden que sientas correcto.</p>
<p><strong>4. Coloca las cartas boca abajo.</strong> Sácalas de arriba y colócalas en las posiciones de la tirada elegida antes de darles la vuelta.</p>
<p><strong>5. Fotografía la tirada</strong> y súbela a TarotMe para obtener tu lectura personalizada con IA. 📷</p>
</div>`
          },
          {
            q: 'Tirada de 1 carta — La carta del día',
            a: `<p>La tirada más sencilla: <strong>una sola carta</strong> que ofrece un mensaje, consejo o energía dominante para el día o para una pregunta concreta.</p>
<svg viewBox="0 0 160 125" class="spread-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect x="55" y="8" width="50" height="76" rx="5" fill="#161628" stroke="#c9a84c" stroke-width="2.5"/>
  <text x="80" y="52" text-anchor="middle" fill="#e8c86a" font-size="24" font-weight="bold" font-family="Georgia,serif">1</text>
  <text x="80" y="103" text-anchor="middle" fill="#9890b0" font-size="10.5" font-family="sans-serif">Mensaje del día</text>
</svg>
<div class="faq-table-wrap"><table class="faq-table">
<thead><tr><th>Posición</th><th>Significado</th></tr></thead>
<tbody>
<tr><td><strong>1 — La Carta</strong></td><td>Energía dominante, consejo o mensaje directo para la situación o el día</td></tr>
</tbody></table></div>
<p class="faq-note">💡 Ideal como ritual matutino. Anota la carta y tu primera impresión antes de consultar el significado.</p>`
          },
          {
            q: 'Tirada de 3 cartas — Pasado · Presente · Futuro',
            a: `<p>La tirada más popular. <strong>Tres cartas</strong> que aportan contexto, claridad y orientación sobre cualquier situación.</p>
<svg viewBox="0 0 310 125" class="spread-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="8" width="76" height="76" rx="5" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="48" y="52" text-anchor="middle" fill="#a78bfa" font-size="24" font-weight="bold" font-family="Georgia,serif">1</text>
  <text x="48" y="103" text-anchor="middle" fill="#9890b0" font-size="10" font-family="sans-serif">Pasado</text>
  <rect x="117" y="8" width="76" height="76" rx="5" fill="#161628" stroke="#c9a84c" stroke-width="2.5"/>
  <text x="155" y="52" text-anchor="middle" fill="#e8c86a" font-size="24" font-weight="bold" font-family="Georgia,serif">2</text>
  <text x="155" y="103" text-anchor="middle" fill="#9890b0" font-size="10" font-family="sans-serif">Presente</text>
  <rect x="224" y="8" width="76" height="76" rx="5" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="262" y="52" text-anchor="middle" fill="#a78bfa" font-size="24" font-weight="bold" font-family="Georgia,serif">3</text>
  <text x="262" y="103" text-anchor="middle" fill="#9890b0" font-size="10" font-family="sans-serif">Futuro</text>
</svg>
<div class="faq-table-wrap"><table class="faq-table">
<thead><tr><th>Posición</th><th>Significado</th></tr></thead>
<tbody>
<tr><td><strong>1 — Pasado</strong></td><td>Lo que ha influido en la situación; energías que se están retirando</td></tr>
<tr><td><strong>2 — Presente</strong></td><td>La situación actual; energía dominante en este momento</td></tr>
<tr><td><strong>3 — Futuro</strong></td><td>Hacia dónde se dirige la situación si continúa la tendencia actual</td></tr>
</tbody></table></div>
<p class="faq-note">💡 Variante útil: usa las posiciones como <em>Situación · Acción · Resultado</em> para preguntas sobre decisiones.</p>`
          },
          {
            q: 'Cruz Celta — 10 cartas',
            a: `<p>La tirada más completa y conocida. <strong>10 cartas</strong> que exploran la situación desde todos los ángulos: pasado, presente, futuro, influencias internas y externas.</p>
<svg viewBox="0 0 450 320" class="spread-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect x="143" y="124" width="48" height="72" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="2.5"/>
  <text x="167" y="166" text-anchor="middle" fill="#e8c86a" font-size="16" font-weight="bold" font-family="Georgia,serif">1</text>
  <rect x="119" y="138" width="72" height="48" rx="4" fill="#1e1e35" stroke="#a78bfa" stroke-width="2" opacity="0.92"/>
  <text x="155" y="168" text-anchor="middle" fill="#a78bfa" font-size="16" font-weight="bold" font-family="Georgia,serif">2</text>
  <rect x="143" y="37" width="48" height="72" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="2"/>
  <text x="167" y="79" text-anchor="middle" fill="#e8c86a" font-size="16" font-weight="bold" font-family="Georgia,serif">3</text>
  <rect x="143" y="211" width="48" height="72" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="2"/>
  <text x="167" y="253" text-anchor="middle" fill="#e8c86a" font-size="16" font-weight="bold" font-family="Georgia,serif">4</text>
  <rect x="75" y="124" width="48" height="72" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="2"/>
  <text x="99" y="166" text-anchor="middle" fill="#e8c86a" font-size="16" font-weight="bold" font-family="Georgia,serif">5</text>
  <rect x="211" y="124" width="48" height="72" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="2"/>
  <text x="235" y="166" text-anchor="middle" fill="#e8c86a" font-size="16" font-weight="bold" font-family="Georgia,serif">6</text>
  <line x1="296" y1="10" x2="296" y2="315" stroke="#2a2a4a" stroke-width="1" stroke-dasharray="5,4"/>
  <rect x="330" y="238" width="48" height="72" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="354" y="280" text-anchor="middle" fill="#a78bfa" font-size="16" font-weight="bold" font-family="Georgia,serif">7</text>
  <rect x="330" y="157" width="48" height="72" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="354" y="199" text-anchor="middle" fill="#a78bfa" font-size="16" font-weight="bold" font-family="Georgia,serif">8</text>
  <rect x="330" y="76" width="48" height="72" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="354" y="118" text-anchor="middle" fill="#a78bfa" font-size="16" font-weight="bold" font-family="Georgia,serif">9</text>
  <rect x="330" y="4" width="48" height="72" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="354" y="46" text-anchor="middle" fill="#a78bfa" font-size="16" font-weight="bold" font-family="Georgia,serif">10</text>
  <text x="167" y="308" text-anchor="middle" fill="#5a5278" font-size="9" font-family="sans-serif">Cruz</text>
  <text x="354" y="316" text-anchor="middle" fill="#5a5278" font-size="9" font-family="sans-serif">Báculo</text>
</svg>
<div class="faq-table-wrap"><table class="faq-table">
<thead><tr><th>#</th><th>Nombre</th><th>Significado</th></tr></thead>
<tbody>
<tr><td><strong>1</strong></td><td>El Presente</td><td>Situación actual del consultante</td></tr>
<tr><td><strong>2</strong></td><td>El Desafío</td><td>Lo que obstaculiza o cruza la situación (se coloca en perpendicular)</td></tr>
<tr><td><strong>3</strong></td><td>La Corona</td><td>Objetivo consciente; lo que aspiras a lograr</td></tr>
<tr><td><strong>4</strong></td><td>La Base</td><td>Fundamento inconsciente; raíces del asunto</td></tr>
<tr><td><strong>5</strong></td><td>Pasado Reciente</td><td>Influencias que se están retirando</td></tr>
<tr><td><strong>6</strong></td><td>Futuro Próximo</td><td>Lo que se aproxima en las próximas semanas</td></tr>
<tr><td><strong>7</strong></td><td>Tú mismo</td><td>Cómo te percibes a ti mismo en la situación</td></tr>
<tr><td><strong>8</strong></td><td>Entorno</td><td>Influencias externas; cómo te ven los demás</td></tr>
<tr><td><strong>9</strong></td><td>Esperanzas y Miedos</td><td>Lo que deseas o temes secretamente</td></tr>
<tr><td><strong>10</strong></td><td>El Resultado</td><td>Desenlace probable si se sigue la tendencia actual</td></tr>
</tbody></table></div>`
          },
          {
            q: 'Tirada de la Herradura — 7 cartas',
            a: `<p>Siete cartas en forma de herradura (U invertida). Equilibrada y versátil, ofrece una visión completa con atención especial a obstáculos y al camino a seguir.</p>
<svg viewBox="0 0 350 245" class="spread-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <path d="M 31 78 Q 175 238 319 78" stroke="#2a2a4a" stroke-width="1" fill="none" stroke-dasharray="4,4"/>
  <rect x="8" y="8" width="46" height="70" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="31" y="49" text-anchor="middle" fill="#a78bfa" font-size="15" font-weight="bold" font-family="Georgia,serif">1</text>
  <rect x="68" y="58" width="46" height="70" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="91" y="99" text-anchor="middle" fill="#a78bfa" font-size="15" font-weight="bold" font-family="Georgia,serif">2</text>
  <rect x="128" y="98" width="46" height="70" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="151" y="139" text-anchor="middle" fill="#a78bfa" font-size="15" font-weight="bold" font-family="Georgia,serif">3</text>
  <rect x="152" y="158" width="46" height="70" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="2.5"/>
  <text x="175" y="199" text-anchor="middle" fill="#e8c86a" font-size="15" font-weight="bold" font-family="Georgia,serif">4</text>
  <rect x="176" y="98" width="46" height="70" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="199" y="139" text-anchor="middle" fill="#a78bfa" font-size="15" font-weight="bold" font-family="Georgia,serif">5</text>
  <rect x="236" y="58" width="46" height="70" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="259" y="99" text-anchor="middle" fill="#a78bfa" font-size="15" font-weight="bold" font-family="Georgia,serif">6</text>
  <rect x="296" y="8" width="46" height="70" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="2.5"/>
  <text x="319" y="49" text-anchor="middle" fill="#e8c86a" font-size="15" font-weight="bold" font-family="Georgia,serif">7</text>
</svg>
<div class="faq-table-wrap"><table class="faq-table">
<thead><tr><th>#</th><th>Nombre</th><th>Significado</th></tr></thead>
<tbody>
<tr><td><strong>1</strong></td><td>El Pasado</td><td>Influencias pasadas que afectan la situación</td></tr>
<tr><td><strong>2</strong></td><td>El Presente</td><td>La situación tal como se encuentra ahora</td></tr>
<tr><td><strong>3</strong></td><td>Influencias Ocultas</td><td>Factores inconscientes o no visibles que influyen</td></tr>
<tr><td><strong>4</strong></td><td>Obstáculos</td><td>Lo que se interpone en el camino; el desafío principal</td></tr>
<tr><td><strong>5</strong></td><td>Actitud del Entorno</td><td>Cómo actúan o piensan los demás implicados</td></tr>
<tr><td><strong>6</strong></td><td>Lo que debes hacer</td><td>Acción recomendada; el mejor camino a seguir</td></tr>
<tr><td><strong>7</strong></td><td>El Resultado</td><td>Desenlace probable si se sigue el consejo de las cartas</td></tr>
</tbody></table></div>`
          },
          {
            q: 'Tirada del Año — 12 cartas',
            a: `<p>Una carta por cada mes del año, más una carta central opcional como <strong>tema del año</strong>. Perfecta para hacer en Año Nuevo o en tu cumpleaños.</p>
<svg viewBox="0 0 440 200" class="spread-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="15" width="56" height="75" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="38" y="58" text-anchor="middle" fill="#a78bfa" font-size="13" font-weight="bold" font-family="Georgia,serif">1</text>
  <text x="38" y="103" text-anchor="middle" fill="#5a5278" font-size="8.5" font-family="sans-serif">ENE</text>
  <rect x="76" y="15" width="56" height="75" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="104" y="58" text-anchor="middle" fill="#a78bfa" font-size="13" font-weight="bold" font-family="Georgia,serif">2</text>
  <text x="104" y="103" text-anchor="middle" fill="#5a5278" font-size="8.5" font-family="sans-serif">FEB</text>
  <rect x="142" y="15" width="56" height="75" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="170" y="58" text-anchor="middle" fill="#a78bfa" font-size="13" font-weight="bold" font-family="Georgia,serif">3</text>
  <text x="170" y="103" text-anchor="middle" fill="#5a5278" font-size="8.5" font-family="sans-serif">MAR</text>
  <rect x="208" y="15" width="56" height="75" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="236" y="58" text-anchor="middle" fill="#a78bfa" font-size="13" font-weight="bold" font-family="Georgia,serif">4</text>
  <text x="236" y="103" text-anchor="middle" fill="#5a5278" font-size="8.5" font-family="sans-serif">ABR</text>
  <rect x="274" y="15" width="56" height="75" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="302" y="58" text-anchor="middle" fill="#a78bfa" font-size="13" font-weight="bold" font-family="Georgia,serif">5</text>
  <text x="302" y="103" text-anchor="middle" fill="#5a5278" font-size="8.5" font-family="sans-serif">MAY</text>
  <rect x="340" y="15" width="56" height="75" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="368" y="58" text-anchor="middle" fill="#a78bfa" font-size="13" font-weight="bold" font-family="Georgia,serif">6</text>
  <text x="368" y="103" text-anchor="middle" fill="#5a5278" font-size="8.5" font-family="sans-serif">JUN</text>
  <rect x="10" y="110" width="56" height="75" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="1.5"/>
  <text x="38" y="153" text-anchor="middle" fill="#e8c86a" font-size="13" font-weight="bold" font-family="Georgia,serif">7</text>
  <text x="38" y="198" text-anchor="middle" fill="#5a5278" font-size="8.5" font-family="sans-serif">JUL</text>
  <rect x="76" y="110" width="56" height="75" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="1.5"/>
  <text x="104" y="153" text-anchor="middle" fill="#e8c86a" font-size="13" font-weight="bold" font-family="Georgia,serif">8</text>
  <text x="104" y="198" text-anchor="middle" fill="#5a5278" font-size="8.5" font-family="sans-serif">AGO</text>
  <rect x="142" y="110" width="56" height="75" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="1.5"/>
  <text x="170" y="153" text-anchor="middle" fill="#e8c86a" font-size="13" font-weight="bold" font-family="Georgia,serif">9</text>
  <text x="170" y="198" text-anchor="middle" fill="#5a5278" font-size="8.5" font-family="sans-serif">SEP</text>
  <rect x="208" y="110" width="56" height="75" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="1.5"/>
  <text x="236" y="153" text-anchor="middle" fill="#e8c86a" font-size="13" font-weight="bold" font-family="Georgia,serif">10</text>
  <text x="236" y="198" text-anchor="middle" fill="#5a5278" font-size="8.5" font-family="sans-serif">OCT</text>
  <rect x="274" y="110" width="56" height="75" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="1.5"/>
  <text x="302" y="153" text-anchor="middle" fill="#e8c86a" font-size="13" font-weight="bold" font-family="Georgia,serif">11</text>
  <text x="302" y="198" text-anchor="middle" fill="#5a5278" font-size="8.5" font-family="sans-serif">NOV</text>
  <rect x="340" y="110" width="56" height="75" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="1.5"/>
  <text x="368" y="153" text-anchor="middle" fill="#e8c86a" font-size="13" font-weight="bold" font-family="Georgia,serif">12</text>
  <text x="368" y="198" text-anchor="middle" fill="#5a5278" font-size="8.5" font-family="sans-serif">DIC</text>
</svg>
<p>Cada carta representa la energía y los temas principales de ese mes. Interprétala individualmente y también en relación con las cartas adyacentes.</p>
<p class="faq-note">💡 Añade una carta 13 en el centro como <em>tema del año</em> para tener una visión global del ciclo completo.</p>`
          }
        ]
      }
    ],

    // System prompt for AI (tarot reader in Spanish)
    system_prompt: `Eres una tarotista experimentada con décadas de práctica en la lectura del Tarot Rider-Waite. Tu estilo es cálido, cercano, empático y directo. Hablas en castellano con un lenguaje sencillo y accesible, sin tecnicismos esotéricos innecesarios.

Cuando el usuario te comparte una imagen de su tirada y una pregunta o tema, haz lo siguiente:

1. Identifica las cartas visibles en la imagen y menciona sus nombres en español.
2. Interpreta el significado de cada carta visible en el contexto de la pregunta o tema planteado.
3. Ofrece una lectura integrada y coherente que conecte todas las cartas entre sí y con la situación del consultante.
4. Termina con un mensaje de síntesis: qué te dicen las cartas en general y qué puede ser útil tener en cuenta.

Pautas importantes:
- Habla en primera persona y de forma cercana: "veo que…", "las cartas me muestran…", "esta carta me dice que…".
- Sé concreto y relevante para la pregunta planteada. No des respuestas vagas o genéricas.
- Si no puedes identificar claramente una carta, dilo con naturalidad y trabaja con lo que sí ves.
- Si la imagen no muestra cartas de tarot o no es legible, indícalo con amabilidad y pide una imagen más clara.
- No prometas ni predices el futuro con certeza. Usa siempre lenguaje orientativo: "puede que…", "esto sugiere…", "las cartas apuntan a…".
- Longitud: entre 250 y 450 palabras, bien organizado en párrafos.`
  },

  // ────────────────────────────────────────────────────────────────────────
  en: {
    // Navigation
    nav_cartas:  'The Cards',
    nav_lectura: 'Your Reading',
    nav_faq:     'FAQ',

    // Header / disclaimer
    disc_title:   'Before you continue',
    disc_body1:   'Tarot readings are a tool for <strong>personal reflection</strong> and symbolic exploration. They are not science, do not predict the future with certainty, and should not replace any medical, legal, financial, or psychological advice.',
    disc_body2:   'Results generated by artificial intelligence are <strong>for guidance only</strong>. Only you can assess whether they are useful to you. Use them with your own judgment.',
    disc_accept:  'Understood, continue',
    banner_text:  '⚠️ Readings are for guidance and personal reflection only. They do not replace professional advice. Only you can validate their usefulness.',

    // Settings
    settings_title:   '⚙️ Settings',
    settings_body:    'To use the personalized AI reading you need an OpenRouter API key (gives access to Qwen). Your key is stored only on this device.',
    settings_label:   'OpenRouter API Key',
    settings_link:    'Get your free key at openrouter.ai/keys →',
    settings_save:    'Save',
    settings_clear:   'Remove key',
    settings_saved:   '✓ Key saved successfully.',
    settings_nochange:'The key did not change.',
    settings_invalid: 'Please enter a valid key.',
    settings_prefix:  'The key must start with sk-or-v1-…',
    settings_deleted: 'Key removed.',

    // Cards section
    cards_title:    'The 78 Rider-Waite Tarot Cards',
    cards_subtitle: 'Click any card to see its full meaning',
    filter_all:     'All',
    filter_mayor:   'Major Arcana',
    filter_bastos:  '🔥 Wands',
    filter_copas:   '💧 Cups',
    filter_espadas: '💨 Swords',
    filter_oros:    '🌿 Pentacles',
    no_results:     'No cards found matching that criteria.',
    search_ph:      'Search card…',

    // Card detail
    badge_mayor:   'Major Arcana',
    badge_bastos:  '🔥 Wands',
    badge_copas:   '💧 Cups',
    badge_espadas: '💨 Swords',
    badge_oros:    '🌿 Pentacles',
    tab_upright:   'Upright',
    tab_reversed:  'Reversed',
    tab_symbolism: 'Symbolism',

    // Reading section
    reading_title:    'Your Personalized Reading',
    reading_subtitle: 'Upload a photo of your spread and write your question. The AI will interpret the cards like an experienced tarot reader.',
    api_notice_title: 'API Key required',
    api_notice_body:  'To use the AI reading you need to configure your OpenRouter API key (free). Get it at openrouter.ai/keys.',
    api_notice_btn:   'Configure now',
    step1_label:      'Photograph your spread',
    upload_title:     'Drag your spread photo here',
    upload_or:        'or <strong>click to select</strong>',
    upload_hint:      'Accepts JPG, PNG, WEBP',
    step2_label:      'Your question or topic',
    question_ph:      'Write your question or the topic you want to reflect on…\nExample: What does the tarot say about my love life right now?\nExample: I want to understand what the cards say about my career.',
    read_btn:         'Interpret spread',
    reading_btn_wait: 'Reading…',
    result_title:     '✦ Your reading',
    result_disclaimer:'⚠️ This interpretation is for guidance and personal reflection. Do not take it as absolute truth.',
    new_reading:      'New reading',
    api_key_title:    'No API key configured',
    err_no_resp:      'Could not get a response.',
    err_title:        '⚠️ Could not complete the reading.',
    err_check:        'Check that your API key is valid and that you have available credits at',
    reading_thinking: 'The tarot reader is interpreting the cards…',
    api_dot_on:       'API key configured',
    api_dot_off:      'No API key configured',

    // Reading AI prompt pieces
    prompt_with_q:    'My question or topic is: "{q}"\n\nPlease interpret the cards you see in the image in relation to this topic.',
    prompt_general:   'Please interpret the cards you see in the image in a general way.',

    // PWA install
    install_btn:      'Install',
    ios_install_tip:  'In Safari, tap the share button 〔⬆〕 in the bottom bar and select "Add to Home Screen".',

    // Footer
    footer_images: 'Images:',
    footer_source: 'Wikimedia Commons',
    footer_credit: 'Rider-Waite Tarot, Pamela Colman Smith (1910) · Public domain',
    footer_disclaimer: 'TarotMe — for personal reflection only. Use with your own judgment.',

    // FAQ
    faq_title:    'Frequently Asked Questions',
    faq_subtitle: 'Everything you need to know about TarotMe and the API key',
    faq_groups: [
      {
        title: '⚙️ General use',
        items: [
          {
            q: 'Do I need to pay to use TarotMe?',
            open: true,
            a: `<p>The <strong>78-card library</strong> is completely free and requires no account or key. You can explore all cards, their meanings and symbolism without any limit.</p>
<p>The <strong>personalized AI reading</strong> requires your own OpenRouter API key. This key is used directly from your browser and stored only on your device.</p>`
          },
          {
            q: 'Which AI model does TarotMe use?',
            a: `<p>TarotMe uses <strong>Qwen 2.5 VL 72B</strong> via <a href="https://openrouter.ai" target="_blank" rel="noopener">OpenRouter</a>, a powerful vision-language model. It is configured to act as an experienced tarot reader, interpreting cards in your selected language with a warm and personal style.</p>`
          },
          {
            q: 'Is my API key safe?',
            a: `<p>Your API key is stored <strong>only on your device</strong> (browser localStorage) and is never sent to any TarotMe server. Requests go directly from your browser to the OpenRouter API.</p>
<p>⚠️ Never share your key with anyone or enter it on unknown sites.</p>`
          }
        ]
      },
      {
        title: '🔑 API key & usage limits',
        items: [
          {
            q: 'How many free readings can I do?',
            open: true,
            a: `<p>OpenRouter offers <strong>free initial credit</strong> for new accounts and some models have a daily free quota. The Qwen 2.5 VL model is very affordable.</p>
<div class="faq-table-wrap"><table class="faq-table">
<thead><tr><th>Item</th><th>Details</th></tr></thead>
<tbody>
<tr><td>Initial credit (new account)</td><td>Available on sign-up</td></tr>
<tr><td>Cost per reading (approx.)</td><td>$0.01 – $0.03 USD</td></tr>
<tr><td>Estimated readings with $5</td><td><strong>150 – 500 readings</strong></td></tr>
</tbody></table></div>
<p class="faq-note">💡 Cost is very low thanks to Qwen's efficiency.</p>`
          },
          {
            q: 'What happens when the credit runs out?',
            a: `<p>You will receive an <code>insufficient_credits</code> error. To continue using AI readings add credit at <a href="https://openrouter.ai/credits" target="_blank" rel="noopener">openrouter.ai/credits</a>.</p>
<p><strong>Qwen 2.5 VL 72B</strong> pricing via OpenRouter:</p>
<div class="faq-table-wrap"><table class="faq-table">
<thead><tr><th>Token type</th><th>Price per million</th><th>Per typical reading</th></tr></thead>
<tbody>
<tr><td>Input</td><td>~$0.40 / M tokens</td><td>~$0.005</td></tr>
<tr><td>Output</td><td>~$0.40 / M tokens</td><td>~$0.015</td></tr>
<tr><td><strong>Total per reading</strong></td><td colspan="2"><strong>~$0.02 USD</strong></td></tr>
</tbody></table></div>
<p class="faq-note">With $5 you can do more than 200 readings.</p>`
          },
          {
            q: 'How do I get an OpenRouter API key?',
            a: `<ol class="faq-steps">
<li>Go to <a href="https://openrouter.ai" target="_blank" rel="noopener">openrouter.ai</a> and create a free account.</li>
<li>Go to <a href="https://openrouter.ai/keys" target="_blank" rel="noopener">openrouter.ai/keys</a> and click <strong>Create Key</strong>.</li>
<li>Copy the key (starts with <code>sk-or-v1-</code>). It is only shown once.</li>
<li>In TarotMe, click the ⚙️ icon in the header and paste your key.</li>
</ol>
<p class="faq-note">🎁 New accounts receive free initial credit with no credit card required.</p>`
          }
        ]
      },
      {
        title: '🔧 Common errors',
        items: [
          {
            q: 'Error: <code>invalid_api_key</code>',
            a: '<p>The entered key is not valid. Make sure it starts with <code>sk-or-v1-</code> and was copied completely without extra spaces. Generate a new one at <a href="https://openrouter.ai/keys" target="_blank" rel="noopener">openrouter.ai/keys</a>.</p>'
          },
          {
            q: 'Error: <code>insufficient_credits</code>',
            a: '<p>Your credit is exhausted. Add funds at <a href="https://openrouter.ai/credits" target="_blank" rel="noopener">openrouter.ai/credits</a>.</p>'
          },
          {
            q: 'Error: <code>rate_limit_exceeded</code>',
            a: '<p>You have exceeded the request rate limit. This is a temporary server-side limit, not an issue with your key. Wait a few seconds and try again.</p>'
          }
        ]
      },
      {
        title: '🃏 Card images',
        items: [
          {
            q: 'Where do the card images come from?',
            a: `<p>All 78 card illustrations come from <a href="https://en.wikipedia.org/wiki/Rider%E2%80%93Waite_Tarot" target="_blank" rel="noopener">Wikimedia Commons</a>. They are the original Rider-Waite Tarot illustrations by <strong>Pamela Colman Smith</strong> (1910), in the public domain.</p>`
          }
        ]
      },
      {
        title: '🔮 How to do a tarot spread',
        items: [
          {
            q: 'How do I prepare the deck before a reading?',
            open: true,
            a: `<div class="spread-prep">
<p><strong>1. Cleanse and shuffle the deck.</strong> With cards face down, shuffle while breathing deeply and focusing on your question. There is no fixed number of times — shuffle until the deck feels ready.</p>
<p><strong>2. Formulate a clear question.</strong> The best questions start with "What does the tarot say about…?", "How can I…?" or "What should I know about…?". Avoid yes/no questions for richer readings.</p>
<p><strong>3. Cut the deck into three piles.</strong> With your non-dominant hand, split the deck into three stacks, then reassemble them in whatever order feels right.</p>
<p><strong>4. Place cards face down.</strong> Draw from the top and place them in the positions of your chosen spread before turning them over.</p>
<p><strong>5. Photograph the spread</strong> and upload it to TarotMe for your personalized AI reading. 📷</p>
</div>`
          },
          {
            q: 'One-Card Draw — Card of the Day',
            a: `<p>The simplest spread: <strong>a single card</strong> offering a message, advice, or dominant energy for the day or for a specific question.</p>
<svg viewBox="0 0 160 125" class="spread-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect x="55" y="8" width="50" height="76" rx="5" fill="#161628" stroke="#c9a84c" stroke-width="2.5"/>
  <text x="80" y="52" text-anchor="middle" fill="#e8c86a" font-size="24" font-weight="bold" font-family="Georgia,serif">1</text>
  <text x="80" y="103" text-anchor="middle" fill="#9890b0" font-size="10.5" font-family="sans-serif">Daily Message</text>
</svg>
<div class="faq-table-wrap"><table class="faq-table">
<thead><tr><th>Position</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td><strong>1 — The Card</strong></td><td>Dominant energy, advice, or direct message for the situation or the day</td></tr>
</tbody></table></div>
<p class="faq-note">💡 Great as a morning ritual. Note the card and your first impression before looking up its meaning.</p>`
          },
          {
            q: 'Three-Card Spread — Past · Present · Future',
            a: `<p>The most popular spread. <strong>Three cards</strong> providing context, clarity and guidance on any situation.</p>
<svg viewBox="0 0 310 125" class="spread-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="8" width="76" height="76" rx="5" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="48" y="52" text-anchor="middle" fill="#a78bfa" font-size="24" font-weight="bold" font-family="Georgia,serif">1</text>
  <text x="48" y="103" text-anchor="middle" fill="#9890b0" font-size="10" font-family="sans-serif">Past</text>
  <rect x="117" y="8" width="76" height="76" rx="5" fill="#161628" stroke="#c9a84c" stroke-width="2.5"/>
  <text x="155" y="52" text-anchor="middle" fill="#e8c86a" font-size="24" font-weight="bold" font-family="Georgia,serif">2</text>
  <text x="155" y="103" text-anchor="middle" fill="#9890b0" font-size="10" font-family="sans-serif">Present</text>
  <rect x="224" y="8" width="76" height="76" rx="5" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="262" y="52" text-anchor="middle" fill="#a78bfa" font-size="24" font-weight="bold" font-family="Georgia,serif">3</text>
  <text x="262" y="103" text-anchor="middle" fill="#9890b0" font-size="10" font-family="sans-serif">Future</text>
</svg>
<div class="faq-table-wrap"><table class="faq-table">
<thead><tr><th>Position</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td><strong>1 — Past</strong></td><td>Influences that shaped the situation; energies that are fading</td></tr>
<tr><td><strong>2 — Present</strong></td><td>The current situation; dominant energy right now</td></tr>
<tr><td><strong>3 — Future</strong></td><td>Where the situation is heading if current trends continue</td></tr>
</tbody></table></div>
<p class="faq-note">💡 Useful variant: use the positions as <em>Situation · Action · Outcome</em> for decision-making questions.</p>`
          },
          {
            q: 'Celtic Cross — 10 cards',
            a: `<p>The most complete and well-known spread. <strong>10 cards</strong> exploring the situation from every angle: past, present, future, internal and external influences.</p>
<svg viewBox="0 0 450 320" class="spread-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect x="143" y="124" width="48" height="72" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="2.5"/>
  <text x="167" y="166" text-anchor="middle" fill="#e8c86a" font-size="16" font-weight="bold" font-family="Georgia,serif">1</text>
  <rect x="119" y="138" width="72" height="48" rx="4" fill="#1e1e35" stroke="#a78bfa" stroke-width="2" opacity="0.92"/>
  <text x="155" y="168" text-anchor="middle" fill="#a78bfa" font-size="16" font-weight="bold" font-family="Georgia,serif">2</text>
  <rect x="143" y="37" width="48" height="72" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="2"/>
  <text x="167" y="79" text-anchor="middle" fill="#e8c86a" font-size="16" font-weight="bold" font-family="Georgia,serif">3</text>
  <rect x="143" y="211" width="48" height="72" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="2"/>
  <text x="167" y="253" text-anchor="middle" fill="#e8c86a" font-size="16" font-weight="bold" font-family="Georgia,serif">4</text>
  <rect x="75" y="124" width="48" height="72" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="2"/>
  <text x="99" y="166" text-anchor="middle" fill="#e8c86a" font-size="16" font-weight="bold" font-family="Georgia,serif">5</text>
  <rect x="211" y="124" width="48" height="72" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="2"/>
  <text x="235" y="166" text-anchor="middle" fill="#e8c86a" font-size="16" font-weight="bold" font-family="Georgia,serif">6</text>
  <line x1="296" y1="10" x2="296" y2="315" stroke="#2a2a4a" stroke-width="1" stroke-dasharray="5,4"/>
  <rect x="330" y="238" width="48" height="72" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="354" y="280" text-anchor="middle" fill="#a78bfa" font-size="16" font-weight="bold" font-family="Georgia,serif">7</text>
  <rect x="330" y="157" width="48" height="72" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="354" y="199" text-anchor="middle" fill="#a78bfa" font-size="16" font-weight="bold" font-family="Georgia,serif">8</text>
  <rect x="330" y="76" width="48" height="72" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="354" y="118" text-anchor="middle" fill="#a78bfa" font-size="16" font-weight="bold" font-family="Georgia,serif">9</text>
  <rect x="330" y="4" width="48" height="72" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="354" y="46" text-anchor="middle" fill="#a78bfa" font-size="16" font-weight="bold" font-family="Georgia,serif">10</text>
  <text x="167" y="308" text-anchor="middle" fill="#5a5278" font-size="9" font-family="sans-serif">Cross</text>
  <text x="354" y="316" text-anchor="middle" fill="#5a5278" font-size="9" font-family="sans-serif">Staff</text>
</svg>
<div class="faq-table-wrap"><table class="faq-table">
<thead><tr><th>#</th><th>Name</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td><strong>1</strong></td><td>The Present</td><td>The querent's current situation</td></tr>
<tr><td><strong>2</strong></td><td>The Challenge</td><td>What crosses or obstructs the situation (placed perpendicular)</td></tr>
<tr><td><strong>3</strong></td><td>The Crown</td><td>Conscious goal; what you aspire to achieve</td></tr>
<tr><td><strong>4</strong></td><td>The Root</td><td>Unconscious foundation; roots of the matter</td></tr>
<tr><td><strong>5</strong></td><td>Recent Past</td><td>Influences that are fading away</td></tr>
<tr><td><strong>6</strong></td><td>Near Future</td><td>What is approaching in the coming weeks</td></tr>
<tr><td><strong>7</strong></td><td>Your Self</td><td>How you perceive yourself in the situation</td></tr>
<tr><td><strong>8</strong></td><td>Environment</td><td>External influences; how others see you</td></tr>
<tr><td><strong>9</strong></td><td>Hopes &amp; Fears</td><td>What you secretly hope for or fear</td></tr>
<tr><td><strong>10</strong></td><td>The Outcome</td><td>Likely result if current trends continue</td></tr>
</tbody></table></div>`
          },
          {
            q: 'Horseshoe Spread — 7 cards',
            a: `<p>Seven cards arranged in a horseshoe (inverted U) shape. Balanced and versatile, offering a full view of the situation with special focus on obstacles and the path forward.</p>
<svg viewBox="0 0 350 245" class="spread-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <path d="M 31 78 Q 175 238 319 78" stroke="#2a2a4a" stroke-width="1" fill="none" stroke-dasharray="4,4"/>
  <rect x="8" y="8" width="46" height="70" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="31" y="49" text-anchor="middle" fill="#a78bfa" font-size="15" font-weight="bold" font-family="Georgia,serif">1</text>
  <rect x="68" y="58" width="46" height="70" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="91" y="99" text-anchor="middle" fill="#a78bfa" font-size="15" font-weight="bold" font-family="Georgia,serif">2</text>
  <rect x="128" y="98" width="46" height="70" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="151" y="139" text-anchor="middle" fill="#a78bfa" font-size="15" font-weight="bold" font-family="Georgia,serif">3</text>
  <rect x="152" y="158" width="46" height="70" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="2.5"/>
  <text x="175" y="199" text-anchor="middle" fill="#e8c86a" font-size="15" font-weight="bold" font-family="Georgia,serif">4</text>
  <rect x="176" y="98" width="46" height="70" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="199" y="139" text-anchor="middle" fill="#a78bfa" font-size="15" font-weight="bold" font-family="Georgia,serif">5</text>
  <rect x="236" y="58" width="46" height="70" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="259" y="99" text-anchor="middle" fill="#a78bfa" font-size="15" font-weight="bold" font-family="Georgia,serif">6</text>
  <rect x="296" y="8" width="46" height="70" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="2.5"/>
  <text x="319" y="49" text-anchor="middle" fill="#e8c86a" font-size="15" font-weight="bold" font-family="Georgia,serif">7</text>
</svg>
<div class="faq-table-wrap"><table class="faq-table">
<thead><tr><th>#</th><th>Name</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td><strong>1</strong></td><td>The Past</td><td>Past influences affecting the situation</td></tr>
<tr><td><strong>2</strong></td><td>The Present</td><td>The situation as it stands right now</td></tr>
<tr><td><strong>3</strong></td><td>Hidden Influences</td><td>Unconscious or unseen factors at play</td></tr>
<tr><td><strong>4</strong></td><td>Obstacles</td><td>What stands in the way; the main challenge</td></tr>
<tr><td><strong>5</strong></td><td>Others' Attitudes</td><td>How others involved think or act</td></tr>
<tr><td><strong>6</strong></td><td>What to do</td><td>Recommended action; the best path forward</td></tr>
<tr><td><strong>7</strong></td><td>The Outcome</td><td>Likely result if the cards' advice is followed</td></tr>
</tbody></table></div>`
          },
          {
            q: 'Year Spread — 12 cards',
            a: `<p>One card for each month of the year, plus an optional central card as the <strong>theme of the year</strong>. Perfect to do at New Year or on your birthday.</p>
<svg viewBox="0 0 440 200" class="spread-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="15" width="56" height="75" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="38" y="58" text-anchor="middle" fill="#a78bfa" font-size="13" font-weight="bold" font-family="Georgia,serif">1</text>
  <text x="38" y="103" text-anchor="middle" fill="#5a5278" font-size="8.5" font-family="sans-serif">JAN</text>
  <rect x="76" y="15" width="56" height="75" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="104" y="58" text-anchor="middle" fill="#a78bfa" font-size="13" font-weight="bold" font-family="Georgia,serif">2</text>
  <text x="104" y="103" text-anchor="middle" fill="#5a5278" font-size="8.5" font-family="sans-serif">FEB</text>
  <rect x="142" y="15" width="56" height="75" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="170" y="58" text-anchor="middle" fill="#a78bfa" font-size="13" font-weight="bold" font-family="Georgia,serif">3</text>
  <text x="170" y="103" text-anchor="middle" fill="#5a5278" font-size="8.5" font-family="sans-serif">MAR</text>
  <rect x="208" y="15" width="56" height="75" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="236" y="58" text-anchor="middle" fill="#a78bfa" font-size="13" font-weight="bold" font-family="Georgia,serif">4</text>
  <text x="236" y="103" text-anchor="middle" fill="#5a5278" font-size="8.5" font-family="sans-serif">APR</text>
  <rect x="274" y="15" width="56" height="75" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="302" y="58" text-anchor="middle" fill="#a78bfa" font-size="13" font-weight="bold" font-family="Georgia,serif">5</text>
  <text x="302" y="103" text-anchor="middle" fill="#5a5278" font-size="8.5" font-family="sans-serif">MAY</text>
  <rect x="340" y="15" width="56" height="75" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="368" y="58" text-anchor="middle" fill="#a78bfa" font-size="13" font-weight="bold" font-family="Georgia,serif">6</text>
  <text x="368" y="103" text-anchor="middle" fill="#5a5278" font-size="8.5" font-family="sans-serif">JUN</text>
  <rect x="10" y="110" width="56" height="75" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="1.5"/>
  <text x="38" y="153" text-anchor="middle" fill="#e8c86a" font-size="13" font-weight="bold" font-family="Georgia,serif">7</text>
  <text x="38" y="198" text-anchor="middle" fill="#5a5278" font-size="8.5" font-family="sans-serif">JUL</text>
  <rect x="76" y="110" width="56" height="75" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="1.5"/>
  <text x="104" y="153" text-anchor="middle" fill="#e8c86a" font-size="13" font-weight="bold" font-family="Georgia,serif">8</text>
  <text x="104" y="198" text-anchor="middle" fill="#5a5278" font-size="8.5" font-family="sans-serif">AUG</text>
  <rect x="142" y="110" width="56" height="75" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="1.5"/>
  <text x="170" y="153" text-anchor="middle" fill="#e8c86a" font-size="13" font-weight="bold" font-family="Georgia,serif">9</text>
  <text x="170" y="198" text-anchor="middle" fill="#5a5278" font-size="8.5" font-family="sans-serif">SEP</text>
  <rect x="208" y="110" width="56" height="75" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="1.5"/>
  <text x="236" y="153" text-anchor="middle" fill="#e8c86a" font-size="13" font-weight="bold" font-family="Georgia,serif">10</text>
  <text x="236" y="198" text-anchor="middle" fill="#5a5278" font-size="8.5" font-family="sans-serif">OCT</text>
  <rect x="274" y="110" width="56" height="75" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="1.5"/>
  <text x="302" y="153" text-anchor="middle" fill="#e8c86a" font-size="13" font-weight="bold" font-family="Georgia,serif">11</text>
  <text x="302" y="198" text-anchor="middle" fill="#5a5278" font-size="8.5" font-family="sans-serif">NOV</text>
  <rect x="340" y="110" width="56" height="75" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="1.5"/>
  <text x="368" y="153" text-anchor="middle" fill="#e8c86a" font-size="13" font-weight="bold" font-family="Georgia,serif">12</text>
  <text x="368" y="198" text-anchor="middle" fill="#5a5278" font-size="8.5" font-family="sans-serif">DEC</text>
</svg>
<p>Each card represents the energy and main themes of that month. Interpret each one individually and also in relation to adjacent cards.</p>
<p class="faq-note">💡 Add a 13th card in the center as the <em>theme of the year</em> for an overview of the complete cycle.</p>`
          }
        ]
      }
    ],

    // System prompt for AI (tarot reader in English)
    system_prompt: `You are an experienced tarot reader with decades of practice in Rider-Waite Tarot reading. Your style is warm, approachable, empathetic, and direct. You speak in English with clear, accessible language, without unnecessary esoteric jargon.

When the user shares an image of their spread and a question or topic, do the following:

1. Identify the cards visible in the image and mention their names in English.
2. Interpret the meaning of each visible card in the context of the question or topic.
3. Offer an integrated and coherent reading that connects all the cards with each other and with the querent's situation.
4. End with a synthesis: what the cards are saying overall and what may be useful to keep in mind.

Important guidelines:
- Speak in first person and in a personal way: "I see that…", "the cards show me…", "this card tells me…".
- Be specific and relevant to the question asked. Avoid vague or generic responses.
- If you cannot clearly identify a card, say so naturally and work with what you can see.
- If the image does not show tarot cards or is not legible, say so kindly and ask for a clearer image.
- Do not promise or predict the future with certainty. Always use guiding language: "it may be…", "this suggests…", "the cards point to…".
- Length: between 250 and 450 words, well organized in paragraphs.`
  }
};

let _lang = localStorage.getItem('tarotme_lang') || 'es';

export function t(key) {
  return UI[_lang]?.[key] ?? UI['es']?.[key] ?? key;
}

export function getLang() { return _lang; }

export function setLang(lang) {
  if (!UI[lang]) return;
  _lang = lang;
  localStorage.setItem('tarotme_lang', lang);
}

export function getAvailableLangs() {
  return Object.keys(UI);
}
