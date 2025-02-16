import React from 'react';
import '../styles/FoodItem.css';

const FoodItem = ({ image, name, price, description }) => {
    return (
        <div className="food-item">
            <img src={image} alt={name} className="food-image" />
            <div className="food-details">
                <h3 className="food-name">{name}</h3>
                <p className="food-price">{price}</p>
                <p className="food-description">{description}</p>
                <button className="order-button">Order a Delivery</button>
            </div>
        </div>
    );
};

export default FoodItem;