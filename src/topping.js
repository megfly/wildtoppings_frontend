class Topping {
    constructor(topping) {
        Topping.all = []
        this.id = topping.id 
        this.pizza_id = topping.pizza_id
        this.ingredient_name = topping.ingredient_name
        Topping.all.push(this)
    }
}