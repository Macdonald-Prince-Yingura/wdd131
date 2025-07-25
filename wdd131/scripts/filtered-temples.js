// ========= filtered-temples.js =========

const temples = [
  {
    name: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004-01-11",
    area: 17500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-lds-37761.jpg"
  },
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893-04-06",
    area: 253015,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-lds-866632-wallpaper.jpg"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 40000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-lds-270906-wallpaper.jpg"
  },
  {
    name: "Laie Hawaii Temple",
    location: "Laie, Hawaii, USA",
    dedicated: "1919-11-27",
    area: 42320,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-lds-87603-wallpaper.jpg"
  },
  {
    name: "Kinshasa DR Congo Temple",
    location: "Kinshasa, DR Congo",
    dedicated: "2019-04-14",
    area: 12000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-democratic-republic-of-the-congo-temple/kinshasa-democratic-republic-of-the-congo-temple-lds-243242-wallpaper.jpg"
  },
  {
    name: "Paris France Temple",
    location: "Le Chesnay, France",
    dedicated: "2017-05-21",
    area: 44000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-lds-148960-wallpaper.jpg"
  },
  {
    name: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    name: "Manti Utah Temple",
    location: "Manti, Utah, USA",
    dedicated: "1888-05-21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    name: "Payson Utah Temple",
    location: "Payson, Utah, USA",
    dedicated: "2015-06-07",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  }
];

const container = document.querySelector(".temples-grid") || document.getElementById("temples-container");
const navLinks = document.querySelectorAll("nav button");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

function createCard(temple) {
  const figure = document.createElement("figure");
  figure.innerHTML = `
    <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
    <figcaption>${temple.name}</figcaption>
  `;
  container.appendChild(figure);
}


function displayTemples(filteredTemples) {
  container.innerHTML = "";
  filteredTemples.forEach(createCard);
}

displayTemples(temples);

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const category = link.dataset.filter;
    let filtered = temples;

    if (category === "old") {
      filtered = temples.filter(t => new Date(t.dedicated) < new Date("1900-01-01"));
    } else if (category === "new") {
      filtered = temples.filter(t => new Date(t.dedicated) > new Date("2000-01-01"));
    } else if (category === "large") {
      filtered = temples.filter(t => t.area > 90000);
    } else if (category === "small") {
      filtered = temples.filter(t => t.area < 10000);
    }

    displayTemples(filtered);
  });
});

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});
// ======= Footer Year and Last Modified =======