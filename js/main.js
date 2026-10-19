// Small, dependency-free script: mobile menu, nav background, scroll reveal.

(function () {
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
