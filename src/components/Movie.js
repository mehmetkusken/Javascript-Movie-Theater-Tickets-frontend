class Movie{

    static all = []

    constructor(data){
        this.data = data
        this.constructor.all.push(this)
    }

    renderCard = () => {
        const { id, movieName, releaseDate, movieDetail, movieImage, stars, director, genres, runtime } = this.data
       document.querySelector(".contain").innerHTML += `
       <div class="movie-card">
       <img src=${movieImage} alt=${id}/>
       <p class="title">Movie: ${movieName}</p>
       <p class="title">Genre: ${genres}</p>
       <p class="title"> Movie Stars: ${stars}</p>
       <p class="title">Duration: ${runtime}</p>
       <p class="title">Director: ${director}</p>
       <p class="title">Year: ${releaseDate}</p>
       <p class="title">Detail: ${movieDetail}</p>
       </div>`
    }

    
    
}


