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
const dataInput = document.querySelector('.data-input')
const destinationInput = document.querySelector('#select-destination')
const travelersInput = document.querySelector('#number-of-travelers')
const durationInput = document.querySelector('#duration')
const submitButton = document.querySelector('.submit-button')
const postErrorMessage = document.querySelector('.error-message')


// GLOBAL VARIABLES
let travelers;
let trips;
let destinations;
let session;
let singleTraveler;
const getFetch = () => {
    fetchAll()
    .then(data => {
        console.log('data', data)
        travelers = data[0].travelers
        destinations = data[1].destinations
        trips = data[2].trips
        session = new Session(travelers, destinations, trips)
        singleTraveler = new Traveler(travelers[0])
        session.findAllTripsByTraveler(singleTraveler.id)
        customerInfo()
        displayTravelerTrips()
        showDestinations()
    })
}

const getRandomUserId = () => {
    return Math.floor(Math.random() * 49) + 1;
};

const customerInfo = () => {
    travelerGreeting.innerText = `Welcome ${singleTraveler.name.split(" ")[0]}!
    So far you've spent $${session.getTotalSpent()} with us. Happy traveling!`
};

const displayTravelerTrips = () => {
  let result = session.eachTravelerTrips.map(trip => {
    return `<section class="trip-container" id=${trip.userID}>
    <img src="${trip.image}" height="250" width="500" alt="${trip.alt}">
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
  travelerCards.innerHTML = ''
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
    <select id="select-destination" name="destination-selection" class="destination-entry-selection" required>
    ${destinationOptions}
    </select>
    </form>
    `
}

const postTripData = () => {
  const findDestination = destinations.find(destination => destination.destination === destinationInput.value)
        let trip = {
          id: Date.now(),
          userID: singleTraveler.id,
          destinationID: findDestination.id,
          travelers: travelersInput.value,
          date: dayjs(dateInput.value).format('YYYY/MM/DD'),
          duration: durationInput.value,
          status: 'pending',
          suggestedActivities: []
        }
        fetch("http://localhost:3001/api/v1/trips", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: trip.id, 
                userID: trip.userID, 
                destinationID: trip.destinationID, 
                travelers: trip.travelers, 
                date: trip.date, 
                duration: trip.duration, 
                status: trip.status, 
                suggestedActivities: []
            }),
        })
        .then((response) => {
            if (!response.ok) {
              throw new Error(
                "There was an error adding your Trip Information, please retry later"
              );
            } else {
              return response.json();
            }
          })
          .then((response) => {
            getFetch()
              session.trips.push(trip)
            session.findAllTripsByTraveler(singleTraveler.id)
            displayTravelerTrips()
          })
          .catch((err) => {
            postErrorMessage.innerText = 'Error updating data, please retry later'
          });
    }

submitButton.addEventListener('click', postTripData)
window.addEventListener('load', getFetch)