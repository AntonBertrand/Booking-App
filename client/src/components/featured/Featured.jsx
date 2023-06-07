import React from 'react'
import "./featured.css"
import useFetch from '../../hooks/useFetch'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import { useRef } from 'react';

export const Featured = () => {

    const renderCount = useRef(0);

    const {data, loading, error} = useFetch("/hotels/countByCity?cities=berlin,madrid,london");

    const { dispatch } = useContext(SearchContext);

    const navigate = useNavigate();

    const [options, setOptions] = useState({
      adult: 1,
      children: 0,
      room: 1,
    });

    const [destination, setDestination] = useState("");
    const [dates, setDates] = useState([
        {
          startDate: new Date(),
          endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        }
      ]);


    const handleSearch = () => {

      setDestination("berlin");

      console.log({state:{destination,dates,options}});

    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", {state:{destination,dates,options}} )
  } 

  useEffect(() => {

    renderCount.current = renderCount.current + 1;

    if (renderCount.current < 3) {
      return; // 👈️ return early if initial render
    } else {
      handleSearch()
    }

  }, [destination])

  return (
    <div className='featured'>
        { loading ? ("Loading please wait" ) : ( <> <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/976952.jpg?k=4c536b3833e5f6721ff5f89fa4f15d8f50fd5cd4a963060414078428aa67a6d5&o=" alt="" className='featuredImg' onClick={() => setDestination("berlin")}/>
            <div className="featuredTitles">
                <h1>Berlin</h1>
                <h2>{data[0]} Properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/976980.jpg?k=29c289ca126b54f55ca35b7c11393b93106a7305a44f60344028511a6d404092&o=" alt="" className='featuredImg' onClick={() => setDestination("madrid")} />
            <div className="featuredTitles">
                <h1>Madrid</h1>
                <h2>{data[1]} Properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/613088.jpg?k=a370ac3fb385fb211b35a79a42b0e968ddb458be37108af476c558bf4cedc1f3&o=" alt="" className='featuredImg' onClick={() => setDestination("london")} />
            <div className="featuredTitles">
                <h1>London</h1>
                <h2>{data[2]} Properties</h2>
            </div>
        </div> </>) }

    </div>
  )
}
