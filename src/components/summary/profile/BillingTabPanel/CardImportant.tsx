import React from 'react';

const CardImportant = ({description, button_text}) => { 

  return (
    <div className="p-8 rounded-2xl relative" style={{backgroundColor:"#e6e9fc", border:'dotted 1px lightgray'}}>
      <div className="w-3/5">
        <div className="font-medium fs16">
          Important Note!
        </div>      
        <div className="flex justify-between items-end mt-4">
          <div className="font-medium fs12 text-gray-400">
            {description}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 right-14">
        <button className="fs12 font-medium text-white bg-indigo-500 hover:bg-indigo-700 rounded-xl w-48 py-1.5">
          {button_text}
        </button>
      </div>
      
    </div>
  )
}

export default CardImportant;
