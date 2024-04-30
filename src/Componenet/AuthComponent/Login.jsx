import React, { useState } from 'react';

import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import UseAuth from './UseAuth';
import SocialLogin from './SocialLogin';
import Swal from 'sweetalert2';

const Login = () => {
  const {login}=UseAuth()
  const [showError,setShowError]=useState(" ")
  const clearField=()=>{
    setShowError("")
  }
  
  const location=useLocation()
  const navigate=useNavigate()


    const handleToLogin=e=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;

        login(email,password)
        .then(result=>{
          if(result.user){
            console.log(result.user);
            console.log(navigate);
            return navigate(location?.state||'/')
          }
        })
        .catch(error=>{
          console.log(error);
          if(error){
            return setShowError("Email or password not match ")
          }
        })


     

    }

    return (
        <div>
            <div className='w-full '>

            <div className="card shrink-0 w-full border border-[#1C1678] my-10 customShadow-2  lg:w-1/3 mx-auto mt-24  lg:mt-16 shadow-none lg:shadow-2xl bg-base-100">
      <form onSubmit={handleToLogin} className="card-body  mx-auto flex justify-center items-center ">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required onKeyUp={clearField} />

          {
            showError && <> <p className='text-sm text-red-600'>{showError}</p> </>||''
          }



          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>


        <div className="form-control ">


        <button type="submit" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
        </div>
      </form>
          <div className='text-center'>
            <h1> Don't have an account ?Please <Link to='/singing' >SingIn</Link> </h1>
    </div>

          <div className='mx-auto mt-4'  >
            <SocialLogin/>
          </div>
           </div>
            </div>
             
    
</div>
            


      
    );
};

export default Login;