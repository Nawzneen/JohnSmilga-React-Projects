import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = React.useState(0);
  const { name, job, image, text } = people[index];
  console.log();
  function nextPerson() {
    if (index < people.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      setIndex(0);
    }
  }
  function prevPerson() {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    } else {
      setIndex((prevIndex) => people.length - 1);
    }
  }
  function randomPerson() {
    setIndex(Math.floor(Math.random() * people.length));
  }
  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="autor">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Suprise me
      </button>
    </article>
  );
};

export default Review;
