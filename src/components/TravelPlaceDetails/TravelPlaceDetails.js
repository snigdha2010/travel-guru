import React from 'react';
import './TravelPlaceDetails.css';
import { useParams } from 'react-router-dom';
import TravelForm from '../TravelForm/TravelForm';
import Header from '../Header/Header';
const TravelPlaceDetails = () => {
    const { placeId } = useParams();
    const data = [
        {id: "01", name: 'Coxbazar', place: "coxbazar", description: "world best beachLorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium commodi ipsam tempora perspiciatis ad natus est eos provident aliquam quas, excepturi dolorem fuga totam officiis labore! Nobis rem eius recusandae."},
        {id: "02", name: 'Sundorbon', place: "sundorbon", description: "world best nature Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium commodi ipsam tempora perspiciatis ad natus est eos provident aliquam quas, excepturi dolorem fuga totam officiis labore! Nobis rem eius recusandae."},
        {id: "03", name: 'Srimongol',place: "srimongol", description: "world best water Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium commodi ipsam tempora perspiciatis ad natus est eos provident aliquam quas, excepturi dolorem fuga totam officiis labore! Nobis rem eius recusandae."}
     
     ]
     const placeDetail = data.find(dt => dt.id == placeId);
     const cssstyle = {
        backgroundImage: `url(${"https://i.ibb.co/dK9nTWQ/Rectangle-1.png"})` ,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'  
    }        
    return (
        <>
        <div  style = {cssstyle}>
        <Header/>
        <div className = 'section-devider' >
            <div className='left-section m-4 text-white'>
                <h1>{placeDetail.name}</h1>
                <p>{placeDetail.description}</p>
            </div>
            <div className='booking bg-white' >
                    <TravelForm></TravelForm>
            </div>
        </div>
        </div>
        </>
    );
};

export default TravelPlaceDetails;