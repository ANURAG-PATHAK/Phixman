import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./FrequentlyAskedQuestion.css";


const FrequentlyAskedQuestion = () => {
  return (
    <div className="faq-section">
      <h1 className="faq-section-title">
        <span className="faq-title-bar">|</span> Frequently Asked Questions
      </h1>
      <p className="faq-section-description">
        Magnis diam scelerisque proin sit imperdiet faucibus auctor. Dui diam
        tellus turpis orci ultricies. Sed molestie nulla gravida eu
        pellentesque. Lacus nullam nibh velit bibendum nunc.
      </p>
      <div className="faq-question">
        This is just a question that is used as a Placeholder for the FAQ
        section. Question Mark?
        <IoIosArrowDown className="faq-arrow" />
      </div>
      <div className="faq-question">
        This is just a question that is used as a Placeholder for the FAQ
        section. Question Mark?
        <IoIosArrowDown className="faq-arrow" />
      </div>
      <div className="faq-question">
        This is just a question that is used as a Placeholder for the FAQ
        section. Question Mark?
        <IoIosArrowDown className="faq-arrow" />
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestion;
