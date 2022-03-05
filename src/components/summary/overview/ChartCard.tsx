import React from 'react';
import PieChart from './PieChart';
import LineChart from './LineChart';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
      <Menu.Item key="1">
          Monthly
      </Menu.Item>
      <Menu.Item key="2">
          Weekly
      </Menu.Item>
  </Menu>
);

var chartdata={
  series:[40, 30, 15, 15],
  labels:["Shopping", "Sports", "Food", "Clothes"]
}
var series =  [
  { name: "Shopping",data: [20, 41, 35, 51, 49]},
  { name: "Sports",data: [15, 31, 23, 49, 62 ]},
  { name: "Food",data: [ 31, 23, 49, 62, 28 ]},
  { name: "Clothes",data: [18, 34, 19, 33, 45 ]} 
];
var data =  {
  chart: { height: 350,type: 'line',zoom: {enabled: false}},
  dataLabels: {enabled: false},
  stroke: {curve: 'smooth'},
  title: {text: 'Product Trends by Month',align: 'left'},
  grid: {row: {colors: ['#f3f3f3', 'transparent'],  opacity: 0.3},},
  xaxis: { categories: ['1d', '7d', '14d', '21d', '30d'],}
}

const ChartCard = () => {

  return (
    <div className="chart-card px-5 pt-4">
      <div className="flex justify-between">
        <div>
          <div className="chart-title">Orders by Categories</div>
          <div className="chart-description">Overview of Order History</div>
        </div>
        <div className="selectView">     
          <Dropdown overlay={menu}>
              <Button>
                  Monthly <DownOutlined />
              </Button>
          </Dropdown>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className = "" style={{width:'40%', }}>
          <PieChart chartdata={chartdata}/>
          
        </div>
        <div className = "" style={{width:'60%', }}>
          <LineChart series={series} data={data}/>
        </div>
      </div>
    </div>
  )
}

export default ChartCard;
