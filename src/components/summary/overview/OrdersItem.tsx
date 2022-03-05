import React from 'react'
import { Checkbox } from 'antd';

const OrdersItem = ({id, url, title, date, address, price, status}) => {
  const divStatus=[
    <div className="bg-green-200 text-green-500 rounded-2xl p-1.5 flex justify-center w-40">● Delivered</div>,
    <div className="bg-yellow-200 text-yellow-500 rounded-2xl p-1.5 flex justify-center w-40">● On Hold</div>,
    <div className="bg-red-200 text-red-500 rounded-2xl p-1.5 flex justify-center w-40">● Canceled</div>,

  ]

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <div className="w-full bg-white pl-14 pr-10 py-1 mt-4 rounded-2xl">
      <div className="flex flex-row gap-8 item-center justify-start items-center text-gray-500">
        <div className=""><Checkbox onChange={onChange}></Checkbox></div>
        <div className="w-1/12 text-indigo-500">{id}</div>
        <div className="w-3/12 flex flex-row justify-start items-center"> 
          <div className="w-24 h-24 mr-2 flex items-center"><img src={url}/></div>
          {title}
        </div>
        <div className="w-2/12">{date}</div>
        <div className="w-3/12 text-indigo-600">{address}</div>
        <div className="w-1/12">${price}</div>
        <div className="w-1/12 w-min">{divStatus[status-1]}</div>        
      </div>
    </div>
  )
}
export default OrdersItem;