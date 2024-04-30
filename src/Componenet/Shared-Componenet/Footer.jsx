import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../AuthComponent/UseAuth';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { CollectionReference } from 'firebase/firestore';

    

const Footer = () => {
const {user}=UseAuth()

    const nav= <>
<NavLink  to='/' >  Home </NavLink>
<NavLink  to='/uploadedData' > All Tourists Spot </NavLink>
<NavLink  to='/addTouristSpot' > Add Tourist Spot </NavLink>
<NavLink  to={`/myData/${user?.userEmail}`} > My List </NavLink>
</>

    
    return (
        <div className=' md:h-[40vh]       text-white bg-[#1C1678] w-full' >
     

          <ul className='text-center space-x-2 md:space-x-6 lg:space-x-10 py-3'>{nav}</ul>


          <div className='mt-5 md:flex md:justify-around items-center lg:mt-10'>
            <div className='text-white text-sm font-regular font-poppins text-center md:text-left'>
                <p>(802) 540-0055</p>
                <p>PO Box 8585, Burlington, VT 05402</p>
                <p>© 2024 Champlain Tours. All rights reserved. </p>
                <p>website by Pinnacle Media</p>
                <div className='iconStyle text-center md:text-left justify-center md:justify-start'>
                <FaFacebook ></FaFacebook>
                <FaInstagram/>
                <FaLinkedin/>
                </div>
            </div>
            
            <div className=' text-center text-2xl font-poppins mt-10 md:mt-0 font-bold '>
                <h1>Looking for account?    <br /> Please create a account</h1>
                              <Link  to="/singing" >
                              <button type="submit" className="text-white mt-5 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sing In</button>
                              </Link>
            </div>


            <div>
            <h1 className='text-2xl hidden md:block py-5 lg:text-4xl text-center my-2 font-medium'>Wander Asia <br />    Adventure</h1>
            </div>

          </div>
            
        </div>
    );
};

export default Footer;