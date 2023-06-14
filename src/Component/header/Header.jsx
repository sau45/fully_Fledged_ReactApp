import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import './header.scss'
import logo from './images.png'
import ContentWrapper from "../contentWrapper/ContentWrapper";


function Header() {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);

  }

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);


  }

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`)
      setTimeout(() => {
        setShowSearch(false);
        
       }, 1000);

    }
  

  }

  const navigationHandler=(type)=>{
   navigate(`/explore/${type}`)
   setMobileMenu(false);

  }
  useEffect(()=>{
    window.scrollTo(0,0);
  },[location])

  const controlNavbar =()=>{
    
    if(window.scrollY>200 && !mobileMenu){
     if(window.scrollY>lastScrollY){
      setShow("hide")
     }else{
      setShow("show")
     }

    }else{
      setShow("top")
    }

  }

  useEffect(()=>{
    window.addEventListener("scroll",controlNavbar);
    // ??callback function 
    return ()=>{window.removeEventListener("scroll",controlNavbar)}
  })

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo">
          <img src={logo} alt="" onClick={()=>navigate("/")}/>
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={()=>navigationHandler("movie")}>Movies</li>
          <li className="menuItem" onClick={()=>navigationHandler("tv")}>Tv Shows</li>
          <li className="menuItem"><HiOutlineSearch onClick={openSearch} /></li>
        </ul>

        <div className="mobileMenuItems">
          <HiOutlineSearch  onClick={openSearch}/>
          {mobileMenu ? <VscChromeClose onClick={() => setMobileMenu(false)} /> : <SlMenu onClick={openMobileMenu} />}
        </div>

      </ContentWrapper>
    { showSearch &&  <div className="searchBar">
        <ContentWrapper>
          <div className="searchInput">
            <input type="text"
              onChange={(e) => setQuery(e.target.value)}

              onKeyUp={searchQueryHandler}
            />
           <VscChromeClose onClick={()=>setShowSearch(false)}/>
          </div>
        </ContentWrapper>
      </div>}
    </header>
  )
}

export default Header
