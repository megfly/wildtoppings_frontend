
//ADD TOPPING BUTTON ISNT WORKING- I THINK I HAVE TO GRAB IT BY THE DATA ID BUT IM HAVING TROUBLE WITH FINDING HOW TO GRAB IT
    //steps for add a topping....
        //1. under addpizzatoppingstothedom() 
            //document.querySelectorAll("#add-topping".forEach(btn => btn.addEventListener('click', showForm))

        //2. then we go to the showform function - this just shows the form
            //function showForm() {document.getElementById('add-a-topping-form').style.display = 'block'

        //3. then under fetchpizzas() which is a pizza get request we have event listeners attached to the add topping submit button

            //let addToppingToPizzaSubmitButton = document.querySelector('#add-a-topping-btn')
            //let addToppingToPizzaSubmitButtonDataId = addToppingToPizzaSubmitButton.getAttribute('data-id')

            //SUBMIT EVENT OON FORM

            //addToppingToPizzaSubmitButton.addEventListener("submit", (event) => {toppingFormHandler(event)})

//TOPPINGS/UNDEFINED
        //4. Then it goes to the toppingformhandler
            //function toppingFormHandler(event) {
                //event.preventDefault()
                //const toppingInput = document.querySelector('#input-topping').value
                //postRequestForToppingForm(toppingInput) //POST REQUEST GRABS INPUT VALUE................


        //5. Next it goes to post request for topping form
        //6. lastly we will then want to add it to the dom


//create a pizza action is freezing


// URL's
const BASE_URL = "http://localhost:3000"
const PIZZAS_URL = `${BASE_URL}/api/v1/pizzas`
const TOPPINGS_URL = `${BASE_URL}/api/v1/toppings`



// DOMContent Loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("loaded")
    fetchPizzas()
    fetchToppings()


        // CREATE A NEW PIZZA EVENT LISTENER
        const createPizzaForm = document.querySelector('#create-pizza-form')
        createPizzaForm.addEventListener("submit", (event) => {
            pizzaFormHandler(event)
        })
})



// Fetch Request to GET pizzas
    function fetchPizzas() {
        fetch(PIZZAS_URL) //promise
        .then((response) => response.json())
        .then((pizzaJson) => {
            
            pizzaJson.data.forEach(pizza => {
                let newPizza = new Pizza(pizza, pizza.attributes)
                document.querySelector('#pizza-container').innerHTML += newPizza.renderPizzaCard() //go over this line

                //Add Pizzas to the DOM!!!
                addPizzaToppingsToDOM(pizza)

            })

                let addToppingToPizzaForm = document.querySelector('#add-a-topping-form')

                addToppingToPizzaForm.addEventListener("submit", (event) => {
                    console.log('PIZZZZZZZAAAAAAAAAAA')
                    toppingFormHandler(event)
                })

        })
    };


    
// Fetch request to POST new pizzas
function postRequestForPizzaForm(title, description) {
    event.preventDefault()

    //THIS IS FREEZING AFTER I CREATE A PIZZA

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify ({
                title: title,
                description: description,
            })
        }
        fetch(PIZZAS_URL, configObj)    
            .then(response => response.json())
            .then(pizza => {
        
                    let brandNewPizza = new Pizza(pizza, pizza.data.attributes)
                    
                    document.querySelector('#pizza-container').innerHTML += brandNewPizza.renderPizzaCard()

                    console.log(brandNewPizza)
                
            })
        }



//Fetch Requests for ingredients .............. currently not using this
    function fetchToppings() {
        fetch(TOPPINGS_URL) //promise
        .then((response) => response.json())
        .then((toppingJson) => {
             
            let newTopping = new Topping(toppingJson)

            })
        }
    ;




//function for pizza form handler
function pizzaFormHandler(event) {

    event.preventDefault()

    const titleInput = document.querySelector('#input-title').value //grabs input value
    const descriptionInput = document.querySelector('#input-description').value

        postRequestForPizzaForm(titleInput, descriptionInput)
}




//TOPPING FORM HANDLER
function toppingFormHandler(event) {
    event.preventDefault()

    //do i need to grab the data id?? /////////////////////////////////////////////////////

    const toppingInput = document.querySelector('#input-topping').value //grabs input value

        postRequestForToppingForm(toppingInput) //POST REQUEST GRABS INPUT VALUE................
}



//Adding our pizza toppings to the DOM!!!!!!!!!
function addPizzaToppingsToDOM(pizza) {
    pizza.attributes.toppings.forEach(ing => {

        const ul = document.querySelector(`#pizza-${ing.pizza_id}-toppings`)

            const li = document.createElement('li')
            li.innerHTML += `${ing.ingredient_name}`
  
                ul.appendChild(li)

                //Adding delete buttons to each topping

                    const deleteButton = document.createElement('button')

                    deleteButton.setAttribute("class", "delete-topping")
                    deleteButton.setAttribute("data-id", `${ing.id}`)
                    deleteButton.innerText = "Delete Topping"

                    li.appendChild(deleteButton)
            
    });

    // Finding each delete topping button and adding an event listener
    document.querySelectorAll(".delete-topping").forEach(btn => btn.addEventListener('click', deleteTopping))
    document.querySelectorAll("#add-topping").forEach(btn => btn.addEventListener('click', showForm)) 
}



//Function to DElete topping
function deleteTopping() {
    
    event.preventDefault()

    const configObj = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    } 
    fetch(TOPPINGS_URL + `/${event.target.dataset.id}`, configObj) //target the dataset id of the topping that is clicked
        .then(event.target.parentElement.remove())
}



//POST REQUEST TO ADD TOPPING TO PIZZA
function postRequestForToppingForm(ingredient_name) {
//debugger
    event.preventDefault()
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ 
            //need a way to have foreign id to associate it with a current pizza
            //connect to pizza with dropdown, or through show page,.... 
            //https://stackoverflow.com/questions/16699877/rails-optional-belongs-to
            ingredient_name: ingredient_name,
         }) //so does this need to be api/v1/pizza/:id/topping/:id???
    }
        fetch(TOPPINGS_URL, configObj)
            .then(response => response.json())
            .then(json => { 
                console.log(json)
                

                //so then we add the topping to the pizzacard

                // let brandNewPizzaTopping = new Topping(topping, topping.attributes) //ok 5hiw isnt wokring here
                // document.querySelector('#pizza-container').innerHTML += brandNewPizzaTopping.renderPizzaCard()
        })
}



//SHOW THE ADD A TOPPING FORM WHEN ITS CLICKED
function showForm() {
    document.getElementById('add-a-topping-form').style.display = 'block'
};
