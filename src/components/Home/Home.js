import React, { useState } from 'react';
import './Home.css';
import coxbazar from '../../resources/Image/Rectangle 1.png';
import sundorbon from '../../resources/Image/sundorbon.png';
import srimongol from '../../resources/Image/Sreemongol.png'
import TravelPlace from '../TravelPlace/TravelPlace';

const Home = () => {
    const [ place , setPlace ] = useState('coxbazar');
    const data = [
       {id: "01", name: 'Coxbazar', place: "coxbazar", description: "world best beach Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium commodi ipsam tempora perspiciatis ad natus est eos provident aliquam quas, excepturi dolorem fuga totam officiis labore! Nobis rem eius recusandae. "},
       {id: "02", name: 'Sundorbon', place: "sundorbon", description: "world best nature Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium commodi ipsam tempora perspiciatis ad natus est eos provident aliquam quas, excepturi dolorem fuga totam officiis labore! Nobis rem eius recusandae."},
       {id: "03", name: 'Srimongol',place: "srimongol", description: "world best water Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium commodi ipsam tempora perspiciatis ad natus est eos provident aliquam quas, excepturi dolorem fuga totam officiis labore! Nobis rem eius recusandae."}
    
    ]
    const currentPlace = data.find(dt=>dt.place == place);
    return (
        <div className = 'section-devider text-white' >
            <div className = 'left-section'>
             <TravelPlace place = {currentPlace}></TravelPlace>
            </div>
            <div className = 'travel-options'>
            <img onClick={()=>setPlace('coxbazar')} src={coxbazar} alt=""/>
            <img onClick={()=>setPlace('sundorbon')} src={sundorbon} alt=""/>
            <img onClick={()=>setPlace('srimongol')} src={srimongol} alt=""/>
            </div>
        </div>
    );
};


export default Home;