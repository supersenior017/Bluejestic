import BookSingle from './BookSingle';
import Slider from 'react-slick';

const ChildrenBooks = () => {
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
                <h2>Children Books</h2>
                <p>All</p>
            </div>
            <Slider {...settings}>
                    <div className="carousel-item">
                        <BookSingle 
                            name="She Who Became the Sun"
                            image="/assets/img/books/book-13.png"
                            bookstyle={{backgroundColor:'#D69739'}}
                            author="American Psychology"
                            price="$21.00"
                        />
                    </div>
                    <div className="carousel-item">
                        <BookSingle 
                            name="She Who Became the Sun"
                            image="/assets/img/books/book-14.png"
                            bookstyle={{backgroundColor:'#D69739'}}
                            author="American Psychology"
                            price="$21.00"
                        />
                    </div>
                    <div className="carousel-item">
                        <BookSingle 
                            name="She Who Became the Sun"
                            image="/assets/img/books/book-15.png"
                            bookstyle={{backgroundColor:'#D69739'}}
                            author="American Psychology"
                            price="$21.00"
                        />
                    </div>
                    <div className="carousel-item">
                        <BookSingle 
                            name="She Who Became the Sun"
                            image="/assets/img/books/book-16.png"
                            bookstyle={{backgroundColor:'#D69739'}}
                            author="American Psychology"
                            price="$21.00"
                        />
                    </div>
                    <div className="carousel-item">
                        <BookSingle 
                            name="She Who Became the Sun"
                            image="/assets/img/books/book-14.png"
                            bookstyle={{backgroundColor:'#D69739'}}
                            author="American Psychology"
                            price="$21.00"
                        />
                    </div>
                    <div className="carousel-item">
                        <BookSingle 
                            name="She Who Became the Sun"
                            image="/assets/img/books/book-15.png"
                            bookstyle={{backgroundColor:'#D69739'}}
                            author="American Psychology"
                            price="$21.00"
                        />
                    </div>
                </Slider>
        </div>
    )
}

export default ChildrenBooks;
