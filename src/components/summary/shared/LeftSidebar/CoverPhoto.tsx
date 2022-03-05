import React from 'react'
import { useAuth } from 'src/utils/auth'
// import Image from 'next/image'

const CoverPhoto = ({}) => {
  const { user } = useAuth()
  return (
    <div className="left-sidebar-profile">
      <div className="left-sidebar-profile-photo">
        {/* <Image src={require(`../../../assets/img/summary/user-avtar.png`)} width={100} height={100} />  */}
        <img src="../assets/img/summary/user-avtar.png" width={100} height={100} /> 
      </div>
      <div className="left-sidebar-user-name">
        {/* <h6>{user.username}</h6> */}
        <h6>Vincent Zhang</h6>
      </div>
    </div>
  )
}

export default CoverPhoto
