import React from 'react';
import logo from './logo.svg';
import './App.css';

import product from './math.js'
// we can name the import variable however we want
// it doesn't have to be product, it will still work if it is abc
console.log(product(10, 5));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
