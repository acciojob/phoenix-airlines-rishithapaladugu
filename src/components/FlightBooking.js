import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const FlightBooking = () => {
  const history = useHistory();
  const location = useLocation();
  const { flight, tripType, source, destination, date } = location.state || {};

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  if (!flight) {
    // If someone navigates here without search, redirect to home
    history.replace("/flight-search");
    return null;
  }

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name required";
    if (!email) {
      newErrors.email = "Email required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email format";
    }
    if (!phone) newErrors.phone = "Phone required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    history.push("/confirmation", {
      flight,
      tripType,
      source,
      destination,
      date,
      name,
      email,
      phone,
    });
  };

  return (
    <div>
      <h1>Flight Booking Form</h1>
      <p>Flight: {flight}</p>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>
      <div>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <div>
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
      </div>
      <button onClick={handleSubmit}>Confirm Booking</button>
    </div>
  );
};

export default FlightBooking;
