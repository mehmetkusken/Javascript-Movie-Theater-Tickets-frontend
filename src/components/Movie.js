class Movie{

    static all = []

    constructor(data , theater){
        this.data = data
        this.theater = theater
        this.constructor.all.push(this)
    }

    
    renderCard = () => {
        const { id, movieName, releaseDate, movieDetail, movieImage, stars, director, genres, runtime } = this.data
       document.querySelector(".contain").innerHTML += `
       <div class="movie-card" data-id=${id}>
       <img src=${movieImage} alt=${id}/>
       <p class="movie-name">Movie: ${movieName}</p>
       <p class="">Genre: ${genres}</p>
       <p class=""> Movie Stars: ${stars}</p>
       <p class="">Duration: ${runtime}</p>
       <p class="">Director: ${director}</p>
       <p class="">Year: ${releaseDate}</p>
       <p class="">Detail: ${movieDetail}</p>
       </div>`
    }

   
    


    
    
}


