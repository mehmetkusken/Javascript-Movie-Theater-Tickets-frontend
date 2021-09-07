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
       <img src=${movieImage} alt=${id}/>
       <p class="title">Movie: Movie: ${movieName}</p>
       <p class="title">Genre: ${genres}</p>
       <p class="title"> Movie Stars: ${stars}</p>
       <p class="title">Duration: ${runtime}</p>
       <p class="title">Director: ${director}</p>
       <p class="title">Year: ${releaseDate}</p>
       <p class="title">Detail: ${movieDetail}</p>
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


