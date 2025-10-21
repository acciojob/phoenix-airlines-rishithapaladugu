import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import FlightSearch from "./FlightSearch";
import BookingForm from "./BookingForm";
import Confirmation from "./Confirmation";

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/flight-search">Search Flights</Link>
      </nav>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/flight-search" component={FlightSearch} />
        <Route path="/flight-booking" component={BookingForm} />
        <Route path="/confirmation" component={Confirmation} />
      </Switch>
    </div>
  );
}
