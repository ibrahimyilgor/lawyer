import React, {useEffect} from "react";
import './Contact.css';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import useWindowSize from "../useWindowSize";

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
      <p className="Text">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada scelerisque placerat. Vivamus at malesuada metus. Cras odio justo, scelerisque a gravida et, aliquam et odio. Sed at purus accumsan, tempus urna ut, ornare elit. Vivamus ullamcorper mauris viverra, rhoncus dui vel, vehicula urna. Nullam pulvinar ligula vel auctor viverra. Nunc laoreet odio ante, vitae congue sem elementum eget. Maecenas malesuada elementum nibh ac ornare. Proin eget porttitor sapien, nec rutrum justo. Nullam aliquet porta mauris eu vehicula. Phasellus sed nulla nec ex vulputate lobortis.

Pellentesque neque purus, posuere sed consectetur in, lacinia vitae est. Nulla commodo eu quam sit amet aliquet. Sed risus sem, tempor id hendrerit quis, iaculis et lorem. Sed eget purus id sapien malesuada viverra. Integer non dapibus nunc. Vivamus at porta quam. Morbi ullamcorper lorem ut ante molestie, et varius tellus bibendum. Nam aliquam placerat mollis. Sed malesuada enim et augue tincidunt, nec euismod diam auctor. Proin id mauris dapibus, porta lacus non, pulvinar nulla. Duis ultrices posuere tempus. Nulla euismod dui eget sollicitudin egestas. Nunc id tristique ligula, sit amet faucibus odio.

Aenean aliquam leo eu sapien egestas finibus. Sed vestibulum turpis et dolor bibendum dapibus. Duis porta sodales nisl quis auctor. Sed fermentum, turpis sed hendrerit venenatis, magna lacus mollis orci, et ultricies massa orci vitae lorem. Morbi non tortor dui. Sed vestibulum facilisis lacus bibendum sodales. Nulla odio turpis, rhoncus ac viverra gravida, rutrum a neque. Maecenas volutpat dapibus nunc, at sodales arcu hendrerit id. Sed in sapien magna.

Nunc convallis interdum purus, ut venenatis sapien. Etiam in venenatis turpis. Sed vitae iaculis turpis, sed lobortis lectus. Maecenas at vehicula ante. In placerat tortor et leo sodales elementum. Fusce leo enim, bibendum vel consectetur eget, sollicitudin sed turpis. Fusce rutrum enim et aliquam cursus. Vestibulum semper sagittis magna eu faucibus. Nullam iaculis condimentum velit, quis interdum neque imperdiet quis. Ut dapibus orci nec tortor semper, eu ultrices ex molestie.

Quisque faucibus eget velit sed rhoncus. Pellentesque vel massa viverra, sollicitudin mauris id, mollis quam. Integer molestie est id risus sollicitudin consequat a id sem. Pellentesque velit nisl, malesuada quis tincidunt sed, fringilla ac metus. Curabitur pulvinar, nisl at pharetra volutpat, nibh eros tincidunt nunc, elementum sodales orci est a nisl. Sed in libero sed nisl aliquam molestie non lobortis nibh. Quisque euismod magna a est commodo, ut tempor urna aliquet. Nullam nec enim facilisis mauris pretium dapibus non quis ipsum. Aliquam iaculis orci ac viverra venenatis. Fusce at ante vitae diam convallis rutrum. Cras elit purus, imperdiet non rhoncus ut, pretium viverra arcu. Nunc elementum, risus a tempus blandit, sapien massa luctus arcu, non commodo lectus magna vitae justo. Pellentesque ullamcorper cursus nibh sed rutrum. </p>
      </div>
      <div className="Right">
        <Map
            google={google}
            containerStyle={windowSize.innerHeight<=windowSize.innerWidth ? {
              width: "44vw",
              height: "83vh"
            } : { 
              width: "100%",
              height: "50vh"}}
            style={windowSize.innerHeight<=windowSize.innerWidth ? {
              width: "44vw",
              height: "83vh"
            } : { 
              width: "100%",
              height: "50vh"}}
            center={locations[0]}
            initialCenter={locations[0]}
            zoom={locations.length === 1 ? 16 : 15}
            disableDefaultUI={true}
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
