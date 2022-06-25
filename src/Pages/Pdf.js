import { Button } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React, {useEffect, useState} from "react";
import './Pdf.css';

import sample from "../PdfFiles/sample.pdf"
import sample2 from "../PdfFiles/sample2.pdf"
import sample3 from "../PdfFiles/sample3.pdf"


const useStyles = makeStyles(
  {
    button: {
      '&.MuiButton-root:hover': 
        {
          backgroundColor: '#cccccc',
          color: "black",
        },
    },
    buttonNotTabs: {
      '&.MuiButton-root': 
        {
          backgroundColor: '#222222',
          color: "white",
        },
        '&.MuiButton-root:hover': 
        {
          backgroundColor: '#111111',
          color: "white",
        },
    }
  }
)

const links = [
 [{
    title: "MAKALE1",
    href: sample
  },
  {
    title: "MAKALE2",
    href: sample2
  },
  {
    title: "MAKALE3",
    href: sample3
  }],

  [{
    title: "LİNK1",
    href: "https://www.adalet.gov.tr/"
  },
  {
    title: "LİNK2",
    href: "https://www.barobirlik.org.tr/"
  }]
]

const Pdf = () => {
  const classes = useStyles();

  const [tab, setTab] = useState(0);

  const [firstTabIndex, setFirstTabIndex] = useState(0);
  const [secondTabIndex, setSecondTabIndex] = useState(0);

  const prev = () => {
    if(tab === 0) {
      let index = firstTabIndex;
      index -= 1;
      if(index === -1){
        index += links[0].length;
      } 
      index = index % links[0].length;
      setFirstTabIndex(index);
    }
    else{
      let index = secondTabIndex;
      index -= 1;
      if(index === -1){
        index += links[0].length;
      } 
      index = index % links[1].length;
      setSecondTabIndex(index);
    }
  }

  const next = () => {
    if(tab === 0) {
      let index = firstTabIndex;
      index += 1;
      index = index % links[0].length;
      setFirstTabIndex(index);
    }
    else{
      let index = secondTabIndex;
      index += 1;
      index = index % links[1].length;
      setSecondTabIndex(index);
    }
  }

  return (
    <div className="pdf">
      <div className="tab">
        <Button className={classes.button} onClick={() => {setTab(0);setSecondTabIndex(0);}} sx={{borderColor: "black", borderStyle: "solid", borderWidth: "1px", height: "90%", width: "45%", backgroundColor: tab === 1 ? "#ffffff": "#222222", color: tab === 1 ? "#000000": "#ffffff"}} variant="contained">
          MAKALELER
        </Button>
        <Button className={classes.button} onClick={() => {setTab(1);setFirstTabIndex(0);}} sx={{borderColor: "black", borderStyle: "solid", borderWidth: "1px", height: "90%", width: "45%", backgroundColor: tab === 0 ? "#ffffff": "#222222", color: tab === 0 ? "#000000": "#ffffff"}} variant="contained" color="error">
          LİNKLER
        </Button>
      </div>
      <div className="link">
        <Button className={classes.buttonNotTabs} onClick={() => {prev();}} sx={{height: "100%", width: "15%"}} variant="contained">
          {"<"}
        </Button>
        <div className="content">
          <div className="title">
          <Button   
            className={classes.buttonNotTabs}  
            onClick={(e) => {
              e.preventDefault();
              window.open(tab === 0 ? links[0][firstTabIndex].href : links[1][secondTabIndex].href, "_blank")
              }} 
            sx={{height: "100%", width: "100%"}}
            variant="contained"
          >
            {tab === 0 ? links[0][firstTabIndex].title : links[1][secondTabIndex].title}
          </Button>
          </div>
          <div className= "pageNo">
            {(tab === 0 ? (firstTabIndex+1) : (secondTabIndex+1)) + "/" + links[tab].length}
          </div>
        </div>
        <Button className={classes.buttonNotTabs} onClick={() => {next();}} sx={{height: "100%", width: "15%"}} variant="contained">
          {">"}
        </Button>
      </div>
    </div>
  );
}

export default Pdf;