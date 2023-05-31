import React from 'react'
import "./featured.css"
import useFetch from '../../hooks/useFetch'

export const Featured = () => {

    const {data, loading, error} = useFetch("/hotels/countByCity?cities=Berlin,madrid,london");


  return (
    <div className='featured'>
        { loading ? ("Loading please wait" ) : ( <> <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/976952.jpg?k=4c536b3833e5f6721ff5f89fa4f15d8f50fd5cd4a963060414078428aa67a6d5&o=" alt="" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Berlin</h1>
                <h2>{data[0]} Properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/976980.jpg?k=29c289ca126b54f55ca35b7c11393b93106a7305a44f60344028511a6d404092&o=" alt="" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Madrid</h1>
                <h2>{data[1]} Properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/613088.jpg?k=a370ac3fb385fb211b35a79a42b0e968ddb458be37108af476c558bf4cedc1f3&o=" alt="" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>London</h1>
                <h2>{data[2]} Properties</h2>
            </div>
        </div> </>) }

    </div>
  )
}
