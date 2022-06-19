import React, {useEffect} from "react";
import './ContactMobile.css';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import useWindowSize from "../useWindowSize";

import MapIcon from '@mui/icons-material/Map';
import PersonIcon from '@mui/icons-material/Person';
import { Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Dimensions } from "react-native-web";
import { makeStyles } from "@mui/styles";

const Users = ({ 
  google, 
  locations = [{
    lat: 39.90951578151801,
    lng: 32.85853954488611
}] }) => {
  const windowSize = useWindowSize();

  useEffect(() => {
    document.title = "BALAY | DİRİM"
 }, []);

 const useStyles = makeStyles(
  {
    link: {
      '&.MuiLink-root': {
        color: "#ffffff",
      }
    },
  }
);

 const windowHeight = Dimensions.get('window').height;
 const classes = useStyles();

  return (
    <div className="RootM" style={{height: windowHeight * 0.85}}>
      <div className="LeftM">
        <div className="TextM">
          <div className="IconAndTextM">
            <div className="IconM">
              <MapIcon style={{ height: "5vh", width: "5vh"}}></MapIcon>
            </div>
            <Box style={{ height: "100%", display: "flex", fontFamily: 'Kalam', justifyContent: "center", flexDirection: "column"}}>
                <Grid xs={12} >
                  <Typography style={{fontSize: "2vh", textAlign:"center", fontFamily: 'Kalam', height: "100%", display: "grid", alignItems: "center"}}>Kavaklıdere Mahallesi Bestekar Caddesi Sadibey Apartmanı No: 40/2 Çankaya/Ankara</Typography>
                </Grid>
              </Box>
          </div>
          <div className="IconAndTextM">
            <div className="IconM">
              <PersonIcon style={{ height: "5vh", width: "5vh"}}></PersonIcon>
              </div>
              <Box style={{ height: "100%", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <Grid xs={12} >
                  <Typography style={{textDecoration: "underline", fontSize: "3vh", fontFamily: 'Kalam', textAlign:"center",  height: "100%", display: "grid", alignItems: "center"}}>{"Av. Ömer Alperen Balay"}</Typography>
                </Grid>
                <Grid xs={12}>
                  <Typography style={{fontSize: "2vh", textAlign:"center", fontFamily: 'Kalam',  height: "100%", display:"grid", alignItems: "center"}}>
                      <Link style={{fontSize: "2vh"}} className={classes.link} href="tel:+905320134329" underline="none">
                        {"+90 532 013 43 29"}
                      </Link>
                    </Typography>
                </Grid>
                <Grid xs={12}>
                  <Typography style={{fontSize: "2vh", textAlign:"center", fontFamily: 'Kalam', height: "100%", display:"grid", alignItems: "center" }}> 
                    <Link style={{fontSize: "2vh"}} className={classes.link} href="mailto:omer.alperen@icloud.com" underline="none">
                      {"omer.alperen@icloud.com"}
                    </Link>
                  </Typography>
                </Grid>
              </Box>
            </div> 
          
          
          <div className="IconAndTextM">
          <div className="IconM">
            <PersonIcon style={{ height: "5vh", width: "5vh"}} ></PersonIcon>
            </div>
            <Box style={{ height: "100%", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <Grid xs={12} >
                  <Typography style={{textDecoration: "underline", fontFamily: 'Kalam', fontSize: "3vh", textAlign:"center", height: "100%", display: "grid", alignItems: "center"}}>{"Av. Bahadır Dirim"}</Typography>
                </Grid>
                <Grid xs={12}>
                    <Typography style={{fontSize: "2vh", textAlign:"center", fontFamily: 'Kalam',  height: "100%", display:"grid", alignItems: "center"}}>
                      <Link style={{fontSize: "2vh"}} className={classes.link} href="tel:+905515990224" underline="none">
                        {"+90 551 599 02 24"}
                      </Link>
                    </Typography>
                </Grid>
                <Grid xs={12}>
                  <Typography style={{fontSize: "2vh", textAlign:"center", fontFamily: 'Kalam',  height: "100%", display:"grid", alignItems: "center"}}>
                    <Link style={{fontSize: "2vh"}} className={classes.link} href="mailto:av.bahadir.dirim@gmail.com" underline="none">
                      {"av.bahadir.dirim@gmail.com"}
                    </Link>
                  </Typography>
                </Grid>
              </Box>
          </div> 
        </div>
      </div>
      <div className="RightM">
        <Map
            google={google}
            containerStyle={{ 
              width: "100%",
              height: windowHeight* 0.85* 0.35,
              position:"relative",
              bottom:0,
            }}
            style={{ 
              width: "100%",
              height: windowHeight* 0.85* 0.35,
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
