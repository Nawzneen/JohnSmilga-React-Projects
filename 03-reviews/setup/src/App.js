import React from "react";
import Review from "./Review";
import { FaGithubSquare } from "react-icons/fa";
function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Reviews</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Review />
    </main>
  );
}

export default App;
