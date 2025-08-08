// main.js

document.addEventListener("DOMContentLoaded", () => {
  // ==========================
  // Hamburger Menu Toggle
  // ==========================
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      hamburger.classList.toggle("open");
    });
  }

  // ==========================
  // Scroll Fade-In Animation
  // ==========================
  const hiddenElements = document.querySelectorAll(".hidden, .fade-in");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show", "appear");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0,
      rootMargin: "0px 0px -100px 0px",
    }
  );
  hiddenElements.forEach((el) => observer.observe(el));

  // ==========================
  // Gallery Modal (Lightbox)
  // ==========================
  const galleryImages = document.querySelectorAll(".gallery img");
  const modal = document.createElement("div");
  modal.classList.add("modal");
  document.body.appendChild(modal);

  // Close modal when clicking outside image or on close button
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("close")) {
      modal.style.display = "none";
    }
  });

  galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
      modal.innerHTML = `
        <span class="close" aria-label="Close modal" role="button" tabindex="0">&times;</span>
        <img src="${image.src}" alt="${image.alt || "Gallery Image"}" class="modal-img" />
      `;
      modal.style.display = "flex";

      // Optional: allow close on pressing Escape key
      const escListener = (event) => {
        if (event.key === "Escape") {
          modal.style.display = "none";
          document.removeEventListener("keydown", escListener);
        }
      };
      document.addEventListener("keydown", escListener);
    });
  });

  // ==========================
  // Form Validation & Redirect
  // ==========================
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.querySelector("#name");
      const email = form.querySelector("#email");
      // Adjust according to your form's actual input id for order description or meal selection
      const order = form.querySelector("#order") || form.querySelector("#meal") || form.querySelector("#quantity");

      if (!name?.value.trim()) {
        alert("Please enter your name.");
        name?.focus();
        return;
      }

      if (!email?.value.includes("@")) {
        alert("Please enter a valid email address.");
        email?.focus();
        return;
      }

      if (order && !order.value.trim()) {
        alert("Please fill in your order details.");
        order.focus();
        return;
      }

      // If validation passes, redirect to thank you page
      window.location.href = "thankyou.html";
    });
  }

  // ==========================
  // Splash Screen or Loader Fade Out
  // ==========================
  const splash = document.querySelector(".splash");
  if (splash) {
    setTimeout(() => {
      splash.classList.add("fade-out");
      setTimeout(() => (splash.style.display = "none"), 1000);
    }, 1500);
  }

  const loader = document.querySelector(".loader");
  if (loader) {
    window.addEventListener("load", () => {
      loader.classList.add("fade-out");
      setTimeout(() => (loader.style.display = "none"), 500);
    });
  }

  // ==========================
  // Dynamic Footer Year Update
  // ==========================
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
