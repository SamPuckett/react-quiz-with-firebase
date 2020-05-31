import React, { useEffect, useState } from 'react';

import Question from './Question';
import { loadQuestions } from '../helpers/QuestionsHelper';

const Game = () => {
  const [questions, setQuestions] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const questions = await loadQuestions();
        console.log(questions);
        setQuestions(questions);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (questions !== null && loading === true) {
      changeQuestion();
    }
  }, [questions]);

  const changeQuestion = (bonus = 0) => {
    // Get a random index of a question
    const randomQuestionIndex = Math.floor(Math.random() * questions.length);
    // Set the current question to the question at that random index
    const currentQuestion = questions[randomQuestionIndex];
    // Remove question from the questions going foward
    const remainingQuestions = [...questions];
    remainingQuestions.splice(randomQuestionIndex, 1);
    // Update the state to reflect these changes
    setQuestions(remainingQuestions);
    setCurrentQuestion(currentQuestion);
    setLoading(false);
    setScore(score + bonus);
  };

  return (
    <>
      {loading && <div id='loader'></div>}
      {!loading && currentQuestion && (
        <Question changeQuestion={changeQuestion} question={currentQuestion} />
      )}
    </>
  );
};

export default Game;
