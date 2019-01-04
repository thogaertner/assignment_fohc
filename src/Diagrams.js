import React, { Component } from 'react'
import './App.css'
import HousingDefectDiagram from './HousingDefectDiagram';


class Diagrams extends Component {
    render() {
        const data = this.props.data;
        const selected = this.props.selected;
        return <div>
            <HousingDefectDiagram
                data={data}
                selected={selected}/>
        </div>
    }
}
export default Diagrams;