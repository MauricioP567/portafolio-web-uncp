/* ============================================
   DATOS DEL CURSO – Fácil de editar
============================================ */

const weeks = [
  {
    id: 1,
    title: "Fundamentos web y herramientas",
    status: "completed",
    description: "Introducción al ecosistema web y herramientas básicas de desarrollo.",
    objective: "Comprender la arquitectura cliente-servidor y configurar el entorno de trabajo.",
    concepts: ["Cliente-servidor", "HTTP", "Navegadores", "Editores de código", "Git básico"],
    activities: ["Configuración del entorno", "Primer repositorio en GitHub"],
    result: "Entorno de desarrollo listo y primer commit realizado.",
    learning: "Aprendí la importancia de versionar el código desde el inicio."
  },
  {
    id: 2,
    title: "HTML, XML, CSS y diseño adaptable",
    status: "completed",
    description: "Estructura semántica, estilos y fundamentos de diseño responsive.",
    objective: "Crear páginas bien estructuradas y adaptables a distintos dispositivos.",
    concepts: ["HTML5 semántico", "CSS básico y avanzado", "Media queries", "Flexbox", "XML"],
    activities: ["Página estática responsive", "Práctica de selectores CSS"],
    result: "Primera página web responsive funcional.",
    learning: "Entendí cómo separar estructura, presentación y comportamiento."
  },
  {
    id: 3,
    title: "Bootstrap y Tailwind CSS",
    status: "completed",
    description: "Frameworks CSS para acelerar el desarrollo de interfaces.",
    objective: "Utilizar sistemas de diseño predefinidos y utility-first.",
    concepts: ["Grid de Bootstrap", "Componentes", "Utility classes de Tailwind", "Personalización"],
    activities: ["Replicar layout con Bootstrap", "Ejercicio con Tailwind"],
    result: "Interfaces construidas rápidamente con ambos frameworks.",
    learning: "Aprendí cuándo conviene usar un framework y cuándo CSS puro."
  },
  {
    id: 4,
    title: "JavaScript, TypeScript, DOM y Canvas",
    status: "completed",
    description: "Programación del lado del cliente y manipulación del DOM.",
    objective: "Dominar la interactividad básica y el tipado estático.",
    concepts: ["Variables y funciones", "DOM", "Eventos", "Canvas API", "TypeScript básico"],
    activities: ["Manipulación del DOM", "Dibujo básico con Canvas"],
    result: "Scripts interactivos y primera experiencia con TypeScript.",
    learning: "Comprendí la diferencia entre JavaScript dinámico y tipado."
  },
  {
    id: 5,
    title: "Framework JS y componentes",
    status: "completed",
    description: "Introducción a frameworks modernos y arquitectura basada en componentes.",
    objective: "Entender el paradigma de componentes y el flujo de datos.",
    concepts: ["Componentes", "Props", "Estado", "Ciclo de vida", "JSX / templates"],
    activities: ["Creación de componentes reutilizables"],
    result: "Primera aplicación con componentes.",
    learning: "Aprendí a pensar la interfaz como piezas independientes."
  },
  {
    id: 6,
    title: "Eventos, renderizado y APIs",
    status: "completed",
    description: "Manejo de eventos, renderizado condicional y consumo de APIs.",
    objective: "Conectar la interfaz con datos externos.",
    concepts: ["Event handling", "Renderizado condicional", "Fetch API", "JSON", "Async/Await"],
    activities: ["Consumo de API pública", "Lista dinámica de datos"],
    result: "Aplicación que muestra datos en tiempo real desde una API.",
    learning: "Entendí el flujo asíncrono y el manejo de estados de carga."
  },
  {
    id: 7,
    title: "Hooks",
    status: "completed",
    description: "Uso de hooks para gestionar estado y efectos secundarios.",
    objective: "Aplicar hooks para lógica reutilizable y efectos.",
    concepts: ["useState", "useEffect", "Custom hooks", "Dependencias"],
    activities: ["Refactorización con hooks", "Manejo de efectos"],
    result: "Componentes más limpios y con lógica separada.",
    learning: "Los hooks simplifican el manejo de estado y efectos."
  },
  // Semanas 8-16 (placeholders)
  ...Array.from({ length: 9 }, (_, i) => ({
    id: i + 8,
    title: `Semana ${i + 8}`,
    status: "pending",
    description: "Contenido pendiente de registrar.",
    objective: "Por completar",
    concepts: [],
    activities: [],
    result: "Pendiente",
    learning: "Pendiente"
  }))
];

const technologies = [
  {
    category: "Estructura web",
    items: [
      { name: "HTML5", description: "Estructura semántica de documentos" },
      { name: "XML", description: "Intercambio y validación de datos" }
    ]
  },
  {
    category: "Diseño y estilos",
    items: [
      { name: "CSS3", description: "Estilos, animaciones y layout" },
      { name: "Flexbox & Grid", description: "Distribución responsive" },
      { name: "Bootstrap", description: "Framework de componentes" },
      { name: "Tailwind CSS", description: "Utility-first CSS" }
    ]
  },
  {
    category: "Programación",
    items: [
      { name: "JavaScript", description: "Lógica del lado del cliente" },
      { name: "TypeScript", description: "Tipado estático sobre JS" },
      { name: "DOM API", description: "Manipulación del documento" },
      { name: "Canvas API", description: "Gráficos e interactividad" }
    ]
  },
  {
    category: "Frameworks y patrones",
    items: [
      { name: "Componentes", description: "Arquitectura basada en piezas reutilizables" },
      { name: "Hooks", description: "Estado y efectos en componentes funcionales" }
    ]
  },
  {
    category: "APIs y datos",
    items: [
      { name: "Fetch API", description: "Consumo de servicios REST" },
      { name: "JSON", description: "Formato de intercambio de datos" }
    ]
  },
  {
    category: "Control de versiones",
    items: [
      { name: "Git", description: "Control de versiones local" },
      { name: "GitHub", description: "Repositorios y colaboración" }
    ]
  }
];



const projects = [
  {
    id: 1,
    title: "Mesa de Partes - OFICRI PNP Huancayo",
    description: "Apoyo en el diseño y lógica para el desarrollo de una mesa de partes digital destinada a la Oficina de Criminalística de la Policía Nacional del Perú - Huancayo. El sistema facilita el registro, seguimiento y gestión de documentos y trámites internos. Realizado como parte de mi proyección social.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "assets/images/LogoPNP.jpg",
    github: "https://github.com/PNP-MESA-DE-PARTES/frontend-mesa-de-partes",
    demo: "",
    week: 0,
    highlight: true
  }
];


/* ============================================
   RENDERIZADO
============================================ */

const weeksGrid = document.getElementById("weeksGrid");
const techCategories = document.getElementById("techCategories");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");
const modalOverlay = document.getElementById("modalOverlay");
const backToTop = document.getElementById("backToTop");
const searchWeeks = document.getElementById("searchWeeks");
const filterWeekStatus = document.getElementById("filterWeekStatus");

function renderWeeks(data = weeks) {
  weeksGrid.innerHTML = data
    .map(
      (w) => `
    <article class="week-card ${w.status}" data-id="${w.id}">
      <div class="week-number">SEMANA ${String(w.id).padStart(2, "0")}</div>
      <h3>${w.title}</h3>
      <p>${w.description}</p>
      <span class="week-status ${w.status}">
        ${w.status === "completed" ? "Completada" : "Pendiente"}
      </span>
    </article>
  `
    )
    .join("");

  document.querySelectorAll(".week-card").forEach((card) => {
    card.addEventListener("click", () => {
      const week = weeks.find((w) => w.id === Number(card.dataset.id));
      openWeekModal(week);
    });
  });
}

function openWeekModal(week) {
  modalBody.innerHTML = `
    <div class="modal-meta">SEMANA ${String(week.id).padStart(2, "0")} · ${week.status === "completed" ? "Completada" : "Pendiente"}</div>
    <h2>${week.title}</h2>
    <p>${week.description}</p>

    <h4>Objetivo de aprendizaje</h4>
    <p>${week.objective}</p>

    <h4>Conceptos estudiados</h4>
    <ul>${week.concepts.map((c) => `<li>${c}</li>`).join("") || "<li>Pendiente</li>"}</ul>

    <h4>Actividades realizadas</h4>
    <ul>${week.activities.map((a) => `<li>${a}</li>`).join("") || "<li>Pendiente</li>"}</ul>

    <h4>Resultado obtenido</h4>
    <p>${week.result}</p>

    <h4>Aprendizaje personal</h4>
    <p>${week.learning}</p>
  `;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

function renderTechnologies() {
  techCategories.innerHTML = technologies
    .map(
      (cat) => `
    <div class="tech-category">
      <h3>${cat.category}</h3>
      <div class="tech-list">
        ${cat.items
          .map(
            (t) => `
          <div class="tech-item">
            <strong>${t.name}</strong>
            <span>${t.description}</span>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `
    )
    .join("");
}


function renderProjects() {
  const projectsGrid = document.getElementById("projectsGrid");

  if (projects.length === 0) {
    projectsGrid.innerHTML = `
      <div class="empty-state">
        <p>Aún no se han registrado proyectos.</p>
        <span>Agrega proyectos en <code>js/main.js</code></span>
      </div>
    `;
    return;
  }

  projectsGrid.innerHTML = projects
    .map(
      (p) => `
      <article class="project-card">
        ${p.image ? `<img src="${p.image}" alt="${p.title}" class="project-image" />` : ""}
        <div class="project-content">
          <div class="project-week">Semana ${String(p.week).padStart(2, "0")}</div>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="project-tech">
            ${p.technologies.map((t) => `<span>${t}</span>`).join("")}
          </div>
          <div class="project-links">
            ${p.github ? `<a href="${p.github}" target="_blank">GitHub</a>` : ""}
            ${p.demo ? `<a href="${p.demo}" target="_blank">Demo</a>` : ""}
          </div>
        </div>
      </article>
    `
    )
    .join("");
}



/* ============================================
   FILTROS Y BÚSQUEDA
============================================ */

function applyWeekFilters() {
  const term = searchWeeks.value.toLowerCase().trim();
  const status = filterWeekStatus.value;

  let filtered = weeks;

  if (status === "completed") filtered = filtered.filter((w) => w.status === "completed");
  if (status === "pending") filtered = filtered.filter((w) => w.status === "pending");

  if (term) {
    filtered = filtered.filter(
      (w) =>
        w.title.toLowerCase().includes(term) ||
        w.description.toLowerCase().includes(term) ||
        String(w.id).includes(term)
    );
  }

  renderWeeks(filtered);
}

searchWeeks.addEventListener("input", applyWeekFilters);
filterWeekStatus.addEventListener("change", applyWeekFilters);

/* ============================================
   EVENTOS GENERALES
============================================ */

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) closeModal();
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ============================================
   INICIALIZACIÓN
============================================ */

renderWeeks();
renderTechnologies();
renderProjects();