import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
 
import {
  TRADE_FEATURE_KEY,
  tradeReducer,
} from '@vakt/nominations/shared/util-redux';

const store = configureStore({
  reducer: {
    [TRADE_FEATURE_KEY]: tradeReducer, 
  },
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
