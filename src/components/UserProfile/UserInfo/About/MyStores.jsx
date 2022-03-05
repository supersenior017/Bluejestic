import Slider from 'react-slick';
import StoreSingle from './StoreSingle';

const MyStores = () => {

    const carouselSetting = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };


    return (
        <div className="user-profile-mystores">
            <div className="user-profile-title-wrapper">
                <h5>My Stores</h5>
                <p>All</p>
            </div>
            <div className="user-profile-mystores-slider">
                <Slider {...carouselSetting}>
                    <div className="carousel-item">
                        <StoreSingle
                            cover="/assets/img/user-profile/storecover-01.png"
                            storename="Jane’s Store"
                            storeimage="/assets/img/user-profile/storeimage-01.png"
                            followers="3"
                            products="287"
                        />
                    </div>
                    <div className="carousel-item">
                        <StoreSingle
                            cover="/assets/img/user-profile/storecover-02.png"
                            storename="Nu Star Fashion"
                            storeimage="/assets/img/user-profile/storeimage-02.png"
                            followers="3"
                            products="287"
                        />
                    </div>
                    <div className="carousel-item">
                        <StoreSingle
                            cover="/assets/img/user-profile/storecover-03.png"
                            storename="Up Town Pastry"
                            storeimage="/assets/img/user-profile/storeimage-03.png"
                            followers="3"
                            products="287"
                        />
                    </div>
                    <div className="carousel-item">
                        <StoreSingle
                            cover="/assets/img/user-profile/storecover-04.png"
                            storename="City Art"
                            storeimage="/assets/img/user-profile/storeimage-04.png"
                            followers="3"
                            products="287"
                        />
                    </div>
                    <div className="carousel-item">
                        <StoreSingle
                            cover="/assets/img/user-profile/storecover-01.png"
                            storename="Jane’s Store"
                            storeimage="/assets/img/user-profile/storeimage-01.png"
                            followers="3"
                            products="287"
                        />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default MyStores
