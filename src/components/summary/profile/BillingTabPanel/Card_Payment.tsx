import React from 'react';
import {  Tabs,   } from 'antd';
import Cardtype from './Cardtype'
import CardImportant from './CardImportant';

const { TabPane } = Tabs;

const Card_Payment = () => {
  return (
    <div className="py-16 px-32 mb-16 rounded-2xl bg-white">
      <div className="border-b px-32 -mx-32">
        <div className="flex -mt-16 ">
          <div className="text-lg font-semibold w-3/6 flex items-center">Payment Method</div>          
          <div className="w-6/6 flex justify-end items-center profile-payment-tab">
            <Tabs defaultActiveKey="3" centered className="">
              <TabPane tab="Credit / Debit Card" key="1" className="px-12 -pb-12">            
              </TabPane>
              <TabPane tab="Paypal" key="2" className="px-12 -pb-12">            
              </TabPane>          
            </Tabs> 
          </div>
        </div>
      </div>
      <div className="pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Cardtype card_type={1} name="Vincent Zhang" card_num="Visa ****5621" expire_date="Card expires at 4/26" primary={true}/>
            <Cardtype card_type={2} name="Vincent Zhang" card_num="Mastercard ****3485" expire_date="Card expires at 4/26" primary={false}/>
            <Cardtype card_type={3} name="Vincent Zhang" card_num="Amex ****3492" expire_date="Card expires at 4/26" primary={false}/>
            <CardImportant description="Please carefully read Bluejestic Terms adding your new payment card" button_text="Add Card"/>            
          </div>
      </div>
    </div>
  )
}

export default Card_Payment;
