import React, { Component } from 'react';
import { rgba } from 'polished';
import { BarChart } from 'react-easy-chart';
import './App.css';
import { getColorById } from './utils';


class VariableBar extends Component {
    state = {}
    transformedData = {};

    render() {
        this.data = this.props.data;
        this.selected = this.props.selected;
        this.displaySelection = this.props.displaySelection;
        
        const transformedData = this.transformData();

        const coloredData = this.colorData();

        return <div align="center"><h3>
            {this.displaySelection.split('_')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
        </h3>
            <BarChart 
                axes
                grid
                height={200}
                width={400}
                y2Type={'linear'}
                data={coloredData}/>
            </div>
    }

    transformData() {
        if (this.transformedData[this.displaySelection]) return this.transformedData[this.displaySelection];

        this.transformedData[this.displaySelection] = this.data.map(date => {
            return {
                x: date['Name'],
                y: date[this.displaySelection],
                id: date['ID']
            }
        })
        this.transformedData[this.displaySelection].sort((a, b) => a.y-b.y)

        return this.transformedData[this.displaySelection];
    }

    colorData() {
        return this.transformedData[this.displaySelection].map(date => {
            return this.selected.indexOf(date.id) === -1 ? 
                { ...date, color:'gray' } : 
                { ...date, color: getColorById(date.id) };
        })
    }
}
export default VariableBar;