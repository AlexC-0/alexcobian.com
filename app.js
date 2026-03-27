(function () {
  const translations = {
    es: {
      pageTitle: "Alex Cobian | Desarrollador Web",
      pageDescription: "Portfolio profesional de Alex Cobian: competencias tecnicas DAW, proyectos y presencia profesional.",
      ogTitle: "Alex Cobian | Desarrollador Web",
      ogDescription: "Portfolio profesional de Alex Cobian: competencias tecnicas DAW, proyectos y presencia profesional.",
      navCompetencies: "Competencias",
      navStack: "Stack",
      navProjects: "Proyectos",
      languageLabel: "Idioma:",
      languageSelectAria: "Seleccionar idioma",
      languageOptionEs: "Espanol",
      languageOptionEn: "Ingles",
      eyebrow: "Portfolio profesional",
      heroTitle: "Desarrollador Web con foco tecnico en desarrollo full stack",
      heroBody: "Desarrollador web con conocimientos en HTML, CSS, Java, JavaScript y SQL para aplicaciones web, junto con interes practico en el ecosistema Salesforce y sus soluciones cloud. Actualmente sigo profundizando en Apex a traves de Trailhead, donde participo de forma activa en la comunidad. Esa experiencia me ha permitido explorar de manera practica las posibilidades del entorno Salesforce.",
      ctaGithub: "Ver GitHub",
      ctaLinkedin: "Ver LinkedIn",
      ctaTrailhead: "Ver Salesforce Trailhead",
      photoFallback: "Coloca tu foto en assets/alex-profile-20260306.jpg",
      competenciesTitle: "Competencias tecnicas (DAW)",
      competencyFrontendTitle: "Desarrollo Frontend",
      competencyFrontendBody: "Construccion de interfaces web con HTML, CSS y JavaScript, incluyendo React para componentes y flujo moderno.",
      competencyBackendTitle: "Desarrollo Backend",
      competencyBackendBody: "Programacion de logica de servidor con PHP y Node.js, estructura de APIs y organizacion de codigo mantenible.",
      competencyDataTitle: "Bases de datos",
      competencyDataBody: "Modelado, consultas y gestion de datos con MySQL, SQL Server y Access.",
      competencyDeployTitle: "Entornos y despliegue",
      competencyDeployBody: "Configuracion de entornos con XAMPP, Apache y Nginx para desarrollo y pruebas de aplicaciones web.",
      stackTitle: "Stack y herramientas",
      projectsTitle: "Proyectos y presencia profesional",
      projectsBody: "Canales donde comparto codigo, progreso y trabajo en desarrollo.",
      tagCode: "Codigo",
      tagProfile: "Perfil",
      tagProject: "Proyecto",
      projectGithubBody: "Repositorios y evolucion de mis proyectos tecnicos.",
      projectLinkedinBody: "Resumen profesional y red de contactos.",
      projectPkxBody: "Proyecto web como muestra de producto y ejecucion tecnica.",
      projectTrailheadBody: "Perfil activo en Salesforce Trailhead, centrado en aprendizaje practico del ecosistema y APEX.",
      footerText: "(c) 2026 Alex Cobian | Portfolio profesional",
      scrollTopLabel: "Volver arriba"
    },
    en: {
      pageTitle: "Alex Cobian | Web Developer",
      pageDescription: "Professional portfolio of Alex Cobian: DAW technical skills, projects, and professional presence.",
      ogTitle: "Alex Cobian | Web Developer",
      ogDescription: "Professional portfolio of Alex Cobian: DAW technical skills, projects, and professional presence.",
      navCompetencies: "Skills",
      navStack: "Stack",
      navProjects: "Projects",
      languageLabel: "Language:",
      languageSelectAria: "Select language",
      languageOptionEs: "Spanish",
      languageOptionEn: "English",
      eyebrow: "Professional portfolio",
      heroTitle: "Web Developer focused on full stack development",
      heroBody: "Web developer with technical knowledge of HTML, CSS, Java, JavaScript, and SQL for web applications, along with a practical interest in the Salesforce ecosystem and its cloud solutions. I am currently deepening my Apex skills through Trailhead, where I actively take part in the community. That experience has allowed me to explore the possibilities of the Salesforce environment in a practical way.",
      ctaGithub: "View GitHub",
      ctaLinkedin: "View LinkedIn",
      ctaTrailhead: "View Salesforce Trailhead",
      photoFallback: "Place your photo in assets/alex-profile-20260306.jpg",
      competenciesTitle: "Technical skills (DAW)",
      competencyFrontendTitle: "Frontend Development",
      competencyFrontendBody: "Building web interfaces with HTML, CSS, and JavaScript, including React for component-based workflows and modern frontend development.",
      competencyBackendTitle: "Backend Development",
      competencyBackendBody: "Server-side programming with PHP and Node.js, API structure, and maintainable code organization.",
      competencyDataTitle: "Databases",
      competencyDataBody: "Data modeling, querying, and management with MySQL, SQL Server, and Access.",
      competencyDeployTitle: "Environments and deployment",
      competencyDeployBody: "Environment setup with XAMPP, Apache, and Nginx for development and testing of web applications.",
      stackTitle: "Stack and tools",
      projectsTitle: "Projects and professional presence",
      projectsBody: "Places where I share code, progress, and the work I am building.",
      tagCode: "Code",
      tagProfile: "Profile",
      tagProject: "Project",
      projectGithubBody: "Repositories and the evolution of my technical projects.",
      projectLinkedinBody: "Professional summary and network.",
      projectPkxBody: "Web project presented as a showcase of product thinking and technical execution.",
      projectTrailheadBody: "Active Salesforce Trailhead profile focused on practical learning across the ecosystem and APEX.",
      footerText: "(c) 2026 Alex Cobian | Professional portfolio",
      scrollTopLabel: "Back to top"
    }
  };

  function setupProfilePhoto() {
    const photoFigure = document.querySelector(".profile-photo");
    const photo = photoFigure ? photoFigure.querySelector("img") : null;
    if (!photoFigure || !photo) return;

    photo.addEventListener("load", function () {
      photoFigure.classList.remove("missing");
    });

    photo.addEventListener("error", function () {
      photo.remove();
      photoFigure.classList.add("missing");
    });
  }

  function setupScrollTop() {
    const button = document.querySelector(".scroll-top");
    if (!button) return;

    const threshold = 280;

    function toggleVisibility() {
      if (window.scrollY > threshold) {
        button.classList.add("is-visible");
      } else {
        button.classList.remove("is-visible");
      }
    }

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();

    button.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function updateMeta(language) {
    const dict = translations[language];
    document.title = dict.pageTitle;

    const description = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    const ogLocale = document.querySelector('meta[property="og:locale"]');

    if (description) description.setAttribute("content", dict.pageDescription);
    if (ogTitle) ogTitle.setAttribute("content", dict.ogTitle);
    if (ogDescription) ogDescription.setAttribute("content", dict.ogDescription);
    if (twitterTitle) twitterTitle.setAttribute("content", dict.ogTitle);
    if (twitterDescription) twitterDescription.setAttribute("content", dict.ogDescription);
    if (ogLocale) ogLocale.setAttribute("content", language === "es" ? "es_ES" : "en_US");
  }

  function applyLanguage(language) {
    const dict = translations[language] || translations.es;

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      const key = node.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        node.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (node) {
      const key = node.dataset.i18nAriaLabel;
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        node.setAttribute("aria-label", dict[key]);
      }
    });

    document.querySelectorAll("[data-i18n-title]").forEach(function (node) {
      const key = node.dataset.i18nTitle;
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        node.setAttribute("title", dict[key]);
      }
    });

    document.documentElement.lang = language;
    updateMeta(language);
    localStorage.setItem("portfolio-language", language);
  }

  function setupLanguageSwitcher() {
    const select = document.querySelector("#language-select");
    if (!select) return;

    const saved = localStorage.getItem("portfolio-language");
    const browserLanguage = navigator.language && navigator.language.toLowerCase().startsWith("en") ? "en" : "es";
    const initialLanguage = saved && translations[saved] ? saved : browserLanguage;

    select.value = initialLanguage;
    applyLanguage(initialLanguage);

    select.addEventListener("change", function (event) {
      applyLanguage(event.target.value);
    });
  }

  function setupAnchorOffset() {
    const header = document.querySelector(".topbar");
    const root = document.documentElement;

    function setOffset() {
      if (!header || window.matchMedia("(max-width: 760px)").matches) {
        root.style.setProperty("--anchor-offset", "28px");
        document.body.classList.add("menu-offset-ready");
        return;
      }

      const offset = Math.ceil(header.getBoundingClientRect().height + 34);
      root.style.setProperty("--anchor-offset", offset + "px");
      document.body.classList.add("menu-offset-ready");
    }

    window.addEventListener("resize", setOffset);
    window.addEventListener("load", setOffset);
    setOffset();
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupProfilePhoto();
    setupScrollTop();
    setupLanguageSwitcher();
    setupAnchorOffset();
  });
})();
