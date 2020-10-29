class Pizza {
    constructor(pizza, pizzaAttributes) {
        Pizza.all = []

        this.id = pizza.id
        this.title = pizzaAttributes.title
        this.description = pizzaAttributes.description
        this.toppings = pizzaAttributes.toppings
        Pizza.all.push(this)
    }

    renderPizzaCard() {
        return `
        <div class="pizza-card-${this.id}">
        <br>

        <div data-id=${this.id}
        <h3 class="card-title">${this.title}</h3>
            <p class="card-text">${this.description}</p>

        <ul class="pizza-${this.id}-toppings">
         
        </ul>
        </div>
        `
    }

    addPizzaToppingsToDOM(pizza) {

        console.log(pizza)
    
        pizza.attributes.toppings.forEach(ing => {
    
            console.log(ing.ingredient_name)
    
            //const ul = document.querySelector(`#pizza-${ing.pizza_id}-toppings`)
            let pizzaContainer = document.querySelector('#pizza-container')
            let pizzaCard = document.querySelector(`#pizza-card-${ing.pizza_id}`)
    
                const ul = document.createElement('ul')
                const li = document.createElement('li')
    
                li.innerHTML += `<li>${ing.ingredient_name}</li>`
    
                ul.appendChild(li)
                pizzaContainer.appendChild(li)
                
            //i want to add the ingredient type to the correct pizza card
         
        });
    }
}