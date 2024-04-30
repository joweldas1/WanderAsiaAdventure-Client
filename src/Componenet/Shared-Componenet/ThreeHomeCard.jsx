import React, { useEffect, useState } from 'react';

const ThreeHomeCard = () => {
const [data,setData]=useState()

useEffect(()=>{
    fetch("http://localhost:5500/threeData")
    .then(res=>res.json())
    .then(result=>setData(result))
},[])
console.log(data);
    return (
        <div className='sm:w-full  md:w-4/5 mx-auto md:flex my-5 ' >
           
      {
        data?.map((d)=>(
            <div className='mx-2 ' key={d._id}>
                <div className='bg-[#1C1678] relative mb-4 p-2 rounded-2xl font-poppins text-white'>
                    <div >

                      <div className='overflow-hidden'>
                      <img className='w-full transition-transform hover:scale-150 inset-0 duration-300 ease-in-out ' src={d.imageURL} alt="" />
                      </div>
             
                        <p className='text-2xl mt-5 my-2'>{d.title}</p>
             
                        <p>{d.description}</p>
                        <p className='my-2 bg-white text-black w-1/3 py-1 text-center rounded-lg'> Price: {d.cost}</p>
                        
                    </div>

                </div>



            </div>
        ))
      }
      </div>
    );
};

export default ThreeHomeCard;