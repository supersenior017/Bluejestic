import React, { useEffect, useState } from 'react';
import { NextPage } from 'next'
import { Row, Col } from 'antd';
import Header from 'src/components/shared/headers/Header'
import Cart from 'src/components/ShoppingCart/cart';
import SimilarProduct from 'src/components/ShoppingCart/similarProduct';
import OrderSummary from 'src/components/ShoppingCart/orderSummary';
import CouponCode from 'src/components/ShoppingCart/couponCode';
import ProtectedRoute from 'src/hoc/ProtectedRoute'

const ShoppingCart: NextPage = () => {

    return (
        <div>
            <Header />
            <div className="shoppingcart-wrapper">
                <Row gutter={30}>
                    <Col className="gutter-row" span={16}>
                        <Cart />
                        <SimilarProduct/>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <OrderSummary />
                        <CouponCode />
                    </Col>
                </Row>
            </div>
            <div className="cart-footer">
                <ul>
                    <li>
                        <a href="#">Privacy</a>
                    </li>
                    <li>
                        <a href="#">About us</a>
                    </li>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                    <li>
                        <a href="#">Terms</a>
                    </li>
                    <li>
                        <a href="#">Help Center</a>
                    </li>
                </ul>
                <p>© Bluejestic Inc.</p>
            </div>
        </div>
    );
};

// export default ProtectedRoute(ShoppingCart)
export default ShoppingCart
