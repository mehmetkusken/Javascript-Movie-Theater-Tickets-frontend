const api = new ApiService("http://localhost:3000")
const modal = new Modal()
let user

Navigation.renderNav()
 

document.querySelector('form').addEventListener('submit',usernameSubmit)

function usernameSubmit(e){
    e.preventDefault()
   
   let username = e.target.username.value;
   if (username != undefined && username != null && username != '') {
     api.findOrCreateUsername(username).then(userData =>{
        user = userData
          
    })
    document.getElementById('theater').innerHTML = ''
   } else {
     alert('Username can not be empty!')
   }
   
}



