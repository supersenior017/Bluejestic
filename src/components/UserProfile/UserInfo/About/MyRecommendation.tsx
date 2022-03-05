import Slider from 'react-slick';
import RecommendationSingle from './RecommendationSingle';

const MyRecommendation = () => {

    const carouselSetting = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };


    return (
        <div className="user-profile-myrecommendation">
            <div className="user-profile-title-wrapper">
                <h5>My Recommendations</h5>
                <p>All</p>
            </div>
            <div className="user-profile-myrecommendation-slider">
                <Slider {...carouselSetting}>
                    <div className="carousel-item">
                        <RecommendationSingle
                            productimage="/assets/img/user-profile/product-01.png"
                            productname="TOZO T6 True Wireless Earbuds Bluetooth"
                            price="$ 125.00"
                            discprice="$ 35.00"
                            likes="3"
                            comments="1"
                            shares="2"
                        />
                    </div>
                    <div className="carousel-item">
                        <RecommendationSingle
                            productimage="/assets/img/user-profile/product-02.png"
                            productname="TOZO T10 Bluetooth 5.0 Wireless Earbuds with Wireless Charging"
                            price="$ 125.00"
                            discprice="$ 35.00"
                            likes="3"
                            comments="1"
                            shares="2"
                        />
                    </div>
                    <div className="carousel-item">
                        <RecommendationSingle
                            productimage="/assets/img/user-profile/product-03.png"
                            productname="TOZO T6 True Wireless Earbuds Bluetooth"
                            price="$ 125.00"
                            discprice="$ 35.00"
                            likes="3"
                            comments="1"
                            shares="2"
                        />
                    </div>
                    <div className="carousel-item">
                        <RecommendationSingle
                            productimage="/assets/img/user-profile/product-04.png"
                            productname="Anker Portable Charger, PowerCore Slim 10000 Power"
                            price="$ 125.00"
                            discprice="$ 35.00"
                            likes="3"
                            comments="1"
                            shares="2"
                        />
                    </div>
                    <div className="carousel-item">
                        <RecommendationSingle
                            productimage="/assets/img/user-profile/product-01.png"
                            productname="TOZO T6 True Wireless Earbuds Bluetooth"
                            price="$ 125.00"
                            discprice="$ 35.00"
                            likes="3"
                            comments="1"
                            shares="2"
                        />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default MyRecommendation
