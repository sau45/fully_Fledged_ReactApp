import React from 'react'
import PassTofetch from '../../../passbyhooks/PassTofetch'
import Carousel from '../../carousel/Carousel';

function Similar({mediaType,id}) {
    const {data,loading,error}= PassTofetch(`/${mediaType}/${id}/similar`);
    const title = mediaType ==="tv" ?"Similar Tv Shows": "Similar Movies";

  return (
  <>
  <Carousel title={title}
  data={data?.results}
  loading={loading}
  endPoint={mediaType} />
  </>
  )
}

export default Similar
