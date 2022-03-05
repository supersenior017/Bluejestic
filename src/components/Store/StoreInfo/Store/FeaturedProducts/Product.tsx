const Product = ({image, comments, likes, shares}) => {
    return (
        <div className="store-store-featured-products-product-wrapper">
            <img src={image} />
            <div className="product-info">
                <ul>
                    <li>
                        <img src="/assets/img/store/about/comment-white.svg" />
                        <p>{comments} Comments</p>
                    </li>
                    <li>
                        <img src="/assets/img/store/about/like-white.svg" />
                        <p>{likes} Likes</p>
                    </li>
                    <li>
                        <img src="/assets/img/store/about/share-white.svg" />
                        <p>{shares} Shares</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Product
