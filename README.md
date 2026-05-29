# TarotMe ☽

Biblioteca interactiva de las 78 cartas del Tarot Rider-Waite y lecturas personalizadas con IA.

🔮 **Demo en vivo:** [jfsaints.github.io/tarotme](https://jfsaints.github.io/tarotme)

---

## 🕊️ Sin ánimo de lucro · Libre distribución

TarotMe es un proyecto **sin ánimo de lucro** y de **libre distribución**. Puedes usarlo, compartirlo y modificarlo libremente. No hay suscripciones, publicidad ni datos que vender.

**El valor y la utilidad de la aplicación residen en ti** — en la intención con la que barajas las cartas, en las preguntas que traes a la tirada, en cómo integras lo que las cartas te muestran. La tecnología aquí es solo un espejo que refleja lo que tú ya sabes.

> Las lecturas no predicen ni determinan nada. Solo tú puedes evaluar su utilidad y decidir qué hacer con lo que lees.

---

## ✨ Características

- **78 cartas** del Tarot Rider-Waite con imagen, significado derecho, invertido y simbolismo en español
- **Filtros** por Arcanos Mayores, Bastos, Copas, Espadas y Oros + buscador
- **Lectura personalizada con IA** — sube una foto de tu tirada, escribe tu pregunta y Claude interpreta las cartas como un tarotista experimentado
- **FAQ** — explicación detallada de la clave de API, límites y costes
- **PWA** — instalable como app en móvil y escritorio
- **Sin servidor** — funciona 100% desde el navegador

## 🛠️ Tecnologías

- Vanilla JS (ES Modules) + HTML5 + CSS3
- Sin frameworks ni dependencias
- Claude API (Anthropic) para las lecturas con IA
- Imágenes: [Wikimedia Commons](https://en.wikipedia.org/wiki/Rider%E2%80%93Waite_Tarot) — dominio público

## 🚀 Uso local

```bash
# Python 3
python -m http.server 4567
# → http://localhost:4567
```

## 🔑 API Keys

La lectura con IA requiere tu propia clave de API de [OpenRouter](https://openrouter.ai/keys).  
Las claves se guardan **solo en tu dispositivo** (localStorage + IndexedDB) y nunca en ningún servidor.

- Puedes guardar **múltiples claves** con alias y alternar entre ellas desde los ajustes ⚙️
- Las cuentas nuevas de OpenRouter reciben crédito gratuito inicial
- Coste aproximado por lectura: **~$0.02 USD** con el modelo Qwen 2.5 VL 72B
- Con $5 puedes hacer más de 200 lecturas

## 🃏 Imágenes

Todas las ilustraciones son obra de **Pamela Colman Smith** (1910) para el Tarot Rider-Waite.  
Son de dominio público. Fuente: [Wikimedia Commons](https://commons.wikimedia.org).

## ⚠️ Aviso

Las lecturas de tarot son una herramienta de reflexión personal. No predicen el futuro con certeza y no sustituyen asesoramiento médico, legal, financiero ni psicológico.

---

*Hecho con ☽ y vanilla JS*
