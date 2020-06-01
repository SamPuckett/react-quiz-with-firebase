import React, { useState } from 'react';

const Question = ({ changeQuestion, question }) => {
  const [classToApply, setClassToApply] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [answering, setAnswering] = useState(false);

  const checkAnswer = (selectedAnswer) => {
    if (answering) return;
    setAnswering(true);
    setSelectedAnswer(selectedAnswer);

    const classToApply =
      selectedAnswer === question.answer ? 'correct' : 'incorrect';
    setClassToApply(classToApply);
    const bonus = selectedAnswer === question.answer ? 10 : 0;

    setTimeout(() => {
      setSelectedAnswer(-1);
      setAnswering(false);
      changeQuestion(bonus);
    }, 1000);
  };

  return (
    <div className='game-top'>
      <div className='game-choice-container'>
        {question.answerChoices.map((choice, index) => (
          <div
            className={`choice-container ${
              selectedAnswer === index && classToApply
            }`}
            key={index}
            onClick={() => checkAnswer(index)}
          >
            <h2 className='choice-prefix'>{`0${index + 1}.`}</h2>
            <h2
              className='choice-text'
              dangerouslySetInnerHTML={{ __html: choice }}
            ></h2>
          </div>
        ))}
      </div>
      <div className='game-questions-container'>
        <h2
          className='game-questions'
          dangerouslySetInnerHTML={{ __html: question.question }}
        ></h2>
      </div>
    </div>
  );
};

export default Question;
