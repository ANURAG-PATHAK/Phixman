import React from "react";
import "./PopularService.css";
import { images } from "../../constants";

const ServiceCard = ({ title, price, originalPrice, rating, image }) => (
  <div className="popular-service-card">
    <img src={image} alt={title} className="popular-service-image" />
    <div className="popular-service-info">
      <div className="popular-service-rating">{rating}</div>
      <h3 className="popular-service-title">{title}</h3>
      <div className="popular-service-pricing">
        <span className="popular-service-price">{price}</span>
        <span className="popular-service-original-price">{originalPrice}</span>
      </div>
    </div>
  </div>
);

const PopularService = () => (
  <div className="popular-services-section">
    <h2>Explore Popular Services</h2>
    <div className="popular-services-tab">
      <button>Phones</button>
      <button>Laptops</button>
      <button>AC</button>
    </div>
    <div className="popular-service-cards-container">
      <ServiceCard
        title="Foam & Power Jet AC Service (Split)"
        price="₹599"
        originalPrice="₹699"
        rating="4.5 (2K)"
        image={images.ac}
      />
      <ServiceCard
        title="OnePlus 9R 5G - Refurbished"
        price="₹19,399"
        originalPrice="₹39,000"
        rating="4.5 (2K)"
        image={images.mobile}
      />
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
