import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowAllTour from "./ShowAllTour";

const AllTouristSpot = () => {
  const data = useLoaderData();
  const [selectCountry, setSelectCountry] = useState("");
  const [sorting, setSorting] = useState("asc");

  //destruct country using spreading
  const allCountry = [...new Set(data.map((d) => d.country_Name))];
  console.log(allCountry);
  //country wise data set
  const filteredData = selectCountry
    ? data.filter((d) => d.country_Name === selectCountry)
    : data;

  //sorting function
  const sortData = (data, order) => {
    const newData = [...data];

    newData.sort((a, b) => {
      if (order === "asc") {
        return a.cost - b.cost;
      } else {
        return b.cost - a.cost;
      }
    });
    return newData;
  };

  //apply sorting
  const sorted = sortData(filteredData, sorting);

  //place inside button
  const handleOnSorting = (e) => {
    setSorting(e.target.value);
  };

  const handleOnChange = (e) => {
    setSelectCountry(e.target.value);
  };

  return (
    <div className="">
        <div className="flex justify-between lg:justify-start gap-5 mx-1">
        <form className="max-w-sm ">
  






  <select id="countries"  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "value={selectCountry}  onChange={handleOnChange}>
    <option className="text-xs" value="">All Country</option>
    {
           allCountry.map((f,idx)=>( <option className="text-xs" key={idx} value={f}>{f}</option>  )) 
    }

  </select>
        </form>

<form className="max-w-sm">
  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={sorting} onChange={handleOnSorting} > 
    <option className="text-xs" value='' >Prize Range</option>
    <option className="text-xs" value="asc">Low to High</option>
    <option className="text-xs" value="dsc">High to Low</option>
   
  </select>
</form>
        </div>


      <div className="lg:grid grid-cols-3 w-full mt-1 ">
        {sorted.map((details, idx) => (
          <ShowAllTour details={details} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpot;


