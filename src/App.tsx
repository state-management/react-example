import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CounterControlsContainer} from "./containers/CounterControlsContainer";
import {CounterDisplayContainer} from "./containers/CounterDisplayContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <CounterControlsContainer />
        <CounterDisplayContainer />

      </header>

    </div>
  );
}

export default App;
