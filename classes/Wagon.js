class Wagon {
    constructor (capacity) {
        this.capacity = capacity
        this.passenger = []
    }

    join (Traveler) {
        if(this.passenger.length < this.capacity) {

            this.passenger.push(Traveler)
           // console.log(`${Traveler.name} has joined the wagon!`)
            //console.log(this.passenger.length)

        } else if(this.passenger.length >= this.capacity) {

           //console.log(`${Traveler.name} is not able to join! There's no more space!`)
        }
    }
     
    getAvailableSeatCount () {

        return this.capacity - this.passenger.length 
        
    }


    shouldQuarantine () {
        for(let index = 0; index < this.passenger.length; index ++) {

         let currentPassenger = this.passenger[index]

         if(currentPassenger.isHealthy === false) {
             return true
         }
        }
        return false
    }

    totalFood () {
        let totalFood = 0

        for(let index = 0; index < this.passenger.length; index ++) {

            let currentPassenger = this.passenger[index]

            totalFood += currentPassenger.food
        }
        return totalFood
    } 
}