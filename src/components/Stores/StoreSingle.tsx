import React from 'react'
import getImageUrl from 'src/utils/getImageUrl'
import { IStore } from 'src/types'

const StoreSingle: React.FC<{ store: IStore }> = ({
  store: { name, description, profileImage, coverImage, location },
}) => {
  return (
    <div className="store-single-wrapper">
      <div
        className="store-cover-photo"
        style={{
          backgroundImage: `url(${getImageUrl(coverImage.url)})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className="store-detail-wrapper">
        <div className="d-flex">
          <div className="store-profile-avtar">
            <img src={getImageUrl(profileImage.url)} alt={profileImage.alternativeText} />
          </div>
          <div className="store-details">
            <h4>{name}</h4>
            <p>{location}</p>
          </div>
          <div className="store-actions"></div>
        </div>
        <div className="store-desc">
          <p>{description}</p>
        </div>
      </div>
      <div className="store-followers">
        <div className="followers">
          <h5>151</h5>
          <p>Followers</p>
        </div>
        <div className="products">
          <h5>10</h5>
          <p>Products</p>
        </div>
      </div>
      <div className="store-btn">
        <a href="#" className="btn-store">
          View Store
        </a>
      </div>
    </div>
  )
}

export default StoreSingle
