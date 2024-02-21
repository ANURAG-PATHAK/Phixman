import React from "react";
import "./PopularService.css";

// Placeholder for images source.
// You need to replace these with your actual image paths or URLs.
const images = {
  service1: "path-to-service1-image.jpg",
  service2: "path-to-service2-image.jpg",
  service3: "path-to-service3-image.jpg",
  // ... other images
};

const ServiceCard = ({ title, price, originalPrice, rating, image }) => (
  <div className="service-card">
    <img src={image} alt={title} className="service-image" />
    <div className="service-info">
      <div className="service-rating">{rating}</div>
      <h3 className="service-title">{title}</h3>
      <div className="service-pricing">
        <span className="service-price">{price}</span>
        <span className="service-original-price">{originalPrice}</span>
      </div>
    </div>
  </div>
);

const PopularService = () => (
  <div className="services-section">
    <h2>Explore Popular Services</h2>
    <div className="services-tab">
      <button>Phones</button>
      <button>Laptops</button>
      <button>AC</button>
    </div>
    <div className="service-cards-container">
      <ServiceCard
        title="Foam & Power Jet AC Service (Split)"
        price="₹599"
        originalPrice="₹699"
        rating="4.5 (2K)"
        image={images.service1}
      />
      <ServiceCard
        title="OnePlus 9R 5G - Refurbished"
        price="₹19,399"
        originalPrice="₹39,000"
        rating="4.5 (2K)"
        image={images.service2}
      />
      {/* Add more ServiceCard components as needed */}
    </div>
    <div className="popular-service">
      <div className="scroller">
        <span className="text-item">Air Conditioner</span>
        <span className="dot-icon">•</span>
        <span className="text-item">Refrigerator</span>
        <span className="dot-icon">•</span>
        <span className="text-item">Printer</span>
        <span className="dot-icon">•</span>
        <span className="text-item">Smartwatch</span>
        <span className="dot-icon">•</span>
        {/* Repeat the items to allow a continuous scrolling effect */}
        <span className="text-item">Air Conditioner</span>
        <span className="dot-icon">•</span>
        <span className="text-item">Refrigerator</span>
        <span className="dot-icon">•</span>
        <span className="text-item">Printer</span>
        <span className="dot-icon">•</span>
        <span className="text-item">Smartwatch</span>
      </div>
    </div>
  </div>
);

export default PopularService;
