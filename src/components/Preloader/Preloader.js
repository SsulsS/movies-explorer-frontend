import './Preloader.css';
import React from 'react';

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__container">
        <span className="preloader__round"></span>
        <p></p>
      </div>
    </div>
  );
};

export default Preloader;
