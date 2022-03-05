import Slider from 'react-slick';
import BookSingle from './BookSingle';
import { Row, Col } from 'antd';

const FavouriteBooks = () => {

    const carouselSetting = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };


    return (
        <div className="user-profile-favourite-books">
            <div className="user-profile-title-wrapper">
                <h5>Favorite Books</h5>
                <p>All</p>
            </div>
            <div className="user-profile-favourite-books-slider">
                <Slider {...carouselSetting}>
                    <div className="carousel-item">
                        <BookSingle
                            image="/assets/img/user-profile/book-01.png"
                            name="Who’s into fashion like me?"
                        />
                    </div>
                    <div className="carousel-item">
                        <BookSingle
                            image="/assets/img/user-profile/book-02.png"
                            name="Who’s into fashion like me?"
                        />
                    </div>
                    <div className="carousel-item">
                        <BookSingle
                            image="/assets/img/user-profile/book-03.png"
                            name="Who’s into fashion like me?"
                        />
                    </div>
                    <div className="carousel-item">
                        <BookSingle
                            image="/assets/img/user-profile/book-01.png"
                            name="Who’s into fashion like me?"
                        />
                    </div>
                    <div className="carousel-item">
                        <BookSingle
                            image="/assets/img/user-profile/book-05.png"
                            name="Who’s into fashion like me?"
                        />
                    </div>
                    <div className="carousel-item">
                        <BookSingle
                            image="/assets/img/user-profile/book-01.png"
                            name="Who’s into fashion like me?"
                        />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default FavouriteBooks
