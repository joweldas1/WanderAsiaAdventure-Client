import React from 'react';
import Swal from 'sweetalert2'
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';

const UpdateUploadData = () => {
  const navigate=useNavigate()
    const userData=useLoaderData()
    const handleToSubmitData = (e) => {
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
            showDenyButton: true,
            background:"#1C1678",
            title: "Are you sure want to update",
            text: "Click cancel to cancel update",
            confirmButtonColor: "#00A36C",
            cancelButtonColor:"E41717",
            color:"wheat",
            iconColor:"wheat",
            icon: "asked"
          }).then((result)=>{
            if(result.isConfirmed){
              fetch(`https://wander-asia-adventures-server.vercel.app/update/${userData._id}`,{
                method:"PUT",
                headers:{'content-type':'application/json'},
                body:JSON.stringify(submitData)
              })
              .then(res=>res.json())
              .then((data)=>{
                if(data.modifiedCount>0){
                  console.log(data);
                  const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = Swal.stopTimer;
                      toast.onmouseleave = Swal.resumeTimer;
                    }
                  });
                  Toast.fire({
                    icon: "success",
                    title: "Update in successfully",
                    background:'#1C1678',
                    color:"#FCF6F5",
                    iconColor:"#FCF6F4"
                  })
                  console.log(navigate);
                }                   navigate(-1)

              })

            }
            else if(result.isDenied){
              Swal.fire('Update cancel')
            }
          });

         
          
         


    }



    console.log(userData);
    return (
        <div>
            <h1>Dear {userData.userName} , Update your data </h1>

            <div>
            <div className="mb-5">

        <div className="mx-2">
          <div className=" mx-auto   border-2 font-medium border-black w-full lg:w-1/2">
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
                  defaultValue={userData.image}
                  
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
                    defaultValue={userData.tourists_spot_name}
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
                    defaultValue={userData.country_Name}
                    
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
                    defaultValue={userData.location}
                    
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
                    defaultValue={userData.short_description}
                    
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-5 w-full">
                <div className="form-control">
                  <label className="label hidden lg:block">
                    <span className="label-text"> Average Cost</span>
                  </label>
                  <input
                    type="number"
                    name="averageCost"
                    placeholder="Average Cost"
                    className="input input-bordered"
                    defaultValue={userData.averageCost}
                    
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
                    defaultValue={userData.seasonality}
                    
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
                    defaultValue={userData.travel_time}
                    
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
                    defaultValue={userData.totalVisitorsPerYear}
                    
                  />
                </div>
              </div>

              <div className="form-control lg:mr-12 mt-6">
              <button className="button-35 font-poppins hover:border-2 border border-red-300" role="button">Update</button>

              </div>
            </form>
          </div>
        </div>
      </div>
            </div>
            
        </div>
    );
};

export default UpdateUploadData;