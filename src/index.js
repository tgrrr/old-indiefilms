import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './Components/App/App';
import configureStore from './store/configureStore';
import './index.css';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
