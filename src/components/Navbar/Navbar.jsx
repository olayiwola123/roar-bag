import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
// import { FaCartShopping, FaBars, FaTimes } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { FaCartShopping, FaBars,  FaTimeline } from "react-icons/fa6";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Media Center", link: "/media" },
  { id: 3, name: "Login", link: "/Login" },
  { id: 4, name: "Portfolio", link: "/portfolio" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center px-4">
          {/* Logo Section */}
          <a href="/" className="font-bold text-2xl sm:text-3xl flex items-center gap-2">
            <img src={Logo} alt="Logo" className="w-40" />
          </a>

          {/* Menu for Desktop */}
          <ul className="hidden sm:flex items-center gap-8">
            {Menu.map((data) => (
              <li key={data.id}>
                <a href={data.link} className="text-lg font-medium hover:text-primary transition duration-200">
                  {data.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="sm:hidden">
            <button onClick={toggleMobileMenu} className="text-2xl">
              {isMobileMenuOpen ? <FaTimeline /> : <FaBars />}
            </button>
          </div>

          {/* Search, Cart, and Dark Mode */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-40 transition-all duration-300 rounded-full border border-gray-300 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            </div>

            <button onClick={handleOrderPopup} className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full flex items-center gap-2 transition duration-200 hover:scale-105">
              <FaCartShopping className="text-xl" />
            </button>

            <DarkMode />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden bg-white dark:bg-gray-900 p-4 shadow-md">
            <ul className="flex flex-col items-center gap-4">
              {Menu.map((data) => (
                <li key={data.id}>
                  <a href={data.link} className="text-lg font-medium hover:text-primary transition duration-200">
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
