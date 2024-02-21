import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import { images } from "../../constants";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={images.logo} alt="logo" />
        <span className="navbar-logo-text">PHIXMAN</span>
      </div>
      <div className="navbar-menu">
        <div className="navbar-item">Phixman Stores</div>
        <div className="navbar-dropdown">
          Partner with us <IoIosArrowDown />
        </div>
        <div className="navbar-item">B2B</div>
        <div className="navbar-dropdown">
          More <IoIosArrowDown />
        </div>
        <div className="navbar-item">
          <img src={images.india} alt="" />
          <span>INDIA</span>
        </div>
        <div className="navbar-cart">
          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
