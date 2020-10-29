class Topping {
    constructor(topping) {
        Topping.all = []
        this.id = topping.id 
        this.ingredient_name = topping.ingredient_name
        console.log(topping.ingredient_name)
        Topping.all.push(this)
    }

    renderToppingLi() {
        const toppingUL = document.querySelector('#topping-ul')
        const pizzaDivCard = document.querySelector('#pizza-card')
        
        return `
        <li class="topping-list">${this.ingredient_name}</li>
        `
    }
}




// renderPizzaCard() {
//     return `
//     <div class="pizza-card">
//     <br>
//     <div data-id=${this.id}
//     <h3 class="card-title">${this.title}</h3>
//         <p class="card-text">${this.description}</p>
//     <ul class="toppings-list">
        
//     </ul>
//     `
// }