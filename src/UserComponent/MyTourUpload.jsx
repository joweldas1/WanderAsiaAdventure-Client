import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link, useLoaderData } from "react-router-dom";
import UseAuth from "../Componenet/AuthComponent/UseAuth";
import { Typewriter } from 'react-simple-typewriter'


const MyTourUpload = () => {
  const data = useLoaderData();
  const {loading}=UseAuth()
  

  const [currentData, setCurrentData] = useState(data);
  console.log(currentData);

 
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://wander-asia-adventures-server.vercel.app/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = currentData.filter((d) => d._id !== id);
              console.log(remaining);
              setCurrentData(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
      console.log(data);
    });
  };

  return (
<div>
{currentData.length>0?
    <div className=" ">
      {currentData?.map((d, idx) => (
        <div key={idx} className="py-2 w-full ">
          <div className="relative mx-auto flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full  md:flex-row">
            <div className="relative w-full md:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
              <img
                src={d.image}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="p-6">
              <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                {d.tourists_spot_name}
              </h6>

              <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {d.short_description}
              </h4>

              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <h4 className="flex-none w-32 mr-2">Country :</h4>
                  <span className="font-bold">{d.country_Name}</span>
                </div>
                <div className="flex items-center mb-2">
                  <h4 className="flex-none w-32 mr-2">Location :</h4>
                  <span className="font-bold">{d.location}</span>
                </div>
                <div className="flex items-center mb-2">
                  <h4 className="flex-none w-32 mr-2">Seasonality :</h4>
                  <span className="font-bold">{d.seasonality}</span>
                </div>
                <div className="flex items-center mb-2">
                  <h4 className="flex-none w-32 mr-2">Travel Time :</h4>
                  <span className="font-bold">{d.travel_time}</span>
                </div>

                <div className="flex items-center mb-2">
                  <h4 className="flex-none w-32 mr-2">Budget :</h4>
                  <span className="font-bold">{d.cost} / Person</span>
                </div>
                <div className="flex items-center">
                  <h4 className="flex-none w-32 mr-2">Yearly Visitor :</h4>
                  <span className="font-bold">{d.totalVisitorsPerYear}</span>
                </div>
              </div>
              <div className="space-x-16 mt-5">
                <Link to={`/update/${d._id}`}>
                  <button className="button-35  font-poppins" role="button">
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(d._id)}
                  className="button-36 font-poppins"
                  role="button"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div> : <div className="w-full h-[80vh] bg-black text-white flex justify-center items-center">
       <h1>{" "}</h1>
       <Typewriter
            words={["No data uploaded now,  ", "Please upload some data", "where you visited"]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
         
          />
     </div> }
</div>
  );
};

export default MyTourUpload;
