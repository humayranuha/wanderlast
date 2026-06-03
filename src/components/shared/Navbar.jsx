'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import logo from '../../../public/assets/Wanderlast.png';
import Image from 'next/image';
import { IoPerson, IoMenu, IoClose } from 'react-icons/io5';
import { UserButton, useAuth, SignInButton, SignUpButton } from '@clerk/nextjs';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isSignedIn, isLoaded } = useAuth();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Don't show anything until Clerk is loaded to avoid flashing
    if (!isLoaded) {
        return (
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        <div className="shrink-0">
                            <Image src={logo} alt='Wanderlast logo' unoptimized width={120} height={40} />
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <Link 
                            href='/' 
                            className='text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-200'
                        >
                            Home
                        </Link>
                        <Link 
                            href='/destinations' 
                            className='text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-200'
                        >
                            Destinations
                        </Link>
                        <Link 
                            href='/my-bookings' 
                            className='text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-200'
                        >
                            My Bookings
                        </Link>
                        {/* <Link 
                            href='/admin' 
                            className='text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-200'
                        >
                            Admin
                        </Link> */}
                    </div>

                    {/* Logo Section */}
                    <div className="shrink-0">
                        <Link href="/" className="block">
                            <Image 
                                src={logo} 
                                alt='Wanderlast logo' 
                                unoptimized 
                                width={120} 
                                height={40} 
                                className="object-contain sm:w-37.5 sm:h-12.5"
                            />
                        </Link>
                    </div>

                    {/* Desktop Auth Section */}
                    <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                        {isSignedIn ? (
                            <>
                                {/* Clerk UserButton for logout/account */}
                                <UserButton 
                                    afterSignOutUrl="/"
                                    appearance={{
                                        elements: {
                                            userButtonAvatarBox: "w-8 h-8",
                                        }
                                    }}
                                />
                            </>
                        ) : (
                            <>
                                {/* Login Button */}
                                <SignInButton mode="redirect">
                                    <button className='text-gray-700 hover:text-cyan-600 transition-colors duration-200'>
                                        Login
                                    </button>
                                </SignInButton>
                                
                                {/* Register Button */}
                                <SignUpButton mode="redirect">
                                    <button className='bg-cyan-600 text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-200 font-medium text-sm lg:text-base'>
                                        Register
                                    </button>
                                </SignUpButton>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button 
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-cyan-600 focus:outline-none p-2"
                        >
                            {isMenuOpen ? <IoClose className="text-2xl" /> : <IoMenu className="text-2xl" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200 py-4 space-y-3">
                        {/* Mobile Nav Links */}
                        <Link 
                            href='/' 
                            className='block px-4 py-2 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors duration-200'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link 
                            href='/destinations' 
                            className='block px-4 py-2 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors duration-200'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Destinations
                        </Link>
                        <Link 
                            href='/my-bookings' 
                            className='block px-4 py-2 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors duration-200'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            My Bookings
                        </Link>
                        <Link 
                            href='/admin' 
                            className='block px-4 py-2 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors duration-200'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Admin
                        </Link>

                        {/* Divider */}
                        <div className="border-t border-gray-200 my-2"></div>

                        {/* Mobile Auth Section */}
                        {isSignedIn ? (
                            <>
                                {/* <Link 
                                    href='/profile' 
                                    className='flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors duration-200'
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <IoPerson className="text-lg" />
                                    <span>Profile</span>
                                </Link> */}
                                
                                {/* Mobile UserButton (simplified) */}
                                <div className="px-4 py-2">
                                    <UserButton afterSignOutUrl="/" />
                                </div>
                            </>
                        ) : (
                            <>
                                <SignInButton mode="redirect">
                                    <button className='block w-full text-left px-4 py-2 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors duration-200'>
                                        Login
                                    </button>
                                </SignInButton>
                                
                                <SignUpButton mode="redirect">
                                    <button className='block px-4 py-2 mx-4 text-center bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors duration-200 font-medium'>
                                        Register
                                    </button>
                                </SignUpButton>
                            </>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;