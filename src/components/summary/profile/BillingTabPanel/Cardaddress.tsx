import React from 'react';

const Cardaddress = ({no, address, post_code, primary}) => {
  const primary_state=primary?<div className="text-sm bg-green-100 text-green-500 rounded-lg px-2 py-1 flex justify-center"> Primary </div>:<div></div>

  return (
    <div className="px-16 py-8 rounded-2xl" style={{border:'dotted 1px lightgray'}}>
      <div className="font-medium fs16 flex justify-start items-center">
        Address {no}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {primary_state}
      </div>
      <div className="pt-3">        
        
          <div className="font-semibold fs14 text-gray-500">{address}</div>
          <div className="font-medium fs12 text-gray-300  ">{post_code}</div>
        
      </div>
      <div className="flex justify-end items-center -mt-8">
        <div className="mr-8">
          <button className="fs12 font-medium text-gray-500 bg-gray-100 rounded-xl w-32 py-1.5">            
            Delete
          </button>
        </div>
        <div >
          <button className="fs12 font-medium text-gray-500 bg-gray-100 rounded-xl w-32 py-1.5">            
            Edit
          </button>
        </div>
      </div>
      
      
    </div>
  )
}

export default Cardaddress;
