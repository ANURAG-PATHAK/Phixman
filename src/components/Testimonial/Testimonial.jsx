import React from "react";
import Slider from "react-slick";
import "./Testimonial.css";
import { images } from "../../constants";
const Testimonials = ({ text, author, image }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-image">
        <img src={image} alt={author} />
      </div>
      <div className="testimonial-content">
        <h3>{author}</h3>
        <div className="testimonial-rating">
          <span>⭐⭐⭐⭐⭐</span>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      author: "Samantha Iyer",
      image: images.profileImage,
    },
    {
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      author: "Samantha Iyer",
      image: images.profileImage,
    },
    {
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      author: "Samantha Iyer",
      image: images.profileImage,
    },
    {
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      author: "Samantha Iyer",
      image: images.profileImage,
    },
    // ... Repeat for 4 testimonials or as many as needed
  ];

  return (
    <div className="testimonial-section">
      <div className="testimonial-intro">
        <h2 className="testimonial-title">Don’t Believe Us?</h2>
        <p className="testimonial-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
        <button className="read-more-btn">Read More</button>
      </div>
      <div className="testimonial-slider">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Testimonials key={index} {...testimonial} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
