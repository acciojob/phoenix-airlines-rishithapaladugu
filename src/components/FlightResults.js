import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setBookingDetails } from '../store/actions/bookingActions';

const FlightResults = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { flights, flightType, searchParams } = useSelector(state => state.flights);

  const handleBookFlight = (flight) => {
    dispatch(setBookingDetails({
      selectedFlight: flight,
      flightType,
      searchParams
    }));
    history.push('/flight-booking');
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

  if (flights.length === 0) {
    return (
      <div className="flight-results">
        <div className="results-container">
          <h2>No flights found</h2>
          <p>Please try different search criteria.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flight-results">
      <div className="results-container">
        <div className="results-header">
          <h2>Available Flights</h2>
          <div className="search-summary">
            <p>
              <strong>{searchParams.from}</strong> to <strong>{searchParams.to}</strong>
            </p>
            <p>{formatDate(searchParams.departureDate)}</p>
            {flightType === 'round-trip' && searchParams.returnDate && (
              <p>Return: {formatDate(searchParams.returnDate)}</p>
            )}
          </div>
        </div>

        <div className="flights-list">
          {flights.map(flight => (
            <div key={flight.id} className="flight-card">
              <div className="flight-info">
                <div className="flight-airline">
                  <h3>{flight.airline}</h3>
                  <p className="flight-number">{flight.flightNumber}</p>
                </div>

                <div className="flight-route">
                  <div className="departure">
                    <div className="time">{formatTime(flight.departure.time)}</div>
                    <div className="city">{flight.departure.city}</div>
                  </div>
                  
                  <div className="flight-duration">
                    <div className="duration">{flight.duration}</div>
                    <div className="stops">
                      {flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
                    </div>
                  </div>
                  
                  <div className="arrival">
                    <div className="time">{formatTime(flight.arrival.time)}</div>
                    <div className="city">{flight.arrival.city}</div>
                  </div>
                </div>
              </div>

              <div className="flight-price">
                <div className="price">${flight.price}</div>
                <button 
                  className="book-flight"
                  onClick={() => handleBookFlight(flight)}
                >
                  Book Flight
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightResults;
