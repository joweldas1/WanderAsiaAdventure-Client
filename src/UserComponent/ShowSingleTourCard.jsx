import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

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
        <div>
            <img src={image} alt="" />
            <h3 className='text-4xl'>{tourists_spot_name}</h3>
            <div className='my-2 flex gap-5'>
                <h4>Country : {country_Name}</h4> <h4> Location : {location}</h4> 
            </div>
            
        </div>
    );
};

export default ShowSingleTourCard;