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
        <div className='m-2 h-[40em]  '>


            <div className='bg-[#FAF9F6] p-2  w-full mb-5 '>
                <div className='flex items-center gap-2 py-2'>

                    {
                      userImage?<img src={userImage} className='w-9  rounded-full' alt="" /> : <img className='w-9 rounded-fil' src={altUser} alt="" />
                    }
                    {
                        userName?<h1 className='text-[#000223] font-medium '>{userName}</h1> : <h1 className='text-[#000223] font-medium'>Unknown User</h1>

                    }
                </div>
                <div className='my-1'>

                    {
                        image?
                        <img className='w-full rounded-sm h-64' src={image} alt="" />:
                        <img src={altUser} alt="" />
                    }
                </div>
                <div>
                    <h3 className='text-3xl font-regular'>{tourists_spot_name}</h3>
                    <div className='flex gap-10 h-7 my-1'>
                        <p className='text-[#000223] lg:text-md font-medium'>Country : {country_Name}</p>
                         <p className='text-[#000223] lg:text-md font-medium'>Location : {location}</p>
                    </div>
                    <div  className='mt-2 text-[#000223]  pb-4'>
                        <p>{description.slice(0,199)} <span><Link to={`/tourSingleDetails/${_id}`}><span className='text-blue-500'>See more</span></Link></span> </p>
                        
                    </div>
                </div>

            </div>
            



        </div>
    );
};

export default ShowAllTour;