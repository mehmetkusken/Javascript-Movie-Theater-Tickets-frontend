class Theater{

    static all = []

    constructor(data){
        this.data = data
        this.movies = this.data.movies.map(movie => new Movie(movie))
        this.constructor.all.push(this)
    }

    renderShow = () => {
        const { id, name, adress, city, state, phone, image } = this.data
        document.getElementById("theater").innerHTML =`
        <div class="theater-card">
        <img src=${image} alt=${name}/>
        <p class="title"> Theather: ${name} </p>
        <p> Adress: ${adress} </p>
        <p> City: ${city} </p>
        <p"> State: ${state} </p>
        <p> Phone: ${phone} </p>
        <div class="contain"></div>
        <button id="go-back">Go Back</button>
        `
        document.getElementById('go-back').addEventListener('click',Theater.renderTheaterIndex)
        this.movies.forEach(movie => movie.renderCard())
       
    }

    renderTheaterCard = () => {
        const { id, name, adress, city, state, phone, image } = this.data
       document.getElementById("theater-container").innerHTML += `
       <div class="theater-card" data-id=${id}>
       <img src=${image} alt=${name}/>
       <p class="title"> Theather: ${name} </p>
       <p> Adress: ${adress} </p>
       <p> City: ${city} </p>
       <p"> State: ${state} </p>
       <p> Phone: ${phone} </p>
       
       </div>`
    }

    static find = (id) => this.all.find(theater => theater.data.id == id)

    static handleIndexClick = (e) => {
        if (e.target.tagName == 'IMG' || e.target.classList.contains('title')){
            const id = e.target.closest(".theater-card").dataset.id
            this.find(id).renderShow()
        }
    }

    static renderTheaterIndex = () => {

        const theaterContainer = document.createElement("div")
        theaterContainer.id = "theater-container"
        const theatherId = document.getElementById("theater")
        theatherId.innerHTML = ""
        theatherId.appendChild(theaterContainer)
        this.all.forEach(theater => theater.renderTheaterCard())
        theaterContainer.addEventListener('click' , this.handleIndexClick)
        this.newTheater()
    }

    static newTheater = () => {
        const theatherId = document.getElementById("theater")
        const addTheater = document.createElement('button')
        addTheater.innerText= "Add new Theater"
        theatherId.appendChild(addTheater)
        addTheater.addEventListener('click', this.theaterForm)
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


    static getTheaters = () => {
        
        api.getTheaters().then(theaters => {
            Theater.all = []
        theaters.forEach(theater => new Theater(theater))
        this.renderTheaterIndex()
        })

    }




}
