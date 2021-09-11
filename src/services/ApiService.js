class ApiService {

    constructor(api){
       this.api = api
    }

    getTheaters = () => fetch(this.api + "/theaters").then(resp => resp.json())

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

 }