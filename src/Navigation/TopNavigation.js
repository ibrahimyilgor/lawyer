import React, { useState, useEffect } from "react";
import './TopNav.css';
import logo from '../logo.png'; // with import
import {NavLink, useLocation} from "react-router-dom";

const TopNavigation = () => {
  const location = useLocation();
  const [selected,setSelected] = useState(0);

  useEffect(() => {
    console.log(location.pathname);

    if(location.pathname === "/"){
      setSelected(1);
    }
    else if(location.pathname === "/hakkimizda"){
      setSelected(2);
    }
    else if(location.pathname === "/iletisim"){
      setSelected(3);
    }
  }, [location]);

  return (
    <div>
      <div  className="TopNav">
        <div className="Logo">
          <img alt="logo" height="100%" src={logo} />
        </div>
        <div className="RightTopNav">
          <div className="NavAndBox">
            <NavLink to="/" className={selected===1 ? "SelectedLink" : "Link"} >Ana Sayfa</NavLink>
            <div className={selected===1 ? "Highlight" : "NoHighlight"}></div>
          </div>
          <div className="NavAndBox">
            <NavLink to="/hakkimizda" className={selected===2 ? "SelectedLink" : "Link"}>Hakkımızda</NavLink>
            <div className={selected===2 ? "Highlight" : "NoHighlight"}></div>
          </div>
          <div className="NavAndBox">
            <NavLink to="/iletisim" className={selected===3 ? "SelectedLink" : "Link"}>İletişim</NavLink>
            <div className={selected===3 ? "Highlight" : "NoHighlight"}></div>
          </div>
        </div>
      </div>
      <div className="Line">
      </div>
        </div>
  ); 
}

export default TopNavigation;