import React from 'react';
import Nav from './Nav';
import '../styles/Header.css'; // Import the CSS file


const Header = () => {
    return (
        <header className="header">
            <img src={require('../images/Logo.svg').default} alt="Little Lemon Logo" className="logo" />
            <Nav />
        </header>
    );
};

export default Header;