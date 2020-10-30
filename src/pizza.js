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

                    <button id="add-topping" onclick="showForm()" data-id="${this.id}">Add Topping!</button>

                <form id="add-a-topping-form" style="display: none;">
                    <h3>Add Topping!</h3>
                    <input id="input-topping1"
                    type="text" 
                    name="topping" 
                    value="" 
                    placeholder="topping..">
                    <br>
                        <br>
                        <input id="add-a-topping-btn"
                        type="submit"
                        name="submit"
                        value="Submit!"
                        class="submit"
                      />
                    <br><br>
                </form>

            <ul id="pizza-${this.id}-toppings">
            </ul>

            </div>
            `
    }

}