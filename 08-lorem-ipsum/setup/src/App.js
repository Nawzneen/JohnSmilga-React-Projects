import React, { useState } from "react";
import data from "./data";
function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    // changing from string to number
    let amount = parseInt(number);
    if (number <= 0) {
      amount = 1;
    }
    if (number > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  }

  return (
    <section className="section-center">
      <h3>Tired of Boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraph:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-test">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
