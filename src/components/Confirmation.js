import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { resetBooking } from '../store/actions/bookingActions';

const Confirmation = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { confirmedBooking } = useSelector(state => state.booking);

  // Redirect if no confirmed booking
  if (!confirmedBooking) {
    history.push('/');
    return null;
  }

  const handleReturnHome = () => {
    dispatch(resetBooking());
    history.push('/');
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

  const { flight, passenger, confirmationNumber, bookingDate } = confirmedBooking;

  return (
    <div className="confirmation">
      <div className="confirmation-container">
        <div className="confirmation-header">
          <div className="success-icon">✓</div>
          <h2>Booking Confirmed!</h2>
          <p className="confirmation-message">
            Your flight has been successfully booked. A confirmation email has been sent to <strong>{passenger.email}</strong>.
          </p>
        </div>

        <div className="confirmation-details">
          <div className="confirmation-card">
            <h3>Booking Information</h3>
            <div className="info-grid">
              <div className="info-item">
                <label>Confirmation Number</label>
                <span className="confirmation-number">{confirmationNumber}</span>
              </div>
              <div className="info-item">
                <label>Booking Date</label>
                <span>{formatDate(bookingDate)}</span>
              </div>
              <div className="info-item">
                <label>Flight Type</label>
                <span>{confirmedBooking.flightType === 'one-way' ? 'One-way' : 'Round-trip'}</span>
              </div>
            </div>
          </div>

          <div className="confirmation-card">
            <h3>Passenger Information</h3>
            <div className="info-grid">
              <div className="info-item">
                <label>Name</label>
                <span>{passenger.name}</span>
              </div>
              <div className="info-item">
                <label>Email</label>
                <span>{passenger.email}</span>
              </div>
              <div className="info-item">
                <label>Phone</label>
                <span>{passenger.phone}</span>
              </div>
            </div>
          </div>

          <div className="confirmation-card">
            <h3>Flight Details</h3>
            <div className="flight-details">
              <div className="airline-info">
                <h4>{flight.airline}</h4>
                <p>Flight {flight.flightNumber}</p>
              </div>
              
              <div className="route-details">
                <div className="departure">
                  <div className="time">{formatTime(flight.departure.time)}</div>
                  <div className="city">{flight.departure.city}</div>
                  <div className="date">{formatDate(flight.departure.date)}</div>
                </div>
                
                <div className="flight-info">
                  <div className="duration">{flight.duration}</div>
                  <div className="stops">
                    {flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
                  </div>
                </div>
                
                <div className="arrival">
                  <div className="time">{formatTime(flight.arrival.time)}</div>
                  <div className="city">{flight.arrival.city}</div>
                  <div className="date">{formatDate(flight.arrival.date)}</div>
                </div>
              </div>
              
              <div className="price-section">
                <div className="total-price">
                  <span className="price-label">Total Price:</span>
                  <span className="price-value">${flight.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="confirmation-actions">
          <button onClick={handleReturnHome} className="home-button">
            Return to Home
          </button>
        </div>

        <div className="booking-tips">
          <h4>Important Information</h4>
          <ul>
            <li>Please arrive at the airport at least 2 hours before departure for domestic flights</li>
            <li>Bring a valid photo ID and your confirmation number</li>
            <li>Check-in online 24 hours before your flight</li>
            <li>Contact Phoenix Airlines customer service for any changes or cancellations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
