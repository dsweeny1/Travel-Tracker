export default class Destination {
    constructor(id, destination, estimatedLodgingCostPerDay, estimatedFlightCostPerPerson, totalDestinationCost, image, alt) {
        this.id = id,
        this.destination = destination
        this.estimatedLodgingCostPerDay = estimatedLodgingCostPerDay,
        this.estimatedFlightCost = estimatedFlightCostPerPerson,
        this.totalDestinationCost = totalDestinationCost,
        this.image = image,
        this.alt = alt
    }

    getDestinationName(destinations) {
        this.destination = destinations.filter(location => this.id === location.id).map(location => location.destination)[0]
    }

    getDestinationLodgingCost(destinations) {
        this.estimatedLodgingCostPerDay = destinations.filter(location => this.id === location.id).map(location => location.estimatedLodgingCostPerDay)[0]
    }

    getDestinationFlightCost(destinations) {
        this.estimatedFlightCost = destinations.filter(location => this.id === location.id).map(location => location.estimatedFlightCostPerPerson)[0]
    }

    getDestinationTotalCost(destinations) {
        let finalCost = 0
        let updateTotalCost = 0
        this.totalDestinationCost = destinations.filter(location => this.id === location.id).reduce((totalCost, destination) => {
            totalCost += (destination.estimatedLodgingCostPerDay + destination.estimatedFlightCostPerPerson)
            updateTotalCost = totalCost * .1
            finalCost = totalCost + updateTotalCost
            return finalCost
        }, 0)
        this.totalDestinationCost = finalCost
        return this.totalDestinationCost
    }

    getDestinationImage(destinations) {
        this.image = destinations.filter(location => this.id === location.id).map(location => location.image)[0]
    }

    getDestinationAltText(destinations) {
        this.alt = destinations.filter(location => this.id === location.id).map(location => location.alt)[0]
    }
}