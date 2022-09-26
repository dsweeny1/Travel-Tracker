export default class Session {
    constructor(travelers, destinations, trips) {
        this.travelers = travelers,
        this.destinations = destinations,
        this.trips = trips,
        this.eachTravelerTrips = []
    }

    findAllTripsByTraveler(id) {
        this.eachTravelerTrips = []
        const travelerID = this.travelers.find(traveler => id === traveler.id)
        const travelerTrips = this.trips.filter(trip => travelerID.id === trip.userID)
        this.destinations.filter(destination => {
            travelerTrips.forEach(trip => {
                let lodgingCost = destination.estimatedLodgingCostPerDay * trip.duration
                let flightCost = destination.estimatedFlightCostPerPerson * trip.travelers
                console.log('lodge', lodgingCost)
        console.log('flight', flightCost)
                let totalCost = lodgingCost + flightCost
                if(destination.id === trip.destinationID) {
                    this.eachTravelerTrips.push({
                        id: trip.id,
                        userID: trip.userID,
                        destinationID: destination.id,
                        travelers: trip.travelers,
                        date: trip.date,
                        duration: trip.duration,
                        status: trip.status,
                        suggestedActivities: trip.suggestedActivities,
                        destination: destination.destination,
                        totalTripCost: totalCost,
                        withAgentFee: (totalCost * .1) + totalCost,
                        image: destination.image,
                        alt: destination.alt
                    })
                }
            })
        })
        console.log('each', this.eachTravelerTrips)
        return this.eachTravelerTrips
    }

    getPendingTrips() {
        const pendingTrips = this.eachTravelerTrips.filter(trip => trip.status === 'pending')
        return pendingTrips
    }

    getTotalSpent(currentYear) {
        const tripCost = this.eachTravelerTrips.reduce((totalCost, trip) => {
            if(trip.date.includes(currentYear))
                totalCost += trip.withAgentFee
            return totalCost
        }, 0)
        return tripCost.toFixed(2)
    }
}