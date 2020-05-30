import React, { useEffect, useState } from 'react';

import Question from './Question';

const Game = () => {
  const [questions, setQuestions] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple';
      try {
        const res = await fetch(url);
        const { results } = await res.json();
        const questions = results.map((loadedQuestion) => {
          const formattedQuestion = {
            question: loadedQuestion.question,
            answerChoices: [...loadedQuestion.incorrect_answers],
            // answer:
          };
          formattedQuestion.answer = Math.floor(Math.random() * 4);
          formattedQuestion.answerChoices.splice(
            formattedQuestion.answer,
            0,
            loadedQuestion.correct_answer
          );
          return formattedQuestion;
        });
        setQuestions(questions);
        setCurrentQuestion(questions[0]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>{currentQuestion && <Question question={currentQuestion} />}</div>
  );
};

export default Game;
