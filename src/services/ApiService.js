class ApiService {

    constructor(api){
       this.api = api
    }

    getTheaters = () => fetch(this.api + "/theaters").then(resp => resp.json())
    getTheaterSeats = (theaterId) => fetch(this.api + "/theaters/" + theaterId + "/seats").then(resp => resp.json());
    findOrCreateUsername = (username) => {
      return fetch(this.api + '/users',{
         method: 'POST' , 
         headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: username}),
      })
      .then(response => response.json())
   }

    createTheater = (openNewTheater) => {
      openNewTheater.user_id = user.id
       return fetch(this.api + "/theaters", {
       method: 'POST',
       headers: {
          'Content-Type': 'application/json',
       },
       body: JSON.stringify(openNewTheater),
    })
    .then(response => response.json())
   }

   deleteMovieTheater = (id) =>{
      fetch(this.api + '/theaters/' + id , {
         method: 'DELETE' ,
         headers: {
            'Content-Type': 'application/json',
         }
      })
      .then(resp => resp.json())
      }


    

 }