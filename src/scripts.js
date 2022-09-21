import './css/styles.css';
// import './images/turing-logo.png'
const dayjs = require('dayjs')
import { fetchAll } from './apiCalls'
import Session from './classes/Session';
import Traveler from './classes/Traveler';


console.log('This is the JavaScript entry file - your code begins here.');

// QUERYSELECTORS
const travelerGreeting = document.querySelector('.welcome-customer-text')
const travelerCards = document.querySelector('.trip-container')

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
        // let id = 10
        singleTraveler = new Traveler(travelers[getRandomUserId])
        console.log(singleTraveler)
        session.findAllTripsByTraveler(singleTraveler.id)
        // console.log(session.eachTravelerTrips)
        customerInfo()
        displayTravelerTrips()
    })
}

const getRandomUserId = () => {
    return Math.floor(Math.random() * 49) + 1;
};

const customerInfo = (travelers) => {
    // session.findAllTripsByTraveler(singleTraveler.id)
    travelerGreeting.innerText = `Welcome ${singleTraveler.name}!
    So far you've spent $${session.getTotalSpent()} with us. Happy traveling!`
};

const displayTravelerTrips = () => {
    // let trip = 
    let result = session.eachTravelerTrips.map(trip => {
        return `<section class="trip-container" id=${trip.userID}>
        <img src="${trip.image}">
        <section>
        <p>Reservation Summary:</p>
        <p>Date: ${dayjs(trip.date).format('MMMM, D, YYYY')}</p>
        <p>Number of Travelers: ${trip.travelers}</p>
        <p>Trip Duration: ${trip.duration}</p>
        <p>Trip Status: ${trip.status}</p>
        <p>Destination: ${trip.destination}</p>
        <p>Total Cost: ${trip.withAgentFee}<p>
        `
    })
    return travelerCards.innerHTML = result
}

// const displayCustomerBooking = () => {
//     let room = rooms.map(room => new Room(room))
//     const result = singleCustomer.myBookings.map(booking => {
//         return `<section class='booking-card' id=${booking.userID}>
//         <img src="${trip.image}">
//         <section>
//         <p>Reservation Summary:</p>
//         <p> ${dayjs(booking.date).format('MMMM, D, YYYY')}</p>
//         <p>Room #${booking.roomNumber}</p>
//         <p>Room Type: ${booking.roomType}</p>
//         <p>Bidet Included: ${booking.bidet ? 'yes' : 'no'}</p>
//         <p>Number of Beds: ${booking.numberOfBeds}
//         <p>Bed Size: ${booking.bedSize}</p>
//         <p id="${booking.id}" class="room-cost">Cost: $${booking.roomCost}</p>
//         </section>
//         <button id="${booking.id}" class hidden="book-room-button">Book Now!</button>
//         </section>
//         `
//     }).join(' ')
//     return customerBookings.innerHTML = result
// }

window.addEventListener('load', getFetch)