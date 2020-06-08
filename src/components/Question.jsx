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
              className={
                choice.length >= 35
                  ? ' choice-text extremely-long-choice-text'
                  : choice.length >= 27
                  ? ' choice-text super-long-choice-text'
                  : choice.length >= 15
                  ? ' choice-text long-choice-text'
                  : 'choice-text'
              }
              dangerouslySetInnerHTML={{ __html: choice }}
            ></h2>
          </div>
        ))}
      </div>
      <div className='game-questions-container'>
        <h2
          className={
            question.question.length >= 150
              ? 'game-questions extremely-long-question-text'
              : question.question.length >= 100
              ? 'game-questions super-long-question-text'
              : question.question.length >= 10
              ? 'game-questions long-question-text'
              : 'game-questions'
          }
          dangerouslySetInnerHTML={{ __html: question.question }}
        ></h2>
      </div>
    </div>
  );
};

export default Question;
