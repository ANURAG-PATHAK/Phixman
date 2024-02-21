import React from "react";
import Slider from "react-slick";
import { images } from "../../constants";
import "./ExclusiveStore.css";

const Stores = ({ title, description, image }) => {
  return (
    <div className="store-card">
      <div className="store-image-wrapper">
        <img src={image} alt="Store" className="store-image" />
      </div>
      <div className="store-content">
        <h3 className="store-title">{title}</h3>
        <p className="store-description">{description}</p>
        <div className="store-details-button">View Details →</div>
      </div>
    </div>
  );
};

const ExclusiveStore = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const stores = [
    {
      title: "Mumbai",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit am.",
      image: images.store,
    },
    {
      title: "Mumbai",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit am.",
      image: images.store,
    },
    {
      title: "Mumbai",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit am.",
      image: images.store,
    },
    {
      title: "Mumbai",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit am.",
      image: images.store,
    },
    {
      title: "Mumbai",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit am.",
      image: images.store,
    },
  ];

  return (
    <div className="exclusive-stores-section">
      <h2 className="section-title">Our Exclusive Stores</h2>
      <Slider {...settings}>
        {stores.map((store, index) => (
          <Stores key={index} {...store} />
        ))}
      </Slider>
    </div>
  );
};

export default ExclusiveStore;
