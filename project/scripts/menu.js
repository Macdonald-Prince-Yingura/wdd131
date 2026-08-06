/* ==========================================
   MR MACKIE FOODS
   MENU JAVASCRIPT
   WDD131 FINAL PROJECT
========================================== */



// ==========================================
// MENU DATA ARRAY OF OBJECTS
// ==========================================


const foodItems = [


    {

        name: "Jollof Rice with Chicken",

        category: "rice",

        price: 65,

        image: "images/jollof.webp",

        description:
        "Authentic Ghanaian Jollof Rice served with charcoal grilled chicken."

    },



    {

        name: "Special Fried Rice",

        category: "rice",

        price: 70,

        image: "images/fried-rice.webp",

        description:
        "Delicious vegetable fried rice served with grilled chicken."

    },



    {

        name: "Banku with Grilled Fish",

        category: "traditional",

        price: 80,

        image: "images/banku.webp",

        description:
        "Traditional Banku served with fresh grilled tilapia and pepper sauce."

    },



    {

        name: "Charcoal Grilled Chicken",

        category: "grill",

        price: 60,

        image: "images/chicken.webp",

        description:
        "Tender chicken grilled over charcoal with special spices."

    },



    {

        name: "Pork Kebab",

        category: "grill",

        price: 55,

        image: "images/pork.webp",

        description:
        "Flavorful grilled pork kebab prepared with local spices."

    }


];








// ==========================================
// DISPLAY MENU ITEMS
// ==========================================


function displayMenu(items) {


    const menuContainer =
        document.querySelector("#menuContainer");



    if (!menuContainer) {


        return;


    }



    menuContainer.innerHTML = "";





    items.forEach((item) => {



        const card = document.createElement("article");



        card.classList.add("meal-card");





        card.innerHTML = `

            <img

                src="${item.image}"

                loading="lazy"

                alt="${item.name}"

                width="600"

                height="400">


            <h3>

                ${item.name}

            </h3>


            <p>

                ${item.description}

            </p>


            <p class="price">

                GH₵${item.price}

            </p>


        `;




        menuContainer.appendChild(card);



    });



}








// ==========================================
// FILTER MENU ITEMS
// ==========================================


function filterMenu(category) {



    if (category === "all") {



        displayMenu(foodItems);



    } else {



        const filteredItems =

        foodItems.filter(
            (item) =>
            item.category === category
        );



        displayMenu(filteredItems);



    }



}







// ==========================================
// BUTTON EVENTS
// ==========================================


function setupFilters() {



    const buttons =
        document.querySelectorAll(".filter-btn");




    buttons.forEach((button) => {



        button.addEventListener(
            "click",
            () => {



                const category =

                button.dataset.category;




                filterMenu(category);



            }
        );



    });



}








// ==========================================
// LOAD MENU
// ==========================================


displayMenu(foodItems);


setupFilters();