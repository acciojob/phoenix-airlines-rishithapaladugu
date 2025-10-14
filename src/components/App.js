import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Header from './Header';
import Landing from './Landing';
import FlightSearch from './FlightSearch';
import FlightResults from './FlightResults';
import FlightBooking from './FlightBooking';
import Confirmation from './Confirmation';
import './../styles/App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/flight-search" component={FlightSearch} />
              <Route path="/flight-search/results" component={FlightResults} />
              <Route path="/flight-booking" component={FlightBooking} />
              <Route path="/confirmation" component={Confirmation} />
            </Switch>
          </main>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
