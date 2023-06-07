import React from 'react'
import './propertyList.css'
import useFetch from '../../hooks/useFetch'

export const PropertyList = () => {

    const {data, loading, error} = useFetch("/hotels/countByType");


    const images = [
        "https://cf.bstatic.com/xdata/images/hotel/square600/119307188.webp?k=fd0b2bfe19688da092671bbfd9a350e457aab99910cfac5f022bb5cc53d8c4dd&o=",
        "https://cf.bstatic.com/xdata/images/hotel/square600/296578071.webp?k=90e08e9466abac66c5582cada5d2ed99141ccc9f2ad99f674baf75a4b6302ab9&o=",
        "https://cf.bstatic.com/xdata/images/hotel/square600/14126593.webp?k=d6854d48a232774664a468611ecb8b404d1d336389bbb21c7f651b04deb37d9f&o=",
        "https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o=",
        "https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o="
    ]

  return (
    <div className='pList'>
        {loading ? ("loading") :  (<> 
        {data && images.map((img, i) => (<div className="pListItem" key={i}>
            <img src={img} alt="" className="pListImg"/>
            <div className="pListTitles">
                <h1>{data[i]?.type}</h1>
                <h2>{data[i]?.count} {data[i]?.type}</h2>
            </div>
        </div>
        ))}
         </>
         )}
    </div>
  )
}
