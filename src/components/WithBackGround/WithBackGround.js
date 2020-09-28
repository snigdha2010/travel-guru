import React from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import bgimage from '../../resources/Image/Rectangle 1.png';


const WithBackGround = () => {
 const cssstyle = {
    // backgroundImgage:`url(${bgimage})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center',
    // backgroundSize: 'cover',
    // height: '800px'
    //backgroundColor:'red',
    backgroundImage: `url(${require("../../resources/Image/Rectangle 1.png")})` ,
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