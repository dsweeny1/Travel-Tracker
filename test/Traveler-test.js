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

    it("Should be an instance of User", () => {
        expect(traveler1).to.be.an.instanceOf(Traveler);
    });

    it("Should have an id", () => {
        expect(travelers[0].id).to.equal(1);
        expect(travelers[1].id).to.equal(2);
    });

    it("Should have a name", () => {
        expect(travelers[0].name).to.equal("Ham Leadbeater");
        expect(travelers[1].name).to.equal("Rachael Vaughten");
    });

    it("Should have a traveler type", () => {
        expect(travelers[0].travelerType).to.equal("relaxer");
        expect(travelers[1].travelerType).to.equal("thrill-seeker");
    });
})
