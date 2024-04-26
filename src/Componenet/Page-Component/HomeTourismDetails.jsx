import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const HomeTourismDetails = () => {
    const data=useLoaderData()
    const {
        _id,
        image,
        tourists_spot_name,
        country_Name,
        location,
        short_description,
        average_cost,
        seasonality,
        travel_time,
        cost,
        totalVisitorsPerYear,
      } = data;

    // const[data,setData]=useState()

    // const {id}=useParams()

    // useEffect(()=>{
    //     fetch(`http://localhost:5500/tourism/${id}`)
    //     .then(res=>res.json())
    //     .then(data=>setData(data))
    // },[id])



    console.log(data);
    return (
        <div className='py-2 w-full '>
            
            <div className="relative mx-auto flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full  md:flex-row">
  <div
    className="relative w-full md:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
    <img
      src={image}
      alt="card-image" className="object-cover w-full h-full" />
  </div>

        
  <div className="p-6">
    <h6
      className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
     {tourists_spot_name}
    </h6>

    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
     {   short_description}
    </h4>

    <div className="flex flex-col">
  <div className="flex items-center mb-2">
    <h4 className="flex-none w-32 mr-2">Country :</h4>
    <span className="font-bold">{country_Name}</span>
  </div>
  <div className="flex items-center mb-2">
    <h4 className="flex-none w-32 mr-2">Location :</h4>
    <span className="font-bold">{location}</span>
  </div>
  <div className="flex items-center mb-2">
    <h4 className="flex-none w-32 mr-2">Seasonality :</h4>
    <span className="font-bold">{seasonality}</span>
  </div>
  <div className="flex items-center mb-2">
    <h4 className="flex-none w-32 mr-2">Travel Time :</h4>
    <span className="font-bold">{travel_time}</span>
  </div>
  <div className="flex items-center mb-2">
    <h4 className="flex-none w-32 mr-2">Cost Type :</h4>
    <span className="font-bold">{average_cost}</span>
  </div>
  <div className="flex items-center mb-2">
    <h4 className="flex-none w-32 mr-2">Budget :</h4>
    <span className="font-bold">{cost} / Person</span>
  </div>
  <div className="flex items-center">
    <h4 className="flex-none w-32 mr-2">Yearly Visitor :</h4>
    <span className="font-bold">{totalVisitorsPerYear}</span>
  </div>
</div>


    </div>
  
</div>  


        </div>
    );
};

export default HomeTourismDetails;