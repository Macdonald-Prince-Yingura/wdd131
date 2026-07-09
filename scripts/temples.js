const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
  `Last Modified: ${document.lastModified}`;

const menu = document.querySelector("#menu");

const nav = document.querySelector(".navigation");

menu.addEventListener("click", () => {

  nav.classList.toggle("open");

  menu.textContent =
    nav.classList.contains("open") ? "✖" : "☰";

});