import React from 'react';
import './Guarantee.css'; // Assuming the CSS is in Guarantee.css
import { images } from '../../constants';
const Guarantee = () => {
  return (
    <div className="guarantee-section">
      <div className="guarantee-header">
        <h1>Our Guarantee</h1>
        <p>Magnis diam scelerisque proin sit imperdiet faucibus auctor. Dui diam tellus turpis orci ultricies. Sed molestie nulla gravida eu pellentesque. Lacus nulla nibh velit bibendum nunc.</p>
        <p>Magnis diam scelerisque proin sit imperdiet faucibus auctor. Dui diam tellus turpis orci ultricies. Sed molestie nulla gravida eu pellentesque. Lacus nulla nibh velit bibendum nunc.</p>
        <p>Magnis diam scelerisque proin sit imperdiet faucibus auctor. Dui diam tellus turpis orci ultricies. Sed molestie nulla gravida eu pellentesque. Lacus nulla nibh velit bibendum nunc.</p>
        <button className="service-button">Book a service now →</button>
      </div>
      <div className="guarantee-cards">
        <div className="card">
          <img src={images.genuineParts} alt="Genuine Parts" />
          <h3>Genuine Parts</h3>
          <p>Magnis diam scelerisque proin sit imperdiet faucibus auctor.</p>
        </div>
        <div className="card">
          <img src="warranty.png" alt="Warranty" />
          <h3>Warranty</h3>
          <p>Magnis diam scelerisque proin sit imperdiet faucibus auctor.</p>
        </div>
        <div className="card">
          <img src="affordable.png" alt="Affordable" />
          <h3>Affordable</h3>
          <p>Magnis diam scelerisque proin sit imperdiet faucibus auctor.</p>
        </div>
        <div className="card">
          <img src="pickup-and-drop.png" alt="Pickup and Drop" />
          <h3>Pickup and Drop</h3>
          <p>Magnis diam scelerisque proin sit imperdiet faucibus auctor.</p>
        </div>
      </div>
    </div>
  );
}

export default Guarantee;
