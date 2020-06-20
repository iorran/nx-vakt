import React from 'react';  

import { SharedUiHeader } from '@vakt/shared/ui-header';   
import { Routes } from './routes/routes';    
 
export const App = () => {
  return (
    <> 
      <SharedUiHeader />  
      <Routes />
    </>
  );
};

export default App;
