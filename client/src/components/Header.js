// Header.js
import React from 'react';
import Navigation from './Navigation';
// import { Navbar, Nav } from 'react-bootstrap';

export default function Header({ activeSection, onSectionChange }) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a href="#home" className='navbar-brand'>Portfolio</a>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav'>
                <span id='menu-icon' className='bx bx-menu'></span>
            </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <Navigation activeSection={activeSection} onSectionChange={onSectionChange} />
                </div>
            </nav>
        </header>
    );
}
