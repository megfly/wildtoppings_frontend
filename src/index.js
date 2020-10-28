// URL's
const BASE_URL = "http://localhost:3000"
const PIZZAS_URL = `${BASE_URL}/api/v1/pizzas`
const TOPPINGS_URL = `${BASE_URL}/api/v1/toppings`

//variables
const createPizzaForm = document.querySelector('#create-pizza-form')
const pizzaCards = document.querySelector("#pizza-cards")

// DOMContent Loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("loaded")
    fetchPizzas()
    //fetchToppings()

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
        let pizzaData = pizzaJson
        addPizzasToTheDOM(pizzaData)
    })
};

// function fetchToppings() {
//     fetch(TOPPINGS_URL) //promise
//     .then((response) => response.json())
//     .then((toppingJson) => {
//         let toppingArray = toppingJson
//         addToppingsToTheDOM(toppingArray)
//     })
// };

//Adding objects to the DOM
const addPizzasToTheDOM = (pizzaData) => {
    pizzaData.data.forEach(pizza => {
        
    const div = document.createElement("div")
    const pTagForTitle = document.createElement("p")
    const pTagForDescription = document.createElement("p")
    const button = document.createElement("button")

        div.setAttribute("class", "card")
        div.setAttribute("data-id", pizza.id)

        console.log(pizza)

        pTagForTitle.innerText = pizza.attributes.title
        pTagForDescription.innerText = pizza.attributes.description
        button.innerText = "Delete Pizza!"
        
        div.appendChild(pTagForTitle)
        div.appendChild(pTagForDescription)
        div.appendChild(button)
        
        const pizzaCards = document.querySelector("#pizza-cards")
        pizzaCards.appendChild(div)

    })
    }

// const addToppingsToTheDOM = toppingArr => {
//     //console.log(toppingArr)
//     toppingArr.forEach(topping => {
//         console.log(topping)
        
//         const ingredientUl = document.querySelector(".ingredient-list")
//         const pizzaCards = document.querySelector("#pizza-cards")
//         const ul = document.createElement("ul")
//         const li = document.createElement("li")
//         const deleteToppingButton = document.createElement("button")

//         li.innerText = topping.ingredient_name
//         deleteToppingButton.innerHTML = "Delete"

//         pizzaCards.appendChild(li)
//         pizzaCards.appendChild(deleteToppingButton)

// })}


//event listeners


//functions
// function pizzaFormHandler(event) {
//     event.preventDefault()
//     console.log(event)
// }