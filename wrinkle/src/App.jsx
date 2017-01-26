import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom';
import './App.css';
import Grid from './Grid'

const container = {
  margin: '0 10% 0 10%',
};

var Header = React.createClass({
  propTypes: {
  },

  render: function() {
    return(
    <div className="App-content">
      <h1>Let the ripple, <code>wrinkle</code>.</h1>
    </div>
    );
  }
});

var Counter = React.createClass({

  propTypes: {
  },

  getInitialState: function(props) {
    return{
      rows: 3,
      cols: 3,
    }
  },
  
  getDefaultProps: function (){
    return{
    }
  },

  incrementRow: function (props){
    this.setState({
      rows: (this.state.rows + 1),
    });
  },

  decrementRow: function (props){
    this.setState({
      rows: (this.state.rows - 1),
    });
  },

  incrementCol: function (props){
    this.setState({
      cols: (this.state.cols + 1),
    });
  },

  decrementCol: function (props){
    this.setState({
      cols: (this.state.cols - 1),
    });
  },

  render: function (){
    return(
      <div>
        <div className="Counter">
          <div className="counter-text">Row count</div>
          <div className="counter-content">  
            <button className="counter-action decrement" onClick={this.decrementRow}>-</button>
              <div className="counter-number">{this.state.rows}</div>
            <button className="counter-action increment" onClick={this.incrementRow}>+</button> 
          </div>
        </div>
        <div className="Counter">
          <div className="counter-text">Column count</div>
          <div className="counter-content">
            <button className="counter-action decrement" onClick={this.decrementCol}>-</button>
              <div className="counter-number">{this.state.cols}</div>
            <button className="counter-action increment" onClick={this.incrementCol}>+</button>
          </div> 
        </div>
      </div>
    );
  }
});

var App= React.createClass({
  propTypes: {
    title: React.PropTypes.string,
  },

  getDefaultProps: function () {
    return{
      title:"Wrinkle-ripple",
      rows: 5,
      cols: 5,
    };
  },

  getInitialState: function () {
    return{
      
    }
  },

  render: function () {
    return(
      <div>
          <Header />
        <div style={container} className="App-content">
          <Counter/>
          <Grid 
            rows={this.props.rows} 
            cols={this.props.cols} 
            onBlockClick={(row, col) => {console.log(`Row ${row} Col ${col}`)} } 
          />
        </div>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
export default App;