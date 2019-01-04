import React, { Component } from 'react';
import './App.css';
import cphComplete from './data/cph_complete.json'
import nonAdjustedCHS from './data/non_adjusted_CHS.json'
import BarChart from './BarChart';
import NYMap from './NYMap.jsx';
import Diagrams from './Diagrams';

const DATA = cphComplete.map(cphDistrict => {
  const match = nonAdjustedCHS.find(naCHSDistrict => cphDistrict.ID === naCHSDistrict.ID);
  if(!match) return cphDistrict;
  return { ...cphDistrict, ...match };
})

class App extends Component {
  state = {
    width: 900,
    height: 900,
    id: 'root',
    selected: [],
  }

  render() {
    console.log('render')
    return (
      <div className="App">
        <NYMap
          size={[this.state.width, this.state.height]}
          triggerSelected={this.triggerSelected.bind(this)}
          data={DATA}
        />
        <Diagrams 
          selected={this.state.selected}
          data={DATA}
        />
      </div>
    );
  }

  /**
   * lets Distric change the state of the App
   * 
   * @param {string} item 
   */
  triggerSelected(item) {
    const itemIndex = this.state.selected.indexOf(item);
    if (itemIndex === -1) {
        const selected = [...this.state.selected, item];
        this.setState({ selected });
    } else {
        const selected = this.state.selected;
        delete selected[itemIndex];
        this.setState({ selected });
    }
}
}

export default App;
