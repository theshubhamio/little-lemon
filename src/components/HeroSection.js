import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-text">
                <h1 className="hero-title">Little Lemon</h1>
                <h2 className="hero-location">Chicago</h2>
                <p className="hero-description">
                    Welcome to Little Lemon, a cozy place where you can enjoy delicious meals and a warm atmosphere. 
                    Our menu features a variety of dishes made with fresh ingredients.
                </p>
                <button className="reserve-button">Reserve a Table</button>
            </div>
            <div className="hero-image-container">
                <img src={require('../images/Logo.svg').default} alt="Little Lemon Interior" className="hero-image" />
            </div>
        </section>
    );
};

export default HeroSection;