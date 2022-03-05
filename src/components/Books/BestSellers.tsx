import BestSellerSingle from './BestSellerSingle';

const BestSellers = () => {
    return (
        <div className="books-bestsellers-wrapper">
            <div className="books-title-wrapper">
                <h2>Best Sellers</h2>
                <img src="/assets/img/books/bluearrow.svg" />
            </div>
            <div className="books-bestseller-content">
                <BestSellerSingle 
                    image="/assets/img/books/book-17.png"
                    author="Mark R. Levin"
                    likes="120"
                    shares="231"
                    name="American Marxism"
                />
                <BestSellerSingle 
                    image="/assets/img/books/book-17.png"
                    author="Mark R. Levin"
                    likes="120"
                    shares="231"
                    name="American Marxism"
                />
                <BestSellerSingle 
                    image="/assets/img/books/book-17.png"
                    author="Mark R. Levin"
                    likes="120"
                    shares="231"
                    name="American Marxism"
                />
                <BestSellerSingle 
                    image="/assets/img/books/book-17.png"
                    author="Mark R. Levin"
                    likes="120"
                    shares="231"
                    name="American Marxism"
                />
                <BestSellerSingle 
                    image="/assets/img/books/book-17.png"
                    author="Mark R. Levin"
                    likes="120"
                    shares="231"
                    name="American Marxism"
                />
                <BestSellerSingle 
                    image="/assets/img/books/book-17.png"
                    author="Mark R. Levin"
                    likes="120"
                    shares="231"
                    name="American Marxism"
                />
                <BestSellerSingle 
                    image="/assets/img/books/book-17.png"
                    author="Mark R. Levin"
                    likes="120"
                    shares="231"
                    name="American Marxism"
                />
            </div>
        </div>
    )
}

export default BestSellers
