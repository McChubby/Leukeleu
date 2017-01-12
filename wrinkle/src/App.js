import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

const container = {
  margin: '0 10% 0 10%',
};
const gridStyle = {
  // width: '90%',
  border: 'solid 1px white',
  margin: '0 5% 0 5%'
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function WrinkleIt (e){
  console.log('Wrinkle:',)
}

function InRowsDrawCols(props){
  return(
      <td style={{backgroundColor: getRandomColor()}} onClick={WrinkleIt}>1</td>
  );
}

function DrawRowsOnGrid(props){
  return(
    <tr>
      <InRowsDrawCols />
      <InRowsDrawCols />
      <InRowsDrawCols />
    </tr>
  );
}

function DrawGrid(props){
  return(
    <table style={gridStyle}>
      <tbody>
        <DrawRowsOnGrid />
        <DrawRowsOnGrid />
        <DrawRowsOnGrid />
      </tbody>
    </table>
  );
}

function Header(props){
  return(
    <div className="App-content">
      <h1>Let the ripple, <code>wrinkle</code>.</h1>
    </div>
  );
}

var Counter = React.createClass({

  propTypes: {},

  getInitialState: function() {
    return{
      rowNumber: 1,
      colNumber: 2,
    }
  },

  incrementRow: function (){
    this.setState({
      rowNumber: (this.state.rowNumber + 1),
    });
  },

  decrementRow: function (){
    this.setState({
      rowNumber: (this.state.rowNumber - 1),
    });
  },

  incrementCol: function (){
    this.setState({
      colNumber: (this.state.colNumber + 1),
    });
  },

  decrementCol: function (){
    this.setState({
      colNumber: (this.state.colNumber - 1),
    });
  },

  render: function (){

    return(
      <div>
        <div style={container} className="Counter">
          <div className="counter-text">Row count</div>
          <div className="counter-content">  
            <button className="counter-action decrement" onClick={this.decrementRow}>-</button>
              <div className="counter-number">{this.state.rowNumber}</div>
            <button className="counter-action increment" onClick={this.incrementRow}>+</button> 
          </div>
        </div>
        <div style={container} className="Counter">
          <div className="counter-text">Column count</div>
          <div className="counter-content">
            <button className="counter-action decrement" onClick={this.decrementCol}>-</button>
              <div className="counter-number">{this.state.colNumber}</div>
            <button className="counter-action increment" onClick={this.incrementCol}>+</button>
          </div> 
        </div>
      </div>
    );
  }

});


class Wrinkle extends Component {
  render() {
    return(
      <div className="Wrinkle">
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
          <Header />
        <div className="App-content">
          <Counter />
          <Wrinkle />
        </div>
      </div>
    );
  }
}
export default App;