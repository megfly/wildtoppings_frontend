//id is undefined after create a pizza post requests unless we refresh page???

// URL's
const BASE_URL = "http://localhost:3000"
const PIZZAS_URL = `${BASE_URL}/api/v1/pizzas`
const TOPPINGS_URL = `${BASE_URL}/api/v1/toppings`



// DOMContent Loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("loaded")
    fetchPizzas()
    //fetchToppings()


        // CREATE A NEW PIZZA SUBMIT EVENT LISTENER
        const createPizzaForm = document.querySelector('#create-pizza-form')
        createPizzaForm.addEventListener("submit", (event) => {
            pizzaFormHandler(event)
            document.querySelector("#create-pizza-form").reset();
        });
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
                getPizzasForDropdown(pizza)

            })


                // CREATE A NEW TOPPING SUBMIT EVENT LISTENER            
                let findAddToppingToPizzaForm = document.querySelector(`#add-a-topping-form`)
                findAddToppingToPizzaForm.addEventListener("submit", (event) => {
                    toppingFormHandler(event)
                    document.querySelector("#add-a-topping-form").reset();
                })
        })
    };


    
// Fetch request to POST new pizzas
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
        
                    let brandNewPizza = new Pizza(pizza.data, pizza.data.attributes)

                    console.log(pizza.data)
                    console.log(pizza.data.attributes)
                    
                    document.querySelector('#pizza-container').innerHTML += brandNewPizza.renderPizzaCard()

                    addNewPizzasToDropdown(brandNewPizza)
            })
        }



//PZZA FORM HANDLER
function pizzaFormHandler(event) {

    event.preventDefault()

    const titleInput = document.querySelector('#input-title').value //grabs input value
    const descriptionInput = document.querySelector('#input-description').value
    //debugger
    //this pizzaid is undefined........

        postRequestForPizzaForm(titleInput, descriptionInput)
}




//TOPPING FORM HANDLER
function toppingFormHandler(event) {
    event.preventDefault()

    const toppingInput = document.querySelector('#input-topping').value //grabs input value

    ///////////////////////////////////////////////////////////////////////////////////


    let pizzaList = document.getElementById('pizza-list')
    let pizza_id = (pizzaList.options[pizzaList.selectedIndex].getAttribute('data-id'))
 
        postRequestForToppingForm(toppingInput, pizza_id)
}




//Adding our pizza toppings to the DOM!!!!!!!!!
function addPizzaToppingsToDOM(pizza) {
    pizza.attributes.toppings.forEach(ing => {

        const ul = document.querySelector(`#pizza-${ing.pizza_id}-toppings`)

            const li = document.createElement('li')
            li.innerHTML += `${ing.ingredient_name}`
  
                ul.appendChild(li)

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




//FETCH to DElete topping
function deleteTopping() {
    
    //event.preventDefault()

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
function postRequestForToppingForm(ingredient_name, pizza_id) {

    //event.preventDefault()
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ 
            ingredient_name: ingredient_name,
            pizza_id: pizza_id
         })
    }
     
        fetch(TOPPINGS_URL, configObj)
            .then(response => response.json())
            .then(json => { 
 
                let brandNewPizzaTopping = new Topping(json.data, json.data.attributes) 
                //document.querySelector('#pizza-container').innerHTML += brandNewPizzaTopping.renderPizzaCard()
// console.log(json)
// console.log(json.data)
// console.log(json.data.attributes)

                const ul = document.querySelector(`#pizza-${pizza_id}-toppings`)
                const li = document.createElement('li')
                li.innerHTML += `${ingredient_name}`
                ul.appendChild(li)

                const deleteButton = document.createElement('button')

                deleteButton.setAttribute("class", "delete-topping")
                deleteButton.setAttribute("data-id", `${json.data.id}`)
                deleteButton.innerText = "Delete Topping"

                li.appendChild(deleteButton)

        })
}



//SHOW THE ADD A TOPPING FORM WHEN ITS CLICKED
function showForm() {
    document.getElementById(`add-a-topping-form`).style.display = "block"
};


//get pizzas from DROPDOWN
function getPizzasForDropdown(pizza) {
    //console.log(pizza)
    
    const pizzaSelectList = document.querySelector('#pizza-list')
    

    let myOption = document.createElement("option")
    myOption.setAttribute("data-id", `${pizza.id}`)
    myOption.setAttribute("id", `option`)
    myOption.innerHTML += `${pizza.attributes.title}`

    pizzaSelectList.appendChild(myOption)
}


function addNewPizzasToDropdown(newPizza) {

    const pizzaSelectList = document.querySelector('#pizza-list')

    //debugger

    let myOption = document.createElement("option")
    myOption.setAttribute("data-id", `${newPizza.id}`) //id is undefined???
    myOption.setAttribute("id", `option`)
    myOption.innerHTML += `${newPizza.title}`

    pizzaSelectList.appendChild(myOption)

}