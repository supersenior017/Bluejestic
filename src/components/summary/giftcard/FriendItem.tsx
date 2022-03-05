import React from 'react'
import { Checkbox } from 'antd'

const FriendItem = ({url, name}) => {
  
  function onChange(e: { target: { checked: any; }; }) {
    console.log(`checked = ${e.target.checked}`);    
  }

  return (    
      <div className="flex justify-between items-center h-32 border-b border-gray-200">
        <div className="flex flex-row justify-start items-center font-normal text-lg"> 
          <div className=" h-24 mr-4 flex items-center rounded-full" style={{width:'60px', height:'60px'}}>
            <img src={url} width={60} height={60} className='rounded-full'/>
          </div>
          {name}
        </div>
        <div className="mr-8"><Checkbox onChange={onChange}></Checkbox></div>
      </div>
  )
}
export default FriendItem;