import React, {useEffect} from "react";
import './Contact.css';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import useWindowSize from "../useWindowSize";

import EmailIcon from '@mui/icons-material/Email';
import MapIcon from '@mui/icons-material/Map';
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Users = ({ 
  google, 
  locations = [{
    lat: 39.90951578151801,
    lng: 32.85853954488611
}] }) => {
  const windowSize = useWindowSize();
  /*useEffect(() => {
    console.log("windowSize",windowSize);
 }, [windowSize]);*/

  useEffect(() => {
    document.title = "BALAY | DİRİM"
 }, []);

  return (
    <div className="Root">
      <div className="Left">
        <div className="Text">
          <div className="IconAndText">
            <div className="Icon">
              <MapIcon style={{ height: "10vh", width: "10vh"}}></MapIcon>
            </div>
            <Box style={{ height: "100%", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <Grid xs={12} >
                  <Typography style={{fontSize: "2.5vh", textAlign:"center", height: "100%", display: "grid", alignItems: "center"}}>Kavaklıdere Mahallesi Bestekar Caddesi Sadibey Apartmanı No: 40/2 Çankaya/Ankara</Typography>
                </Grid>
              </Box>
          </div>
          <div className="IconAndText">
            <div className="Icon">
              <PersonIcon style={{ height: "10vh", width: "10vh"}}></PersonIcon>
              </div>
              <Box style={{ height: "100%", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <Grid xs={12} >
                  <Typography style={{textDecoration: "underline", fontSize: "3vh", textAlign:"center",  height: "100%", display: "grid", alignItems: "center"}}>{"Av. Ömer Alperen Balay"}</Typography>
                </Grid>
                <Grid xs={12}>
                  <Typography style={{fontSize: "2.5vh", textAlign:"center",  height: "100%", display:"grid", alignItems: "center"}}>{"+90 532 013 43 29"}</Typography>
                </Grid>
                <Grid xs={12}>
                  <Typography style={{fontSize: "2.5vh", textAlign:"center", height: "100%", display:"grid", alignItems: "center" }}> {"omer.alperen@icloud.com"}</Typography>
                </Grid>
              </Box>
             {/*  <h3 className="P2">
                {"Av. Ömer Alperen Balay"}
              </h3>
              <h3 className="P3">
                {"+90 532 013 43 29"}
              </h3>
              <h3 className="P2">
                {"Av. Bahadır Dirim"}
              </h3>
              <h3 className="P3">
                {"+90 551 599 02 24"}
              </h3>*/}
            </div> 
          
          
          <div className="IconAndText">
          <div className="Icon">
            <PersonIcon style={{ height: "10vh", width: "10vh"}} ></PersonIcon>
            </div>
            <Box style={{ height: "100%", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <Grid xs={12} >
                  <Typography style={{textDecoration: "underline", fontSize: "3vh", textAlign:"center", height: "100%", display: "grid", alignItems: "center"}}>{"Av. Bahadır Dirim"}</Typography>
                </Grid>
                <Grid xs={12}>
                  <Typography style={{fontSize: "2.5vh", textAlign:"center",  height: "100%", display:"grid", alignItems: "center"}}> {"+90 551 599 02 24"}</Typography>
                </Grid>
                <Grid xs={12}>
                  <Typography style={{fontSize: "2.5vh", textAlign:"center",  height: "100%", display:"grid", alignItems: "center"}}>{"av.bahadir.dirim@gmail.com"}</Typography>
                </Grid>
              </Box>
            {/* <h3 className="P2">
              {"Av. Ömer Alperen Balay"}
            </h3>
            <h3 className="P2">
              {"omer.alperen@icloud.com"}
            </h3>
            <h3 className="P2">
              {"Av. Bahadır Dirim"}
            </h3>
            <h3 className="P2">
              {"av.bahadir.dirim@gmail.com"}
            </h3> */}
          </div> 
        </div>
      </div>
      <div className="Right">
        <Map
            google={google}
            containerStyle={windowSize.innerHeight<=windowSize.innerWidth ? {
              position: "relative",
              width: "44vw",
              height: "77vh",
              
            } : { 
              width: "100%",
              height: "50vh",
            }}
            style={windowSize.innerHeight<=windowSize.innerWidth ? {
              width: "44vw",
              height: "77vh",
            } : { 
              width: "100%",
              height: "50vh",
            }}
            center={locations[0]}
            initialCenter={locations[0]}
            zoom={locations.length === 1 ? 16 : 15}
            disableDefaultUI={false}
          >
            {locations.map(
                coords => <Marker position={coords} />
            )}
          </Map>
      </div>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDTQQzIe1vK5yriUGlvxbTp7cdkUwZxbNk")
})(Users)
