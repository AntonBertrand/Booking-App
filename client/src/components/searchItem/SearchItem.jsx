import React from 'react'
import './searchItem.css'

export const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img className='siImg' src="https://cf.bstatic.com/xdata/images/hotel/square200/307880035.webp?k=8e4a0b05eab83aac77484387cfaa9cf01bc5ead8f66373f26f0e6fbc57dce31c&o=" alt="" />
        <div className="siDesc">
            <h1 className="siTitle">Hostal Rosell Boutique</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Hotel in San Antonio</span>
            <span className="siFeatures">Entire studio - 1 Bathroom - 1 Full Bed</span>
            <span className="siCancelOp">Free Cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">£124</span>
            <span className="siTaxOp">Includes taxes and fees</span>
             <button className='siCheckButton'>See availability</button>
          </div>
        </div>
    </div>
  )
}
