const BookSingle = ({image, name, author, price, bookstyle}) => {
    return (
        <div className="book-single-wrapper">
            <div className="book-single-image" style={bookstyle}>
                <img src={image} />
            </div>
            <div className="book-single-content">
                <h4><a href="#">{name}</a></h4>
                <p>By: <span>{author}</span></p>
                <p className="price">{price}</p>
            </div>
        </div>
    )
}

export default BookSingle
