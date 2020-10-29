class Topping {
    constructor(topping) {
        Topping.all = []
        this.id = topping.id 
        this.ingredient_name = topping.ingredient_name
        //console.log(topping.ingredient_name)
        Topping.all.push(this)
    }
}