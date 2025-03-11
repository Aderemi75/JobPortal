import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";

const Home = () => {
  return (
    <div className=" sm:h-screen  h-screen  w-full sm:flex">
      
      <div className="sm:w-1/2 h-[50%] w-full flex sm:h-full  flex-col items-center justify-center  bg-blue-500 text-white p-10">
        <div className="text-center  space-y-2">
          <IoPersonCircleSharp className="text-6xl mx-auto size-28" />
          <h2 className="text-2xl font-bold">Employer Login</h2>
          <button className="bg-white text-blue-500 px-6 py-2 rounded shadow-md hover:bg-gray-200">
            Login
          </button>
          <p className="text-sm">
            Don't have an account? <a href="#" className="underline">Sign up here</a>
          </p>
        </div>
      </div>

      
      <div className="sm:w-1/2 w-full h-[50%]  flex flex-col items-center justify-center bg-green-500 sm:h-full  text-white p-10">
        <div className="text-center space-y-2">
          <IoPersonCircleSharp className="text-6xl mx-auto size-28" />
          <h2 className="text-2xl font-bold">Employee Login</h2>
          <button className="bg-white text-green-500 px-6 py-2 rounded shadow-md hover:bg-gray-200">
            Login
          </button>
          <p className="text-sm">
            Don't have an account? <a href="#" className="underline">Sign up here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
