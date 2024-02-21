import React from "react";
import "./Subscribe.css";
import { images } from "../../constants";
function Subscribe() {
  return (
    <div className="subscribe-container">
      <div className="text-content">
        <h2>Subscribe to our Newsletter</h2>
        <p>
          Break into a new updates like services, offers, new stores and many
          more.
        </p>
        <div className="input-group">
          <input type="email" placeholder="Enter your Email address" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="image-content">
        <img src={images.subscriptionImage} alt="Happy person pointing" />
      </div>
    </div>
  );
}

export default Subscribe;
