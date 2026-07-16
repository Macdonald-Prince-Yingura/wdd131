// ==========================================
// WDD131 - Place Page
// Author: Macdonald Prince Yingura
// ==========================================

// ---------- Footer Information ----------

// Display current year
document.getElementById("year").textContent = new Date().getFullYear();

// Display last modified date
document.getElementById("lastModified").textContent = document.lastModified;


// ---------- Weather Data ----------

// Temperature (°C)
const temperature = 29;

// Wind Speed (km/h)
const windSpeed = 15;


// Display values on the page
document.getElementById("temperature").textContent = temperature;
document.getElementById("windSpeed").textContent = `${windSpeed} km/h`;


// ---------- Wind Chill Calculation ----------

function calculateWindChill(temp, speed) {

    // Environment Canada formula (metric)
    if (temp <= 10 && speed > 4.8) {

        const chill =
            13.12 +
            (0.6215 * temp) -
            (11.37 * Math.pow(speed, 0.16)) +
            (0.3965 * temp * Math.pow(speed, 0.16));

        return `${chill.toFixed(1)} °C`;
    }

    return "N/A";
}


// Display wind chill
document.getElementById("windChillOutput").textContent =
    calculateWindChill(temperature, windSpeed);


// ---------- Console Check ----------

console.log("Place page loaded successfully.");