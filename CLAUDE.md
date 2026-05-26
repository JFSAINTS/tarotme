# CLAUDE.md — TarotMe

Contexto del proyecto para Claude Code. Este archivo resume todo lo importante para trabajar en TarotMe sin perder contexto.

---

## ¿Qué es este proyecto?

**TarotMe** es una PWA (Progressive Web App) de vanilla JS/HTML/CSS para explorar las 78 cartas del Tarot Rider-Waite y obtener lecturas personalizadas con IA.

- Sin frameworks. Solo HTML + CSS + JavaScript ES Modules.
- 100% client-side: no hay servidor propio ni base de datos.
- Las llamadas a la API de Anthropic van directamente desde el navegador.
- Bilingüe: español e inglés con selector de idioma.

---

## Estructura de archivos

```
D:\TAROTME\
├── index.html          ← Estructura HTML con data-i18n (textos en app.js vía i18n.js)
├── app.js              ← Lógica principal: starfield, i18n, cartas, lectura, settings
├── styles.css          ← Estilos: tema oscuro/místico con acentos dorados y púrpura
├── cards-data.js       ← Datos de las 78 cartas en ESPAÑOL (ES modules)
├── cards-en.js         ← Datos de las 78 cartas en INGLÉS (overlay de i18n)
├── i18n.js             ← Sistema de traducciones ES/EN + FAQ bilingüe + system prompts
├── manifest.json       ← PWA manifest (start_url relativo para GitHub Pages)
├── .nojekyll           ← Evita que GitHub Pages procese con Jekyll
├── .gitignore
├── README.md
└── CLAUDE.md           ← Este archivo
```

---

## Servidor local

```powershell
# Arrancar servidor
python -m http.server 4567

# URL local
http://localhost:4567/index.html
```

> El puerto es **4567** (no 3456, que es CATALOGA).

---

## GitHub Pages

- **URL pública:** https://jfsaints.github.io/tarotme/
- **Repo:** https://github.com/JFSAINTS/tarotme
- **Branch:** `main`
- **Despliegue:** GitHub Actions (`.github/workflows/pages.yml`) creado manualmente en la UI de GitHub
- **Build type:** `workflow` (no legacy Jekyll)

---

## Arquitectura i18n (bilingüe)

### `i18n.js`
Exporta `t(key)`, `getLang()`, `setLang(lang)`. Contiene:
- Todas las cadenas de UI en `es` y `en`
- El contenido del FAQ en ambos idiomas (estructura de datos renderizada dinámicamente)
- Los system prompts de Claude en español e inglés

### `cards-data.js`
- Datos de las 78 cartas **en español**
- Campos: `id`, `numero`, `nombre`, `ingles`, `arcana`, `palo`, `imagen`, `palabrasClave`, `derecho`, `invertido`, `simbolismo`
- Exporta `CARTAS` (array) y `filtrarCartas(filtro, busqueda)`

### `cards-en.js`
- Overlay en **inglés** para las 78 cartas, indexado por `id`
- Campos: `keywords`, `upright`, `reversed`, `symbolism`
- Si falta alguna carta, `app.js` cae al texto en español como fallback

### `app.js` — gestión de idioma
- `applyTranslations()` aplica `data-i18n` / `data-i18n-html` a todo el DOM
- Al cambiar de idioma se re-renderiza la cuadrícula de cartas y el FAQ
- El modal de detalle de carta muestra el nombre, keywords y descripciones en el idioma activo
- El system prompt enviado a Claude es también en el idioma activo

---

## Starfield (fondo de estrellas)

Implementado con **Canvas 2D** en `app.js` → función `initStarfield()`:
- Canvas `#starfield` fijo en `z-index: -1`
- ~305 estrellas en 4 tamaños (tiny, small, medium, large)
- Colores: blanco, blanco cálido, azul-blanco, dorado (--gold) y púrpura (--purple2)
- Animación de parpadeo con `requestAnimationFrame` y fase aleatoria por estrella
- Las estrellas grandes tienen resplandor radial (glow)
- Se recalcula al redimensionar la ventana

---

## Imágenes de las cartas

Todas las 78 cartas vienen de **Wikimedia Commons** (dominio público).

### Arcanos Mayores
Patrón: `https://upload.wikimedia.org/wikipedia/commons/{hash}/RWS_Tarot_{nn}_{Name}.jpg`

Cartas con paths especiales (no siguen el patrón estándar):
- **El Mago (ar01):** `d/de/RWS_Tarot_01_Magician.jpg` ← corregido (era `1/10/` incorrecto)
- **Los Amantes (ar06):** `d/db/RWS_Tarot_06_Lovers.jpg` ← corregido (era `3/3a/TheLovers.jpg` incorrecto)

### Arcanos Menores
- Bastos: `Wands01.jpg` … `Wands14.jpg`
- Copas: `Cups01.jpg` … `Cups14.jpg`
- Espadas: `Swords01.jpg` … `Swords14.jpg`
- Oros: `Pents01.jpg` … `Pents14.jpg`

Cada archivo tiene su propio hash de directorio (no hay patrón predecible). Ver mappings completos en `cards-data.js`.

---

## API de Anthropic

- **Modelo:** `claude-opus-4-7`
- **API key:** guardada en `localStorage('tarotme_api_key')`, nunca en el servidor
- **Header especial:** `anthropic-dangerous-direct-browser-access: true` (requerido para llamadas directas desde browser)
- **Max tokens salida:** 1200
- **System prompt:** definido en `i18n.js` bajo la clave `system_prompt` en cada idioma

### Límites (modo gratuito)
- Nuevas cuentas reciben ~$5 de crédito único
- Sin cuota diaria gratuita permanente
- ~$0.08 USD por lectura con claude-opus-4-7
- Con $5 de crédito: ~40–100 lecturas

---

## Diseño / UX

### Variables CSS principales
```css
--bg: #08080f;          /* fondo principal (casi negro) */
--bg2: #0f0f1c;
--bg3: #161628;
--bg4: #1e1e35;
--gold: #c9a84c;        /* acento dorado */
--gold2: #e8c86a;
--purple: #7c3aed;      /* acento púrpura */
--purple2: #a78bfa;
--text: #e8e6f0;
--text2: #9890b0;
--text3: #5a5278;
```

### Componentes principales
- **Navbar:** tabs con gradiente dorado-púrpura al activo + botón de idioma (ES/EN) + botón de configuración con dot de estado
- **Cuadrícula de cartas:** lazy-loading, filtrado por palo/arcana, búsqueda en tiempo real
- **Modal de carta:** imagen + nombre bilingüe + keywords + 3 tabs (derecha/invertida/simbolismo)
- **Sección Lectura:** upload drag&drop + textarea de pregunta + resultado con loading animado
- **FAQ:** acordeón colapsable generado dinámicamente desde `i18n.js`
- **Starfield:** canvas animado de 305 estrellas con parpadeo

---

## Commits y flujo git

```powershell
# Ver estado
git -C "D:/TAROTME" status
git -C "D:/TAROTME" log --oneline

# Push a GitHub
git -C "D:/TAROTME" add <files>
git -C "D:/TAROTME" commit -m "mensaje"
git -C "D:/TAROTME" push origin main
```

El remote incluye el token en la URL (igual que CATALOGA).

---

## Relación con CATALOGA

TarotMe es un proyecto **separado** de CATALOGA:
- CATALOGA: `D:\CATALOGA`, puerto 3456, repo `JFSAINTS/collectr`
- TarotMe: `D:\TAROTME`, puerto 4567, repo `JFSAINTS/tarotme`
- Ambos en vanilla JS sin frameworks

---

## Historial de correcciones importantes

| Fecha | Problema | Solución |
|-------|----------|---------|
| 2026-05-26 | Imágenes de El Mago y Los Amantes daban 404 | URLs corregidas en `cards-data.js` |
| 2026-05-26 | Arcanos menores usaban sacred-texts.com | Migrados los 56 a Wikimedia Commons |
| 2026-05-26 | manifest.json con `start_url: /index.html` | Cambiado a `./index.html` para GitHub Pages |
| 2026-05-26 | GitHub Pages legacy build fallaba | Añadido `.nojekyll`, cambiado a build type `workflow` + Actions |

---

## Próximas mejoras sugeridas

- [ ] PWA offline: añadir `sw.js` con cache de los assets (las imágenes de Wikimedia no cacheables)
- [ ] Modo oscuro/claro toggle
- [ ] Tiradas predefinidas (3 cartas, Cruz Celta, etc.) con layout visual
- [ ] Historial de lecturas guardado en `localStorage`
- [ ] Compartir lectura como imagen/PDF
- [ ] Más idiomas (FR, PT, DE…)
