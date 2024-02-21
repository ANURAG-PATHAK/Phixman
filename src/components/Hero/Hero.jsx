// Hero.jsx
import React from "react";
import "./Hero.css";
import { images } from "../../constants"; // Assume your images are stored here

const Hero = () => {
  return (
    <div className="hero">
      <div className="carousel">
        {/* Loop through images for carousel */}
        {[
          images.heroImage,
          images.heroImage,
          images.heroImage,
          images.heroImage,
        ].map((image, index) => (
          <div key={index} className="carousel-item">
            <img
              src={image}
              alt={`Carousel ${index}`}
              className="carousel-image"
            />
          </div>
        ))}
      </div>
      <div className="input-container">
        <select className="location-select">
          <option value="delhi">Delhi</option>
          {/* other options */}
        </select>
        <input
          type="text"
          className="service-input"
          placeholder="search service..."
        />
        <button className="search-btn">Go For It</button>
      </div>
    </div>
  );
};

export default Hero;
