import React from 'react';
import './TravelPlaceDetails.css';
import { useParams } from 'react-router-dom';

const TravelPlaceDetails = () => {
    const { placeId } = useParams();
    const data = [
        {id: "01", name: 'Coxbazar', place: "coxbazar", description: "world best beach"},
        {id: "02", name: 'Sundorbon', place: "sundorbon", description: "world best nature"},
        {id: "03", name: 'Srimongol',place: "srimongol", description: "world best water"}
     
     ]
     const placeDetail = data.find(dt => dt.id == placeId);
    console.log(placeDetail)
    return (
        <div className = 'travel-places' >
            <div className='place-details m-4'>
                <h1>{placeDetail.name}</h1>
                <p>{placeDetail.description}</p>
            </div>
            <div className='booking'>
                Booking
            </div>
        </div>
    );
};

export default TravelPlaceDetails;