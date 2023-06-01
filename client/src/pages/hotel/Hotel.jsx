import React from 'react';
import './hotel.css';
import {Navbar} from '../../components/navbar/Navbar.jsx';
import {Header} from '../../components/header/Header.jsx';
import {MailList} from '../../components/mailList/MailList.jsx';
import {Footer} from '../../components/footer/Footer.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../../hooks/useFetch';
import {useLocation} from "react-router-dom";
import { useContext } from 'react';
import { SearchContext } from "../../context/SearchContext";


export const Hotel = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const {data, loading, error} = useFetch(`/hotels/find/${id}`)

  const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);


  const photos = [
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/63502504.jpg?k=500e187dddc5ee2cd7f118a335e861f14f925d4db791e9d1d53332ab64cbce84&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/60706831.jpg?k=41b51ddae9e7d3347c00070ba2949198951d794543e4f2c643275c4220eb780e&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/116050972.jpg?k=696aed01093446bf0ac3d4a7fa2ec7e92e6d2bed8dac4ebd6edb8b1e12f40cb0&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/60706840.jpg?k=3f7a141448670402899b6b8c18504f68b8787f34fbf06da266bd57173341ba4b&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/60706895.jpg?k=bbc85a9200ef17029c0ec1762a117a675d36468912923a180f0ef6ff2073476d&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/63510195.jpg?k=81d800340fc9a1f90770676537c879d8ccad925f69fca15a445d6c56bb053087&o=&hp=1"
    },
  ]

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      {loading ? ("loading") : (
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon = {faLocationDot}/>
            <span>{data.address}</span>
          </div>
          <span className="hotelDistance">Excellent Location - {data.distance}m from center</span>
          <span className="hotelPriceHighlight">Book a stay over £{data.cheapestPrice} at this property and get a free airport taxi</span>
          <div className="hotelImages">
            {data.photos?.map(photo => (
              <div className="hotelImgWrapper">
                <img src={photo.src} className='hotelImg'></img>
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className='hotelTitle'>{data.title}</h1>
              <p className="hotelDesc">
                {data.desc}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a {days}-night stay!</h1>
              <span>
              Couples particularly like the location — they rated it 9.3 for a two-person trip.
              </span>
              <h2>
                <b>£{days * data.cheapestPrice * options.room}</b> ({days} Nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>)}
    </div>
  )
}
