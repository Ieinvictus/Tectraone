/* ==========================================
   TECTRA ONE — FIXED JAVASCRIPT
   Fixes hidden content caused by reveal effects
========================================== */

(function () {
  "use strict";

  function initTectraOne() {

    /* 1. CURRENT YEAR */

    const yearElement = document.getElementById("current-year");

    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }


    /* 2. FIX REVEAL CONTENT */

    const revealSelectors = [
      ".reveal",
      ".reveal-left",
      ".reveal-right",
      ".reveal-scale"
    ];

    const revealElements = document.querySelectorAll(
      revealSelectors.join(",")
    );

    /*
      IMPORTANT:
      Remove hidden styles first.
      This ensures content remains visible even
      if IntersectionObserver is unavailable.
    */

    revealElements.forEach(function (element) {
      element.style.opacity = "1";
      element.style.visibility = "visible";
      element.style.transform = "none";
      element.classList.add("is-visible");
    });


    /* 3. HEADER SCROLL EFFECT */

    const header = document.querySelector(".site-header");

    function updateHeader() {
      if (!header) return;

      header.classList.toggle(
        "is-scrolled",
        window.scrollY > 30
      );
    }

    updateHeader();

    window.addEventListener("scroll", updateHeader, {
      passive: true
    });


    /* 4. MOBILE NAVIGATION */

    const menuToggle = document.querySelector(
      ".menu-toggle, .nav-toggle, .mobile-menu-toggle"
    );

    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

      menuToggle.setAttribute("aria-expanded", "false");

      menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.contains("is-open");

        navLinks.classList.toggle("is-open", !isOpen);

        menuToggle.classList.toggle("is-active", !isOpen);

        menuToggle.setAttribute(
          "aria-expanded",
          String(!isOpen)
        );

        document.body.classList.toggle("menu-open", !isOpen);

      });

      navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

          navLinks.classList.remove("is-open");
          menuToggle.classList.remove("is-active");

          menuToggle.setAttribute("aria-expanded", "false");

          document.body.classList.remove("menu-open");

        });

      });

      document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

          navLinks.classList.remove("is-open");
          menuToggle.classList.remove("is-active");

          menuToggle.setAttribute("aria-expanded", "false");

          document.body.classList.remove("menu-open");

        }

      });

    }


    /* 5. SMOOTH SCROLLING */

    document.querySelectorAll('a[href*="#"]').forEach(function (link) {

      link.addEventListener("click", function (event) {

        const href = link.getAttribute("href");

        if (!href || href === "#") return;

        let url;

        try {
          url = new URL(href, window.location.href);
        } catch (error) {
          return;
        }

        const currentPath = window.location.pathname.replace(/\/+$/, "");
        const targetPath = url.pathname.replace(/\/+$/, "");

        const samePage =
          url.origin === window.location.origin &&
          currentPath === targetPath;

        if (!samePage || !url.hash) return;

        let target;

        try {
          target = document.querySelector(
            decodeURIComponent(url.hash)
          );
        } catch (error) {
          return;
        }

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
          behavior: window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches ? "auto" : "smooth",
          block: "start"
        });

        if (window.location.hash !== url.hash) {
          history.pushState(null, "", url.hash);
        }

      });

    });


    /* 6. FAQ ACCORDION */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function (item) {

      item.addEventListener("toggle", function () {

        if (!item.open) return;

        faqItems.forEach(function (otherItem) {

          if (otherItem !== item) {
            otherItem.open = false;
          }

        });

      });

    });


    /* 7. INQUIRY FORM VALIDATION */

    const inquiryForm = document.getElementById("inquiry-form");

    if (inquiryForm) {

      inquiryForm.addEventListener("submit", function (event) {

        if (!inquiryForm.checkValidity()) {

          event.preventDefault();

          inquiryForm.reportValidity();

          return;
        }

        /*
          Do not prevent submission here.
          Allow a properly configured form action or backend
          to receive the inquiry.
        */

      });

    }


    /* 8. BACK TO TOP BUTTON */

    const backToTop = document.querySelector(".back-to-top");

    if (backToTop) {

      function updateBackToTop() {

        backToTop.classList.toggle(
          "is-visible",
          window.scrollY > 500
        );

      }

      updateBackToTop();

      window.addEventListener("scroll", updateBackToTop, {
        passive: true
      });

      backToTop.addEventListener("click", function () {

        window.scrollTo({
          top: 0,
          behavior: window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches ? "auto" : "smooth"
        });

      });

    }


    /* 9. EXTERNAL LINK SECURITY */

    document.querySelectorAll('a[target="_blank"]').forEach(
      function (link) {

        link.setAttribute("rel", "noopener noreferrer");

      }
    );


    /* 10. IMAGE LOADING */

    document.querySelectorAll("img").forEach(function (img) {

      if (
        !img.hasAttribute("loading") &&
        !img.closest(".hero") &&
        !img.closest(".home-hero")
      ) {
        img.loading = "lazy";
      }

      if (!img.hasAttribute("decoding")) {
        img.decoding = "async";
      }

    });


    /* 11. PAGE INITIALIZED */

    document.documentElement.classList.add("js-ready");

    console.log("Tectra One JavaScript loaded successfully.");

  }


  /* RUN AFTER DOM IS READY */

  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      initTectraOne,
      { once: true }
    );

  } else {

    initTectraOne();

  }

})();
