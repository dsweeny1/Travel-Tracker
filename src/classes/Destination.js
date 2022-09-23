export default class Destination {
    constructor(destination) {
        this.id = destination.id,
        this.destination = destination.destination
        this.estimatedLodgingCostPerDay = destination.estimatedLodgingCostPerDay,
        this.estimatedFlightCost = destination.estimatedFlightCostPerPerson,
        this.image = destination.image,
        this.alt = destination.alt
    }
}