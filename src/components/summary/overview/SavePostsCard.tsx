import Slider from 'react-slick';
import ComplexGallery from './ComplexGallery';

const SavePostsCard = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 750,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
    };

    return (
      <div className="Bookmark-wrapper">
          <div className="bookmark-title-wrapper">
            <div>
              <h2>Save Posts</h2>
              <p className="bookmark-description">Products You've Bookmark</p>
            </div>
            <p className="bookmark-all">All</p>
          </div>
          <Slider {...settings}>
            <div className="carousel-item">
              <ComplexGallery />
            </div>
            <div className="carousel-item">
              <ComplexGallery/>
            </div>
            <div className="carousel-item">
              <ComplexGallery />
            </div>
          </Slider>
      </div>
    )
}

export default SavePostsCard;
