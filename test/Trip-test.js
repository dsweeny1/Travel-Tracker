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
            suggestedActivities: []
        },
        {
            id: 2, 
            userID: 35, 
            destinationID: 25,
            travelers: 5,
            date: '2022/10/04',
            duration: 18,
            status: 'approved',
            suggestedActivities: []
        }
        ]
    })

    it('Should be a function', () => {
        expect(Trip).to.be.a('function')
    })

    it('Should be an instance of Trip', () => {
        expect(trip1).to.be.an.instanceOf(Trip)
    })

    it("Should have an id", () => {
        expect(trips[0].id).to.equal(1);
        expect(trips[1].id).to.equal(2);
    });

    it("Should have a user id", () => {
        expect(trips[0].userID).to.equal(44);
        expect(trips[1].userID).to.equal(35);
    });

    it("Should have a destination id", () => {
        expect(trips[0].destinationID).to.equal(49);
        expect(trips[1].destinationID).to.equal(25);
    });

    it("Should have the amount of travelers", () => {
        expect(trips[0].travelers).to.equal(1);
        expect(trips[1].travelers).to.equal(5);
    });

    it("Should have a travel date", () => {
        expect(trips[0].date).to.equal('2022/09/16');
        expect(trips[1].date).to.equal('2022/10/04');
    });

    it("Should have a travel duration", () => {
        expect(trips[0].duration).to.equal(8);
        expect(trips[1].duration).to.equal(18);
    });

    it("Should have a travel status", () => {
        expect(trips[0].status).to.equal('approved');
        expect(trips[1].status).to.equal('approved');
    });

    it("Should have a list of suggested activities", () => {
        expect(trips[0].suggestedActivities.length).to.equal(0);
        expect(trips[1].suggestedActivities.length).to.equal(0);
    });
})
