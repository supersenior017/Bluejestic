import React, { useEffect, useState } from 'react';
import { Input, Button } from 'antd';

const AppliedCoupon = ({offername, storename}) => {
    return (
        <div className="applied-coupon-wrapper">
           <div className="applied-coupon-info">
                <h4>{offername}</h4>
                <p>{storename}</p>
           </div>
           <div className="applied-coupon-remove">
               <img src="/assets/img/shopping-cart/remove.svg" />
           </div>
        </div>
    );
};

export default AppliedCoupon;
