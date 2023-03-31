// MOBILE NAVIGATION TOGGLE
document.querySelector(".menu-toggle").addEventListener("click", function () {
  let nav = document.querySelector("nav");
  let menuToggle = document.querySelector(".menu-toggle");

  nav.classList.toggle("mobile-nav");
  menuToggle.classList.toggle("is-active");
});

// DROP DOWN FILTER MENUH

document.addEventListener("DOMContentLoaded", () => {
  const dropButton = document.querySelector(".drop-btn");
  const dropContent = document.querySelector(".drop-list");

  dropButton.addEventListener("click", () => {
    dropContent.classList.toggle("show");
  });
});
