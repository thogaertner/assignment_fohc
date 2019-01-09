import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import cphComplete from './data/cph_complete.json'
// import nonAdjustedCHS from './data/non_adjusted_CHS.json'
import NYMap from './NYMap.jsx';
import Diagrams from './Diagrams';
import DropDown from './DropDown';

const DATA = cphComplete /*|| cphComplete.map(cphDistrict => {
  const match = nonAdjustedCHS.find(naCHSDistrict => cphDistrict.ID === naCHSDistrict.ID);
  if(!match) return cphDistrict;
  return { ...cphDistrict, ...match };
})*/

class App extends Component {
  state = {
    mapWidth: 600,
    mapHeight: 600,
    id: 'root',
    selected: [],
    displaySelection: 'OverallPopulation_rate',
  }

  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <h1 align="center">New York Public Health Visualization</h1>
            <Col mdOffset={3} md={6}>
              <NYMap
              key={'NYMap'}
              size={[this.state.mapWidth, this.state.mapHeight]}
              triggerSelected={this.triggerSelected.bind(this)}
              data={DATA}
              displaySelection={this.state.displaySelection}/>
            </Col>
          </Row>
          <Row>
            <Col md={3} mdOffset={9}>
              <DropDown
                data={DATA}
                setDisplaySelection={this.setDisplaySelection.bind(this)}/>
            </Col>
          </Row> 
          <Row>         
            <Diagrams 
              selected={this.state.selected}
              displaySelection={this.state.displaySelection}
              data={DATA}/>
          </Row>
        </Grid>
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

  setDisplaySelection(displaySelection) {
    this.setState({ displaySelection })
  }
}

export default App;
