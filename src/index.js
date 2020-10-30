// URL's
const BASE_URL = "http://localhost:3000"
const PIZZAS_URL = `${BASE_URL}/api/v1/pizzas`
const TOPPINGS_URL = `${BASE_URL}/api/v1/toppings`


// DOMContent Loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("loaded")
    fetchPizzas()
    fetchToppings()

        // Event Listeners
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


                //calling funtion and adding event listener to add toppings to pizzas
                addPizzaToppingsToDOM(pizza)
                let addToppingToPizzaButton = document.querySelector('#add-topping')
                addToppingToPizzaButton.addEventListener("click", addTopping)

            })
        })
    };

    
// Fetch request to POST new pizzas..........THIS ISNT WORKING Uncaught (in promise) TypeError: Cannot read property 'title' of undefined
function postRequestForPizzaForm(title, description) {

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
                console.log(pizza)

                /////////////////HOW DO WE ???????????????????////////////////////

                    let brandNewPizza = new Pizza(pizza, pizza.attributes) //ok 5hiw isnt wokring here
                    document.querySelector('#pizza-container').innerHTML += brandNewPizza.renderPizzaCard()
                
            })
        }


//Fetch Requests for ingredients but how will it be assocaited to pizza obj. we need it to have pizza_id w/it
    function fetchToppings() {
        fetch(TOPPINGS_URL) //promise
        .then((response) => response.json())
        .then((toppingJson) => {
             
            let newTopping = new Topping(toppingJson)

            console.log(newTopping)

            })
        }
    ;


//function for pizza form handler
function pizzaFormHandler(event) {
    event.preventDefault()

    const titleInput = document.querySelector('#input-title').value
    const descriptionInput = document.querySelector('#input-description').value

        postRequestForPizzaForm(titleInput, descriptionInput) //POST REQUEST GRABS TITLE INOUT VALUE AND DESCRIPTION VALUE................
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


function addTopping() {

    `<form id="create-pizza-form">
    <input id="input-topping2"
    type="text" 
    name="topping2" 
    value="" 
    placeholder="topping 2...">
    </form>`

    event.preventDefault()
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({  }) //debugger in configobj, console..... need to add a topping to a pizza obj
    }
        fetch(TOPPINGS_URL, configObj)
            .then(response => response.json())
            .then(json => { 
                console.log(json)
        })
}

        //const ulInHTML = document.querySelector("#ul")
        //let pizzaContainer = document.querySelector('#pizza-container')
        //let pizzaCard = document.querySelector(`#pizza-card-${ing.pizza_id}`)