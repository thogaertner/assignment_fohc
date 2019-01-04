import React, { Component } from 'react'
import './App.css'
import NY from './data/new_york.json'
import cphComplete from './data/cph_complete.json'
import nonAdjustedCHS from './data/non_adjusted_CHS.json'
import { geoMercator, geoPath } from 'd3-geo'
import District from './District';

const COORDINATED_NEW_YORK = [-74.0060,40.7128];
const SCALE = 50000;

class NYMap extends Component {
    state = {
        display: 'OverallPopulation_rate',
    }

    data = nonAdjustedCHS
    dataByDistricts;
    dataMinMax;

    render() {
        const projection = geoMercator()
            .scale(SCALE)
            .center(COORDINATED_NEW_YORK)
            .translate([this.props.size[0] / 2, this.props.size[1] / 2])

        const pathGenerator = geoPath().projection(projection)
        
        const districtData = this.preprocessData();
        const dataMinMax = this.getDataMinMax();

        const districts = districtData
            .map((districtDate, i) =>
                <District
                    pathGenerator={pathGenerator}
                    id={i}
                    districtDate={districtDate}
                    display={this.state.display}
                    dataMinMax={dataMinMax}/>)
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
            mapFeature.properties.data = this.data.find(date => date.ID === mapFeature.properties.communityDistrict)
            return mapFeature;
        })

        return this.dataByDistricts;
    }

    /**
     * creates an Object with the min/max values
     */
    getDataMinMax() {
        if (this.dataMinMax) return this.dataMinMax;

        this.dataMinMax = {};
        this.data.forEach(district => {
            Object.keys(district).forEach(key => {
                const value = district[key];
                if (typeof value !== "number") return;
                if (!this.dataMinMax[key]) {
                    this.dataMinMax[key] = {}
                    this.dataMinMax[key].min = value;
                    this.dataMinMax[key].max = value;
                    return
                }
                if (value < this.dataMinMax[key].min) {
                    this.dataMinMax[key].min = value;                  
                }
                if (value > this.dataMinMax[key].max) {
                    this.dataMinMax[key].max = value;                    
                }
            })
        })
        return this.dataMinMax;
    }

    createDropdown() {
        const dropDownId = "displayDropdown"

        const keys = Object.keys(this.data[0])
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