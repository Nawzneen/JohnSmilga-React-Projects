import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [isDisplayed, setIsDisplayed] = React.useState(false);
  return (
    <article className="question">
      <header className="">
        <h4>{title}</h4>
        <button className="btn" onClick={() => setIsDisplayed(!isDisplayed)}>
          {isDisplayed ? "-" : "+"}
        </button>
      </header>
      {isDisplayed && <p>{info}</p>}
    </article>
  );
};

export default Question;
