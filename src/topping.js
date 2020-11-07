class Topping {
    constructor(topping, toppingAttributes) {
        Topping.all = []
        this.id = topping.id 
        this.pizza_id = toppingAttributes.pizza_id
        this.ingredient_name = toppingAttributes.ingredient_name
        Topping.all.push(this)
    }
}