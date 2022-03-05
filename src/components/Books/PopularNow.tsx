import BookSingle from './BookSingle';
import Slider from 'react-slick';

const PopularNow = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 750,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    };


    return (
        <div className="book-popular-now-wrapper">
            <div className="books-title-wrapper">
                <h2>Popular Now</h2>
                <p>All</p>
            </div>
            <Slider {...settings}>
                    <div className="carousel-item">
                        <BookSingle 
                            name="Publication Manual"
                            image="/assets/img/books/book-01.png"
                            bookstyle={{backgroundColor:'#ECEEF4'}}
                            author="American Psychology"
                            price="$21.00"
                        />
                    </div>
                    <div className="carousel-item">
                        <BookSingle 
                            name="Publication Manual"
                            image="/assets/img/books/book-02.png"
                            bookstyle={{backgroundColor:'#ECEEF4'}}
                            author="American Psychology"
                            price="$21.00"
                        />
                    </div>
                    <div className="carousel-item">
                        <BookSingle 
                            name="Publication Manual"
                            image="/assets/img/books/book-03.png"
                            bookstyle={{backgroundColor:'#ECEEF4'}}
                            author="American Psychology"
                            price="$21.00"
                        />
                    </div>
                    <div className="carousel-item">
                        <BookSingle 
                            name="Publication Manual"
                            image="/assets/img/books/book-04.png"
                            bookstyle={{backgroundColor:'#ECEEF4'}}
                            author="American Psychology"
                            price="$21.00"
                        />
                    </div>
                    <div className="carousel-item">
                        <BookSingle 
                            name="Publication Manual"
                            image="/assets/img/books/book-05.png"
                            bookstyle={{backgroundColor:'#ECEEF4'}}
                            author="American Psychology"
                            price="$21.00"
                        />
                    </div>
                    <div className="carousel-item">
                        <BookSingle 
                            name="Publication Manual"
                            image="/assets/img/books/book-06.png"
                            bookstyle={{backgroundColor:'#ECEEF4'}}
                            author="American Psychology"
                            price="$21.00"
                        />
                    </div>
                </Slider>
        </div>
    )
}

export default PopularNow
