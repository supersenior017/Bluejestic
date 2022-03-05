const BookSingle = ({image, name}) => {
    return (
        <div className="user-profile-books-single">
            <div className="book-image">
                <img src={image} alt="img" />
            </div>
            <div className="book-content">
                <h5><a href="#">{name}</a></h5>
            </div>
        </div>
    )
}

export default BookSingle
