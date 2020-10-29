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

        // <ul class="pizza-${this.id}-toppings">
         
        // </ul>
        </div>
        `
    }
}