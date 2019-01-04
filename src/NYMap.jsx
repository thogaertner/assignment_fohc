import React, { Component } from 'react'
import './App.css'
import NY from './data/new_york.json'
import cphComplete from './data/cph_complete.json'
import { geoMercator, geoPath } from 'd3-geo'
import District from './District';

const COORDINATED_NEW_YORK = [-74.0060,40.7128];
const SCALE = 50000;

class NYMap extends Component {
    state = {
        display: 'OverallPopulation_rate',
    }

    dataByDistricts;
    cphCompleteMinMax;

    render() {
        const projection = geoMercator()
            .scale(SCALE)
            .center(COORDINATED_NEW_YORK)
            .translate([this.props.size[0] / 2, this.props.size[1] / 2])

        const pathGenerator = geoPath().projection(projection)
        
        const districtData = this.preprocessData();
        const cphCompleteMinMax = this.getCphCompleteMinMax();

        const districts = districtData
            .map((districtDate, i) =>
                <District
                    pathGenerator={pathGenerator}
                    id={i}
                    districtDate={districtDate}
                    display={this.state.display}
                    cphCompleteMinMax={cphCompleteMinMax}/>)
        const dropDown = this.createDropdown()

        return <div>
            {dropDown}
            <svg width={this.props.size[0]} height={this.props.size[1]}>
                {districts}
            </svg>
        </div>
    }

    preprocessData() { 
        if (this.dataByDistricts) return this.dataByDistricts;

        this.dataByDistricts = NY.features.map(mapFeature => {
            mapFeature.properties.cphComplete = cphComplete.find(date => date.ID === mapFeature.properties.communityDistrict)
            return mapFeature;
        })

        return this.dataByDistricts;
    }

    /**
     * creates an Object with the min/max values
     */
    getCphCompleteMinMax() {
        if (this.cphCompleteMinMax) return this.cphCompleteMinMax;

        this.cphCompleteMinMax = {};
        cphComplete.forEach(district => {
            Object.keys(district).forEach(key => {
                const value = district[key];
                if (typeof value !== "number") return;
                if (!this.cphCompleteMinMax[key]) {
                    this.cphCompleteMinMax[key] = {}
                    this.cphCompleteMinMax[key].min = value;
                    this.cphCompleteMinMax[key].max = value;
                    return
                }
                if (value < this.cphCompleteMinMax[key].min) {
                    this.cphCompleteMinMax[key].min = value;                  
                }
                if (value > this.cphCompleteMinMax[key].max) {
                    this.cphCompleteMinMax[key].max = value;                    
                }
            })
        })
        return this.cphCompleteMinMax;
    }

    createDropdown() {
        const dropDownId = "displayDropdown"

        const keys = Object.keys(cphComplete[0])
            .filter(key => ['ID', 'Name'].indexOf(key) === -1)
            .map(key => <option value={key}>{key}</option>)

        const select = <select id="dropDownId"
            onChange={(event) => {
                this.setState({ display: document.getElementById("dropDownId").value })
            }}
        >
            {keys}
        </select>

        return select
    }
}
export default NYMap