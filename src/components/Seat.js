class Seat{

    static renderSeats = () => {
        this.renderScreen()
        this.renderSeat()
        this.renderSeat()
        this.renderSeat()
        this.renderSeat()
        this.renderSeat()
        this.renderSeat()
        this.renderSeat()
        this.renderSeat()
        this.renderSeat()
        this.renderSeat()
        this.renderSeat()
        this.renderSeat()
        this.renderSeat()
        this.renderInfo()
        this.renderP()
    }
    
    static renderSeat = () => {

        const seatContainer = document.createElement("div")
        seatContainer.id = "row"
        document.getElementById("container").appendChild(seatContainer)
        seatContainer.innerHTML += `
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat reserved"></div>
        <div class="seat selected"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        `
    }

    static renderScreen = () => {
        const screenContainer = document.createElement("div")
        screenContainer.id = "screen"
        document.getElementById("container").appendChild(screenContainer)
      
    }

    static renderInfo = () => {
        const infoContainer = document.createElement("ul")
        infoContainer.id = "info"
        document.getElementById("container").appendChild(infoContainer)
        infoContainer.innerHTML += `
        <li><div class="seat"><span>Empty</span></div></li>
        <li><div class="seat reserved"><span>Reserved</span></div></li>
        <li><div class="seat selected"><span>Selected</span></div></li>
        `
    }

    static renderP = () => {
        const pContainer = document.createElement("p")
        pContainer.id = "text"
        document.getElementById("container").appendChild(pContainer)
        pContainer.innerHTML += `
        <span>1</span> Seats Price is $<span id="amount">20</span>
        `
    }





    
        
    
        
    
}
    
