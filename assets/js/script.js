'use strict';



const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  });
}



/**
 * search toggle
 */

const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    searchBox.classList.toggle("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * background audio
 */

const backgroundAudio = document.querySelector("[data-bg-audio]");

if (backgroundAudio) {
  const attemptAutoplay = () => {
    backgroundAudio.play().catch(() => {});
  };

  const startAudio = () => {
    attemptAutoplay();
    window.removeEventListener("click", startAudio);
    window.removeEventListener("touchstart", startAudio);
  };

  attemptAutoplay();
  window.addEventListener("load", attemptAutoplay);
  window.addEventListener("click", startAudio, { once: true });
  window.addEventListener("touchstart", startAudio, { once: true });
}