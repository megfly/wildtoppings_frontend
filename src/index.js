// URL's
const BASE_URL = "http://localhost:3000"
const PIZZAS_URL = `${BASE_URL}/api/v1/pizzas`
const TOPPINGS_URL = `${BASE_URL}/api/v1/toppings`

// DOMContent Loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("PIIIZZZZAAAAAA")

    fetchPizzas()
    fetchToppings()

})

// Fetch Requests
function fetchPizzas() {
    fetch(PIZZAS_URL) //promise
    .then((response) => response.json())
    .then((pizzaJson) => {
        console.log(pizzaJson)
    })
}

function fetchToppings() {
    fetch(TOPPINGS_URL) //promise
    .then((response) => response.json())
    .then((toppingJson) => {
        console.log(toppingJson)
    })
}