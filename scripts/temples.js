// Hamburger menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.querySelector("nav");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
    menuToggle.textContent = nav.classList.contains("show") ? "✖" : "☰";
  });

  // Set copyright year
  const yearSpan = document.getElementById("currentyear");
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }

  // Set last modified date
  const lastModified = document.getElementById("lastModified");
  if (lastModified) {
    lastModified.textContent = `Last modified: ${document.lastModified}`;
  }
});
