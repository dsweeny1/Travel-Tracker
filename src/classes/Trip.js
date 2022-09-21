export default class Trip {
    constructor(trip) {
        this.id = trip.id,
        this.userID = trip.userID,
        this.destinationID = trip.destinationID,
        this.travelers = trip.travelers,
        this.date = trip.date,
        this.duration = trip.duration,
        this.status = trip.status,
        this.suggestedActivities = []
    }

    // getDestinationName(destinations) {
    //     this.destination = destinations.filter(location => this.id === location.id).map(location => location.destination)[0]
    // }

    // getTravelerID(trips) {
    //     this.userID = trips.filter(trip => this.id === trip.id).map(trip => trip.userID)[0]
    // }

    // getDestinationID(trips) {
    //     this.destinationID = trips.filter(trip => this.id === trip.id).map(trip => trip.destinationID)[0]
    // }

    // getTravelerAmount(trips) {
    //     this.travelers = trips.filter(trip => this.id === trip.id).map(trip => trip.travelers)[0]
    // }

    // getTripDate(trips) {
    //     this.date = trips.filter(trip => this.id === trip.id).map(trip => trip.date)[0]
    // }

    // getTripDuration(trips) {
    //     this.duration = trips.filter(trip => this.id === trip.id).map(trip => trip.duration)[0]
    // }

    // getTripStatus(trips) {
    //     this.status = trips.filter(trip => this.id === trip.id).map(trip => trip.status)[0]
    // }
}