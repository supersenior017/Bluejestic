import Slider from 'react-slick';
import TrendingSingle from './TrendingSingle';

const Trending = () => {

    const carouselSetting = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    return (
        <div className="fashion-trending-wrapper">
            <div className="title-wrapper">
                <h4>Trending</h4>
            </div>
            <div className="fashion-trending-slider">
                <Slider {...carouselSetting}>
                    <div className="carousel-item">
                        <TrendingSingle
                            image="/assets/img/fashion/trending-01.png"
                            title="Anna Wintour
                            Vogue Editor-In Chief "
                            time="3 hours ago"
                            likes="18k"
                            comments="2k"
                            badge="People in Fashion"
                            badgecolor={{backgroundColor:"#FFB581"}}
                        />
                    </div>
                    <div className="carousel-item">
                        <TrendingSingle
                            image="/assets/img/fashion/trending-02.png"
                            title="Tinted Sunglasses This Summer"
                            time="3 hours ago"
                            likes="18k"
                            comments="2k"
                            badge="Trend"
                            badgecolor={{backgroundColor:"#43C8A0"}}
                        />
                    </div>
                    <div className="carousel-item">
                        <TrendingSingle
                            image="/assets/img/fashion/trending-03.png"
                            title="8 Must Have Skin-Care Products "
                            time="3 hours ago"
                            likes="18k"
                            comments="2k"
                            badge="Beauty"
                            badgecolor={{backgroundColor:"#926DC2"}}
                        />
                    </div>
                    <div className="carousel-item">
                        <TrendingSingle
                            image="/assets/img/fashion/trending-04.png"
                            title="Fall 2021 Autfit Inspiration"
                            time="3 hours ago"
                            likes="18k"
                            comments="2k"
                            badge="Street Style"
                            badgecolor={{backgroundColor:"#B16B39"}}
                        />
                    </div>
                    <div className="carousel-item">
                        <TrendingSingle
                            image="/assets/img/fashion/trending-01.png"
                            title="Anna Wintour
                            Vogue Editor-In Chief "
                            time="3 hours ago"
                            likes="18k"
                            comments="2k"
                            badge="People in Fashion"
                            badgecolor={{backgroundColor:"#FFB581"}}
                        />
                    </div>
                    <div className="carousel-item">
                        <TrendingSingle
                            image="/assets/img/fashion/trending-02.png"
                            title="Tinted Sunglasses This Summer"
                            time="3 hours ago"
                            likes="18k"
                            comments="2k"
                            badge="Trend"
                            badgecolor={{backgroundColor:"#43C8A0"}}
                        />
                    </div>
                    <div className="carousel-item">
                        <TrendingSingle
                            image="/assets/img/fashion/trending-03.png"
                            title="8 Must Have Skin-Care Products "
                            time="3 hours ago"
                            likes="18k"
                            comments="2k"
                            badge="Beauty"
                            badgecolor={{backgroundColor:"#926DC2"}}
                        />
                    </div>
                    <div className="carousel-item">
                        <TrendingSingle
                            image="/assets/img/fashion/trending-04.png"
                            title="Fall 2021 Autfit Inspiration"
                            time="3 hours ago"
                            likes="18k"
                            comments="2k"
                            badge="Street Style"
                            badgecolor={{backgroundColor:"#B16B39"}}
                        />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Trending
