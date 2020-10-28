// URL's
const BASE_URL = "http://localhost:3000"
const PIZZAS_URL = `${BASE_URL}/api/v1/pizzas`
const TOPPINGS_URL = `${BASE_URL}/api/v1/toppings`

//variables
const createPizzaForm = document.querySelector('#create-pizza-form')

// DOMContent Loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("loaded")
    fetchPizzas()
    fetchToppings()

        //submit events
        // createPizzaForm.addEventListener("click", (event) => {
        //     pizzaFormHandler(event)
        // })
})

// Fetch Requests
function fetchPizzas() {
    fetch(PIZZAS_URL) //promise
    .then((response) => response.json())
    .then((pizzaJson) => {
        let pizzaArray = pizzaJson
        addPizzasToTheDOM(pizzaArray)
    })
};

function fetchToppings() {
    fetch(TOPPINGS_URL) //promise
    .then((response) => response.json())
    .then((toppingJson) => {
        //console.log(toppingJson)
    })
};

//Adding objects to the DOM
const addPizzasToTheDOM = pizzaArr => {
    pizzaArr.data.forEach(pizza => {
        const div = document.createElement("div")
        const pTagForTitle = document.createElement("p")
        const pTagForDescription = document.createElement("p")
        const button = document.createElement("button")
        const ul = document.createElement("ul")

        div.setAttribute("class", "card")
        div.setAttribute("data-id", pizza.id)

        pTagForTitle.innerText = pizza.attributes.title
        pTagForDescription.innerText = pizza.attributes.description
        
        div.appendChild(pTagForTitle)
        div.appendChild(pTagForDescription)
        div.appendChild(ul)
        div.appendChild(button)
        
        const pizzaCards = document.querySelector("#pizza-cards")
        pizzaCards.appendChild(div)
    })
}

//event listeners


//functions
// function pizzaFormHandler(event) {
//     event.preventDefault()
//     console.log(event)
// }