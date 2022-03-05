const ProductSingle = ({image, likes, shares, productstyle}) => {
    return (
        <div className="fashion-product-single-wrapper" style={productstyle}>
            <div className="product-image-wrapper">
                <img src={image} />
            </div>
            <div className="product-meta-info">
                <p>
                    <img src="/assets/img/fashion/likes.svg" />
                    <span>{likes}k Likes</span>
                </p>
                <p>
                    <img src="/assets/img/fashion/shares.svg" />
                    <span>{shares}k Share</span>
                </p>
            </div>
        </div>
    )
}

export default ProductSingle
