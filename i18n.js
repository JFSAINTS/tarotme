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
    settings_body:    'Para usar la lectura personalizada con IA necesitas una clave de API de Anthropic. Tu clave se guarda solo en este dispositivo.',
    settings_label:   'Clave de API de Anthropic',
    settings_link:    'Obtener clave en console.anthropic.com →',
    settings_save:    'Guardar',
    settings_clear:   'Eliminar clave',
    settings_saved:   '✓ Clave guardada correctamente.',
    settings_nochange:'La clave no cambió.',
    settings_invalid: 'Introduce una clave válida.',
    settings_prefix:  'La clave debe empezar por sk-ant-…',
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
    api_notice_body:  'Para usar la lectura con IA necesitas configurar tu clave de API de Anthropic. Es gratuita para uso personal.',
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
<p>La <strong>lectura personalizada con IA</strong> requiere tu propia clave de API de Anthropic. Esta clave se usa directamente desde tu navegador y se guarda solo en tu dispositivo.</p>`
          },
          {
            q: '¿Qué modelo de IA usa TarotMe?',
            a: `<p>TarotMe utiliza <strong>Claude claude-opus-4-7</strong> de Anthropic, uno de los modelos más avanzados disponibles. Está configurado para actuar como tarotista experimentada, interpretando las cartas en el idioma seleccionado con un estilo cálido y cercano.</p>`
          },
          {
            q: '¿Es segura mi clave de API?',
            a: `<p>Tu clave de API se guarda <strong>únicamente en tu dispositivo</strong> (localStorage del navegador) y nunca se envía a ningún servidor de TarotMe. Las solicitudes van directamente desde tu navegador a la API de Anthropic.</p>
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
            a: `<p>Anthropic ofrece <strong>aproximadamente $5 de crédito inicial</strong> para cuentas nuevas. No hay una cuota fija diaria de consultas gratuitas: el crédito se va consumiendo por uso.</p>
<div class="faq-table-wrap"><table class="faq-table">
<thead><tr><th>Concepto</th><th>Detalle</th></tr></thead>
<tbody>
<tr><td>Crédito inicial (cuenta nueva)</td><td>~$5 USD (uso único)</td></tr>
<tr><td>Coste por lectura (aprox.)</td><td>$0.05 – $0.12 USD</td></tr>
<tr><td>Lecturas estimadas con $5</td><td><strong>40 – 100 lecturas</strong></td></tr>
<tr><td>Cuota diaria gratuita permanente</td><td>❌ No existe</td></tr>
</tbody></table></div>
<p class="faq-note">💡 El coste varía según la longitud de la pregunta y la respuesta generada.</p>`
          },
          {
            q: '¿Qué pasa cuando se acaba el crédito gratuito?',
            a: `<p>Una vez consumidos los $5 de crédito inicial, recibirás un error de tipo <code>insufficient_quota</code>. Para seguir usando la lectura con IA necesitarás añadir un método de pago en <a href="https://console.anthropic.com/billing" target="_blank" rel="noopener">console.anthropic.com/billing</a>.</p>
<p>La <strong>tarifa de Claude claude-opus-4-7</strong> es de pago por uso:</p>
<div class="faq-table-wrap"><table class="faq-table">
<thead><tr><th>Tipo de token</th><th>Precio por millón</th><th>Por lectura típica</th></tr></thead>
<tbody>
<tr><td>Entrada</td><td>$15 / M tokens</td><td>~$0.01</td></tr>
<tr><td>Salida</td><td>$75 / M tokens</td><td>~$0.07</td></tr>
<tr><td><strong>Total por lectura</strong></td><td colspan="2"><strong>~$0.08 USD</strong></td></tr>
</tbody></table></div>
<p class="faq-note">Con $10 de recarga puedes hacer aproximadamente 125 lecturas.</p>`
          },
          {
            q: '¿Cómo obtengo una clave de API de Anthropic?',
            a: `<ol class="faq-steps">
<li>Ve a <a href="https://console.anthropic.com" target="_blank" rel="noopener">console.anthropic.com</a> y crea una cuenta gratuita.</li>
<li>Accede a <strong>Settings → API Keys</strong> y pulsa <strong>Create Key</strong>.</li>
<li>Copia la clave (empieza por <code>sk-ant-</code>). Solo se muestra una vez.</li>
<li>En TarotMe, pulsa el icono ⚙️ en la cabecera y pega tu clave.</li>
</ol>
<p class="faq-note">🎁 Las cuentas nuevas reciben ~$5 de crédito automáticamente, sin introducir datos de pago.</p>`
          }
        ]
      },
      {
        title: '🔧 Errores comunes',
        items: [
          {
            q: 'Error: <code>invalid_api_key</code>',
            a: '<p>La clave introducida no es válida. Comprueba que empieza por <code>sk-ant-</code> y que la copiaste completa sin espacios extra. Genera una nueva en <a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noopener">console.anthropic.com/settings/keys</a>.</p>'
          },
          {
            q: 'Error: <code>insufficient_quota</code>',
            a: '<p>Has agotado tu crédito. Añade un método de pago en <a href="https://console.anthropic.com/billing" target="_blank" rel="noopener">console.anthropic.com/billing</a>.</p>'
          },
          {
            q: 'Error: <code>overloaded_error</code>',
            a: '<p>La API de Anthropic está temporalmente sobrecargada. Es un problema del lado del servidor, no de tu clave. Espera unos segundos y vuelve a intentarlo.</p>'
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
    settings_body:    'To use the personalized AI reading you need an Anthropic API key. Your key is stored only on this device.',
    settings_label:   'Anthropic API Key',
    settings_link:    'Get your key at console.anthropic.com →',
    settings_save:    'Save',
    settings_clear:   'Remove key',
    settings_saved:   '✓ Key saved successfully.',
    settings_nochange:'The key did not change.',
    settings_invalid: 'Please enter a valid key.',
    settings_prefix:  'The key must start with sk-ant-…',
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
    api_notice_body:  'To use the AI reading you need to configure your Anthropic API key. It is free for personal use.',
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
<p>The <strong>personalized AI reading</strong> requires your own Anthropic API key. This key is used directly from your browser and stored only on your device.</p>`
          },
          {
            q: 'Which AI model does TarotMe use?',
            a: `<p>TarotMe uses <strong>Claude claude-opus-4-7</strong> by Anthropic, one of the most advanced models available. It is configured to act as an experienced tarot reader, interpreting cards in your selected language with a warm and personal style.</p>`
          },
          {
            q: 'Is my API key safe?',
            a: `<p>Your API key is stored <strong>only on your device</strong> (browser localStorage) and is never sent to any TarotMe server. Requests go directly from your browser to Anthropic's API.</p>
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
            a: `<p>Anthropic offers <strong>approximately $5 of initial credit</strong> for new accounts. There is no fixed daily quota of free queries — credit is consumed as you use it.</p>
<div class="faq-table-wrap"><table class="faq-table">
<thead><tr><th>Item</th><th>Details</th></tr></thead>
<tbody>
<tr><td>Initial credit (new account)</td><td>~$5 USD (one-time)</td></tr>
<tr><td>Cost per reading (approx.)</td><td>$0.05 – $0.12 USD</td></tr>
<tr><td>Estimated readings with $5</td><td><strong>40 – 100 readings</strong></td></tr>
<tr><td>Permanent daily free quota</td><td>❌ Does not exist</td></tr>
</tbody></table></div>
<p class="faq-note">💡 Cost varies depending on the length of the question and the generated response.</p>`
          },
          {
            q: 'What happens when the free credit runs out?',
            a: `<p>Once the $5 initial credit is used, you will receive an <code>insufficient_quota</code> error. To continue using AI readings you will need to add a payment method at <a href="https://console.anthropic.com/billing" target="_blank" rel="noopener">console.anthropic.com/billing</a>.</p>
<p><strong>Claude claude-opus-4-7</strong> pricing:</p>
<div class="faq-table-wrap"><table class="faq-table">
<thead><tr><th>Token type</th><th>Price per million</th><th>Per typical reading</th></tr></thead>
<tbody>
<tr><td>Input</td><td>$15 / M tokens</td><td>~$0.01</td></tr>
<tr><td>Output</td><td>$75 / M tokens</td><td>~$0.07</td></tr>
<tr><td><strong>Total per reading</strong></td><td colspan="2"><strong>~$0.08 USD</strong></td></tr>
</tbody></table></div>
<p class="faq-note">With a $10 top-up you can do approximately 125 readings.</p>`
          },
          {
            q: 'How do I get an Anthropic API key?',
            a: `<ol class="faq-steps">
<li>Go to <a href="https://console.anthropic.com" target="_blank" rel="noopener">console.anthropic.com</a> and create a free account.</li>
<li>Go to <strong>Settings → API Keys</strong> and click <strong>Create Key</strong>.</li>
<li>Copy the key (starts with <code>sk-ant-</code>). It is only shown once.</li>
<li>In TarotMe, click the ⚙️ icon in the header and paste your key.</li>
</ol>
<p class="faq-note">🎁 New accounts receive ~$5 credit automatically, no payment info required.</p>`
          }
        ]
      },
      {
        title: '🔧 Common errors',
        items: [
          {
            q: 'Error: <code>invalid_api_key</code>',
            a: '<p>The entered key is not valid. Make sure it starts with <code>sk-ant-</code> and was copied completely without extra spaces. Generate a new one at <a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noopener">console.anthropic.com/settings/keys</a>.</p>'
          },
          {
            q: 'Error: <code>insufficient_quota</code>',
            a: '<p>Your credit is exhausted. Add a payment method at <a href="https://console.anthropic.com/billing" target="_blank" rel="noopener">console.anthropic.com/billing</a>.</p>'
          },
          {
            q: 'Error: <code>overloaded_error</code>',
            a: '<p>The Anthropic API is temporarily overloaded. This is a server-side issue, not your key. Wait a few seconds and try again.</p>'
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
