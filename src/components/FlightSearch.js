import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const FlightSearch = () => {
  const history = useHistory();
  const [tripType, setTripType] = useState("oneway");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = () => {
    // Check if all fields are filled
    if (!source || !destination || !date) {
      setError("Please fill all fields");
      setSearchResults([]);
      return;
    }

    // Validate that the selected date is in the future
    const selectedDate = new Date(date);
    const today = new Date();
    if (selectedDate < today) {
      setError("Please select a future date");
      setSearchResults([]);
      return;
    }

    setError("");

    // Simulate flight search results
    const flights = [
      `${source} → ${destination} on ${date}`,
      `${source} → ${destination} (Evening) on ${date}`,
    ];

    setSearchResults(flights);
  };

  const handleBook = (flight) => {
    // Navigate to the booking page with flight details
    history.push("/flight-booking", {
      flight,
      tripType,
      source,
      destination,
      date,
    });
  };

  return (
    <div>
      <h1>Flight Booking App</h1>

      <div>
        <label>
          <input
            type="radio"
            value="oneway"
            checked={tripType === "oneway"}
            onChange={() => setTripType("oneway")}
          />
          One-way
        </label>
        <label>
          <input
            type="radio"
            value="roundtrip"
            checked={tripType === "roundtrip"}
            onChange={() => setTripType("roundtrip")}
          />
          Round-trip
        </label>
      </div>

      <div>
        <input
          type="text"
          placeholder="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button className="book-flight" onClick={handleSearch}>
          Search
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {searchResults.length > 0 ? (
          searchResults.map((f, idx) => (
            <li key={idx}>
              {f}{" "}
              <button className="book-flight" onClick={() => handleBook(f)}>
                Book
              </button>
            </li>
          ))
        ) : (
          <li>No flights available</li>
        )}
      </ul>
    </div>
  );
};

export default FlightSearch;
