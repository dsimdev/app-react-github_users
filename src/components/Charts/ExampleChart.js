import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: "bar3d",
    width: "400",
    heigth: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Countries ...",
        subCaption: "One millon barrels",
        xAxisName: "Country",
        yAxisName: "Reserves",
        numberSuffix: "K",
        theme: "fusion",
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
