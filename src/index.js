const api = new ApiService("http://localhost:3000")
const modal = new Modal()
let user

Navigation.renderNav()


document.querySelector('form').addEventListener('submit',usernameSubmit)

function usernameSubmit(e){
    e.preventDefault()
    let username = e.target.username.value

     api.findOrCreateUsername(username).then(userData =>{
        user = userData
        let heroImage = document.querySelector('.hero-image')
        heroImage.classList.remove('hidden')
         document.getElementById('theater').innerHTML = ''
      })
  
  
}



