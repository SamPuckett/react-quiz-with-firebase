import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Question from './Question';
import HUD from './HUD';
import SaveScoreForm from './SaveScoreForm';

import { loadQuestions } from '../helpers/QuestionsHelper';

const Game = () => {
  const [questions, setQuestions] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [done, setDone] = useState(false);

  let history = useHistory();

  useEffect(() => {
    loadQuestions()
      .then((questions) => setQuestions(questions))
      .catch((err) => console.error(err));
  }, []);

  const scoreSaved = () => {
    history.push('/');
  };

  const changeQuestion = useCallback(
    (bonus = 0) => {
      if (questions.length === 0) {
        setScore(score + bonus);
        return setDone(true);
      }
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
      setQuestionNumber(questionNumber + 1);
    },
    [
      score,
      questionNumber,
      questions,
      setQuestions,
      setLoading,
      setCurrentQuestion,
      setQuestionNumber,
    ]
  );

  useEffect(() => {
    if (questions !== null && loading === true) {
      changeQuestion();
    }
  }, [questions, loading, changeQuestion]);

  return (
    <>
      {loading && !done && <div id='loader'></div>}
      {!done && !loading && currentQuestion && (
        <>
          <HUD questionNumber={questionNumber} score={score} />
          <Question
            changeQuestion={changeQuestion}
            question={currentQuestion}
          />
        </>
      )}
      {done && <SaveScoreForm score={score} scoreSaved={scoreSaved} />}
    </>
  );
};

export default Game;
