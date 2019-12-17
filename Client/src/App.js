import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  state = {
    hello: null
  }

  componentDidMount() {
    axios.get('/hello')
      .then(res => this.setState({hello: res.data}))
      .catch(err => console.log(err));
  };

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
