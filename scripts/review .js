// scripts/review.js

// Get existing review count from localStorage
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

// Increment the count
reviewCount++;

// Store updated count back in localStorage
localStorage.setItem("reviewCount", reviewCount);

// Display it on the page
document.getElementById("reviewCount").textContent = reviewCount;
