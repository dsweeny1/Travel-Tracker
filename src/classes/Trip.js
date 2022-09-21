export default class Trip {
    constructor(id,userID, destinationID, travelers, date, duration, status) {
        this.id = id,
        this.userID = userID,
        this.destinationID = destinationID,
        this.travelers = travelers,
        this.date = date,
        this.duration = duration,
        this.status = status,
        this.suggestedActivities = []
    }

    getDestinationName(destinations) {
        this.destination = destinations.filter(location => this.id === location.id).map(location => location.destination)[0]
    }

    getTravelerID(trips) {
        this.userID = trips.filter(trip => this.id === trip.id).map(trip => trip.userID)[0]
    }

    getDestinationID(trips) {
        this.destinationID = trips.filter(trip => this.id === trip.id).map(trip => trip.destinationID)[0]
    }

    getTravelerAmount(trips) {
        this.travelers = trips.filter(trip => this.id === trip.id).map(trip => trip.travelers)[0]
    }

    getTripDate(trips) {
        this.date = trips.filter(trip => this.id === trip.id).map(trip => trip.date)[0]
    }

    getTripDuration(trips) {
        this.duration = trips.filter(trip => this.id === trip.id).map(trip => trip.duration)[0]
    }

    getTripStatus(trips) {
        this.status = trips.filter(trip => this.id === trip.id).map(trip => trip.status)[0]
    }
}