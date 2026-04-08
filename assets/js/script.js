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
const audioToggle = document.querySelector("[data-audio-toggle]");

if (backgroundAudio && audioToggle) {
  backgroundAudio.muted = true;

  const showToggle = () => {
    audioToggle.classList.add("active");
  };

  const hideToggle = () => {
    audioToggle.classList.remove("active");
  };

  const attemptAutoplay = () => {
    backgroundAudio.play().then(showToggle).catch(showToggle);
  };

  const unmuteAudio = () => {
    backgroundAudio.muted = false;
    backgroundAudio.play().catch(() => {});
    hideToggle();
  };

  attemptAutoplay();
  window.addEventListener("load", attemptAutoplay);
  audioToggle.addEventListener("click", unmuteAudio);
  audioToggle.addEventListener("touchstart", unmuteAudio, { passive: true });
}