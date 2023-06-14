import React, { useState } from 'react'
import ContentWrapper from '../../contentWrapper/ContentWrapper'
import SwitchTab from '../../switchTab/SwitchTab'
import Carousel from '../../carousel/Carousel'
import PassTofetch from '../../../passbyhooks/PassTofetch'

function TopRated() {
  const [endPoint,setEndPoint]=useState("movie");
  const {data,loading}= PassTofetch(`/${endPoint}/top_rated`)

    const onTabChange= (tab)=>{
      setEndPoint(tab==="Movie" ?"movie":"tv");

    }

  return (
   <>
   <div className="carouselSection">
    <ContentWrapper>
        <span className="carouselTitle">Top Rated </span>
        <SwitchTab data={["Movie","Tv"]} onTabChange={onTabChange}/>
    </ContentWrapper>
    <Carousel data={data?.results} loading={loading} endPoint={endPoint}/>
   </div>

   </>
  )
}

export default TopRated
