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

    // <img src="https://smallimg.pngkey.com/png/small/444-4441837_food-drinks-icons-in-svg-and-png-pizza.png" width="100%" height="100%">
    //<title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

//     <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" 
//     preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
//     <img src="https://smallimg.pngkey.com/png/small/444-4441837_food-drinks-icons-in-svg-and-png-pizza.png" width="100%" height="100%">
// </svg>
//<button type="button" class="btn btn-sm btn-outline-secondary">View</button>
//<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
//<small class="text-muted">9 mins</small>

    renderPizzaCard() {
        //debugger
        return `
           
        <div class="row">
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm" id="pizza-card-${this.id}">
          
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" 
            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" 
            focusable="false" role="img" aria-label="Placeholder: Thumbnail">
            <title>Placeholder</title><rect width="100%" height="100%" 
            fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div class="card-body">
            <h5 class="card-title" data-id=${this.id}>${this.title}</h5>
            <p class="card-text" data-id=${this.id}>${this.description}</p>
              <div class="d-flex align-content-center flex-wrap">
                
                <ul class="list-group" id="pizza-${this.id}-toppings"> </ul>
        
                
              </div>
            </div>
          </div>
        </div> 
    
        </div>

`
    }
}

   
    //       <p class="card-text" data-id=${this.id}>
    //         ${this.description}</p>
    //       <div class="d-flex justify-content-between align-items-center">
    //       <ul id="pizza-${this.id}-toppings"> </ul>
    
    //       </div>
    //     </div>
    //   </div>
    // </div> 
