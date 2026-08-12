(() => {
  "use strict";

  /* =========================================================
     LIVE DEMO URLS
     The only place these live — paste the two real GitHub Pages
     URLs here and nothing else in the file needs to change.
     ========================================================= */
  const DEMO_URLS = {
    dentist: "https://nihatygci.github.io/dentist-clinic/",
    beauty: "http://nihatygci.github.io/beauty-studio",
  };

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const navToggle = document.getElementById("navToggle");

  /* =========================================================
     LANGUAGE
     Reads TRANSLATIONS from translations.js — nothing here is
     hardcoded copy. Runs synchronously, before the loader fades,
     so there's no visible flash of the wrong language.
     ========================================================= */
  let currentLang = "en";
  const t = (key) => {
    const dict = (typeof TRANSLATIONS !== "undefined" && TRANSLATIONS[currentLang]) || {};
    const fallback = (typeof TRANSLATIONS !== "undefined" && TRANSLATIONS.en) || {};
    return dict[key] ?? fallback[key] ?? key;
  };

  const getAvailableLangs = () => {
    if (typeof TRANSLATIONS === "undefined") return [];
    const known = typeof LANG_ORDER !== "undefined" ? LANG_ORDER.slice() : [];
    Object.keys(TRANSLATIONS).forEach((code) => {
      if (!known.includes(code)) known.push(code);
    });
    return known.filter((code) => TRANSLATIONS[code]);
  };

  const detectInitialLang = () => {
    const available = getAvailableLangs();
    if (!available.length) return "en";

    try {
      const saved = window.localStorage.getItem("lang");
      if (saved && available.includes(saved)) return saved;
    } catch (err) {
      /* localStorage unavailable — fall through to detection */
    }

    const browserLangs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || ""];
    for (const bl of browserLangs) {
      const short = String(bl).slice(0, 2).toLowerCase();
      if (available.includes(short)) return short;
    }

    return available.includes("en") ? "en" : available[0];
  };

  const updateNavToggleLabel = () => {
    if (!navToggle) return;
    const open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-label", open ? t("nav.closeMenu") : t("nav.openMenu"));
  };

  const renderLangSwitches = () => {
    const available = getAvailableLangs();
    const containers = document.querySelectorAll(".lang-switch");
    containers.forEach((container) => {
      container.innerHTML = "";
      available.forEach((code) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "lang-switch__btn";
        btn.dataset.lang = code;
        btn.textContent = code.toUpperCase();
        btn.setAttribute("aria-pressed", String(code === currentLang));
        btn.addEventListener("click", () => setLanguage(code));
        container.appendChild(btn);
      });
    });
  };

  const updateLangSwitchState = () => {
    document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === currentLang));
    });
  };

  function applyLanguage(lang) {
    const available = getAvailableLangs();
    currentLang = available.includes(lang) ? lang : available[0] || "en";

    document.documentElement.lang = currentLang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      el.setAttribute("aria-label", t(el.dataset.i18nAriaLabel));
    });
    document.querySelectorAll("[data-i18n-content]").forEach((el) => {
      el.setAttribute("content", t(el.dataset.i18nContent));
    });

    updateNavToggleLabel();
    updateLangSwitchState();
  }

  function setLanguage(lang) {
    applyLanguage(lang);
    try {
      window.localStorage.setItem("lang", currentLang);
    } catch (err) {
      /* localStorage unavailable — language just won't persist */
    }
  }

  renderLangSwitches();
  applyLanguage(detectInitialLang());

  /* =========================================================
     LOADER
     ========================================================= */
  const loader = document.getElementById("loader");

  const hideLoader = () => {
    if (!loader) return;
    loader.classList.add("is-hidden");
  };

  if (loader) {
    const minDelay = reducedMotion ? 0 : 350;
    const start = performance.now();
    window.addEventListener(
      "load",
      () => {
        const elapsed = performance.now() - start;
        const wait = Math.max(0, minDelay - elapsed);
        window.setTimeout(hideLoader, wait);
      },
      { once: true }
    );
    // Safety net: never let the loader block the page.
    window.setTimeout(hideLoader, 2500);
  }

  /* =========================================================
     NAVBAR — scrolled state
     ========================================================= */
  const nav = document.getElementById("nav");
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* =========================================================
     MOBILE MENU
     ========================================================= */
  const mobileMenu = document.getElementById("mobileMenu");

  const setMenu = (open) => {
    if (!navToggle || !mobileMenu) return;
    navToggle.setAttribute("aria-expanded", String(open));
    updateNavToggleLabel();
    mobileMenu.dataset.open = String(open);
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      const firstLink = mobileMenu.querySelector("a");
      if (firstLink) firstLink.focus();
    }
  };

  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      setMenu(!isOpen);
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenu(false));
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        navToggle.focus();
      }
    });
  }

  /* =========================================================
     SCROLL REVEAL
     ========================================================= */
  const revealTargets = document.querySelectorAll("[data-reveal]");

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    revealTargets.forEach((el) => observer.observe(el));
  }

  /* =========================================================
     HERO CANVAS — restrained technical grid
     Sparse nodes on a loose grid, thin connecting lines drawn
     only near the pointer, slow ambient drift. No particle
     system, no color — pure grayscale, low opacity.
     ========================================================= */
  const canvas = document.getElementById("heroCanvas");

  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext("2d");
    const heroSection = canvas.closest(".hero");
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes = [];
    let pointer = { x: -9999, y: -9999, active: false };
    let rafId = null;
    let visible = true;

    const isMobile = () => window.innerWidth < 720;

    const buildNodes = () => {
      const spacing = isMobile() ? 120 : 92;
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;
      const list = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const baseX = c * spacing;
          const baseY = r * spacing;
          list.push({
            baseX,
            baseY,
            x: baseX,
            y: baseY,
            phase: Math.random() * Math.PI * 2,
            speed: 0.15 + Math.random() * 0.15,
          });
        }
      }
      nodes = list;
    };

    const resize = () => {
      const rect = heroSection.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildNodes();
    };

    const draw = (time) => {
      ctx.clearRect(0, 0, width, height);

      const driftEnabled = !reducedMotion;
      const t = time * 0.001;

      // Update positions with a very slow ambient drift.
      for (const n of nodes) {
        if (driftEnabled) {
          n.x = n.baseX + Math.sin(t * n.speed + n.phase) * 6;
          n.y = n.baseY + Math.cos(t * n.speed + n.phase) * 6;
        } else {
          n.x = n.baseX;
          n.y = n.baseY;
        }
      }

      // Draw faint dots. Dark-on-light now — same restrained
      // opacity the original white-on-dark version used.
      ctx.fillStyle = "rgba(24,24,27,0.22)";
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.1, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw connecting lines only near the pointer — keeps it a
      // restrained, intentional interaction rather than a full mesh.
      if (pointer.active) {
        const radius = isMobile() ? 160 : 220;
        for (let i = 0; i < nodes.length; i++) {
          const a = nodes[i];
          const dx = a.x - pointer.x;
          const dy = a.y - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < radius) {
            const alpha = (1 - dist / radius) * 0.4;
            ctx.strokeStyle = `rgba(24,24,27,${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.stroke();
          }
        }
      }

      if (visible) {
        rafId = requestAnimationFrame(draw);
      }
    };

    const start = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(draw);
    };

    const stop = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
    };

    resize();
    start();

    window.addEventListener(
      "resize",
      () => {
        window.clearTimeout(window.__heroResizeTimer);
        window.__heroResizeTimer = window.setTimeout(resize, 150);
      },
      { passive: true }
    );

    heroSection.addEventListener(
      "pointermove",
      (e) => {
        const rect = heroSection.getBoundingClientRect();
        pointer.x = e.clientX - rect.left;
        pointer.y = e.clientY - rect.top;
        pointer.active = true;
      },
      { passive: true }
    );

    heroSection.addEventListener("pointerleave", () => {
      pointer.active = false;
    });

    // Pause the animation loop when the hero is off-screen or the
    // tab is hidden — keeps this a lightweight, well-behaved effect.
    if ("IntersectionObserver" in window) {
      const heroObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visible = entry.isIntersecting && !document.hidden;
            if (visible) start();
            else stop();
          });
        },
        { threshold: 0 }
      );
      heroObserver.observe(heroSection);
    }

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        stop();
      } else if (visible) {
        start();
      }
    });
  }

  /* =========================================================
     LIVE DEMO MODAL
     One reusable dialog, filled in per trigger from DEMO_URLS.
     Traps focus, locks background scroll, restores both on
     close. Shows a loading state until the iframe fires 'load';
     if that hasn't happened within EMBED_TIMEOUT, assumes the
     target refused to be framed (X-Frame-Options / CSP) and
     falls back to an "open in new tab" panel instead of faking
     a preview. The demo sites themselves live outside this
     repo — this only opens their live URL in an iframe.
     ========================================================= */
  const EMBED_TIMEOUT = 6000;

  const demoTriggers = document.querySelectorAll(".demo-card");
  const modalBackdrop = document.getElementById("demoModalBackdrop");
  const modal = document.getElementById("demoModal");
  const modalTitle = document.getElementById("demoModalTitle");
  const modalStatus = document.getElementById("demoModalStatus");
  const modalFallback = document.getElementById("demoModalFallback");
  const modalFallbackLink = document.getElementById("demoModalFallbackLink");
  const modalIframe = document.getElementById("demoModalIframe");
  const modalFullpage = document.getElementById("demoModalFullpage");
  const modalClose = document.getElementById("demoModalClose");

  if (demoTriggers.length && modalBackdrop && modal && modalIframe && modalClose) {
    const focusableSelector =
      'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])';

    let lastTrigger = null;
    let scrollY = 0;
    let openId = 0;
    let embedTimeoutId = null;

    const lockScroll = () => {
      scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
    };

    const unlockScroll = () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      window.scrollTo(0, scrollY);
    };

    // GitHub Pages always serves over https. If a plain http:// URL
    // was pasted into DEMO_URLS, upgrade it whenever this portfolio
    // itself is running on https — otherwise the browser silently
    // blocks the iframe as mixed content and it just looks broken.
    const resolveUrl = (rawUrl) => {
      if (rawUrl.startsWith("http://") && window.location.protocol === "https:") {
        return rawUrl.replace(/^http:\/\//, "https://");
      }
      return rawUrl;
    };

    const setModalState = (state) => {
      // state: "loading" | "loaded" | "blocked"
      if (modalStatus) modalStatus.hidden = state !== "loading";
      if (modalFallback) modalFallback.hidden = state !== "blocked";
    };

    const onKeydown = (e) => {
      if (e.key === "Escape") {
        closeModal();
        return;
      }
      if (e.key !== "Tab") return;

      const focusable = Array.from(modal.querySelectorAll(focusableSelector)).filter(
        (el) => el.offsetParent !== null
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    // Fires on every iframe navigation, including the blank page a
    // close() leaves behind — harmless, since a fresh openModal()
    // always resets state before assigning a new src.
    modalIframe.addEventListener("load", () => {
      window.clearTimeout(embedTimeoutId);
      setModalState("loaded");
    });

    function openModal(trigger) {
      openId += 1;

      const key = trigger.dataset.demoKey;
      const title = trigger.dataset.demoTitle || "Live preview";
      const rawUrl = DEMO_URLS[key] || "";
      const url = resolveUrl(rawUrl);

      lastTrigger = trigger;
      modalTitle.textContent = title;
      modalIframe.title = `${title} — ${t("modal.livePreviewSuffix")}`;
      modalFullpage.href = url;
      if (modalFallbackLink) modalFallbackLink.href = url;

      setModalState("loading");
      window.clearTimeout(embedTimeoutId);
      embedTimeoutId = window.setTimeout(() => setModalState("blocked"), EMBED_TIMEOUT);

      modalIframe.src = url;

      lockScroll();
      modalBackdrop.hidden = false;
      requestAnimationFrame(() => modalBackdrop.classList.add("is-open"));
      modalClose.focus();

      document.addEventListener("keydown", onKeydown);
    }

    function closeModal() {
      const closeId = openId;

      modalBackdrop.classList.remove("is-open");
      document.removeEventListener("keydown", onKeydown);
      window.clearTimeout(embedTimeoutId);
      unlockScroll();

      const finish = () => {
        // A newer openModal() ran while this timeout was pending —
        // let that one own the modal instead of tearing it down.
        if (openId !== closeId) return;
        modalBackdrop.hidden = true;
        modalIframe.src = "about:blank";
        setModalState("loading");
        if (lastTrigger) lastTrigger.focus();
      };

      if (reducedMotion) {
        finish();
      } else {
        window.setTimeout(finish, 420);
      }
    }

    demoTriggers.forEach((trigger) => {
      trigger.addEventListener("click", () => openModal(trigger));
    });

    modalClose.addEventListener("click", closeModal);

    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }
})();