import React from 'react'
import Slider from 'react-slick'
import StoreSingle from './StoreSingle'
import { Tabs } from 'antd'
import { IStore } from 'src/types'

const { TabPane } = Tabs

const SuggestedStores: React.FC<{ stores: IStore[] }> = ({ stores }) => {
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
    <div className="store-suggested-wrapper">
      <div className="suggested-stores-inner-wrapper">
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Suggested Stores" key="1">
            <Slider {...settings} className="owl-carousel">
              {stores
                .filter((store) => !store.isPopular)
                .map((store) => (
                  <div className="item">
                    <StoreSingle key={store.id} store={store} />
                  </div>
                ))}
            </Slider>
          </TabPane>
          <TabPane tab="Popular Stores" key="2">
            <Slider {...settings} className="owl-carousel">
              {stores
                .filter((store) => store.isPopular)
                .map((store) => (
                  <div className="item">
                    <StoreSingle key={store.id} store={store} />
                  </div>
                ))}
            </Slider>
          </TabPane>
          <TabPane tab="Search" key="3"></TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default SuggestedStores
