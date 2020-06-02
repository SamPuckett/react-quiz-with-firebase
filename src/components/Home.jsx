import React from 'react';
import { Link } from 'react-router-dom';

import SamWatermark from './SamWatermark';
import MVGQ from './MVGQ';

const Home = () => {
  return (
    <div className='home-container'>
      <MVGQ />
      <SamWatermark />
      <div className='home-title'>
        <h1>
          MEGA VIDEO
          <br />
          GAME QUIZ
        </h1>
      </div>
      <div className='home-button-column'>
        <div className='home-buttons'>
          <div className='home-mobile-image'></div>
          <Link to='/Game' className='start-game-btn btn-dark'>
            START GAME
          </Link>
          <Link to='/HighScores' className='btn high-scores-btn'>
            HIGH SCORES
          </Link>
        </div>
        <div className='home-mobile-box'></div>
      </div>
    </div>
  );
};

export default Home;
