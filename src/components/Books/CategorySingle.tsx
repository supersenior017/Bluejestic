const CategorySingle = ({ image, name, categorystyle }) => {
    return (
        <div className="books-category-single-wrapper">
            <div className="books-category-single-image" style={categorystyle}>
                <img src={image} />
            </div>
            <h4>{name}</h4>
        </div>
    )
}

export default CategorySingle
