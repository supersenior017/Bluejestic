import BookSingle from './BookSingle';
import Slider from 'react-slick';

const NewRelease = () => {
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
                <h2>New Release</h2>
                <p>All</p>
            </div>
            <Slider {...settings}>
                    <div className="carousel-item">
                        <BookSingle 
                            name="She Who Became the Sun"
                            image="/assets/img/books/book-09.png"
                            bookstyle={{backgroundColor:'#BED3F2'}}
                            author="American Psychology"
                            price="$21.00"
                        />
                    </div>
                    <div className="carousel-item">
                        <BookSingle 
                            name="She Who Became the Sun"
                            image="/assets/img/books/book-10.png"
                            bookstyle={{backgroundColor:'#BED3F2'}}
                            author="American Psychology"
                            price="$21.00"
                        />
                    </div>
                    <div className="carousel-item">
                        <BookSingle 
                            name="She Who Became the Sun"
                            image="/assets/img/books/book-11.png"
                            bookstyle={{backgroundColor:'#BED3F2'}}
                            author="American Psychology"
                            price="$21.00"
                        />
                    </div>
                    <div className="carousel-item">
                        <BookSingle 
                            name="She Who Became the Sun"
                            image="/assets/img/books/book-12.png"
                            bookstyle={{backgroundColor:'#BED3F2'}}
                            author="American Psychology"
                            price="$21.00"
                        />
                    </div>
                    <div className="carousel-item">
                        <BookSingle 
                            name="She Who Became the Sun"
                            image="/assets/img/books/book-09.png"
                            bookstyle={{backgroundColor:'#BED3F2'}}
                            author="American Psychology"
                            price="$21.00"
                        />
                    </div>
                    <div className="carousel-item">
                        <BookSingle 
                            name="She Who Became the Sun"
                            image="/assets/img/books/book-10.png"
                            bookstyle={{backgroundColor:'#BED3F2'}}
                            author="American Psychology"
                            price="$21.00"
                        />
                    </div>
                </Slider>
        </div>
    )
}

export default NewRelease;
