document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("#menu");
  const navigation = document.querySelector(".navigation");

  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");
    menuButton.textContent = navigation.classList.contains("show") ? "✖" : "☰";
  });

  // Footer dynamic year and last modified
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
});
