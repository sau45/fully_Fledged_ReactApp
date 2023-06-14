import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import PassTofetch from '../../../passbyhooks/PassTofetch';
import { useSelector } from 'react-redux';
import ContentWrapper from '../../contentWrapper/ContentWrapper';
import './heroBanner.scss'
import Img from '../../lazyloading/Image';



function HeroBanner() {
  const [background, setBackground] = useState('');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home)



  const { data, loading } = PassTofetch("/movie/upcoming");

  useEffect(() => {
    const bg = url?.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data ,url?.backdrop])




  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`)
      setQuery('');

    }
    else {
      console.log("Error")
    }

  }

  const navigateBySearch =()=>{
    if(query.length > 0){

      navigate(`/search/${query}`);
      setQuery('');
    }

  }


  return (
    <>
      <div className="heroBanner">


        {!loading && (<div className="backdrop-img">
          <Img src={background} alt="" />
        </div>)}

        <div className="opacity-layer"></div>
        <ContentWrapper>
          <div className="heroBannerContent">
            <span className="title">Welcome.</span>
            <span className="subTitle">Millions of movies, TV shows and people to discover. Explore now.</span>
        
          <div className="searchInput">
            <input type="text"
              onChange={(e) => setQuery(e.target.value)}

              onKeyUp={searchQueryHandler}
            />
            <button onClick={navigateBySearch}>Search</button>
          </div>
          </div>
        </ContentWrapper>


      </div>
    </>
  )
}

export default HeroBanner
