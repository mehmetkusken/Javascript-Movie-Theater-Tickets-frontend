class Movie{

    static all = []

    constructor(data){
        this.data = data
        this.constructor.all.push(this)
    }

    renderCard = () => {
        const { id, movieName, releaseDate, movieDetail, movieImage, stars, director, genres, runtime } = this.data
       document.getElementById("movie-container").innerHTML += `
       <div class="movie-card">
       <img src=${movieImage} alt=${movieName}/>
       <p class="title">Movie: ${movieName}</p>
       <p class="title">${genres}</p>
       <p class="title">${stars}</p>
       <p class="title">${runtime}</p>
       <p class="title">${director}</p>
       <p class="title">${releaseDate}</p>
       <p class="title">${movieDetail}</p>
       </div>`
    }

    
    static renderIndex(){
        const movieContainer = document.createElement("div")
        movieContainer.id = "movie-container"
        document.getElementById("movie").appendChild(movieContainer)
        this.all.forEach(movie => movie.renderCard())
    }
    
    static getMovies(){
        api.getMovies().then(movies => {
        movies.forEach(movie => new Movie(movie))
        this.renderIndex()
        })
    }
}


