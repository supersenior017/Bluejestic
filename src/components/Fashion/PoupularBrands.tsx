import Slider from 'react-slick';
import BrandSingle from './BrandSingle';

const PoupularBrands = () => {

    const carouselSetting = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className="fashion-brands-wrapper">
            <div className="title-wrapper">
                <h4>Popular Brands</h4>
            </div>
            <div className="fashion-brands-slider">
                <Slider {...carouselSetting}>
                    <div className="carousel-item">
                        <BrandSingle
                            image="/assets/img/fashion/brand-01.png"
                            name="ZARA"
                        />
                    </div>
                    <div className="carousel-item">
                        <BrandSingle
                            image="/assets/img/fashion/brand-02.png"
                            name="Free People"
                        />
                    </div>
                    <div className="carousel-item">
                        <BrandSingle
                            image="/assets/img/fashion/brand-03.png"
                            name="INC"
                        />
                    </div>
                    <div className="carousel-item">
                        <BrandSingle
                            image="/assets/img/fashion/brand-01.png"
                            name="ZARA"
                        />
                    </div>
                    <div className="carousel-item">
                        <BrandSingle
                            image="/assets/img/fashion/brand-02.png"
                            name="Free People"
                        />
                    </div>
                    <div className="carousel-item">
                        <BrandSingle
                            image="/assets/img/fashion/brand-03.png"
                            name="INC"
                        />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default PoupularBrands
