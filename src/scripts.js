import './css/styles.css';
const dayjs = require('dayjs')
import { fetchAll } from './apiCalls'
import Session from './classes/Session';
import Traveler from './classes/Traveler';
import Trip from './classes/Trip';
import Destination from './classes/Destination';


// console.log('This is the JavaScript entry file - your code begins here.');

// QUERYSELECTORS
const travelerGreeting = document.querySelector('.welcome-customer-text')
const travelerCards = document.querySelector('.trip-container')
const dateInput = document.querySelector('#select-date')
// console.log(dateInput)
const dataInput = document.querySelector('.data-input')
const destinationInput = document.querySelector('#select-destination')
const travelersInput = document.querySelector('#number-of-travelers')
const durationInput = document.querySelector('#duration')
const submitButton = document.querySelector('.submit-button')


// GLOBAL VARIABLES
let travelers;
let trips;
let destinations;
let session;
let singleTraveler;
let trip;
let destination;
const getFetch = () => {
    fetchAll()
    .then(data => {
        console.log('data', data)
        travelers = data[0].travelers
        destinations = data[1].destinations
        trips = data[2].trips
        session = new Session(travelers, destinations, trips)
        singleTraveler = new Traveler(travelers[getRandomUserId()])
        console.log(singleTraveler)
        session.findAllTripsByTraveler(singleTraveler.id)
        console.log(session.eachTravelerTrips)
        customerInfo()
        displayTravelerTrips()
        showDestinations()
        postTripData()
    })
}

const getRandomUserId = () => {
    return Math.floor(Math.random() * 49) + 1;
};

const testFunction = () => {
    console.log(dateInput.value)
    console.log(destinationInput.value)
    console.log(travelersInput.value)
    console.log(durationInput.value)
}

submitButton.addEventListener('click', testFunction)

const customerInfo = () => {
    travelerGreeting.innerText = `Welcome ${singleTraveler.name.split(" ")[0]}!
    So far you've spent $${session.getTotalSpent()} with us. Happy traveling!`
};

const displayTravelerTrips = () => {
    let result = session.eachTravelerTrips.map(trip => {
        return `<section class="trip-container" id=${trip.userID}>
        <img src="${trip.image}" height="500" width="750">
        <section>
        <p>Reservation Summary:</p>
        <p>Date: ${dayjs(trip.date).format('MMMM, D, YYYY')}</p>
        <p>Number of Travelers: ${trip.travelers} Travelers</p>
        <p>Trip Duration: ${trip.duration} Days</p>
        <p>Trip Status: ${trip.status}</p>
        <p>Destination: ${trip.destination}</p>
        <p>Total Cost: $${trip.withAgentFee.toFixed(2)}<p>
        `
    })
    return travelerCards.innerHTML = result
}

const showDestinations = () => {
    const destinationSelection = document.querySelector('.destination-entry-selection')
    let destinationOptions = session.destinations.map(option => {
        return `<option> ${option.destination} </option>`
    })
    destinationSelection.innerHTML = `
    <form>
        <label for="destination-selection">Select Destination:</label>
        <select id="select1" name="destination-selection" class="destination-entry-selection" required>
        ${destinationOptions}
        </select>
    `
}



const postTripData = (event) => {
        trip = new Trip(trips);
        console.log(trip)
        // make variables with a value of the values i'm capturing on the submit click event
        // new instantiations of Trip and Destination in each POST call
        // maybe another .then invoke other postCall there
        // fetch("http://localhost:3001/api/v1/hydration", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //       userID: singleUser.id,
        //       date: date,
        //       numOunces: numberOunces.value
        //     }),
        // })
        // .then((response) => {
        //     if (!response.ok) {
        //       throw new Error(
        //         "There was an error adding your Hydration Data, please retry later"
        //       );
        //     } else {
        //       return response.json();
        //     }
        //   })
        //   .then(() => {
        //     getFetch()
        //     .then(() => displayHydrationInfo()) 
        //   })
        //   .catch((err) => {
        //     postErrorMessage.innerText = 'Error updating data, please retry later'
        //   });
    }



window.addEventListener('load', getFetch)