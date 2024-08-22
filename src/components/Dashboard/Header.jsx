import React, { useState } from 'react';
import MobileSidebar from "../../General/MobileSidebar";
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdNotifications } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
// import { useDataContext } from '../../context/DataContext';

const fineStyles = {
  unverified: "text-yellow-500 font-semibold bg-yellow-400 bg-opacity-10 px-2 py-1 rounded-full",
  verified: "text-green-500 font-semibold bg-green-400 bg-opacity-10 px-2 py-1 rounded-full",
};

export default function Header({ tab }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  // const { unreadNotifications } = useDataContext();
  const location = useLocation();

  const handleOpenMobileToggle = () => setMobileToggle(true);
  const handleCloseMobileToggle = () => setMobileToggle(false);

  return (
    <>
      <MobileSidebar activeTab={tab} isOpen={mobileToggle} handleClose={handleCloseMobileToggle} />
      <header>
        <div className="w-full px-3 sm:px-6 pb-2 lg:px-8 border-b">
          <div className="flex items-center justify-between mt-5">
            <div className="text-left flex items-center sm:text-left max-md:flex max-md:items-center max-md:gap-3">
              <GiHamburgerMenu size={24} className="lg:hidden mr-5" onClick={handleOpenMobileToggle} />
              <div>
                <h1 className="text-sm font-bold text-gray-900 sm:text-lg">Welcome Back, Olatech</h1>
                <p className="mt-1.5 text-xs lg:text-sm text-gray-500 flex items-center gap-2">
                  ID: user_id
                  <div className="text-primary bg-primary bg-opacity-10 px-2 py-1 rounded-full">• user</div>
                </p>
              </div>
            </div>
            {/* <div className="mt-0 flex items-center relative">
              <Link to="/notifications">
                <IoMdNotifications className="text-primary text-3xl lg:text-4xl" />
              </Link>
              <div className='absolute top-0 right-0 bg-red-600 text-center text-white rounded-full text-xs font-semibold w-5 h-5 flex items-center justify-center'>
                {unreadNotifications.length}
              </div>
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
}
