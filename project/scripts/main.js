/* ==========================================
   MR MACKIE FOODS
   MAIN JAVASCRIPT
   WDD131 FINAL PROJECT
========================================== */



// ==========================================
// MOBILE NAVIGATION
// ==========================================


const menuButton = document.querySelector("#menuButton");

const navigation = document.querySelector("#primaryNav");



if (menuButton && navigation) {


    menuButton.addEventListener("click", () => {


        navigation.classList.toggle("open");



        if (navigation.classList.contains("open")) {


            menuButton.textContent = "✖";


        } else {


            menuButton.textContent = "☰";


        }


    });


}






// ==========================================
// FOOTER YEAR
// ==========================================


function displayCurrentYear() {


    const yearElement =
        document.querySelector("#currentYear");



    if (yearElement) {


        const today =
            new Date();



        yearElement.textContent =
            today.getFullYear();


    }


}






// ==========================================
// LAST MODIFIED DATE
// ==========================================


function displayLastModified() {


    const modifiedElement =
        document.querySelector("#lastModified");



    if (modifiedElement) {


        modifiedElement.textContent =
            document.lastModified;


    }


}







// ==========================================
// TODAY'S SPECIAL MEAL
// USING ARRAY + OBJECTS
// ==========================================


function displaySpecialMeal() {


    const specialElement =
        document.querySelector("#specialMeal");



    if (!specialElement) {


        return;


    }




    const meals = [


        {

            name: "Charcoal Grilled Chicken",

            price: 60,

            description:
            "Juicy grilled chicken served with spicy pepper sauce."


        },


        {


            name: "Jollof Rice Special",

            price: 65,

            description:
            "Traditional Ghanaian Jollof Rice with grilled chicken."


        },


        {


            name: "Banku and Fresh Fish",

            price: 80,

            description:
            "Soft Banku served with perfectly grilled tilapia."


        }


    ];





    const today =
        new Date();



    const mealIndex =
        today.getDate()
        %
        meals.length;




    const special =
        meals[mealIndex];





    specialElement.innerHTML = `

        <article class="special-card">

            <h3>${special.name}</h3>

            <p>${special.description}</p>

            <strong>
                GH₵${special.price}
            </strong>

        </article>

    `;


}







// ==========================================
// LOCAL STORAGE VISITOR COUNTER
// ==========================================


function visitorCounter() {


    const visitMessage =
        document.querySelector("#visitMessage");



    if (!visitMessage) {


        return;


    }




    let visits =
        Number(localStorage.getItem("mrmackieVisits"))
        || 0;




    visits++;




    localStorage.setItem(
        "mrmackieVisits",
        visits
    );






    if (visits === 1) {



        visitMessage.textContent =

        `Welcome to Mr Mackie Foods!
        This is your first visit.`;



    } else {



        visitMessage.textContent =

        `Welcome back!
        You have visited our website ${visits} times.`;



    }



}








// ==========================================
// INITIALIZE FUNCTIONS
// ==========================================


displayCurrentYear();

displayLastModified();

displaySpecialMeal();

visitorCounter();