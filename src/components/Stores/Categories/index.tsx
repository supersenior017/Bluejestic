import React from 'react'
import Slider from 'react-slick'
import { Category } from 'src/types'
import SingleCategory from './Category'

const Categories: React.FC<{ categories: Category[] }> = ({ categories }) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 750,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <div className="store-categories-wrapper">
      <div className="title-wrapper">
        <div>
          <h5>Store categories</h5>
          <p>Browse for store by catogories</p>
        </div>
        <div>
          <a href="#">See all</a>
        </div>
      </div>
      <div className="store-categories-inner-wrapper">
        <Slider {...settings} className="owl-carousel">
          {categories.map((category) => (
            <div className="item" key={category.id}>
              <SingleCategory category={category} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Categories
