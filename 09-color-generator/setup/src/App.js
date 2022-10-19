import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    let colors = new Values(color).all(10);
    console.log(colors);
  }
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            id=""
            placeholder="#A52A2A"
            onChange={(e) => setColor(e.target.value)}
          />
          <label htmlFor=""></label>
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">list goes here</section>
    </>
  );
}

export default App;
