import Slider from 'react-slick';

const StoreMeta = () => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 750,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    };

    return (
        <div className="store-meta-wrapper">
            <div className="relative">
            <Slider {...settings} className="owl-carousel">
                    <div className="item">
                        <img src="/assets/img/store/store-img/01.png" />
                    </div>
                    <div className="item">
                        <img src="/assets/img/store/store-img/02.png" />
                    </div>
                    <div className="item">
                        <img src="/assets/img/store/store-img/03.png" />
                    </div>
                    <div className="item">
                        <img src="/assets/img/store/store-img/01.png" />
                    </div>
                    <div className="item">
                        <img src="/assets/img/store/store-img/02.png" />
                    </div>
                    <div className="item">
                        <img src="/assets/img/store/store-img/03.png" />
                    </div>
                </Slider>
                <div className="absolute -bottom-24 left-20 flex items-end">
                    <div>
                        <img src="/assets/img/store/store-avtar.png" className="w-72 h-72 border-8 rounded-full border-white" />
                    </div>
                    <div>
                        <h4 className="text-4xl color-black">Edifier Store </h4>
                        <p className="text-2xl color-black">Boston, MA</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreMeta
