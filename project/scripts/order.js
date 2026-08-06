/* ==========================================
   MR MACKIE FOODS
   ORDER JAVASCRIPT
   WDD131 FINAL PROJECT
========================================== */



// ==========================================
// FOOD PRICE DATA
// ARRAY OF OBJECTS
// ==========================================


const menuPrices = [


    {

        name: "Jollof Rice",

        price: 65

    },


    {

        name: "Fried Rice",

        price: 70

    },


    {

        name: "Banku",

        price: 80

    },


    {

        name: "Grilled Chicken",

        price: 60

    },


    {

        name: "Pork Kebab",

        price: 55

    }


];







// ==========================================
// FIND FOOD PRICE
// USING ARRAY METHOD
// ==========================================


function getMealPrice(mealName) {


    const selectedMeal =

        menuPrices.find(

            (meal) =>

            meal.name === mealName

        );



    if (selectedMeal) {


        return selectedMeal.price;


    }


    return 0;


}







// ==========================================
// HANDLE ORDER SUBMISSION
// ==========================================


const orderForm =

document.querySelector("#orderForm");




if (orderForm) {



    orderForm.addEventListener(

        "submit",

        function(event) {



            event.preventDefault();





            const customerName =

            document.querySelector(
                "#customerName"
            ).value.trim();





            const phone =

            document.querySelector(
                "#phone"
            ).value.trim();





            const meal =

            document.querySelector(
                "#meal"
            ).value;





            const quantity =

            Number(

            document.querySelector(
                "#quantity"
            ).value

            );





            const delivery =

            document.querySelector(
                "input[name='delivery']:checked"
            ).value;








            // ==================================
            // VALIDATION
            // ==================================



            if (

                customerName === "" ||

                phone === "" ||

                meal === ""

            ) {



                alert(
                    "Please complete all required fields."
                );



                return;


            }







            // ==================================
            // CALCULATE TOTAL
            // ==================================



            const price =

            getMealPrice(meal);




            const total =

            price * quantity;








            // ==================================
            // ORDER OBJECT
            // ==================================



            const order = {



                customer:

                customerName,



                phone:

                phone,



                meal:

                meal,



                quantity:

                quantity,



                delivery:

                delivery,



                total:

                total



            };







            // ==================================
            // SAVE TO LOCAL STORAGE
            // ==================================



            localStorage.setItem(

                "latestOrder",

                JSON.stringify(order)

            );









            displayOrder(order);



            orderForm.reset();



        }


    );



}









// ==========================================
// DISPLAY ORDER SUMMARY
// ==========================================


function displayOrder(order) {



    const summary =

    document.querySelector(
        "#orderSummary"
    );





    if (!summary) {



        return;


    }






    summary.innerHTML = `


        <article class="summary-card">


            <h3>

                Order Confirmed

            </h3>


            <p>

                Thank you ${order.customer}

                for ordering from Mr Mackie Foods.

            </p>



            <p>

                Meal:

                ${order.meal}

            </p>



            <p>

                Quantity:

                ${order.quantity}

            </p>



            <p>

                Delivery:

                ${order.delivery}

            </p>



            <p>

                Total:

                GH₵${order.total}

            </p>



        </article>


    `;



}









// ==========================================
// LOAD PREVIOUS ORDER
// ==========================================


function loadPreviousOrder() {



    const savedOrder =

    localStorage.getItem(
        "latestOrder"
    );




    if (savedOrder) {



        const order =

        JSON.parse(savedOrder);



        displayOrder(order);



    }


}





loadPreviousOrder();