import React, { Component } from 'react'
import './App.css'
import NY from './data/new_york.json'
import { geoMercator, geoPath } from 'd3-geo'
import District from './District';

const COORDINATED_NEW_YORK = [-74.0060,40.7128];
const SCALE = 50000/600;

class NYMap extends Component {
    state = {
        selected: [],
    }

    data;
    dataByDistricts;
    dataMinMax;

    render() {
        this.data = this.props.data;
        const displaySelection = this.props.displaySelection;
        const projection = geoMercator()
            .scale(SCALE*this.props.size[0])
            .center(COORDINATED_NEW_YORK)
            .translate([this.props.size[0] / 2, this.props.size[1] / 2]);

        const pathGenerator = geoPath().projection(projection);
        
        const districtData = this.preprocessData();
        const dataMinMax = this.getDataMinMax();

        const districts = districtData
            .map((districtDate, i) =>
                <District 
                    key={'district' + i}
                    pathGenerator={pathGenerator}
                    id={i}
                    districtDate={districtDate}
                    display={displaySelection}
                    dataMinMax={dataMinMax}
                    triggerSelected={this.props.triggerSelected}/>)

        return <div>
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
}
export default NYMap