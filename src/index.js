// URL's
const BASE_URL = "http://localhost:3000"
const PIZZAS_URL = `${BASE_URL}/api/v1/pizzas`
const TOPPINGS_URL = `${BASE_URL}/api/v1/toppings`



// DOMContent Loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("loaded")
    fetchPizzas()

    //live coding for garbage pizza
    let pizzaContainerButton = document.querySelector('#pizza-container')
    let garbagePizzaButton = document.createElement('button')
    garbagePizzaButton.setAttribute("id", "garbage-pizza-button")
    garbagePizzaButton.innerHTML = "Garbage Pizza"
    pizzaContainerButton.appendChild(garbagePizzaButton)
    //the event listener for the pizza button then goes to fetch pizza


        // CREATE A NEW PIZZA SUBMIT EVENT LISTENER
        const createPizzaForm = document.querySelector('#create-pizza-form')
        createPizzaForm.addEventListener("submit", (event) => {
            alertForPizza()
            pizzaFormHandler(event)
            document.querySelector("#create-pizza-form").reset();
        });
})


function randomlyGeneratePizza() {  

    //floor goes down to the next lowest integer

    //generates a random decimal number between 0 and 3(excluding 3) then the floor function takes
        //that decimal number and it rounds it down to the next lowest integer(whole number)
    let randomNumber = Math.floor(Math.random() * 3)
    console.log(randomNumber)

    let ingredients_array = ["pepperoni", "pineapple", "peppers"]

    //random ingredient is found at the index of the array at the random number
    let randomIngredient = ingredients_array[randomNumber]  
    console.log(randomIngredient)

}


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
                addPizzaEditButtonToTheDom(pizza)
                getPizzasForDropdown(pizza)


            })

            //garbage pizza click event-- then goes to randomlygeneratepizza
            let garbagepizza = document.querySelector('#garbage-pizza-button')
            garbagepizza.addEventListener("click", randomlyGeneratePizza)


                // CREATE A NEW TOPPING SUBMIT EVENT LISTENER            
                let findAddToppingToPizzaForm = document.querySelector(`#add-a-topping-form`)
                findAddToppingToPizzaForm.addEventListener("submit", (event) => {
                   
                    alertForTopping()
                    toppingFormHandler(event)
                    document.querySelector("#add-a-topping-form").reset();
                })
        })
    };


    
// Fetch request to POST new pizzas
function postRequestForPizzaForm(title, description) {
//debugger
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

                    addPizzaEditButtonToTheDom(pizza.data)
                    addNewPizzasToDropdown(brandNewPizza)
                    
                    document.querySelectorAll("#delete-topping").forEach(btn => btn.addEventListener('click', deleteTopping))

            })

        }




//PZZA FORM HANDLER
function pizzaFormHandler(event) {

    event.preventDefault()

    const titleInput = document.querySelector('#input-title').value //grabs input value
    const descriptionInput = document.querySelector('#input-description').value
        postRequestForPizzaForm(titleInput, descriptionInput)
}




//TOPPING FORM HANDLER
function toppingFormHandler(event) {
    event.preventDefault()

    const toppingInput = document.querySelector('#input-topping').value //grabs input value

    let pizzaList = document.getElementById('pizza-list')
    let pizza_id = (pizzaList.options[pizzaList.selectedIndex].getAttribute('data-id'))
 
        postRequestForToppingForm(toppingInput, pizza_id)
}




function addPizzaEditButtonToTheDom(pizza) {
    
    console.log(pizza)
        
        const eachPizzaCard = document.querySelector(`#pizza-card-${pizza.id}`)
        const editButton = document.createElement('button')

        editButton.setAttribute("id", "edit-pizza")
        editButton.setAttribute("class", "btn btn-primary")
        editButton.setAttribute("data-id", `${pizza.id}`)
        editButton.innerText = "Edit Pizza"

        eachPizzaCard.appendChild(editButton)
        
        document.querySelectorAll("#edit-pizza").forEach(btn => btn.addEventListener('click', editPizza))
}




//Adding our pizza toppings to the DOM!!!!!!!!!
function addPizzaToppingsToDOM(pizza) {
    pizza.attributes.toppings.forEach(ing => {

        const ul = document.querySelector(`#pizza-${ing.pizza_id}-toppings`)

            const li = document.createElement('li')
           
            li.innerHTML += `${ing.ingredient_name}`
  
                ul.appendChild(li)

                    const deleteButton = document.createElement('button')

                    deleteButton.setAttribute("id", "delete-topping")
                    deleteButton.setAttribute("class", "btn btn-outline-danger btn-sm")
                    deleteButton.setAttribute("data-id", `${ing.id}`)
                    deleteButton.innerText = "Delete Topping"

                    li.appendChild(deleteButton)
            
    });

    // Finding each delete topping button and adding an event listener
    document.querySelectorAll("#delete-topping").forEach(btn => btn.addEventListener('click', deleteTopping))
    document.querySelectorAll("#add-topping").forEach(btn => btn.addEventListener('click', showForm)) 
    document.querySelectorAll("#add-a-topping-btn").forEach(btn => btn.addEventListener('click', hideForm))
}




//FETCH to DElete topping
function deleteTopping() {

    const configObj = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    } 
    fetch(TOPPINGS_URL + `/${event.target.dataset.id}`, configObj) 
        .then(event.target.parentElement.remove())
}




//EDIT WHOLE PIZZAS
function editPizza() {
    //event.preventDefault()
    const id = event.target.dataset.id 

    fetch(PIZZAS_URL + `/${event.target.dataset.id}`) 
        .then(response => response.json())
        .then(pizza => {
            
            let thePizzaCard = document.querySelector(`#pizza-card-${pizza.data.id}`)

                // Create a form dynamically 
                    const editForm = document.createElement("form"); 
                    editForm.setAttribute("class", "form-group")
                    editForm.setAttribute("id", "edit-form")
                    editForm.setAttribute("method", "post"); 
                    editForm.setAttribute("data-id", `${pizza.data.id}`)
     
  
                    // Create an input element
                    const nameInput = document.createElement("input"); 
                    editForm.setAttribute("class", "form-group")
                    nameInput.setAttribute("id", "edit-form-title-input")
                    nameInput.setAttribute("type", "text"); 
                    nameInput.setAttribute("value", `${pizza.data.attributes.title}`); 
                    

                    // Create an input element
                    const descriptionInput = document.createElement("input"); 
                    editForm.setAttribute("class", "form-group")
                    descriptionInput.setAttribute("id", "edit-form-description-input")
                    descriptionInput.setAttribute("type", "text"); 
                    descriptionInput.setAttribute("value", `${pizza.data.attributes.description}`); 
                   

                    // create a submit button 
                    const s = document.createElement("input"); 
                    s.setAttribute("class", "btn btn-primary")
                    s.setAttribute("id", "edit-pizza-submit-btn")
                    s.setAttribute("type", "submit"); 
                    s.setAttribute("value", "Submit"); 
                    
                         editForm.appendChild(nameInput);
                         editForm.appendChild(descriptionInput)
                          
                        editForm.appendChild(s);  

                        thePizzaCard.appendChild(editForm)

                        document.querySelector("#edit-form").addEventListener('submit', updatePizza)

                        document.querySelectorAll("#edit-pizza-submit-btn").forEach(btn => btn.addEventListener('click', hideEditForm))
        })

}


function hideEditForm(){
    console.log("did this work")
    document.getElementById(`edit-form`).style.display = "none"
    updatePizza
}



function updatePizza(){
    event.preventDefault()

    const configObj = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },

        body: JSON.stringify ({
            title: event.target.querySelector("#edit-form-title-input").value,
            description: event.target.querySelector("#edit-form-description-input").value
    }),
    }
    fetch(PIZZAS_URL + `/${event.target.dataset.id}`, configObj)    
        .then(response => response.json())
        .then(pizza => {
            const updatedPizza = new Pizza(pizza.data, pizza.data.attributes)

            const getTheCardTitle = document.querySelector("#edit-form-title-input").value
            
            const getTheCardDescription = document.querySelector("#edit-form-description-input").value
            
            let thePizzaCardH4Title = document.querySelector(`.card-title-${pizza.data.id}`)
            thePizzaCardH4Title.innerHTML = updatedPizza.title 
            
            let thePizzaDescription = document.querySelector(`.card-text-${pizza.data.id}`)
            thePizzaDescription.innerHTML = updatedPizza.description
            
            addUpdatedPizzasToDropdown(updatedPizza)
            
        })

}




//POST REQUEST TO ADD TOPPING TO PIZZA
function postRequestForToppingForm(ingredient_name, pizza_id) {

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

                const ul = document.querySelector(`#pizza-${pizza_id}-toppings`)
                const li = document.createElement('li')
                
                li.innerHTML += `${ingredient_name}`
                ul.appendChild(li)

                const deleteButton = document.createElement('button')

                deleteButton.setAttribute("id", "delete-topping")
                deleteButton.setAttribute("class", "btn btn-outline-danger btn-sm")
                deleteButton.setAttribute("data-id", `${json.data.id}`)
                deleteButton.innerText = "Delete Topping"

                li.appendChild(deleteButton)

                document.querySelectorAll("#delete-topping").forEach(btn => btn.addEventListener('click', deleteTopping))
        })
}




//SHOW THE ADD A TOPPING FORM WHEN ITS CLICKED
function showForm() {
    document.getElementById(`add-a-topping-form`).style.display = "block"
};



function hideForm() {
    document.getElementById(`add-a-topping-form`).style.display = "none"
}



//get pizzas from DROPDOWN
function getPizzasForDropdown(pizza) {
    
    const pizzaSelectList = document.querySelector('#pizza-list')
    

    let myOption = document.createElement("option")
    myOption.setAttribute("data-id", `${pizza.id}`)
    myOption.setAttribute("id", `option-${pizza.id}`)
    myOption.innerHTML += `${pizza.attributes.title}`

    pizzaSelectList.appendChild(myOption)
}





function addNewPizzasToDropdown(newPizza) {

    const pizzaSelectList = document.querySelector('#pizza-list')

    let myOption = document.createElement("option")
    myOption.setAttribute("data-id", `${newPizza.id}`) 
    myOption.setAttribute("id", `option-${newPizza.id}`)
    myOption.innerHTML += `${newPizza.title}`

    pizzaSelectList.appendChild(myOption)
}


function addUpdatedPizzasToDropdown(updatedPizza) {
    
    const pizzaSelectList = document.querySelector('#pizza-list')
    

    let myOption = document.querySelector(`#option-${updatedPizza.id}`)

    myOption.innerText = `${updatedPizza.title}` 
}




function alertForPizza(){
    const titleInput = document.querySelector('#input-title').value
    const descriptionInput = document.querySelector('#input-description').value

    //const fail = alert("Please try again! Form must not be blank!")
    //const success = alert("Woohoo! Creation successful!")

    if (titleInput === null || titleInput === "" && descriptionInput === null || descriptionInput === "") {
        alert("Please try again! Form must not be blank!")
    } 
}




function alertForTopping() {
    const toppingInput = document.querySelector('#input-topping').value

    if (toppingInput === null || toppingInput === "") {
        alert("Please try again! Form must not be blank!")
    } 
}