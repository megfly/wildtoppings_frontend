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

                //so pizzas on the dom and now we want to be able to ADD TOPPINGS!!!!!!!!!!!!!!!!!!!!!!!!!!

                //how do we target the specific dataset button....
                let addToppingToPizzaSubmitButton = document.querySelector('#add-a-topping-btn')
                //this is the last debugger....it never reaaches the toppingformhandler
                addToppingToPizzaSubmitButton.addEventListener("submit", (event) => {
                    debugger
                    toppingFormHandler(event)
                })
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
    const toppingInput = document.querySelector('#input-topping').value

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

    event.preventDefault()
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ 
            ingredient_name: ingredient_name
         }) //debugger in configobj, console..... need to add a topping to a pizza obj
    }
        fetch(TOPPINGS_URL + `/${event.target.dataset.id}`, configObj)
            .then(response => response.json())
            .then(json => { 
                console.log(json)
                

                //so then we add the topping to the pizzacard

                // let brandNewPizza = new Pizza(pizza, pizza.attributes) //ok 5hiw isnt wokring here
                //     document.querySelector('#pizza-container').innerHTML += brandNewPizza.renderPizzaCard()
        })
}



//SHOW THE ADD A TOPPING FORM WHEN ITS CLICKED
function showForm() {
    document.getElementById('add-a-topping-form').style.display = 'block'
};
        //const ulInHTML = document.querySelector("#ul")
        //let pizzaContainer = document.querySelector('#pizza-container')
        //let pizzaCard = document.querySelector(`#pizza-card-${ing.pizza_id}`)