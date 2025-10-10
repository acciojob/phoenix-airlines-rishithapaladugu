import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const FlightBooking = () => {
  const history = useHistory();
  const selected = JSON.parse(localStorage.getItem("selectedFlight"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleConfirm = () => {
    if (!name || !email || !phone) return alert("Fill all fields");
    localStorage.setItem(
      "bookingDetails",
      JSON.stringify({ flight: selected.flight, name, email, phone })
    );
    history.push("/confirmation");
  };

  if (!selected || !selected.flight) return <p>No flight selected</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Flight Booking</h2>
      <p>{selected.flight.airline} | {selected.flight.from} → {selected.flight.to}</p>

      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button onClick={handleConfirm} style={{ marginTop: "10px" }}>Confirm Booking</button>
    </div>
  );
};

export default FlightBooking;
