class Theater{

    static all = []

    constructor(data){
        this.data = data
        this.movies = this.data.movies.map(movie => new Movie(movie, this))
        this.constructor.all.push(this)
    }

    // Id
    static find = (id) => this.all.find(theater => theater.data.id == id)

    renderShow = () => {
        const { id, name, adress, city, state, phone, image } = this.data
        document.getElementById("theater").innerHTML =`
        <div class="theater-card col-md-20 border p-2" data-id="${id}">
        <img src=${image} alt=${name}/>
        <p class="title"><h5 class="thead rounder"> Theather:</h5> ${name} </p>
        <p><h5 class="thead rounder"> Adress:</h5> ${adress} </p>
        <p><h5 class="thead rounder"> City:</h5> ${city} </p>
        <p><h5 class="thead rounder"> State:</h5> ${state} </p>
        <p><h5 class="thead rounder"> Phone:</h5> ${phone} </p>
        <div class="contain col-md-20 border p-2"></div>
        <button class="btn btn-info" id="go-back">Go Back</button>
        `
        document.getElementById('go-back').addEventListener('click',Theater.renderTheaterIndex)
        this.movies.forEach(movie => movie.renderCard())
        Movie.deleteMovie();
        Movie.addNewMovie(id);
     
       
       
    }

    renderTheaterCard = () => {
        const { id, name, adress, city, state, phone, image } = this.data
       document.getElementById("theater-container").innerHTML += `
       <div class="theater-card col-md-3 border py-4 px-8" data-id=${id}>
       <img src=${image} alt=${name} class="img-fluid rounded mb-3" />
       <p  class="title> <h5 class="thead rounder">Theather:</h5> ${name} </p>
       <p> <h5 class="thead rounder">Adress:</h5> ${adress} </p>
       <p> <h5 class="thead rounder">City: </h5>${city} </p>
       <p> <h5 class="thead rounder">State: </h5>${state} </p>
       <p> <h5 class="thead rounder">Phone: </h5>${phone} </p>
       <button class="delete-bttn btn btn-sm btn-primary" data-theaterid=${id}>Delete</button>
       </div>`

        
    }

    static getTheaters = () => {
    
        api.getTheaters().then(theaters => {
        Theater.all = []
        theaters.forEach(theater => new Theater(theater))
        this.renderTheaterIndex()
        })
    }

    static renderTheaterIndex = () => {

        const theaterContainer = document.createElement("div")
        theaterContainer.id = "theater-container"
        theaterContainer.classList = "row mt-3 gap-4 centered"
        const theatherId = document.getElementById("theater")
 
        theatherId.innerHTML = ""
        theatherId.appendChild(theaterContainer)
        this.all.forEach(theater => theater.renderTheaterCard())
       
        theaterContainer.addEventListener('click' , this.handleIndexClick)
        this.newTheater()
        this.deleteTheater()
       
       
    }

    static handleIndexClick = (e) => {
        if (e.target.tagName == 'IMG' || e.target.classList.contains('title')){
            const id = e.target.closest(".theater-card").dataset.id
            this.find(id).renderShow()
        }
    }

    static newTheater = () => {
        const theatherId = document.getElementById("theater")
        const addTheater = document.createElement('button')
        addTheater.classList = 'btn btn-success'
        addTheater.innerText= "Add new Theater"
        theatherId.appendChild(addTheater)
        addTheater.addEventListener('click', this.theaterForm)
    }

    static theaterForm = () => {
        modal.main.innerHTML = `
        <form>
        <label for="name">Name:</label><br>
        <input type="text" name="name" ><br></br>
        <label for="adress">Adress:</label><br>
        <input type="text" name="adress" ><br></br>
        <label for="city">City:</label><br>
        <input type="text" name="city" ><br></br>
        <label for="state">State:</label><br>
        <input type="text" name="state" ><br></br>
        <label for="phone">Phone:</label><br>
        <input type="text" name="phone" ><br></br>
        <label for="image">Image:</label><br>
        <input type="text" name="image" ><br></br>
        <input type="submit" value="Submit">
        </form>

        `
        modal.main.querySelector('form').addEventListener('submit', this.handleSubmit)
        modal.open()
    }

    static handleSubmit = (e) => {
        e.preventDefault()
       const openNewTheater = {
           name: e.target.name.value,
           adress: e.target.adress.value,
           city: e.target.city.value,
            state: e.target.state.value,
            phone: e.target.phone.value,
            image: e.target.image.value
       }
       api.createTheater(openNewTheater).then(theater => {
           new Theater(theater).renderTheaterCard()
       })
       modal.close()
       e.target.reset()
    }

    
// Delete option
    static deleteTheater = () => {
       const deleteBttns = document.querySelectorAll('.delete-bttn')
        deleteBttns.forEach(function (element) {
            element.addEventListener('click' , Theater.handleDelete)
        })
    }

    static handleDelete = (e) => {
        if(e.target.innerText === 'Delete'){
            api.deleteMovieTheater(e.target.dataset.theaterid)

        }
    }  
}
