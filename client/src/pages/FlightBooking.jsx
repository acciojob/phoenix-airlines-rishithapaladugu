import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createBooking } from "../api";

export default function FlightBooking() {
  const navigate = useNavigate();
  const { selectedFlight, selectedReturn } = useSelector(
    (state) => state.booking
  );

  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [err, setErr] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name required";
    if (!/^\S+@\S+$/.test(form.email)) e.email = "Valid email required";
    if (!/^\d{10}$/.test(form.phone)) e.phone = "10-digit phone required";
    setErr(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    const payload = {
      flightId: selectedFlight._id,
      returnFlightId: selectedReturn?._id || null,
      tripType: selectedReturn ? "round-trip" : "one-way",
      passenger: form,
    };
    const { bookingId } = await createBooking(payload);
    navigate("/confirmation", { state: { bookingId } });
  };

  return (
    <div className="page">
      <h2>Passenger Details</h2>

      <div className="form">
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {err.name && <small>{err.name}</small>}

        <input
          type="text"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {err.email && <small>{err.email}</small>}

        <input
          type="text"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        {err.phone && <small>{err.phone}</small>}

        <button onClick={handleSubmit}>Confirm Booking</button>
      </div>
    </div>
  );
}
