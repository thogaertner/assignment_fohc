import React, { Component } from 'react';
import { rgba } from 'polished';
import { BarChart } from 'react-easy-chart';
import './App.css';


class HousingDefectDiagram extends Component {
    state = {
    }

    render() {
        this.data = this.props.data;
        this.selected = this.props.selected;
        
        const transformedData = this.transformData();

        const coloredData = this.colorData();

        return <div>
            Housing Defects
            <BarChart 
                axisLabels={{x: '', y: 'in %'}}
                axes
                grid
                y2Type={'linear'}
                data={coloredData}/>
            </div>
    }

    transformData() {
        if (this.transformedData) return this.transformedData;

        this.transformedData = this.data.map(date => {
            return {
                x: date['Name'],
                y: date['Housing_Defects'],
                id: date['ID']
            }
        })
        this.transformedData.sort((a, b) => a.y-b.y)

        return this.transformedData;
    }

    colorData() {
        return this.transformedData.map(date => {
            return this.selected.indexOf(date.id) === -1 ? 
                date : { ...date, color: 'orange', text: 'asdasd' };
        })
    }
}
export default HousingDefectDiagram;