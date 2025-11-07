// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import LandingPage from './components/LandingPage';
import FlightSearch from './components/FlightSearch';
import FlightBooking from './components/FlightBooking';
import Confirmation from './components/Confirmation';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/flight-search" component={FlightSearch} />
                    <Route path="/flight-booking" component={FlightBooking} />
                    <Route path="/confirmation" component={Confirmation} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
