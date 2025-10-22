// src/components/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FlightSearch from "./FlighSearch";
import FlightBooking from "./FlightBooking";
import Confirmation from "./Confirmation";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FlightSearch} />
        <Route path="/flight-search" component={FlightSearch} />
        <Route path="/flight-booking" component={FlightBooking} />
        <Route path="/confirmation" component={Confirmation} />
      </Switch>
    </Router>
  );
};

export default App;
