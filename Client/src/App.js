import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  state = {
    hello: null
  }
  
  return (
    <div>
      { this.state.hello
        ? <div>{this.state.hello}
        : null
      }
    </div>
  );
}

export default App;
