// MOBILE NAVIGATION TOGGLE
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

// DROP DOWN FILTER MENUH

document.addEventListener("DOMContentLoaded", () => {
  const dropButton = document.querySelector(".filter-btn");
  const dropContent = document.querySelector(".drop-list");

  dropButton.addEventListener("click", () => {
    dropContent.classList.toggle("show");
  });
});
