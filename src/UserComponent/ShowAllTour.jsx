import React from 'react';
import { Link } from 'react-router-dom';
import altUser from '../../public/img/userr.jpg'

const ShowAllTour = ({details}) => {
    const {
        _id,
         userName,
        userEmail,
        userImage,
        image,
        tourists_spot_name,
        country_Name,
        location,
        description,
        cost,
        seasonality,
        travel_time,
        totalVisitorsPerYear}=details














    return (
        <div className='border-2 border-red-700 '>


            <div className='bg-red-200 shadow-2xl w-full mb-5 '>
                <div className='flex items-center gap-2 py-2'>

                 <img src={userImage} className='w-9  rounded-full' alt="" />
                    <h1>{userName}</h1>
                </div>
                <div className='my-2'>

                    {
                        image?
                        <img src={image} alt="" />:
                        <img src={altUser} alt="" />
                    }
                </div>
                <div>
                    <h3 className='text-3xl font-regular'>{tourists_spot_name}</h3>
                    <div className='flex gap-10 my-2'>
                        <p>Country : {country_Name}</p> <p>Location : {location}</p>
                    </div>
                    <div className='pb-4'>
                        <p>{description.slice(0,199)} </p>
                        <Link to={`/tourSingleDetails/${_id}`}><span className='text-blue-500'>See more</span></Link>
                    </div>
                </div>

            </div>
            



        </div>
    );
};

export default ShowAllTour;