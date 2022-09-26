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
    trip1 = new Trip(1, 1, 1, 1, "2022/09/16", 8, "approved", [])
    trip2 = new Trip(2, 2, 2, 5, "2022/10/04", 18, "approved", [])
    trip3 = new Trip(3, 1, 3, 3, "2022/05/22", 17, "approved", [])
    trip4 = new Trip(4, 1, 4, 2, "2022/02/25", 10, "pending", [])

    traveler1 = new Traveler({id: 1, name: 'Ham Leadbeater', travelerType: 'relaxer'})
    traveler2 = new Traveler({id: 2, name: 'Rachael Vaughten', travelerType: 'thrill-seeker'})

    destination1 = new Destination(1, 'Lima, Peru', 70, 400, 517, 'https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80', 'overview of city buildings with a clear sky')
  
    destination2 = new Destination(2, 'Stockholm, Sweden', 100, 780, 968, 'https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80', 'city with boats on the water during the day time')
    destination3 = new Destination(3, 'Sydney, Austrailia', 130, 950, 1188, 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80', 'opera house and city buildings on the water with boats')
    destination4 = new Destination(4, 'Cartagena, Colombia', 65, 350, 902, 'https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', 'boats at a dock during the day time')

    trips = [trip1, trip2, trip3, trip4]
    travelers = [traveler1, traveler2]
    destinations = [destination1, destination2, destination3, destination4]

    session = new Session(travelers, destinations, trips)
    })

    it('Should be a function', () => {
        expect(Session).to.be.a('function')
    })

    it('Should be able to show a traveler all of their trips', () => {
        session.findAllTripsByTraveler(traveler1.id)
        expect(session.eachTravelerTrips).to.deep.equal([
            {
              alt: 'overview of city buildings with a clear sky',
              date: '2022/09/16',
              destination: 'Lima, Peru',
              duration: 8,
              id: 1,
              image: 'https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
              status: 'approved',
              userID: 1,
              travelers: 1,
              suggestedActivities: [],
              totalTripCost: 517,
              withAgentFee: 568.7
            },
            {
              id: 3,
              userID: 1,
              travelers: 3,
              withAgentFee: 3564,
              date: '2022/05/22',
              duration: 17,
              status: 'approved',
              suggestedActivities: [],
              destination: 'Sydney, Austrailia',
              totalTripCost: 1188,
              image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
              alt: 'opera house and city buildings on the water with boats'
            },
            {
              id: 4,
              userID: 1,
              travelers: 2,
              date: '2022/02/25',
              duration: 10,
              status: 'pending',
              suggestedActivities: [],
              destination: 'Cartagena, Colombia',
              withAgentFee: 1804,
              totalTripCost: 902,
              image: 'https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
              alt: 'boats at a dock during the day time'
            }
          ])
    })

    it.only('Should return the total trip cost', () => {
      session.findAllTripsByTraveler(1)
        expect(session.getTotalSpent('2022')).to.equal(5885)
    })
})