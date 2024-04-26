import React from "react";
import errorImg from "../../../public/img/4660877_2446912.jpg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col  items-center justify-center h-screen
    w-full mx-auto text-center font-poppins font-semibold text-2xl">
      <img className="  lg:h-[80vh] mx-auto " src={errorImg} alt="" />
      <h2 className="mt-2">Please back to</h2>
      <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><Link to='/'> Home </Link></button>
    </div>
  );
};

export default ErrorPage;
