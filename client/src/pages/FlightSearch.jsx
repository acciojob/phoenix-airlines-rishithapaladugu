import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearch } from "../redux/searchSlice";
import { searchFlights } from "../api";

export default function FlightSearch() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const search = useSelector((state) => state.search);

  const [flights, setFlights] = useState([]);
  const [returnFlights, setReturnFlights] = useState([]);

  useEffect(() => {
    if (search.source && search.destination && search.date) {
      searchFlights({
        source: search.source,
        destination: search.destination,
        date: search.date,
      }).then(setFlights);

      if (search.type === "round-trip" && search.returnDate) {
        searchFlights({
          source: search.destination,
          destination: search.source,
          date: search.returnDate,
        }).then(setReturnFlights);
      }
    }
  }, [search]);

  const handleChange = (e) =>
    dispatch(setSearch({ [e.target.name]: e.target.value }));

  const selectFlight = (flight, returnFlight = null) => {
    dispatch({
      type: "booking/setSelectedFlight",
      payload: { flight, returnFlight },
    });
    navigate("/flight-booking");
  };

  return (
    <div className="page">
      <h2>Search Flights</h2>

      <div className="form">
        <label>Trip type</label>
        <select name="type" value={search.type} onChange={handleChange}>
          <option value="one-way">One-way</option>
          <option value="round-trip">Round-trip</option>
        </select>

        <input
          name="source"
          placeholder="From"
          value={search.source}
          onChange={handleChange}
        />
        <input
          name="destination"
          placeholder="To"
          value={search.destination}
          onChange={handleChange}
        />
        <input
          name="date"
          type="date"
          value={search.date}
          onChange={handleChange}
        />

        {search.type === "round-trip" && (
          <input
            name="returnDate"
            type="date"
            value={search.returnDate}
            onChange={handleChange}
          />
        )}

        <button onClick={() => window.location.reload()}>Search</button>
      </div>

      <h3>Available Flights</h3>
      {flights.map((f) => (
        <div key={f._id} className="flight-card">
          <span>{f.flightNumber}</span>
          <span>
            {f.source} → {f.destination}
          </span>
          <span>₹{f.price}</span>
          {search.type === "one-way" && (
            <button className="book-flight" onClick={() => selectFlight(f)}>
              Book
            </button>
          )}
        </div>
      ))}

      {search.type === "round-trip" && (
        <>
          <h3>Return Flights</h3>
          {returnFlights.map((ret) => (
            <div key={ret._id} className="flight-card">
              <span>{ret.flightNumber}</span>
              <span>
                {ret.source} → {ret.destination}
              </span>
              <span>₹{ret.price}</span>
              <button
                className="book-flight"
                onClick={() => selectFlight(flights[0], ret)}
              >
                Book Pair
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
