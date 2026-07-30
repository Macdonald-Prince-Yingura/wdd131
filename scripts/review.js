// =======================================
// WDD131 - Product Review Form
// review.js
// =======================================

// Get the current review count from localStorage.
// If it doesn't exist yet, start at 0.
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

// Increment the counter each time review.html loads
// after a successful form submission.
reviewCount++;

// Save the updated count.
localStorage.setItem("reviewCount", reviewCount);

// Display the review count.
document.getElementById("reviewCount").textContent = reviewCount;

// Footer information.
document.getElementById("currentyear").textContent =
    new Date().getFullYear();

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;