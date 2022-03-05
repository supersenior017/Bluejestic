import React from 'react'
import { useAuth } from 'src/utils/auth'

const CoverPhoto = (props) => {
  const { user } = useAuth()
  return (
    <div className="left-sidebar-cover-photo">
      <div className="left-sidebar-profile-photo">
        <img src="assets/img/left-sidebar/profile.png" />
      </div>
      <div className="left-sidebar-user-name">
        {/* <h6>{user.username}</h6> */}
      </div>
    </div>
  )
}

export default CoverPhoto
