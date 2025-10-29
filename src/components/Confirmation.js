import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const Confirmation = () => {
  const history = useHistory();
  const location = useLocation();
  const booking = location.state;

  if (!booking) {
    history.replace("/"); // Redirect if accessed directly
    return null;
  }

  const handleBack = () => {
    history.push("/");
  };

  return (
    <div>
      <h1>Booking Confirmation</h1>
      <p>Flight: {booking.flight}</p>
      <p>Trip Type: {booking.tripType}</p>
      <p>Source: {booking.source}</p>
      <p>Destination: {booking.destination}</p>
      <p>Date: {booking.date}</p>
      <p>Name: {booking.name}</p>
      <p>Email: {booking.email}</p>
      <p>Phone: {booking.phone}</p>
      <button onClick={handleBack}>Back to Home</button>
    </div>
  );
};

export default Confirmation;
