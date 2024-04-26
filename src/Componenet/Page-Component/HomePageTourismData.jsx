import React from "react";

const HomePageTourismData = ({ tours }) => {
  console.log(tours);
  const {
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
  <div className="card bg-base-100 shadow-xl">
    <figure className="relative">
      <img src={image} alt="" className="w-full h-[350px] hover:scale-105 transition-transform duration-500 ease-in-out" />
      <div className="absolute text-center inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-4xl font-bold text-white">{tourists_spot_name}</h3>
        <h3 className="text-2xl font-medium my-2 text-white">{country_Name}</h3>
        <p className="text-lg text-white">{short_description}</p>
        <button className="mt-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-300">View Details</button>
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
