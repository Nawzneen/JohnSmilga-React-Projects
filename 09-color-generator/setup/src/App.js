import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log("you have an error");
    }
  }
  return (
    <div>
      <section className="container">
        <h3>color generator</h3>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            id=""
            placeholder="#A52A2A"
            className={`${error ? "error" : null}`}
            onChange={(e) => setColor(e.target.value)}
          />
          <label htmlFor=""></label>
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              hexColor={color.hex}
              index={index}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;
