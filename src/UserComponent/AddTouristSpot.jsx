import React, { useState } from "react";
import UseAuth from "../Componenet/AuthComponent/UseAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddTouristSpot = () => {
  const { userName, userImage, userEmail ,loading} = UseAuth();
  const navigate=useNavigate()

  const handleToSubmitData = (e) => {
    if(loading){
      return <div className="w-full  mx-auto text-center"><span className="loading loading-spinner text-center loading-lg"></span>
    </div>
    }
   e.preventDefault();
    const form = e.target;
    const image = form.img.value;
    const tourists_spot_name = form.tourists_spot_name.value;
    const country_Name = form.country_Name.value;
    const location = form.location.value;
    const description = form.short_description.value;
    const cost = form.averageCost.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;

    const submitData = {
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
    };
    console.log(submitData);

    Swal.fire({
      title: "Are you want to add?",
      background:"#1C1678",
      color:"#FCF6F5",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00A36C",
      cancelButtonColor:"E41717",
      confirmButtonText: "Please,confirm to Add"
    }).then((result) => {
      if (result.isConfirmed) {
    fetch("https://wander-asia-adventures-server.vercel.app/uploadData", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(submitData),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
          Swal.fire({
            background:"#1C1678",
            color:"#FCF6F5",
            title: "Done!",
            text: "Your data has been added .",
            confirmButtonColor:"green",
            confirmButtonText:"Post Done",
            iconColor:"wheat",
            icon: "success"
          });      navigate(-1)  }
        console.log(data);
      });



        
      }
    });
      
  };

  return (
    <div>
      <div className="mb-5 ">
        <h1 className="text-3xl text-center my-8 font-semibold">
          Please Add Tourist Spot where you visited
        </h1>

        <div className="mx-2 ">
          <div className=" mx-auto   border-2 font-medium rounded-xl border-black w-full lg:w-1/2">
            <form className="card-body lg:ml-7" onSubmit={handleToSubmitData}>
              <div className="form-control  lg:mr-[20px]">
                <label className="label hidden lg:block">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  name="img"
                  placeholder="image url"
                  className="input lg:mr-6 input-bordered"
                  // required
                />
              </div>

              <div className="flex flex-col md:flex-row gap-5">
                <div className="form-control">
                  <label className="label hidden lg:block">
                    <span className="label-text">Tourists spot name</span>
                  </label>
                  <input
                    type="text"
                    name="tourists_spot_name"
                    placeholder="tourists spot name"
                    className="input input-bordered"
                     required
                  />
                </div>

                <div className="form-control">
                  <label className="label hidden lg:block">
                    <span className="label-text">Visited Country Name</span>
                  </label>
                  <input
                    type="text"
                    name="country_Name"
                    placeholder="Visited Country Name"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-5 w-full">
                <div className="form-control">
                  <label className="label hidden lg:block">
                    <span className="label-text">Location</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label hidden lg:block">
                    <span className="label-text"> short description</span>
                  </label>
                  <input
                    type="text"
                    name="short_description"
                    placeholder="Short Description"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-5 w-full">
                <div className="form-control">
                  <label className="label hidden lg:block">
                    <span className="label-text"> Average Cost</span>
                  </label>
                  <input
                    type="text"
                    name="averageCost"
                    placeholder="Average Cost"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label hidden lg:block">
                    <span className="label-text"> seasonality</span>
                  </label>
                  <input
                    type="text"
                    name="seasonality"
                    placeholder="seasonality"
                    className="input input-bordered"
                     required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row lg:gap-5 w-full">
                <div className="form-control">
                  <label className="label hidden lg:block">
                    <span className="label-text"> Travel Time</span>
                  </label>
                  <input
                    type="text"
                    name="travel_time"
                    placeholder="Travel Time"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label hidden lg:block">
                    <span className="label-text"> Visitor </span>
                  </label>
                  <input
                    type="text"
                    name="totalVisitorsPerYear"
                    placeholder="Total Visitor Per Year"
                    className="input input-bordered mt-3 lg:mt-0"
                     required
                  />
                </div>
              </div>

              <div className="form-control lg:mr-12 mt-6">
                <button className="btn btn-primary bg-[#1C1678]">Click to Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTouristSpot;
