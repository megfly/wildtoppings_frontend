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
    <div class="pizza-card-${this.id}">
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">

            <img src="https://i.pinimg.com/originals/8d/6c/13/8d6c130c50e948391ba1a2bb1bf8a953.jpg" width="100%" height="100%">
            <rect width="100%" height="100%" fill="#55595c"/>
            
            <div class="card-body">

            <h5 class="card-title" data-id=${this.id}>${this.title}</h5>

              <p class="card-text" data-id=${this.id}>${this.description}</p>

              <ul class="list-group" id="pizza-${this.id}-toppings"> </ul>

              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                </div>
              </div>
            </div>
          </div>
        </div>
            `
    }

}

//notes from the bootsrtap card 

//<button type="button" class="btn btn-sm btn-outline-secondary">View</button>
//<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>