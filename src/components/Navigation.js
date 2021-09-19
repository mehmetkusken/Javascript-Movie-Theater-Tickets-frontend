class Navigation{
    
    renderNav = () => {
       const navi = document.createElement("div")
       document.getElementById('try').appendChild(navi)
       navi.innerHTML += `
        <div class="logo">
        <h4>Ticket X</h4>
        </div>
        <ul class="nav-links">
        <li><a href="#">Theater </a></li>
        <li><a href="#">Buy Tickets </a></li>
        <li><a href="#">My Tickets </a></li>
        </ul>
      `
    }
}