import React from 'react';

const ProgressBar = ({ current, max }) => {
  const width = ((current - 1) / max) * 100;
  return (
    <div id='progressBar'>
      <div id='progressBarFull' style={{ width: `${width}%` }}></div>
    </div>
  );
};

export default ProgressBar;
