import React from 'react';
import { Pagination } from 'antd'
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


const Transaction = () => {

  return (
    <div className="py-12 px-32 mb-16 rounded-2xl bg-white">
      <div className="flex justify-between items-center mb-8">
        <div className="">
          <div className="text-lg font-semibold ">Your Transaction</div>          
          <div className="font-sm text-gray-400 font-light">Overview of Top Selling Items</div>  
        </div>                
        <Dropdown overlay={menu}>
            <Button>
                Monthly <DownOutlined />
            </Button>
        </Dropdown>   
      </div>
      <div className=" ">
        <div className="flex py-3 bg-gray-200 -mx-32 px-16">
          <div className="w-2/12 text-center font-semibold fs12 text-gray-600">Date</div>
          <div className="w-4/12 text-center font-semibold fs12 text-gray-600" >Card</div>
          <div className="w-4/12 text-center font-semibold fs12 text-gray-600">Order</div>
          <div className="w-2/12 text-center font-semibold fs12 text-gray-600">Amount</div>
        </div>
        <div className="flex py-10 border-b -mx-32 px-16">
          <div className="w-2/12 text-center font-normal fs16 text-gray-500">Sept 07, 2020</div>
          <div className="w-4/12 text-center font-normal fs16 text-gray-500 flex justify-center">
            <div >
              <img src="../assets/img/summary/profile/visa_icon.png" width={35} height={20} className="rounded-xl"/>
            </div>
            &nbsp;&nbsp;Visa ending in 1234
          </div>
          <div className="w-4/12 text-center font-normal fs16 text-gray-500">Gift card claim code #555000</div>
          <div className="w-2/12 text-center font-normal fs16 text-gray-500">-$50.00</div>
        </div>
        <div className="flex py-10 border-b -mx-32 px-16">
          <div className="w-2/12 text-center font-normal fs16 text-gray-500">Sept 07, 2020</div>
          <div className="w-4/12 text-center font-normal fs16 text-gray-500 flex justify-center">
            <div >
              <img src="../assets/img/summary/profile/visa_icon.png" width={35} height={20} className="rounded-xl"/>
            </div>
            &nbsp;&nbsp;Visa ending in 1234
          </div>
          <div className="w-4/12 text-center font-normal fs16 text-gray-500">Gift card claim code #555000</div>
          <div className="w-2/12 text-center font-normal fs16 text-gray-500">-$50.00</div>
        </div>
        <div className="flex py-10 border-b -mx-32 px-16">
          <div className="w-2/12 text-center font-normal fs16 text-gray-500">Sept 07, 2020</div>
          <div className="w-4/12 text-center font-normal fs16 text-gray-500 flex justify-center">
            <div >
              <img src="../assets/img/summary/profile/visa_icon.png" width={35} height={20} className="rounded-xl"/>
            </div>
            &nbsp;&nbsp;Visa ending in 1234
          </div>
          <div className="w-4/12 text-center font-normal fs16 text-gray-500">Gift card claim code #555000</div>
          <div className="w-2/12 text-center font-normal fs16 text-gray-500">-$50.00</div>
        </div>
        <div className="flex py-10 border-b -mx-32 px-16">
          <div className="w-2/12 text-center font-normal fs16 text-gray-500">Sept 07, 2020</div>
          <div className="w-4/12 text-center font-normal fs16 text-gray-500 flex justify-center">
            <div >
              <img src="../assets/img/summary/profile/visa_icon.png" width={35} height={20} className="rounded-xl"/>
            </div>
            &nbsp;&nbsp;Visa ending in 1234
          </div>
          <div className="w-4/12 text-center font-normal fs16 text-gray-500">Gift card claim code #555000</div>
          <div className="w-2/12 text-center font-normal fs16 text-gray-500">-$50.00</div>
        </div>
        <div className="flex justify-center flex pt-10  w-full">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </div>
  )
}

export default Transaction;
