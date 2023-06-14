import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './Trending/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'

function Home() {
  return (
   <>
   <HeroBanner/>
   <Trending/>
   <Popular/>
   <TopRated/>
   </>
  )
}

export default Home
