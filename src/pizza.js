class Pizza {
    constructor(pizza, pizzaAttributes) {
        this.id = pizza.id
        this.title = pizzaAttributes.title
        this.description = pizzaAttributes.description
        //this.topping = pizzaAttributes.ingredient_name
        this.toppings = pizzaAttributes.toppings
        Pizza.all.push(this)
    }

    // renderPizzaCard() {
    //     return html
    // }
}

//pushing each new instance of pizza class into the array
Pizza.all = [];