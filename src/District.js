import React, { Component } from 'react'
import { rgba } from 'polished';
import './App.css'


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
                    this.props.triggerSelected(districtDate.properties.communityDistrict)
                    }}
                title="test"
            />
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

}
export default District