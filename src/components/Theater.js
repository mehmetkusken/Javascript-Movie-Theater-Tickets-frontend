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
       <img src=${image} alt=${name}/>
       <p class="title">${name}</p>
       <p class="title">${adress}</p>
       <p class="title">${city}</p>
       <p class="title">${state}</p>
       <p class="title">${phone}</p>
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
