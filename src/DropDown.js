import React, { Component } from 'react'
import './App.css'

class DropDown extends Component {
    state = {
        display: 'OverallPopulation_rate',
    }

    data;
    dataByDistricts;
    dataMinMax;

    render() {
        this.data = this.props.data;
        this.setDisplaySelection = this.props.setDisplaySelection;

        const options = Object.keys(this.data[0])
            .filter(key => ['ID', 'Name'].indexOf(key) === -1)
            .map(key => <option
                key={key}
                value={key}>
                    {key.split('_')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(' ')}
                </option>)

        return <select 
            id="dropDownId"
                onChange={(event) => {
                    this.setDisplaySelection(document.getElementById("dropDownId").value )}}
            >
            {options}
        </select>
            
    }
}
export default DropDown