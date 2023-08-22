// Header.js
import React from 'react';
import '../styles/Navigation.scss'
import "../styles/Header.scss"
import Navigation from './Navigation';
import { Navbar, Nav } from 'react-bootstrap';

export default function Header({ activeSection, onSectionChange }) {
    return (
        <Navbar className="navbar navbar-brand navbar-nav">
            <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Navigation activeSection={activeSection} onSectionChange={onSectionChange} />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
