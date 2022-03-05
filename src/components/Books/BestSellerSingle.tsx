const BestSellerSingle = ({name, image, likes, shares, author}) => {
    return (
        <div className="bestseller-single-wrapper">
            <div className="bestseller-image">
                <img src={image} alt="image" />
            </div>
            <div className="bestseller-content">
                <h5><a href="#">{name}</a></h5>
                <p>By: <span>{author}</span></p>
                <div className="bestseller-meta">
                    <p><img src="/assets/img/books/like.svg" alt="image" /> {likes}k Likes</p>
                    <p><img src="/assets/img/books/share.svg" alt="image" /> {shares} Share</p>
                </div>
            </div>
        </div>
    )
}

export default BestSellerSingle
