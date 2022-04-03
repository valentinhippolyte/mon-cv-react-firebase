import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import Login from './routes/login';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

import './App.css';


import reportWebVitals from './reportWebVitals';
import AddProject from './components/AddProject';

ReactDOM.render(
  <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="login" element={<Login />} />
        <Route path="add-project" element={<AddProject/>} />
      </Routes>
  </Router >,
  document.getElementById('root')
);

reportWebVitals();

export default App;