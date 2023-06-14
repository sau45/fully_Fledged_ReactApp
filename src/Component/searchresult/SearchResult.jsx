import React ,{useState,useEffect}from 'react'
import { useParams } from 'react-router-dom'
import InfiniteScroll from "react-infinite-scroll-component"

import "./searchResult.scss"

import { FetchApi } from '../api/FetchApi'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import noResults from"../../Component/Moviex-images/no-results.png"
import Spinner from '../spinner/Spinner'
import MovieCard from '../movieCard/MovieCard'

function SearchResult() {
    const [data,setData]=useState(null);
    const [loading,setLoading] =useState(false);
    const [pageNum , setPageNum]=useState(1);
    const {query}=useParams();
    

    const dataFetchOfSearchKey =()=>{
      setLoading(true)
      FetchApi(`/search/multi?query=${query}&pages=${pageNum}`).then((res)=>res.json()).then((data)=>{
       
        setData(data)
        setPageNum((prev)=>prev+1);
        setLoading(false);
      })
    }


    const nextDataFetch =()=>{
      
      FetchApi(`/search/multi?query=${query}&pages=${pageNum}`).then((res)=>res.json()).then((data2)=>{
        if(data?.results){

          setData({...data,results:[...data?.results ,...data2?.results]}) 
         
        }else{
          setData(data2)
        }
        setPageNum((prev)=>prev+1);
      })
      

    }
    


    useEffect(()=>{
      setPageNum(1);
      dataFetchOfSearchKey();
     
    },[query])



  return (
   <>
   <div className="searchResultsPage">
    {loading&& <Spinner initial={true}/>}
    { !loading && 
    <ContentWrapper>
      {data?.results?.length > 0 ?
       (<>
          <div className="pageTitle">
            {`Search ${data.total_results > 1 ?"results":"result"} of '${query}'`}
          </div>
          <InfiniteScroll
           dataLength={data?.results?.length ||[]}
          className='content'
          next={nextDataFetch}
          hasMore={pageNum <=data?.total_pages}
          loader={<Spinner/>}>
         
          {data?.results?.map((item,index)=>{
            // if(item.media_type ==="person")return;
            return(
              <MovieCard key={index} data={item} fromSearch={true} mediaType={query}/>
            )
          })}
          </InfiniteScroll>
      </>):(
       
        <span style={{color:'red'}}className="resultNotFound">
          Sorry, Results not found!
        </span>
      
      )}
    </ContentWrapper>
    }
   </div>
   </>
  )
}

export default SearchResult
