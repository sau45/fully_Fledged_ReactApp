import React, { useState } from 'react'
import ContentWrapper from '../../contentWrapper/ContentWrapper'
import SwitchTab from '../../switchTab/SwitchTab'
import Carousel from '../../carousel/Carousel'
import PassTofetch from '../../../passbyhooks/PassTofetch'

function Popular() {
  const [endPoint,setEndPoint]=useState("movie");
  const {data,loading}= PassTofetch(`/${endPoint}/popular`)


    const onTabChange= (tab)=>{
      setEndPoint(tab==="Movie" ?"movie":"tv");

    }

  return (
   <>
   <div className="carouselSection">
    <ContentWrapper>
        <span className="carouselTitle">What's Popular </span>
        <SwitchTab data={["Movie","Tv"]} onTabChange={onTabChange}/>
    </ContentWrapper>
    <Carousel data={data?.results} loading={loading} endPoint={endPoint}/>
   </div>

   </>
  )
}

export default Popular
