import React, {useEffect} from "react";
import './Contact.css';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import useWindowSize from "../useWindowSize";

import InstagramIcon from '@mui/icons-material/Instagram';
import MapIcon from '@mui/icons-material/Map';
import CallIcon from '@mui/icons-material/Call';

const Users = ({ 
  google, 
  locations = [{
    lat: 37.0026,
    lng: 35.3255
}] }) => {

  const windowSize = useWindowSize();

  /*useEffect(() => {
    console.log("windowSize",windowSize);
 }, [windowSize]);*/

  useEffect(() => {
    document.title = "İYS HUKUK - İletişim"
 }, []);

  return (
    <div className="Root">
      <div className="Left">
        <div className="Text">
          <div className="IconAndText">
            <div className="Icon">
              <MapIcon sx={{ fontSize: 80 }}></MapIcon>
            </div>
            <p className="P">
              X Caddesi Y Sokak Z Önü XYZ Apartmanı No:5 Seyhan/Adana
            </p>
          </div>
          <div className="IconAndText">
          <div className="Icon">
            <CallIcon sx={{ fontSize: 80 }}></CallIcon>
            </div>
            <p className="P">
              +90 555 555 55 55
            </p>
          </div>
          
          
          <div className="IconAndText">
          <div className="Icon">
            <InstagramIcon sx={{ fontSize: 80 }} ></InstagramIcon>
            </div>
            <p className="P">
            <a href="https://www.instagram.com/iyshukuk/">İYS HUKUK Instagram Hesabı</a> 
            </p>
          </div> 
        </div>
      </div>
      <div className="Right">
        <Map
            google={google}
            containerStyle={windowSize.innerHeight<=windowSize.innerWidth ? {
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
