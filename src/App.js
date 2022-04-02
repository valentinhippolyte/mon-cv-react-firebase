import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'

import './App.css';
import Header from './components/Header';

import Home from './components/Projects';
import Projects from './components/Projects';
import Skills from './components/Projects';



class App extends Component {
  render() {
    return (
      <Header />
    );
  }
}

export default App;