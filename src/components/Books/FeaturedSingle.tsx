const FeaturedSingle = ({name, description, image, bookstyle, author}) => {
    return (
        <div className="books-featured-single-wrapper" style={bookstyle}>
            <div className="books-featured-single-image">
                <img src={image} />
            </div>
            <div className="books-featured-single-content">
                <h4>{name}</h4>
                <p className="author">By: <span>{author}</span></p>
                <p className="description">{description}</p>
            </div>
        </div>
    )
}

export default FeaturedSingle
