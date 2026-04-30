/* ════════════════════════════════════════════
   DATA
════════════════════════════════════════════ */
const I18N = {
  it: {
    "role-sidebar":    "Studente di Informatica & Sviluppatore · Bari, IT",
    "location":        "BARI, ITALIA",
    "about":           "Studente di Informatica all'Università di Bari, con un diploma da Perito Informatico. Mi muovo tra C, C++, Java e Python, ma resto curioso davanti a tutto ciò che si può programmare. Costruisco progetti, imparo dagli errori, e ogni bug sconfitto è un punto esperienza guadagnato.",
    "nav-home":        "Home",
    "nav-about":       "Chi sono",
    "nav-edu":         "Istruzione",
    "nav-skills":      "Skill",
    "nav-projects":    "Progetti",
    "nav-contact":     "Contatti",
    "sec-about":       "PROFILO ALLENATORE",
    "sec-about-title": "Profilo Allenatore",
    "sec-edu":         "BADGE OTTENUTI",
    "sec-edu-title":   "Badge Ottenuti",
    "sec-skills":      "TIPI & MOSSE",
    "sec-skills-title":"Tipi & Mosse",
    "skills-sub":      "Le mie skill come tipi Pokémon. Ogni tipo ha le sue mosse.",
    "click-hint":      "Clicca un tipo per vedere le mosse",
    "sec-projects":    "POKÉDEX DEI PROGETTI",
    "sec-projects-title":"Pokédex dei Progetti",
    "projects-sub":    "Una collezione di creature digitali catturate su GitHub.",
    "view-repo":       "Vedi repository",
    "sec-contact":     "PUNTO DI CONTATTO",
    "contact-title":   "Punto di Contatto",
    "contact-copy":    "Pronto per una nuova sfida? Mandami un messaggio.",
    "catch-em":        "Acchiappali tutti.",
    "fact-base":       "BASE",
    "fact-status":     "STATUS",
    "fact-status-val": "Studente · 2° anno",
    "fact-langs":      "LINGUE",
    "fact-avail":      "DISPONIBILITÀ",
    "fact-avail-val":  "Aperto a stage",
    "present":         "Presente",
    "uni-sub":         "Tecniche per la Produzione del Software",
    "itis-title":      "Istituto Tecnico Informatico",
    "itis-sub":        "Diploma di Perito Informatico",
    "form-name":       "NOME",
    "form-email":      "EMAIL",
    "form-msg":        "MESSAGGIO",
    "form-send":       "Invia messaggio",
    "form-ok":         "Messaggio inviato! Ti rispondo presto.",
    "desc-001":        "Il mio portfolio personale a tema Pokémon.",
    "desc-002":        "Tracker per collezione di carte Yu-Gi-Oh!. Lavoro di team.",
    "desc-003":        "Esonero universitario di Tecniche per la Produzione del Software.",
  },
  en: {
    "role-sidebar":    "CS Student & Developer · Bari, IT",
    "location":        "BARI, ITALY",
    "about":           "CS student at the University of Bari with a technical-institute diploma in Computer Science. I move between C, C++, Java and Python, but stay curious about anything that can be programmed. I build projects, learn from mistakes, and treat every defeated bug as XP earned.",
    "nav-home":        "Home",
    "nav-about":       "About",
    "nav-edu":         "Education",
    "nav-skills":      "Skills",
    "nav-projects":    "Projects",
    "nav-contact":     "Contact",
    "sec-about":       "TRAINER PROFILE",
    "sec-about-title": "Trainer Profile",
    "sec-edu":         "BADGES EARNED",
    "sec-edu-title":   "Badges Earned",
    "sec-skills":      "TYPES & MOVES",
    "sec-skills-title":"Types & Moves",
    "skills-sub":      "My skills as Pokémon types. Each type knows its moves.",
    "click-hint":      "Click a type to reveal its moves",
    "sec-projects":    "PROJECT POKÉDEX",
    "sec-projects-title":"Project Pokédex",
    "projects-sub":    "A collection of digital creatures captured on GitHub.",
    "view-repo":       "View repo",
    "sec-contact":     "CONTACT POINT",
    "contact-title":   "Contact Point",
    "contact-copy":    "Ready for a new challenge? Drop me a line.",
    "catch-em":        "Gotta catch 'em all.",
    "fact-base":       "HOME",
    "fact-status":     "STATUS",
    "fact-status-val": "Student · 2nd year",
    "fact-langs":      "LANGUAGES",
    "fact-avail":      "AVAILABILITY",
    "fact-avail-val":  "Open to internships",
    "present":         "Present",
    "uni-sub":         "Software Production Techniques",
    "itis-title":      "Technical Institute (ITIS)",
    "itis-sub":        "CS Diploma",
    "form-name":       "NAME",
    "form-email":      "EMAIL",
    "form-msg":        "MESSAGE",
    "form-send":       "Send message",
    "form-ok":         "Message sent! I'll reply soon.",
    "desc-001":        "My personal Pokémon-themed portfolio.",
    "desc-002":        "Yu-Gi-Oh! card collection tracker. Team project.",
    "desc-003":        "University coursework for Software Production Techniques.",
  },
};

const SKILLS = [
  { id:"c",       name:"C",          type:"Metal", color:"#7A8794", glyph:"Me", power:92, moves:["Pointer Strike","Memory Manage","Bit Twiddle","Stack Smash"] },
  { id:"cpp",     name:"C++",        type:"Steel", color:"#5C6B7A", glyph:"St", power:90, moves:["Template Forge","RAII Guard","STL Combo","Operator Overload"] },
  { id:"arduino", name:"Arduino",    type:"Spark", color:"#00A19A", glyph:"Sk", power:70, moves:["Pin Pulse","Serial Echo","Sensor Read","PWM Wave"] },
  { id:"java",    name:"Java",       type:"Brew",  color:"#B5651D", glyph:"Bw", power:86, moves:["JVM Leap","Generics Cast","Stream Flow","Garbage Sweep"] },
  { id:"html",    name:"HTML",       type:"Frame", color:"#E34C26", glyph:"Fr", power:60, moves:["Tag Wrap","Semantic Bind","Form Submit","Anchor Link"] },
  { id:"css",     name:"CSS",        type:"Aura",  color:"#264DE4", glyph:"Au", power:68, moves:["Flex Storm","Grid Lock","Cascade Wave","Pseudo Strike"] },
  { id:"js",      name:"JavaScript", type:"Bolt",  color:"#F7DF1E", glyph:"Bo", power:84, moves:["Async Burst","Closure Trap","Event Loop","DOM Smash"], dark:true },
  { id:"sql",     name:"SQL",        type:"Vault", color:"#336791", glyph:"Vt", power:78, moves:["Join Combo","Index Seek","Where Filter","Group Crush"] },
  { id:"py",      name:"Python",     type:"Coil",  color:"#3776AB", glyph:"Co", power:86, moves:["List Comp","Zen Strike","Lambda Shot","Pip Install"] },
];

const PROJECTS = [
  { id:"001", name:"Portfolio",        url:"https://github.com/Gianni1707/Portfolio",                                                          tech:["HTML","CSS","JS"], rarity:"Common", type:"Frame", color:"#E34C26" },
  { id:"002", name:"YGO Card Tracker", url:"https://github.com/ToninoSas/ygo_card_tracker",                                                   tech:["Python","SQL"],    rarity:"Rare",   type:"Coil",  color:"#3776AB" },
  { id:"003", name:"Barbarossa — TCP", url:"https://github.com/ChrisRedBeard/Barbarossa_825007_Benefico_827413_esonero_tcp",                   tech:["Java"],            rarity:"Epic",   type:"Brew",  color:"#B5651D" },
];

/* ════════════════════════════════════════════
   STATE
════════════════════════════════════════════ */
let currentLang = "it";
let activeSec   = "hero";
let activeSkill = null;

/* ════════════════════════════════════════════
   RENDER SKILLS
════════════════════════════════════════════ */
function renderSkills() {
  const table = document.getElementById("skillTable");
  table.innerHTML = SKILLS.map((s, i) => {
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

function selectSkill(id) {
  activeSkill = SKILLS.find(s => s.id === id);
  renderSkills();
  renderMovesPanel();
}

function renderMovesPanel() {
  const panel = document.getElementById("movesPanel");
  const t = I18N[currentLang];
  if (!activeSkill) {
    panel.innerHTML = `<div class="moves-empty body"><span class="hint-arrow">↑</span> ${t["click-hint"]}</div>`;
    return;
  }
  const s = activeSkill;
  const fg = s.dark ? "#1A1A1C" : "#fff";
  const dmgs = [40, 55, 70, 85];
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

/* ════════════════════════════════════════════
   RENDER PROJECTS
════════════════════════════════════════════ */
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  const t = I18N[currentLang];
  grid.innerHTML = PROJECTS.map(p => `
    <a class="project-card" href="${p.url}" target="_blank" rel="noreferrer">
      <div class="project-header" style="background:${p.color}">
        <span class="project-no">NO. ${p.id}</span>
        <span class="project-rarity">${p.rarity.toUpperCase()}</span>
      </div>
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

/* ════════════════════════════════════════════
   I18N
════════════════════════════════════════════ */
function applyLang(lang) {
  currentLang = lang;
  const t = I18N[lang];

  document.querySelectorAll("[data-i]").forEach(el => {
    const key = el.dataset.i;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll(".lang-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });

  const cTitle = document.querySelector(".contact-title");
  if (cTitle) {
    cTitle.innerHTML = lang === "it"
      ? `Punto di<br>Contatto<span class="dot">.</span>`
      : `Contact<br>Point<span class="dot">.</span>`;
  }

  renderMovesPanel();
  renderProjects();
}

/* ════════════════════════════════════════════
   SECTION SWITCHING
════════════════════════════════════════════ */
function goTo(secId) {
  if (secId === activeSec) return;
  activeSec = secId;

  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  const target = document.getElementById("sec-" + secId);
  target.classList.add("active");

  document.querySelectorAll(".nav-btn").forEach(b => {
    const isActive = b.dataset.sec === secId;
    b.classList.toggle("active", isActive);
    b.querySelector(".nav-arrow").style.opacity = isActive ? "1" : "0";
  });

  if (secId === "hero") animateStatBars();

  requestAnimationFrame(() => revealInSection(target));
  closeMobileSidebar();
}

function animateStatBars() {
  document.querySelectorAll(".stat-bar-fill").forEach(bar => {
    const val = bar.dataset.val;
    bar.style.width = "0";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => { bar.style.width = val + "%"; });
    });
  });
}

/* ════════════════════════════════════════════
   SCROLL / INTERSECTION REVEAL
════════════════════════════════════════════ */
function revealInSection(sec) {
  const items = sec.querySelectorAll(".reveal:not(.in)");
  if (!items.length) return;
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  items.forEach(el => io.observe(el));
}

/* ════════════════════════════════════════════
   HERO CURSOR GLOW
════════════════════════════════════════════ */
document.getElementById("sec-hero").addEventListener("mousemove", e => {
  const glow = document.getElementById("heroGlow");
  const rect = e.currentTarget.getBoundingClientRect();
  glow.style.left = (e.clientX - rect.left) + "px";
  glow.style.top  = (e.clientY - rect.top)  + "px";
});

/* ════════════════════════════════════════════
   MOBILE SIDEBAR
════════════════════════════════════════════ */
function closeMobileSidebar() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("burger").classList.remove("open");
  document.getElementById("overlay").classList.remove("open");
}

document.getElementById("burger").addEventListener("click", () => {
  const open = document.getElementById("sidebar").classList.toggle("open");
  document.getElementById("burger").classList.toggle("open", open);
  document.getElementById("overlay").classList.toggle("open", open);
});

document.getElementById("overlay").addEventListener("click", closeMobileSidebar);

/* ════════════════════════════════════════════
   CONTACT FORM
════════════════════════════════════════════ */
function handleForm(e) {
  e.preventDefault();
  document.getElementById("contactForm").style.display = "none";
  document.getElementById("formSuccess").classList.add("show");
}

/* ════════════════════════════════════════════
   INIT
════════════════════════════════════════════ */
document.getElementById("nav").querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => goTo(btn.dataset.sec));
});

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => applyLang(btn.dataset.lang));
});

renderSkills();
renderProjects();
applyLang("it");
animateStatBars();
revealInSection(document.getElementById("sec-hero"));
