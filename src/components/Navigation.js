class Navigation{

    renderNav = () => {
        document.getElementById("header-container").innerHTML += `
        <div>
            <a class="logo" href="/">TicketX</a>
        </div>
        <nav>
            <ul>
                <li ><a href="javascript:;" data-type="link" data-page="movie" class="movie-menu">Movies</a></li>
                <li><a href="javascript:;" data-type="link" data-page="theater" class="theater-menu">Theaters</a></li>
                <li><a href="javascript:;" data-type="link" data-page="ticket"class="seat-menu">My Tickets</a></li>
            </ul>
        </nav>
      `
    }
}