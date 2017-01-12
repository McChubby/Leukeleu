import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

const container = {
  margin: '0 10% 0 10%',
  backgroundcolor: '#4CAF50'
};
const gridStyle = {
  // width: '90%',
  border: 'solid 1px white',
  margin: '0 5% 0 5%'
};

function InRowsDrawCols(props){
  return(
      <td className="block">1</td>
  );
}

function DrawRowsOnGrid(props){
  return(
    <tr>
      <InRowsDrawCols />
    </tr>
  );
}

function DrawGrid(props){
  return(
    <table style={gridStyle}>
      <tbody>
        <DrawRowsOnGrid />
      </tbody>
    </table>
  );
}

class Wrinkle extends Component {
  render() {
    return(
      <div className="Wrinkle">
        <h1>Let the ripple, <code>wrinkle</code>.</h1>
        <div style={container} className="Wrinkle-grid">
          <DrawGrid />
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