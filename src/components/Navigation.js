class Navigation{
    
    static renderNav = () => {
       const navi =  document.getElementById('try')
       navi.innerHTML += `
        <div class="logo">
        <h4>Movie Theaters</h4>
        </div>
        <ul class="nav-links">
        <li><a href="javascript:;" data-link="theaters">Theaters </a></li>
        <li><a href="javascript:;" data-link="homepage">Home Page </a></li>
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
      let heroImage = document.querySelector('.hero-image');
      switch(page) {
        case 'theaters':
          Theater.getTheaters();
          document.getElementById("theater").classList.remove('hidden');
          heroImage.classList.add('hidden');
          break;
        case 'homepage':
          heroImage.classList.remove('hidden');
          document.getElementById("theater").classList.add('hidden');
          break;
      }
    }
}