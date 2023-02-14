// import React, { useState } from "react"
// import { Map, Marker } from "pigeon-maps"
import * as React from 'react';
import Map, {Marker, Popup, NavigationControl} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import ufoMap from "../Images/ufo.png";

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZmFpbHVyZTJmbHkiLCJhIjoiY2xkaDRveXV2MTFydzNvbzNvb3FubTZhNCJ9.mstb1cKBQiZ2n3QZQCVVtA'; // Set your mapbox token here

function MyMap() {

  // const [hue, setHue] = useState(0)
  // const color = `hsl(${hue % 360}deg 39% 70%)`
  const [showPopup, setShowPopup] = React.useState(false);

  return (
    <>
      <Map
        initialViewState={{
          latitude: 33.4510703,
          longitude: -111.9851531,
          zoom: 10
        }}
        mapStyle="mapbox://styles/failure2fly/cldh50eb9000q01ob1j03tr41"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker 
          latitude={33.3710587} 
          longitude={-112.0191559} 
          color="red"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setShowPopup(true);
          }}  
        >
          <img src={ufoMap} height={40} width={40} alt="ufo icon"/>
        </Marker>
        <Marker 
          latitude={33.4590336} 
          longitude={-112.0023462} 
          color="yellow"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setShowPopup(true);
          }} 
        >
          <img src={ufoMap} height={40} width={40}  alt="ufo icon" /> 
        </Marker>

        {showPopup && (
          <>
          <Popup latitude={33.4590336} longitude={-112.0023462}
            anchor="bottom"
            onClose={() => setShowPopup(false)}>
            You are here
          </Popup>
          <Popup latitude={33.3710587} longitude={-112.0191559}
            anchor="bottom"
            onClose={() => setShowPopup(false)}>
            You are here also
          </Popup>
          </>
        )}
        {/* {showPopup && (
          <Popup latitude={33.3710587} longitude={-112.0191559}
            anchor="bottom"
            onClose={() => setShowPopup(false)}>
            You are here
          </Popup>
        )} */}
        <NavigationControl/>
      </Map>
      <a href="https://www.flaticon.com/free-icons/ufo" title="ufo icons">Ufo icons created by Freepik - Flaticon</a>
    </>
  );
}
 
export default MyMap;

// export default GoogleApiWrapper({
//   apiKey: ('AIzaSyC6GIJckBr_yMGzEJCnEK3jHovFITMygw4')
// })(MapContainer)

// #f7c96e








