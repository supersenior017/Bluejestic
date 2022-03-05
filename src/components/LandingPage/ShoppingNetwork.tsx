import React, { useState, useEffect, useRef } from 'react'
// import ReactDOM from 'react-dom';
import { Row, Col } from 'antd'

const ShoppingNetwork = () => {
  
  return (
    <div className="landing-shopping-network-wrapper relative">
      <img src="/assets/img/landing-page-new/shopping-network/top.png" className="shopping-network-top-image" />

      <div className="page-container">
        <Row gutter={[48, 16]}>
          <Col sm={24} md={12}>
            <div className="left-part">
              <div className="shopping-network-left-images">
                <div style={{ width: '100%', position: 'relative' }} >
                  <img src="/assets/img/landing-page-new/ExpandSocialNetwork.png" />                  
                </div>
              </div>
              <div className="shopping-network-left-text text-center">
                <div className="fs25 md:fs30 font-bold md:text-left">Expand and strengthen your social network</div>
                <div className="fs14 font-normal pt-3 md:text-left">Meet new people from around the world, bridging the divide between social media and e-Commerce</div>
                <div className=" md:text-left">
                  <button className="bg-blue-500 fs18 font-medium rounded-2xl mt-8 py-2 px-4">Learn More</button>
                </div>
              </div>

            </div>
          </Col>
          <Col sm={24} md={12}>
            <div className="right-part">
              <div className="hidden md:block shopping-network-right-text">
                <div className="fs25 font-bold">Shop With Friends</div>
                <div className="fs14 font-normal pt-3 " >Social Commerce platform leveraging e-Commerce with a social media solution to provide you a fun, interactive personalized shopping experience.</div>
                <div><button className="bg-blue-500 fs18 font-medium rounded-2xl mt-12 py-2 px-4" >Learn More</button></div>
              </div>
              <div className="shopping-network-right-images">
                <div style={{ width: '100%', position: 'relative' }} >
                  <img src="/assets/img/landing-page-new/ShoppingWithFriend.png" /></div>
              </div>

              <div className="md:hidden text-center mt-4">
                <div className="fs20 font-bold">Shop With Friends</div>
                <div className="fs14 font-normal pt-3 " >Social Commerce platform leveraging e-Commerce with a social media solution to provide you a fun, interactive personalized shopping experience.</div>
                <div><button className="bg-blue-500 fs18 font-medium rounded-2xl mt-4 py-2 px-4">Learn More</button></div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <img src="/assets/img/landing-page-new/shopping-network/bottom.png" className="shopping-network-bottom-image" />
    </div>
  )
}

export default ShoppingNetwork
