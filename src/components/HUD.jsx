import React from 'react';

import ProgressBar from './ProgressBar';

const HUD = ({ questionNumber, score }) => {
  return (
    <div id='hud'>
      <div className='hud-item'>
        <p className='hud-prefix'>PROGRESS</p>
        <ProgressBar current={questionNumber} max={10} />
      </div>
      <div className='hud-item'>
        <p className='hud-prefix'>SCORE</p>
        <h1 className='hud-main-text'>{score}</h1>
      </div>
    </div>
  );
};

export default HUD;
