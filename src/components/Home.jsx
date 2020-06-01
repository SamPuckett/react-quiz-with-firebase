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
        <div className='home-box'></div>
        <div className='home-buttons'>
          <Link to='/HighScores' className='btn'>
            HIGH SCORES
          </Link>
          <Link to='/Game' className='btn-dark'>
            START GAME
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
