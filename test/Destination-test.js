import { expect } from "chai";
import Destination from "../src/classes/Destination";

describe("Destination", () => {
    let destination1;
    let destination2;
    let destinations;

    beforeEach(() => {
        destination1 = new Destination(1)
        destination2 = new Destination(2)
        destinations = [
            {
                id: 1, 
                destination: 'Lima, Peru', 
                estimatedLodgingCostPerDay: 70,
                estimatedFlightCostPerPerson: 400,
                image: 'https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
                alt: 'overview of city buildings with a clear sky'
            },
            {
                id: 2, 
                destination: 'Stockholm, Sweden', 
                estimatedLodgingCostPerDay: 100,
                estimatedFlightCostPerPerson: 780,
                image: 'https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                alt: 'city with boats on the water during the day time'
            }
        ]
    })

    it('Should be a function', () => {
        expect(Destination).to.be.a('function')
    })

    it('Should be an instance of Destination', () => {
        expect(destination1).to.be.an.instanceOf(Destination)
    })

    it("Should have an id", () => {
        expect(destinations[0].id).to.equal(1);
        expect(destinations[1].id).to.equal(2);
    });

    it("Should have a destination", () => {
        expect(destinations[0].destination).to.equal('Lima, Peru');
        expect(destinations[1].destination).to.equal('Stockholm, Sweden');
    });

    it("Should have an estimated lodging cost per day", () => {
        expect(destinations[0].estimatedLodgingCostPerDay).to.equal(70);
        expect(destinations[1].estimatedLodgingCostPerDay).to.equal(100);
    });

    it("Should have an estimated flight cost per person", () => {
        expect(destinations[0].estimatedFlightCostPerPerson).to.equal(400);
        expect(destinations[1].estimatedFlightCostPerPerson).to.equal(780);
    });

    it("Should have an image", () => {
        expect(destinations[0].image).to.equal('https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80');
        expect(destinations[1].image).to.equal('https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
    });

    it("Should have alt text for the image", () => {
        expect(destinations[0].alt).to.equal('overview of city buildings with a clear sky');
        expect(destinations[1].alt).to.equal('city with boats on the water during the day time');
    });
})
