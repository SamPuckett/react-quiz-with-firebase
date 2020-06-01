import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useFirebase } from './Firebase/FirebaseContext';

const SaveScoreForm = ({ score = 0, scoreSaved }) => {
  const [username, setUsername] = useState('');
  const firebase = useFirebase();

  const onUsernameChange = (e) => {
    const updatedUsername = e.target.value;
    setUsername(updatedUsername);
  };

  const saveHighScore = (e) => {
    e.preventDefault();
    const record = {
      name: username,
      score: score,
    };

    firebase.scores().push(record, () => {
      console.log(`Score Saved!`);
      scoreSaved();
    });
    console.table(record);
  };

  return (
    <>
      <h1 className='save-score-form-text'>SCORE: {score}</h1>
      <form onSubmit={saveHighScore}>
        <input
          type='text'
          name='username'
          id='username'
          placeholder='ENTER YOUR NAME'
          value={username}
          onChange={onUsernameChange}
        />
        <button type='submit' className='btn-dark' disabled={!username}>
          SAVE
        </button>
      </form>
      <Link to='/' className='btn'>
        GO HOME
      </Link>
    </>
  );
};

export default SaveScoreForm;
