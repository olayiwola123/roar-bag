import React, { useState } from 'react';
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-20">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Portfolio Media Center Logo"
            className="h-16 w-40 mr-3"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-blue-600 transition duration-300">Home</a>
          <a href="/shop" className="text-gray-600 hover:text-blue-600 transition duration-300">Shop</a>
          <a href="/about" className="text-gray-600 hover:text-blue-600 transition duration-300">About</a>
          <a href="/media-center" className="text-gray-600 hover:text-blue-600 transition duration-300">Media Center</a>
          <a href="/contact" className="text-gray-600 hover:text-blue-600 transition duration-300">Contact</a>
          <a href="/login" className="text-gray-600 hover:text-blue-600 transition duration-300">Login</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={handleMenuToggle}
            className="text-gray-600 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white shadow-lg z-30 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Roar Design</h2>
            <button
              onClick={handleMenuToggle}
              className="text-gray-600 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center py-4">
            <a href="/" className="text-gray-600 hover:text-blue-600 transition duration-300 py-2" onClick={handleMenuToggle}>Home</a>
            <a href="/shop" className="text-gray-600 hover:text-blue-600 transition duration-300 py-2" onClick={handleMenuToggle}>Shop</a>
            <a href="/about" className="text-gray-600 hover:text-blue-600 transition duration-300 py-2" onClick={handleMenuToggle}>About</a>
            <a href="/media-center" className="text-gray-600 hover:text-blue-600 transition duration-300 py-2" onClick={handleMenuToggle}>Media Center</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600 transition duration-300 py-2" onClick={handleMenuToggle}>Contact</a>
            <a href="/login" className="text-gray-600 hover:text-blue-600 transition duration-300 py-2" onClick={handleMenuToggle}>Login</a>
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
