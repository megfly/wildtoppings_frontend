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
        <div id="pizza-card-${this.id}">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="25" xmlns="http://www.w3.org/2000/svg" 
        preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
        <img src= "https://img.pngio.com/pusheen-eating-pizza-cat-eating-pizza-png-223_191.jpg"> 
    
        <rect width="100%" height="100%" fill="#55595c"/></svg>
        <h5 class="card-title" data-id=${this.id}>${this.title}</h5>
        <p class="card-text" data-id=${this.id}>${this.description}</p>
        <ul id="pizza-${this.id}-toppings"> </ul>

`
    }
}