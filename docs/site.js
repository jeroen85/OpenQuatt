(() => {
  const body = document.body;
  const sidebarToggle = document.querySelector("[data-sidebar-toggle]");
  const sidebarBackdrop = document.querySelector("[data-sidebar-backdrop]");
  const sidebarLinks = [...document.querySelectorAll("[data-sidebar-link]"), ...document.querySelectorAll("[data-toc-link]")];
  const navToggles = [...document.querySelectorAll("[data-nav-toggle]")];
  const tocLinks = [...document.querySelectorAll("[data-toc-link]")];

  function setSidebarOpen(isOpen) {
    body.classList.toggle("sidebar-open", isOpen);
    if (sidebarToggle) {
      sidebarToggle.setAttribute("aria-expanded", String(isOpen));
    }
  }

  function activateToc(hash) {
    tocLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${hash}`);
    });
  }

  function toggleNavSection(button) {
    const panelId = button.getAttribute("aria-controls");
    const panel = panelId ? document.getElementById(panelId) : null;
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    if (panel) {
      panel.hidden = expanded;
    }
  }

  async function copyCode(button, pre) {
    const code = pre.querySelector("code");
    const text = code ? code.innerText : pre.innerText;
    if (!text || !navigator.clipboard) {
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      const originalLabel = button.textContent;
      button.textContent = "Copied";
      window.setTimeout(() => {
        button.textContent = originalLabel;
      }, 1400);
    } catch (error) {
      console.warn("Kon code niet kopieren", error);
    }
  }

  function enhanceCodeBlocks() {
    document.querySelectorAll("pre").forEach((pre) => {
      if (pre.dataset.enhanced === "true") {
        return;
      }
      pre.dataset.enhanced = "true";
      const button = document.createElement("button");
      button.type = "button";
      button.className = "code-copy";
      button.textContent = "Copy";
      button.addEventListener("click", () => {
        copyCode(button, pre);
      });
      pre.appendChild(button);
    });
  }

  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", () => {
      setSidebarOpen(!body.classList.contains("sidebar-open"));
    });
  }

  sidebarBackdrop?.addEventListener("click", () => {
    setSidebarOpen(false);
  });

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setSidebarOpen(false);
    });
  });

  navToggles.forEach((button) => {
    button.addEventListener("click", () => {
      toggleNavSection(button);
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) {
      setSidebarOpen(false);
    }
  });

  if (tocLinks.length > 0 && "IntersectionObserver" in window) {
    const sections = tocLinks
      .map((link) => document.getElementById((link.getAttribute("href") || "").replace(/^#/, "")))
      .filter(Boolean);

    if (sections.length > 0) {
      activateToc(window.location.hash.replace(/^#/, "") || sections[0].id);

      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((left, right) => left.boundingClientRect.top - right.boundingClientRect.top);

          if (visible[0]) {
            activateToc(visible[0].target.id);
          }
        },
        {
          rootMargin: "-120px 0px -70% 0px",
          threshold: [0, 1],
        },
      );

      sections.forEach((section) => observer.observe(section));
    }
  }

  window.addEventListener("hashchange", () => {
    activateToc(window.location.hash.replace(/^#/, ""));
  });

  enhanceCodeBlocks();
})();