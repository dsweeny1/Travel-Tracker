import { expect } from "chai";
import Traveler from "../src/classes/Traveler";

describe("Traveler", () => {
    let traveler1;
    let traveler2;
    let travelers;

    beforeEach(() => {
        traveler1 = new Traveler(1)
        traveler2 = new Traveler(2)
        travelers = [
            {id: 1, name: "Ham Leadbeater", travelerType: "relaxer"},
            {id: 2, name: "Rachael Vaughten", travelerType: "thrill-seeker"}
        ]
    })

    it('Should be a function', () => {
        expect(Traveler).to.be.a('function')
    })

    // it('Should return the traveler names from id number', () => {
    //     traveler1.getTravelerName()
    //     traveler2.getTravelerName()
    //     expect(traveler1.name).to.equal("Ham Leadbeater")
    //     expect(traveler2.name).to.equal("Rachael Vaughten")
    // })

    // it('Should return the traveler type from id number', () => {
    //     traveler1.getTravelerType()
    //     traveler2.getTravelerType()
    //     expect(traveler1.travelerType).to.equal("relaxer")
    //     expect(traveler2.travelerType).to.equal("thrill-seeker")
    // })
})