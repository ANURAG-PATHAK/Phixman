// AppDownloadSection.js
import React from 'react';
import './AppDownload.css';
import { images } from '../../constants';

function AppDownload() {
  return (
    <div className="app-download-section">
      <div className="content">
        <h1>Get the Best Experience on our app</h1>
        <p>
          Magnis diam scelerisque proin sit imperdiet faucibus auctor. Dui diam
          tellus turpis orci ultricies. Sed molestie nulla gravida eu
          pellentesque. Lacus nullam nibh velit bibendum nunc.
        </p>
        <input type="text" placeholder="Enter Mobile Number" />
        <button>Get App link</button>
        <div className="store-logos">
          <img src={images.googleplay} alt="Google Play"/>
          <img src={images.appstore} alt="App Store"/>
        </div>
      </div>
      {/* Please include your actual iPhone image with appropriate src */}
      <div className="iphone-image">
        <img src={images.iphone} alt="iPhone app screenshot" />
      </div>
    </div>
  );
}

export default AppDownload;
