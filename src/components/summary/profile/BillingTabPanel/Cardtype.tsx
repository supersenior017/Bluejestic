import React from 'react';
import Image from 'next/image'

const Cardtype = ({card_type, name, card_num, expire_date, primary}) => {
  const url=["../assets/img/summary/profile/visa_icon.png",
            "../assets/img/summary/profile/MasterCard.png",
            "../assets/img/summary/profile/AmericanExpressCard.png"]
  const primary_state=primary?<div className="text-sm bg-green-100 text-green-500 rounded-lg px-2 py-1 flex justify-center"> Primary </div>:<div></div>

  return (
    <div className="p-8 rounded-2xl" style={{border:'dotted 1px lightgray'}}>
      <div className="font-medium fs16 flex justify-start items-center">
        {name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {primary_state}
      </div>
      <div className="flex justify-start items-center pt-3">
        <div >
            <img src={url[card_type-1]} style={{width:'95px', height:'45px'}} className="rounded-xl"/>
        </div>
        <div className="px-16">
          <div className="font-semibold fs14">{card_num}</div>
          <div className="font-medium fs12 text-gray-400  ">{expire_date}</div>
        </div>
      </div>
      <div className="flex justify-end items-center -mt-8">
        <div className="mr-4">
          <button className="fs12 font-medium text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-xl w-28 py-1.5">            
            Delete
          </button>
        </div>
        <div >
          <button className="fs12 font-medium text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-xl w-28 py-1.5">            
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cardtype;
