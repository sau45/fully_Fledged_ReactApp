
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from "./Component/header/Header";
import Footer from "./Component/footer/Footer";
import Home from "./Component/home/Home";
import Details from "./Component/details/Details";
import PageNotFound from "./Component/404/PageNotFound";
import { useEffect } from 'react';
import { FetchApi } from './Component/api/FetchApi';
import { useDispatch } from 'react-redux';
import { setGenere, setUrl } from './Component/store/HomeSlice';
import SearchResult from './Component/searchresult/SearchResult';
import Explore from './Component/details/explore/Explore';





 



function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    FetchApi("/configuration").then(res=>res.json()).then(data=>{
      const url ={
        backdrop:data.images.secure_base_url+"original",
        poster:data.images.secure_base_url+"original",
        profile:data.images.secure_base_url+"original"
      }
    
      dispatch(setUrl(url));

   
    })
    generesCall();
   
  },[])



  const generesCall = async ()=>{
    const promises=[];
    const endpoints=["tv","movie"];
    const allGeneres ={};
    endpoints.forEach((url)=>{
      promises.push(FetchApi(`/genre/${url}/list`).then(res=>res.json()).then((data)=>{return data}));

    })


    const data = await Promise.all(promises);
   

    data?.map(({genres})=>{
       return genres?.map((item)=>(allGeneres[item.id]=item));
    })
    
    dispatch(setGenere(allGeneres));
    
  }
 
 



  return (
   <>
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' Component={Home}/>
    <Route path='/:mediaType/:id' Component={Details}/>
    <Route path='/search/:query' Component={SearchResult}/>
    <Route path='/explore/:mediaType' Component={Explore}/>
    <Route path='*' Component={PageNotFound}/>

   </Routes>
   <Footer/>
   </BrowserRouter>
  
   </>
  );
}

export default App;
