import React, { Component } from 'react'
import { rgba } from 'polished';
import './App.css'
import { getColorById } from './utils';


class District extends Component {
    state = {
        selected: false,
    }

    render() {
        const districtDate = this.props.districtDate;
        const pathGenerator = this.props.pathGenerator;
        const id = this.props.id;
        const display = this.props.display;
        const distId = districtDate.properties.communityDistrict

        return <path
                key={'path' + districtDate.id}
                d={pathGenerator(districtDate)}
                className='districts'
                fill={this.getColor()} 
                stroke={this.state.selected ? 
                    getColorById(distId) :
                    '#130f2b'
                }
                strokeWidth={this.state.selected ? 3 : 1}
                onClick={() => {
                    this.setState({ selected: !this.state.selected });
                    this.props.triggerSelected(districtDate.properties.communityDistrict)
                    }}
            >
                    <title key={'title'+districtDate.id}>{this.getTitle()}</title>
            </path>
    }

    getColor() {
        const districtDate = this.props.districtDate;
        const display = this.props.display;
        const dataMinMax = this.props.dataMinMax;
        
        if (districtDate.properties && 
                districtDate.properties.data &&
                districtDate.properties.data[display] &&
                typeof districtDate.properties.data[display] === 'number'
            ) {
                return rgba(0, 0, 255, 
                    (districtDate.properties.data[display] - dataMinMax[display].min)/
                    (dataMinMax[display].max - dataMinMax[display].min));
            } else {
                return "gray";
            }
    }

    getTitle() {
        const districtDate = this.props.districtDate;
        const display = this.props.display;
        
        if (districtDate.properties && 
            districtDate.properties.data &&
            districtDate.properties.data[display]) {
                return `${districtDate.properties.data.Name}: ${districtDate.properties.data[display]}`;
        }
        return '';
    }

}
export default District