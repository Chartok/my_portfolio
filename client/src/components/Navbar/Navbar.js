// Navigation.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../styles/Navigation.scss"

export default function Navigation() {
    const sections = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/projects', label: 'Projects' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <ul className='navbar-nav ml-auto'>
            {sections.map((section) => (
                <li className='nav-item' key={section.path}>
                    <NavLink
                        to={section.path}
                        className='nav-link'
                        activeclassname='active'>
                        {section.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}
