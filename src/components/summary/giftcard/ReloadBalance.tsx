import React, { useState, useEffect } from 'react';
import { Input, Tabs, Button} from 'antd';
import PaymentCard from './PaymentCard';
const { TabPane } = Tabs;

const ReloadBalance = ({amount}) => {
  const [btnNo, setButtonSel] = useState(1)
  const changeButton=(No:number)=>{
    setButtonSel(No);
  }
  return (
    <div className="reloadbalance" style={{backgroundColor:'white',width:'100%', padding:'0 30px 20px 30px', borderRadius:'10px', marginTop:'30px', marginBottom:'40px'}}>
      <Tabs defaultActiveKey="1" centered >
        <TabPane tab="Reload Your balance" key="1" className="">          
          <div className='text-black p-3 pl-5 '>
            <div className='fs24 font-semibold '>Current Gift Card Balance: $ {amount}</div>
            <div className='fs18 font-semibold mt-4'>Amount</div>
            <div className='mt-4 w-full'>
              <button style={{backgroundColor:(btnNo===1)?'#6366f1':'#e0e0e0',color:(btnNo===1)?'white':'black', width:'50px', height:'40px', marginRight:'20px', borderRadius:'1px'}} onClick={()=>changeButton(1)}>$25</button>
              <button style={{backgroundColor:(btnNo===2)?'#6366f1':'#e0e0e0',color:(btnNo===2)?'white':'black', width:'50px', height:'40px', marginRight:'20px', borderRadius:'1px'}} onClick={()=>changeButton(2)}>$50</button>
              <button style={{backgroundColor:(btnNo===3)?'#6366f1':'#e0e0e0',color:(btnNo===3)?'white':'black', width:'50px', height:'40px', marginRight:'20px', borderRadius:'1px'}} onClick={()=>changeButton(3)}>$75</button>
              <button style={{backgroundColor:(btnNo===4)?'#6366f1':'#e0e0e0',color:(btnNo===4)?'white':'black', width:'50px', height:'40px', marginRight:'20px', borderRadius:'1px'}} onClick={()=>changeButton(4)}>$100</button>
              <Input addonBefore="$" className='w-40 h-8' />
            </div>
            <div className='fs12 text-red-500 mt-1'>*No amount has been selected/*Invalid amount</div>
            <div className='fs18 font-semibold mt-8'>Payment method</div>
            <div className='flex justify-start items-center mt-4 mb-16'>
              <PaymentCard sel={true} kind={1} name={'Danny Thomas'} expire={'Expires on 03/2023'}/>
              <PaymentCard sel={false} kind={2} name={'Danny Thomas'} expire={'Expires on 03/2023'}/>
              <PaymentCard sel={false} kind={1} name={'Danny Thomas'} expire={'Expires on 03/2023'}/>
              <PaymentCard sel={false} kind={0} name={' '} expire={' '}/>
            </div>
            <button className='bg-indigo-500 hover:bg-indigo-700' style={{color:'white', width:'150px', padding:'10px', borderRadius:'5px', fontSize:'16px'}}>Reload</button>
          </div>
        </TabPane>
        <TabPane tab="Auto-Reload" key="2" className="">        
          <div className='text-black p-3 pl-5 '>
            <div className='fs24 font-semibold '>Auto Reload Balance: $ {100}</div>
            <div className='fs18 font-semibold mt-4'>Amount</div>
            <div className='mt-4 w-full'>
              <button style={{backgroundColor:(btnNo===1)?'#6366f1':'#e0e0e0',color:(btnNo===1)?'white':'black', width:'50px', height:'40px', marginRight:'20px', borderRadius:'1px'}} onClick={()=>changeButton(1)}>$25</button>
              <button style={{backgroundColor:(btnNo===2)?'#6366f1':'#e0e0e0',color:(btnNo===2)?'white':'black', width:'50px', height:'40px', marginRight:'20px', borderRadius:'1px'}} onClick={()=>changeButton(2)}>$50</button>
              <button style={{backgroundColor:(btnNo===3)?'#6366f1':'#e0e0e0',color:(btnNo===3)?'white':'black', width:'50px', height:'40px', marginRight:'20px', borderRadius:'1px'}} onClick={()=>changeButton(3)}>$75</button>
              <button style={{backgroundColor:(btnNo===4)?'#6366f1':'#e0e0e0',color:(btnNo===4)?'white':'black', width:'50px', height:'40px', marginRight:'20px', borderRadius:'1px'}} onClick={()=>changeButton(4)}>$100</button>
              <Input addonBefore="$" className='w-40 h-8' />
            </div>
            <div className='fs12 text-red-500 mt-1'>*No amount has been selected/*Invalid amount</div>
            <div className='fs18 font-semibold mt-8'>Payment method</div>
            <div className='flex justify-start items-center mt-4 mb-16'>
              <PaymentCard sel={true} kind={1} name={'Danny Thomas'} expire={'Expires on 03/2023'}/>
              <PaymentCard sel={false} kind={2} name={'Danny Thomas'} expire={'Expires on 03/2023'}/>
              <PaymentCard sel={false} kind={1} name={'Danny Thomas'} expire={'Expires on 03/2023'}/>
            </div>
            <button className='bg-indigo-500 hover:bg-indigo-700' style={{color:'white', width:'150px', padding:'10px', borderRadius:'5px', fontSize:'16px'}}>Reload</button>
          </div>
        </TabPane>
      </Tabs>     
    </div>
  )
}

export default ReloadBalance
