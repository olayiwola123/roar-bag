import React from "react";
import { Outlet } from "react-router-dom";  // Import Outlet
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const NavWrapper = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <div className="min-h-screen">
        <Outlet /> 
      </div>
      <Footer />
    </div>
  );
};

export default NavWrapper;
