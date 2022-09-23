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

    it('Should be able to get the destination name by id number', () => {
        destination1.getDestinationName(destinations)
        destination2.getDestinationName(destinations)
        expect(destination1.destination).to.equal('Lima, Peru')
        expect(destination2.destination).to.equal('Stockholm, Sweden')
    })

    it('Should be able to get the estimated lodging cost per day by id number', () => {
        destination1.getDestinationLodgingCost(destinations)
        // console.log(destination1)
        destination2.getDestinationLodgingCost(destinations)
        expect(destination1.estimatedLodgingCost).to.equal(70)
        expect(destination2.estimatedLodgingCost).to.equal(100)
    })

    it('Should be able to get the estimated flight cost per person by id number', () => {
        destination1.getDestinationFlightCost(destinations)
        // console.log(destination1)
        destination2.getDestinationFlightCost(destinations)
        expect(destination1.estimatedFlightCost).to.equal(400)
        expect(destination2.estimatedFlightCost).to.equal(780)
    })

    it('Should be able to get the estimated flight cost per person by id number', () => {
        destination1.getDestinationTotalCost(destinations)
        // console.log(destination1)
        destination2.getDestinationTotalCost(destinations)
        expect(destination1.totalDestinationCost).to.equal(517)
        expect(destination2.totalDestinationCost).to.equal(968)
    })

    it('Should be able to get the destination image by id number', () => {
        destination1.getDestinationImage(destinations)
        // console.log(destination1)
        destination2.getDestinationImage(destinations)
        expect(destination1.image).to.equal('https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80')
        expect(destination2.image).to.equal('https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')
    })

    it('Should be able to get the destination alt text by id number', () => {
        destination1.getDestinationAltText(destinations)
        // console.log(destination1)
        destination2.getDestinationAltText(destinations)
        expect(destination1.alt).to.equal('overview of city buildings with a clear sky')
        expect(destination2.alt).to.equal('city with boats on the water during the day time')
    })
})