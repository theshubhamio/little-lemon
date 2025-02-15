import React from 'react';

const Footer = () => {
    return (
        <footer style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: '#f8f8f8' }}>
            <div>
                <img src={require('../images/Logo.svg').default} alt="Logo" style={{ height: '50px' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
                <div>
                    <h4>Doormat Menu</h4>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order-online">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Contact</h4>
                    <p>1234 Street Name, City, State</p>
                    <p>(123) 456-7890</p>
                </div>
                <div>
                    <h4>Social Media</h4>
                    <p>Email: info@example.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;