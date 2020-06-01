import React, { useEffect, useState } from 'react';
import { useFirebase } from './Firebase/FirebaseContext';

import SamWatermark from './SamWatermark';
import MVGQ from './MVGQ';

const HighScores = () => {
  const firebase = useFirebase();
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.scores().once('value', (snapshot) => {
      const data = snapshot.val();
      const sortedScores = formatScoreData(data);
      setScores(sortedScores);
      setLoading(false);
    });
  }, [firebase]);

  const formatScoreData = (firebaseScores) => {
    const scores = [];

    for (let key in firebaseScores) {
      const val = firebaseScores[key];
      val['key'] = key;
      scores.push(val);
    }

    return scores
      .sort((score1, score2) => score2.score - score1.score)
      .slice(0, 10);
  };

  return (
    <div className='high-scores-container'>
      <MVGQ />
      <SamWatermark />
      {loading && <div id='loader' />}
      {!loading && (
        <>
          {/* <h1>HIGH SCORES</h1> */}
          <div id='highScoresList'>
            {scores.map((record, index) => (
              <li key={record.key} className='high-score'>
                <div className='high-score-place'>{`${index <= 8 ? '0' : ''}${
                  index + 1
                }`}</div>
                <div className='high-score-name'>{record.name}</div>
                <div className='high-score-score'>{record.score}</div>
              </li>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HighScores;
