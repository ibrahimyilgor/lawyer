import React, { useState, useEffect } from "react";
import './TopNav.css';
import logo from '../logo.png'; // with import
import logo2 from '../logo2.png'; // with import
import {NavLink, useLocation} from "react-router-dom";
import ListIcon from '@mui/icons-material/List';
import useWindowDimensions from '../getDimensions';
import { IconButton, Popover, Typography } from '@mui/material';

const TopNavigation = () => {
  const dim = useWindowDimensions();

  const location = useLocation();
  const [selected,setSelected] = useState(0);

  const [aboutItems, setAboutItems] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
        <div className="Logos">
          <div className="Logo">
            <img alt="logo2" width="100vw" height="auto" src={logo2} />
          </div>
          <div className="Logo">
            <img alt="logo" width="400vw" height="auto" src={logo} />
          </div>
        </div>
        <div className="RightTopNav">
          {dim.width > dim.height && (<><div className="NavAndBox">
            <NavLink to="/" className={selected === 1 ? "SelectedLink" : "Link"}>Ana Sayfa</NavLink>
            <div className={selected === 1 ? "Highlight" : "NoHighlight"}></div>
          </div><div className="NavAndBox">
              <NavLink to="/hakkimizda" className={selected === 2 ? "SelectedLink" : "Link"}>Hakkımızda</NavLink>
              <div className={selected === 2 ? "Highlight" : "NoHighlight"}></div>
            </div><div className="NavAndBox">
              <NavLink to="/iletisim" className={selected === 3 ? "SelectedLink" : "Link"}>İletişim</NavLink>
              <div className={selected === 3 ? "Highlight" : "NoHighlight"}></div>
            </div></>)}
          {dim.width <= dim.height && (
            <IconButton style={{maxWidth: 'auto', maxHeight: 'auto', minWidth: 'auto', minHeight: 'auto'}} onClick={handleClick} /* className={classes.iconbutton} */ aria-label="delete">
              <ListIcon fontSize="large" />
          </IconButton>
          )}
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            onClick={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <>
              <div className="PopoverItem">
              <NavLink to="/" className={selected === 1 ? "SelectedLink" : "Link"}>Ana Sayfa</NavLink>
              </div>
              <div className="PopoverItem">
              <NavLink to="/hakkimizda" className={selected === 2 ? "SelectedLink" : "Link"}>Hakkımızda</NavLink>
              </div>
              {/* {aboutItems && (
                <><div className="PopoverItem">
                  <NavLink to="/" className={selected === 1 ? "SelectedLink" : "Link"}>Ana Sayfa</NavLink>
                </div><div className="PopoverItem">
                    <NavLink to="/hakkimizda" className={selected === 2 ? "SelectedLink" : "Link"}>Hakkımızda</NavLink>
                  </div></>)
              } */}
              <div className="PopoverItem">
              <NavLink to="/iletisim" className={selected === 3 ? "SelectedLink" : "Link"}>İletişim</NavLink>
              </div>
           </>
          </Popover>
        </div>
      </div>
      <div className="Line">
      </div>
        </div>
  ); 
}

export default TopNavigation;