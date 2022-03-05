import { Row, Col } from 'antd';
import EventSingle from './EventSingle';
import Slider from 'react-slick';

const StoreEvents = () => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 750,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    };


    return (
        <div className="store-about-store-events-wrapper store-card">
            <h4 className="store-card-title">Store Events</h4>
            <div className="store-events-wrapper">
                <Slider {...settings} className="owl-carousel">
                    <div className="item">
                        <EventSingle
                            cover="/assets/img/store/about/event-02.png"
                            description="Hi, we should to get together on mother"
                            location="Hilton Hotel"
                            timing="6 PM - 9 PM"
                            date="Oct 17"
                            avtar="/assets/img/store/about/store-avtar.png"
                        />
                    </div>
                    <div className="item">
                        <EventSingle
                            cover="/assets/img/store/about/event-02.png"
                            description="Join our Black Friday Sale Special"
                            location="Live Streaming"
                            timing="12:30PM -1:00PM"
                            date="Nov 24"
                            avtar="/assets/img/store/about/store-avtar.png"
                        />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default StoreEvents
