import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css";
import { images } from "../../constants";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="app-container">
      <Slider {...settings}>
        <div>
          <img src={images.heroImage} alt="Person" />
        </div>
        <div>
          <img src={images.heroImage} alt="Person" />
        </div>
        <div>
          <img src={images.heroImage} alt="Person" />
        </div>
        <div>
          <img src={images.heroImage} alt="Person" />
        </div>
      </Slider>
      <div className="search-bar-container">
        <div className="search-bar-text">Device Solutions, One Search Away</div>
        <div className="search-bar">
          <div className="city-picker">
            <FaMapMarkerAlt className="Marker" />
            <select name="cities" id="cities">
              <option value="delhi">Delhi</option>
              <option value="delhi">Mumbai</option>
              <option value="delhi">Lucknow</option>
              <option value="delhi">Agra</option>
            </select>
          </div>
          <input type="text" placeholder="search service..." />
          <button className="button-search">
            <FaSearch /> {""}
            <span className="search-text"> Go For It </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
