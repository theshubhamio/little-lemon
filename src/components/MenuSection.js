import React from 'react';
import '../styles/MenuSection.css';
import FoodItem from './FoodItem';

const MenuSection = () => {
    const dummyData = [
        { image: require('../images/Logo.svg').default, name: 'Food Item 1', price: '$10', description: 'Delicious food item 1' },
        { image: require('../images/Logo.svg').default, name: 'Food Item 2', price: '$12', description: 'Delicious food item 2' },
        { image: require('../images/Logo.svg').default, name: 'Food Item 3', price: '$15', description: 'Delicious food item 3' },
        { image: require('../images/Logo.svg').default, name: 'Food Item 4', price: '$8', description: 'Delicious food item 4' },
        { image: require('../images/Logo.svg').default, name: 'Food Item 5', price: '$9', description: 'Delicious food item 5' },
        { image: require('../images/Logo.svg').default, name: 'Food Item 6', price: '$11', description: 'Delicious food item 6' },
    ];

    return (
        <section className="menu-section">
            <div className="menu-header">
                <h2 className="menu-title">This Week's Special</h2>
                <button className="menu-button">Online Menu</button>
            </div>
            <div className="food-list">
                {dummyData.map((item, index) => (
                    <FoodItem key={index} {...item} />
                ))}
            </div>
        </section>
    );
};

export default MenuSection;