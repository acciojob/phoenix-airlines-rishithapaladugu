import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import FlightSearch from "./FlightSearch";
import FlightBooking from "./FlightBooking";
import Confirmation from "./Confirmation";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/flight-search" component={FlightSearch} />
        <Route exact path="/flight-booking" component={FlightBooking} />
        <Route exact path="/confirmation" component={Confirmation} />
      </Switch>
    </Router>
  );
};

export default App;
