import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const flightsData = [
  { id: 1, airline: "Phoenix Air", from: "Bengaluru", to: "Mumbai", date: "2025-09-25", time: "06:00", price: 3500 },
  { id: 2, airline: "SkyLine", from: "Bengaluru", to: "Mumbai", date: "2025-09-25", time: "12:30", price: 4200 },
  { id: 3, airline: "CloudWays", from: "Bengaluru", to: "Mumbai", date: "2025-09-25", time: "19:45", price: 3900 },
];

const FlightSearch = () => {
  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState([]);
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!from || !to || !date) return alert("Please fill all fields");

    const filtered = flightsData.filter(
      (f) => f.from === from && f.to === to && f.date === date
    );

    setResults(filtered);
  };

  const handleBook = (flight) => {
    localStorage.setItem("selectedFlight", JSON.stringify({ flight, tripType }));
    history.push("/flight-booking");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Search Flights</h2>

      <form onSubmit={handleSearch}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            <input
              type="radio"
              name="trip"
              value="oneway"
              checked={tripType === "oneway"}
              onChange={() => setTripType("oneway")}
            /> One-way
          </label>
          <label style={{ marginLeft: "10px" }}>
            <input
              type="radio"
              name="trip"
              value="round"
              checked={tripType === "round"}
              onChange={() => setTripType("round")}
            /> Round-trip
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <input
            type="text"
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button type="submit">Search</button>
      </form>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {results.length === 0 && from && to && date && <li>No flights found</li>}
        {results.map((f) => (
          <li
            key={f.id}
            style={{
              border: "1px solid gray",
              margin: "10px auto",
              padding: "10px",
              maxWidth: "400px",
              textAlign: "left",
            }}
          >
            <p>{f.airline}</p>
            <p>{f.from} → {f.to}</p>
            <p>{f.date} • {f.time}</p>
            <p>₹{f.price}</p>
            <button onClick={() => handleBook(f)}>Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightSearch;
