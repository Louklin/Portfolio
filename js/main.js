// Small, dependency-free script: theme toggle, mobile menu, nav background, scroll reveal.

(function () {
  var root = document.documentElement;

  // ----- Theme toggle (dark / light), remembered in this browser -----
  var themeBtn = document.getElementById("themeToggle");

  function setTheme(theme) {
    root.dataset.theme = theme;
    try { localStorage.setItem("portfolio-theme", theme); } catch (e) {}
    var next = theme === "dark" ? "light" : "dark";
    themeBtn.setAttribute("aria-label", "Switch to " + next + " theme");
    themeBtn.innerHTML =
      '<i class="fa-solid fa-' + (theme === "dark" ? "sun" : "moon") + '" aria-hidden="true"></i>';
  }

  setTheme(root.dataset.theme || "dark");
  themeBtn.addEventListener("click", function () {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });

  // ----- Mobile menu -----
  var nav = document.getElementById("siteNav");
  var navBtn = document.getElementById("navToggle");

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    navBtn.setAttribute("aria-expanded", String(open));
    navBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    navBtn.innerHTML =
      '<i class="fa-solid fa-' + (open ? "xmark" : "bars") + '" aria-hidden="true"></i>';
  }

  navBtn.addEventListener("click", function () {
    setMenu(!nav.classList.contains("is-open"));
  });
  document.querySelectorAll("#navMobileMenu a").forEach(function (link) {
    link.addEventListener("click", function () { setMenu(false); });
  });

  // ----- Nav gets a background once you scroll -----
  function onScroll() {
    nav.classList.toggle("is-scrolled", window.scrollY > 10);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // ----- Fade sections in as they scroll into view -----
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach(function (el) { observer.observe(el); });
  }

  // ----- Footer year -----
  document.getElementById("year").textContent = new Date().getFullYear();
})();
