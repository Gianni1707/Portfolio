/* ════════════════════════════════════════════════════════════
   DIZIONARIO I18N — tutte le stringhe tradotte IT / EN
   Ogni chiave corrisponde a un attributo data-i nel DOM.
   applyLang() usa questo oggetto per aggiornare il testo
   di ogni elemento [data-i] senza ricaricare la pagina.
   ════════════════════════════════════════════════════════════ */
const I18N = {
  it: {
    /* Sidebar e hero */
    "role-sidebar":    "Studente di Informatica & Sviluppatore · Bari, IT",
    "location":        "BARI, ITALIA",
    "about":           "Studente di Informatica all'Università di Bari, con un diploma da Perito Informatico. Mi muovo tra C, C++, Java e Python, ma resto curioso davanti a tutto ciò che si può programmare. Costruisco progetti, imparo dagli errori, e ogni bug sconfitto è un punto esperienza guadagnato.",
    /* Navigazione */
    "nav-home":        "Home",
    "nav-about":       "Chi sono",
    "nav-edu":         "Istruzione",
    "nav-skills":      "Skill",
    "nav-projects":    "Progetti",
    "nav-contact":     "Contatti",
    /* Titoli sezione About */
    "sec-about":       "PROFILO ALLENATORE",
    "sec-about-title": "Profilo Allenatore",
    /* Titoli sezione Education */
    "sec-edu":         "BADGE OTTENUTI",
    "sec-edu-title":   "Badge Ottenuti",
    /* Titoli sezione Skills */
    "sec-skills":      "TIPI & MOSSE",
    "sec-skills-title":"Tipi & Mosse",
    "skills-sub":      "Le mie skill come tipi Pokémon. Ogni tipo ha le sue mosse.",
    "click-hint":      "Clicca un tipo per vedere le mosse",
    /* Titoli sezione Projects */
    "sec-projects":    "POKÉDEX DEI PROGETTI",
    "sec-projects-title":"Pokédex dei Progetti",
    "projects-sub":    "Una collezione di creature digitali catturate su GitHub.",
    "view-repo":       "Vedi repository",
    /* Titoli sezione Contact */
    "sec-contact":     "PUNTO DI CONTATTO",
    "contact-title":   "Punto di Contatto",
    "contact-copy":    "Pronto per una nuova sfida? Mandami un messaggio.",
    "catch-em":        "Acchiappali tutti.",
    /* Fatti nella sezione About */
    "fact-base":       "BASE",
    "fact-status":     "STATUS",
    "fact-status-val": "Studente · 2° anno",
    "fact-langs":      "LINGUE",
    "fact-avail":      "DISPONIBILITÀ",
    "fact-avail-val":  "Aperto a stage",
    "present":         "Presente",
    /* Istruzione */
    "uni-sub":         "Tecniche per la Produzione del Software",
    "itis-title":      "Istituto Tecnico Informatico",
    "itis-sub":        "Diploma di Perito Informatico",
    /* Form di contatto */
    "form-name":       "NOME",
    "form-email":      "EMAIL",
    "form-msg":        "MESSAGGIO",
    "form-send":       "Invia messaggio",
    "form-ok":         "Messaggio inviato! Ti rispondo presto.",
    /* Descrizioni progetti (chiave = "desc-" + id del progetto) */
    "desc-001":        "Il mio portfolio personale a tema Pokémon.",
    "desc-002":        "Tracker per collezione di carte Yu-Gi-Oh!. Lavoro di team.",
    "desc-003":        "Esonero universitario di Tecniche per la Produzione del Software.",
  },
  en: {
    /* Sidebar e hero */
    "role-sidebar":    "CS Student & Developer · Bari, IT",
    "location":        "BARI, ITALY",
    "about":           "CS student at the University of Bari with a technical-institute diploma in Computer Science. I move between C, C++, Java and Python, but stay curious about anything that can be programmed. I build projects, learn from mistakes, and treat every defeated bug as XP earned.",
    /* Navigazione */
    "nav-home":        "Home",
    "nav-about":       "About",
    "nav-edu":         "Education",
    "nav-skills":      "Skills",
    "nav-projects":    "Projects",
    "nav-contact":     "Contact",
    /* Titoli sezione About */
    "sec-about":       "TRAINER PROFILE",
    "sec-about-title": "Trainer Profile",
    /* Titoli sezione Education */
    "sec-edu":         "BADGES EARNED",
    "sec-edu-title":   "Badges Earned",
    /* Titoli sezione Skills */
    "sec-skills":      "TYPES & MOVES",
    "sec-skills-title":"Types & Moves",
    "skills-sub":      "My skills as Pokémon types. Each type knows its moves.",
    "click-hint":      "Click a type to reveal its moves",
    /* Titoli sezione Projects */
    "sec-projects":    "PROJECT POKÉDEX",
    "sec-projects-title":"Project Pokédex",
    "projects-sub":    "A collection of digital creatures captured on GitHub.",
    "view-repo":       "View repo",
    /* Titoli sezione Contact */
    "sec-contact":     "CONTACT POINT",
    "contact-title":   "Contact Point",
    "contact-copy":    "Ready for a new challenge? Drop me a line.",
    "catch-em":        "Gotta catch 'em all.",
    /* Fatti nella sezione About */
    "fact-base":       "HOME",
    "fact-status":     "STATUS",
    "fact-status-val": "Student · 2nd year",
    "fact-langs":      "LANGUAGES",
    "fact-avail":      "AVAILABILITY",
    "fact-avail-val":  "Open to internships",
    "present":         "Present",
    /* Istruzione */
    "uni-sub":         "Software Production Techniques",
    "itis-title":      "Technical Institute (ITIS)",
    "itis-sub":        "CS Diploma",
    /* Form di contatto */
    "form-name":       "NAME",
    "form-email":      "EMAIL",
    "form-msg":        "MESSAGE",
    "form-send":       "Send message",
    "form-ok":         "Message sent! I'll reply soon.",
    /* Descrizioni progetti */
    "desc-001":        "My personal Pokémon-themed portfolio.",
    "desc-002":        "Yu-Gi-Oh! card collection tracker. Team project.",
    "desc-003":        "University coursework for Software Production Techniques.",
  },
};

/* ════════════════════════════════════════════════════════════
   DATI SKILLS — tecnologie rappresentate come tipi Pokémon
   Ogni oggetto definisce:
     id      → identificatore univoco usato da selectSkill()
     name    → nome del linguaggio/tecnologia
     type    → "tipo Pokémon" inventato per l'estetica
     color   → colore di accento della card e del glyph
     glyph   → due lettere abbreviazione mostrate nel quadratino colorato
     power   → valore numerico (0-100) mostrato nella tabella
     moves   → array di 4 tecniche specifiche mostrate nel pannello laterale
     dark    → true se il testo sul glyph deve essere scuro (per sfondi chiari, es. JS giallo)
   ════════════════════════════════════════════════════════════ */
const SKILLS = [
  { id:"c",       name:"C",          type:"Metal", color:"#7A8794", glyph:"Me", power:92, moves:["Pointer Strike","Memory Manage","Bit Twiddle","Stack Smash"] },
  { id:"cpp",     name:"C++",        type:"Steel", color:"#5C6B7A", glyph:"St", power:90, moves:["Template Forge","RAII Guard","STL Combo","Operator Overload"] },
  { id:"arduino", name:"Arduino",    type:"Spark", color:"#00A19A", glyph:"Sk", power:70, moves:["Pin Pulse","Serial Echo","Sensor Read","PWM Wave"] },
  { id:"java",    name:"Java",       type:"Brew",  color:"#B5651D", glyph:"Bw", power:86, moves:["JVM Leap","Generics Cast","Stream Flow","Garbage Sweep"] },
  { id:"html",    name:"HTML",       type:"Frame", color:"#E34C26", glyph:"Fr", power:60, moves:["Tag Wrap","Semantic Bind","Form Submit","Anchor Link"] },
  { id:"css",     name:"CSS",        type:"Aura",  color:"#264DE4", glyph:"Au", power:68, moves:["Flex Storm","Grid Lock","Cascade Wave","Pseudo Strike"] },
  { id:"js",      name:"JavaScript", type:"Bolt",  color:"#F7DF1E", glyph:"Bo", power:84, moves:["Async Burst","Closure Trap","Event Loop","DOM Smash"], dark:true },
  { id:"sql",     name:"SQL",        type:"Vault", color:"#336791", glyph:"Vt", power:78, moves:["Join Combo","Index Seek","Where Filter","Group Crush"] },
  { id:"py",      name:"Python",     type:"Coil",  color:"#3B5BAA", glyph:"Co", power:86, moves:["List Comp","Zen Strike","Lambda Shot","Pip Install"] },
];

/* ════════════════════════════════════════════════════════════
   DATI PROGETTI — array dei repository mostrati nella sezione Projects
   Ogni oggetto definisce:
     id     → numero pokédex a tre cifre (es. "001")
     name   → nome del progetto
     url    → link al repository GitHub
     tech   → array di tecnologie usate (mostrate come tag)
     rarity → Common / Rare / Epic (stile carte collezionabili)
     type   → tipo Pokémon (usato come label nella card)
     color  → colore dell'header della card
   Le descrizioni testuali sono nel dizionario I18N ("desc-001" ecc.)
   ════════════════════════════════════════════════════════════ */
const PROJECTS = [
  { id:"001", name:"Portfolio",        url:"https://github.com/Gianni1707/Portfolio",                                                          tech:["HTML","CSS","JS"], rarity:"Common", type:"Frame", color:"#E34C26" },
  { id:"002", name:"YGO Card Tracker", url:"https://github.com/ToninoSas/ygo_card_tracker",                                                   tech:["Python","SQL"],    rarity:"Rare",   type:"Coil",  color:"#3776AB" },
  { id:"003", name:"Barbarossa — TCP", url:"https://github.com/ChrisRedBeard/Barbarossa_825007_Benefico_827413_esonero_tcp",                   tech:["Java"],            rarity:"Epic",   type:"Brew",  color:"#B5651D" },
];

/* ════════════════════════════════════════════════════════════
   STATO GLOBALE — variabili che tengono traccia dell'UI corrente
   ════════════════════════════════════════════════════════════ */
let currentLang = "it";     // lingua attiva: "it" o "en"
let activeSec   = "hero";   // id della sezione attualmente visibile
let activeSkill = null;     // oggetto skill selezionato (null = nessuna)

/* ════════════════════════════════════════════════════════════
   RENDER SKILLS — costruisce la tabella interattiva dei tipi
   Genera un <button class="skill-row"> per ogni voce in SKILLS.
   La riga attiva riceve la classe "active" (sfondo beige).
   Viene richiamata anche da selectSkill() per aggiornare lo stato visivo.
   ════════════════════════════════════════════════════════════ */
function renderSkills() {
  const table = document.getElementById("skillTable");
  table.innerHTML = SKILLS.map((s, i) => {
    // testo del glyph scuro su sfondi chiari (es. JavaScript giallo)
    const fg = s.dark ? "#1A1A1C" : "#fff";
    const isActive = activeSkill && activeSkill.id === s.id;
    return `<button class="skill-row${isActive ? " active" : ""}" onclick="selectSkill('${s.id}')">
      <span class="skill-num">#${String(i+1).padStart(2,"0")}</span>
      <span class="skill-name-wrap">
        <span class="skill-glyph" style="background:${s.color};color:${fg}">${s.glyph}</span>
        <span class="skill-name">${s.name}</span>
      </span>
      <span class="skill-type">${s.type}</span>
      <span class="skill-power">${s.power}</span>
    </button>`;
  }).join("");
}

/* Imposta la skill attiva e aggiorna tabella + pannello mosse */
function selectSkill(id) {
  activeSkill = SKILLS.find(s => s.id === id);
  renderSkills();       // ri-render per aggiornare la classe "active"
  renderMovesPanel();   // mostra le mosse della skill selezionata
}

/* ════════════════════════════════════════════════════════════
   RENDER MOVES PANEL — pannello laterale delle mosse
   Se nessuna skill è selezionata mostra il messaggio-invito.
   Altrimenti genera una moves-card con header colorato e lista mosse.
   I danni sono fittizi (array fisso [40,55,70,85]) per l'estetica.
   ════════════════════════════════════════════════════════════ */
function renderMovesPanel() {
  const panel = document.getElementById("movesPanel");
  const t = I18N[currentLang];

  // Stato vuoto: nessuna skill selezionata
  if (!activeSkill) {
    panel.innerHTML = `<div class="moves-empty body"><span class="hint-arrow">↑</span> ${t["click-hint"]}</div>`;
    return;
  }

  const s = activeSkill;
  const fg = s.dark ? "#1A1A1C" : "#fff"; // colore testo header
  const dmgs = [40, 55, 70, 85];           // valori danno decorativi

  panel.innerHTML = `<div class="moves-card">
    <div class="moves-header" style="background:${s.color};color:${fg}">
      <div>
        <div class="moves-type-label pokefont">TYPE · </div>
        <div class="moves-type-name display">${s.type}</div>
      </div>
      <div class="moves-pwr mono">PWR ${s.power}</div>
    </div>
    <ul class="moves-list body">
      ${s.moves.map((m, i) => `<li class="moves-item">
        <span><span class="moves-arrow pokefont" style="color:${s.color}">▶</span>${m}</span>
        <span class="moves-dmg">${dmgs[i]}</span>
      </li>`).join("")}
    </ul>
  </div>`;
}

/* ════════════════════════════════════════════════════════════
   RENDER PROJECTS — genera le card progetto nel DOM
   Legge l'array PROJECTS e il dizionario I18N per le descrizioni.
   Ogni card è un <a> che punta al repository GitHub (target _blank).
   Lo sfondo dell'area art usa un pattern diagonale CSS inline.
   ════════════════════════════════════════════════════════════ */
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  const t = I18N[currentLang];
  grid.innerHTML = PROJECTS.map(p => `
    <a class="project-card" href="${p.url}" target="_blank" rel="noreferrer">
      <div class="project-header" style="background:${p.color}">
        <span class="project-no">NO. ${p.id}</span>
        <span class="project-rarity">${p.rarity.toUpperCase()}</span>
      </div>
      <!-- Area arte: pattern diagonale con il colore del progetto + id in grande -->
      <div class="project-art" style="background:repeating-linear-gradient(135deg,${p.color}22 0 8px,transparent 8px 16px),#F8F4EC;color:${p.color}">${p.id}</div>
      <div class="project-body">
        <div class="project-type">${p.type.toUpperCase()} TYPE</div>
        <div class="project-name display">${p.name}</div>
        <p class="project-desc">${t["desc-" + p.id]}</p>
        <div class="project-tech">${p.tech.map(tt => `<span class="project-tech-tag">${tt}</span>`).join("")}</div>
        <div class="project-link">↗ ${t["view-repo"]}</div>
      </div>
    </a>`).join("");
}

/* ════════════════════════════════════════════════════════════
   I18N — cambio lingua al volo
   Aggiorna tutti gli elementi [data-i] nel DOM con i testi
   della lingua scelta, poi ri-renderizza le parti dinamiche
   (moves panel e progetti) che dipendono dalla lingua corrente.
   Gestisce anche il titolo contatti che richiede HTML interno.
   ════════════════════════════════════════════════════════════ */
function applyLang(lang) {
  currentLang = lang;
  const t = I18N[lang];

  // Aggiorna tutti gli elementi con data-i nel DOM
  document.querySelectorAll("[data-i]").forEach(el => {
    const key = el.dataset.i;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Segna il bottone lingua attivo
  document.querySelectorAll(".lang-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });

  // Il titolo Contact ha innerHTML con <br> e <span>, non può usare textContent
  const cTitle = document.querySelector(".contact-title");
  if (cTitle) {
    cTitle.innerHTML = lang === "it"
      ? `Punto di<br>Contatto<span class="dot">.</span>`
      : `Contact<br>Point<span class="dot">.</span>`;
  }

  // Ri-renderizza le parti dinamiche che contengono testi tradotti
  renderMovesPanel();
  renderProjects();
}

/* ════════════════════════════════════════════════════════════
   SECTION SWITCHING — navigazione tra le sezioni della SPA
   goTo(secId) nasconde la sezione corrente, mostra quella target,
   aggiorna lo stato attivo nella nav e innesca reveal + stat bar.
   ════════════════════════════════════════════════════════════ */
function goTo(secId) {
  if (secId === activeSec) return; // nessuna azione se già nella sezione
  activeSec = secId;

  // Nasconde tutte le sezioni e attiva solo quella target
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  const target = document.getElementById("sec-" + secId);
  target.classList.add("active");

  // Aggiorna la nav: aggiunge "active" al bottone corrispondente e mostra/nasconde la freccia
  document.querySelectorAll(".nav-btn").forEach(b => {
    const isActive = b.dataset.sec === secId;
    b.classList.toggle("active", isActive);
    b.querySelector(".nav-arrow").style.opacity = isActive ? "1" : "0";
  });

  // La sezione hero ha le stat bar animate: le ripristina a 0 e le riavvia
  if (secId === "hero") animateStatBars();

  // Innesca il reveal degli elementi nella nuova sezione (usato rAF per dare tempo al display:block)
  requestAnimationFrame(() => revealInSection(target));

  // Chiude la sidebar su mobile se era aperta
  closeMobileSidebar();
}

/* ════════════════════════════════════════════════════════════
   STAT BAR ANIMATION — anima le barre della stat card nella Hero
   Resetta ogni barra a width:0 poi, dopo due frame (doppio rAF),
   la porta al valore percentuale definito in data-val.
   Il doppio requestAnimationFrame è necessario per far partire
   la transizione CSS dopo il reset a 0 nella stessa paint.
   ════════════════════════════════════════════════════════════ */
function animateStatBars() {
  document.querySelectorAll(".stat-bar-fill").forEach(bar => {
    const val = bar.dataset.val;
    bar.style.width = "0";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => { bar.style.width = val + "%"; });
    });
  });
}

/* ════════════════════════════════════════════════════════════
   SCROLL / INTERSECTION REVEAL
   Osserva con IntersectionObserver gli elementi .reveal nella sezione
   appena attivata. Quando entrano nel viewport aggiunge la classe .in
   che innesca la transizione CSS (fade + slide verso l'alto).
   Ogni elemento viene rimosso dall'observer dopo la prima apparizione.
   ════════════════════════════════════════════════════════════ */
function revealInSection(sec) {
  const items = sec.querySelectorAll(".reveal:not(.in)");
  if (!items.length) return;

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in"); // attiva la transizione CSS
        obs.unobserve(e.target);      // smette di osservare questo elemento
      }
    });
  }, { threshold: 0.1 }); // si attiva quando almeno il 10% dell'elemento è visibile

  items.forEach(el => io.observe(el));
}

/* ════════════════════════════════════════════════════════════
   HERO CURSOR GLOW — alone rosso che segue il mouse
   Aggiorna left/top del div #heroGlow in base alla posizione
   del cursore relativa al bounding rect della sezione hero.
   ════════════════════════════════════════════════════════════ */
document.getElementById("sec-hero").addEventListener("mousemove", e => {
  const glow = document.getElementById("heroGlow");
  const rect = e.currentTarget.getBoundingClientRect();
  glow.style.left = (e.clientX - rect.left) + "px";
  glow.style.top  = (e.clientY - rect.top)  + "px";
});

/* ════════════════════════════════════════════════════════════
   MOBILE SIDEBAR — hamburger menu
   closeMobileSidebar() rimuove la classe "open" da sidebar,
   burger e overlay, chiudendo il drawer.
   Il click sul burger la apre/chiude con toggle.
   Il click sull'overlay chiama direttamente close.
   ════════════════════════════════════════════════════════════ */
function closeMobileSidebar() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("burger").classList.remove("open");
  document.getElementById("overlay").classList.remove("open");
}

// Toggle apertura/chiusura al click sul burger
document.getElementById("burger").addEventListener("click", () => {
  const open = document.getElementById("sidebar").classList.toggle("open");
  document.getElementById("burger").classList.toggle("open", open);
  document.getElementById("overlay").classList.toggle("open", open);
});

// Chiude la sidebar cliccando sull'overlay semitrasparente
document.getElementById("overlay").addEventListener("click", closeMobileSidebar);

/* ════════════════════════════════════════════════════════════
   CONTACT FORM — gestione submit
   Previene il comportamento default del form (reload pagina),
   nasconde il form e mostra il messaggio di successo animato.
   Non invia effettivamente dati a un server (solo UI).
   ════════════════════════════════════════════════════════════ */
function handleForm(e) {
  e.preventDefault(); // blocca il reload
  document.getElementById("contactForm").style.display = "none";
  document.getElementById("formSuccess").classList.add("show"); // mostra il feedback
}

/* ════════════════════════════════════════════════════════════
   INIT — avvio dell'applicazione
   Collega i listener di navigazione e lingua, poi esegue
   il render iniziale di tutte le parti dinamiche.
   ════════════════════════════════════════════════════════════ */

// Aggiunge il listener goTo() a ogni bottone della nav
document.getElementById("nav").querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => goTo(btn.dataset.sec));
});

// Aggiunge il listener applyLang() ai bottoni IT / EN
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => applyLang(btn.dataset.lang));
});

// Render iniziale: tabella skill, card progetti, testi in italiano
renderSkills();
renderProjects();
applyLang("it");

// Avvia l'animazione delle stat bar sulla Hero (sezione di default)
animateStatBars();

// Innesca il reveal degli elementi visibili nella Hero al caricamento
revealInSection(document.getElementById("sec-hero"));
