import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = React.useState(data);
  const dataElements = questions.map((question) => (
    <SingleQuestion
      key={question.id}
      title={question.title}
      info={question.info}
    />
  ));
  return <div className="container">{dataElements}</div>;
}
export default App;
