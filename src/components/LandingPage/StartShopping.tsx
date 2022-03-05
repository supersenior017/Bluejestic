import React, { useState, useEffect } from 'react'
import {Row, Col} from 'antd';

const StartShopping = () => {

  return (
    <div className="landing-start-shopping-wrapper">
      <div className="page-container">
        <Row >
          <Col sm={24} md={12}>
            <div className="left-part">
              <div style={{width:'90%', position:'relative'}} >
                <div className="home-title" >Revolutionizing the Social Shopping experience</div>
                <div className="home-description" >The Best and First Social Media & E-commerce all-in-one platform in US.</div>
                <div className="home-button">
                  <div className="fs18 font-medium md:mt-20 py-3 w-80 bg-white rounded-full text-blue-600 text-center">
                    <button>Start Shopping</button>
                  </div>                
                </div>
              </div>
            </div>
          </Col>
          <Col sm={24} md={12}>
            <div className="right-part">
                <div className={"right-image"} style={{width:'90%', position:'relative',}}>
                  <img src="/assets/img/landing-page-new/Start-Shopping.png"  style={{width:'100%', height:'100%', opacity:1}}/>                                    
                </div>             
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default StartShopping
