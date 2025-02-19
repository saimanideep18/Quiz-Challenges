import React, { useState } from 'react'

const Result = ({score,totalNoOfquestions}) => {
    const[percentage,setPercentage]=useState((score/totalNoOfQuestions)*100);
  return (
    <div>
      <p>score:{score}</p>
      <p>percentage:{percentage}</p>
      <h2>{percentage<=50?"Better luck next time":"Well Done"}</h2>
    </div>
  )
}

export default Result

