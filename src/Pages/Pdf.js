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

import AllPagesPDFViewer from "../PdfAllPages";

import samplePDF from "../PdfFiles/sample.pdf";
import samplePDF2 from "../PdfFiles/sample2.pdf";
import samplePDF3 from "../PdfFiles/sample3.pdf";

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

  const pdfs = [
    {
      url:samplePDF,
      name: "Sample1",
      date: "4 Haz 22"
    },
    {
      url:samplePDF2,
      name: "Sample2",
      date: "5 Haz 22"
    },
    {
      url:samplePDF3,
      name: "Sample3",
      date: "6 Haz 22"
    } ,
    {
      url:samplePDF,
      name: "Sample1",
      date: "4 Haz 22"
    },
    {
      url:samplePDF2,
      name: "Sample2",
      date: "5 Haz 22"
    },
    {
      url:samplePDF3,
      name: "Sample3",
      date: "6 Haz 22"
    } ,
    {
      url:samplePDF,
      name: "Sample1",
      date: "4 Haz 22"
    },
    {
      url:samplePDF2,
      name: "Sample2",
      date: "5 Haz 22"
    },
    {
      url:samplePDF3,
      name: "Sample3",
      date: "6 Haz 22"
    } ,
    {
      url:samplePDF,
      name: "Sample1",
      date: "4 Haz 22"
    },
    {
      url:samplePDF2,
      name: "Sample2",
      date: "5 Haz 22"
    },
    {
      url:samplePDF3,
      name: "Sample3",
      date: "6 Haz 22"
    } ,
    {
      url:samplePDF,
      name: "Sample1",
      date: "4 Haz 22"
    },
    {
      url:samplePDF2,
      name: "Sample2",
      date: "5 Haz 22"
    },
    {
      url:samplePDF3,
      name: "Sample3",
      date: "6 Haz 22"
    } ,
    {
      url:samplePDF,
      name: "Sample1",
      date: "4 Haz 22"
    },
    {
      url:samplePDF2,
      name: "Sample2",
      date: "5 Haz 22"
    },
    {
      url:samplePDF3,
      name: "Sample3",
      date: "6 Haz 22"
    } ,
    {
      url:samplePDF,
      name: "Sample1",
      date: "4 Haz 22"
    },
    {
      url:samplePDF2,
      name: "Sample2",
      date: "5 Haz 22"
    },
    {
      url:samplePDF3,
      name: "Sample3",
      date: "6 Haz 22"
    } ,
    {
      url:samplePDF,
      name: "Sample1",
      date: "4 Haz 22"
    },
    {
      url:samplePDF2,
      name: "Sample2",
      date: "5 Haz 22"
    },
    {
      url:samplePDF3,
      name: "Sample3",
      date: "6 Haz 22"
    } ,
    {
      url:samplePDF,
      name: "Sample1",
      date: "4 Haz 22"
    },
    {
      url:samplePDF2,
      name: "Sample2",
      date: "5 Haz 22"
    },
    {
      url:samplePDF3,
      name: "Sample3",
      date: "6 Haz 22"
    } ,
    {
      url:samplePDF,
      name: "Sample1",
      date: "4 Haz 22"
    },
    {
      url:samplePDF2,
      name: "Sample2",
      date: "5 Haz 22"
    },
    {
      url:samplePDF3,
      name: "Sample3",
      date: "6 Haz 22"
    } ,
    {
      url:samplePDF,
      name: "Sample1",
      date: "4 Haz 22"
    },
    {
      url:samplePDF2,
      name: "Sample2",
      date: "5 Haz 22"
    },
    {
      url:samplePDF3,
      name: "Sample3",
      date: "6 Haz 22"
    } ,
    {
      url:samplePDF,
      name: "Sample1",
      date: "4 Haz 22"
    },
    {
      url:samplePDF2,
      name: "Sample2",
      date: "5 Haz 22"
    },
    {
      url:samplePDF3,
      name: "Sample3",
      date: "6 Haz 22"
    } 
  ];

  useEffect(() => {
    setPdfFile(pdfs[selectedPdf].url)
  }, [selectedPdf]);
   
  return (
    <div className="parent">
    <div className="left">
      {pdfError&&<span className='text-danger'>{pdfError}</span>}
      <List sx={{ maxHeight: "90%", overflow: "auto", width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {pdfs.map( (pdf,index) => {
          return (
          <ListItem onClick={()=>setSelectedPdf(index)}>
           <ListItemAvatar>
             <Avatar>
               <ImageIcon />
             </Avatar>
           </ListItemAvatar>
           <ListItemText primary={pdf?.name} secondary={pdf?.date} />
          </ListItem>
          )
        })}
      </List>
    </div>
    <div className="right">
      <div className="all-page-container">
        <AllPagesPDFViewer pdf={pdfFile} />
      </div>
    </div>

  </div>
  );
}

export default Pdf;