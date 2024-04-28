import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import UseAuth from "../Componenet/AuthComponent/UseAuth";

const MyTourUpload = () => {
  const data=useLoaderData()

  const [currentData,setCurrentData]=useState(data)



  const {
    id,
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
    totalVisitorsPerYear,
  } = data;


  const handleDelete=id=>{
    fetch(`http://localhost:5500/delete/${id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount>0){
        const reaminging=currentData.filter(d=>d._id!==id)
        setCurrentData(reaminging)
      }
      console.log(data);
    })
  }

  return (
    <div>
      {currentData?.map((d, idx) => (
        <div key={idx}>
          <div>
            <img src={d.image} alt="" />
            <h3 className="text-4xl">{d.tourists_spot_name}</h3>
            <div className="my-2 flex gap-5">
              <h4>Country : {d.country_Name}</h4>
              <h4> Location : {d.location}</h4>
            </div>
          </div>
          <Link to={`/update/${d._id}`}><button>Update </button></Link>
          <button onClick={()=>handleDelete(d._id)}>Delete</button>

        </div>
      ))}
    </div>
  );
};

export default MyTourUpload;
