import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState();
  function handleSubmit() {}
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            id=""
            placeholder="#a231687"
            onChange={(e) => setColor(e.target.value)}
          />
          <label htmlFor=""></label>
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="color"></section>
    </>
  );
}

export default App;
