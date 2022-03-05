import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

const OrderSummary = (props) => {
    return (
        <div className="order-summary-wrapper">
            <Button type="primary" className="btn-checkout" shape="round">Proceed to checkout</Button>
            <h2>Order Summery</h2>
            <ul className="order-summey-info">
                <li>
                    <p className="summary-info">Merchandise Subtotal </p>
                    <p className="summary-price">$916.00</p>
                </li>
                <li>
                    <p className="summary-info">Discount</p>
                    <p className="summary-price">-$91.60</p>
                </li>
                <li>
                    <p className="summary-info">Shipping & Handling</p>
                    <p className="summary-price">$5.00</p>
                </li>
                <li>
                    <p className="summary-info">Estimate Tax</p>
                    <p className="summary-price">$4.20</p>
                </li>
            </ul>
            <div className="sub-total">
                <h4>Subtotal</h4>
                <h4>$833.60</h4>
            </div>
        </div>
    );
};

export default OrderSummary;
