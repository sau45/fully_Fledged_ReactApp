import React from 'react'
import PassTofetch from '../../../passbyhooks/PassTofetch'
import Carousel from '../../carousel/Carousel';

function Recommendation({mediaType,id}) {
    const {data,loading,error}= PassTofetch(`/${mediaType}/${id}/recommendations`);
    

  return (
    <>
    <Carousel 
    title="Recommendations"
    endPoint={mediaType}
    loading={loading}
    data={data?.results} />

    </>
  )
}

export default Recommendation
