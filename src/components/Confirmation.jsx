import React from "react";
import { useHistory } from "react-router-dom";

const Confirmation = () => {
  const history = useHistory();
  const booking = JSON.parse(localStorage.getItem("bookingDetails"));

  if (!booking || !booking.flight) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>No Booking Found</h1>
        <button onClick={() => history.push("/")}>Back to Home</button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Booking Confirmation</h1>
      <p>Flight: {booking.flight.airline}</p>
      <p>From: {booking.flight.from} → To: {booking.flight.to}</p>
      <p>Date: {booking.flight.date} • Time: {booking.flight.time}</p>
      <p>Name: {booking.name}</p>
      <p>Email: {booking.email}</p>
      <p>Phone: {booking.phone}</p>
      <button onClick={() => history.push("/")}>Back to Home</button>
    </div>
  );
};

export default Confirmation;
