// filtered-temples.js

const temples = [
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "April 6, 1893",
    area: 253015,
    imageUrl: "images/salt-lake-temple.jpg"
  },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "January 11, 2004",
    area: 17500,
    imageUrl: "images/accra-ghana-temple.jpg"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedicated: "November 27, 1919",
    area: 47500,
    imageUrl: "images/laie-hawaii-temple.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "March 10, 2019",
    area: 41000,
    imageUrl: "images/rome-italy-temple.jpg"
  },
  {
    templeName: "Provo City Center Temple",
    location: "Provo, Utah",
    dedicated: "March 20, 2016",
    area: 85000,
    imageUrl: "images/provo-city-center-temple.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Le Chesnay, France",
    dedicated: "May 21, 2017",
    area: 44000,
    imageUrl: "images/paris-france-temple.jpg"
  },
  {
    templeName: "Logan Utah Temple",
    location: "Logan, Utah",
    dedicated: "May 17, 1884",
    area: 119619,
    imageUrl: "images/logan-utah-temple.jpg"
  },
  {
    templeName: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "August 7, 2005",
    area: 11500,
    imageUrl: "images/aba-nigeria-temple.jpg"
  },
  {
    templeName: "Kinshasa DR Congo Temple",
    location: "Kinshasa, DRC",
    dedicated: "April 14, 2019",
    area: 10600,
    imageUrl: "images/kinshasa-dr-congo-temple.jpg"
  },
  {
    templeName: "Colonia Juarez Chihuahua Mexico Temple",
    location: "Colonia Juarez, Mexico",
    dedicated: "March 6, 1999",
    area: 6800,
    imageUrl: "images/colonia-juarez-chihuahua-temple.jpg"
  }
];

const templeContainer = document.getElementById("temples");

function displayTemples(filteredTemples) {
  templeContainer.innerHTML = "";
  filteredTemples.forEach(temple => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;

    templeContainer.appendChild(card);
  });
}

displayTemples(temples);

function filterTemples(criteria) {
  let result;
  switch (criteria) {
    case "old":
      result = temples.filter(t => parseInt(t.dedicated.slice(-4)) < 1900);
      break;
    case "new":
      result = temples.filter(t => parseInt(t.dedicated.slice(-4)) > 2000);
      break;
    case "large":
      result = temples.filter(t => t.area > 90000);
      break;
    case "small":
      result = temples.filter(t => t.area < 10000);
      break;
    default:
      result = temples;
  }
  displayTemples(result);
}

document.getElementById("home").addEventListener("click", () => filterTemples("all"));
document.getElementById("old").addEventListener("click", () => filterTemples("old"));
document.getElementById("new").addEventListener("click", () => filterTemples("new"));
document.getElementById("large").addEventListener("click", () => filterTemples("large"));
document.getElementById("small").addEventListener("click", () => filterTemples("small"));

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
