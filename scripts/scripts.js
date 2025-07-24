// Footer Info
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculator
function calculateWindChill(tempC, speedKmh) {
  return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(speedKmh, 0.16) + 0.3965 * tempC * Math.pow(speedKmh, 0.16);
}

const temp = parseFloat(document.getElementById("temperature").textContent);
const speed = parseFloat(document.getElementById("windSpeed").textContent);
const windChillEl = document.getElementById("windChill");

if (temp <= 10 && speed > 4.8) {
  windChillEl.textContent = `${calculateWindChill(temp, speed).toFixed(1)} °C`;
} else {
  windChillEl.textContent = "N/A";
}
