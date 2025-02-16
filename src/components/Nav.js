import React from 'react';
import '../styles/Nav.css'; // Import the CSS file

const Nav = () => {
    return (
        <nav className="nav-container">
            <ul className="nav-list">
                <li><a href="/home">Home</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order-online">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
};

export default Nav;