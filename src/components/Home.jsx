import React from 'react';
import { Link } from 'react-router-dom';

import SamWatermark from './SamWatermark';
import MVGQ from './MVGQ';
import MobileBackground from './Backgrounds/MobileBackground';
import DesktopBackground from './Backgrounds/DesktopBackground';

const Home = () => {
  return (
    <div className='home-container'>
      <MVGQ />
      <SamWatermark />
      <MobileBackground />
      <DesktopBackground />
      <div className='home-title'>
        <h1>MEGA VIDEO GAME QUIZ</h1>
      </div>
      <div className='home-button-column'>
        <div className='home-buttons'>
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
