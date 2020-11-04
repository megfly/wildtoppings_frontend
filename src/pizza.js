class Pizza {
    constructor(pizza, pizzaAttributes) {
        //debugger
        Pizza.all = []

        this.id = pizza.id
        this.title = pizzaAttributes.title
        this.description = pizzaAttributes.description
        this.toppings = pizzaAttributes.toppings
        Pizza.all.push(this)
    }

    renderPizzaCard() {
        //debugger
        return `
            <div class="pizza-card-${this.id}">
            <br>

            <div data-id=${this.id}
                <h2 class="card-title">${this.title}</h2>
                    <p class="card-text">${this.description}</p>



            <ul id="pizza-${this.id}-toppings">
            </ul>

            </div>
            `
    }


}