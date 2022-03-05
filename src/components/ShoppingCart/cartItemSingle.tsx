import React, { useEffect, useState } from 'react';
import { Row, Col, Dropdown, Button, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
    <Menu>
      <Menu.Item key="1">
        1
      </Menu.Item>
      <Menu.Item key="2">
        2
      </Menu.Item>
      <Menu.Item key="3">
        3
      </Menu.Item>
    </Menu>
  );

const CartItemSingle = ({ productname, productimg, productdetail, productstyle, productsize, productcolor, productprice, productdiscprice }) => {
    return (
        <div className="cart-item-wrapper">
            <Row gutter={30} align="middle">
                <Col className="gutter-row" span={5}>
                    <div className="cart-item-image">
                        <img src={productimg} />
                    </div>
                </Col>
                <Col className="gutter-row" span={9}>
                    <div className="cart-item-info">
                        <h5 className="product-name"><a href="#">{productname}</a></h5>
                        <p className="product-sub-info">{productdetail}</p>
                        <div className="product-info">
                            <p><b>Style:</b> {productstyle}</p>
                            <p><b>Size:</b> {productsize}”</p>
                            <p><b>Color:</b> {productcolor} </p>
                        </div>
                    </div>
                    <div className="cart-actions">
                        <a href="#">Save for later</a> | <a href="#">Remove</a>
                    </div>
                </Col>
                <Col className="gutter-row" span={5}>
                    <div className="cart-item-quantity">
                        <Dropdown overlay={menu}>
                            <Button>
                                1 <DownOutlined />
                            </Button>
                        </Dropdown>
                    </div>
                </Col>
                <Col className="gutter-row" span={5}>
                    <div className="cart-item-price text-right">
                        <p className="original-price">{productprice}</p>
                        <p className="discount-price">{productdiscprice}</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default CartItemSingle;
