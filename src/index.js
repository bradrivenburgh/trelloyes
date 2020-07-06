import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import STORE from './store';
import './index.css';

ReactDOM.render(
  <App store={STORE}> {/* pass the STORE object to App */}
  </App>,
  document.getElementById('root')
);