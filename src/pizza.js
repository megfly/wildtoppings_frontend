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
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <div class="pizza-card-${this.id}">

            <img src="https://i.pinimg.com/originals/8d/6c/13/8d6c130c50e948391ba1a2bb1bf8a953.jpg" width="100%" height="100%">
            <rect width="100%" height="100%" fill="#55595c"/>
            
            <div class="card-body">

            <h5 class="card-title" data-id=${this.id}>${this.title}</h5>

              <p class="card-text" data-id=${this.id}>${this.description}</p>

              <ul class="list-group" id="pizza-${this.id}-toppings"> </ul>

              <div class="d-flex justify-content-between align-items-center">
                    
                
                </div>
              </div>
            </div>
          </div>
        </div>
            `
    }

//     <div class="col-md-4">
//     <div class="card mb-4 shadow-sm">
//       <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
//       <div class="card-body">
//         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         <div class="d-flex justify-content-between align-items-center">
//           <div class="btn-group">
//             <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
//             <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
//           </div>
//           <small class="text-muted">9 mins</small>
//         </div>
//       </div>
//     </div>
//   </div> 
}