import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing">
      <div className="hero-section">
        <div className="hero-content">
          <h2>Welcome to Phoenix Airlines</h2>
          <p>Your journey begins here. Book flights to destinations worldwide with ease and comfort.</p>
          <div className="hero-features">
            <div className="feature">
              <h3>✈️ Best Routes</h3>
              <p>Connect to major cities worldwide</p>
            </div>
            <div className="feature">
              <h3>💰 Great Prices</h3>
              <p>Competitive fares for every budget</p>
            </div>
            <div className="feature">
              <h3>🎯 Easy Booking</h3>
              <p>Simple and secure booking process</p>
            </div>
          </div>
          <Link to="/flight-search" className="cta-button">
            Search Flights
          </Link>
        </div>
      </div>
      
      <div className="info-section">
        <div className="info-content">
          <h3>Why Choose Phoenix Airlines?</h3>
          <div className="info-grid">
            <div className="info-card">
              <h4>Reliable Service</h4>
              <p>On-time departures and arrivals with excellent customer service.</p>
            </div>
            <div className="info-card">
              <h4>Modern Fleet</h4>
              <p>State-of-the-art aircraft with comfortable seating and amenities.</p>
            </div>
            <div className="info-card">
              <h4>Safety First</h4>
              <p>Industry-leading safety standards and experienced pilots.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
