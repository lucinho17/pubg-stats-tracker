import React from 'react';
import './LoadingSpinner.css'; // We will create this file

function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
      <p>Fetching stats...</p>
    </div>
  );
}

export default LoadingSpinner;
