import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem.js";

function QuestionList({questions, onDeleteQ}) {
  


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem onDeleteQ={onDeleteQ} question={question} />
        ))}
        </ul>
    </section>
  );
}

export default QuestionList;
