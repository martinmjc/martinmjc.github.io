/**
 * script.js
 * ------------------------------------------------------------------
 * Lógica de interacción del sitio. Se apoya en el contenido definido
 * en data.js (PROFILE, PUBLICATIONS, PROJECTS, EXPERIENCE) para
 * renderizar cada sección dinámicamente, de modo que actualizar el
 * sitio sea siempre cuestión de editar data.js.
 * ------------------------------------------------------------------
 */

document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderAbout();
  renderPublications();
  renderProjects();
  renderExperience();
  renderContact();
  renderFooter();

  initNavToggle();
  initActiveNavOnScroll();
  initContactForm();
  initYear();
  initRevealOnScroll();
});

/* -------------------- Helpers -------------------- */

/** Crea un elemento con clase(s) y contenido HTML interno, en una línea. */
function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

/** Devuelve el ícono correcto: admite clases compuestas tipo "fa-brands fa-orcid". */
function iconClasses(icon) {
  return icon.includes(" ") ? icon : `fa-solid ${icon}`;
}

/* -------------------- Hero -------------------- */

function renderHero() {
  document.getElementById("heroName").textContent = PROFILE.name;
  document.getElementById("heroRole").textContent = PROFILE.role;
  // Solo se agrega el país (no la ciudad completa), porque el nombre de la
  // universidad en PROFILE.affiliation ya suele incluir la ciudad.
  const country = PROFILE.location.split(",").pop().trim();
  document.getElementById("heroAffiliation").textContent =
    `${PROFILE.affiliation}, ${country}`;

  const tagsContainer = document.getElementById("heroTags");
  PROFILE.researchLines.forEach((line) => {
    tagsContainer.appendChild(el("span", "tag", line.title));
  });

  const profilesContainer = document.getElementById("heroProfiles");
  PROFILE.profiles.forEach((profile) => {
    const link = el(
      "a",
      "btn btn-outline",
      `<i class="${iconClasses(profile.icon)}" aria-hidden="true"></i> ${profile.name}`
    );
    link.href = profile.url;
    if (!profile.url.startsWith("mailto:")) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    profilesContainer.appendChild(link);
  });
}

/* -------------------- Sobre mí -------------------- */

function renderAbout() {
  document.getElementById("bioText").textContent = PROFILE.bio.trim().replace(/\s+/g, " ");

  const container = document.getElementById("researchLines");
  PROFILE.researchLines.forEach((line) => {
    const card = el(
      "article",
      "research-card",
      `<div class="icon"><i class="${iconClasses(line.icon)}" aria-hidden="true"></i></div>
       <h3>${line.title}</h3>
       <p>${line.description}</p>`
    );
    container.appendChild(card);
  });
}

/* -------------------- Publicaciones -------------------- */

function renderPublications() {
  const container = document.getElementById("publicationsList");

  if (!PUBLICATIONS.length) {
    container.appendChild(
      el("div", "empty-state", "No publications listed yet.")
    );
    return;
  }

  // Más reciente primero.
  const sorted = [...PUBLICATIONS].sort((a, b) => b.year - a.year);

  sorted.forEach((pub) => {
    const tagsHtml = (pub.tags || [])
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");

    const linkHtml = pub.doi
      ? `<a class="publication-link" href="https://doi.org/${pub.doi}" target="_blank" rel="noopener noreferrer">
           View article <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
         </a>`
      : "";

    const card = el(
      "article",
      "publication-card",
      `<span class="publication-year">${pub.year}</span>
       <h3>${pub.title}</h3>
       <p class="publication-authors">${pub.authors}</p>
       <p class="publication-venue"><em>${pub.venue}</em>${pub.volumeInfo ? ", " + pub.volumeInfo : ""}</p>
       <div class="publication-tags">${tagsHtml}</div>
       ${linkHtml}`
    );

    // Hace clickeable todo el recuadro, no solo el enlace "View article".
    if (pub.doi) {
      card.classList.add("is-clickable");
      card.addEventListener("click", (event) => {
        // Si el clic fue directamente sobre un enlace (ej. "View article"),
        // dejamos que ese enlace navegue por su cuenta, sin duplicar la acción.
        if (event.target.closest("a")) return;
        window.open(`https://doi.org/${pub.doi}`, "_blank", "noopener,noreferrer");
      });
    }

    container.appendChild(card);
  });
}

/* -------------------- Proyectos -------------------- */

function renderProjects() {
  const container = document.getElementById("projectsGrid");

  if (!PROJECTS.length) {
    container.appendChild(
      el(
        "div",
        "empty-state",
        "Coming soon: ongoing and completed research projects."
      )
    );
    return;
  }

  PROJECTS.forEach((project) => {
    const tagsHtml = (project.tags || [])
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");

    const linkHtml = project.link
      ? `<a class="publication-link" href="${project.link}" target="_blank" rel="noopener noreferrer">
           Learn more <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
         </a>`
      : "";

    const card = el(
      "article",
      "project-card",
      `<span class="project-period">${project.period}</span>
       <h3>${project.title}</h3>
       <span class="project-role">${project.role}</span>
       <p>${project.description}</p>
       <div class="publication-tags">${tagsHtml}</div>
       ${linkHtml}`
    );
    container.appendChild(card);
  });
}

/* -------------------- Docencia / Experiencia -------------------- */

function renderExperience() {
  const container = document.getElementById("experienceTimeline");

  if (!EXPERIENCE.length) {
    container.appendChild(
      el("div", "empty-state", "Coming soon: teaching and professional experience.")
    );
    return;
  }

  EXPERIENCE.forEach((item) => {
    const node = el(
      "div",
      "timeline-item",
      `<div class="timeline-content">
         <span class="timeline-period">${item.period}</span>
         <h3>${item.title}</h3>
         <p class="timeline-place">${item.place}</p>
         <p>${item.description}</p>
       </div>`
    );
    container.appendChild(node);
  });
}

/* -------------------- Contacto -------------------- */

function renderContact() {
  const container = document.getElementById("contactChannels");
  PROFILE.profiles.forEach((profile) => {
    const link = el(
      "a",
      "contact-channel",
      `<i class="${iconClasses(profile.icon)}" aria-hidden="true"></i> ${
        profile.url.startsWith("mailto:") ? PROFILE.email : profile.name
      }`
    );
    link.href = profile.url;
    if (!profile.url.startsWith("mailto:")) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    container.appendChild(link);
  });
}

/* -------------------- Footer -------------------- */

function renderFooter() {
  const container = document.getElementById("footerSocials");
  PROFILE.profiles.forEach((profile) => {
    const link = el(
      "a",
      "",
      `<i class="${iconClasses(profile.icon)}" aria-hidden="true"></i>`
    );
    link.href = profile.url;
    link.setAttribute("aria-label", profile.name);
    if (!profile.url.startsWith("mailto:")) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    container.appendChild(link);
  });
}

function initYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

/* -------------------- Navegación -------------------- */

function initNavToggle() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
      : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
  });

  // Cierra el menú móvil al elegir una sección.
  menu.querySelectorAll("a[data-nav]").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    });
  });
}

/** Resalta el enlace de la sección visible mientras el usuario hace scroll. */
function initActiveNavOnScroll() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-menu a[data-nav]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* -------------------- Formulario de contacto -------------------- */
/**
 * Sin backend propio: arma un mailto con los datos ingresados y abre el
 * cliente de correo del usuario. Sustituir por una llamada a un servicio
 * de formularios (Formspree, EmailJS, etc.) si se requiere envío directo.
 */
function initContactForm() {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const subject = encodeURIComponent(`Portfolio contact — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  });
}

/* -------------------- Animación de aparición al hacer scroll --------------------
 * Implementación propia (sin dependencia de CDN externo): agrega
 * "is-visible" a cada .reveal cuando entra en el viewport. El CSS solo
 * oculta estos elementos si <html> ya tiene la clase "js" (agregada
 * sincrónicamente en <head>), así que si este script no llega a
 * ejecutarse, el contenido nunca queda invisible.
 */
function initRevealOnScroll() {
  const targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

  if (!("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach((target) => observer.observe(target));
}
