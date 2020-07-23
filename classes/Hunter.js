 class Hunter extends Traveler {
    constructor(name, isHealthy, food = 2) {
        super(name, isHealthy)
        this.food = food
    }

    hunt() {
        this.food += 5
    }

    eat() {
        if(this.food < 2) {
            this.isHealthy = false
            this.food - this.food
        } else {
            this.food -= 2
        }
    }

    giveFood(traveler, numOfFoodUnits) {
        
        if(this.food > numOfFoodUnits) {

          traveler.food += numOfFoodUnits

           this.food -= numOfFoodUnits
        }
    }

} 