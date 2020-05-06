import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.scss';
import Demo from './components/Demo';

function App() {
  const location = useLocation();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(location.pathname);
  }, [location]);
  return (
    <div className='App'>
      <Demo />
    </div>
  );
}

export default App;
