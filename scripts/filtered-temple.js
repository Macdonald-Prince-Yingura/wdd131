const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Detroit Michigan",
    location: "Bloomfield Hills, Michigan, United States",
    dedicated: "2023, October, 22",
    area: 39918,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/detroit-michigan-temple/detroit-michigan-temple-1.jpg",
  },
  {
    templeName: "St. George Utah",
    location: "St. George, Utah, United States",
    dedicated: "1877, April, 6",
    area: 111206,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/st-george-utah-temple/st-george-utah-temple-2.jpg",
  },
  {
    templeName: "Bangkok Thailand",
    location: "Bangkok, Thailand",
    dedicated: "2023, November, 19",
    area: 41500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-1.jpg",
  },
];

// --- Build one figure/card per temple ---
function createTempleCard(temple) {
  const figure = document.createElement("figure");

  const img = document.createElement("img");
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = "lazy"; // native lazy loading
  img.width = 400;
  img.height = 250;

  const figcaption = document.createElement("figcaption");
  figcaption.innerHTML = `
    <h3>${temple.templeName}</h3>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
  `;

  figure.appendChild(img);
  figure.appendChild(figcaption);
  return figure;
}

function renderTemples(templeArray) {
  const gallery = document.getElementById("temple-gallery");
  gallery.innerHTML = "";
  templeArray.forEach((temple) => {
    gallery.appendChild(createTempleCard(temple));
  });
}

// --- Filtering logic ---
function getDedicatedYear(temple) {
  return parseInt(temple.dedicated.split(",")[0], 10);
}

function filterTemples(filter) {
  switch (filter) {
    case "old":
      return temples.filter((t) => getDedicatedYear(t) < 1900);
    case "new":
      return temples.filter((t) => getDedicatedYear(t) > 2000);
    case "large":
      return temples.filter((t) => t.area > 90000);
    case "small":
      return temples.filter((t) => t.area < 10000);
    case "home":
    default:
      return temples;
  }
}

function applyFilter(filter, link) {
  const filtered = filterTemples(filter);
  renderTemples(filtered);

  document.getElementById("filter-heading").textContent =
    filter.charAt(0).toUpperCase() + filter.slice(1);

  document
    .querySelectorAll("nav ul li a")
    .forEach((a) => a.classList.remove("active"));
  if (link) link.classList.add("active");

  // Close mobile menu after a selection
  document.getElementById("nav-list").classList.remove("open");
}

// --- Navigation event listeners ---
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    applyFilter(link.dataset.filter, link);
  });
});

// --- Hamburger menu toggle (mobile) ---
const menuBtn = document.getElementById("menu-btn");
const navList = document.getElementById("nav-list");
menuBtn.addEventListener("click", () => {
  const isOpen = navList.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
});

// --- Footer: dynamic year and last modified date ---
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
  document.lastModified;

// --- Initial render ---
renderTemples(temples);