// Footer: current year & last modified
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("currentyear"); // ✅ ID matches HTML
  const modPara = document.getElementById("lastModified");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (modPara) {
    modPara.textContent = `Last Modified: ${document.lastModified}`;
  }
});
