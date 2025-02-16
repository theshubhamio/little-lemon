import React from 'react';
import HeroSection from './HeroSection';
import MenuSection from './MenuSection';
import Testimonials from './Testimonials';
import AboutSection from './AboutSection';

const Main = () => {
    return (
        <main>
            <HeroSection />
            <MenuSection />
            <Testimonials />
            <AboutSection />
        </main>
    );
};

export default Main;