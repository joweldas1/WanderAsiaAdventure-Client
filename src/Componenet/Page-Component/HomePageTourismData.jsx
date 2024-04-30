import React from "react";
import { Link } from "react-router-dom";

const HomePageTourismData = ({ tours }) => {
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
  } = tours;





  return (
    <div className="w-full  mx-auto p-3">





<div className="relative">
  <div className="card bg-base-100 shadow-xl imgHover">
    <figure className="relative" >
      <img src={image} alt="" className="w-full customShadow relative  md:h-[350px] delay-300 rounded-md hover:scale-105 transition-transform duration-500 ease-in-out inset-0 " />



      <div id="hoverId" className=" p-4 w-full text-opacity-100 text-center lg:text-left px-8 bottom-[-1000px]  opacity-90   homeCard">
        <h3 className= "text-xl  md:text-2xl lg:text-4xl font-medium lg:font-bold text-[#FCF6F5]">{country_Name}</h3>
        <h3 className=" text-sm lg:text-2xl font-medium py-1 text-white">{tourists_spot_name}</h3>
        <p className="text-sm  lg:text-lg text-white font-regular">{short_description}</p>
       <div className="flex justify-center md:justify-start gap-5">
       <Link to={`tourism/${_id}`}> <button className="  mt-2 px-2 lg:px-4 py-1  md:py-2 text-sm md:text-lg  text-white rounded-md 
        bg-[#1C1678] transition-colors duration-300">View Details</button></Link>
        <button className="mt-2 px-2 lg:px-4 py-1  md:py-2 text-sm md:text-lg text-white rounded-md 
        bg-[#D1B200] transition-colors duration-300">{cost}/-</button>
       </div>
      </div>
    </figure>
  </div>
</div>

    
    </div>
  );
};

export default HomePageTourismData;


// <a
// className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition"
// href="#"
// >
// <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
//   <img
//     className=" w-full h-[350px] absolute top-0 start-0  group-hover:scale-105 
//          "
//     src={image}
//     alt="Image Description"
//   />
//   <h1>hello</h1>
// </div>

// </a>
