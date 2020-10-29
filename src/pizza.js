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
            <li class="topping-1"> </li>
            <li class="topping-2"> </li>
            <li class="topping-3"> </li>
            <li class="topping-4"> </li>
        
        </ul>
        `
    }

renderLis() {
    const ul = document.querySelector("#toppings-list")

    this.toppings.forEach(topping => {
        console.log(topping)
    })
}
}

//pushing each new instance of pizza class into the array
Pizza.all = [];