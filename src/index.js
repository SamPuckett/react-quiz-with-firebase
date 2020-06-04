import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FullScreenLoader from './components/FullScreenLoader';
import * as serviceWorker from './serviceWorker';
import Firebase from './components/Firebase/Firebase';
import { FirebaseContext } from './components/Firebase/FirebaseContext';

const Index = () => {
  const [isInitiallyLoading, setInitiallyLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setInitiallyLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isInitiallyLoading ? (
        <FullScreenLoader />
      ) : (
        <FirebaseContext.Provider value={new Firebase()}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </FirebaseContext.Provider>
      )}
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
