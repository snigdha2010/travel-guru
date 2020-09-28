import React from 'react';
import { Link } from 'react-router-dom';

const TravelPlace = (props) => {
    const{id,name,description} = props.place;
    console.log(name)
    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <Link to = {`/travel/place/${id}`}>
            <button>Booking</button>
            </Link>
        </div>
    );
};

export default TravelPlace;