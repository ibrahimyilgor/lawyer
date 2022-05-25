import React, { useState, useEffect } from "react";
import './TopNav.css';
import logo from '../logo.png'; // with import
import logo2 from '../logo2.png'; // with import
import ListIcon from '@mui/icons-material/List';
import useWindowDimensions from '../getDimensions';
import { IconButton, Popover, Typography } from '@mui/material';
import { div } from "react-router-dom";

const TopNavigation = ({selected, setSelected}) => {
  const dim = useWindowDimensions();

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

  return (

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
          {dim.width > dim.height && (
          <>
          <div className="NavAndBox">
            <div onClick={ () => setSelected(1)} className={selected === 1 ? "Selecteddiv" : "div"}><a href="#birinci">Birinci</a></div>
            <div className={selected === 1 ? "Highlight" : "NoHighlight"}></div>
          </div>
          <div className="NavAndBox">
              <div onClick={ () => setSelected(2)} className={selected === 2 ? "Selecteddiv" : "div"}><a href="#ikinci">İkinci</a></div>
              <div className={selected === 2 ? "Highlight" : "NoHighlight"}></div>
            </div>
            <div className="NavAndBox">
              <div onClick={ () => setSelected(3)} className={selected === 3 ? "Selecteddiv" : "div"}><a href="#ucuncu">Üçüncü</a></div>
              <div className={selected === 3 ? "Highlight" : "NoHighlight"}></div>
            </div>
            <div className="NavAndBox">
              <div onClick={ () => setSelected(4)} className={selected === 3 ? "Selecteddiv" : "div"}><a href="#dorduncu">Dördüncü</a></div>
              <div className={selected === 4 ? "Highlight" : "NoHighlight"}></div>
            </div>
            <div className="NavAndBox">
              <div onClick={ () => setSelected(5)} className={selected === 3 ? "Selecteddiv" : "div"}><a href="#besinci">İletişim</a></div>
              <div className={selected === 5 ? "Highlight" : "NoHighlight"}></div>
            </div>
            </>)}
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
            <div style={{flexDirection:"column", display:"flex"}}>
              <div className="NavAndBox">
                <div onClick={ () => setSelected(1)} className={selected === 1 ? "SelectedLink" : "Link"}><a href="#birinci">Birinci</a></div>
                <div className={selected === 1 ? "Highlight" : "NoHighlight"}></div>
              </div>
              <div className="NavAndBox">
                <div onClick={ () => setSelected(2)} className={selected === 2 ? "SelectedLink" : "Link"}><a href="#ikinci">İkinci</a></div>
                <div className={selected === 2 ? "Highlight" : "NoHighlight"}></div>
              </div>
              <div className="NavAndBox">
                <div onClick={ () => setSelected(3)} className={selected === 3 ? "SelectedLink" : "Link"}><a href="#ucuncu">Üçüncü</a></div>
                <div className={selected === 3 ? "Highlight" : "NoHighlight"}></div>
              </div>
              <div className="NavAndBox">
                <div onClick={ () => setSelected(4)} className={selected === 3 ? "SelectedLink" : "Link"}><a href="#dorduncu">Dördüncü</a></div>
                <div className={selected === 4 ? "Highlight" : "NoHighlight"}></div>
              </div>
              <div className="NavAndBox">
                <div onClick={ () => setSelected(5)} className={selected === 3 ? "SelectedLink" : "Link"}><a href="#besinci">İletişim</a></div>
                <div className={selected === 5 ? "Highlight" : "NoHighlight"}></div>
              </div>
            </div>
          </Popover>
        </div>
      </div>
  ); 
}

export default TopNavigation;