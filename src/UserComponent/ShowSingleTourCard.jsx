import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import altUser from '../../public/img/userr.jpg'

const ShowSingleTourCard = () => {
    const result=useLoaderData()
    const{id,
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
       totalVisitorsPerYear}=result





    console.log(result);
    return (
        <div className='text-[#000223] '>
            <img className='w-full lg:h-screen' src={image} alt="" />
            <div className='mx-2'>
            <h3 className='text-4xl my-2 font-medium'>{tourists_spot_name}</h3>
            <div className='mt-2 flex gap-5'>
                <h4>Country : {country_Name}</h4> <h4> Location : {location}</h4> 
            </div>

            <h4>Cost : {cost}</h4>
            <h4>Season : {seasonality}</h4>
            <h4>Travel Time : { travel_time}</h4>
            <h4>Travel Time : { totalVisitorsPerYear}</h4>
            <h4>Publisher : { totalVisitorsPerYear}</h4>
            <div className='w-full '>
                <h1 className='mt-5 underline   text-xl font-regular'>Published By</h1>
                <div className='flex items-center gap-2 mt-2'>
                   {
                       userImage?<img className='w-12' src={userImage} alt="" />:
                        <img className='w-12' src={altUser} alt="" />
                    
                   } 
                   <div>
                   {
                    userName?<h1 className='font-medium'>{userName}</h1>: <h1 className='font-medium'>Unknown User</h1>
                   }
                   {
                    userEmail?<h1>{userEmail}</h1>:''
                   }
                   </div>
                </div>
                <h5 className='mt-2 whitespace-pre-line font-light'>{description}</h5>
                
</div>

            </div>
            
        </div>
    );
};

export default ShowSingleTourCard;