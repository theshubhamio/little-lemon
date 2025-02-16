import React from 'react';
import '../styles/FeedbackItem.css';

const FeedbackItem = ({ rating, image, name, review }) => {
    return (
        <div className="feedback-item">
            <div className="feedback-rating">{rating}</div>
            <img src={image} alt={name} className="feedback-image" />
            <h3 className="feedback-name">{name}</h3>
            <p className="feedback-review">{review}</p>
        </div>
    );
};

export default FeedbackItem;