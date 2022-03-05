import React from 'react';
import Cardaddress from './Cardaddress';
import CardImportant from './CardImportant';

const Card_BillingAddress = () => {
  return (
    <div className="py-12 px-32 mb-16 rounded-2xl bg-white">
      <div className="border-b pb-12 px-32 -mx-32">        
        <div className="text-lg font-semibold w-3/6 flex items-center">Billing Address</div>         
      </div>
      <div className=" pt-16 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <Cardaddress no={1} address="784 Main St" post_code="Amesbury WA, 83234" primary={true}/>         
            <CardImportant description="Add another Billing Address to your profile" button_text="Add Address"/> 
            <Cardaddress no={2} address="504 Asbury Ave" post_code="Asbury Park, NJ 07712" primary={false}/>              
          </div>
      </div>
    </div>
  )
}

export default Card_BillingAddress;
