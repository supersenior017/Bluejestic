const PopularBooksSingle = ({name, image, likes, shares, members}) => {
    return (
        <div className="popularbooks-single-wrapper">
            <div className="popularbooks-image">
                <img src={image} alt="image" />
            </div>
            <div className="popularbooks-content">
                <h5><a href="#">{name}</a></h5>
                <p>Members <span>{members}</span>k</p>
                <div className="popularbooks-meta">
                    <p><img src="/assets/img/books/like.svg" alt="image" /> {likes}k Likes</p>
                    <p><img src="/assets/img/books/share.svg" alt="image" /> {shares} Share</p>
                </div>
            </div>
        </div>
    )
}

export default PopularBooksSingle
