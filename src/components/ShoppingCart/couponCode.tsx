import React, { useEffect, useState } from 'react';
import { Input, Button, Collapse } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import AppliedCoupon from './appliedCoupon';

const { Panel } = Collapse;

function callback(key) {
    console.log(key);
  }

const CouponCode = (props) => {
    return (
        <div className="coupon-wrapper">
            <h4>Add a coupon code</h4>
            <div className="promo-code">
                <Input placeholder="Promo Code" className="form-control" />
                <Button type="primary" shape="round">Apply</Button>
            </div>
            <a href="#" className="view-all">View all promo codes <img src="/assets/img/right-arrow.svg" /></a>
            <div className="coupon-divider"></div>
            <Collapse
                defaultActiveKey={['1']}
                onChange={callback}
                expandIconPosition="right"
                expandIcon={({ isActive }) => <PlusOutlined rotate={isActive ? 90 : 0} />}
                className="applied-coupons"
            >
                <Panel header="Applied coupons" key="1">
                    <AppliedCoupon 
                        offername="BOGO 50% OFF DRESSES"
                        storename="Jane’s Store"
                    />
                    <AppliedCoupon 
                        offername="30% OFF shoes"
                        storename="Ace Store"
                    />
                </Panel>
            </Collapse>
        </div>
    );
};

export default CouponCode;
