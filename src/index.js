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

// Fetch Requests for pizzas
    function fetchPizzas() {
        fetch(PIZZAS_URL) //promise
        .then((response) => response.json())
        .then((pizzaJson) => {
            
            pizzaJson.data.forEach(pizza => {
                let newPizza = new Pizza(pizza, pizza.attributes)
    
                document.querySelector('#pizza-container').innerHTML += newPizza.renderPizzaCard()
            })
        })
    };
    
function postRequestForPizzaForm(title, description) {
        console.log(title, description)
    
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                title: title,
                description: description,
            })
        }
        fetch(PIZZAS_URL, configObj)    
            .then(response => response.json())
            .then(pizzaJson => {
                console.log(pizzaJson);
            })
    
            //add the new pizza data to the DOM
            const pizzaData = pizzaJson.data
    
            let newPizza = new Pizza(pizzaData, pizzaData.attributes) //new Pizza?????
            document.querySelector('#pizza-container').innerHTML += newPizza
        }


// Fetch Requests for ingredients
    function fetchToppings() {
        fetch(TOPPINGS_URL) //promise
        .then((response) => response.json())
        .then((toppingJson) => {
             
            let newTopping = new Topping(toppingJson)
            addPizzaToppingsToDOM(toppingJson)

            })
        }
    ;


//functions
function pizzaFormHandler(event) {
    event.preventDefault()

    const titleInput = document.querySelector('#input-title').value
    const descriptionInput = document.querySelector('#input-description').value

    postRequestForPizzaForm(titleInput, descriptionInput)
}

function addPizzaToppingsToDOM(topping) {
   
    const ul = document.querySelector(`ul#pizza-${this.id}-toppings`)

    topping.forEach(ing => {
        console.log(ing)
        
        ul.innerHTML += `<li>${ing.ingredient_name}</li>`
    });
}