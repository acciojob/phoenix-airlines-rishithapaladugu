// src/components/FlightSearch.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchResults } from "../store";
import { useHistory } from "react-router-dom";

export default function FlightSearch() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSearch = () => {
    if (!source || !destination || !date) {
      alert("Please fill all fields");
      return;
    }

    const mockFlights = [
      { id: 1, source, destination, date, price: 5000 },
      { id: 2, source, destination, date, price: 7000 },
    ];

    dispatch(setSearchResults(mockFlights));
    history.push("/flight-booking");
  };

  return (
    <div>
      <h2>Flight Search</h2>
      <input
        type="text"
        placeholder="Source City"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <input
        type="text"
        placeholder="Destination City"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button className="book-flight" onClick={handleSearch}>
        SEARCH FLIGHT
      </button>
    </div>
  );
}
