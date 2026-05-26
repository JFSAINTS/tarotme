# TarotMe ☽

Biblioteca interactiva de las 78 cartas del Tarot Rider-Waite y lecturas personalizadas con IA.

🔮 **Demo en vivo:** [jfsaints.github.io/tarotme](https://jfsaints.github.io/tarotme)

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

## 🔑 API Key

La lectura con IA requiere tu propia clave de API de [Anthropic](https://console.anthropic.com/settings/keys).  
La clave se guarda solo en tu dispositivo (localStorage) y nunca en ningún servidor.

- Las cuentas nuevas reciben ~$5 de crédito gratuito (~40–100 lecturas)
- Sin cuota diaria gratuita permanente (es pago por uso)

## 🃏 Imágenes

Todas las ilustraciones son obra de **Pamela Colman Smith** (1910) para el Tarot Rider-Waite.  
Son de dominio público. Fuente: [Wikimedia Commons](https://commons.wikimedia.org).

## ⚠️ Aviso

Las lecturas de tarot son una herramienta de reflexión personal. No predicen el futuro con certeza y no sustituyen asesoramiento médico, legal, financiero ni psicológico.

---

*Hecho con ☽ y vanilla JS*
