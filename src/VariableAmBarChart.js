import React, { Component } from 'react';
import './App.css';
import { getColorById } from './utils';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";


class VariableAmBarChart extends Component {
    state = {}
    transformedData = {};
    selected;

    componentDidMount() {
        let chart = am4core.create("displaySelection", am4charts.XYChart);
        chart.scrollbarX = new am4core.Scrollbar();

        // Add data
        chart.data = this.transformedData;

        // Create axes

        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "x";
        categoryAxis.sortChildren();
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;
        categoryAxis.renderer.labels.template.horizontalCenter = "right";
        categoryAxis.renderer.labels.template.verticalCenter = "middle";
        categoryAxis.renderer.labels.template.rotation = 270;
        categoryAxis.tooltip.disabled = true;
        categoryAxis.renderer.minHeight = 110;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        // Create series
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "y";
        series.dataFields.categoryX = "x";
        series.name = this.displaySelection;
        series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
        series.columns.template.fillOpacity = .8;


        let columnTemplate = series.columns.template;
        columnTemplate.strokeWidth = 0;
        columnTemplate.fill = am4core.color("gray");


        // on hover, make corner radiuses bigger
        let hoverState = series.columns.template.column.states.create("hover");
        hoverState.properties.cornerRadiusTopLeft = 0;
        hoverState.properties.cornerRadiusTopRight = 0;
        hoverState.properties.fillOpacity = 1;

        series.columns.template.adapter.add("fill", (fill, target)=>{
            return this.colorData(this.transformedData[target.dataItem.index].id);
       })

        this.chart = chart;
    }



    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {

        this.data = this.props.data;
        this.selected = this.props.selected;
        this.displaySelection = this.props.displaySelection;

        this.transformedData = this.transformData();

        if (this.chart) {
            // Add data
            this.chart.data = this.transformedData;
            this.chart.invalidateData();
        }

        return <div align="center"><h2>
            {this.displaySelection.split('_')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
        </h2>
            <div id="displaySelection" style={{ width: "100%", height: "500px" }}></div>
        </div>
    }

    colorData(item){
        if (this.selected.indexOf(item) === -1 )  {
            return am4core.color('gray');
        }
        return am4core.color(getColorById(item));
    }

    transformData() {
        if (this.transformedData[this.displaySelection]) return this.transformedData[this.displaySelection];

        this.transformedData[this.displaySelection] = this.data.map(date => {
            return {
                "x": date['Name'],
                "y": date[this.displaySelection],
                "id": date['ID']
            }
        })
        this.transformedData[this.displaySelection].sort((a, b) => a.y-b.y)

        return this.transformedData[this.displaySelection];
    }


}
export default VariableAmBarChart;