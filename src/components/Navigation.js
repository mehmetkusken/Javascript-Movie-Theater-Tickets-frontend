class Navigation{
    
    static renderNav = () => {
       const navi =  document.getElementById('try')
       navi.innerHTML += `
        <div class="logo">
        <h4>Ticket X</h4>
        </div>
        <ul class="nav-links">
        <li><a href="javascript:;" data-link="theaters">Theater </a></li>
        <li><a href="javascript:;" data-link="tickets">Buy Tickets </a></li>
        <li><a href="#">My Tickets </a></li>
        </ul>
      `
      Navigation.handlePageClick();
    }

    static handlePageClick = () => {
      let links = document.querySelectorAll('[data-link]');
      links.forEach(function (element) {
        element.addEventListener('click', Navigation.handleClickEvent);
      });
    }

    static handleClickEvent = (e) => {
      let page = e.target.dataset.link;
      switch(page) {
        case 'theaters':
          Theater.getTheaters();
          document.getElementById("theater").classList.remove('hidden');
          document.getElementById("container").classList.add('hidden');
          break;
        case 'tickets':
          Seat.renderSeats();
          document.getElementById("theater").classList.add('hidden');
          document.getElementById("container").classList.remove('hidden');
          break;
      }
    }
}