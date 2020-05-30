import React from 'react';

const Question = ({ question }) => {
  return (
    <div>
      <h2>{question.question}</h2>
      {question.answerChoices.map((choice, index) => (
        <div className='choice-container' key={index}>
          <p className='choice-prefix'>{index + 1}</p>
          <p className='choice-text'>{choice}</p>
        </div>
      ))}
    </div>
  );
};

export default Question;
