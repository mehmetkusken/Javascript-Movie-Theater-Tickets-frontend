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
       <div class="movie-card col-md-20 border p-2" data-id=${id}>
       <img src=${movieImage} alt=${id}/>
       <p class="movie-name"><h5 class="thead rounder">Movie: </h5>${movieName}</p>
       <p class=""><h5 class="thead rounder">Genre:</h5> ${genres}</p>
       <p class=""><h5 class="thead rounder"> Movie Stars: </h5>${stars}</p>
       <p class=""><h5 class="thead rounder">Duration: </h5>${runtime}</p>
       <p class=""><h5 class="thead rounder">Director:</h5> ${director}</p>
       <p class=""><h5 class="thead rounder">Year: </h5>${releaseDate}</p>
       <p class=""><h5 class="thead rounder">Detail:</h5> ${movieDetail}</p>
       </div>`

       
        
    }

    // static deleteMovie = () => {

     //    const getMovieCards = document.querySelectorAll('.movie-card')
     //    getMovieCards.forEach((element) => {
     //        const button = document.createElement("button")
      //       button.innerText ='Delete Movie' 
     //        button.addEventListener('click', modal.open)
     //        element.appendChild(button)
      //   });
     //    
    // }


    // static addNewMovie = (id) => {

     //    const button = document.createElement("button")
     //    button.innerText ='Add new Movie' 
     //    const getMovieCard = document.querySelector('.theater-card[data-id="'+ id +'"]')
      //   console.log(getMovieCard);
      //   getMovieCard.appendChild(button)
       //  button.addEventListener('click', modal.open)
    // }

    // static backGraund = () => {
     //    const backGraundButton = document.createElement('button')
     //    backGraundButton.innerText = 'Change Color'
     //    const getBackGraund = document.querySelector('body')
     //    getBackGraund.appendChild(backGraundButton)
      //   backGraundButton.addEventListener('click', function(){
      //       let firstone = document.querySelector('.firstone');
      //       firstone.classList.toggle('black'); 
            
      //   })
    // }
    
    

    

   
    


    
    
}


