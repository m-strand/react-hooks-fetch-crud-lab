import React, {useState, useEffect} from "react";

function QuestionItem({ question, onDeleteQ }) {
  const { id, prompt, answers, correctIndex } = question;


  function handleDeleteClick(id) {
    fetch(`localhost:http://4000/questions/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteQ("deleted!"));
  }

  function handleUpdateAnswer(id) {
    fetch(`localhost:http://4000/questions/${id}`, {
    method: "PATCH",
    headers:
    { "Content-Type": "application/json" },
    Body:
    {
      "correctIndex": integer
    }
  })
    .then((r) => r.json())
    .then((updatedQ) => onUpdateQ(updatedQ));
}


  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleUpdateAnswer}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
