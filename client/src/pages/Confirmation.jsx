import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Confirmation() {
  const navigate = useNavigate();
  const { bookingId } = useLocation().state || {};

  return (
    <div className="page center">
      <h2>Booking Confirmed ✅</h2>
      <p>
        Reference: <strong>{bookingId}</strong>
      </p>
      <p>Thank you for flying Phoenix Airlines.</p>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}
