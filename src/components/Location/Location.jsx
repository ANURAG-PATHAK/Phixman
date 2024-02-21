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
      <div
        className="info"
        style={{ backgroundImage: `url(${images.crackedBg})` }}
      >
        <ul>
          <li className="info-text-heading">
            We are Phixing in 110+ Locations
          </li>
          <div className="info-text-text">
            Free mobile pick up and delivery service. Mobile repair at home.
            Book a pick up Now!{" "}
          </div>
          <li className="info-text-heading">Locate Nearest Service Centers</li>
          <div className="info-text-text">
            Easily find the nearest Phixman service centers based on your
            location. Our extensive network ensures that help is just around the
            corner.
          </div>
          <li className="info-text-heading">Timings and Contact Information</li>
          <div className="info-text-text">
            View operating hours and contact information for each service center
            directly on the map. Know when we're available and how to get in
            touch.
          </div>
          <li className="info-text-heading">
            Schedule Appointments or Walk-ins
          </li>
          <div className="info-text-text">
            Whether you prefer to book an appointment or walk in, we're ready to
            assist you. Schedule a convenient time or visit us without prior
            booking.
          </div>
        </ul>
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

        <div className="footer-text">
          Delhi . Bangalore . Mumbai . Delhi . Bangalore . Mumbai . Delhi .
          Bangalore . Mumbai . Delhi . Bangalore . Mumbai . Delhi . Bangalore .
          Mumbai . Mumbai . Delhi . Bangalore . Mumbai . Delhi . Bangalore .
          Mumbai . Mumbai . Delhi . Bangalore . Mumbai . Delhi . Bangalore .
          Mumbai . Mumbai . Delhi . Bangalore . Mumbai . Delhi . Bangalore .
          Mumbai
        </div>
        <div className="location-search-bar">
          <input type="text" placeholder="Enter Zip Code" />
          <button>Go</button>
        </div>
      </div>
    </div>
  );
}

export default Location;
