const Product = ({image, productname, price, discountprice}) => {
    return (
        <div className="store-about-recently-added-products-product-wrapper">
            <img src="/assets/img/store/about/fav.svg" className="whishlist" />
            <div className="product-image">
                <img src={image} />
            </div>
            <div className="product-info">
                <h4>{productname}</h4>
                <div className="product-meta-info">
                    <p className="disc-price">{discountprice}</p>
                    <p className="price">{price}</p>
                    <a href="#" className="btn-purple">Add to cart</a>
                </div>
            </div>
        </div>
    )
}

export default Product
