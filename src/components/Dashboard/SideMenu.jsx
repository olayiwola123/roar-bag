import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { menuItems } from '../../General/MenuItems';
import logo from '../../assets/logo.png'
export default function SideMenu() {
    const { token, logout, user } = useAuthContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        logout();
        window.location.href = "/";
    };

    const location = useLocation();
    const activeTab = location.pathname;

    return (
        <div className='flex h-screen max-lg:hidden'>
            <div className="flex w-[230px] h-full no-scrollbar overflow-y-auto flex-col justify-between border-e bg-primary">
                <div className="px-4 py-6">
                    <div className="flex justify-center">
                        <Link to="/">
                            <img src={logo} alt="Logo" width={150} height={100} />
                        </Link>
                        
                    </div>

                    <div className="mt-14 space-y-8 w-full">
                        {menuItems.map((item, index) => (
                          
                                <Link
                                    key={index}
                                    to={item.url}
                                    className={`flex items-start justify-start text-black gap-[15px] cursor-pointer rounded-md w-[210px]`}
                                >
                                    <p className={`self-start text-sm flex items-center gap-2 ${activeTab.includes(item.url) ? 'text-tertiary bg-white px-4 py-4 rounded-xl' : ''}`}>
                                        {activeTab.includes(item.url) ? item.activeIcon : item.icon}
                                        {item.name}
                                    </p>
                                </Link>
                            
                        ))}
                    </div>
                </div>

                <div className="sticky inset-x-0 bottom-0 py-8 border-gray-100 bg-primary">
                    <a
                        className="text-center ml-5 w-[150px] in rounded border border-transparent bg-white  px-12 py-3 text-sm font-medium text-tertiary focus:outline-none focus:ring active:text-indigo-500 cursor-pointer"
                        onClick={handleSubmit}
                    >Log out
                    </a>
                </div>
            </div>
        </div>
    );
}
