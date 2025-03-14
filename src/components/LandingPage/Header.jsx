import { Search, MapPin } from "lucide-react";
import TrustedBy from "./TrustedBy";
import HowItWorks from "./HowItWorks";
import Footer from "./Footer";

export default function Header() {
  return (
    <div className="flex flex-col h-[300px] items-center  space-y-6 text-center py-10 px-4 bg-gradient-to-r from-white w-full  to-purple-50  ">
      
      <h1 className="text-3xl md:text-4xl font-bold">
        Find your <span className="text-purple-600">new job</span> today
      </h1>
      <p className="text-gray-600 mt-2 max-w-md">
        Thousands of jobs in the computer, engineering, and technology sectors are waiting for you.
      </p>

      <div className="sm:flex items-center  mt-6">
        
        <div className="bg-white shadow-md md:flex md:items-center  w-full p-2 md:p-0">
        
          <div className="flex items-center bg-gray-100 p-3 md:bg-transparent">
            <Search className="text-gray-500 w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="What position are you looking for?"
              className=" bg-transparent outline-none sm:w-72  w-48  text-xs sm:text-lg   text-gray-700"
            />
          </div>

        
          <div className="flex items-center bg-gray-100 p-3 mt-3 md:mt-0 md:rounded-none md:bg-transparent md:w-1/3 md:border-l md:border-gray-300">
            <MapPin className="text-gray-500 w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Location"
              className="w-full bg-transparent outline-none  text-xs  sm:text-lg  text-gray-700"
            />
          </div>
        </div>

      
        <button className="bg-purple-600 hover:bg-purple-700  sm:text-lg  text-sm p-1 w-24 sm:-ml-0 -ml-40  text-white ">
          Apply for Jobs
        </button>
      </div>
    
      
      
    </div>
  );
}
