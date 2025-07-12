/* === Dynamic Footer Dates === */
const now = new Date();
document.getElementById("currentyear").textContent = now.getFullYear();

const lastMod = document.lastModified;
document.getElementById("lastModified").textContent = `Last modified: ${lastMod}`;
