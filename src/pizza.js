class Pizza {
    constructor(pizza, pizzaAttributes) {
        Pizza.all = []

        this.id = pizza.id
        this.title = pizzaAttributes.title
        this.description = pizzaAttributes.description
        this.toppings = pizzaAttributes.toppings
        console.log(pizza)
        Pizza.all.push(this)
    }

//functions
pizzaFormHandler(event) {
    event.preventDefault()

    const titleInput = document.querySelector('#input-title').value
    const descriptionInput = document.querySelector('#input-description').value

    postRequestForPizzaForm(titleInput, descriptionInput)
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
}