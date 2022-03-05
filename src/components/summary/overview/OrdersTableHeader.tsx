import React from 'react'
import { Checkbox } from 'antd';

const OrdersTableHeader = () => {
  function onChange(e: { target: { checked: any; }; }) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <div className="w-full bg-white pl-14 pr-4 py-3.5 mt-4 rounded-2xl">
      <div className="flex flex-row gap-8 item-center justify-start text-gray-500">
        <div className=""><Checkbox onChange={onChange}></Checkbox></div>
        <div className="w-1/12">Order</div>
        <div className="w-3/12">Product</div>
        <div className="w-2/12">Date</div>
        <div className="w-3/12">Shipping Address</div>
        <div className="w-1/12">Price</div>
        <div className="w-1/12 w-min"><div className="w-40">Status</div></div>        
      </div>
    </div>
  )
}
export default OrdersTableHeader;