import React, { useEffect, useState } from 'react';
import { NextPage } from 'next'
import GiftCardType from 'src/components/summary/giftcard/GiftCardType';
import ReloadBalance from 'src/components/summary/giftcard/ReloadBalance';
import SendGiftCard from 'src/components/summary/giftcard/SendGiftCard';
//Layouts of this page
import Layout from '../layouts/Layout'

import {Row, Col, Menu, Dropdown, Button, Tabs, Table} from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const menu = (<Menu>
                  <Menu.Item key="1">Monthly</Menu.Item>
                  <Menu.Item key="2">Weekly</Menu.Item>
              </Menu>);

const table_columns = [
                          { title: 'Date',  dataIndex: 'date', },
                          { title: 'Description', dataIndex: 'description', },
                          { title: 'Amount', dataIndex: 'amount',},
                      ];
const table_data = [
                      { key: '1', date: 'September 7, 2020', description: 'Payment on order # 0980972893', amount: '-$6.24', },
                      { key: '2', date: 'September 3, 2020', description: 'Payment on order # 0980972893', amount: '$456.24', },
                      { key: '3', date: 'September 1, 2020', description: 'Payment on order # 0980972893', amount: '$2346.24', },
                      { key: '4', date: 'September 12, 2020', description: 'Payment on order # 0980972893', amount: '$16.24', },
                      { key: '5', date: 'September 4, 2020', description: 'Payment on order # 0980972893', amount: '$126.24', },
                    ];

const GiftCard: NextPage = () => {  
     
  return (    
    <Layout index={3}>
      <div className="dashboard-content-wrapper">
        <div className="content-title mb-5">Gift Card</div>
          <Row gutter={[36,30]}>
            <Col sm={24} md={12}><GiftCardType color={"#FF7D23"} amount={50}/></Col>
            <Col sm={24} md={12}><GiftCardType color={"#238BBA"} amount={100}/></Col>
          </Row>
          
        <div className="mt-16 w-full">
          <Tabs defaultActiveKey="1" centered style={{width:'100% !important'}}>
            <TabPane tab="Gift Cards Activities" key="1" className="">
              <div className='bg-white mt-8 rounded-2xl h-49 w-full '>
                <div className="flex justify-between items-center p-8">
                  <div>
                    <div className="fs16 font-semibold ">Gift Card Activity</div>
                    <div className="fs14 font-normal text-gray-500">Overview of  gift card purchases & received</div>
                  </div>
                  <div >     
                    <Dropdown overlay={menu}>
                        <Button>
                            Monthly <DownOutlined />
                        </Button>
                    </Dropdown>                   
                  </div>
                </div>
                <Table columns={table_columns} dataSource={table_data} />
              </div>
            </TabPane>
            <TabPane tab="Reload Balance" key="2" className="">
              <ReloadBalance amount={50}/>
            </TabPane>
            <TabPane tab="Send a Gift Card" key="3" style={{width:'100% !important'}}>
              <SendGiftCard/>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </Layout>
  )
}
export default GiftCard;