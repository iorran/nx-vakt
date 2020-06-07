import React from 'react';  

import { Link } from 'react-router-dom';
import Routes from './routes';
 
export const App = () => {
  return (
    <>
    <Link to="/">
      Home
    </Link>
      <Link to="/nominations">
        Nominations
      </Link>
      <Routes />
    </>
  );
};

export default App;
