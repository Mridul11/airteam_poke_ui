import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './pages';
import reportWebVitals from './reportWebVitals';
import { PagesHeader } from './components';

ReactDOM.render(
  <React.StrictMode>
    <PagesHeader />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
