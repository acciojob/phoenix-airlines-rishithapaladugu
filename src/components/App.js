

// This is the main App component - the root of our entire application
// It sets up routing, Redux store, and renders all our pages

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

// Import all our page components
import LandingPage from './LandingPage';
import FlightSearch from './FlightSearch';
import FlightBooking from './FlightBooking';
import Confirmation from './Confirmation';

// Import global styles
import './../styles/App.css';

const App = () => {
  return (
    // Provider makes Redux store available to all components
    <Provider store={store}>
      {/* Router enables navigation between different pages */}
      <Router>
        <div className="app">
          {/* Switch ensures only one route is rendered at a time */}
          <Switch>
            {/* Route for home page - exact means it only matches exactly "/" */}
            <Route exact path="/" component={LandingPage} />
            
            {/* Route for flight search page */}
            <Route path="/flight-search" component={FlightSearch} />
            
            {/* Route for flight booking page */}
            <Route path="/flight-booking" component={FlightBooking} />
            
            {/* Route for confirmation page */}
            <Route path="/confirmation" component={Confirmation} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
