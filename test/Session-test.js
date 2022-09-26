import { expect } from "chai";
import Session from "../src/classes/Session";
import Trip from "../src/classes/Trip";
import Traveler from "../src/classes/Traveler";
import Destination from "../src/classes/Destination";

describe('Session', () => {
let trip1;
let trip2;
let trip3;
let trip4;
let trips;
let traveler1;
let traveler2;
let travelers;
let destination1;
let destination2;
let destination3;
let destination4;
let destinations;
let session;

beforeEach(() => {
    trip1 = new Trip({
      id: 1, 
      userID: 1, 
      destinationID: 1, 
      travelers: 1, 
      date: "2022/09/16", 
      duration: 8, 
      status: "approved", 
      suggestedActivities: []
    })
    trip2 = new Trip({
      id: 2, 
      userID: 2, 
      destinationID: 2, 
      travelers: 5, 
      date: "2022/10/04", 
      duration: 18, 
      status: "approved", 
      suggestedActivities: []
    })
    trip3 = new Trip({
      id: 3, 
      userID: 1, 
      destinationID: 3, 
      travelers: 3, 
      date: "2022/05/22", 
      duration: 17, 
      status: "approved", 
      suggestedActivities: []
    })
    trip4 = new Trip({
      id: 4, 
      userID: 1, 
      destinationID: 4, 
      travelers: 2, 
      date: "2022/02/25", 
      duration: 10, 
      status: "pending", 
      suggestedActivities: []
    })

    traveler1 = new Traveler({id: 1, name: 'Ham Leadbeater', travelerType: 'relaxer'})
    traveler2 = new Traveler({id: 2, name: 'Rachael Vaughten', travelerType: 'thrill-seeker'})

    destination1 = new Destination({
      id: 1, 
      destination: 'Lima, Peru', 
      estimatedLodgingCostPerDay: 70, 
      estimatedFlightCostPerPerson: 400, 
      image: 'https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80', 
      alt: 'overview of city buildings with a clear sky'
    })
  
    destination2 = new Destination({
      id: 2, 
      destination: 'Stockholm, Sweden', 
      estimatedLodgingCostPerDay: 100, 
      estimatedFlightCostPerPerson: 780, 
      image: 'https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80', 
      alt: 'city with boats on the water during the day time'
    })
    destination3 = new Destination({
      id: 3, 
      destination: 'Sydney, Austrailia', 
      estimatedLodgingCostPerDay: 130, 
      estimatedFlightCostPerPerson: 950, 
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80', 
      alt: 'opera house and city buildings on the water with boats'
    })
    destination4 = new Destination({
      id: 4, 
      destination: 'Cartagena, Colombia', 
      estimatedLodgingCostPerDay: 65, 
      estimatedFlightCostPerPerson: 350, 
      image: 'https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', 
      alt: 'boats at a dock during the day time'
    })

    trips = [trip1, trip2, trip3, trip4]
    travelers = [traveler1, traveler2]
    destinations = [destination1, destination2, destination3, destination4]

    session = new Session(travelers, destinations, trips)
    })

    it('Should be a function', () => {
        expect(Session).to.be.a('function')
    })

    it('Should be able to show a traveler all of their trips', () => {
      expect(session.eachTravelerTrips).to.deep.equal([])
        session.findAllTripsByTraveler(1)
        expect(session.eachTravelerTrips).to.deep.equal([
            {
              alt: 'overview of city buildings with a clear sky',
              date: '2022/09/16',
              destination: 'Lima, Peru',
              destinationID: 1,
              duration: 8,
              id: 1,
              image: 'https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
              status: 'approved',
              userID: 1,
              travelers: 1,
              suggestedActivities: [],
              totalTripCost: 960,
              withAgentFee: 1056
            },
            {
              id: 3,
              userID: 1,
              destinationID: 3,
              travelers: 3,
              withAgentFee: 5566,
              date: '2022/05/22',
              duration: 17,
              status: 'approved',
              suggestedActivities: [],
              destination: 'Sydney, Austrailia',
              totalTripCost: 5060,
              image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
              alt: 'opera house and city buildings on the water with boats'
            },
            {
              id: 4,
              userID: 1,
              travelers: 2,
              date: '2022/02/25',
              destinationID: 4,
              duration: 10,
              status: 'pending',
              suggestedActivities: [],
              destination: 'Cartagena, Colombia',
              withAgentFee: 1485,
              totalTripCost: 1350,
              image: 'https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
              alt: 'boats at a dock during the day time'
            }
          ])
    })

    it('Should return the traverlers pending trips', () => {
      session.findAllTripsByTraveler(1)
        expect(session.getPendingTrips()).to.deep.equal([{
            id: 4,
            userID: 1,
            travelers: 2,
            date: '2022/02/25',
            destinationID: 4,
            duration: 10,
            status: 'pending',
            suggestedActivities: [],
            destination: 'Cartagena, Colombia',
            totalTripCost: 1350,
            withAgentFee: 1485,
            image: 'https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            alt: 'boats at a dock during the day time'
          }])
    })

    it('Should return the total trip cost', () => {
      session.findAllTripsByTraveler(1)
        expect(session.getTotalSpent('2022')).to.equal('8107.00')
    })
})