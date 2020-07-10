class traveler {
    constructor (name) {
        this.name = name
        this.foodCount = 1
        this.isHealthy = true
    }

    hunt () {
        this.foodCount += 2
        return this.foodCount
        // increases food unit by 2 (+2)
    }

    eat () {
        this.foodCount -= 1

        if(this.foodCount < 1) {
            this.isHealthy = false
        }
        // Consumes(decreases) food unit by 1 (-1)
        // if farmer has no food, the traveler is no longer healthy (isHealthy property is changed to false)
    }
}


class wagon {
    constructor (capacity) {
        this.capacity = capacity
        this.initialPassengerList = []
    }

    getAvailableSeatCount () {

        let emptySeats = Number(this.capacity) - traveler

        return emptySeats

        //returns the number of empty seats, determined by the capacity set when the wagon was created, subtracted by the number of passengers currently on board.
    }
    join (traveler) {


        if(!this.capacity) {
            this.initialPassengerList.push(traveler)
        }

        return this.initialPassengerList

       // Adds the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them.
    }

    shouldQuarantine () {

       // Returns true if there is at least one unhealthy person in the wagon. Return false if not.
    }

    totalFood () {
      //  Returns the total amount of food among all passengers in the wagon.
    } 
}

