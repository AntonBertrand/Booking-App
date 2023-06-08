import React from 'react'
import './featuredProperties.css'
import useFetch from '../../hooks/useFetch'
import { Link } from 'react-router-dom'


export const FeaturedProperties = () => {

    const {data, loading, error} = useFetch(process.env.REACT_APP_BASEURL + "/hotels?featured=true");

  return (
    <div className='fp'>

        { loading ? "Loading" : <> 
            { data.map ((item) => (<div className="fpItem" key={item._id}>
            <Link to={`/hotels/${item._id}`} >
              <img src={item.photos[0]} alt="" className="fpImg" />
            </Link>
            <span className="fpName">{item.name}</span>
            <span className="fpCity">{item.city}</span>
            <span className="fpPrice">From as low as £{item.cheapestPrice}</span>
            { item.rating && <div className="fpRating">
                    <button>{item.rating}</button>
                <span>Excellent</span>
            </div>}
        </div>))} </> }
   

    </div>
  )
}
