import React from 'react';
import './map.css';
import logo from './logo.png';
function LoadingScreen(props) {
  return (
    <div className="loading">
      <div className="centered-div">
        <img src={logo} className="logo" alt="logo" />
      </div>
    </div>
  );
}

export default LoadingScreen;
