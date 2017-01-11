import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';


class Wrinkle extends Component {
  render() {
    return(
      <div className="Wrinkle">
        <div className="Wrinkle-grid">
          
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
        </div>
        <div className="App-content">
          <Wrinkle />
        </div>
      </div>
    );
  }
}
export default App;


