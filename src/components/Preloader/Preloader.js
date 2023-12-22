import './Preloader.css';
import React from 'react';

function Preloader(isLoading) {
  const preloaderClassName = `preloader ${isLoading ? "preloader_active" : ""}`
  return (
    <div className={preloaderClassName}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
        <p></p>
      </div>
    </div>
  );
};

export default Preloader;
