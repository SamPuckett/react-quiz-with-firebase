import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Game from './components/Game';
import HighScores from './components/HighScores';

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/game' component={Game} />
        <Route path='/highscores' component={HighScores} />
      </div>
    </Router>
  );
}

export default App;
