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
        <div data-id=${this.id}>
            <h3>${this.title}></h3>
    `
    }

    renderULs() {
        const ul = document.querySelector(`#toppings`)

        this.toppings.forEach(topping => {
            ul.innerHTML += `<li>${topping.ingredient_name}</li>`
        })
    }
}

//pushing each new instance of pizza class into the array
Pizza.all = [];