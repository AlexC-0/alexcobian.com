(function () {
  const translations = {
    es: {
      pageTitle: "Alex Cobian | Desarrollador software",
      pageDescription: "Portfolio profesional de Alex Cobian: desarrollo de software, soluciones web, competencias DAW y aprendizaje en Salesforce.",
      ogTitle: "Alex Cobian | Desarrollador software",
      ogDescription: "Portfolio profesional de Alex Cobian: desarrollo de software, soluciones web, competencias DAW y aprendizaje en Salesforce.",
      navCompetencies: "Competencias",
      navStack: "Stack",
      navProjects: "Presencia",
      languageLabel: "Idioma:",
      languageSelectAria: "Seleccionar idioma",
      languageOptionEs: "Espanol",
      languageOptionEn: "Ingles",
      eyebrow: "Portfolio profesional",
      heroTitle: "Desarrollador software con foco tecnico en soluciones full stack",
      heroBody: "Desarrollador software con conocimientos en HTML, CSS, Java, JavaScript, PHP, Node.js y SQL para aplicaciones web. Actualmente, aplico en mi puesto de trabajo el desarrollo de software en tareas de frontend, backend, APIs, datos e incidencias. Convirtiendo problemas propios de mi puesto en soluciones concretas y adaptadas. En paralelo sigo profundizando en el ecosistema Salesforce y en Apex a traves de Trailhead.",
      ctaGithub: "Ver GitHub",
      ctaLinkedin: "Ver LinkedIn",
      ctaTrailhead: "Ver Salesforce Trailhead",
      photoFallback: "Coloca tu foto en assets/alex-profile-20260306.jpg",
      competenciesTitle: "Competencias tecnicas (DAW)",
      competencyFrontendTitle: "Desarrollo Frontend",
      competencyFrontendBody: "Construccion de interfaces web con HTML, CSS y JavaScript, incluyendo React, manipulacion del DOM, formularios, eventos, interacciones y peticiones asincronas.",
      competencyBackendTitle: "Backend y APIs",
      competencyBackendBody: "Programacion de logica de servidor con PHP y Node.js, estructura de APIs, analisis de incidencias, validacion de datos y manejo de errores.",
      competencyDataTitle: "Bases de datos",
      competencyDataBody: "Modelado, consultas y gestion de datos con MySQL, SQL Server y Access, prestando atencion a filtros, valores nulos, estados y datos reales.",
      competencyDeployTitle: "Entornos y despliegue",
      competencyDeployBody: "Configuracion de entornos con XAMPP, Apache, Nginx y Docker, revisando rutas, variables, permisos y diferencias entre local y servidor.",
      competencyQualityTitle: "Buenas practicas y criterio tecnico",
      competencyQualityBody: "Organizacion de codigo, separacion de responsabilidades, lectura de tareas ambiguas y uso de herramientas de IA como apoyo para revisar y optimizar soluciones.",
      stackTitle: "Stack y herramientas",
      projectsTitle: "Presencia profesional",
      projectsBody: "Canales donde presento mi perfil, mi codigo y mi aprendizaje en Salesforce.",
      tagCode: "Codigo",
      tagProfile: "Perfil",
      tagLearning: "Aprendizaje",
      projectGithubBody: "Repositorios y evolucion de mis proyectos tecnicos.",
      projectLinkedinBody: "Resumen profesional y red de contactos.",
      projectTrailheadBody: "Perfil activo en Salesforce Trailhead, centrado en aprendizaje practico del ecosistema y APEX.",
      footerText: "(c) 2026 Alex Cobian | Portfolio profesional",
      scrollTopLabel: "Volver arriba"
    },
    en: {
      pageTitle: "Alex Cobian | Software Developer",
      pageDescription: "Professional portfolio of Alex Cobian: software development, web solutions, DAW skills, and Salesforce learning.",
      ogTitle: "Alex Cobian | Software Developer",
      ogDescription: "Professional portfolio of Alex Cobian: software development, web solutions, DAW skills, and Salesforce learning.",
      navCompetencies: "Skills",
      navStack: "Stack",
      navProjects: "Presence",
      languageLabel: "Language:",
      languageSelectAria: "Select language",
      languageOptionEs: "Spanish",
      languageOptionEn: "English",
      eyebrow: "Professional portfolio",
      heroTitle: "Software Developer focused on full stack solutions",
      heroBody: "Software developer with knowledge of HTML, CSS, Java, JavaScript, PHP, Node.js, and SQL for web applications. I currently apply software development in my role across frontend, backend, APIs, data, and issue-resolution tasks, turning role-specific problems into concrete and tailored solutions. In parallel, I continue deepening my Salesforce ecosystem and Apex knowledge through Trailhead.",
      ctaGithub: "View GitHub",
      ctaLinkedin: "View LinkedIn",
      ctaTrailhead: "View Salesforce Trailhead",
      photoFallback: "Place your photo in assets/alex-profile-20260306.jpg",
      competenciesTitle: "Technical skills (DAW)",
      competencyFrontendTitle: "Frontend Development",
      competencyFrontendBody: "Building web interfaces with HTML, CSS, and JavaScript, including React, DOM manipulation, forms, events, interactions, and asynchronous requests.",
      competencyBackendTitle: "Backend and APIs",
      competencyBackendBody: "Server-side programming with PHP and Node.js, API structure, issue analysis, data validation, and error handling.",
      competencyDataTitle: "Databases",
      competencyDataBody: "Data modeling, querying, and management with MySQL, SQL Server, and Access, paying attention to filters, null values, states, and real-world data.",
      competencyDeployTitle: "Environments and deployment",
      competencyDeployBody: "Environment setup with XAMPP, Apache, Nginx, and Docker, reviewing paths, variables, permissions, and differences between local and server environments.",
      competencyQualityTitle: "Best practices and technical judgment",
      competencyQualityBody: "Code organization, separation of responsibilities, reading ambiguous tasks, and using AI tools as support for reviewing and optimizing solutions.",
      stackTitle: "Stack and tools",
      projectsTitle: "Professional presence",
      projectsBody: "Places where I present my profile, code, and Salesforce learning.",
      tagCode: "Code",
      tagProfile: "Profile",
      tagLearning: "Learning",
      projectGithubBody: "Repositories and the evolution of my technical projects.",
      projectLinkedinBody: "Professional summary and network.",
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

  function getStoredLanguage() {
    try {
      return localStorage.getItem("portfolio-language");
    } catch (error) {
      return null;
    }
  }

  function setStoredLanguage(language) {
    try {
      localStorage.setItem("portfolio-language", language);
    } catch (error) {
      // Storage can be unavailable in private or restricted browsing modes.
    }
  }

  function updateMeta(language) {
    const dict = translations[language] || translations.es;
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
    const activeLanguage = translations[language] ? language : "es";
    const dict = translations[activeLanguage];

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

    document.documentElement.lang = activeLanguage;
    updateMeta(activeLanguage);
    setStoredLanguage(activeLanguage);
  }

  function setupLanguageSwitcher() {
    const select = document.querySelector("#language-select");
    if (!select) return;

    const saved = getStoredLanguage();
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
