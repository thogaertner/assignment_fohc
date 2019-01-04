import React, { Component } from 'react'
import { rgba } from 'polished';
import './App.css'
import data from './data/cph_complete.json'


class District extends Component {
    state = {
        selected: false,
    }

    render() {
        const districtDate = this.props.districtDate;
        const pathGenerator = this.props.pathGenerator;
        const id = this.props.id;
        const display = this.props.display;

        return <path
                key={'path' + districtDate.id}
                d={pathGenerator(districtDate)}
                className='districts'
                fill={this.getColor()} 
                strokeWidth={this.state.selected ? 3 : 1}
                onClick={() => { 
                    this.setState({ selected: !this.state.selected });
                    }}
                title="test"
            />
    }

    getColor() {
        const districtDate = this.props.districtDate;
        const display = this.props.display;
        const cphCompleteMinMax = this.props.cphCompleteMinMax;

        if (districtDate.properties && 
                districtDate.properties.cphComplete &&
                districtDate.properties.cphComplete[display] &&
                typeof districtDate.properties.cphComplete[display] === 'number'
            ) {
                return rgba(0, 0, 255, 
                    (districtDate.properties.cphComplete[display] - cphCompleteMinMax[display].min)/
                    (cphCompleteMinMax[display].max - cphCompleteMinMax[display].min));
            } else {
                return "gray";
            }
    }

}
export default District