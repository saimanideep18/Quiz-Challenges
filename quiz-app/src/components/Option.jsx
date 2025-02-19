import React from 'react';

const Option = ({ options, score, setScore, answer, currentQuestion, setCurrentQuestion, totalNoOfQuestions, setVisibileResult }) => {
  function checkAnswer(event) {
    const index = event.target.name;
    if (currentQuestion === totalNoOfQuestions - 1) {
      if (options[index] === answer) {
        setScore(score + 1);
      }
      setVisibileResult(true);
      return;
    }
    if (options[index] === answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  }

  return (
    <div>
      {options.map((ele, index) => (
        <button key={index} name={index.toString()} onClick={checkAnswer}>
          {String.fromCharCode(65 + index)}: {ele}
        </button>
      ))}
    </div>
  );
};

export default Option;
