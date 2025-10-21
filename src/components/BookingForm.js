// src/components/BookingForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setBooking } from "../store";
import { useHistory } from "react-router-dom";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleBooking = () => {
    if (!name || !email || !phone) {
      alert("All fields are required!");
      return;
    }

    dispatch(setBooking({ name, email, phone }));
    history.push("/confirmation");
  };

  return (
    <div>
      <h2>Booking Form</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleBooking}>Confirm Booking</button>
    </div>
  );
}
