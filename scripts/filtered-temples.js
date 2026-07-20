const temples = [

{
templeName:"Aba Nigeria",
location:"Aba, Nigeria",
dedicated:"2005, August, 7",
area:11500,
imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-2733.jpg"
},

{
templeName:"Accra Ghana",
location:"Accra, Ghana",
dedicated:"2004, January,11",
area:17500,
imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-7594.jpg"
},

{
templeName:"Manti Utah",
location:"Utah, USA",
dedicated:"1888, May,21",
area:74792,
imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-406.jpg"
},

{
templeName:"Salt Lake",
location:"Utah, USA",
dedicated:"1893, April,6",
area:253000,
imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-377.jpg"
},

{
templeName:"Rome Italy",
location:"Rome, Italy",
dedicated:"2019, March,10",
area:41010,
imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-435.jpg"
},

{
templeName:"Paris France",
location:"Paris, France",
dedicated:"2017, May,21",
area:44000,
imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-1954.jpg"
},

{
templeName:"Payson Utah",
location:"Utah, USA",
dedicated:"2015, June,7",
area:96630,
imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-384.jpg"
},

{
templeName:"Laie Hawaii",
location:"Hawaii, USA",
dedicated:"1919, November,27",
area:42100,
imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-761.jpg"
},

{
templeName:"Nauvoo Illinois",
location:"Illinois, USA",
dedicated:"2002, June,27",
area:54000,
imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-577.jpg"
},

{
templeName:"Lagos Nigeria",
location:"Lagos, Nigeria",
dedicated:"2025, May,18",
area:19000,
imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/lagos-nigeria-temple/lagos-nigeria-temple-57718.jpg"
},

{
templeName:"Nairobi Kenya",
location:"Nairobi, Kenya",
dedicated:"2025, May,18",
area:19800,
imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-59047.jpg"
},

{
templeName:"Feather River California",
location:"California, USA",
dedicated:"2022, October,9",
area:38700,
imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/feather-river-california-temple/feather-river-california-temple-52290.jpg"
}

];

const gallery = document.querySelector(".gallery");

function displayTemples(filteredTemples){

gallery.innerHTML="";

filteredTemples.forEach(temple=>{

const card=document.createElement("section");

card.innerHTML=`

<h3>${temple.templeName}</h3>

<p><strong>Location:</strong> ${temple.location}</p>

<p><strong>Dedicated:</strong> ${temple.dedicated}</p>

<p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>

<img src="${temple.imageUrl}"
alt="${temple.templeName} Temple"
loading="lazy">

`;

gallery.appendChild(card);

});

}

displayTemples(temples);

// Filters

document.querySelector("#home").addEventListener("click",()=>displayTemples(temples));

document.querySelector("#old").addEventListener("click",()=>{

displayTemples(

temples.filter(t=>parseInt(t.dedicated)>0 && parseInt(t.dedicated)<1900)

);

});

document.querySelector("#new").addEventListener("click",()=>{

displayTemples(

temples.filter(t=>parseInt(t.dedicated)>2000)

);

});

document.querySelector("#large").addEventListener("click",()=>{

displayTemples(

temples.filter(t=>t.area>90000)

);

});

document.querySelector("#small").addEventListener("click",()=>{

displayTemples(

temples.filter(t=>t.area<10000)

);

});

// Mobile Menu

const menu=document.querySelector("#menu");

const nav=document.querySelector(".navigation");

menu.addEventListener("click",()=>{

nav.classList.toggle("open");

menu.textContent=nav.classList.contains("open")?"✖":"☰";

});

// Footer

document.querySelector("#year").textContent=new Date().getFullYear();

document.querySelector("#lastModified").textContent=`Last Modified: ${document.lastModified}`;