// place.js

document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  const yearSpan = document.getElementById("currentyear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Set last modified date in footer
  const lastModified = document.getElementById("lastModified");
  if (lastModified) {
    lastModified.textContent = `Last modified: ${document.lastModified}`;
  }

  // Static weather values
  const temp = 24; // °C
  const windSpeed = 10; // km/h

  const windChillElement = document.getElementById("windChill");

  // Wind chill formula (Celsius)
  function calculateWindChill(t, v) {
    return (
      13.12 +
      0.6215 * t -
      11.37 * Math.pow(v, 0.16) +
      0.3965 * t * Math.pow(v, 0.16)
    ).toFixed(1);
  }

  // Only calculate wind chill if conditions are met
  if (temp <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temp, windSpeed)} °C`;
  } else {
    windChillElement.textContent = "N/A";
  }
});
