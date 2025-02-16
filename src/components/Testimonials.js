import React from 'react';
import '../styles/Testimonials.css';
import FeedbackItem from './FeedbackItem';

const Testimonials = () => {
    const dummyData = [
        { rating: '⭐⭐⭐⭐⭐', image: require('../images/Logo.svg').default, name: 'User 1', review: 'Great food and atmosphere!' },
        { rating: '⭐⭐⭐⭐', image: require('../images/Logo.svg').default, name: 'User 2', review: 'Really enjoyed the meal.' },
        { rating: '⭐⭐⭐⭐⭐', image: require('../images/Logo.svg').default, name: 'User 3', review: 'Amazing experience!' },
        { rating: '⭐⭐⭐⭐', image: require('../images/Logo.svg').default, name: 'User 4', review: 'Loved the service.' },
        { rating: '⭐⭐⭐⭐⭐', image: require('../images/Logo.svg').default, name: 'User 5', review: 'Best restaurant in town!' },
        { rating: '⭐⭐⭐⭐', image: require('../images/Logo.svg').default, name: 'User 6', review: 'Will come again.' },
        { rating: '⭐⭐⭐⭐⭐', image: require('../images/Logo.svg').default, name: 'User 7', review: 'Highly recommend!' },
        { rating: '⭐⭐⭐⭐', image: require('../images/Logo.svg').default, name: 'User 8', review: 'Fantastic food.' },
    ];

    return (
        <section className="testimonials">
            <h2 className="testimonials-title">Testimonials</h2>
            <div className="feedback-list">
                {dummyData.map((item, index) => (
                    <FeedbackItem key={index} {...item} />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;