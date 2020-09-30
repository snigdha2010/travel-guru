import React from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import bgimage from '../../resources/Image/Rectangle 1.png';
import TravelPlaceDetails from '../TravelPlaceDetails/TravelPlaceDetails';
import TravelPlace from '../TravelPlace/TravelPlace';


const WithBackGround = () => {
 const cssstyle = {
    backgroundImage: `url(${"https://i.ibb.co/dK9nTWQ/Rectangle-1.png"})` ,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'  
} 
  return (
        <div style={cssstyle}>
            <Header/>
            <Home/>
           </div>
    );
};

export default WithBackGround;