import React from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';


const WithBackGround = () => {
 const cssstyle = {
    backgroundImage: `url(${"https://i.ibb.co/dK9nTWQ/Rectangle-1.png"})` ,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', 
    backgroundColor:'white'
} 
  return (
        <div style={cssstyle}>
            <Header/>
            <Home/>
           </div>
    );
};

export default WithBackGround;