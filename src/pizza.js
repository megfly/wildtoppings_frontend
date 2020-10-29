class Pizza {
    constructor(pizza, pizzaAttributes) {
        this.id = pizza.id
        this.title = pizzaAttributes.title
        this.description = pizzaAttributes.description
        //this.topping = pizzaAttributes.ingredient_name
        this.toppings = pizzaAttributes.toppings
        Pizza.all.push(this)
    }

    renderPizzaCard() {
        return `
        <div class="pizza-card">
        <br>
        <div data-id=${this.id}
        <h3 class="card-title">${this.title}</h3>
            <p class="card-text">${this.description}</p>
        <ul class="toppings-list">
            
        </ul>
        `
    }

renderLis() {

    this.toppings.forEach(topping => {
        console.log(topping)

        const ul = document.querySelector("#toppings-list")
        const li = document.createElement('li')

        li.append(ul)
    })
}
}

//pushing each new instance of pizza class into the array
Pizza.all = [];