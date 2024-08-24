import React from 'react';
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={Logo} 
            alt="Portfolio Media Center Logo"
            className="h-16 w-40 mr-3" 
          />
        
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-blue-600 transition duration-300">Home</a>
          <a href="/shop" className="text-gray-600 hover:text-blue-600 transition duration-300">Shop</a>
          <a href="/about" className="text-gray-600 hover:text-blue-600 transition duration-300">About</a>
          <a href="/media-center" className="text-gray-600 hover:text-blue-600 transition duration-300">Media Center</a>
          <a href="/contact" className="text-gray-600 hover:text-blue-600 transition duration-300">Contact</a>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

