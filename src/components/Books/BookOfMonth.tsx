import BookSingle from './BookSingle';
import Slider from 'react-slick';

const BookOfMonth = () => {
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
                <h2>Book of the Month</h2>
                <p>All</p>
            </div>
            <Slider {...settings}>
                    <div className="carousel-item">
                        <BookSingle 
                            name="She Who Became the Sun"
                            image="/assets/img/books/book-05.png"
                            bookstyle={{backgroundColor:'#E9E9FF'}}
                            author="American Psychology"
                            price="$21.00"
                        />
                    </div>
                    <div className="carousel-item">
                        <BookSingle 
                            name="She Who Became the Sun"
                            image="/assets/img/books/book-06.png"
                            bookstyle={{backgroundColor:'#E9E9FF'}}
                            author="American Psychology"
                            price="$21.00"
                        />
                    </div>
                    <div className="carousel-item">
                        <BookSingle 
                            name="She Who Became the Sun"
                            image="/assets/img/books/book-07.png"
                            bookstyle={{backgroundColor:'#E9E9FF'}}
                            author="American Psychology"
                            price="$21.00"
                        />
                    </div>
                    <div className="carousel-item">
                        <BookSingle 
                            name="She Who Became the Sun"
                            image="/assets/img/books/book-08.png"
                            bookstyle={{backgroundColor:'#E9E9FF'}}
                            author="American Psychology"
                            price="$21.00"
                        />
                    </div>
                    <div className="carousel-item">
                        <BookSingle 
                            name="She Who Became the Sun"
                            image="/assets/img/books/book-05.png"
                            bookstyle={{backgroundColor:'#E9E9FF'}}
                            author="American Psychology"
                            price="$21.00"
                        />
                    </div>
                    <div className="carousel-item">
                        <BookSingle 
                            name="She Who Became the Sun"
                            image="/assets/img/books/book-06.png"
                            bookstyle={{backgroundColor:'#E9E9FF'}}
                            author="American Psychology"
                            price="$21.00"
                        />
                    </div>
                </Slider>
        </div>
    )
}

export default BookOfMonth;
