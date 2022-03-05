import { Row, Col } from 'antd'
import React, { useState, useEffect, useRef } from 'react'
// import ReactDOM from 'react-dom';

const ShoppingCommunity = () => {
  
  return (
    <div className="landing-shopping-community-wrapper relative">
        
      <div className="page-container">
        <div className="shopping-community-text">
          <div className="shopping-community-title"> Shopping Community</div>
          <div className="shopping-community-description">Our innovative e-Commerce platform aims to connect the world: one item at a time</div>
        </div>
        <Row gutter={[48, 16]}>
          <Col sm={24} md={8}>
            <div className="part md:-mt-32">
                <div className="shopping-community-images relative" >       
                  <img src="/assets/img/landing-page-new/shopping-community/1.png" style={{width:'100%' }}/>                   
                </div>                
                <div className="text-center mt-4 md:pl-20">
                  <div className="fs18 md:fs36 font-bold md:text-left">Seamlessly Share photos and content</div>
                  <div className="fs12 md:fs16 font-normal pt-3 text-gray-500 md:text-left" >Bluejestic brings friends and family together through a highly engaging shopping platform</div>
                  <div className="md:text-left mt-8"><button className="text-blue-500 fs12 md:fs18 font-medium mt-4 ">Learn More</button></div>
                </div> 
            </div>
          </Col>
          <Col sm={24} md={8}>
            <div className="part md:mt-16" >
                <div className="shopping-community-images relative">
                  <img src="/assets/img/landing-page-new/shopping-community/2.png" style={{width:'100%' }}/>                   
                </div>                
                <div className="text-center mt-4 ">
                  <div className="fs18 md:fs36 font-bold md:text-left">Conversational Shopping</div>
                  <div className="fs12 md:fs16 font-normal pt-3 text-gray-500 md:text-left" >Get to know your followers, </div>
                  <div className="md:text-left mt-8"><button className="text-blue-500 fs12 md:fs18 font-medium mt-4 ">Learn More</button></div>
                </div> 
            </div>
          </Col>
          <Col sm={24} md={8}>
            <div className="part md:mt-60">
                <div className="shopping-community-images relative" >
                  <img src="/assets/img/landing-page-new/shopping-community/3.png" style={{width:'100%' }}/>                   
                </div>                
                <div className="text-center md:-mt-16 md:-mr-20 ">
                  <div className="fs18 md:fs36 font-bold md:text-left">Active Community</div>
                  <div className="fs12 md:fs16 font-normal pt-3 text-gray-500 md:text-left" >Bluejestic brings friends and family together through a highly engaging shopping platform</div>
                  <div className="md:text-left mt-8"><button className="text-blue-500 fs12 md:fs18 font-medium mt-4 ">Learn More</button></div>
                </div> 
            </div>
          </Col>
        </Row>
      </div>      
    </div>
  )
}

export default ShoppingCommunity
