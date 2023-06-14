import React, { useState } from 'react'
import ContentWrapper from '../../contentWrapper/ContentWrapper'
import SwitchTab from '../../switchTab/SwitchTab'
import './trending.scss'
import Carousel from '../../carousel/Carousel'
import PassTofetch from '../../../passbyhooks/PassTofetch'

function Trending() {
  const [endPoint,setEndPoint]=useState("day");
  const {data,loading}= PassTofetch(`/trending/movie/${endPoint}`)

    const onTabChange= (tab)=>{
      setEndPoint(tab==="Day" ?"day":"week");

    }

  return (
   <>
   <div className="carouselSection">
    <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTab data={["Day","Week"]} onTabChange={onTabChange}/>
    </ContentWrapper>
    <Carousel data={data?.results} loading={loading} endPoint={endPoint}/>
   </div>

   </>
  )
}

export default Trending
