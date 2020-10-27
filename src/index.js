// URL's
const BASE_URL = "http://localhost:3000"
const PIZZAS_URL = `${BASE_URL}/api/v1/pizzas`
const TOPPINGS_URL = `${BASE_URL}/api/v1/toppings`

// DOMContent Loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("loaded")
    fetchPizzas()
    fetchToppings()
})

// Fetch Requests
function fetchPizzas() {
    fetch(PIZZAS_URL) //promise
    .then((response) => response.json())
    .then((pizzaJson) => {
        let pizzaArray = pizzaJson
        addPizzas(pizzaArray)
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
const addPizzas = pizzaArr => {
    pizzaArr.data.forEach(pizza => {
        const div = document.createElement("div")
        const p = document.createElement("p")
        const button = document.createElement("button")
        const ul = document.createElement("ul")

        div.setAttribute("class", "card")
        div.setAttribute("data-id", pizzaArr.id)

        p.innerText = pizza.attributes.title

        div.appendChild(p)
        div.appendChild(button)
        div.appendChild(ul)
        
        const pizzaContainer = document.querySelector(".pizza-container")
        pizzaContainer.appendChild(div)
    })
}