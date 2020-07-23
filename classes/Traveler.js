class Traveler {
    constructor (name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }

    hunt () {
        // increases food unit by 2 (+2)
        return this.food += 2
    }

    eat () {
        if( this.food < 1) {
            this.isHealthy = false
           // console.log(`${this.name} isn't feeling too great.`)
        } else {
            this.food -= 1
            this.isHealthy = true
           // console.log(`${this.name} is looking great!`)
        }
    }
}