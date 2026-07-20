// Temple Data Array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/aba-nigeria.webp"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "images/accra-ghana.webp"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, USA",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/manti-utah.webp"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl: "images/salt-lake.webp"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "images/rome-italy.webp"
  },
  {
    templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44000,
    imageUrl: "images/paris-france.webp"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, USA",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/payson-utah.webp"
  },
  {
    templeName: "Laie Hawaii",
    location: "Laie, Hawaii, USA",
    dedicated: "1919, November, 27",
    area: 42100,
    imageUrl: "images/laie-hawaii.webp"
  },
  {
    templeName: "Nauvoo Illinois",
    location: "Nauvoo, Illinois, USA",
    dedicated: "2002, June, 27",
    area: 54000,
    imageUrl: "images/nauvoo.webp"
  },
  {
    templeName: "Lagos Nigeria",
    location: "Lagos, Nigeria",
    dedicated: "2025, May, 18",
    area: 19000,
    imageUrl: "images/lagos.webp"
  },
  {
    templeName: "Nairobi Kenya",
    location: "Nairobi, Kenya",
    dedicated: "2025, May, 18",
    area: 19800,
    imageUrl: "images/nairobi.webp"
  },
  {
    templeName: "Feather River California",
    location: "Yuba City, California, USA",
    dedicated: "2022, October, 9",
    area: 38700,
    imageUrl: "images/feather-river.webp"
  }
];

// Select Gallery
const gallery = document.querySelector(".gallery");

// Display Temple Cards
function displayTemples(templeList) {

  gallery.innerHTML = "";

  templeList.forEach((temple) => {

    const card = document.createElement("section");

    card.innerHTML = `
      <img
        src="${temple.imageUrl}"
        alt="${temple.templeName} Temple"
        loading="lazy"
        width="400"
        height="250">

      <div class="card-content">

        <h3>${temple.templeName}</h3>

        <p><strong>Location:</strong> ${temple.location}</p>

        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>

        <p><strong>Area:</strong> ${temple.area.toLocaleString()} square feet</p>

      </div>
    `;

    gallery.appendChild(card);

  });

}

// Display all temples on page load
displayTemples(temples);
// -----------------------------
// Navigation Filters
// -----------------------------

document.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("main h2").textContent = "Home";
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector("main h2").textContent = "Old Temples";

    const oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    });

    displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector("main h2").textContent = "New Temples";

    const newTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    });

    displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector("main h2").textContent = "Large Temples";

    const largeTemples = temples.filter(temple => temple.area > 90000);

    displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector("main h2").textContent = "Small Temples";

    const smallTemples = temples.filter(temple => temple.area < 10000);

    displayTemples(smallTemples);
});


// -----------------------------
// Responsive Navigation Menu
// -----------------------------

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }

});


// -----------------------------
// Footer
// -----------------------------

document.querySelector("#year").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;