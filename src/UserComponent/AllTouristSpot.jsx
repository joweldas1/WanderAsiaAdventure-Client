import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowAllTour from './ShowAllTour';

const AllTouristSpot = () => {
    const data=useLoaderData()
    const [selectCountry,setSelectCountry]=useState('')
    

    //country wise data set
    const filteredData=selectCountry?data.filter(d=>d.country_Name===selectCountry):data


    const handleOnChange=(e)=>{
        setSelectCountry(e.target.value)
        console.log(e.target.value);
    }
    

    return (
        <div>
          
<form className="max-w-sm mx-auto">
  
  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "value={selectCountry}  onChange={handleOnChange}>
    <option value="">All Country</option>
    {

    }
    <option value="Bangladesh">Canada</option>
    <option value="Malaysia">France</option>
    <option value="Srilanka">Srilanka</option>
    <option value="China">China</option>
  </select>
</form>










            <div className='lg:grid grid-cols-3 w-full mt-10'>
                {
                    filteredData.map((details,idx)=>(  <ShowAllTour details={details} key={idx} />  ))
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;











 /* import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowAllTour from './ShowAllTour';

const AllTouristSpot = () => {
    const [data, setData] = useState([]);
    const allData = useLoaderData();
    const [selectedCountry, setSelectedCountry] = useState('');

    // Fetch data from the server
    useEffect(() => {
        setData(allData);
    }, [allData]);

    // Filter data based on selected country
    const filteredData = selectedCountry ? data.filter(details => details.country === selectedCountry) : data;
  
    // Function to handle country selection
    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    return (
        <div>
            <div className="dropdown">
                <select value={selectedCountry} onChange={handleCountryChange}>
                    <option value="">All Countries</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="USA">USA</option>
                </select>
            </div>

            <div className='lg:grid grid-cols-3 w-full mt-10'>
                {filteredData.map((details, idx) => (
                    <ShowAllTour details={details} key={idx} />
                ))}
            </div>
        </div>
    );
};

// export default AllTouristSpot */