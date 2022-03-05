import React from 'react'
import Slider from 'react-slick'
import StoreSingle from './StoreSingle'
import { Tabs, Row, Col } from 'antd'
import { IStore } from 'src/types'

const { TabPane } = Tabs

const PopularStores: React.FC<{ stores: IStore[] }> = ({ stores }) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 750,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  }

  return (
    <div className="store-popular-wrapper">
      <div className="title-wrapper">
        <div>
          <h5>Popular Store</h5>
          <p>Browse by trending Stores</p>
        </div>
      </div>
      <div className="suggested-stores-inner-wrapper">
        <Slider {...settings} className="owl-carousel">
          {stores.map((store) => (
            <div className="item">
              <StoreSingle store={store} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PopularStores
