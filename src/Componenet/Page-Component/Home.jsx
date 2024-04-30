import SliderBanner from '../Shared-Componenet/SliderBanner';
import { Link, useLoaderData } from 'react-router-dom';
import HomePageTourismData from './HomePageTourismData';
import { useEffect, useState } from 'react';
import ThreeHomeCard from '../Shared-Componenet/ThreeHomeCard';
import HomePageSecondComponent from '../Shared-Componenet/HomePageSecondComponent';

const Home = () => {
    const [show,setShow]=useState(false)
    const tourism=useLoaderData()
    const handleToBottom=()=>{
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth' // Add smooth scrolling behavior
          });
        
    }



    return (
        <div>
            <SliderBanner/>


            <div className='my-16 py-2 bg-[#FCFBF4 ] rounded-md customShadow'>
            <h1 className='text-center text-[#000223]  text-2xl md:text-2xl lg:text-5xl font-medium px-5  my-6'>Ready to Discover Asia's Hidden Gems with  <span className='text-purple-950 font-bold  mt-3 leading-10'>
            WanderAsiaAdventure</span>?</h1>
            <div className='lg:grid grid-cols-2 px-2 '>
                {
                    !show?  tourism.slice(0,6).map((tours)=>( <HomePageTourismData tours={tours} key={tours._id} /> )):tourism.map((tours)=>( <HomePageTourismData tours={tours} key={tours._id} /> ))
                }
            </div>

            <div className=' mx-auto text-center  w-full'>
            <button  onClick={()=>setShow(!show)} className='btn  bg-[#1C1678] text-white hover:text-[#1C1678] hover:border-2 hover:border-[#1C1678]' > {!show?'Show All':'Hide'} </button>
            </div>
          
            </div>
            <HomePageSecondComponent/>


<div className='bgTwo h-[50vh] opacity-90    bg-purple-600 my-24 flex justify-end  
items-end md:items-center '  >

    <div className='bg-[#1C1678] h-2/4 md:h-auto py-3  text-white rounded-lg md:mr-5 bg-opacity-80    md:w-1/3 text-center md:py-10 '>
        <h1 className='text-center text-2xl mx-3  font-medium '>Share you Trouble & Join with us to get whether people's visit most</h1>
        <div>                <Link  to="/singing" >
                              <button type="submit" className="text-white mt-5 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sing In</button>
                              </Link>

                              <Link  to="/uploadedData" >
                              <button type="submit" className="text-white mt-5 bg-[#1C1678] border border-white dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">All Tours</button>
                              </Link>
                             
        </div>

    </div>

</div>



            <h1 className='text-3xl mx-2 mt-[2em]  md:text-5xl  text-center font-poppins font-bold'>Customize Your Tour and Destination</h1>
            <div className='text-center my-5'>
                <button onClick={handleToBottom} className='text-white font-poppins p-2 bg-[#1C1678] text-center rounded-xl'>contact us</button>
                </div>

            <ThreeHomeCard/>
            
        </div>
    );
};

export default Home;


