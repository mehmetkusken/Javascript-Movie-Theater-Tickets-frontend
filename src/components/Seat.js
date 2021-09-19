class Seat{

    static renderSeats = () => {
        this.renderScreen()
        document.getElementById("container").innerHTML = ''
        this.renderSeat()
     
        this.renderInfo()
        
    }

    static renderSeat = () => {
        let data = [
            {
                seatId: 1,
                position: 1
            },
            {
                seatId: 2,
                position: 2
            },
            {
                seatId: 3,
                position: 3
            },
            {
                seatId: 4,
                position: 4
            },
            {
                seatId: 5,
                position: 5
            },
            {
                seatId: 6,
                position: 6
            },
            {
                seatId: 7,
                position: 7
            },
            {
                seatId: 8,
                position: 8
            },
            {
                seatId: 9,
                position: 9
            },
            {
                seatId: 10,
                position: 10
            },
            {
                seatId: 11,
                position: 11
            },
            {
                seatId: 12,
                position: 12,
                is_taken: true
            },
        ];
        const container = document.getElementById("container");

        let dataTemplate = []
       
        data.forEach(element => {
            if (parseInt(element.position) % 6 == 1) {
                dataTemplate.push(document.createElement('div'))
                dataTemplate[dataTemplate.length - 1].id = 'row';
            }

            dataTemplate[dataTemplate.length -1].innerHTML += `<div class="seat ${element.is_taken ? 'reserved' : ''}" data-position="${element.position}"></div>`
        });
        dataTemplate.forEach(element => {
            container.appendChild(element)
        });
    }

    static renderScreen = () => {
        const screenContainer = document.createElement("div")
        screenContainer.id = "screen"
        const container = document.getElementById("container");
       
        container.appendChild(screenContainer)
       
    }

    static renderInfo = () => {
        const infoContainer = document.createElement("ul")
        infoContainer.className = "info"
        document.getElementById("container").appendChild(infoContainer)
        infoContainer.innerHTML += `
        <li class= "li"><div class="seat"><span>Empty</span></div></li>
        <li class= "li"><div class="seat reserved"><span>Reserved</span></div></li>
        <li class= "li"><div class="seat selected"><span>Selected</span></div></li>
        `
        this.renderMovieList()
    }

    static renderMovieList = () => {
        const movieList = document.createElement("div")
         movieList.className = "movie-list"
         document.getElementById("container").appendChild(movieList)
         movieList.innerHTML += ` <select id="movie">
         <option disabled>Movies</option>
         <option value="20">Jungle Cruise</option>
        </select>`
        this.renderP()
     }


    static renderP = () => {
        const pContainer = document.createElement("p")
        pContainer.id = "text"
        document.getElementById("container").appendChild(pContainer)
        pContainer.innerHTML += `
       <p> <span id="count">1</span> Seats Price is $<span id="amount">0</span></p>
       `
        this.renderClick()
    }

    static renderClick = () => {
        const container = document.querySelector('#container')
        container.addEventListener('click' , (e) => {
            if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
                e.target.classList.toggle('selected');
                this.renderCalculate()
            };
        })
        
    }

    static renderCalculate = () => {
        const amount = document.getElementById('amount')
        const select = document.getElementById('movie')
        let selectedSeatCount = container.querySelectorAll('.seat.selected').length-1 ;
        let price = select.value
        amount.innerText = selectedSeatCount*price
        this.renderCount()
       
    }

    static renderCount = () => {
        const count = document.getElementById('count')
        let selectedSeatCount = container.querySelectorAll('.seat.selected').length-1 ;
        count.innerText = selectedSeatCount
         
    }


    
    







    
        
    
        
    
}
    
