import React from "react";
// import { useAuthContext } from "../../context/AuthContext";
import { Link, useLocation } from "react-router-dom";
import { FaCoins, FaUserEdit, FaWallet } from "react-icons/fa";
import { FaGift, FaHandshake } from "react-icons/fa6";
import { MdDashboard, MdFormatListBulletedAdd, MdMessage } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { RiFileList3Fill } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { IoMdHelpCircle } from "react-icons/io";
import { menuItems } from "../General/MenuItems";
import logo from '../assets/logo.png'

const MobileSidebar = ({ isOpen, handleClose }) => {
  // const { token, logout, user } = useAuthContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    logout();
    window.location.href = "/";
  };

  const location = useLocation();
  const activeTab = location.pathname;

  return (
    <>
      <div
        className={`bg-black bg-opacity-50 fixed top-0 left-0 right-0 bottom-0 overflow-hidden z-10 ${!isOpen && "hidden"
          }`}
        onClick={handleClose}
      ></div>
     
      <div
        className={
          isOpen
            ? "h-screen fixed top-0 bg-seconadry w-[268px] translate-x-0  shadow-xl  z-10  transition-all duration-300 lg:hidden  overflow-y-auto"
            : " -translate-x-96 overflow-hidden h-screen fixed top-0 bg-primary  z-10  transition-all duration-300 lg:hidden overflow-y-auto"
        }
      >
        <div className="flex h-full no-scrollbar overflow-y-auto flex-col justify-between border-e bg-secondary">
          <div className="px-4 py-6">
            <div>
              <img src={logo} width={100} height={100} />
            </div>

            <div className="mt-6 space-y-6 w-full">
              {menuItems.map((item, index) => (
                <>
                    <Link
                      key={index}
                      to={item.url}
                      className={`flex items-start justify-start text-white gap-[15px] cursor-pointer rounded-md w-[210px]`}
                    >
                      <p className={`self-start text-sm flex items-center gap-2 ${activeTab.includes(item.url) && 'text-tertiary bg-white px-4 py-4 rounded-xl'}`}>
                        {activeTab.includes(item?.url)
                          ? item.activeIcon
                          : item.icon}
                        {item.name}
                      </p>
                    </Link>
             
                </>
              ))}
            </div>
          </div>

          <div className="sticky inset-x-0 bottom-0 border-gray-100">
            <a
              class="text-center ml-5 w-[150px] inline-block rounded border border-transparent bg-white px-12 py-3 text-sm font-medium text-secondary focus:outline-none focus:ring active:text-indigo-500"
              onClick={handleSubmit}
            >
              Log out
            </a>
            {/* <a href="#" className="flex items-center gap-2 bg-secondary p-4 text-white">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="size-10 rounded-full object-cover"
              />

              <div className=''>
                <p className="text-xs">
                  <strong className="block font-medium">Eric Frusciante</strong>

                  <span> eric@frusciante.com </span>
                </p>
              </div>
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
