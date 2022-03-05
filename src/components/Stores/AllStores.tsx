import React from 'react'
import Slider from 'react-slick'
import StoreSingle from './StoreSingle'
import { Tabs, Row, Col } from 'antd'
import { IStore } from 'src/types'

const { TabPane } = Tabs

const AllStores: React.FC<{ stores: IStore[] }> = ({ stores }) => {
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
    <div className="store-saved-wrapper">
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="All saved Stores" key="1">
          <div className="mb-30">
            <Slider {...settings} className="owl-carousel">
              {stores.map((store) => (
                <div className="item">
                  <StoreSingle key={store.id} store={store} />
                </div>
              ))}
            </Slider>
          </div>
        </TabPane>
        <TabPane tab="Recently Added" key="2">
          <div className="mb-30">
            <Slider {...settings} className="owl-carousel">
              {stores.map((store) => (
                <div className="item">
                  <StoreSingle key={store.id} store={store} />
                </div>
              ))}
            </Slider>
          </div>
        </TabPane>
        <TabPane tab="Favorite" key="3">
          <div className="mb-30">
            <Slider {...settings} className="owl-carousel">
              {stores.map((store) => (
                <div className="item">
                  <StoreSingle key={store.id} store={store} />
                </div>
              ))}
            </Slider>
          </div>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default AllStores
