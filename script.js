const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navSectionLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));

if (menuToggle && siteNav) {
  const setMenuState = (isOpen) => {
    siteNav.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "Close" : "Menu";
    document.body.classList.toggle("nav-open", isOpen);
  };

  setMenuState(false);

  menuToggle.addEventListener("click", () => {
    const isOpen = !siteNav.classList.contains("open");
    setMenuState(isOpen);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setMenuState(false);
    });
  });

  document.addEventListener("click", (event) => {
    if (!siteNav.classList.contains("open")) {
      return;
    }

    const target = event.target;
    if (!(target instanceof Node)) {
      return;
    }

    if (!siteNav.contains(target) && !menuToggle.contains(target)) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && siteNav.classList.contains("open")) {
      setMenuState(false);
      menuToggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860 && siteNav.classList.contains("open")) {
      setMenuState(false);
    }
  });
}

const year = document.querySelector("#year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const pressFilters = Array.from(document.querySelectorAll(".press-filter"));
const pressCards = Array.from(document.querySelectorAll(".press-card[data-press-type]"));

if (pressFilters.length > 0 && pressCards.length > 0) {
  const applyPressFilter = (filter) => {
    pressFilters.forEach((button) => {
      const isActive = button.dataset.filter === filter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    pressCards.forEach((card) => {
      const cardType = card.dataset.pressType;
      const shouldShow = filter === "all" || cardType === filter;
      card.classList.toggle("is-hidden", !shouldShow);
      card.hidden = !shouldShow;
    });
  };

  pressFilters.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter ?? "all";
      applyPressFilter(filter);
    });
  });

  applyPressFilter("all");
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealElements = document.querySelectorAll(".reveal");

const setActiveSectionLink = (id) => {
  navSectionLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("is-active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

if (navSectionLinks.length > 0) {
  const targetSections = navSectionLinks
    .map((link) => link.getAttribute("href"))
    .filter(Boolean)
    .map((hash) => document.querySelector(hash))
    .filter((section) => section instanceof HTMLElement);

  if (targetSections.length > 0 && "IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSectionLink(visible.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    targetSections.forEach((section) => sectionObserver.observe(section));
  }

  const initialHash = window.location.hash.replace("#", "");
  if (initialHash) {
    setActiveSectionLink(initialHash);
  } else if (!("IntersectionObserver" in window)) {
    const firstId = navSectionLinks[0].getAttribute("href")?.replace("#", "");
    if (firstId) {
      setActiveSectionLink(firstId);
    }
  }

  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActiveSectionLink(hash);
    }
  });
}

if ("IntersectionObserver" in window && !prefersReducedMotion) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0, rootMargin: "0px 0px -80px 0px" }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}


// Only load and play background videos on larger screens. On phones/tablets the
// hero video (several MB) is skipped entirely — the poster image shows instead —
// which saves mobile data/battery and improves LCP. preload="none" in the markup
// means nothing is fetched until play() is called here.
const canPlayBgVideo =
  window.matchMedia("(min-width: 981px)").matches && !prefersReducedMotion;

if (canPlayBgVideo) {
  document.querySelectorAll(".hero-bg-video, .section-bg-video").forEach((video) => {
    video.muted = true;
    const tryPlay = () => {
      video.playbackRate = 0.5;
      const p = video.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => {
          document.addEventListener(
            "pointerdown",
            () => video.play().catch(() => {}),
            { once: true }
          );
        });
      }
    };
    tryPlay();
  });
}
