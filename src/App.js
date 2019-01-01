import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './BarChart';
import NYMap from './NYMap';

class App extends Component {
  state = {
    data: [12, 5, 6, 6, 9, 10],
    width: 700,
    height: 500,
    id: 'root'
  }

  render() {
    return (
      <div className="App">
        <NYMap size={[500,500]}/>
      </div>
    );
  }
}

export default App;
