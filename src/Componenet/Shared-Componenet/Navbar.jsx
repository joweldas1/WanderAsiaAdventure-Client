import React, { useEffect, useState } from 'react';
import { Link, NavLink, useFormAction } from 'react-router-dom';
import UseAuth from '../AuthComponent/UseAuth';

const Navbar = () => {  
  const [hidden,setHidden]=useState(false)  
  const [showOnHover,setShowOnHover]=useState(false)
  const {logOut,user}=UseAuth()
  const userEmail=user?.email||''

  const userName=user?.displayName;
  const img=user?.photoURL

  const handleLogOut=()=>{
    logOut()
    .then(()=>{
      alert('user logout')
    })
    .catch((error)=>console.log(error))
  }

  let timeOut;
  const handleMouseEnter=()=>{
    clearTimeout(timeOut)
    setShowOnHover(true)
  }
  const handleMouseLeave=()=>{
    timeOut=setTimeout(() => {
      setShowOnHover(false)
    }, 2000);
  }

    const [theme,setTheme]=useState(localStorage.getItem('theme')?localStorage.getItem('theme'):'dark')

    const nav= <>
    <NavLink  to='/' className={({isActive})=>(isActive?'active':'noActive')} >  Home </NavLink>
    <NavLink  to='/uploadedData' > All Tourists Spot </NavLink>
    <NavLink  to='/addTouristSpot' > Add Tourist Spot </NavLink>
    <NavLink  to={`/myData/${userEmail}`} > My List </NavLink>
    </>


    const handleOnView=()=>{
      console.log('working');
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
            <div className="navbar   font-medium bg-purple-600">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" onClick={handleOnView}  className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      {
        hidden?<ul tabIndex={0} className="menu z-20 menu-sm text-black space-y-4 dropdown-content mt-2  p-2 shadow bg-base-100 rounded-box w-52">
          
        {nav}
              </ul>:''
      }
    </div>
    <button className='sm:text-sm lg:text-[25px] font-poppins'>Wander Asia Adventure</button>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-7 font-poppins text-lg">
    {nav}
    </ul>
  </div>
  <div className="navbar-end space-x-3">

  <input  onChange={onChangeColor} type="checkbox" value="" className="toggle  theme-controller"/>
<div className='relative z-30 text-white'>
  
<img src={img} alt="" 
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  className='h-10 w-10 bg-red-600 rounded-full' />
  {
    showOnHover  && (
    <ul className='dropdown-content text-black absolute left-0  right-4'>
      
      <li><a> {userName} </a></li>
      <button onClick={handleLogOut}><Link to='/login'>Logout</Link> </button>
    </ul>

    )
  }
</div>

    <Link to='login' ><button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
 </Link>
  </div>
</div>




        </div>
    );
};

export default Navbar;