document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      hamburger.classList.toggle("open");

      // Update aria-expanded for accessibility
      const expanded = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", !expanded);
    });
  }

  // Dynamic footer year update
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // ORDER FORM LOGIC (if on order page)
  const form = document.getElementById("orderForm");
  if (form) {
    // Load order count from localStorage
    let ordersPlaced = Number(localStorage.getItem("ordersPlaced")) || 0;
    const ordersCountSpan = document.getElementById("ordersPlaced");
    if (ordersCountSpan) {
      ordersCountSpan.textContent = ordersPlaced;
    }

    // Define Order object constructor
    function Order(name, email, phone, meal, quantity, instructions) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.meal = meal;
      this.quantity = quantity;
      this.instructions = instructions;
      this.timestamp = new Date().toISOString();
    }

    // Store all orders in array
    let orders = JSON.parse(localStorage.getItem("ordersArray")) || [];

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Get values
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
      const meal = form.meal.value;
      const quantity = Number(form.quantity.value);
      const instructions = form.instructions.value.trim();

      // Validation
      if (name === "") {
        alert("Please enter your full name.");
        form.name.focus();
        return;
      }
      if (!email.includes("@") || email.length < 5) {
        alert("Please enter a valid email address.");
        form.email.focus();
        return;
      }
      if (phone === "" || phone.length < 6) {
        alert("Please enter a valid phone number.");
        form.phone.focus();
        return;
      }
      if (meal === "") {
        alert("Please select a meal.");
        form.meal.focus();
        return;
      }
      if (quantity < 1 || isNaN(quantity)) {
        alert("Please enter a valid quantity (1 or more).");
        form.quantity.focus();
        return;
      }

      // Create new order object
      const newOrder = new Order(name, email, phone, meal, quantity, instructions);

      // Add to array and save in localStorage
      orders.push(newOrder);
      localStorage.setItem("ordersArray", JSON.stringify(orders));

      // Update orders placed counter
      ordersPlaced++;
      localStorage.setItem("ordersPlaced", ordersPlaced);
      if (ordersCountSpan) ordersCountSpan.textContent = ordersPlaced;

      // Optional: clear form or redirect
      alert(`Thank you, ${name}! Your order for ${quantity} x ${meal} has been received.`);

      form.reset();

      // Redirect to thank you page after short delay
      setTimeout(() => {
        window.location.href = "thankyou.html";
      }, 1500);
    });
  }
});
