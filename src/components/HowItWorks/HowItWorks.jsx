import React from "react";
import "./HowItWorks.css";
import { images } from "../../constants";
const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <div className="how-it-works-header">
        <h2>How it Works?</h2>
        <p>
          Magnis diam scelerisque proin sit imperdiet faucibus auctor. Du diam
          tellus turpis orci ultricies. Sed molestie nulla gravida eu
          pellentesque. Lacus nulla nibh velit bibendum nunc.
        </p>
      </div>
      <div className="steps-container">
        <div className="step">
          <img src={images.serviceImage} alt="Choose Your Service" />
          <h3>Choose Your Service</h3>
          <p>
            Select the service you need from our range of offerings, whether
            it's mobile repair, AC installation, or more.
          </p>
        </div>
        <div className="step">
          <img src={images.worker} alt="Expert Service" />
          <h3>Expert Service</h3>
          <p>
            Our skilled technicians visit your location or nearest store,
            equipped to deliver high-quality service.
          </p>
        </div>
        <div className="step">
          <img src={images.motherboard} alt="Quality Repair" />
          <h3>Quality Repair</h3>
          <p>
            We use genuine parts and advanced techniques to ensure your device
            is repaired to perfection.
          </p>
        </div>
        <div className="step">
          <img src={images.payment} alt="Hassle-Free Payment" />
          <h3>Hassle-Free Payment</h3>
          <p>
            Complete your secure payment using our trusted gateway, making the
            process convenient for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
