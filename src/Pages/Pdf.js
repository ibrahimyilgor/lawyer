import React, {useEffect} from "react";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import useWindowSize from "../useWindowSize";
import './Pdf.css';
import {useState} from 'react'

// Import the main Viewer component
import { Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// default layout plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles of default layout plugin
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

const Pdf = () => {
  const windowSize = useWindowSize();
  /*useEffect(() => {
    console.log("windowSize",windowSize);
 }, [windowSize]);*/

   // creating new plugin instance
   const defaultLayoutPluginInstance = defaultLayoutPlugin();
   // pdf file onChange state
   const [pdfFile, setPdfFile]=useState(null);
   const [selectedPdf, setSelectedPdf] =useState(0);
   // pdf file error state
   const [pdfError, setPdfError]=useState('');

   const allowedFiles = ['application/pdf'];
   
  return (
    <div className="parent">
    <div className="left">
      {pdfError&&<span className='text-danger'>{pdfError}</span>}
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem onClick={()=>setSelectedPdf(0)}>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem onClick={()=>setSelectedPdf(1)}>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem onClick={()=>setSelectedPdf(2)}>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </List>
    </div>
    <div className="right">
      <div className="pdf"> 
            {/* <Viewer 
            fileUrl='document.pdf'
            plugins={[defaultLayoutPluginInstance]}></Viewer> */}


        {/* render this if we have pdfFile state null   */}
        {!pdfFile&&<>{selectedPdf}</>}
      </div>
    </div>

  </div>
  );
}

export default Pdf;