import React, { useEffect, useState } from 'react';
import { Link, NavLink, useFormAction } from 'react-router-dom';
import UseAuth from '../AuthComponent/UseAuth';
import Swal from 'sweetalert2';

const Navbar = () => {  
  const [hidden,setHidden]=useState(false)  
  const [showOnHover,setShowOnHover]=useState(false)
  const {logOut,user,loading}=UseAuth()
  const userEmail=user?.email||'login'

  const userName=user?.displayName;
  const img=user?.photoURL

  const handleLogOut=()=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
     
        logOut()
        .then(()=>{
          Swal.fire({
            title: "Logout!",
            text: "Your are Logout.",
            icon: "success"
          });
        })
        .catch((error)=>console.log(error))

      }
      if(result.isDenied){
        ''
      }
    })
       










  
  }

  let timeOut;
  const handleMouseLeave=()=>{
    timeOut=setTimeout(() => {
      setShowOnHover(false)
    }, 2000);
  }
  const handleMouseEnter=()=>{
    clearTimeout(timeOut)
    setShowOnHover(true)
  }

    const [theme,setTheme]=useState(localStorage.getItem('theme')?localStorage.getItem('theme'):'dark')

    const nav= <>
    <NavLink  to='/' >  Home </NavLink>
    <NavLink  to='/uploadedData' > All Tourists Spot </NavLink>
    <NavLink  to='/addTouristSpot' > Add Tourist Spot </NavLink>
    <NavLink  to={`/myData/${userEmail}`} > My List </NavLink>
    </>


    const handleOnView=()=>{
      setHidden(true)
      setTimeout(()=>{
        setHidden(false)
      },2000)
    }

    
    const onChangeColor = e =>{
            const isChecked=e.target.checked
            if(isChecked){
                setTheme('dark')
            }   
            else setTheme('light')
        }

    useEffect(()=>{
        localStorage.setItem('theme',theme);
        const local=localStorage.getItem('theme')
        document.querySelector('html').setAttribute("data-theme",local)

    },[theme])



    return (
        <div>
            <div className="navbar text-[#FCF6F5]  font-medium bg-[#1C1678]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" onClick={handleOnView}  className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      {
        hidden?<ul tabIndex={0} className="menu z-20 menu-sm text-black space-y-4 dropdown-content mt-2  p-2 border-none shadow bg-base-100 rounded-box w-52">
          
        {nav}
              </ul>:''
      }
    </div>
    <button className='sm:text-sm lg:text-[25px] md:mr-12 font-poppins'>Wander Asia Adventure</button>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-14 font-poppins text-lg">
    {nav}
    </ul>
  </div>
  <div className="navbar-end space-x-3">

  <input  onChange={onChangeColor} type="checkbox" value="" className="toggle hover:none  theme-controller"/>
<div className='relative z-30 text-white'>
  
{
  img?<img src={img} alt="" 
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  className='h-10 w-10 ring  rounded-full' />:''
}
  {
    showOnHover  && (
    <ul className='dropdown-content text-center text-[#FCF6F5] rounded-lg bg-[#1C1678] absolute  right-0 mt-4 w-44'>
      
      <li className=''><a> {userName} </a></li>
      <button className='border-2 border-[#1C1678] hover:border-[#FcF6F5] mt-2 py-2 w-full' onClick={handleLogOut}><Link to='/login'>Logout</Link> </button>
    </ul>

    )
  }
</div>

   {
    user?'': <Link to='login' ><button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
    </Link>
   }
  </div>
</div>




        </div>
    );
};

export default Navbar;