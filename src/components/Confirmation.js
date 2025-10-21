// src/components/Confirmation.js
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Confirmation() {
  const booking = useSelector((state) => state.flights.booking);

  return (
    <div>
      <h2>Booking Confirmation</h2>
      {booking ? (
        <div>
          <p>Name: {booking.name}</p>
          <p>Email: {booking.email}</p>
          <p>Phone: {booking.phone}</p>
        </div>
      ) : (
        <p>No booking details found.</p>
      )}
      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </div>
  );
}
