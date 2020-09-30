import React from 'react';
import './SearchHotel.css';
import Hotel from '../Hotel/Hotel';
import img1 from '../../resources/Image/Rectangle 26.png';
import img2 from '../../resources/Image/Rectangle 27.png';
import img3 from '../../resources/Image/Rectangle 28.png';
import Header from '../Header/Header';

const SearchHotel = () => {
    const hotels =[
        {
            title: 'Light bright airey apt & safe peaceful stay',
            description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.',
            imgUrl: `${img1}` ,
            bed: 2,
            guest:4,
            bath: 2,
            bedroom:3,
            bedType: 'Single',
            demo:'Wifi Air Condition kitchen',
            rating: 4.8,
            ratinQuantity:20,
            price: 119
        },
        {
            title: 'Apartment in Lost Panorama',
            description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.',
            imgUrl: `${img2}`,
            bed: 2,
            guest:4,
            bath: 2,
            bedroom:3,
            bedType: 'Single',
            demo:'Wifi Air Condition kitchen',
            rating:4.8,
            ratinQuantity:10,
            price: 200
        }, 
        {
        title: 'AR Lounge & Pool(r&r + b&b)',
        description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.',
        imgUrl:`${img3}`,
        bed: 2,
        guest:4,
        bath: 2,
        bedroom:3,
        bedType: 'Single',
        demo:'Wifi Air Condition kitchen',
        rating: 4.9,
        ratinQuantity:25,
        price: 109
    }
    ]
    return (
        <>
        <Header/>
        <div className = 'section-devider'> 
            <div className = 'left-section'>
                <h1 className='mb-4'>Stay in Cox's Bazar</h1>
                {
                 hotels.map(ht=><Hotel hotel = {ht}></Hotel>)
                 }
            </div>
            <div>
                 <h1>Map Goes</h1>
            </div>
        </div>
        </>
    );
};

export default SearchHotel;