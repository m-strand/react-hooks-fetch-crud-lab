import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionArr, setQuestionArr] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((response) => response.json())
    .then((data) => {setQuestionArr(data)})
  })

  function addNewQ (newQuestion) {
    setQuestionArr([...questionArr, newQuestion]);
  }

  function handleDeleteQ(deletedQ) {
    const updatedQs = questionArr.filter((question) => question.id !== deletedQ.id);
    setQuestionArr(updatedQs);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addNewQ={addNewQ} /> : <QuestionList onDeleteQ={handleDeleteQ} questions={questionArr}/>}
    </main>
  );
}

export default App;
