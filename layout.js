// ============================================================
//  layout.js  —  Injects nav, footer, and page title on every
//                page automatically using data from data.js
// ============================================================
(function () {

  // ── Detect current page & depth ──────────────────────────
  const page  = location.pathname.split("/").pop() || "index.html";
  const depth = location.pathname.split("/").filter(Boolean).length - 1;
  const root  = depth > 0 ? "../".repeat(depth) : "";

  // ── Nav links (concatenation, not template literals) ─────
  const navLinks = [
    { href: root + "index.html",        label: "Home"         },
    { href: root + "about.html",        label: "About"        },
    { href: root + "research.html",     label: "Research"     },
    { href: root + "publications.html", label: "Publications" },
    { href: root + "cv.html",           label: "CV"           },
    { href: root + "blog.html",         label: "Notes"        },
    { href: root + "gallery.html",      label: "Gallery"      },
    { href: root + "contact.html",      label: "Contact"      },
  ];

  // ── Build nav ────────────────────────────────────────────
  const navEl = document.querySelector("nav");
  if (navEl) {
    navEl.innerHTML = `
      <div class="nav-inner">
        <a href="${root}index.html" class="nav-name">${SITE.nameShort}</a>
        <button class="nav-toggle" id="js-nav-toggle" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" id="js-nav-links">
          ${navLinks.map(l => `
            <li><a href="${l.href}" class="${page === l.href ? "active" : ""}">${l.label}</a></li>
          `).join("")}
        </ul>
      </div>`;

    // ── Hamburger toggle ─────────────────────────────────
    const toggle = document.getElementById("js-nav-toggle");
    const links  = document.getElementById("js-nav-links");

    toggle.addEventListener("click", function () {
      const isOpen = links.classList.toggle("open");
      toggle.classList.toggle("open", isOpen);
      toggle.setAttribute("aria-expanded", isOpen);
    });

    // Close menu when a link is clicked
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!navEl.contains(e.target)) {
        links.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ── Build footer ─────────────────────────────────────────
  const footerEl = document.querySelector("footer");
  if (footerEl) {
    footerEl.innerHTML = `
      <span>${SITE.name}</span>
      <span>${SITE.institute} · ${SITE.location}</span>`;
  }

  // ── Set document title ───────────────────────────────────
  const pageTitles = {
    "index.html":        SITE.name,
    "about.html":        `About — ${SITE.nameShort}`,
    "research.html":     `Research — ${SITE.nameShort}`,
    "publications.html": `Publications — ${SITE.nameShort}`,
    "cv.html":           `CV — ${SITE.nameShort}`,
    "blog.html":         `Notes — ${SITE.nameShort}`,
    "gallery.html":      `Gallery — ${SITE.nameShort}`,
    "contact.html":      `Contact — ${SITE.nameShort}`,
  };
  document.title = pageTitles[page] || SITE.name;

})();