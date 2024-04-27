import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const MyTourUpload = () => {
  const data = useLoaderData();
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

  return (
    <div>
      {data.map((d, idx) => (
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
        </div>
      ))}
    </div>
  );
};

export default MyTourUpload;
