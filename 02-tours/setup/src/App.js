import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tour from "./Tour";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = React.useState([]);
  const [refresh, setRefresh] = React.useState(false);
  React.useEffect(
    function () {
      setIsLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((data) => setTours(data));
      setIsLoading(false);
      console.log(tours);
    },
    [refresh]
  );
  console.log(tours);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title"> There is Nothing else to see</div>
        <button
          className="btn"
          onClick={() => setRefresh((prevRefresh) => !prevRefresh)}
        >
          Refresh
        </button>
      </main>
    );
  }
  function removeTour(id) {
    setTours(tours.filter((tour) => id !== tour.id));
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
