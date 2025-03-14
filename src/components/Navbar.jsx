import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">

        

    
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

    
        <ul className="hidden md:flex space-x-6 text-gray-600">
          <li><a href="#" className="hover:text-purple-600">Career Fair</a></li>
          <li><a href="#" className="hover:text-purple-600">Skill Tests</a></li>
          <li><a href="#" className="hover:text-purple-600">Resume Builder</a></li>
          <li><a href="#" className="hover:text-purple-600">Services</a></li>
          </ul>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-purple-600">Login</a>
          <a href="#" className="border border-purple-600 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50">
            Resume Builder
          </a>
          <a href="#" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Apply for Jobs
          </a>
        </div>
      </div>

    
      {isOpen && (
        <div className="md:hidden bg-white py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><a href="/" className="text-gray-600 hover:text-purple-600">Career Fair</a></li>
            <li><a href="/" className="text-gray-600 hover:text-purple-600">Skill Tests</a></li>
            <li><a href="/" className="text-gray-600 hover:text-purple-600">Resume Builder</a></li>
            <li><a href="/" className="text-gray-600 hover:text-purple-600">Services</a></li>
            <li><a href="/" className="text-gray-600 hover:text-purple-600">Login</a></li>
            <li>
              <a href="/" className="border border-purple-600 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50">
                Resume Builder
              </a>
            </li>
            <li>
              <a href="/" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                Apply for Jobs
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
