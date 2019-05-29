import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import NavBarComp from './components/NavBarComp';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarComp></NavBarComp>
        <Home></Home>
      </Router>
    </div>
  );
}

export default App;
