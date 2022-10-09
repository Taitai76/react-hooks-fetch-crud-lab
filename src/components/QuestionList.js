import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then((j)=>j.json())
    .then((data)=>setQuestions(data));
  },[]);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question)=> (
          <QuestionItem key={question.Id} question={question} />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
