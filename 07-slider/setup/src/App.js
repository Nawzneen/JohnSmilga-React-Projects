import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft, FiCheckSquare } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import people from "./data";
function App() {
  const [index, setIndex] = useState(0);
  const [people, setPeople] = useState(data);

  function checkNum(num) {
    if (num > data.length - 1) {
      return (num = 0);
    }
    if (num < 0) {
      return data.length - 1;
    }
    return num;
  }
  function nextPerson() {
    setIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      return checkNum(newIndex);
    });
  }
  function prevPerson() {
    setIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      return checkNum(newIndex);
    });
  }
  return (
    <section className="section">
      <div className="title">
        <h2 className="title">
          <span>/</span>Reviews
        </h2>
        <div className="section-center">
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;
            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide ";
            }
            return (
              <article className={position} key={id}>
                <img src={image} alt="" className="person-img" />
                <h4>{name}</h4>
                <p className="text">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
              </article>
            );
          })}

          <button onClick={prevPerson} className="prev">
            <FiChevronLeft />
          </button>
          <button onClick={nextPerson} className="next">
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
