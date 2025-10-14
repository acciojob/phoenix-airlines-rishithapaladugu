import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setFlightType, setSearchParams, searchFlights } from '../store/actions/flightActions';

const FlightSearch = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { flightType, searchParams } = useSelector(state => state.flights);
  
  const [formData, setFormData] = useState({
    from: searchParams.from || '',
    to: searchParams.to || '',
    departureDate: searchParams.departureDate || '',
    returnDate: searchParams.returnDate || ''
  });

  const [errors, setErrors] = useState({});

  const cities = [
    'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia',
    'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville',
    'Fort Worth', 'Columbus', 'Charlotte', 'San Francisco', 'Indianapolis',
    'Seattle', 'Denver', 'Washington', 'Boston', 'El Paso', 'Nashville',
    'Detroit', 'Oklahoma City', 'Portland', 'Las Vegas', 'Memphis', 'Louisville'
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.from.trim()) {
      newErrors.from = 'Please select departure city';
    }
    if (!formData.to.trim()) {
      newErrors.to = 'Please select destination city';
    }
    if (formData.from === formData.to) {
      newErrors.to = 'Destination must be different from departure';
    }
    if (!formData.departureDate) {
      newErrors.departureDate = 'Please select departure date';
    }
    if (flightType === 'round-trip' && !formData.returnDate) {
      newErrors.returnDate = 'Please select return date';
    }
    if (flightType === 'round-trip' && formData.returnDate && formData.departureDate) {
      if (new Date(formData.returnDate) <= new Date(formData.departureDate)) {
        newErrors.returnDate = 'Return date must be after departure date';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
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

  const handleFlightTypeChange = (type) => {
    dispatch(setFlightType(type));
    if (type === 'one-way') {
      setFormData(prev => ({
        ...prev,
        returnDate: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      dispatch(setSearchParams(formData));
      dispatch(searchFlights({
        ...formData,
        flightType
      }));
      history.push('/flight-search/results');
    }
  };

  return (
    <div className="flight-search">
      <div className="search-container">
        <h2>Search Flights</h2>
        
        <div className="flight-type-selector">
          <button
            className={`flight-type-btn ${flightType === 'one-way' ? 'active' : ''}`}
            onClick={() => handleFlightTypeChange('one-way')}
          >
            One-way
          </button>
          <button
            className={`flight-type-btn ${flightType === 'round-trip' ? 'active' : ''}`}
            onClick={() => handleFlightTypeChange('round-trip')}
          >
            Round-trip
          </button>
        </div>

        <form onSubmit={handleSubmit} className="search-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="from">From</label>
              <select
                id="from"
                name="from"
                value={formData.from}
                onChange={handleInputChange}
                className={errors.from ? 'error' : ''}
              >
                <option value="">Select departure city</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              {errors.from && <span className="error-message">{errors.from}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="to">To</label>
              <select
                id="to"
                name="to"
                value={formData.to}
                onChange={handleInputChange}
                className={errors.to ? 'error' : ''}
              >
                <option value="">Select destination city</option>
                {cities.filter(city => city !== formData.from).map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              {errors.to && <span className="error-message">{errors.to}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="departureDate">Departure Date</label>
              <input
                type="date"
                id="departureDate"
                name="departureDate"
                value={formData.departureDate}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
                className={errors.departureDate ? 'error' : ''}
              />
              {errors.departureDate && <span className="error-message">{errors.departureDate}</span>}
            </div>

            {flightType === 'round-trip' && (
              <div className="form-group">
                <label htmlFor="returnDate">Return Date</label>
                <input
                  type="date"
                  id="returnDate"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleInputChange}
                  min={formData.departureDate || new Date().toISOString().split('T')[0]}
                  className={errors.returnDate ? 'error' : ''}
                />
                {errors.returnDate && <span className="error-message">{errors.returnDate}</span>}
              </div>
            )}
          </div>

          <button type="submit" className="search-button">
            Search Flights
          </button>
        </form>
      </div>
    </div>
  );
};

export default FlightSearch;
