import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './BarChart';
import NYMap from './NYMap.jsx';

class App extends Component {
  state = {
    width: 900,
    height: 900,
    id: 'root'
  }

  render() {
    return (
      <div className="App">
        <NYMap size={[this.state.width, this.state.height]}/>
      </div>
    );
  }
}

export default App;
