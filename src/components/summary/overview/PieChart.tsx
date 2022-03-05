import React from "react";
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type PieChartProps = {
  chartdata:{
    series:number[],
    labels:string[],
  },  
};
type PieChartState = {
  
};


export default class PieChart extends React.Component<PieChartProps, PieChartState> {
  
  state: PieChartState = {
    // optional second annotation for better type inference    
  };
  render() {
    return (
      <Chart options={this.props.chartdata} type="pie" width="100%" series={this.props.chartdata.series} />
    );
  }
}