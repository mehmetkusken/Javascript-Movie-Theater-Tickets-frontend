class Theater{

    static all = []

    constructor(info){
        this.info = info
        this.constructor.all.push(this)
    }

    renderTheaterCard = () => {
        const { id, name, adress, city, state, phone, image } = this.info
       document.getElementById("theater-container").innerHTML += `
       <div class="theater-card">
       <img src=${image} alt=${id}/>
       <p class="title">Theather: ${name}</p>
       <p class="title">Adress: ${adress}</p>
       <p class="title">City: ${city}</p>
       <p class="title">State: ${state}</p>
       <p class="title">Phone: ${phone}</p>
       </div>`
    }

    static renderTheaterIndex(){
        const theaterContainer = document.createElement("div")
        theaterContainer.id = "theater-container"
        document.getElementById("theater").appendChild(theaterContainer)
        this.all.forEach(theater => theater.renderTheaterCard())
    }

    static getTheaters(){
        api.getTheaters().then(theaters => {
        theaters.forEach(theater => new Theater(theater))
        this.renderTheaterIndex()
        })
    }




}
