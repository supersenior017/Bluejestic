import React from 'react'
import getImageUrl from 'src/utils/getImageUrl'
import { Category } from 'src/types'

const SingleCategory: React.FC<{ category: Category }> = ({ category: { color, image, description, name } }) => {
  return (
    <div className="categories-single-wrapper">
      <div className="category-color" style={{ backgroundColor: color }}></div>
      <div className="category-details">
        <div className="category-image">
          <img src={getImageUrl(image.url)} alt={image.alternativeText} />
        </div>
        <div className="category-desc">
          <p>{description}</p>
          <h5>{name}</h5>
        </div>
      </div>
    </div>
  )
}

export default SingleCategory
