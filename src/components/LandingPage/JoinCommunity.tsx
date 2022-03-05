import {Row, Col} from 'antd'
import React, { useState, useEffect, useRef } from 'react'
// import ReactDOM from 'react-dom';

const JoinCommunity = () => {

  return (
    <div className="landing-join-community-wrapper relative">
      <img src="/assets/img/landing-page-new/join-community/top.png" style={{width:'100%',}}/>        
        <div className="page-container">          
          <div className="join-community-title">Join the Community</div>          
          <div style={{width:'100%', position:'relative', marginBottom:'-15%', zIndex:10}} >
            <img src="/assets/img/landing-page-new/JoinCommunity.png" style={{width:'100%'}}/>            
          </div> 
        </div>
      <div className="relative">
        <img src="/assets/img/landing-page-new/join-community/bottom.png" style={{width:'100%'}}/>                
        <div className="join-community-div-description">
            <div className="join-community-description"> Bluejestic - the <b className="font-bold">most comprehensive social eCommerce platform</b> for building <b className="font-bold">online business.</b></div>            
            <div className="fs12"><button className="bg-blue-500 text-white font-medium rounded-full p-3">Get Started</button></div>          
          </div>
      </div>  
    </div>
  )
}

export default JoinCommunity
