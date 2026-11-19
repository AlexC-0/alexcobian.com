(function () {
  // Spanish content lives in the HTML so it remains available without JavaScript.
  const spanish = {
    pageTitle: document.title,
    pageDescription: document.querySelector('meta[name="description"]').content
  };
  document.querySelectorAll("[data-i18n]").forEach(function (node) {
    spanish[node.dataset.i18n] = node.textContent.trim();
  });
  ["aria-label", "title", "alt"].forEach(function (attribute) {
    document.querySelectorAll("[data-i18n-" + attribute + "]").forEach(function (node) {
      spanish[node.getAttribute("data-i18n-" + attribute)] = node.getAttribute(attribute);
    });
  });
  const translations = { es: spanish, en: {
    "pageTitle": "Alex Cobián Benito | Salesforce Developer · Fullstack / Backend",
    "pageDescription": "Salesforce developer with after-sales, warranty and pricing integration projects. Fullstack / Backend development, APIs and data validation.",
    "skipLink": "Skip to content",
    "navAria": "Main navigation",
    "navProjects": "Projects",
    "navCompetencies": "Skills",
    "navStack": "Stack",
    "navPresence": "Presence",
    "languageLabel": "Language:",
    "languageSelectAria": "Select language",
    "languageOptionEs": "Spanish",
    "languageOptionEn": "English",
    "eyebrow": "Professional portfolio",
    "heroTitle": "Salesforce Developer",
    "heroBody": "I develop Salesforce applications to automate processes, integrate services and maintain data integrity. I use Apex, SOQL, Flow and Lightning Web Components for after-sales support, warranty tracking and external pricing lookups. This focus builds on my Fullstack / Backend background and projects with accessible source code, tests and documentation.",
    "ctaProjects": "Explore projects",
    "photoFallback": "Alex Cobián Benito",
    "photoAlt": "Portrait of Alex Cobián Benito",
    "projectsTitle": "Projects and solutions",
    "projectsBody": "Salesforce and Fullstack / Backend projects alongside earlier web work. Each card describes its purpose, technologies, source code and availability; technical details link to documented evidence and limitations.",
    "salesforceProjects": "Salesforce",
    "posventaStatus": "Code · Validated in Salesforce development org",
    "posventaTitle": "After-sales and warranties",
    "posventaBody": "Manage product issues and follow each case through to resolution. The application organizes assignment and records a simulated warranty assessment.",
    "posventaFeatures": "Queues and role-based permissions, data validation, an LWC case view and an open-case report.",
    "technicalDetails": "Details and scope",
    "posventaDetail": "Related Account, Contact, Asset and Case records; Flow coordinates intake and evaluation while Apex enforces authorization and closure rules. Documentation records 106 Apex and 23 Jest tests. Incremental deployment verified; clean installation not executed. Fictional data, no public demo.",
    "tarifasStatus": "Code · Validated in Salesforce development org",
    "tarifasTitle": "Supplier pricing lookup",
    "tarifasBody": "Look up external prices from Salesforce and keep the result for later reference. A simulated supplier returns prices that are validated before saving a private snapshot.",
    "tarifasFeatures": "Lookup and history LWC, authenticated HTTP integration and immutable snapshots readable while the supplier is offline.",
    "tarifasDetail": "V1 completed with documented limitations. No application-scheduled retries; external transport recorded duplicate receipts for 429/503 responses, so single delivery and idempotency across actions are not guaranteed. Incremental deployment verified; clean installation only documented. No public demo.",
    "backendProjects": "Fullstack / Backend",
    "importacionStatus": "Code · Local execution",
    "importacionTitle": "Data import and validation",
    "importacionBody": "Import CSV catalogues without accepting incomplete or duplicate data. The API validates records and commits each complete import to PostgreSQL.",
    "importacionFeatures": "Row-level errors, transactions, recovery of identical imports and paginated history.",
    "importacionDetail": "Identity is based on file bytes: resending an identical committed CSV retrieves its result. Other files with existing SKUs are rejected. No frontend, authentication or public deployment; load testing is not evidenced.",
    "solicitudesStatus": "Code · Local execution",
    "solicitudesTitle": "Requests and approvals",
    "solicitudesBody": "Organize internal requests for equipment, software and training. A React interface supports drafts, submission and reviewing decisions by the assigned reviewer.",
    "solicitudesFeatures": "States and roles, server-side authorization, decision history and paginated filters.",
    "solicitudesDetail": "Fictional users and PostgreSQL-backed sessions. Approval, rejection and cancellation are terminal states; history is restricted to the author and assigned reviewer. Acceptance documents API, frontend, integration and E2E tests. No public deployment.",
    "eventosStatus": "Code · Local execution",
    "eventosTitle": "Reliable order event delivery",
    "eventosBody": "Receive and persist HTTP order events for processing and delivery tracking. A persistent queue coordinates a worker and a demonstration receiver.",
    "eventosFeatures": "Authentication, bounded retries, attempt history and transactional deduplication in the receiver.",
    "eventosDetail": "Deliveries may repeat. The receiver deduplicates its fictional preparation within its own transaction; this does not guarantee exactly-once delivery to external services. No frontend, public deployment, load testing or high-availability testing.",
    "earlierProjects": "Web projects and earlier work",
    "projectLiveTag": "Live website",
    "projectClientReimaginedCode": "View code for Client 1's reimagined website on GitHub",
    "projectVisit": "Visit website",
    "projectPkxpertiseVisit": "Visit the PKXpertise website",
    "projectPkxpertiseCode": "View PKXpertise code on GitHub",
    "projectClientDevelopedCode": "View code for Client 1's expanded website on GitHub",
    "projectClientDevelopedTitle": "Client 1 · Expanded website",
    "projectPkxpertiseStack": "PKXpertise technologies",
    "projectClientReimaginedBody": "A multipage reinterpretation of the client's website, with orbital navigation and dedicated pages for systems, applications, methodology, documentation, and contact.",
    "projectClientDevelopedBody": "Second version for the same client, with orbital navigation, a technical catalogue, and sections covering applications, the company, processes, and documentation, connected to a technical and sales enquiry form.",
    "projectPkxpertiseBody": "Pokémon services platform with guided unit and team configuration, order tracking, and user support. A project that brings together a web interface and server-side logic in a live experience on its own domain.",
    "projectCode": "View code",
    "projectClientReimaginedTitle": "Client 1 · Reimagined website",
    "projectClientIntuitiveBody": "First website proposal for a client in the industrial battery sector, with a guided journey based on application, project stage, and interests, product exploration, and a technical enquiry form.",
    "projectClientIntuitiveCode": "View code for Client 1's intuitive website on GitHub",
    "projectClientIntuitiveTitle": "Client 1 · Intuitive website",
    "competenciesTitle": "Technical skills",
    "skillSalesforce": "Salesforce · Data and automation",
    "skillSalesforceBody": "Apex, SOQL, Flow, objects and relationships, validation, permissions and record access. Applied to case lifecycles and warranty assessment.",
    "skillSalesforceLink": "See after-sales and warranties",
    "skillIntegration": "Salesforce · UI and integration",
    "skillIntegrationBody": "Lightning Web Components, HTTP and REST APIs with Named/External Credentials. Response validation, authorization and private history.",
    "skillIntegrationLink": "See supplier pricing lookup",
    "skillFrontend": "Frontend development",
    "skillFrontendBody": "Building interfaces with HTML5, CSS, JavaScript, TypeScript and React: DOM manipulation, forms, events, interactions, state and asynchronous requests. Separation of responsibilities to support maintainability.",
    "skillFrontendLink": "See requests and approvals",
    "skillData": "Databases and integrity",
    "skillDataBody": "Data modelling, queries and management with SQL, PostgreSQL, MySQL, SQL Server and Access, with attention to filters, null values and states. PostgreSQL projects add transactions, constraints, atomic imports, scoped idempotency and effect deduplication.",
    "skillDataLink": "See data import and validation",
    "skillQuality": "Development practices and testing",
    "skillQualityBody": "Code organization, separation of responsibilities with MVC and specification-driven development. Unit tests, Apex and Jest in Salesforce, API and PostgreSQL integration tests, and E2E flows in web applications.",
    "skillQualityLink": "See documented after-sales tests",
    "stackTitle": "Stack and tools",
    "sfStack": "Salesforce",
    "webStack": "Web development and data",
    "testStack": "Testing, environments and tools",
    "presenceTitle": "Professional presence",
    "presenceBody": "Where I share my professional profile, source code and Salesforce learning. You can contact me through LinkedIn and download my CV as PDF or Word.",
    "cvTitle": "Professional CV",
    "cvPdf": "Download PDF",
    "cvWord": "Download Word",
    "footerText": "© 2026 Alex Cobián Benito | Professional portfolio",
    "scrollTopLabel": "Back to top",
    "cvBody": "CV with my profile, education, experience, projects and main technical skills. PDF and Word downloads; both documents are in Spanish.",
    "projectEvidence": "Documented evidence",
    "grStatus": "Academic project · Source code available",
    "grBody": "A web application for buying and selling furniture and 3D spare parts, focused on reuse and repair.",
    "grFeatures": "Catalogue, listings, favourites, shopping cart and messages between users.",
    "grAvailability": "No verified public demo.",
    "heroBackground": "My web application experience includes maintaining and developing React interfaces, separating responsibilities with MVC and unit testing. On the backend, I use Python to develop APIs connecting the interface to application logic. I also build projects with Node.js, TypeScript, Express, Fastify and PostgreSQL, and continue learning Salesforce through Trailhead.",
    "ctaGithub": "View GitHub",
    "ctaLinkedin": "View LinkedIn",
    "ctaTrailhead": "View Salesforce Trailhead",
    "projectUnpublishedTag": "Unpublished website",
    "projectClientIntuitiveStack": "Intuitive website technologies",
    "projectClientDevelopedStack": "Expanded website technologies",
    "projectClientReimaginedStack": "Reimagined website technologies",
    "skillBackend": "Backend and APIs",
    "skillBackendBody": "Server-side programming with Python, PHP and Node.js, API development, issue analysis, data validation and error handling. Express and Fastify in the import, request, event and pricing integration projects.",
    "skillBackendLink": "See pricing integration",
    "skillDeploy": "Environments and deployment",
    "skillDeployBody": "Environment setup with XAMPP, Apache, Nginx and Docker. Version control with Git and GitHub, work with Visual Studio Code and automated checks through GitHub Actions in projects that include CI.",
    "skillDeployLink": "See event code and evidence",
    "skillMobile": "Software and multiplatform",
    "skillMobileBody": "Further study in Java, Kotlin, Jetpack Compose and Visual Basic .NET to broaden the technical foundation beyond web development and understand different application environments. Continued Salesforce learning through Trailhead.",
    "skillMobileLink": "See learning and professional profile",
    "learningStack": "Further learning",
    "tagCode": "Code",
    "projectGithubBody": "Repositories, the evolution of my technical projects, source code and documentation of their features and tests.",
    "tagProfile": "Profile",
    "projectLinkedinBody": "Professional summary, background, education and network. A way to get in touch with me.",
    "tagLearning": "Learning",
    "projectTrailheadBody": "Salesforce Trailblazer profile with my practical Trailhead learning, focused on the Salesforce ecosystem and Apex."
} };

  function setupProfilePhoto() {
    const photoFigure = document.querySelector(".profile-photo");
    const photo = photoFigure ? photoFigure.querySelector("img") : null;
    if (!photoFigure || !photo) return;

    photo.addEventListener("load", function () {
      photoFigure.classList.remove("missing");
    });

    function showFallback() {
      photo.hidden = true;
      photoFigure.classList.add("missing");
    }
    photo.addEventListener("error", showFallback);
    if (photo.complete && !photo.naturalWidth) showFallback();
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
      window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
      const main = document.querySelector("main");
      if (main) main.focus({ preventScroll: true });
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
    if (ogTitle) ogTitle.setAttribute("content", dict.pageTitle);
    if (ogDescription) ogDescription.setAttribute("content", dict.pageDescription);
    if (twitterTitle) twitterTitle.setAttribute("content", dict.pageTitle);
    if (twitterDescription) twitterDescription.setAttribute("content", dict.pageDescription);
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

    document.querySelectorAll("[data-i18n-alt]").forEach(function (node) {
      node.alt = dict[node.dataset.i18nAlt] || "";
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

    switcher.addEventListener("focusout", function (event) {
      if (!switcher.contains(event.relatedTarget)) setOpen(false);
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
        return;
      }

      const offset = getComputedStyle(header).position === "sticky"
        ? Math.ceil(header.getBoundingClientRect().height + 24) : 24;
      root.style.setProperty("--anchor-offset", offset + "px");
    }

    window.addEventListener("resize", setOffset);
    window.addEventListener("load", setOffset);
    if (header && "ResizeObserver" in window) {
      new ResizeObserver(setOffset).observe(header);
    }
    setOffset();
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupProfilePhoto();
    setupScrollTop();
    setupLanguageSwitcher();
    setupAnchorOffset();
  });
})();
