import React from "react";
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type LineChartProps = {
  series:{
    name:string,
    data:number[],
  }[];
  data:{};
};
type LineChartState = {  
};


export default class LineChart extends React.Component<LineChartProps, LineChartState> {  
  
  state: LineChartState = {
    // optional second annotation for better type inference    
  };
  
  render() {    
    return (      
      <Chart options={this.props.data} series={this.props.series} type="line" height={300} />         
    );
  }
}