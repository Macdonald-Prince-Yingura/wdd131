// Hamburger toggle
document.addEventListener("DOMContentLoaded", () => {
    const btn  = document.getElementById("hamburger");
    const menu = document.getElementById("nav-menu");
  
    btn.addEventListener("click", () => {
      menu.classList.toggle("active");
  
      // Swap icon ☰ ↔ ✖
      btn.textContent = menu.classList.contains("active") ? "✖" : "☰";
      btn.setAttribute(
        "aria-label",
        menu.classList.contains("active") ? "Close navigation menu" : "Open navigation menu"
      );
    });
  });
  