import React from 'react';

const Header = () => {
    return (
        <header>
            <img src={require('../images/Logo.svg').default} alt="Little Lemon Logo" />
        </header>
    );
};

export default Header;