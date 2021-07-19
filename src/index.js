import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './layout/AppContainer';
import App from './App';
import './scss/common.scss';

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root')
);
