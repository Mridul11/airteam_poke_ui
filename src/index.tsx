import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './config/routes';
import reportWebVitals from './reportWebVitals';
import swDev from './swDev';

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);

swDev();
reportWebVitals();
