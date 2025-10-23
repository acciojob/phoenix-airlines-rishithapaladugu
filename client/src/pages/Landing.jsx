import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="page center">
      <h1>Phoenix Airlines</h1>
      <Link to="/flight-search">
        <button>Book a Flight</button>
      </Link>
    </div>
  );
}
