import React, { useState, useEffect } from 'react';
// import { useDataContext } from '../context/DataContext';
import SideMenu from '../components/Dashboard/SideMenu';
import Header from '../components/Dashboard/Header';
import { FaBook, FaEye, FaGraduationCap, FaProductHunt } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import DashCard from '../Card/DashCard';
import { useDataContext } from '../context/DataContext';
import { useAuthContext } from '../context/AuthContext';
import { FaBagShopping } from 'react-icons/fa6';

export default function Dashboard() {
  // const { getRequest } = useDataContext();
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [metrics, setMetrics] = useState({});


  const admincardData = [
    { title: 'Total Produts',  icon: <FaBagShopping className="text-white" size={20} /> },
    { title: 'Total Blogs', icon: <FaBook className="text-white" size={20} /> },
  ];



  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      <div className="flex-shrink-0 lg:sticky lg:top-0 lg:h-screen lg:block">
        <SideMenu />
      </div>
      <div className="flex flex-col gap-10 flex-grow overflow-y-auto">
        <div className="sticky top-0 z-50 bg-white shadow-md">
          <Header tab="Dashboard" />
        </div>
        
          <div className="my-4 max-md:space-y-4 md:grid grid-cols-2 lg:grid-cols-4 gap-4 px-10">
            {admincardData.map((card, index) => (
              <DashCard key={index} data={card} />
            ))}
          </div>
        
      </div>
    </div>
  );
}
