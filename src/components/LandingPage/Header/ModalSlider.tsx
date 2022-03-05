import Slider from 'react-slick'

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 750,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
}

const ModalSlider = () => {
  return (
    <div className="login-slider-wrapper">
      <Slider {...settings} className="owl-carousel">
        <div className="item">
          <img src="/assets/img/login/slide-01.svg" style={{ width: '90%' }} />
          <div className="slide-details">
            <h4>Do More than online Shopping</h4>
            <p>Up to 50% OFF, Join our family now</p>
          </div>
        </div>
        <div className="item">
          <img src="/assets/img/login/slide-02.svg" style={{ width: '60%' }} />
          <div className="slide-details">
            <h4>Search & discovery new brands</h4>
            <p>Up to 50% OFF, Join our family now</p>
          </div>
        </div>
        <div className="item">
          <img src="/assets/img/login/slide-03.svg" style={{ width: '80%' }} />
          <div className="slide-details">
            <h4>Shop, Social sharing, chat, live streaming</h4>
            <p>Up to 50% OFF, Join our family now</p>
          </div>
        </div>
        <div className="item">
          <img src="/assets/img/login/slide-04.svg" style={{ width: '80%' }} />
          <div className="slide-details">
            <h4>Join social shopping groups & stay connected</h4>
            <p>Up to 50% OFF, Join our family now</p>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default ModalSlider
