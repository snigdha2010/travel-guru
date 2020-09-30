import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '800px'
};
const center = {
    lat: -3.745,
    lng: -38.523
};  
const MapField = () => {
    return (
        <LoadScript
      googleMapsApiKey="AIzaSyDyQ6oLs0mmZQ7ZLtcI6SwGUvxkjwAGWCw"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
    );
};

export default MapField;
