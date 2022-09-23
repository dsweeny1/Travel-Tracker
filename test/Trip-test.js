import { expect } from "chai";
import Trip from "../src/classes/Trip";

describe("Trip", () => {
    let trip1;
    let trip2;
    let trips;

    beforeEach(() => {
        trip1 = new Trip(1)
        trip2 = new Trip(2)
        trips = [
        {
            id: 1, 
            userID: 44, 
            destinationID: 49,
            travelers: 1,
            date: '2022/09/16',
            duration: 8,
            status: 'approved',
            suggestedActivites: []
        },
        {
            id: 2, 
            userID: 35, 
            destinationID: 25,
            travelers: 5,
            date: '2022/10/04',
            duration: 18,
            status: 'approved',
            suggestedActivites: []
        }
        ]
    })

    it('Should be a function', () => {
        expect(Trip).to.be.a('function')
    })

    it('Should be able to get the traveler id by the trip id number', () => {
        trip1.getTravelerID(trips)
        trip2.getTravelerID(trips)
        expect(trip1.userID).to.equal(44)
        expect(trip2.userID).to.equal(35)
    })

    it('Should be able to get the destination id by the trip id number', () => {
        trip1.getDestinationID(trips)
        trip2.getDestinationID(trips)
        // console.log(trip1)
        expect(trip1.destinationID).to.equal(49)
        expect(trip2.destinationID).to.equal(25)
    })

    it('Should be able to get the destination id by the trip id number', () => {
        trip1.getTravelerAmount(trips)
        trip2.getTravelerAmount(trips)
        // console.log(trip1)
        expect(trip1.travelers).to.equal(1)
        expect(trip2.travelers).to.equal(5)
    })

    it('Should be able to get the trip date by the trip id number', () => {
        trip1.getTripDate(trips)
        trip2.getTripDate(trips)
        // console.log(trip1)
        expect(trip1.date).to.equal('2022/09/16')
        expect(trip2.date).to.equal('2022/10/04')
    })

    it('Should be able to get the trip duration by the trip id number', () => {
        trip1.getTripDuration(trips)
        trip2.getTripDuration(trips)
        // console.log(trip1)
        expect(trip1.duration).to.equal(8)
        expect(trip2.duration).to.equal(18)
    })
    
    it('Should be able to get the trip status by the trip id number', () => {
        trip1.getTripStatus(trips)
        trip2.getTripStatus(trips)
        // console.log(trip1)
        expect(trip1.status).to.equal('approved')
        expect(trip2.status).to.equal('approved')
    })

    // it('Should be able to get the suggested activities by the trip id number', () => {
    //     trip1.getSuggestedActivities(trips)
    //     trip2.getSuggestedActivities(trips)
    //     console.log(trip1)
    //     expect(trip1.suggestedActivites.length).to.deep.equal(0)
    //     expect(trip2.suggestedActivites.length).to.deep.equal(0)
    // })
})