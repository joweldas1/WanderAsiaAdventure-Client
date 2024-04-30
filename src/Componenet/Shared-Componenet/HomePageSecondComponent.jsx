import React from 'react';
import Lottie from 'lottie-react';
import animate from "../../../public/hello.json"
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';

const HomePageSecondComponent = () => {
    const [text]=useTypewriter({
        words:['Choose Your Time','Choose Us','Start You Travel' ],
        loop:Infinity,
    })
    const handleToView =()=>{
        window.scrollTo({
            top:document.body.scrollHeight,
            behavior:"smooth"

        })
    }
    

    return (
        <div>
            <div className='shadowFour bg-gradient-to-r from-[#1C1678] to-gray-900  bg-opacity-90 text-white rounded-lg font-poppins h-[60vh'>
                <div className='flex flex-col md:flex-row pt-3 md:pt-0 justify-around items-center'>
                        <div className='w-full mx-3 text-left' >
                            <h1 className= 'text-3xl mx-2 md:text-4xl font-semibold '>Your Adventure 
                            Awaits: {' '} <span className='text-yellow-300'>{text}</span> {<Cursor cursorColor={'white'} />} </h1>
                            <div className='w-20 h-[2px] mx-auto my-3 bg-white'></div>
                            <p className="text-md mx-2 my-2">Embark on a journey where every moment is yours to command. With our flexible travel options, you hold the reins of your adventure. Choose us, and let's create unforgettable memories together. Your adventure begins now.</p>
                            <button className='btn  bg-[#1C1678] text-white hover:text-[#1C1678] hover:border-2 hover:border-[#1C1678]' onClick={handleToView} > Contact Us </button>
                        </div>
                        <div className='w-full  mt-5 md:mt-0 lg:m-2' >
                            <Lottie className='rounded-full' animationData={animate} ></Lottie>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageSecondComponent;