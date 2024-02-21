import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXing,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { images } from "../../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-disclaimer">
          <img src={images.logo} alt="Phixman" className="footer-logo" />
          <p className="disclaimer-text">
            iPhone, iPod, iPad and Mac are registered trademarks of Apple, Inc.
            Phixman is an independent service company and is in no way
            affiliated with Apple Inc.
          </p>
        </div>
        <div className="footer-section subscribe">
          <h3>Subscribe for Regular Updates</h3>
          <input type="email" placeholder="Enter Email Address" />
          <button className="subscribe-button">Subscribe</button>
        </div>
        <div className="footer-section links">
          <div className="link-group">
            <h4>Services</h4>
            <ul>
              <li>Mobile Repair</li>
              <li>AC Repair</li>
              <li>Laptop Repair</li>
              {/* Additional items */}
            </ul>
          </div>
          <div className="link-group">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="link-group">
            <h4>Other</h4>
            <ul>
              <li>Stores</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bar">
        <div className="secured-payment">
          <span>Secured Payment</span>
        </div>
        <div className="copy-social">
          <span>© Copyright Phixman Technologies Pvt. Ltd.</span>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faXing} />
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
