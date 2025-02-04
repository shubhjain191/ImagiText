import React, { useContext, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext.jsx';
import { assets } from '../assets/assets.js';

const Navbar = () => {
    const {
        user,
        setShowLogin,
        logout,
        credit,
        isLoading,
        isDropdownOpen,
        setIsDropdownOpen,
        loadCreditsData // Add this to allow manual refresh if needed
    } = useContext(AppContext);

    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    // Debug log for credit value
    useEffect(() => {
        console.log('Current credit value in Navbar:', credit);
    }, [credit]);

    return (
        <div className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
                <Link to='/' className="flex items-center gap-2">
                    <img src={assets.logo} alt="Logo" className='w-24 sm:w-20 lg:w-16' />
                    <span className="font-bold text-2xl lg:text-3xl">
                        <span className="text-cyan-600">ImagiText</span>
                    </span>
                </Link>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
                {user ? (
                    <div className='flex items-center gap-2 sm:gap-4'>
                        {/* Credit Button with manual refresh option */}
                        <button
                            onClick={() => {
                                console.log('Credit button clicked');
                                navigate('/buy');
                            }}
                            className='flex items-center gap-2 bg-blue-100 px-3 sm:px-4 py-1.5 rounded-full hover:scale-105 transition-all duration-300'
                        >
                            <img className='w-5' src={assets.credit_star} alt="Credit Star" />
                            <p className='text-xs sm:text-sm font-medium text-gray-600'>
                                Credit Left: {isLoading ? '...' : credit}
                            </p>
                            {/* Optional refresh button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    loadCreditsData();
                                }}
                                className="ml-2 text-xs text-gray-500 hover:text-gray-700"
                            >
                                ↻
                            </button>
                        </button>

                        {/* User name */}
                        {user?.name && (
                            <p className='text-gray-600 text-sm max-sm:hidden'>
                                Hi, {user.name}
                            </p>
                        )}

                        {/* Profile dropdown */}
                        <div className='relative' ref={dropdownRef}>
                            <img
                                src={assets.profile_icon}
                                className='w-10 h-10 rounded-full cursor-pointer'
                                alt="Profile"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            />
                            {isDropdownOpen && (
                                <div className='absolute top-12 right-0 z-10 bg-white rounded-md shadow-lg border'>
                                    <ul className='list-none m-0 p-2'>
                                        <li
                                            className='py-2 px-4 cursor-pointer hover:bg-gray-100 rounded-md text-sm'
                                            onClick={logout}
                                        >
                                            Logout
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center gap-4 sm:gap-6">
                        <p
                            onClick={() => navigate('/buy')}
                            className='cursor-pointer text-sm sm:text-base hover:text-cyan-700 transition-colors'
                        >
                            Pricing
                        </p>
                        <button
                            className='bg-zinc-800 text-white px-5 py-2 sm:px-8 text-sm rounded-full hover:bg-zinc-700 transition-colors'
                            onClick={() => setShowLogin(true)}
                        >
                            Login
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;