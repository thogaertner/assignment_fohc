import React, { Component } from 'react'
import './App.css'
import NY from './data/new_york.json'
import { geoMercator, geoPath } from 'd3-geo'

class NYMap extends Component {
   render() {
      const projection = geoMercator()
        .scale(40000)
        .center([-74.0060,40.7128])
        .translate([this.props.size[0] / 2, this.props.size[1] / 2])
      const pathGenerator = geoPath().projection(projection)
      const districts = NY.features
         .map((d,i) => 
            <path
                key={'path' + i}
                d={pathGenerator(d)}
                className='districts'
            />)
    return <svg width={this.props.size[0]} height={this.props.size[1]}>
        {districts}
    </svg>
   }
}
export default NYMap