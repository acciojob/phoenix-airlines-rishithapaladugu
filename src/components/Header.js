import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>Phoenix Airlines</h1>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/flight-search" className="nav-link">Search Flights</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
