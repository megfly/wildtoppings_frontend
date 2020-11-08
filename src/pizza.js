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
       <img src="file:///Users/meghanflynn/Desktop/imageedit_4_4527841023.png" class="center">
    
        <rect width="100%" height="100%" fill="#55595c"/></svg>
        <h4 class="card-title-${this.id}" data-id=${this.id}>${this.title}</h4>
        <p class="card-text-${this.id}" data-id=${this.id}><i>${this.description}</i></p>
        <b><ul id="pizza-${this.id}-toppings"> </ul></b>
`
    }
}