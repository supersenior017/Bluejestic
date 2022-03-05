import FeaturedSingle from './FeaturedSingle';
import Slider from 'react-slick';

const FeaturedBooks = () => {

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
        <div className="books-featured-slider-wrapper">
            <Slider {...settings}>
                    <div className="carousel-item">
                        <FeaturedSingle 
                            name="Reign of Terror"
                            image="/assets/img/books/featured-book-01.png"
                            bookstyle={{background: "linear-gradient(90deg, #D72D2D 0%, rgba(10, 5, 5, 0.82) 100%)"}}
                            author="Spencer Ackerman"
                            description="How the 9/11 Era Destabilized America and Produced Trump"
                        />
                    </div>
                    <div className="carousel-item">
                        <FeaturedSingle 
                            name="Reign of Terror"
                            image="/assets/img/books/featured-book-02.png"
                            bookstyle={{background: "linear-gradient(90deg, #5B6FCD 0%, rgba(73, 86, 149, 0.12) 100%)"}}
                            author="Spencer Ackerman"
                            description="How the 9/11 Era Destabilized America and Produced Trump"
                        />
                    </div>
                    <div className="carousel-item">
                        <FeaturedSingle 
                            name="Reign of Terror"
                            image="/assets/img/books/featured-book-03.png"
                            bookstyle={{background: "radial-gradient(100% 436% at 0% 47.8%, #A46B41 0%, rgba(150, 113, 41, 0.26) 100%)"}}
                            author="Spencer Ackerman"
                            description="How the 9/11 Era Destabilized America and Produced Trump"
                        />
                    </div>
                    <div className="carousel-item">
                        <FeaturedSingle 
                            name="Reign of Terror"
                            image="/assets/img/books/featured-book-04.png"
                            bookstyle={{background: "radial-gradient(100% 436% at 0% 47.8%, #36847F 0%, rgba(30, 145, 145, 0.26) 100%)"}}
                            author="Spencer Ackerman"
                            description="How the 9/11 Era Destabilized America and Produced Trump"
                        />
                    </div>
                </Slider>
        </div>
    )
}

export default FeaturedBooks
