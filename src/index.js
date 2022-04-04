import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import Login from './routes/login';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

import './App.css';


import reportWebVitals from './reportWebVitals';
import AddProject from './components/AddProject';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="login" element={<Login />} />
        <Route path="add-project" element={<AddProject/>} />
      </Routes>
  </BrowserRouter >,
  document.getElementById('root')
);

reportWebVitals();
