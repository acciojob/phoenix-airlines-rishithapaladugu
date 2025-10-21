// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Flight Booking App</h1>
      <Link to="/flight-search">
        <button>SEARCH FLIGHTS HERE</button>
      </Link>
    </div>
  );
}
