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


            <div className='my-16'>
            <h1 className='text-center text-4xl my-8'>Ready to Discover Asia's Hidden Gems with <br/> WanderAsiaAdventure?</h1>
            <div className='lg:grid grid-cols-2  '>
                {
                    !show?  tourism.slice(0,6).map((tours)=>( <HomePageTourismData tours={tours} key={tours._id} /> )):tourism.map((tours)=>( <HomePageTourismData tours={tours} key={tours._id} /> ))
                }
            </div>

            <div className=' mx-auto text-center  w-full'>
            <button  onClick={()=>setShow(!show)} className='btn w-1/3  btn-warning'> {!show?'Show All':'Hide'}  </button>
            </div>
         
            </div>
            
        </div>
    );
};

export default Home;


