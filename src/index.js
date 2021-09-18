const api = new ApiService("http://localhost:3000")
const modal = new Modal()
let user
//Seat.renderSeats()
 // Navigation.renderNav()


document.querySelector('form').addEventListener('submit',usernameSubmit)

function usernameSubmit(e){
    e.preventDefault()
    api.findOrCreateUsername(e.target.username.value).then(userData =>{
        user = userData
        Theater.getTheaters()
      
       
        
    })
}

