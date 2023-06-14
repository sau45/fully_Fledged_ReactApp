import React from 'react'
import { useParams } from 'react-router-dom'
import PassTofetch from '../../passbyhooks/PassTofetch'
import DetailsBanner from './detailsBanner/DetailsBanner';
import Cast from './detailsBanner/cast/Cast';
import VideosSection from './videosection/VideoSection';
import Similar from './Carousel/Similar';
import Recommendation from './Carousel/Recommendation';

function Details() {

  const {mediaType,id}=useParams();

  const {data,loading}=PassTofetch(`/${mediaType}/${id}/videos`)
  const {data:credits,loading:creditsLoading}=PassTofetch(`/${mediaType}/${id}/credits`)
  
 

 
  return (
   <>
   
   <DetailsBanner video={data?.results[0]} crew={credits?.crew} />
   <Cast cast={credits?.cast} creditsLoading={creditsLoading}/>
   <VideosSection data={data} loading={loading}/>
   <Similar mediaType={mediaType} id={id}/>
   <Recommendation mediaType={mediaType} id={id}/>

   </>
  )
}

export default Details
