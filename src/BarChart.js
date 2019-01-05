import React, { Component } from 'react';
import './App.css';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class AmBarChat extends Component {
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    chart.data = this.data;

    // Create axes

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "Name";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
      if (target.dataItem && target.dataItem.index & 2 == 2) {
        return dy + 25;
      }
      return dy;
    });

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "Psych_Hosp";
    series.dataFields.categoryX = "Name";
    series.name = "Psych_Hosp";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = .8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
  this.data = this.props.data;
    return (
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    );
  }
}

export default AmBarChat;