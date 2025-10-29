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
      <p>Thank you for booking with Phoenix Airlines!</p>
      <p><strong>Flight:</strong> {booking.flight}</p>
      <p><strong>Trip Type:</strong> {booking.tripType}</p>
      <p><strong>Source:</strong> {booking.source}</p>
      <p><strong>Destination:</strong> {booking.destination}</p>
      <p><strong>Date:</strong> {booking.date}</p>
      <p><strong>Name:</strong> {booking.name}</p>
      <p><strong>Email:</strong> {booking.email}</p>
      <p><strong>Phone:</strong> {booking.phone}</p>
      <button onClick={handleBack}>Back to Home</button>
    </div>
  );
};

export default Confirmation;
