// Navigation.js
import React from 'react';
// import '../styles/Header.scss'
// import "../styles/Navigation.scss"
// import { Nav } from 'react-bootstrap';

export default function Navigation({ activeSection, onSectionChange }) {
    const sections = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <ul className='navbar-nav ml-auto'>
            {sections.map((section) => (
                <li className='nav-item' key={section.id}>
                    <a href={`#${section.id}`}
                        onClick={() => onSectionChange(section.id)}
                        active={activeSection === section.id}
                        className='nav-link'>
                        {section.label}
                    </a>
                </li>
            ))}
        </ul>
    );
}
