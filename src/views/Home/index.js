import React from "react";
import ReactMapGL from "react-map-gl";
import { GeolocateControl } from "react-map-gl";

export default function Home(props) {
  const geolocateStyle = {
    top: 0,
    left: 0,
    margin: 10,
  };
  const positionOptions = { enableHighAccuracy: true };

  let [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
    width: window.innerWidth,
    height: window.innerHeight,
  });
  return (
    <div id="map">
      {/* Rendering map component using mapbox library for react react-map-gl */}
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={
          "pk.eyJ1Ijoic2FoaWxndWphciIsImEiOiJja3I5YzhydGwzOXAxMnBzNmRiZ3RnejlmIn0.Lj50j-TnJi7JyGGGoDAKEA"
        }
        {...viewport}
        onViewportChange={(newView) => setViewport(newView)}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={positionOptions}
          // tracking user location
          trackUserLocation
          auto
        />
      </ReactMapGL>
    </div>
  );
}
