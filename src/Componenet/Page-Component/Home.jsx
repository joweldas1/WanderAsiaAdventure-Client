import SliderBanner from '../Shared-Componenet/SliderBanner';
import { useLoaderData } from 'react-router-dom';
import HomePageTourismData from './HomePageTourismData';
import { useState } from 'react';

const Home = () => {
    const [show,setShow]=useState(false)
    const tourism=useLoaderData()



    return (
        <div>
            <SliderBanner/>


            <div className='my-24 py-5 bg-[#FCFBF4 ] rounded-md customShadow'>
            <h1 className='text-center text-[#000223]  text-2xl md:text-2xl lg:text-5xl font-medium px-5  my-6'>Ready to Discover Asia's Hidden Gems with  <span className='text-purple-950 font-bold  mt-3 leading-10'>
            WanderAsiaAdventure</span>?</h1>
            <div className='lg:grid grid-cols-2 px-4 '>
                {
                    !show?  tourism.slice(0,6).map((tours)=>( <HomePageTourismData tours={tours} key={tours._id} /> )):tourism.map((tours)=>( <HomePageTourismData tours={tours} key={tours._id} /> ))
                }
            </div>

            <div className=' mx-auto text-center  w-full'>
            <button  onClick={()=>setShow(!show)} className='btn w-1no/3  btn-warning'> {!show?'Show All':'Hide'}  </button>
            </div>
         
            </div>
            
        </div>
    );
};

export default Home;


