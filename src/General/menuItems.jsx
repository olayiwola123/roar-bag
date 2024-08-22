import {  MdDashboard } from "react-icons/md";
// import { TbSmartHome } from "react-icons/tb";
// import { IoIosSettings, IoMdCart, IoMdNotifications } from "react-icons/io";
import { FaBlog,  FaEnvelope,  } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

export const menuItems = [
  {
    name: "Dashboard",
    url: "/admin/dashboard",

    icon: <MdDashboard className="text-white" />,
    activeIcon: <MdDashboard className="text-tertiary" />,
  },
 
  // {
  //   name: "Blog",
  //   url: "/blogs",
  //   icon: <FaBlog />,
  //   activeIcon: <FaBlog className="text-tertiary" />,
  // },
  {
    name: "Products",
    url: "/products",
    icon: <FaBagShopping />,
    activeIcon: <FaBagShopping className="text-tertiary" />,
  },
];
