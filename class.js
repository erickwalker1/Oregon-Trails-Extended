class Traveler {
    constructor (name) {
        this.name = name
        this.foodCount = 1
        this.isHealthy = true
    }

    hunt () {
    
        this.foodCount += 2

        // console.log(`${this.name} goes in search of food.`)
        //console.log(`${this.name} now has a food count of ${this.foodCount}`)
        
        // increases food unit by 2 (+2)
    }

    eat () {

        //console.log(`${this.name} decides to eat a portion of his food.`)
       // console.log(`${this.name} now has a food count of ${this.foodCount}`)

        if( this.foodCount < 1) {
            this.isHealthy = false
            console.log(`${this.name} isn't feeling too great.`)
        } else {
            this.foodCount -= 1
            this.isHealthy = true
           // console.log(`${this.name} is looking great!`)
        }
    }
}

 class Wagon {
    constructor (capacity) {
        this.capacity = capacity
        this.passengerList = []
    }

    join (traveler) {
    
        if(this.passengerList.length < this.capacity) {

            this.passengerList.push(traveler)
           // console.log(`${traveler.name} has joined the wagon!`)
           // console.log(this.passengerList.length)

        } else if(this.passengerList.length >= this.capacity) {

          // console.log(`${traveler.name} is not able to join! There's no more space!`)
        }
    }
     
    getAvailableSeatCount () {

        return this.capacity - this.passengerList.length 
        
    }




    shouldQuarantine () {

        for(let index = 0; index < this.passengerList.length; index ++) {
         let currentPassenger = this.passengerList[index]

         if(currentPassenger.isHealthy === false) {
            return true
         }

        }
        return false
    }

    totalFood () {

        let totalFoodCount = 0

        for(let index = 0; index < this.passengerList.length; index ++) {
            let currentPassenger = this.passengerList[index]

            return currentPassenger.foodCount + totalFoodCount
        }
    } 
}