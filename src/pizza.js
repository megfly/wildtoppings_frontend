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
            <h2 class="card-title">${this.title}</h2>
                <p class="card-text">${this.description}</p>

                <button id="delete" data-id="${this.id}">Delete Pizza!</button>
                <button id="add-topping" data-id="${this.id}">Add Topping!</button>

        <ul id="pizza-${this.id}-toppings">
        </ul>

        </div>
        `
    }

}