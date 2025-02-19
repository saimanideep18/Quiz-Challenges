import { useState } from 'react'
import Option from './components/Option';
import './App.css'
import data from "./data.json";
import Question from './components/Question';
import Result from './components/Result';

function App() {
  const [currentQuestion,setCurrentQuestion] = useState(0);
  const[score,setScore] = useState(0);
  const[isVisibleResult,setVisibileResult] = useState(false);
  return (
    <>
    <h1>MCQ Test</h1>
     
      {
        !isVisibleResult?
        <div>
          <Question question={data[currentQuestion].question}/>
     <Option 
     options={data[currentQuestion].options}
      score={score} setScore={setScore}
      answer={data[currentQuestion].answer}
      currentQuestion={currentQuestion}
      setCurrentQuestion={setCurrentQuestion}
      setVisibileResult={setVisibileResult}
      totalNoOfQuestions={data.length}
      />
        </div>:
        <Result
        totalNoOfquestions={data.length}
        score={score}
          />
      }
    </>
  )
}

export default App
