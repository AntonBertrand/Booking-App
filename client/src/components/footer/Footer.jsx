import React from 'react'
import './footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="fLists">
            <ul className="fList">
                <li className="fListItem">Countries</li>
                <li className="fListItem">Regions</li>
                <li className="fListItem">Cities</li>
                <li className="fListItem">Districts</li>
                <li className="fListItem">Airports</li>
                <li className="fListItem">Hotels</li>
            </ul>

            <ul className="fList">
                <li className="fListItem">Homes</li>
                <li className="fListItem">Apartments</li>
                <li className="fListItem">Resorts</li>
                <li className="fListItem">Villas</li>
                <li className="fListItem">B&Bs</li>
                <li className="fListItem">Guest Houses</li>
            </ul>

            <ul className="fList">
                <li className="fListItem">Unique places to stay</li>
                <li className="fListItem">All destinations</li>
                <li className="fListItem">All flight destinations</li>
                <li className="fListItem">All car hire locations</li>
                <li className="fListItem">Discover</li>
                <li className="fListItem">Reviews</li>
            </ul>

            <ul className="fList">
                <li className="fListItem">Car Hire</li>
                <li className="fListItem">Flight Finder</li>
                <li className="fListItem">Resturant Reservations</li>
                <li className="fListItem">Travel Agents</li>
            </ul>

            <ul className="fList">
                <li className="fListItem">Coronavirus FAQs</li>
                <li className="fListItem">About Vanquis Booking</li>
                <li className="fListItem">Customer Service Helps</li>
                <li className="fListItem">Partner Help</li>
                <li className="fListItem">Careers</li>
                <li className="fListItem">Sustainability</li>
            </ul>
        </div>
        <div className="fText">Copyright © 2023 VanquisBooking</div>
    </div>
  )
}
