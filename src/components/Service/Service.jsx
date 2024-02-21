import React from "react";
import "./Service.css";
import { images } from "../../constants";

const services = [
  { id: 1, name: "Mobile Repair", image: images.mobileRepair },
  { id: 2, name: "Laptop Repair", image: images.laptopRepair },
  { id: 3, name: "Printer Repair", image: images.printer },
  { id: 4, name: "Air Cooler", image: images.waterCooler },
  { id: 5, name: "Printer Repair", image: images.printer },
  { id: 6, name: "Air Cooler", image: images.waterCooler },
  { id: 7, name: "Geyser", image: images.geyser },
  { id: 8, name: "Chimney Repair", image: images.chimney },
  { id: 9, name: "More", image: images.more },
];

const Service = () => {
  return (
    <div className="service-container">
      <div className="services-header">
        <h1 className="services-title">
          <span className="services-title-accent">|</span> Our Services
        </h1>
        <p className="services-description">
          Magnis diam scelerisque proin sit imperdiet faucibus auctor. Dui diam
          tellus turpis orci ultricies. Sed molestie nulla gravida eu
          pellentesque. Lacus nulla nibh velit bibendum nunc. Magnis diam
          scelerisque proin sit imperdiet faucibus auctor.
        </p>
      </div>
      <div className="services-list">
        {services.map((service) => (
          <div key={service.id} className="service-item">
            <img src={service.image} alt="" className="service-image" />
            <div className="service-name">{service.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
