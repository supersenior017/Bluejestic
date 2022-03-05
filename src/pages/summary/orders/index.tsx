import React, { useEffect, useState } from 'react';
import { NextPage } from 'next'

import OrderInfo from 'src/components/summary/orders/OrderInfo';
import OrderDetails from 'src/components/summary/orders/OrderDetails';
//Layouts of this page
import Layout from '../layouts/Layout'

const Orders: NextPage = () => {  
       
  return (    
    <Layout index={2}>
      <div className="dashboard-content-wrapper">
        <div className="content-title mb-5">Orders</div>
        <OrderInfo/>
        <OrderDetails/>
        <div className="m-16"></div>
      </div>
    </Layout>
  )
}
export default Orders;