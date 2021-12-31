import React, { useState } from "react";
import './TopNav.css';
import logo from '../logo.png'; // with import
import {
    NavLink
  } from "react-router-dom";

const TopNavigation = () => {

  const [selected,setSelected] = useState(0);

  return (
    <div  className="TopNav">
      <div>
        <img alt="logo" width="100px" src={logo} />
      </div>
      <div className="NavAndBox">
        <NavLink onClick={()=>setSelected(1)} to="/" className={selected===1 ? "SelectedLink" : "Link"} >Ana Sayfa</NavLink>
        <div className={selected===1 ? "Highlight" : "NoHighlight"}></div>
      </div>
      <div className="NavAndBox">
        <NavLink onClick={()=>setSelected(2)} to="/hakkimizda" className={selected===2 ? "SelectedLink" : "Link"}>Hakkımızda</NavLink>
        <div className={selected===2 ? "Highlight" : "NoHighlight"}></div>
      </div>
      <div className="NavAndBox">
        <NavLink onClick={()=>setSelected(3)} to="/iletisim" className={selected===3 ? "SelectedLink" : "Link"}>İletişim</NavLink>
        <div className={selected===3 ? "Highlight" : "NoHighlight"}></div>
      </div>
    </div>
  ); 
}

export default TopNavigation;