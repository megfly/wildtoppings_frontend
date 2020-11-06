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

           
                <h2 class="card-title" data-id=${this.id}>${this.title}</h2>
                    <p class="card-text" data-id=${this.id}>${this.description}</p>



            <ul id="pizza-${this.id}-toppings">
            </ul>

            </div>
            `
    }

    //  <div data-id=${this.id}>

}