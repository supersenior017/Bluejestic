const BrandSingle = ({image, name}) => {
    return (
        <div className="fashion-brand-single-wrapper">
            <div className="fashion-brand-image">
                <img src={image} />
            </div>
            <div className="fashion-brand-content">
                <h4><a href="#">{name}</a></h4>
            </div>
        </div>
    )
}

export default BrandSingle
