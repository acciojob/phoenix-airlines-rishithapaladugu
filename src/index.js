import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the main App component
import './index.css'; // Optional: Import your CSS styles
import reportWebVitals from './reportWebVitals'; // Optional: For measuring performance

// Render the App component into the root element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional: For measuring performance
reportWebVitals();
