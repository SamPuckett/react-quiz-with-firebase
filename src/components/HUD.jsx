import React from 'react';

import ProgressBar from './ProgressBar';

const HUD = ({ questionNumber, score }) => {
  return (
    <div id='hud'>
      <div className='hid-item'>
        <p className='hud-prefix'>Question {questionNumber}/10</p>
        <ProgressBar current={questionNumber} max={10} />
      </div>
      <div className='hid-item'>
        <p className='hud-prefix'>Score</p>
        <h1 className='hud-main-text'>{score}</h1>
      </div>
    </div>
  );
};

export default HUD;
