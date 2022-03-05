import React from 'react'
import { Input, Button, Row, Col} from 'antd';

const GiftCardType = ({color, amount}) => {
  return (
    <div style={{backgroundColor:`${color}`, width:'100%', padding:'20px', display:'flex', borderRadius:'8px'}}>
      
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="35" r="35" fill="white"/>
        <path d="M50 24.041H18V51.9998H50V24.041Z" fill="#556EE6"/>
        <path d="M54 23.2432H14V30.4326H54V23.2432Z" fill="#556EE6"/>
        <path d="M18 31.6309H50" stroke="#14006A" strokeWidth="6" strokeMiterlimit="10"/>
        <path d="M34 23.2422V51.9998" stroke="#FF7D23" strokeWidth="10" strokeMiterlimit="10"/>
        <path d="M32 31.6309H36" stroke="#DE5400" strokeWidth="6" strokeMiterlimit="10"/>
        <path d="M34.2009 22.6435C33.6809 21.1657 36.1449 18.6494 38.6009 17.4511C40.9489 16.3168 44.9009 15.2863 45.8009 16.6523C46.6369 17.9224 46.7129 21.0898 44.2009 22.6435C40.8489 24.7164 34.7529 24.2172 34.2009 22.6435Z" stroke="#FF7D23" strokeWidth="5" strokeMiterlimit="10"/>
        <path d="M33.2764 22.6443C33.7964 21.1665 31.8564 18.6502 29.4004 17.452C27.0524 16.3177 22.3004 15.6866 21.4004 17.0526C20.5644 18.3227 20.7644 21.0906 23.2764 22.6443C26.6284 24.7173 32.7244 24.218 33.2764 22.6443Z" stroke="#FF7D23" strokeWidth="5" strokeMiterlimit="10"/>
      </svg>
      
      <div className='text-white p-3 pl-5 '>
        <div className='text-lg font-semibold'>Current Gift Card Balance: $ {amount}</div>
        <div className='text-base mt-12 font-semibold'>Redeem a Gift Card</div>
        <div className='mt-4 w-full'>
        <Row gutter={20} className=''>
          <Col flex="auto"><Input placeholder="Enter claim code" className='rounded-xl border-0 font-normal'/></Col>
          <Col ><Button type="primary" className='rounded-xl bg-indigo-500 hover:bg-indigo-700 border-0 font-semibold'>Apply</Button></Col>
        </Row>
          
          
        </div>
        <div className='text-sm mt-8 font-normal'>The entire gift card amount will be stored in your account, and it never expires.</div>
      </div>
    </div>
  )
}

export default GiftCardType
