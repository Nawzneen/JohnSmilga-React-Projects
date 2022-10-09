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
  React.useEffect(function () {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTours(data));
    setIsLoading(false);
    console.log(tours);
  }, []);
  console.log(tours);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
}

export default App;
