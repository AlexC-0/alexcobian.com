(function () {
  const translations = {
    es: {
      pageTitle: "Alex Cobián Benito | Desarrollador de Aplicaciones Web y Software",
      pageDescription: "Portfolio profesional de Alex Cobián Benito: desarrollo de aplicaciones web, soluciones full stack, competencias DAW, automatización con IA y aprendizaje en Salesforce.",
      ogTitle: "Alex Cobián Benito | Desarrollador de Aplicaciones Web y Software",
      ogDescription: "Portfolio profesional de Alex Cobián Benito: desarrollo de aplicaciones web, soluciones full stack, competencias DAW, automatización con IA y aprendizaje en Salesforce.",
      navCompetencies: "Competencias",
      navStack: "Stack",
      navProjects: "Presencia",
      languageLabel: "Idioma:",
      languageSelectAria: "Seleccionar idioma",
      languageOptionEs: "Espanol",
      languageOptionEn: "Ingles",
      eyebrow: "Portfolio profesional",
      heroTitle: "Desarrollador de Aplicaciones Web y Software",
      heroBody: "Soy desarrollador de aplicaciones web y software, formado en DAW y acostumbrado a trabajar con problemas reales: interfaces que tienen que responder bien, APIs que deben ser claras, datos que no siempre llegan perfectos e incidencias que obligan a seguir el flujo completo antes de tocar codigo. Me interesa construir soluciones utiles, mantenibles y con criterio, apoyandome en tecnologias web, bases de datos, Git y herramientas de IA. Ademas, sigo ampliando mi perfil en Salesforce y Apex a traves de Trailhead.",
      ctaGithub: "Ver GitHub",
      ctaLinkedin: "Ver LinkedIn",
      ctaTrailhead: "Ver Salesforce Trailhead",
      ctaCv: "Descargar CV",
      photoFallback: "Coloca tu foto en assets/alex-cobian-benito-profile-20260904.jpg",
      competenciesTitle: "Competencias tecnicas",
      competencyFrontendTitle: "Desarrollo Frontend",
      competencyFrontendBody: "Construccion de interfaces web con HTML5, CSS, JavaScript, TypeScript y React, incluyendo manipulacion del DOM, formularios, eventos, interacciones y peticiones asincronas.",
      competencyBackendTitle: "Backend y APIs",
      competencyBackendBody: "Programacion de logica de servidor con PHP y Node.js, estructura de APIs, analisis de incidencias, validacion de datos y manejo de errores.",
      competencyDataTitle: "Bases de datos",
      competencyDataBody: "Modelado, consultas y gestion de datos con MySQL, SQL Server y Access, prestando atencion a filtros, valores nulos, estados y datos reales.",
      competencyDeployTitle: "Entornos y despliegue",
      competencyDeployBody: "Configuracion de entornos con XAMPP, Apache, Nginx y Docker, control de versiones con Git y GitHub, y trabajo diario con Visual Studio Code.",
      competencyMobileTitle: "Software y multiplataforma",
      competencyMobileBody: "Base en Java, Kotlin, Jetpack Compose y Visual Basic .NET para ampliar el criterio tecnico mas alla del desarrollo web y entender distintos entornos de aplicacion.",
      competencyQualityTitle: "Buenas practicas e IA aplicada",
      competencyQualityBody: "Organizacion de codigo, separacion de responsabilidades, specs driven development, prompt engineering y manejo de agentes de IA como apoyo para revisar y optimizar soluciones.",
      stackTitle: "Stack y herramientas",
      projectsTitle: "Presencia profesional",
      projectsBody: "Canales donde presento mi perfil, mi codigo y mi aprendizaje en Salesforce.",
      tagCode: "Codigo",
      tagProfile: "Perfil",
      tagLearning: "Aprendizaje",
      tagCv: "CV",
      projectGithubBody: "Repositorios y evolucion de mis proyectos tecnicos.",
      projectLinkedinBody: "Resumen profesional y red de contactos.",
      projectTrailheadBody: "Perfil activo en Salesforce Trailhead, centrado en aprendizaje practico del ecosistema y APEX.",
      projectCvTitle: "Curriculum profesional",
      projectCvBody: "CV actualizado en PDF con mi perfil, formacion y competencias tecnicas principales.",
      projectCvLink: "Descargar PDF",
      footerText: "(c) 2026 Alex Cobián Benito | Portfolio profesional",
      scrollTopLabel: "Volver arriba"
    },
    en: {
      pageTitle: "Alex Cobián Benito | Web Applications and Software Developer",
      pageDescription: "Professional portfolio of Alex Cobián Benito: web application development, full stack solutions, DAW skills, AI-assisted automation, and Salesforce learning.",
      ogTitle: "Alex Cobián Benito | Web Applications and Software Developer",
      ogDescription: "Professional portfolio of Alex Cobián Benito: web application development, full stack solutions, DAW skills, AI-assisted automation, and Salesforce learning.",
      navCompetencies: "Skills",
      navStack: "Stack",
      navProjects: "Presence",
      languageLabel: "Language:",
      languageSelectAria: "Select language",
      languageOptionEs: "Spanish",
      languageOptionEn: "English",
      eyebrow: "Professional portfolio",
      heroTitle: "Web Applications and Software Developer",
      heroBody: "I am a Web Applications and Software Developer with a DAW background, used to approaching real-world problems: interfaces that need to behave well, APIs that should be clear, data that does not always arrive clean, and issues that require tracing the full flow before changing code. I care about building useful, maintainable solutions with technical judgment, using web technologies, databases, Git, and AI tools as support. I am also continuing to grow in Salesforce and Apex through Trailhead.",
      ctaGithub: "View GitHub",
      ctaLinkedin: "View LinkedIn",
      ctaTrailhead: "View Salesforce Trailhead",
      ctaCv: "Download CV",
      photoFallback: "Place your photo in assets/alex-cobian-benito-profile-20260904.jpg",
      competenciesTitle: "Technical skills",
      competencyFrontendTitle: "Frontend Development",
      competencyFrontendBody: "Building web interfaces with HTML5, CSS, JavaScript, TypeScript, and React, including DOM manipulation, forms, events, interactions, and asynchronous requests.",
      competencyBackendTitle: "Backend and APIs",
      competencyBackendBody: "Server-side programming with PHP and Node.js, API structure, issue analysis, data validation, and error handling.",
      competencyDataTitle: "Databases",
      competencyDataBody: "Data modeling, querying, and management with MySQL, SQL Server, and Access, paying attention to filters, null values, states, and real-world data.",
      competencyDeployTitle: "Environments and deployment",
      competencyDeployBody: "Environment setup with XAMPP, Apache, Nginx, and Docker, version control with Git and GitHub, and daily work with Visual Studio Code.",
      competencyMobileTitle: "Software and multiplatform",
      competencyMobileBody: "Foundation in Java, Kotlin, Jetpack Compose, and Visual Basic .NET to broaden technical judgment beyond web development and understand different application environments.",
      competencyQualityTitle: "Best practices and applied AI",
      competencyQualityBody: "Code organization, separation of responsibilities, specs driven development, prompt engineering, and AI agent handling as support for reviewing and optimizing solutions.",
      stackTitle: "Stack and tools",
      projectsTitle: "Professional presence",
      projectsBody: "Places where I present my profile, code, and Salesforce learning.",
      tagCode: "Code",
      tagProfile: "Profile",
      tagLearning: "Learning",
      tagCv: "CV",
      projectGithubBody: "Repositories and the evolution of my technical projects.",
      projectLinkedinBody: "Professional summary and network.",
      projectTrailheadBody: "Active Salesforce Trailhead profile focused on practical learning across the ecosystem and APEX.",
      projectCvTitle: "Professional CV",
      projectCvBody: "Updated PDF CV with my profile, education, and main technical skills.",
      projectCvLink: "Download PDF",
      footerText: "(c) 2026 Alex Cobián Benito | Professional portfolio",
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

  function getLanguageLabel(language, dict) {
    return language === "en" ? dict.languageOptionEn : dict.languageOptionEs;
  }

  function updateLanguageControl(language, dict) {
    const switcher = document.querySelector("[data-language-switch]");
    if (!switcher) return;

    const current = switcher.querySelector("[data-language-current]");
    const options = switcher.querySelectorAll("[data-language-option]");

    if (current) {
      current.textContent = getLanguageLabel(language, dict);
    }

    options.forEach(function (option) {
      const selected = option.dataset.languageOption === language;
      option.classList.toggle("is-selected", selected);
      option.setAttribute("aria-selected", String(selected));
    });
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
    updateLanguageControl(activeLanguage, dict);
    setStoredLanguage(activeLanguage);
  }

  function setupLanguageSwitcher() {
    const saved = getStoredLanguage();
    const browserLanguage = navigator.language && navigator.language.toLowerCase().startsWith("en") ? "en" : "es";
    const initialLanguage = saved && translations[saved] ? saved : browserLanguage;

    const switcher = document.querySelector("[data-language-switch]");
    const trigger = switcher ? switcher.querySelector(".lang-trigger") : null;
    const panel = switcher ? switcher.querySelector(".lang-options") : null;
    const options = switcher ? Array.from(switcher.querySelectorAll("[data-language-option]")) : [];
    const legacySelect = document.querySelector("#language-select");

    function setOpen(open) {
      if (!switcher || !trigger || !panel) return;
      switcher.classList.toggle("is-open", open);
      trigger.setAttribute("aria-expanded", String(open));
      panel.hidden = !open;
    }

    function focusOption(index) {
      const option = options[index];
      if (option) option.focus();
    }

    function focusSelectedOption() {
      const selectedIndex = options.findIndex(function (option) {
        return option.getAttribute("aria-selected") === "true";
      });
      focusOption(selectedIndex >= 0 ? selectedIndex : 0);
    }

    function selectLanguage(language) {
      if (!translations[language]) return;
      applyLanguage(language);
      setOpen(false);
      if (trigger) trigger.focus();
    }

    applyLanguage(initialLanguage);

    if (!switcher || !trigger || !panel || !options.length) {
      if (!legacySelect) return;
      legacySelect.value = initialLanguage;
      legacySelect.addEventListener("change", function (event) {
        applyLanguage(event.target.value);
      });
      return;
    }

    trigger.addEventListener("click", function () {
      const willOpen = trigger.getAttribute("aria-expanded") !== "true";
      setOpen(willOpen);
      if (willOpen) focusSelectedOption();
    });

    trigger.addEventListener("keydown", function (event) {
      if (event.key === "ArrowDown" || event.key === "ArrowUp" || event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setOpen(true);
        focusSelectedOption();
      }
    });

    options.forEach(function (option, index) {
      option.addEventListener("click", function () {
        selectLanguage(option.dataset.languageOption);
      });

      option.addEventListener("keydown", function (event) {
        if (event.key === "ArrowDown") {
          event.preventDefault();
          focusOption((index + 1) % options.length);
        } else if (event.key === "ArrowUp") {
          event.preventDefault();
          focusOption((index - 1 + options.length) % options.length);
        } else if (event.key === "Home") {
          event.preventDefault();
          focusOption(0);
        } else if (event.key === "End") {
          event.preventDefault();
          focusOption(options.length - 1);
        } else if (event.key === "Escape") {
          event.preventDefault();
          setOpen(false);
          trigger.focus();
        } else if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          selectLanguage(option.dataset.languageOption);
        }
      });
    });

    document.addEventListener("click", function (event) {
      if (!switcher.contains(event.target)) {
        setOpen(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    });
  }

  function setupAnchorOffset() {
    const header = document.querySelector(".topbar");
    const root = document.documentElement;

    function setOffset() {
      if (!header) {
        root.style.setProperty("--anchor-offset", "28px");
        document.body.classList.add("menu-offset-ready");
        return;
      }

      const offset = Math.ceil(header.getBoundingClientRect().height + 24);
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
