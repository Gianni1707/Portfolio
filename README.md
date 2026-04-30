# 🎮 Giovanni Benefico — Portfolio

> Portfolio personale a tema **Pokédex**, costruito con HTML, CSS e JavaScript vanilla. Nessun framework, nessun bundler — solo codice puro.

![Pokédex OS](https://img.shields.io/badge/POKÉDEX%20OS-v1.7.07-EE1515?style=for-the-badge&labelColor=1A1A1C)
![HTML](https://img.shields.io/badge/HTML5-E34C26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-264DE4?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## Indice

- [Anteprima](#anteprima)
- [Funzionalità](#funzionalità)
- [Struttura del progetto](#struttura-del-progetto)
- [Sezioni](#sezioni)
- [Tecnologie](#tecnologie)
- [Come avviarlo](#come-avviarlo)
- [Internazionalizzazione](#internazionalizzazione)
- [Contatti](#contatti)

---

## Anteprima

Il sito simula l'interfaccia di un **Pokédex OS**: sidebar fissa a sinistra con la trainer card e il menu di navigazione, area principale a destra che mostra le sezioni una alla volta con animazioni di ingresso.

---

## Funzionalità

- **SPA senza router** — cambio sezione via JS, nessun reload di pagina
- **Tema Pokédex** — font pixelati, stat bar animate, chip-8 badge
- **i18n IT / EN** — tutta l'interfaccia cambia lingua al volo senza refresh
- **Skills interattive** — click su un tipo Pokémon per espandere le "mosse" (tecnologie)
- **Stat bar animate** — le barre HP/ATK/DEF/SPA/SPD si riempiono a ogni ritorno alla Home
- **Cursor glow** — alone rosso che segue il cursore nella sezione Hero
- **Scroll reveal** — gli elementi appaiono con fade+slide quando entrano nel viewport
- **Responsive** — hamburger menu su mobile (< 900px), layout a colonna singola
- **Form di contatto** — validazione HTML5 nativa, feedback visivo al submit
- **Card progetti dinamiche** — generate da un array JS, con link GitHub diretti

---

## Struttura del progetto

```
Portfolio/
├── index.html     # Markup HTML — struttura SPA con sidebar e sezioni
├── style.css      # Stili — tema Pokédex, layout Flexbox/Grid, responsive
├── script.js      # Logica — dati, i18n, render dinamico, interazioni
└── README.md      # Questo file
```

## Il file di riferimento per il browser è `script.js`.

---

## Sezioni

### 01 · Home (Hero)
Presentazione principale con nome in grande, badge monospazio, bio e **stat card** ispirata alla scheda Pokémon (HP, ATK, DEF, SPA, SPD). Le barre si animano ogni volta che si torna a questa sezione.

### 02 · Chi sono (About)
Profilo allenatore con bio estesa e tabella di fatti rapidi: città, status accademico, lingue, disponibilità.

### 03 · Istruzione (Education)
Due card con badge geometrici (esagono per l'università, pentagono per l'ITIS), anni di frequenza e livello chip.

### 04 · Skill (Skills)
Tabella interattiva delle tecnologie rappresentate come **tipi Pokémon** (Metal, Steel, Bolt, Coil…). Cliccando su una riga si espande il pannello delle "mosse" (tecniche specifiche) con power point.

### 05 · Progetti (Projects)
Griglia di card generate dinamicamente dall'array `PROJECTS` in `script.js`. Ogni card ha colore, rarità (Common / Rare / Epic), tipo e link al repository GitHub.

### 06 · Contatti (Contact)
Quattro link rapidi (email, telefono, GitHub, LinkedIn) e un form HTML5 con feedback di successo animato. Sezione su sfondo scuro (`--ink`) per contrasto visivo.

---

## Tecnologie

| Categoria | Strumento |
|-----------|-----------|
| Markup | HTML5 semantico |
| Stile | CSS3 (Custom Properties, Flexbox, Grid, `@keyframes`) |
| Logica | JavaScript ES2020 vanilla |
| Font | Google Fonts — Space Grotesk, JetBrains Mono, Inter, Press Start 2P |
| Icone | Nessuna libreria — Unicode + CSS puro |
| Deploy | Qualsiasi server statico (GitHub Pages, Netlify, Vercel…) |

---

## Internazionalizzazione

Il sistema i18n è gestito interamente lato client in `script.js`:

```js
const I18N = {
  it: { "nav-home": "Home", "about": "...", ... },
  en: { "nav-home": "Home", "about": "...", ... },
};
```

Ogni elemento traducibile nel DOM ha un attributo `data-i="chiave"`:

```html
<span data-i="nav-home">Home</span>
```

La funzione `applyLang(lang)` itera tutti questi elementi e sostituisce il `textContent` con il valore corrispondente nel dizionario. Il cambio lingua è immediato e non richiede alcun reload.

---

## Contatti

| Canale | Link |
|--------|------|
| Email | [beneficogianni@gmail.com](mailto:beneficogianni@gmail.com) |
| GitHub | [github.com/Gianni1707](https://github.com/Gianni1707) |
| LinkedIn | [linkedin.com/in/giovanni-benefico](https://www.linkedin.com/in/giovanni-benefico-b06741362) |
| Telefono | +39 388 095 6792 |

---

<div align="center">
  <sub>© 2026 Giovanni Benefico · <strong>BENEFICO.DEX v1.7.07</strong> · build@bari</sub><br>
  <sub><em>Acchiappali tutti.</em></sub>
</div>
