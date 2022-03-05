const NewProductSingle = ({title, image, description}) => {
    return (
        <div className="fashion-new-product-single-wrapper">
            <div className="fashion-new-product-image">
                <img src={image} />
            </div>
            <div className="fashion-new-product-description">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default NewProductSingle
