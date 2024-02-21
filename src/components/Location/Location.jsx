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
        <div className="info-text">We are Phixing in 110+ Locations</div>
      </div>
      <div className="locations">
        <h2>Find your Phixman Location</h2>
        <div className="location-cards">
          <LocationCard location="Delhi" image={images.delhi} />
          <LocationCard location="Mumbai" image={images.mumbai} />
          <LocationCard location="Mumbai" image={images.kolkata} />
          <LocationCard location="Mumbai" image={images.pune} />
          <LocationCard location="Mumbai" image={images.lucknow} />
          <LocationCard location="Mumbai" image={images.agra} />
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
