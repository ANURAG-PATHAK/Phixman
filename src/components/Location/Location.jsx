// Components/LocationSection.js
import React from "react";
import "./Location.css";
import { images } from "../../constants";

function LocationCard({ location, image }) {
  return (
    <div className="location-card">
      <img src={image} alt={`${location} icon`} />
      <div className="location-name">{location}</div>
    </div>
  );
}

function Location() {
  return (
    <div className="location-section">
      <div className="info">
        <div className="info-text">
          We are Phixing in 110+ Locations
          {/* Include more text here as needed */}
        </div>
        {/* The bullet points should be included here. */}
        {/* A `ul` element with `li` children can be used. */}
      </div>
      <div className="locations">
        <h2>Find your Phixman Location</h2>
        <div className="location-cards">
          {/* Iterate over location data, which should ideally come from props or state */}
          <LocationCard location="Delhi" image={images.delhi} />
          <LocationCard location="Mumbai" image={images.mumbai} />
          {/* Include other locations as needed */}
        </div>
        <div className="location-search-bar">
          <input type="text" placeholder="Enter Zip Code" />
          <button>Go</button>
        </div>
        <div className="footer-text">
          Delhi . Bangalore . Mumbai . Delhi . Bangalore . Mumbai . Delhi .
          Bangalore . Mumbai . Delhi . Bangalore . Mumbai . Delhi . Bangalore .
          Mumbai
        </div>
      </div>
    </div>
  );
}

export default Location;
