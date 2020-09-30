import React from 'react';
import './Hotel.css';
import img from '../../resources/Icon/star_1_.png'

const Hotel = (props) => {
    const {title,description,price,imgUrl,rating,ratinQuantity} = props.hotel
    return (
        <div className='rooms'>
            <div>
                <img className='img-fluid' src={imgUrl} alt=""/>
            </div>
            <div className='ml-4'>
                <h3>{title}</h3>
                <p>{description}</p>
                <p></p>
                <p><span><img  src={img} alt=""/>{rating}{`(${ratinQuantity})`}</span>  ${price}</p>
            </div>
        </div>
    );
};

export default Hotel;