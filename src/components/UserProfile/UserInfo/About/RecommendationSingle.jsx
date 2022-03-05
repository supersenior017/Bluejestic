const RecommendationSingle = ({ productimage, productname, price, discprice, likes, comments, shares}) => {
    return (
        <div className="user-profile-recommendation-single">
            <div className="product-wrapper">
                <img className="wishlist" src="/assets/img/user-profile/wishlist.svg" />
                <div className="product-image">
                    <img src={productimage} />
                </div>
                <div className="product-name">
                    <a href="#">{productname}</a>
                </div>
                <div className="product-price">
                    <h5>{discprice}</h5>
                    <p>{price}</p>
                </div>
                <div className="product-meta">
                    <div className="product-meta-info">
                        <img src="/assets/img/user-profile/likes.svg" />
                        <p>{likes}k</p>
                    </div>
                    <div className="product-meta-info">
                        <img src="/assets/img/user-profile/comment.svg" />
                        <p>{comments}k</p>
                    </div>
                    <div className="product-meta-info">
                        <img src="/assets/img/user-profile/shares.svg" />
                        <p>{shares}k</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RecommendationSingle
