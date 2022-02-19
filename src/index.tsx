import React from 'react';
import ReactDOM from 'react-dom';
import { App, About } from './pages';
import reportWebVitals from './reportWebVitals';
import { PagesHeader } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <PagesHeader />
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about/:id' element={<About />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
