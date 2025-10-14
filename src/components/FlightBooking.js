import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { confirmBooking } from '../store/actions/bookingActions';

const FlightBooking = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { selectedFlight, flightType, searchParams } = useSelector(state => state.booking);
  
  const [passengerDetails, setPassengerDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});

  // Redirect if no flight is selected
  if (!selectedFlight) {
    history.push('/flight-search');
    return null;
  }

  const validateForm = () => {
    const newErrors = {};

    if (!passengerDetails.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (passengerDetails.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!passengerDetails.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(passengerDetails.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!passengerDetails.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(passengerDetails.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPassengerDetails(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const bookingData = {
        flight: selectedFlight,
        passenger: passengerDetails,
        flightType,
        searchParams,
        totalPrice: selectedFlight.price
      };

      dispatch(confirmBooking(bookingData));
      history.push('/confirmation');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="flight-booking">
      <div className="booking-container">
        <h2>Complete Your Booking</h2>
        
        <div className="booking-content">
          <div className="flight-summary">
            <h3>Flight Details</h3>
            <div className="summary-card">
              <div className="flight-info">
                <div className="airline">
                  <h4>{selectedFlight.airline}</h4>
                  <p>{selectedFlight.flightNumber}</p>
                </div>
                
                <div className="route">
                  <div className="departure">
                    <div className="time">{formatTime(selectedFlight.departure.time)}</div>
                    <div className="city">{selectedFlight.departure.city}</div>
                    <div className="date">{formatDate(selectedFlight.departure.date)}</div>
                  </div>
                  
                  <div className="flight-duration">
                    <div className="duration">{selectedFlight.duration}</div>
                    <div className="stops">
                      {selectedFlight.stops === 0 ? 'Non-stop' : `${selectedFlight.stops} stop${selectedFlight.stops > 1 ? 's' : ''}`}
                    </div>
                  </div>
                  
                  <div className="arrival">
                    <div className="time">{formatTime(selectedFlight.arrival.time)}</div>
                    <div className="city">{selectedFlight.arrival.city}</div>
                    <div className="date">{formatDate(selectedFlight.arrival.date)}</div>
                  </div>
                </div>
                
                <div className="price">
                  <span className="price-label">Price:</span>
                  <span className="price-value">${selectedFlight.price}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="passenger-form">
            <h3>Passenger Information</h3>
            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={passengerDetails.name}
                  onChange={handleInputChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="Enter your full name"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={passengerDetails.email}
                  onChange={handleInputChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="Enter your email address"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={passengerDetails.phone}
                  onChange={handleInputChange}
                  className={errors.phone ? 'error' : ''}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-actions">
                <button type="button" onClick={() => history.goBack()} className="back-button">
                  Back to Results
                </button>
                <button type="submit" className="confirm-booking">
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightBooking;
