import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import promise from 'redux-promise';
// import thunk from 'redux-thunk';
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
