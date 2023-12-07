import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <div className='bg-green-500 py-3 text-white'>
            <ul className='flex ml-10 home'>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/html'}>HTML</Link>
                </li>
                <li>
                    <Link to={'/css'}>CSS</Link>
                </li>
                <li>
                    <Link to={'/js'}>JavaScript</Link>
                </li>
                
            </ul>
        </div>
    );
};

export default Navbar;