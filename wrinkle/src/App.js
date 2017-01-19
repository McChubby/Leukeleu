import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import './App.css';

import Grid from './Grid'

const container = {
  // backgroundColor: '#4CAF50',
  margin: '0 10% 0 10%',
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// function InRowsDrawCols(props){
//   return(
//       <td 
//       className="block" 
//       style={{backgroundColor: getRandomColor()}} onClick={WrinkleIt}>
//       </td>
//   );
// }

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
        <div className="Counter">
          <div className="counter-text">Row count</div>
          <div className="counter-content">  
            <button className="counter-action decrement" onClick={this.decrementRow}>-</button>
              <div className="counter-number">{this.state.rowNumber}</div>
            <button className="counter-action increment" onClick={this.incrementRow}>+</button> 
          </div>
        </div>
        <div className="Counter">
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

class App extends Component {
  render() {
    return (
      <div>
          <Header />
        <div style={container} className="App-content">
          <Counter />
          <Grid rows={3} cols={3} onBlockClick={(row, col) => { console.log('row= '+row+' col='+col) }} />
        </div>
      </div>
    );
  }
}
export default App;