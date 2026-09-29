(() => {
  "use strict";

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById("navToggle");
  const navMobile = document.getElementById("navMobile");

  const closeMobileNav = () => {
    navMobile.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "メニューを開く");
    document.body.style.overflow = "";
  };

  const openMobileNav = () => {
    navMobile.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "メニューを閉じる");
    document.body.style.overflow = "hidden";
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navMobile.classList.contains("is-open");
    isOpen ? closeMobileNav() : openMobileNav();
  });

  navMobile.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileNav);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMobileNav();
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Back to top button ---------- */
  const toTopBtn = document.getElementById("toTop");
  let ticking = false;

  const updateToTop = () => {
    const shouldShow = window.scrollY > window.innerHeight * 0.6;
    toTopBtn.classList.toggle("is-visible", shouldShow);
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateToTop);
      ticking = true;
    }
  }, { passive: true });

  toTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  updateToTop();
})();
