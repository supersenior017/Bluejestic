import PopularBooksSingle from './PopularBooksSingle';

const PopularBooks = () => {
    return (
        <div className="books-popularbooks-wrapper">
            <div className="books-title-wrapper">
                <h2>Popular Book Clubs</h2>
                <img src="/assets/img/books/bluearrow.svg" />
            </div>
            <div className="books-popularbooks-content">
                <PopularBooksSingle 
                    image="/assets/img/books/book-club-01.png"
                    members="Mark R. Levin"
                    likes="120"
                    shares="231"
                    name="American Marxism"
                />
                <PopularBooksSingle 
                    image="/assets/img/books/book-club-01.png"
                    members="Mark R. Levin"
                    likes="120"
                    shares="231"
                    name="American Marxism"
                />
                <PopularBooksSingle 
                    image="/assets/img/books/book-club-01.png"
                    members="Mark R. Levin"
                    likes="120"
                    shares="231"
                    name="American Marxism"
                />
                <PopularBooksSingle 
                    image="/assets/img/books/book-club-01.png"
                    members="Mark R. Levin"
                    likes="120"
                    shares="231"
                    name="American Marxism"
                />
                <PopularBooksSingle 
                    image="/assets/img/books/book-club-01.png"
                    members="Mark R. Levin"
                    likes="120"
                    shares="231"
                    name="American Marxism"
                />
                <PopularBooksSingle 
                    image="/assets/img/books/book-club-01.png"
                    members="Mark R. Levin"
                    likes="120"
                    shares="231"
                    name="American Marxism"
                />
                <PopularBooksSingle 
                    image="/assets/img/books/book-club-01.png"
                    members="Mark R. Levin"
                    likes="120"
                    shares="231"
                    name="American Marxism"
                />
            </div>
        </div>
    )
}

export default PopularBooks
