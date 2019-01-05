import React, { Component } from 'react'
import './App.css'
import HousingDefectDiagram from './HousingDefectDiagram';
import AmBarChart from './BarChart';


class Diagrams extends Component {
    render() {
        const data = this.props.data;
        const selected = this.props.selected;
        const displaySelection = this.props.displaySelection;
        return <div>
            <AmBarChart
                data={data}
                selected={selected}/>
        </div>
    }
}
export default Diagrams;