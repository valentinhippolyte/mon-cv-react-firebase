import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

import './App.css';


import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/home" element={<Home/>} />

      </Routes>
  </Router >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default App;