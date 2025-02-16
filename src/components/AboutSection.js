import React from 'react';
import '../styles/AboutSection.css';

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="about-text">
                <h1 className="about-title">Little Lemon</h1>
                <h2 className="about-location">Chicago</h2>
                <p className="about-description">
                    Little Lemon is a cozy place where you can enjoy delicious meals and a warm atmosphere. Our menu features a variety of dishes made with fresh ingredients. We are located in the heart of Chicago and are committed to providing the best dining experience for our customers.
                </p>
            </div>
            <div className="about-image-container">
                <img src={require('../images/Logo.svg').default} alt="About Little Lemon" className="about-image" />
            </div>
        </section>
    );
};

export default AboutSection;