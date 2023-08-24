// Header.js
import React from 'react';
import Navigation from './Navbar/Navbar';
import '../styles/Header.scss';

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a href="/" className='navbar-brand'>Portfolio</a>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav'>
                <span id='menu-icon' className='bx bx-menu'></span>
            </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <Navigation />
                </div>
            </nav>
        </header>
    );
}
