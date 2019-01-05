import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import './App.css';
import HousingDefectDiagram from './HousingDefectDiagram';
import AmBarChart from './AmBarChart'
import VariableBar from './VariableBar';


class Diagrams extends Component {
    render() {
        const data = this.props.data;
        const selected = this.props.selected;
        const displaySelection = this.props.displaySelection;
        return <div> 
            <Col md={4}>
            <VariableBar
                data={data}
                selected={selected}
                displaySelection={displaySelection}/>
            </Col>
            <Col md={4}>
            <HousingDefectDiagram
                data={data}
                selected={selected}/>
            </Col>
           
            {/*<AmBarChart
                data={data}
            selected={selected}/>*/}
        </div>
    }
}
export default Diagrams;