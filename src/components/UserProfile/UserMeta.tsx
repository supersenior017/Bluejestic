import React from 'react'
import { User } from 'src/types'
import getImageUrl from 'src/utils/getImageUrl'

const UserMeta: React.FC<{ currentUser: User }> = ({ currentUser: { profileImage, username, address } }) => {
  return (
    <div className="user-profile-meta-wrapper">
      <div className="user-profile-cover-photo">
        <div className="edit-photo">
          <span className="edit-icon">
            <img src="/assets/img/user-profile/edit.svg" />
          </span>
          <p>Edit</p>
        </div>
      </div>
      <div className="user-profile-meta-info">
        <div className="user-avtar-photo">
          <img src={getImageUrl(profileImage.url)} />
        </div>
        <div className="user-info">
          <h4>{username}</h4>
          <p>{address}</p>
        </div>
      </div>
    </div>
  )
}

export default UserMeta
