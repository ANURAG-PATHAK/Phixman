// Service.jsx
import React from "react";
import "./Service.css";

const services = [
  { id: 1, name: "Mobile Repair", icon: "🛠️" },
  { id: 2, name: "Laptop Repair", icon: "💻" },
  { id: 3, name: "Printer Repair", icon: "🖨️" },
  { id: 4, name: "Air Cooler", icon: "❄️" },
  { id: 5, name: "Geyser", icon: "⚡" },
  { id: 6, name: "Chimney Repair", icon: "🔥" },
  { id: 7, name: "More", icon: "➕" },
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
            <div className="service-icon">{service.icon}</div>
            <div className="service-name">{service.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
