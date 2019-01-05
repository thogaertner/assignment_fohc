import React, { Component } from 'react'
import './App.css'
import HousingDefectDiagram from './HousingDefectDiagram';
import AmBarChart from './AmBarChart'


class Diagrams extends Component {
    render() {
        const data = this.props.data;
        const selected = this.props.selected;
        const displaySelection = this.props.displaySelection;
        return <div>
            <HousingDefectDiagram
                data={data}
                selected={selected}/>
            {/*<AmBarChart
                data={data}
            selected={selected}/>*/}
        </div>
    }
}
export default Diagrams;