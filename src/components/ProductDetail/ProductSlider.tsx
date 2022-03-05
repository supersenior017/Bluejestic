import Slider from 'react-slick'
import { Product } from 'src/types'
import getImageUrl from 'src/utils/getImageUrl'

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 750,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
}

const settings1 = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 750,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
}

const ProductSlider: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="product-slider-wrapper">
      <div>
        <Slider {...settings}>
          {product.images.map(({ url }) => (
            <div>
              <img src={getImageUrl(url)} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="my-5">
        <Slider {...settings1}>
          {product.images.map(({ url }) => (
            <div>
              <img src={getImageUrl(url)} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default ProductSlider
