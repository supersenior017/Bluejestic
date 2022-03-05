import React from 'react';
import { Alert } from 'antd';
import Card_BillingAddress from './Card_BillingAddress';
import Card_Payment from './Card_Payment';
import Transaction from './Transaction';



const BillingTabPanel = () => {
  return (
    <div style={{backgroundColor:'#ECEEF4'}}>
      <div className='py-16 px-32 mb-12 -mt-8 rounded-2xl bg-white'>
        <Alert message="We need your attention!   Your payment was declined. Please Add a new Payment Method." type="warning" showIcon  />
      </div>
      <Card_Payment/>
      <Card_BillingAddress/>
      <Transaction/>
    </div>
  )
}

export default BillingTabPanel;
