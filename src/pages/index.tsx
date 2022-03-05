import React from 'react'
import Header from 'src/components/LandingPage/Header'
import Footer from 'src/components/LandingPage/Footer'
import StartShopping from 'src/components/LandingPage/StartShopping'
import ShoppingNetwork from 'src/components/LandingPage/ShoppingNetwork'
import ShoppingCommunity from 'src/components/LandingPage/ShoppingCommunity'
import JoinCommunity from 'src/components/LandingPage/JoinCommunity'

export default function Home() {
  return (
    <div className="landing-page-main-wrapper relative" >
      <Header/>
      <StartShopping />      
      <ShoppingNetwork />
      <ShoppingCommunity />
      <JoinCommunity />
      <Footer/>
    </div>
  )
}
