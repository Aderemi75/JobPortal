import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0D0B1B] relative w-full  text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Left Section - Brand */}
        <div className="w-full ">
          <h2 className="text-purple-400 text-2xl font-bold">foundit</h2>
          <p className="mt-2 text-gray-400 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis, justo nec porttitor auctor, erat sapien faucibus lectus, vel tempor dolor augue et lectus.
          </p>
          <div className="flex gap-3 mt-4">
            <FaFacebookF className="w-6 h-6 p-1 bg-gray-800 rounded hover:bg-purple-500" />
            <FaTwitter className="w-6 h-6 p-1 bg-gray-800 rounded hover:bg-purple-500" />
            <FaLinkedinIn className="w-6 h-6 p-1 bg-gray-800 rounded hover:bg-purple-500" />
            <FaInstagram className="w-6 h-6 p-1 bg-gray-800 rounded hover:bg-purple-500" />
          </div>
        </div>

        {/* Middle Sections - Navigation */}
        <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-16">
          <div>
            <h3 className="text-lg font-semibold mb-3">Home</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>Product</li>
              <li>Course</li>
              <li>About Us</li>
              <li>Log in</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Course</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>HTML & CSS</li>
              <li>Javascript</li>
              <li>Fotographer</li>
              <li>Desain Grafis</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Article</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>New</li>
              <li>Old</li>
              <li>Trend</li>
              <li>Popular</li>
            </ul>
          </div>
        </div>

        {/* Right Section - Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-400 text-sm">CCcode123@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
