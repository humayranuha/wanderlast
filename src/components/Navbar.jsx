import React from 'react';
import Link from 'next/link';
import logo from '/public/assets/Wanderlast.png';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div>
            <nav>
                <div>
                    <ul>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/'>Destinations</Link></li>
                        <li><Link href='/'>My Bookings</Link></li>
                        <li><Link href='/'>Admin</Link></li>
                    </ul>
                </div>
                <div>
                    <Image src={logo} alt='Wanderlast logo' unoptimized width={150} height={50} />
                </div>
                <div>
                    
                </div>
            </nav>
        </div>
    );
};

export default Navbar;