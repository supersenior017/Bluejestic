const CategorySingle = ({name, image}) => {
    return (
        <div className="fashion-category-single-wrapper">
            <div className="fashion-category-image-wrapper">
                <img src={image} />
            </div>
            <div className="fashion-category-content-wrapper">
                <h4><a href="#">{name}</a></h4>
                <a href="#" className="btn">Get it now</a>
            </div>
        </div>
    )
}

export default CategorySingle
